# Sistema de Agendamento

Um projeto web que permite agendar horários de forma dinâmica, com gerenciamento de disponibilidade em tempo real.  
O sistema foi desenvolvido com foco em **organização, interatividade e integração com API REST simulada via JSON Server**, proporcionando uma experiência de uso fluida e intuitiva.

![alt text](src/assets/hairday-screenshot.png)

## 📋 Funcionalidades

- **Seleção de data**  
  O usuário escolhe uma data através de um campo de calendário (`input type="date"`).

- **Exibição de horários disponíveis**  
  Os horários são carregados dinamicamente a partir de um arquivo JavaScript (`opening-hours.js`), que define os períodos de funcionamento.  
  O sistema bloqueia automaticamente horários passados e já agendados.

- **Criação de agendamento**  
  O usuário pode selecionar um horário disponível, inserir seu nome e confirmar o agendamento.  
  As informações são salvas na API simulada (`JSON Server`).

- **Cancelamento de agendamento**  
  É possível remover um agendamento existente. O sistema atualiza automaticamente a lista de horários disponíveis.

- **Atualização dinâmica**  
  As informações da tela são atualizadas em tempo real, sem necessidade de recarregar a página.

---

## ⚙️ Tecnologias Utilizadas

### **Frontend**

- **HTML5** – Estrutura semântica e limpa, com uso de `<input type="date">` e listas dinâmicas.
- **CSS3** – Estilização responsiva e organizada, seguindo boas práticas de design moderno.
- **JavaScript (ES6+)** –
  - Uso de módulos (`import/export`)
  - Manipulação direta do DOM
  - Funções assíncronas (`async/await`)
  - Consumo de API REST com `fetch()`
  - Controle de datas e horários com **Day.js**

### **Backend (simulado)**

- **JSON Server** – Cria uma API REST fake a partir de um arquivo JSON, simulando operações de:
  - `GET` – listar agendamentos
  - `POST` – criar novo agendamento
  - `DELETE` – remover agendamento

### **Ferramentas de Desenvolvimento**

- **Node.js** – Ambiente de execução JavaScript.
- **Webpack** – Empacotamento e otimização do código em ambiente de desenvolvimento.
- **Babel** – Transpilação de código ES6+ para compatibilidade com navegadores.

---

## 🌐 Deploy no GitHub Pages

O projeto está disponível publicamente através do **GitHub Pages**.

Durante o build, todos os arquivos são gerados na pasta `dist/` pelo **Webpack**, incluindo o `index.html`, o JavaScript empacotado e o CSS processado pelos loaders.  
Por padrão, o GitHub Pages tenta servir o arquivo `index.html` da **raiz do repositório**, mas neste projeto o HTML final está dentro da pasta `dist/`.

Para corrigir isso, o endereço de publicação foi configurado manualmente para apontar para a pasta de build, garantindo que todos os arquivos empacotados sejam encontrados corretamente.

**Configuração aplicada:**

https://gmarquini.github.io/sistema-de-agendamento/dist

Dessa forma, o GitHub Pages serve diretamente o conteúdo compilado, mantendo o comportamento correto de importação dos arquivos CSS e JS gerados pelo Webpack.

---

### 📦 Alternativas de Deploy

Em ambiente de produção real, o conteúdo da pasta `dist/` pode ser hospedado em qualquer provedor estático, como:

- **Vercel**
- **Netlify**
- **Render**
- **Amazon S3 / CloudFront**

Essas plataformas permitem deploys automatizados a partir do branch principal, executando o build com `npm run build` e publicando apenas o conteúdo final.

---
