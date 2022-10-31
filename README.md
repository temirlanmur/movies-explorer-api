# Movies Explorer Backend API


[https://api.nostalgic.tree.nomoredomains.icu](https://api.nostalgic.tree.nomoredomains.icu)

## Description

This repo contains REST API backend part of the final project of my training at Praktikum.

The application is written in JavaScript using Express.js framework. It allows users to login/register and save movies in the system.

## Features

These are some of the project features and technologies used:
- Persistence using MongoDB
- Bearer authentication (JWT)
- CORS support
- Rate limit & helmet
- Input validation using celebrate
- Logging using express-winston
- Centralized error handling
- Developer mode: nodemon for hot reloads + swagger support

## Local installation

To test locally you need to have MongoDB pre-installed.

After copying the project files to your environment use `npm install` to install the dependencies.
Then, create `.env` file inside the project root folder and add `MONGO_CONNECTION_STRING` environment variable to the file. Use your preferred connection string, or you can paste this value: `"mongodb://localhost:27017/moviesdb"`. Next, run `npm run dev` to start dev server with hot reload. Go to [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to check the APIs.

## Project structure

`/controllers` — users and movies controller functions  
`/middlewares` — authorization, cors, error handlers and other middleware  
`/models` — user and movie models' schemas  
`/routes` — routes and routes configuration  
`/utils` — utility classes: API models, custom errors, and validators  
`app.js` — express app configuration  
`constants.js` — project level constants  
`environment.js` — environment variables initialization  
`server.js` — project entry point  

## Commands

`npm run start` — start server  
`npm run dev` — start server with hot-reload  
`npm run lint` — start linter  

## Routes
`POST /signup` — Registers a new user  
`POST /signin` — Authorizes the user  
`GET /users/me` — Gets authorized user's account information  
`PATCH /users/me` — Updates authorized user's account information  
`GET /movies` — Gets movies saved by the user  
`POST /movies` — Creates a new movie  
`DELETE /movies/:movieId` — Deletes the movie by ID  
