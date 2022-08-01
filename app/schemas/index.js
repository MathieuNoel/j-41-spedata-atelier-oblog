const { gql } = require('apollo-server-express');

const { readFileSync } = require('fs');

const path = require('path');

const category = readFileSync(path.resolve(`${__dirname}/category.gql`));

const post = readFileSync(path.resolve(`${__dirname}/post.gql`));

const mutation = readFileSync(path.resolve(`${__dirname}/mutation.gql`));

const query = readFileSync(path.resolve(`${__dirname}/query.gql`));

module.exports = gql`
  ${category}

  ${post}

  ${mutation}

  ${query}
`;