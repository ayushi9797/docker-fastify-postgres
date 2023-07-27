// CommonJs ---------------------------------------------------------------------->
const fastify = require('fastify')({ logger: true });


// Importing Controller ------------------------------------------------------------>
const controllers = require("./controllers/user.controller");


// Declare a home route ----------------------------------------------------------->
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' });
});


// Requiring Routes --------------------------------------------------------------->
fastify.get("/users", controllers.getUser);
fastify.get("/users/:id", controllers.getSingleUser);
fastify.post("/users", controllers.createUsers);
fastify.patch("/users/:id", controllers.updateUsers);
fastify.delete("/users/:id", controllers.deleteUsers);





// Run the server!----------------------------------------------------------------->
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    };
    console.log(`Server listening on ${address}`);

});