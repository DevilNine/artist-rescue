# Security Policy

## What Artist Rescue Accesses and Why

| Resource | Why | Evidence |
|---|---|---|
| `%APPDATA%` / `%LOCALAPPDATA%` | Read/write configs of drawing apps | Only touches known subfolders (CELSYS, Medibang, etc.) |
| Windows Registry (read-only) | Detect tablet driver version | Only reads `HKLM\...\Uninstall\*` — standard query |
| `child_process` (elevated) | Restart tablet services | Only executed with explicit UAC prompt — user must approve |
| Filesystem (zip/unzip) | Backup and restore | Uses archiver + adm-zip — both are audited npm packages |

## What Artist Rescue Does NOT Do
- ❌ No internet connections (fully offline)
- ❌ No telemetry or analytics
- ❌ No data sent to any server
- ❌ No background processes after closing
- ❌ No modification of system files
- ❌ No access to browser data, passwords, or documents outside art folders

## Code Signing
This application is signed with an EV Code Signing certificate to establish trust with Windows SmartScreen and Anti-Virus solutions.
