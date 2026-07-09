<div align="center">
  <img src="public/icon.svg" width="120" alt="Artist Rescue Logo">
  <h1>Artist Rescue</h1>
  <p><b>The complete backup, recovery and maintenance toolkit for digital artists.</b></p>

  [![Version](https://img.shields.io/badge/version-4.0.0-8b7aff.svg?style=flat-square)](#)
  [![Platform](https://img.shields.io/badge/platform-Windows%2010%2B-8b7aff.svg?style=flat-square)](#)
  [![License](https://img.shields.io/badge/license-Proprietary-fb7185.svg?style=flat-square)](#)

  [🇧🇷 Leia em Português (pt-BR)](README-ptBR.md)
</div>

<br>

**Artist Rescue** is a specialized desktop application that protects an entire creative workspace and keeps your tools running. It backs up your brushes, workspaces and preferences with cryptographic integrity, finds lost project files anywhere on your drives, keeps your art apps updated, and repairs the most common tablet and system problems — all from one clean, modern interface.

Built for **Windows 10 and 11**, with automatic detection that works across app versions.

---

## ✨ Everything it does

### 🛡️ Backup & Restore (corruption-proof)
- **Per-file SHA-256 manifest** — every file is hashed and recorded inside the archive.
- **Verified writes** — the backup is written to a temporary `.partial` file and only promoted to the final `.zip` after a full read-back verification of every entry. A corrupt backup is never produced.
- **Safe in-place restore** — each file's hash is checked *before* being written and *again after*, overwriting the existing version seamlessly. Corrupted entries are skipped, never restored.
- **Legacy compatibility** — older v1 backups remain fully restorable.
- **Backup history** — the last 50 backups are tracked, with quick re-selection and a "file moved/deleted" indicator.

### 🔍 Integrity Verification
- Verify any backup **without restoring it**.
- Detects corrupted or missing entries inside the archive.
- Compares the archive against your **current disk state** (identical / changed / missing).

### 🎨 Version-independent App Detection
Detection combines the **Windows uninstall registry** (all hives), **wildcard path expansion** (e.g. `Adobe Photoshop *` matches any year), **Steam library discovery** and **executable probing** — so it keeps working across updates and reinstalls. Detected settings folders are sized so you know exactly what will be backed up.

**Supported software (25+):**
Adobe Photoshop · CLIP STUDIO PAINT · Krita · GIMP · MediBang Paint Pro · JUMP PAINT · FireAlpaca · Paint Tool SAI 1 & 2 · Aseprite · Paint.NET · Inkscape · Blender · MyPaint · Pencil2D · OpenToonz · Affinity Photo · Affinity Designer · Corel Painter · Rebelle · ArtRage · Paintstorm Studio · PureRef · Live2D Cubism · VRoid Studio · VTube Studio.

### 🗂️ Project Finder
- Search every drive for lost project files by partial name.
- **Accent-insensitive** matching (finds `comissão` from `comissao`).
- Scans user folders, **OneDrive** mirrors and secondary drives.

### 📑 Duplicate Finder
- Finds identical project files by **content hash** — not just by name.
- Shows how much space you can reclaim.

### ⬆️ Update Center (winget-powered)
- **Real installed versions** read from your system — nothing hardcoded.
- Free apps update in place via the official Windows Package Manager (winget); paid apps are checked but left to their vendor.
- Fully guarded: if winget is missing it tells you how to enable it, and no operation can crash the app.

### 🌐 Community & Resources
- A curated, categorized library: **brushes, textures, 3D models, palettes, fonts and learning** — both official and community-made.
- **Local asset detection** — finds brush packs and materials already installed inside your art apps.

### 🩹 Fixes & Maintenance (verified & reversible)
- **Restart tablet services** — every detected pen-tablet service across vendors.
- **Restart Windows Ink** — fixes stuck pressure and ghost touches.
- **Re-cycle tablet devices** — disables/re-enables the pen device (like replugging it).
- **Restart Explorer** — clears stuck cursors and a frozen taskbar.
- **Rebuild font cache** — fixes missing or garbled fonts in art apps.
- **System File Checker** — launches `sfc /scannow` elevated.
- **Clear app caches** — safely deletes only known cache folders.

### ✒️ Enhanced Tablet Detection
Detects **Wacom, Huion, XP-Pen, Gaomon, VEIKK, UGEE, Parblo, Artisul, XenceLabs and Genius** through three sources at once: installed driver suites (registry), Windows services (with running state) and physically connected pen/digitizer devices (PnP).

### 🧪 Real Integrity Check
Inspects actual files — missing executables, zero-byte settings, and unparsable JSON/XML configs — and reports concrete problems per app (not a fake progress bar).

### 🩺 System Compatibility & Dependencies
- Reports your **Windows 10/11 build**, Windows Ink status and package-manager availability.
- Scans and installs critical components: **Visual C++ Redistributable, WebView2 Runtime, .NET Framework**.

### 🌍 Multi-language
Full **English, Português (BR) and Español** interface, switchable at any time.

---

## 🚀 Download & Installation

Download the latest build from the **[Releases](../../tree/master/releases)** folder.

1. Choose the **Setup Installer** (recommended) or the **Portable** version.
2. Run the application.
3. Your installed art software is detected automatically.

## 🔒 Security

Every command runs through hidden, time-limited PowerShell (compatible with all Windows 10+ builds). Backups are validated against path-traversal and ZIP-structure corruption, restore targets are restricted to your user and Steam folders, and external links are limited to HTTPS.

---
<div align="center">
  <b>Made for artists, by DevilNine</b><br>
  <a href="https://github.com/DevilNine" target="_blank">github.com/DevilNine</a><br><br>
  <a href="https://ko-fi.com/devilnine" target="_blank"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support on Ko-fi"></a>
</div>
