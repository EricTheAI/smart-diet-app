This is a health & fitness app that tracks your diet and give you meal plans which best fit you.


## Server

### Backend API service
We use express, a famous Node.js web framework, as our backend server, hosted on an Azure virtual machine. The backend serves as a middle man between the database and a client. Express is a minimal and flexible web framework that uses middleware to extend it's functionality, hence gives us much space to customize the structure of the application. Usually a web app basically consists of three parts, view, router, and model.
Because we only need a API server, we don't need view here. So all models are in "server/models" directory, handling interactions between server and the database. And routers in "server/routes", mapping a request from a client to an action in the server. 

### Food detection service
Apart from our web API server, we've decided to use another server to do food detection. The main reason is that the tools we used for machine learning are all written in python, and it's better to seperate the heavy computation process from normal database requests.

### Database
We use Azure's CosmosDB to save our user data, to be specific, it's DocumentDB, a key-value document database but with SQL-like queries. We chose to use a key-value database because it's more flxible in data structures and don't have to worry about changing schemes in the demo stage. We have four types of document, which are user, userprofile, food, and record.

### Storage
Apart from DocumentDB, we also use Storage to save a large block of data like images.
