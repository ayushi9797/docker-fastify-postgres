const db = require("../config/db");



//! POST Router ------------------------------------------------------------------------->
exports.createUsers = async (request, reply) => {
    try {
        // taking name and email 
        const { name, email } = request.body;
        console.log(request.body);

        // creating a new user 
        const newUser = await db('users').insert({ name, email }).returning('*');
        console.log(newUser);

        reply.status(200).send({ message: `:${`successfully user created`}`, newUser });
    } catch (error) {
        console.log({ message: "create a new user" }, error.message);
        reply.status(404).send({ message: `:${`error in creating a new user `}`, error }, error.message);

    };
};


// Gell all users --------------------------------------------------------------------------->
exports.getUser = async (request, reply) => {
    try {

        // fetching the all users created
        const users = await db('users').select('*');
        reply.status(200).send(users);
    } catch (error) {
        reply.status(404).send(error);
    }
}


//! Get user with id  ------------------------------------------------------------------------>
exports.getSingleUser = async (request, reply) => {
    const { id } = request.params;

    try {
        // finding the user by specifuc id
        const user = await db('users').select('*').where({ id }).first();

        // if the user is not present
        if (!user) {

            // sending  user not found message
            reply.status(404).send({ message: 'User not found' });
        } else {
            reply.status(200).send(user);
        }
    } catch (error) {
        reply.status(500).send(error);
    }
}


//! Patch request ------------------------------------------------------------------------------->
exports.updateUsers = async (request, reply) => {
    try {
        // taking id of specific user that want to update
        const { id } = request.params;

        // taking content which we want to update
        const { name, email } = request.body;

        // finding the user to update with id
        const updatedRows = await db('users')
            .where({ id })
            .update({ name, email });

        // Checking if the user is updated successfully
        if (updatedRows === 0) {
            reply.status(404).send('User not found');
        } else {
            const updatedUser = await db('users').select('*').where({ id }).first();
            reply.status(200).send({ message: `User successfully updated`, user: updatedUser });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        reply.status(500).send({ message: `Error in updating a user`, error: error.message });
    }
};



// Delete request -------------------------------------------------------------------------------->
exports.deleteUsers = async (request, reply) => {

    try {

        // taking id for deleting specific users
        const { id } = request.params;
        console.log(id);

        // checking user with id 
        const user = await db('users').where({ id }).del();
        console.log(user);
        if (!user) {
            reply.status(404).send({ message: 'User not found' });
        } else {
            reply.send({ message: `${'User deleted successfully'}` }, user);
        }
    } catch (error) {
        console.log({ message: " user deleted " }, error.message);
        reply.status(500).send({ message: `:${`error in deleting a  user `}`, error }, error.message);
    }

};

// -------------------------------------------------------------------------------------------------->