# Car Shop Project - Eng Version

This repository contains the "Car Shop" project, developed as part of the Trybe Full Stack Web Development course.

## Detailed Description

The "Car Shop" project is a web application for a car and motorcycle store, where you can register new vehicles, list already registered vehicles, update vehicle information, and remove vehicles.

## Features

- Registration of new vehicles
- Listing of registered vehicles
- Updating vehicle information
- Removal of vehicles

## Technologies Used

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

## Installation Locally

To run the project locally, you need to have Node.js and MongoDB installed on your machine.

1. Clone the repository to your machine:
```
git@github.com:TheAdler91/SD-025-B-PROJECT-CAR-SHOP.git
```

2. Access the project directory:
```
cd sd-025-b-project-car-shop
```
3. Install project dependencies:
```
npm install
```
4. Start the Docker server:
```
docker-compose up -d
```
5. Enter the created container:
```
docker exec -it car_shop bash
```
6. Start the application within the created Docker container:
```
npm run dev
```
7. Access the application on your client through the following address:
```
http://localhost:3001
```

Note: There is an .env file to configure other values if necessary.








