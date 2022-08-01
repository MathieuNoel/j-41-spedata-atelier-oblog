require('dotenv').config();

const {createServer} = require('http');

const { ApolloServer } = require('apollo-server-express');

const debug =require('debug')('server');

const { app, apolloConfig } = require('./app');

const PORT = process.env.PORT || 5050;

const httpServer = createServer(app);

const apolloServer = new ApolloServer(apolloConfig);

(async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  await httpServer.listen(PORT);
  debug(`Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
})();