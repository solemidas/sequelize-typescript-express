export default (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    text: DataTypes.STRING,
  });

  message.associate = (models) => {
    // 1:M
    message.belongsTo(models.channel, {
      foreignKey: 'channelId',
    });
    message.belongsTo(models.user, {
      foreignKey: 'userId',
    });
  };

  return message;
};
