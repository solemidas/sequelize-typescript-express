export default (sequelize, DataTypes) => {
  const channel = sequelize.define('channel', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
  });

  channel.associate = (models) => {
    // 1:M
    channel.belongsTo(models.team, {
      foreignKey: 'teamId',
    });
  };

  return channel;
};
