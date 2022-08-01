const Post = require('./post');

const Category = require('./category');

const Query = require('./query');

const Mutation = require('./mutation');

const resolvers = {
  Query,
  Post,
  Category,
  Mutation,
};

module.exports = resolvers;