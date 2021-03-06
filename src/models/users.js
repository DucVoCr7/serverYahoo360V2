'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.comments, {foreignKey:'userId'})
      users.hasMany(models.friends, {as: 'friendRequestReceiveds', foreignKey:'friendId'})
      users.hasMany(models.friends, {as: 'friendRequestSents', foreignKey:'userId'})
      users.hasMany(models.friends, {as: 'friends', foreignKey:'userId'})
      users.hasMany(models.likes, {foreignKey:'userId'})
      users.hasMany(models.musics, {foreignKey:'userId'})
      users.hasMany(models.photos, {foreignKey:'userId'})
      users.hasMany(models.posts, {foreignKey:'userId'})
      users.hasMany(models.replies, {foreignKey:'userId'})

    }
  }
  users.init({
    role: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    position: DataTypes.STRING,
    cloudinary_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};