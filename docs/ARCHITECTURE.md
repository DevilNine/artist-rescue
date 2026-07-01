# Artist Rescue Architecture

```mermaid
graph TB
    subgraph "Renderer Process (Sandboxed)"
        UI["React UI<br/>App.tsx + App.css"]
        API["window.electronAPI<br/>(contextBridge)"]
    end

    subgraph "Preload Script (Isolated)"
        PL["preload.ts<br/>ipcRenderer.invoke()"]
    end

    subgraph "Main Process (Privileged)"
        IPC["IPC Handlers<br/>(validated inputs)"]
        FS["Filesystem Ops<br/>(archiver + adm-zip)"]
        REG["Registry Reader<br/>(powershell)"]
        SVC["Service Restart<br/>(UAC required)"]
    end

    UI -->|"Typed API calls"| API
    API -->|"contextBridge"| PL
    PL -->|"ipcRenderer.invoke"| IPC
    IPC --> FS
    IPC --> REG
    IPC --> SVC

    style UI fill:#1a1630,stroke:#a855f7,color:#f4f0fb
    style API fill:#1a1630,stroke:#a855f7,color:#f4f0fb
    style PL fill:#0f0d1a,stroke:#6b6584,color:#a09bb5
    style IPC fill:#0f0d1a,stroke:#10b981,color:#10b981
    style FS fill:#0f0d1a,stroke:#f59e0b,color:#f59e0b
    style REG fill:#0f0d1a,stroke:#f59e0b,color:#f59e0b
    style SVC fill:#0f0d1a,stroke:#f43f5e,color:#f43f5e
```

## Security Posture
Artist Rescue follows the Principle of Least Privilege:
1. The Renderer Process is strictly isolated (`nodeIntegration: false`, `contextIsolation: true`, `sandbox: true`).
2. The UI cannot access the Node.js filesystem or execute arbitrary code.
3. IPC Handlers in the Main Process strictly validate inputs before interacting with the system.
