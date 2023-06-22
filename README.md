# Curriculum

## Short Specializations
- 0x04. Files manager
  - Back-end
  - JavaScript
  - ES6
  - NoSQL
  - MongoDB
  - Redis
  - NodeJS
  - ExpressJS
  - Kue
  - By: Guillaume, CTO at Holberton School

This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination, and background processing.

The objective is to build a simple platform to upload and view files:
- User authentication via a token
- List all files
- Upload a new file
- Change permission of a file
- View a file
- Generate thumbnails for images

You will be guided step by step for building it, but you have some freedoms of implementation, split in more files, etc... (utils folder will be your friend)

Of course, this kind of service already exists in real life - it’s a learning purpose to assemble each piece and build a full product.

Enjoy!

## Resources
Read or watch:
- Node JS getting started
- Process API doc
- Express getting started
- Mocha documentation
- Nodemon documentation
- MongoDB
- Bull
- Image thumbnail
- Mime-Types
- Redis

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- how to create an API with Express
- how to authenticate a user
- how to store data in MongoDB
- how to store temporary data in Redis
- how to setup and use a background worker

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be verified against lint using ESLint

## Provided files
- package.json
- .eslintrc.js
- babel.config.js

## Tasks

### 0. Redis utils
- Inside the folder utils, create a file `redis.js` that contains the class `RedisClient`.
- Implement the required functions.

### 1. MongoDB utils
- Inside the folder utils, create a file `db.js` that contains the class `DBClient`.
- Implement the required functions.

### 2. First API
- Create the Express server in `server.js` as described.
- Implement the required endpoints.

### 3. Create a new user
- Implement the POST /users endpoint as described.

### 4. Authenticate a user
- Implement the GET /connect, GET /disconnect, and GET /users/me
