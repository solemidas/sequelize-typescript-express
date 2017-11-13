import * as express from 'express';

// This package automatically parses JSON requests.
import * as bodyParser from 'body-parser';

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
import Models from './db/models';
const app = express();
app.use(bodyParser.json());
const {
  PORT,
  DATABASE_NAME: database,
  DATABASE_PASS: password,
  DATABASE_USER: username,
  DATABASE_HOST: host,
} = process.env;

const models = new Models(database || '', username || '', password || '', host || '');
const db = models.db;
app.post('/createUser', async (req, res) => {
  try {
    const {
      username, 
      email,
      password,
    } = req.body;
    const user = await models.models.user.create({
      username,
      email,
      password,
    });
    res.send(user);
  } catch (e) {
    res.send(400);
  }
});
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Slack GraphQL server running on port ${PORT}.`);
  });
}).catch((e: Error) => {
  console.log(`Failed to connect ${e.message}.`);
});
