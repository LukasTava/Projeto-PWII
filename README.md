# Projeto Programação para Web II - Gerenciador de Tarefas

Este é o projeto da primeira etapa da disciplina de Programação para Web II. O projeto consiste em uma aplicação de Gerenciador de Tarefas, utilizando React, TypeScript e Storybook, com gerenciamento de estado global feito com Redux Toolkit.

---

## Autor

* **Lukas Tavares**

---

## Tecnologias Utilizadas

* **React:** Biblioteca principal para a construção da interface.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao projeto.
* **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido e otimizado.
* **Redux Toolkit:** Para gerenciamento de estado global da aplicação.
* **React Router:** Para a navegação entre as páginas da aplicação.
* **Storybook:** Para desenvolvimento e documentação isolada de componentes.
* **Vitest & React Testing Library:** Para a escrita e execução de testes unitários.
* **Cypress:** Para a escrita e execução de testes de ponta a ponta (end-to-end).
* **JSON Server:** Para simular uma API REST para as tarefas.

---

## Como Executar o Projeto

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

* É necessário ter o [Node.js](https://nodejs.org/) (versão LTS recomendada) instalado.
* Um gerenciador de pacotes como `npm` (que já vem com o Node.js).

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_GIT_AQUI]
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd [NOME_DA_PASTA_DO_PROJETO]
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

---

### Executando a Aplicação Principal

Para rodar a aplicação do Gerenciador de Tarefas:

1.  **Inicie o servidor da API (json-server):**
    *Abra um terminal e execute:*
    ```bash
    npm run server
    ```
    *Isso iniciará a API mock na porta `3001`.*

2.  **Inicie a aplicação React:**
    *Abra um **segundo** terminal e execute:*
    ```bash
    npm run dev
    ```
    *A aplicação estará disponível em `http://localhost:5173`.*

### Executando o Catálogo de Componentes (Storybook)

Para visualizar, desenvolver e testar os componentes de forma isolada no Storybook:

```bash
npm run storybook