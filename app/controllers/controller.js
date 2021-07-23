
const db = require("../models");

const Users = db.users;
const Items = db.items;

const Op = db.Sequelize.Op;

// Create a new user
exports.createUser = (req,res) => {

  // Validate request
  if (!req.body.name || !req.body.password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  } 

  // Create a user 
  const user = {
    name: req.body.name,
    password: req.body.password
  }

  // Store user in database
  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a user"
      });
    });
}

// Create and save a todo
exports.createTodo = (req, res) => {

  // Validate request
  if (!req.body.objective) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  } 

  // Create a to-do item
  const todo = {
    objective: req.body.objective,
    status: false,
    user_id: req.body.user_id
  }

  // Save item in database
  Items.create(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the item"
      });
    });

};
  
// Retrieve all todo's for user
exports.findAll = (req, res) => {
  // Get user id from parameter in url
  const user = req.params.user;

  // Find for items belonging to user
  Items.findAll({ where: { user_id: user }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a todo for user"
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.deleteTodo = (req, res) => {
  // Get item to delete from parameter in url
  const id = req.params.id;

  // Delete item
  Items.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was successfully deleted"
        });
      } else {
        res.send({
          message: `Tutorial with id: ${id} was not found`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error occured while trying to delete tutorial"
      });
    });
};
