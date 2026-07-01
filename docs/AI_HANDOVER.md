# 🤖 AI Handover Guide

> **Objetivo:** Fornecer contexto técnico imediato e instruções de operação para agentes autônomos (IAs) que vierem a assumir a manutenção ou a evolução do **Artist Rescue**.

## 1. Visão Geral da Arquitetura
O projeto utiliza um stack moderno focado em desktop:
- **Engine**: Electron + Node.js
- **Frontend**: React 18, TypeScript, Vite. (Vanilla CSS sem Tailwind, focando na identidade visual DevilNine).
- **Backend (Electron)**: Dividido em `main.ts` (processo privilegiado) e `preload.ts` (ponte segura isolada).
- **Comunicação**: Ocorrendo estritamente via IPC (Inter-Process Communication) onde o Renderer apenas invoca APIs expostas pelo ContextBridge no objeto `window.electronAPI`.

## 2. Padrões de Código e Regras (Crucial para IA)
Ao dar continuidade ao projeto, **siga estritamente** as seguintes regras:
- **DevilNine UI Standard**: O frontend não utiliza frameworks CSS utilitários. Qualquer componente novo deve ser criado usando o Vanilla CSS atual, mantendo as animações, variáveis CSS (ex: `--accent`, `--bg-dark`) e a sensação de *Glassmorphism* (blur e transparências). Cores primárias genéricas são absolutamente proibidas. O design deve causar impacto visual ("wow factor").
- **Segurança Intocável**:
  - Nunca desabilite o `sandbox: true` do Electron.
  - Nunca adicione `nodeIntegration: true`.
  - Sempre valide os dados que chegam do Frontend no `main.ts` (especialmente caminhos de arquivo, para evitar *Path Traversal*).
  - Nunca rode `child_process.exec` com *inputs* diretos do usuário.
- **Proteção do IP**: Ao mexer nas rotinas de build do Vite, nunca remova as configurações de ofuscação do Terser ou os *sourcemaps* desabilitados em produção. A lógica precisa permanecer blindada, especialmente em builds públicas (Regra Global).
- **Idiomas**: Ao adicionar novos textos à interface, lembre-se de adicionar as chaves de tradução nos arquivos JSON de `i18n` (Inglês, Espanhol e Português do Brasil).

## 3. Principais Desafios Futuros (O que melhorar)
Se você (Agente de IA) for incubido de criar uma nova feature, estas são as maiores prioridades pendentes no roadmap de desenvolvimento:
1. **Adicionar novos softwares de Arte**: Novos aplicativos (ex: Paint Tool SAI, Krita, Corel Painter, Blender) exigem que você investigue o registro do Windows, diretórios `%APPDATA%`, `%LOCALAPPDATA%` ou de Documentos para mapear onde os *brushes* e configurações são fisicamente guardados. Em seguida, adicione as rotas e fallbacks no método `getDynamicPaths` do `main.ts`.
2. **Abstração Cross-Platform**: O código atual é focado no Windows (`Start-Process`, caminhos engessados como `APPDATA`, busca no Steam via Registro Windows). Para um porte futuro ao macOS/Linux, essa camada precisaria ser totalmente abstraída em módulos independentes da plataforma.
3. **Restauração Granular**: Hoje, o arquivo `.zip` é lido e extraído por completo. Uma feature arquitetural de alto valor seria ler a árvore do ZIP e devolvê-la ao React, permitindo que o usuário assinale: "Quero restaurar apenas os Pincéis, mas ignorar atalhos de teclado". Isso envolveria mudanças severas no backend (leitura em buffer contínua) e no frontend.

## 4. Comandos de Operação Diária
Se você precisar testar, compilar ou verificar o código em seu loop iterativo:
- **Modo Desenvolvimento**: `npm run dev` (Inicia o servidor Vite e o Electron acoplado, com Hot Reload).
- **Modo Produção (Build)**: `npm run build` (Aciona o compilador TypeScript, o Rollup do Vite e o Terser). Use este comando sempre que precisar testar a eficácia da ofuscação ESM.
- **Empacotamento (Installer)**: `npm run dist` (Gera o instalador `.exe` usando `electron-builder` - atenção ao EV Code Signing que exige um token de hardware em produção).
- **Linting**: `npm run lint` (Usa o `oxlint` para checagem super-rápida do AST de TypeScript).

---

*Fim do Handover. Você tem autonomia para modificar o código dentro das guidelines acima. Boa sorte e bom desenvolvimento.*
