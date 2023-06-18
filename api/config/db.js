const { Sequelize } = require("sequelize")
const env = process.env

const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASSWORD, {
    host: env.db_HOST,
    dialect: 'mysql',
    logging: false
})

module.exports = sequelize;