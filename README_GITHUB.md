<div align="center">

![Artist Rescue Banner](https://via.placeholder.com/1200x300/8b5cf6/ffffff?text=Artist+Rescue)

# 🎨 Artist Rescue

### The Ultimate Backup & Restore Solution for Digital Artists

[![License](https://img.shields.io/badge/License-Proprietary-8b5cf6.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows-0078D6.svg?logo=windows)](https://www.microsoft.com/windows)
[![Version](https://img.shields.io/badge/Version-3.1.0-success.svg)](https://github.com/DevilNine/artist-rescue/releases)
[![Security](https://img.shields.io/badge/Security-A+-brightgreen.svg)](docs/SECURITY_AUDIT_REPORT.md)
[![Stars](https://img.shields.io/github/stars/DevilNine/artist-rescue?style=social)](https://github.com/DevilNine/artist-rescue/stargazers)

[📥 Download](#-download) • [✨ Features](#-features) • [🎯 Supported Apps](#-supported-applications) • [🛡️ Security](#-security) • [📖 Documentation](#-documentation)

---

*Never lose your brushes, shortcuts, or settings again.*

</div>

---

## 🌟 Why Artist Rescue?

Have you ever experienced the **horror** of:
- 💔 Losing custom brushes after a PC format
- 😱 Accidentally deleting Photoshop settings
- 😤 Spending hours recreating keyboard shortcuts
- 🔥 Hardware failure destroying years of presets
- 🚚 Migrating to a new computer and starting from scratch

**Artist Rescue** was built to solve this **exact pain point** for digital artists, 3D modelers, and creative professionals.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Smart Detection
- **Automatic discovery** of installed art software
- **Dynamic path resolution** (even Steam libraries!)
- **Project file scanner** (finds scattered .psd, .clip, .kra)
- **Version detection** for update checks

</td>
<td width="50%">

### 🔒 Enterprise-Grade Security
- **HMAC signature** validation
- **Path traversal protection**
- **Sandboxed architecture** (Electron best practices)
- **Zero telemetry** (100% offline)

</td>
</tr>
<tr>
<td>

### ⚡ Lightning Fast
- **Intelligent compression** (auto-excludes cache/logs)
- **Multi-threaded** backup/restore
- **Incremental restore** (continues on errors)
- **Sub-second startup**

</td>
<td>

### 🌍 Multilingual
- 🇺🇸 English
- 🇧🇷 Português do Brasil
- 🇪🇸 Español
- *(More languages coming soon)*

</td>
</tr>
</table>

---

## 🎯 Supported Applications

<div align="center">

| Application | Brushes | Settings | Shortcuts | Projects |
|-------------|---------|----------|-----------|----------|
| 🎨 **Adobe Photoshop** | ✅ | ✅ | ✅ | ✅ (.psd) |
| 🖌️ **Clip Studio Paint** | ✅ | ✅ | ✅ | ✅ (.clip) |
| 🖼️ **MediBang Paint Pro** | ✅ | ✅ | ✅ | ✅ (.mdp) |
| 🔥 **FireAlpaca** | ✅ | ✅ | ✅ | ✅ |
| 🦊 **Krita** | ✅ | ✅ | ✅ | ✅ (.kra) |
| 📚 **JUMP PAINT** | ✅ | ✅ | ✅ | ✅ |
| 👤 **VRoid Studio** | ✅ | ✅ | — | ✅ (.vroid) |
| 📹 **VTube Studio** | ✅ | ✅ | — | — |

</div>

> **Want more apps?** [Open an issue](https://github.com/DevilNine/artist-rescue/issues/new?template=app-request.md) with your favorite software!

---

## 📸 Screenshots

<div align="center">

### 🎨 Beautiful Glassmorphism UI

![Dashboard](https://via.placeholder.com/800x500/1a1625/ffffff?text=Dashboard+Preview)

*Main dashboard with installed apps detection*

---

![Backup Process](https://via.placeholder.com/800x500/1a1625/ffffff?text=Backup+In+Progress)

*Smart backup with real-time progress*

---

![Restore Success](https://via.placeholder.com/800x500/1a1625/ffffff?text=Restore+Complete)

*One-click restore with signature validation*

</div>

---

## 📥 Download

<div align="center">

### Latest Release: v3.1.0 (June 2026)

<table>
<tr>
<th>📦 Installer</th>
<th>🚀 Portable</th>
</tr>
<tr>
<td align="center">
<b>Artist-Rescue-Setup-3.1.0.exe</b><br>
<sub>Full installer with auto-updates</sub><br>
<a href="https://github.com/DevilNine/artist-rescue/releases/download/v3.1.0/Artist-Rescue-Setup-3.1.0.exe">
<img src="https://img.shields.io/badge/Download-Installer-8b5cf6?style=for-the-badge&logo=windows" alt="Download Installer">
</a><br>
<sub>~85 MB</sub>
</td>
<td align="center">
<b>Artist-Rescue-Portable-3.1.0.exe</b><br>
<sub>Single .exe, no installation required</sub><br>
<a href="https://github.com/DevilNine/artist-rescue/releases/download/v3.1.0/Artist-Rescue-Portable-3.1.0.exe">
<img src="https://img.shields.io/badge/Download-Portable-10b981?style=for-the-badge&logo=rocket" alt="Download Portable">
</a><br>
<sub>~90 MB</sub>
</td>
</tr>
</table>

### System Requirements

| Requirement | Specification |
|-------------|---------------|
| **OS** | Windows 10/11 (64-bit) |
| **RAM** | 4 GB minimum |
| **Disk** | 200 MB free space |
| **Runtime** | Auto-detected & installed |

</div>

---

## 🚀 Quick Start

### Option 1: Installer (Recommended)

1. Download `Artist-Rescue-Setup-3.1.0.exe`
2. Run the installer
3. Launch **Artist Rescue** from Start Menu
4. Click **"Scan Apps"** to detect your software
5. Select what to backup → **Start Backup**

### Option 2: Portable

1. Download `Artist-Rescue-Portable-3.1.0.exe`
2. Place it anywhere (USB drive, Desktop, etc.)
3. Double-click to run
4. No installation, no traces left behind!

### First Backup

```
1. Click "Backup & Secure" in sidebar
2. Check the apps you want to backup
3. Include "Scattered Projects" if you have .psd/.clip files everywhere
4. Click "Start Backup"
5. Save the .zip file somewhere safe (external drive, cloud, etc.)
```

### Restore After Disaster

```
1. Install Artist Rescue on new/formatted PC
2. Click "Restore Files" in sidebar
3. Select your backup .zip
4. Click "Restore Now"
5. Done! Your settings are back exactly where they belong
```

---

## 🛡️ Security

Artist Rescue takes security **seriously**:

<table>
<tr>
<td width="50%">

### ✅ What We Do
- ✅ **100% Offline** (no internet connection)
- ✅ **Zero telemetry** (no tracking)
- ✅ **Code-signed** installer (verified publisher)
- ✅ **HMAC signatures** (detect tampering)
- ✅ **Sandboxed** (Electron best practices)
- ✅ **Path validation** (prevent traversal attacks)
- ✅ **Open auditable** (TypeScript source)

</td>
<td width="50%">

### ❌ What We Don't Do
- ❌ No data collection
- ❌ No cloud uploads (unless you choose)
- ❌ No background processes
- ❌ No system file modification
- ❌ No registry pollution
- ❌ No auto-updates without consent
- ❌ No ads or tracking

</td>
</tr>
</table>

### Security Audit

Our latest audit shows:

```
🛡️ Security Score: 9.2/10 (Excellent)
✅ 0 Critical Vulnerabilities
✅ 0 High Severity Issues
✅ Path Traversal Protected
✅ Command Injection Protected
✅ CSP Enabled
```

[📄 Read Full Security Audit](docs/SECURITY_AUDIT_REPORT.md)

---

## 🎯 Use Cases

### 1. **PC Format/Upgrade** 🖥️
Backing up before formatting? Restore everything in 2 clicks after Windows reinstall.

### 2. **Multi-PC Workflow** 💼
Work from home + office? Sync your settings between machines with a USB backup.

### 3. **Disaster Recovery** 🔥
Hardware failure? Restore your entire creative workflow from your last backup.

### 4. **Testing New Software** 🧪
Experiment with beta versions without fear — rollback anytime.

### 5. **Team Onboarding** 👥
Share your optimized workspace setup with new team members.

---

## 📖 Documentation

<table>
<tr>
<td>

### For Users
- [📘 User Guide](docs/USER_GUIDE.md)
- [❓ FAQ](docs/FAQ.md)
- [🐛 Troubleshooting](docs/TROUBLESHOOTING.md)
- [🔒 Security Policy](SECURITY.md)

</td>
<td>

### For Developers
- [🤖 AI Handover](docs/AI_HANDOVER.md)
- [🔧 Build Instructions](docs/BUILD.md)
- [🛡️ Security Audit](docs/SECURITY_AUDIT_REPORT.md)
- [📝 Changelog](CHANGELOG.md)

</td>
</tr>
</table>

---

## 🏗️ Architecture

<div align="center">

```
┌─────────────────────────────────────┐
│         React Frontend              │
│    (Glassmorphism UI + i18n)        │
└─────────────┬───────────────────────┘
              │ IPC (ContextBridge)
┌─────────────▼───────────────────────┐
│      Electron Main Process          │
│  (Sandboxed, No Node Integration)   │
└─────────────┬───────────────────────┘
              │
      ┌───────┴────────┬──────────────┐
      ▼                ▼              ▼
┌──────────┐   ┌──────────┐   ┌──────────┐
│ Archiver │   │ AdmZip   │   │   fs     │
│ (Backup) │   │(Restore) │   │ (Scan)   │
└──────────┘   └──────────┘   └──────────┘
```

</div>

**Stack:**
- ⚛️ React 18 + TypeScript
- ⚡ Vite 6 (Fast build)
- 🖥️ Electron 33 (Desktop)
- 🗜️ Archiver + AdmZip (Compression)
- 🌍 i18next (Internationalization)

---

## 🤝 Contributing

We welcome contributions! But please note:

- **Source code** is proprietary (see [LICENSE](LICENSE))
- **Bug reports** and **feature requests** are welcome
- **Translations** are especially appreciated
- **App support requests** help us prioritize

### How to Contribute

1. 🐛 [Report a bug](https://github.com/DevilNine/artist-rescue/issues/new?template=bug-report.md)
2. 💡 [Request a feature](https://github.com/DevilNine/artist-rescue/issues/new?template=feature-request.md)
3. 🎨 [Request app support](https://github.com/DevilNine/artist-rescue/issues/new?template=app-request.md)
4. 🌍 [Submit a translation](https://github.com/DevilNine/artist-rescue/issues/new?template=translation.md)

---

## 🌟 Hall of Fame

### Top Contributors

<div align="center">

<table>
<tr>
<td align="center">
<a href="https://github.com/DevilNine">
<img src="https://github.com/DevilNine.png" width="100px;" alt="DevilNine"/><br />
<sub><b>DevilNine</b></sub><br />
<sub>Creator & Maintainer</sub>
</a>
</td>
<td align="center">
<sub><b>Your Name Here?</b></sub><br />
<sub>First contributor!</sub>
</a>
</td>
</tr>
</table>

</div>

### Special Thanks

- 🎨 **Artists** who tested beta versions
- 🌍 **Translators** for multilingual support
- 🛡️ **Security researchers** for responsible disclosure
- ⭐ **Stargazers** who believe in this project

---

## 💖 Support the Project

If **Artist Rescue** saved your workflow, consider supporting development:

<div align="center">

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20Development-FF5E5B?style=for-the-badge&logo=ko-fi)](https://ko-fi.com/devilnine)
[![GitHub Sponsor](https://img.shields.io/badge/GitHub-Sponsor-EA4AAA?style=for-the-badge&logo=github)](https://github.com/sponsors/DevilNine)

### Why Support?

- 🚀 **Faster development** of new features
- 🎨 **More app support** (Blender, Krita, SAI, etc.)
- 🌍 **Better translations**
- 🛡️ **Regular security audits**
- ☁️ **Cloud backup** integration (optional)

</div>

---

## 📊 Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/DevilNine/artist-rescue?style=social)
![GitHub Forks](https://img.shields.io/github/forks/DevilNine/artist-rescue?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/DevilNine/artist-rescue?style=social)

![Downloads](https://img.shields.io/github/downloads/DevilNine/artist-rescue/total?style=flat-square&color=brightgreen)
![License](https://img.shields.io/badge/license-Proprietary-blue?style=flat-square)
![Version](https://img.shields.io/github/v/release/DevilNine/artist-rescue?style=flat-square)

</div>

---

## 🗺️ Roadmap

### ✅ v3.1.0 (Current)
- ✅ Windows 10/11 support
- ✅ 8 major art applications
- ✅ HMAC signature validation
- ✅ Multilingual (EN/PT/ES)
- ✅ Security audit passed (9.2/10)

### 🚧 v3.2.0 (Q3 2026)
- [ ] Blender support
- [ ] Krita extended support
- [ ] Incremental backups
- [ ] Cloud backup integration (optional)
- [ ] Scheduled auto-backups

### 🔮 v4.0.0 (2027)
- [ ] macOS support
- [ ] Linux support
- [ ] Team sync features
- [ ] Plugin system
- [ ] AI-powered recovery suggestions

[View full roadmap →](docs/ROADMAP.md)

---

## 📜 License

**Artist Rescue** is proprietary software.

- ✅ **Free to use** for personal and commercial projects
- ✅ **Free updates** for life
- ❌ **Source code** is not open source
- ❌ **Redistribution** is not permitted

See [LICENSE](LICENSE) for details.

---

## ⚠️ Disclaimer

**Artist Rescue** creates backups of your files but is not responsible for:
- ❌ Data loss due to corrupted backups
- ❌ Hardware failures
- ❌ User error (deleting backups)

**Always maintain multiple backups** (3-2-1 rule: 3 copies, 2 media types, 1 offsite).

---

## 📞 Contact

<div align="center">

### Need Help?

- 📧 **Email:** support@artistrescue.app
- 💬 **Discord:** [Join Community](https://discord.gg/artistrescue)
- 🐦 **Twitter:** [@ArtistRescue](https://twitter.com/artistrescue)
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/DevilNine/artist-rescue/issues)

</div>

---

## 🎉 Final Words

**Artist Rescue** was born from frustration.

I lost **500+ custom brushes** after a PC format. Hours of work vanished.

So I built this tool to **ensure no artist ever experiences that pain again**.

If this tool saves your workflow even **once**, it's worth it.

---

<div align="center">

**Made with 💜 by artists, for artists.**

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=for-the-badge)](https://github.com/DevilNine/artist-rescue/stargazers)

*Help other artists discover this tool by starring the repo!*

---

**[⬆ Back to Top](#-artist-rescue)**

</div>
