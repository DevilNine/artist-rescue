const fs = require('fs')
const path = require('path')
const os = require('os')
const archiverLib = require('archiver')
const archiver = archiverLib.default || archiverLib
const AdmZip = require('adm-zip')

async function runSmokeTest() {
  console.log("=== STARTING SMOKE TEST ===")
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'smoke_test-'))
  const sourceAppDir = path.join(tempDir, 'FakeApp', 'Settings')
  const sourceProjectFile = path.join(tempDir, 'my_art.psd')
  const backupZipPath = path.join(tempDir, 'backup.zip')
  
  // 1. Setup mock data
  fs.mkdirSync(sourceAppDir, { recursive: true })
  fs.writeFileSync(path.join(sourceAppDir, 'config.json'), '{"brush":"round"}')
  fs.writeFileSync(sourceProjectFile, 'fake psd data')
  console.log("[OK] Mock data created")

  // 2. Test Backup (Archiver)
  await new Promise((resolve, reject) => {
    const output = fs.createWriteStream(backupZipPath)
    const archive = new archiverLib.ZipArchive({ zlib: { level: 9 } })
    const restoreMap = {}

    output.on('close', () => {
      console.log(`[OK] Backup completed. Zip size: ${archive.pointer()} bytes`)
      resolve()
    })
    archive.on('error', reject)
    archive.pipe(output)

    archive.directory(sourceAppDir, 'Apps/FakeApp/Settings')
    restoreMap['Apps/FakeApp/Settings'] = sourceAppDir

    archive.file(sourceProjectFile, { name: 'Projects/my_art.psd' })
    restoreMap['Projects/my_art.psd'] = sourceProjectFile

    archive.append(JSON.stringify(restoreMap, null, 2), { name: 'restore_map.json' })
    archive.finalize()
  })

  // 3. Test Restore (AdmZip)
  // Let's change original files to simulate loss or overwrite
  fs.writeFileSync(path.join(sourceAppDir, 'config.json'), '{"brush":"wrong"}')
  fs.rmSync(sourceProjectFile)

  console.log("[INFO] Original files tampered for restore test")

  const zip = new AdmZip(backupZipPath)
  const zipEntries = zip.getEntries()
  const mapEntry = zipEntries.find(e => e.entryName === 'restore_map.json')
  
  if (!mapEntry) throw new Error("No restore_map.json")
  
  const restoreMap = JSON.parse(zip.readAsText(mapEntry))
  const extractTempDir = path.join(tempDir, 'extracted')
  zip.extractAllTo(extractTempDir, true)

  for (const [internalPath, destPath] of Object.entries(restoreMap)) {
    const sourcePath = path.join(extractTempDir, internalPath)
    if (fs.existsSync(sourcePath)) {
      if (fs.statSync(sourcePath).isDirectory()) {
         fs.cpSync(sourcePath, destPath, { recursive: true, force: true })
      } else {
         fs.copyFileSync(sourcePath, destPath)
      }
    }
  }
  console.log("[OK] Restore completed")

  // 4. Verify
  const restoredConfig = fs.readFileSync(path.join(sourceAppDir, 'config.json'), 'utf8')
  if (restoredConfig !== '{"brush":"round"}') throw new Error("Config not restored properly")
  
  if (!fs.existsSync(sourceProjectFile)) throw new Error("Project file not restored")
  const restoredProject = fs.readFileSync(sourceProjectFile, 'utf8')
  if (restoredProject !== 'fake psd data') throw new Error("Project content wrong")

  console.log("[OK] Verification passed! Archiver and AdmZip working perfectly.")
  console.log("=== SMOKE TEST PASSED ===")
  
  // Clean up
  fs.rmSync(tempDir, { recursive: true, force: true })
}

runSmokeTest().catch(console.error)
