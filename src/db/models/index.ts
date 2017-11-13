import * as Sequelize from 'sequelize';
export default class Models {
  sequelize: any;
  database: any;
  models: any;
  constructor(database: string, username: string, password: string, host: string) {
    this.sequelize = new Sequelize(database, username, password, {
      host,
      dialect: 'postgres',
    });
    this.database = {};
    this.associate();
  }
  associate() {
    this.models = {
      user: this.sequelize.import('./user'),
      channel: this.sequelize.import('./channel'),
      message: this.sequelize.import('./message'),
      team: this.sequelize.import('./team'),
    };
    Object.keys(this.models).forEach((modelName) => {
      if ('associate' in this.models[modelName]) {
        this.models[modelName].associate(this.models);
      }
    });
    
    this.models['sequelize'] = this.sequelize;
    this.models['Sequelize'] = Sequelize;
  }
  get db(): SequelizeDatabase {
    return this.models;
  }
}
