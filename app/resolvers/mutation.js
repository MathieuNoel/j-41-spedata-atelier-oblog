const postDatamapper = require('../datamappers/post');

const categoryDatamapper = require('../datamappers/category');

module.exports = {
  createPost(_,args) {
    return postDatamapper.create(args.input);
  },

  createCategory(_,args) {
    return categoryDatamapper.create(args.input);
  },
}