export default (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });

  user.associate = (models) => {
    user.belongsToMany(models.team, {
      through: 'member',
      foreignKey: 'id',
      as: 'userId',
    });
  };

  return user;
};
