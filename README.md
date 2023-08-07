# User-fullStack

Desafio Full Stack (versao parcial em beckend) - Gestão de Clientes e Contatos

Este projeto foi concebido como parte de um desafio no curso da Kenzie Academy Brasil. O sistema permite o gerenciamento de clientes e de seus respectivos contatos, atuando como uma moderna "agenda digital". A versão atual se concentra na lógica do servidor e na API, com intenções futuras de integração a um front-end.

Tecnologias Empregadas

Para a elaboração do back-end deste projeto, as seguintes tecnologias foram utilizadas:

Linguagem de Programação: NodeJs com Express, otimizado com TypeScript.
Bibliotecas e Frameworks: bcrypts, TypeORM e zod.
Banco de Dados: Postgres.
Estrutura do Back-end

Comandos iniciais:
npm init --y -->para iniciar o node js
npm install -->dotenv para variáveis de ambiente, use .env.example como modelo 
instale as dependencias e tipagens necessarias para o projeto :
npm install express typescript ts-node
npm install --save-dev @types/express @types/node
npm install bcrypt
npm install --save-dev @types/bcrypt
npm install typeorm pg
npm install zod
para rodar as migrations rode os seguintes comandos:
npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
npm run typeorm migration:run -- -d ./src/data-source



O código fonte está organizado da seguinte maneira:

/backend: Diretório que aloca todos os arquivos responsáveis pela lógica do servidor.
/src: Hospeda o código fonte principal.
/controllers: Controladores responsáveis por processar as requisições HTTP e direcioná-las.
/entities: Define os modelos de clientes e seus contatos, representando as estruturas de dados.
/routes: Detalha os endpoints da API, associando-os às ações correspondentes.
/middleware: funciona em conjunto de funções que se situa entre a solicitação HTTP do cliente e a resposta final do servidor, processando, modificando ou interceptando informações durante esse fluxo.
/schemas: define a organização e formato de dados,especificando tipos de campos, relacionamentos e regras de validação para garantir a integridade e consistência dos dados.
server.js: Arquivo central que inicia o servidor e integra as dependências.
API e Seus Endpoints

A API foi projetada para fornecer uma interface robusta para gerenciar clientes e contatos:

Rotas de Acesso Público:

POST /api/login-clients: é feito o login baseada nas informacoes do usuário:
POST /api/clients: Adiciona um novo cliente ao sistema com base nos dados fornecidos.
Rotas Protegidas (Requer Autenticação):

GET /api/clients: Recupera detalhes de um cliente específico usando um token de autenticação.
PATCH /api/clients: Modifica informações de um cliente usando um token de autenticação.
DELETE /api/clients: Exclui um cliente com base em um token de autenticação.
POST /api/contacts: Registra um novo contato relacionado a um cliente.
GET /api/contacts/:id: Obtém informações de um contato específico usando seu ID.
PATCH /api/contacts/:id: Atualiza informações de um contato específico.
DELETE /api/contacts/:id: Remove um contato utilizando seu ID.
