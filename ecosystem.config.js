const {
  PORT,
  DATABASE_NAME,
  DATABASE_PASS,
  DATABASE_USER
} = process.env;
module.exports = {
  apps: [
    {
      'name': 'express-sequelize',
      'exec_interpreter': 'ts-node',
      'script': 'src/index.ts',
      'log_date_format': 'YYYY-MM-DD HH:mm Z',
      'watch': true,
      'env': {
        PORT,
        DATABASE_NAME,
        DATABASE_PASS,
        DATABASE_USER
      },
    },
  ],
};

