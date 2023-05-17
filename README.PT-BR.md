# Car Shop Project - Pt-Br

Este repositório contém o projeto "Car Shop", desenvolvido como parte do curso de Desenvolvimento Web Full Stack da Trybe.

## Descrição detalhada

O projeto "Car Shop" é uma aplicação web de uma loja de carros e motos, onde é possível cadastrar novos veículos, listar veículos já cadastrados, atualizar informações dos veículos e remover veículos.

## Funcionalidades

- Cadastro de novos veículos
- Listagem de veículos cadastrados
- Atualização de informações dos veículos
- Remoção de veículos


## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- Docker / Docker Compose (1.29^)
- Jest
- Chai
- Sinon
- Eslint

## Instalação do projeto localmente

Para rodar o projeto localmente, é necessário ter instalado o Node.js e o MongoDB em sua máquina.

1. Clone o repositório para sua máquina:
```
git@github.com:TheAdler91/SD-025-B-PROJECT-CAR-SHOP.git
```

2. Acesse o diretório do projeto:
```
cd sd-025-b-project-car-shop
```
3. Instale as dependências do projeto:
```
npm install
```
4. Inicie o servidor docker:
```
docker-compose up -d
```
5. Entre no container criado:
```
docker exec -it car_shop bash
```
6. Inicie a aplicação dentro do container docker criado
```
npm run dev
```
7. Acesse a aplicação em seu cliente, através do endereço:
```
http://localhost:3001
```

Obs: Há um arquivo .env para configurar outros valores caso necessário.
