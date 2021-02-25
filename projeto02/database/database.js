const Sequelize = require('sequelize')

const connection = new Sequelize('guiapress', 'root', '#Ovofrito2', {
    host: 'localhost',
dialect: 'mysql'
});

module.exports = connection;