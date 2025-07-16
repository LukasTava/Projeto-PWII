# Projeto Programação para Web II - Gerenciador de Tarefas

Este é o projeto da primeira etapa da disciplina de Programação para Web II, referente ao semestre 2025.1. O projeto consiste em um "catálogo de componentes" para um futuro sistema Gerenciador de Tarefas, utilizando React, TypeScript e Storybook, com gerenciamento de estado global feito com Redux.

---

## Autor

* **Lukas Tavares**

---

## Tecnologias Utilizadas

* **React:** Biblioteca principal para a construção da interface.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao projeto.
* **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido e otimizado.
* **Redux Toolkit:** Para gerenciamento de estado global da aplicação.
* **Storybook:** Ambiente para desenvolvimento e documentação isolada de componentes.
* **Vitest & React Testing Library:** Para a escrita e execução de testes unitários.
* **Cypress:** Para a escrita e execução de testes de sistema (end-to-end).

---

## Como Executar o Projeto

Siga as instruções abaixo para executar o catálogo de componentes e os testes em um ambiente de desenvolvimento.

### Pré-requisitos

* É necessário ter o [Node.js](https://nodejs.org/) (versão LTS) instalado.
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

### Executando o Catálogo de Componentes

Para visualizar os componentes desenvolvidos de forma isolada no Storybook:

```bash
npm run storybook
```
O Storybook estará disponível no endereço `http://localhost:6006`.

### Executando os Testes

O projeto possui dois tipos de testes automatizados.

1.  **Testes Unitários:**
    Para rodar os testes dos componentes de forma isolada via terminal, execute:
    ```bash
    npm test
    ```

2.  **Testes End-to-End (e2e):**
    Para abrir o painel do Cypress e rodar os testes de fluxo do usuário:
    * Primeiro, garanta que o Storybook esteja rodando em um terminal (`npm run storybook`).
    * Em **outro** terminal, execute:
    ```bash
    npx cypress open
    ```
    Dentro do painel do Cypress, selecione "E2E Testing" e clique nos arquivos de teste para executá-los.