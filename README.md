# 📘 Documentação da API

## 📦 Visão Geral

Este projeto é uma API REST construída com **Fastify**, **Knex** e **SQLite**. Utiliza **TypeScript** e ferramentas modernas de desenvolvimento como **tsx** e **ESLint** para qualidade de código.

---

## 🚀 Scripts Disponíveis

Você pode executar os seguintes scripts com `npm run <script>`:

| Script | Descrição                                                                   |
| ------ | --------------------------------------------------------------------------- |
| `dev`  | Inicia o servidor em modo de desenvolvimento com recarregamento automático. |
| `knex` | Executa comandos do Knex (como migrações e seeds).                          |
| `lint` | Executa o ESLint para análise e correção automática de código.              |

---

## 🛠️ Tecnologias Usadas

### Dependências de Produção:

* [`fastify`](https://www.fastify.io/): Framework web rápido e de baixo overhead.
* [`knex`](https://knexjs.org/): Query builder SQL flexível e poderoso.
* [`sqlite3`](https://www.npmjs.com/package/sqlite3): Banco de dados leve e incorporado.

### Dependências de Desenvolvimento:

* `typescript`: Tipagem estática para JavaScript.
* `tsx`: Executa arquivos TypeScript diretamente com suporte a ESModules.
* `eslint`: Ferramenta de linting para manter a qualidade do código.
* `@rocketseat/eslint-config`: Configuração de ESLint opinativa.
* `@types/node`: Tipos do Node.js para TypeScript.

---

## 📁 Estrutura Esperada

```
.
├── src/
│   ├── server.ts       # Arquivo principal do servidor Fastify
│   └── ...             # Outros arquivos da aplicação (rotas, controllers, etc.)
├── knexfile.ts         # Configurações do Knex (se aplicável)
├── tsconfig.json       # Configurações do TypeScript
├── package.json
```

---

## ⚙️ Executando o Projeto

1. **Instale as dependências:**

```bash
npm install
```

2. **Inicie o servidor em modo dev:**

```bash
npm run dev
```

3. **Executar comandos do Knex (ex.: criar migração):**

```bash
npm run knex -- migrate:make create_users_table
```
