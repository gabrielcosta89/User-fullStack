Passo a passo para uso do projeto User-full stack

Desafio Full Stack para Gestão de Clientes e Contatos

Este projeto foi concebido como parte de um desafio no curso da Kenzie Academy Brasil. O sistema permite o gerenciamento de clientes e de seus respectivos contatos, atuando como uma moderna "agenda digital". A versão atual se concentra na lógica do servidor e na API, com intenções futuras de integração a um front-end.

Tecnologias Empregadas

## Para a elaboração do back-end deste projeto, as seguintes tecnologias foram utilizadas:

Linguagem de Programação: NodeJs com Express, otimizado com TypeScript.
Bibliotecas e Frameworks: bcrypts, TypeORM e zod.
Banco de Dados: Postgres.
Estrutura do Back-end

## Pré-requisitos

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: [https://www.npmjs.com/](https://www.npmjs.com/)

## Configuração

1. Clone o repositório, e abra o arquivo de beckend:

2. Instale as dependências do projeto:

   > npm install

3. crie um arquivo .env e configure suas variáveis de ambiente conforme o arquivo .env.exemple

4. execute as migrações para a configuração do seu banco de dados

   > npm run typeorm migration:run -- -d src/data-source

5. rode a aplicação:
   > npm run dev
   
# Routes

## Session Router

### POST /api/login-clients
Create a new session (login).

---

## Client Router

### POST /api/clients
Create a new client.

### GET /api/clients (bearer token needed)
Get full client information

### PATCH /api/clients (bearer token needed)
Update client information

### DELETE /api/clients (bearer token needed)
Delete client

---

## Contact Router

### POST /api/contacts (bearer token needed)
Create a new contact .

### GET /api/contacts/:ContactId (bearer token needed)
Get contact information by id

### UPGRADE api/contacts/:ContactId (bearer token needed)
UPGRADE contact information by id

### DELETE api/contacts/:ContactId (bearer token needed)
delete contact information by id

---

## Para a elaboração do front-end deste projeto, as seguintes tecnologias foram utilizados:
react.js, axios,styled-components,yup,react-toastify,jwt-decode,react-dom.

## Pré-requisitos

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: [https://www.npmjs.com/](https://www.npmjs.com/)

## Configuração

1. Após ter clonado o repositório principal abra o arquivo de frontend:
2. Instale as dependências do projeto:

   > yarn install
3. execute a aplicação:

   > yarn run dev
