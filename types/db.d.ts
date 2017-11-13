interface Models {
  user: any;
  team: any;
  channel: any;
  member: any;
  messages: any;
}
interface SequelizeConfig {
  force: boolean;
}
interface SequelizeDatabase {
  sequelize: {
    sync: (config: SequelizeConfig) => Promise<void>
  }
}