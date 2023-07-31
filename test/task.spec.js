const fastify = require('fastify');
const knex = require('knex');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');



const controllers = require("../controllers/user.controller")

//!-----------------------------------|  Assertion  |------------------------------------------------>


chai.should();
chai.use(chaiHttp);
const expect = chai.expect;





//!------------------------------------------| GET |---------------------------------------------------------------->

describe('getUser', () => {
    it('should return an array of users', async () => {
        const app = fastify();


        // Mock the request and reply objects for testing
        const request = {};
        const reply = {
            send: (users) => {
                expect(users).to.be.an('array');
            },
        };


        // await app.controllers.getUser(request, reply);

        app.close();
    });

    //  200 code

    it('should return status 200 on users found', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {};
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(200);
                return {
                    send: (users) => {
                        expect(users).to.exist;
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        // await app.getUser(request, reply);

        app.close();
    });

    it('should return status 404 on error', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {};
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(404);
                return {
                    send: (error) => {
                        expect(error).to.exist;
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        // await app.getUser(request, reply);

        app.close();
    });
});



//! ----------------------------------------| POST Router |------------------------------------------------------------>

describe('POST /users', () => {

    it('<--------------------| should create a new user |-------------->', async () => {
        // Define the test user data
        const testUser = { name: 'ayushi', email: 'ayushi12@example.com' };

        console.log(testUser);



    });

    it('should return status 200 on newUser create', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {};
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(200);
                return {
                    send: (newUser) => {
                        expect(newUser).to.exist;
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        await controllers.getUser(request, reply);

        app.close();
    });

    it('should return status 404 on error', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {};
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(404);
                return {
                    send: (error) => {
                        expect(error).to.exist;
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        await controllers.getUser(request, reply);

        app.close();
    });

});


//! ----------------------------------------| GET  by id Router |------------------------------------------------------->

describe('getSingleUser', () => {
    it('should return the user object when a valid user ID is provided', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {
            params: {
                id: 5, // Provide a valid user ID that exists in your test database
            },
        };
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(200);
                return {
                    send: (user) => {
                        expect(user).to.be.an('object');
                        expect(user).to.have.property('id', 5); // Replace 1 with the ID you provided in the request
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        await controllers.getSingleUser(request, reply);

        app.close();
    });
    it('should return status 404 when an invalid user ID is provided', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {
            params: {
                id: 9999, // Provide an invalid user ID that doesn't exist in your test database
            },
        };
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(404);
                return {
                    send: (response) => {
                        expect(response).to.be.an('object');
                        expect(response).to.have.property('message', 'User not found');
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        await controllers.getSingleUser(request, reply);

        app.close();
    });
});







//! ----------------------------------------| PATCH ROUTER |------------------------------------------------------------>

describe('updateUsers', () => {
    it('should update the user when a valid user ID and data are provided', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {
            params: {
                id: 6, // Provide a valid user ID that exists in your test database
            },
            body: {
                name: 'cat',
                email: ' cat1@example.com',
            },
        };
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(200);
                return {
                    send: (response) => {
                        expect(response).to.be.an('object');
                        expect(response).to.have.property('message', 'User successfully updated');
                        expect(response).to.have.property('user');
                        expect(response.user).to.have.property('id', 6); // Replace 1 with the ID you provided in the request
                        expect(response.user).to.have.property('name', 'cat');
                        expect(response.user).to.have.property('email', ' cat1@example.com');
                    },
                };
            },
        };
        // Replace this line with the actual function call from your app
        await controllers.updateUsers(request, reply);

        app.close();
    });
    it('should return status 404 when an invalid user ID is provided', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {
            params: {
                id: 9, // Provide an invalid user ID that doesn't exist in your test database
            },
            body: {
                name: 'ayu',
                email: 'ayu@example.com',
            },
        };
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(404);
                return {
                    send: (response) => {
                        expect(response).to.equal('User not found');
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        await controllers.updateUsers(request, reply);

        app.close();
    });
});

//! ----------------------------------------| DELETE ROUTER |----------------------------------------------------------->

describe('deleteUsers', () => {
    it('should delete the user when a valid user ID is provided', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {
            params: {
                id: 6, // Provide a valid user ID that exists in your test database
            },
        };
        const reply = {
            send: (response) => {
                expect(response).to.be.an('object');
                expect(response).to.have.property('message', 'User deleted successfully');
            },
        };

        // Replace this line with the actual function call from your app
        await controllers.deleteUsers(request, reply);

        app.close();
    });
    it('should return status 404 when an invalid user ID is provided', async () => {
        const app = fastify();

        // Mock the request and reply objects for testing
        const request = {
            params: {
                id: 9999, // Provide an invalid user ID that doesn't exist in your test database
            },
        };
        const reply = {
            status: (statusCode) => {
                expect(statusCode).to.equal(404);
                return {
                    send: (response) => {
                        expect(response).to.be.an('object');
                        expect(response).to.have.property('message', 'User not found');
                    },
                };
            },
        };

        // Replace this line with the actual function call from your app
        await controllers.deleteUsers(request, reply);

        app.close();
    });
});