<!-- -------------------------------------------------------------------------------------------------------------------------- -->

# NOdejs

- Node.js is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser

# Fastify

- Fastify is a popular web framework for Node.js, known for its speed and low overhead. It's a good alternative to Express.js and can be used to build high-performance applications.

# Docker:

- Docker is a containerization platform that allows you to package applications and their dependencies into containers. It simplifies application deployment, scalability, and portability.

# Postgres

- PostgreSQL is a powerful open-source relational database management system. It's an alternative to MySQL and offers advanced features and scalability.

# Techs stacks

## Backend : -

| docker                                                                                                     | postman                                                                                                           |     |     | Node.js                                                                                                                         | Fastify.js                                                                                                   | postgres                                                                                                                                                      |     |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --- | --- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| <img width="70px" src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"> | <img width="75px" src="https://mms.businesswire.com/media/20230322005274/en/761650/2/postman-logo-vert-2018.jpg"> |     |     | <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*V8vAkYA9QOi-gLKh68mtOg.jpeg"> | <img width="75px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16i1_ysJXnfYBbN9NXDGL_fJpU6TJ8-RNKx6lg4l9mkegZtQIVaIkSPRP0_VlA2exPYc&usqp=CAU"> |

## Postman Collection

- ./postman_collection

## Folder Structure

![image](https://github.com/ayushi9797/docker-fastify-postgres/assets/112810259/87d1ed13-16c9-4a9f-9938-7793e41d29c7)

## REQUIREMENTS

- User can register
- Retrieves a list of all user
- Retrieve a user by specific id
- Updates an existing user
- deletes an existing user

## Setting up postgres with fastify Nodejs

- `npm init -y`

### To run postgres with fastify Nodejs , follow these steps:->

### Running node.js locally

- install all dependencies `npm install`

### Create a file named `server.js` .

# Nodejs Fastify with Postgress docker integration

- `Nodemon server.js`

### install the necessary dependencies: pg (PostgreSQL client for Node.js) and dotenv (for managing environment variables). Run the following command:

- `npm install pg dotenv` , `npm install fastify`, `npm install knex`

## in browser

-` http://127.0.0.1:3000`

# Docker Installation

## check the version of Docker

- `docker --version`

## Pulling Postgres from Docker

- `docker pull postgres`

## The docker images command lists all available Docker images on the local machine.

- `docker images`

## Used to start a new container / Run a PostgreSQL Container:

- `docker run --name some-postgres -e POSTGRES_PASSWORD=your_password -d -p 5432:5432 postgres`

### Accessing PostgreSQL

## To start the container again, use the following command:

- `docker start some-postgres`

## Remove the PostgreSQL Container

- `docker stop some-postgres`
- `docker rm some-postgres`

## command is used to list all containers

- `docker ps -a`

## to find and display information about any active network connections on the system

- `netstat -ano | findstr :5432`

## list the containers

- `docker ps`

## Interactive shell access to the Docker container with ID 2ac49de1309a.

- `docker exec -it 2ac49de1309a bin/bash`

## Connect to PostgreSQL database using the username "postgres" with the psql command.

- `psql -U postgres`

## Creating a table

- ` CREATE TABLE users (  id SERIAL PRIMARY KEY,  name VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL);`

## Display table

- `\d users`

## Inserting Data

- `INSERT INTO users (name, email) VALUES  ('Ayushi', 'Ayushi123@example.com'),('chiku', 'chiku12@example.com');`

## You are now connected to database "postgres" as user "postgres".

- `\c postgres;`

## selecting all the user

`select * from users;`

## Result

![image](https://github.com/ayushi9797/docker-fastify-postgres/assets/112810259/a7d47cc1-386b-4938-8109-a3915e47c038)

```
 id |  name  |         email
----+--------+-----------------------
  1 | Ayushi | Ayushi123@example.com
  2 | chiku  | chiku12@example.com
  3 | mayank | mayank11@example.com
(3 rows)

```

## Routes and API documentation

# All routes

| METHOD | ENDPOINT   | DESCRIPTION                                                                                | STATUS CODE |
| ------ | ---------- | ------------------------------------------------------------------------------------------ | ----------- |
| POST   | /users     | This endpoint should allow users to register and create.                                   | 200         |
|        |            |
| GET    | /users     | This endpoint should return a list of all available users.                                 | 200         |
| GET    | /users/:id | This endpoint should allow to get user by specific id                                      | 200         |
| PUT    | /users/:id | This endpoint should allow to update the details of a specific users identified by its ID. | 200         |
| DELETE | /users/:id | This endpoint should allow to users to delete details to the system.                       | 200         |

# Unittesting

#### Folder File name

`./test/task.spec.js`

## Set up Unit Testing

### Packages to be install

- `npm install chai`,
- `npm install mocha`,
- `npm install chai-http`

### Set up tests

Before running the tests, make sure you have set up the project and installed the required dependencies. The API project should be running and accessible via the server variable in the test files.

### Test Cases

The test suite covers the following test cases:

1. GET /users
   Test the successful retrieval of all users.
   Test handling of an invalid URL (404).
2. GET /users/:id
   Test the successful retrieval of a specific user by ID.
   Test handling of an invalid user ID (404).
3. POST /users
   Test the successful creation of a new user.
   Test handling of invalid user data (404).
4. PATCH /users/:id
   Test the successful update of user details.
   Test handling of an invalid request body (404).
5. DELETE /users/:id
   Test the successful deletion of a user.
   Test handling of unsuccessful deletion with an invalid user ID (404).

#### Running the Tests

To run the tests, execute the following steps:

Ensure that the User Management API is running and accessible via the server variable in the test files.

Execute the test files using a test runner like Mocha and chai.

The test runner will execute the test cases defined in the test files and display the results.

## To check the testcases

`npm test`

#### Process using port 8080

` netstat -ano | findstr :8080`

#### Kill the process using the PID (replace '18308' with the actual PID)

`- taskkill /PID 18308 /F`

### POST API

`http://localhost:3000/users`

### POST schema

```
{
"name": "ayushii",
"email": "ayu11@example.com"
}

```

## Response messages

```
{
    "message": ":successfully user created",
    "newUser": [
        {
            "id": 1,
            "name": "ayushii",
            "email": "ayu11@example.com"
        }
    ]
}

```

## Get API

`http://localhost:3000/users`

## Response messages

```
[
    {
        "id": 2,
        "name": "chiku",
        "email": "chiku12@example.com"
    },
    {
        "id": 3,
        "name": "mayank",
        "email": "mayank11@example.com"
    },
    {
        "id": 1,
        "name": "ayushii",
        "email": "ayu11@example.com"
    },
    {
        "id": 5,
        "name": "cat",
        "email": "cat1@example.com"
    },
    {
        "id": 6,
        "name": "cat",
        "email": "cat1@example.com"
    }
]
```

## GET BY ID

`http://localhost:3000/users/1`

## Response message

```
{
"id": 1,
"name": "ayushii",
"email": "ayu11@example.com"
}

```

## PATCH API

`http://localhost:3000/users/1`

## DELETE API

`http://localhost:3000/users/5`

<!-- THANK YOU 😊 -->
