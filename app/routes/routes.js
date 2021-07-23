// Routes for handling all CRUD operations

module.exports = app => {
    const todo = require("../controllers/controller.js");
  
    var router = require("express").Router();

    // Create a user 
    router.post("/register", todo.createUser)

    // Create a todo list 
    router.post("/", todo.createTodo);

    // Get all todo's belonging to user
    router.get("/:user", todo.findAll);

    // Delete a single to do based on to-do id
    router.delete("/:id", todo.deleteTodo)
  
    app.use('/api/todo', router);
  };