export default (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  team.associate = (models) => {
    team.belongsToMany(models.user, {
      through: 'member',
      foreignKey: 'id',
      as: 'teamId',
    });
    team.belongsTo(models.user, {
      foreignKey: 'owner',
    });
  };

  return team;
};
