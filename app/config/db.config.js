// db.config.js exports configuring parameters for PostgreSQL 
// connection & Sequelize

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "imran123",
    DB: "todolist",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};