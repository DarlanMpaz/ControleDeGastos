var knex = require('knex') ({
    client: 'mysql',

    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Pep&ron!228@',
        database: 'controle'
    }
})

module.exports = knex