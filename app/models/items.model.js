//  Create Sequelize data model for items table

module.exports = (sequelize, Sequelize) => {
    const Items = sequelize.define("items", {
      objective: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Items;
};