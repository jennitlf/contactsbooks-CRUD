# Agenda de Contatos

Este projeto é uma aplicação de gerenciamento de contatos que permite criar, editar, visualizar e excluir contatos. A aplicação utiliza um banco de dados, em um container Docker, um backend desenvolvido em NestJS e um frontend em ReactJs, com CSS para estilização.

## Funcionalidades

- **CRUD Completo**: Criação, leitura, atualização e exclusão de contatos.
- **Banco de Dados**: Utiliza Docker para gerenciar o banco de dados.
- **Frontend Responsivo**: Interface simples e intuitiva desenvolvida em ReactJs e estilizada com CSS.
- **Validação de Dados**: As entradas de usuário são validadas para garantir a integridade dos dados.

## Tecnologias Utilizadas

- **Backend**: [NestJS](https://nestjs.com/) - Framework para construir aplicações do lado do servidor.
- **Banco de Dados**: [Docker](https://www.docker.com/) - Para facilitar o gerenciamento do banco de dados.
- **Frontend**: [ReactJs] (https://react.dev/) - Biblioteca JavaScript para criar interfaces de usuário dinâmicas e interativas.

## Instalação e Configuração

Siga as etapas abaixo para configurar e executar o projeto localmente.

### 1. Clone o Repositório

```bash
git clone https://github.com/jennitlf/contactsbooks-CRUD.git
cd contactsbooks-CRUD
```
### 2. Navegue até o diretório backend

```bash
cd backend/
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Crie um arquivo .env

No subdiretório backend, crie um arquivo .env e configure as seguintes variáveis: POSTGRES_USER, POSTGRES_PASSWORD, DATABASE_NAME.

### 5. Monte o container docker com banco de dados postgres

```bash
docker compose up --build -d
docker ps
```
### 6. Iniciar a aplicação NestJs

```bash
npm run start:dev
```
### 7. Navegue até o subdiretório frontend

```bash
cd ..
```

```bash
cd frontend/
```

### 8. Iniciar aplicação ReactJs

```bash
npm start
```
