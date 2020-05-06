const express = require('express');
const graphqlHttp = require('express-graphql');

const config = require('./config');
const schema = require('./schema');

const app = express();
const PORT = config.server.PORT || 3000;

app.use(express.json());

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.info(`Application is running on ${PORT}`);
});