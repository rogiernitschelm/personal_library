import express from 'express';
import expressGraphQL from 'express-graphql';
import { developmentPort } from './configuration';
import schema from './schema/schema';

const application = express();

application.use('/graphql', expressGraphQL({
  schema,
  graphiql: true 
}));

application.listen(developmentPort, () => {
  console.log(`Listening on ${developmentPort}`);
});
