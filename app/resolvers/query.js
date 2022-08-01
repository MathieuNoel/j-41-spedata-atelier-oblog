const postDatamapper = require('../datamappers/post');

const categoryDatamapper = require('../datamappers/category');


module.exports = {
  posts() {
    return postDatamapper.findAll();
  },

  post(_,args) {
    return postDatamapper.findByPk(args.id);
  },

  categories() {
    return categoryDatamapper.findAll();
  },

  category(_,args) {
    return categoryDatamapper.findByPk(args.id);
  },
}