const knex = require('knex')

module.exports = knex({
    client: 'postgres',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'your_password',
        database: 'postgres',
    },
})
