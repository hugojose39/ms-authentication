# Microserviço de autenticação com Nodejs

Este é um microserviço de autenticação desenvolvido em Node.js com TypeScript, utilizando JSON Web Tokens (JWT) para garantir a segurança nas operações. A seguir, apresentamos a composição principal do projeto, destacando os endpoints base que podem ser estendidos conforme necessário para atender ao contexto específico.

## Endpoints
### Usuários

* GET /users
  - Obtém a lista de usuários cadastrados.
* GET /users/:uuid
  - Obtém os detalhes de um usuário específico com base no UUID.
* POST /users
  - Cria um novo usuário. Os detalhes do usuário são enviados no corpo da solicitação.
* PUT /users/:uuid
  - Atualiza os dados de um usuário específico com base no UUID. Os detalhes do usuário atualizado são  enviados no corpo da solicitação.
* DELETE /users/:uuid
  - Exclui um usuário com base no UUID.

### Autenticação (não disponiveis no momento)

* POST /token
  - Gera um token de acesso após a autenticação bem-sucedida. As credenciais do usuário são enviadas no corpo da solicitação.
* POST /token/validate
  - Valida a autenticidade de um token enviado no corpo da solicitação. Retorna uma resposta indicando se o token é válido ou não.

## Tecnologias Utilizadas

- Node.js e Express para construção do servidor.
- PostgreSQL como banco de dados SQL.
- JWT para autenticação segura.

## Instruções de Uso

1. Faça um clone do repositório.
2. Instale as dependências com `npm install`.
3. Configure o arquivo `.env` com as variáveis necessárias (CONECTION_STRING).
4. Execute o servidor com `npm run dev`.