'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // db.Subscription.belongsTo(db.User, {
      //   as: 'creator',
      //   foreignKey: 'creatorId'
      // });
      
      // db.Subscription.belongsTo(db.User, {
      //   as: 'subscriber',
      //   foreignKey: 'subscriberId'
      // });
      friends.belongsTo(models.users, {as: 'dataFriend', foreignKey:'friendId'})
      friends.belongsTo(models.users, {foreignKey:'userId'})
    }
  }
  friends.init({
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'friends',
  });
  return friends;
};