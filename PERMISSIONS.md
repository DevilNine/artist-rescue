# Application Permissions & Anti-Virus Flags

Artist Rescue performs system-level operations to automate the backup and repair of drawing applications. Because of this, certain heuristic-based Anti-Virus software may flag the application.

This document serves as a technical explanation of every sensitive operation.

| Operation | Why it might be flagged | Technical Justification |
|---|---|---|
| `Start-Process powershell ... -Verb RunAs` | Flagged as privilege escalation | **Required** to restart tablet services (Wacom, Huion, etc.). The prompt requires explicit UAC approval from the user. We don't bypass security. |
| Read Windows Registry (`HKLM`) | Flagged as reconnaissance | **Required** to detect installed tablet driver versions. We only query `HKLM\Software\Microsoft\Windows\CurrentVersion\Uninstall\*` and `Wow6432Node`. |
| Write to `%APPDATA%` / `%LOCALAPPDATA%` | Flagged as ransomware / malware | **Required** for the Restore operation. Artist Rescue unpacks the user's own `.zip` backup into the respective software's configuration folders to restore their brushes and settings. |
| Read from Documents / `%APPDATA%` | Flagged as data exfiltration | **Required** for the Backup operation. Data is only copied into a local `.zip` file on the user's disk. No data is sent over the internet (the app is fully offline). |

If you encounter a false positive, please submit the `.exe` to your Anti-Virus vendor for analysis, as the source code clearly demonstrates no malicious intent.
