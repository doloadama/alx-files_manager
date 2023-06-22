**Curriculum**

0x04. Files manager
Back-end
JavaScript
ES6
NoSQL
MongoDB
Redis
NodeJS
ExpressJS
Kue
**By: Guillaume, CTO at Holberton School**
**Weight: 1**
Project to be done in teams of 2 people (your team: Adama Dolo)
Project will start Jun 22, 2023 3:00 AM, must end by Jun 29, 2023 3:00 AM
Checker will be released at Jun 23, 2023 9:00 PM
Manual QA review must be done (request it when you are done with the project)
An auto review will be launched at the deadline

This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination, and background processing.

The objective is to build a simple platform to upload and view files:

- User authentication via a token
- List all files
- Upload a new file
- Change permission of a file
- View a file
- Generate thumbnails for images

You will be guided step by step for building it, but you have some freedoms of implementation, split into more files, etc… (utils folder will be your friend)

Of course, this kind of service already exists in real life - it’s a learning purpose to assemble each piece and build a full product.

**Enjoy!**

**Resources**
Read or watch:

- [Node JS getting started](https://nodejs.dev/)
- [Process API doc](https://nodejs.org/api/process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)
- [MongoDB](https://www.mongodb.com/)
- [Bull](https://optimalbits.github.io/bull/)
- [Image thumbnail](https://www.npmjs.com/package/image-thumbnail)
- [Mime-Types](https://www.npmjs.com/package/mime-types)
- [Redis](https://redis.io/)

**Learning Objectives**
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to create an API with Express
- How to authenticate a user
- How to store data in MongoDB
- How to store temporary data in Redis
- How to set up and use a background worker

**Requirements**
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Your code will be verified against lint using ESLint

**Provided files**
- [package.json](https://github.com/alx-files_manager/blob/main/package.json)
- [.eslintrc.js](https://github.com/alx-files_manager/blob/main/.eslintrc.js)
- [babel.config.js](https://github.com/alx-files_manager/blob/main/babel.config.js)
- and…

**Don’t forget to run $ npm install when you have the package.json**

**Tasks**
**0. Redis utils**
**mandatory**

Inside the folder `utils`, create a file `redis.js` that contains the class `RedisClient`.

`RedisClient` should have:
- The constructor that creates a client
