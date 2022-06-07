const db = require("../config/config");
const {Sequelize, DataTypes} = require("sequelize");

  const User = db.define("user", {

UserName: {
  type: DataTypes.STRING
},
UserEmail: {
  type: DataTypes.STRING
},
password: {
  type: DataTypes.STRING
},
postView: {
  type: DataTypes.STRING
}
});

module.exports = User;