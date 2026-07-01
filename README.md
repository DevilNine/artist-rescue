<div align="center">
  <h1>🎨 Artist Rescue</h1>
  <p><strong>The ultimate backup utility for digital artists.</strong></p>

  ![License](https://img.shields.io/badge/License-Proprietary-blue.svg)
  ![Platform](https://img.shields.io/badge/Platform-Windows-0078D6.svg)
  ![Status](https://img.shields.io/badge/Status-Production--Ready-success.svg)
  [![Made by](https://img.shields.io/badge/Made_by-DevilNine-8b5cf6.svg)](https://github.com/DevilNine)
</div>

<br />

> Artist Rescue é um utilitário desktop deslumbrante, premium e extremamente rápido. Foi concebido para garantir o backup seguro e a restauração de configurações de software, *brushes* customizados, texturas e arquivos essenciais de artistas digitais e modeladores 3D.

---

## 📖 História e Desenvolvimento

O **Artist Rescue** nasceu da necessidade constante e caótica que artistas enfrentam ao perder seus ativos digitais. Pincéis organizados minuciosamente, atalhos de teclado e preferências de interface são frequentemente perdidos durante formatações de PC, migração de computadores ou corrupções aleatórias de software.

**Desenvolvimento via IA:** O projeto foi criado, desde a sua fundação até a versão atual, através da utilização de Inteligência Artificial de ponta (agentes de programação autônomos). O desenvolvimento se deu de forma iterativa, focando em três grandes pilares ditados pelo criador:
1. **Padrão DevilNine de UI**: O frontend precisava ter um "Wow Factor", algo muito superior à estética genérica encontrada em utilitários de backup. O resultado foi um visual *Glassmorphism* fluido, responsivo, sem frameworks mastigados como TailwindCSS. Apenas React e CSS puro com maestria visual.
2. **Arquitetura Desktop Segura**: Construído sob a plataforma Electron, todo o ciclo de comunicação ocorre via `ContextBridge` (IPC seguro). O Frontend não possui poder destrutivo e não pode acessar o sistema de arquivos diretamente.
3. **Hardening Rigoroso**: O aplicativo passou por bateria de auditorias e refatorações de segurança, fechando brechas de *Path Traversal* (onde um ZIP malicioso poderia subscrever a pasta `/Windows/System32`), removendo DevTools em produção, ofuscando ativamente toda lógica autoral (via Terser com `toplevel: true`) e injetando Content-Security-Policy estritas.

---

## ⚖️ Avaliação Técnica

### 🟢 Pontos Altos (Strengths)
- **UX Impecável e Multilíngue**: Interface imersiva traduzida de forma limpa para **Inglês, Português do Brasil e Espanhol**. Micro-interações agradáveis guiam o usuário através da jornada de restauração.
- **Detecção Avançada e Dinâmica**: Em vez de apenas olhar para caminhos óbvios, o motor backend varre bibliotecas Steam inteiras (através de `libraryfolders.vdf` no Registro do Windows) buscando apps exóticos, como o VTube Studio, em diretórios não padronizados.
- **Restauração e Compressão Seguras**: O sistema remove de forma proativa pastas inúteis (Caches, Dumps, Logs) durante o empacotamento, economizando gigabytes de armazenamento. Na restauração, utiliza loops individuais com tratamentos (`try/catch`); se um *brush* do Photoshop estiver travado em execução, os outros milhares de arquivos serão restaurados com sucesso sem estourar o programa.
- **Offline & Seguro**: Totalmente independente de comunicação com a internet (sem telemetria, zero requisições externas).
- **Enterprise-Ready Anti-Piracy**: Lógica base ofuscada.

### 🔴 Pontos Fracos (Weaknesses)
- **Peso do Aplicativo (Bloatware Node)**: Como toda aplicação baseada em Electron (que incorpora um motor Node.js e Chromium inteiro), o instalador final será consideravelmente pesado (cerca de 80~150MB) para um utilitário que não precisa de todo esse poder em segundo plano.
- **Vendor e OS Lock-In**: A aplicação está altamente engessada e dependente do **Windows**. Diversas ferramentas de sistema como `Start-Process`, acessos à chave do Registro e lógicas em caminhos específicos limitam o porte rápido para artistas que utilizam **MacOS** ou Linux.
- **Mapeamento Explícito**: A identificação dos caminhos onde softwares de terceiros (Clip Studio, Photoshop, FireAlpaca) guardam *brushes* depende do `main.ts` ter conhecimento absoluto sobre tais empresas. Se o "Clip Studio Paint" resolver mudar sua estrutura interna amanhã em um update, a extração pode falhar, dependendo unicamente de um patch contínuo por parte do nosso desenvolvimento.

---

## 🤖 Guia de Continuidade (Para IAs)

O **Artist Rescue** foi construído de IA para IA. Se você é um agente autônomo prosseguindo com atualizações, criação de novos *plugins* de software, ou reformulando designs, leia o documento oficial de *Handover* antes de escrever uma linha de código:

👉 **[docs/AI_HANDOVER.md](docs/AI_HANDOVER.md)**

Nele constam regras expressas de arquitetura, padrões CSS exigidos, comandos vitais do pacote, e os maiores desafios programáticos que te aguardam ao implementar restauração parcial ou migrações cross-platform.

---

## 🔒 Diretrizes de Publicação (Regra Global DevilNine)

> **ATENÇÃO:** O repositório local contém lógica proprietária valiosa na pasta `src` e `electron`.

1. O projeto já está configurado no `.gitignore` para ignorar esses arquivos valiosos.
2. Ao realizar o deploy ou exibir este repositório no GitHub para o público, o fará usando apenas pastas de `dist/`, exibindo sua transparência funcional através de arquivos compilados, mantendo em segredo a lógica-ouro. Consulte o `SECURITY.md`.

---

<div align="center">
  <h3>☕ Support the Developer</h3>
  <a href="https://ko-fi.com/devilnine" target="_blank"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support on Ko-fi" height="40" /></a>
  <p><br><em>Made for artists, by DevilNine.</em></p>
</div>
