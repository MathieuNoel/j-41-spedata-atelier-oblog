const postDatamapper = require('../datamappers/post');

module.exports = {
  posts(parent) {
    return postDatamapper.findByCategory(parent.id);
  },
};