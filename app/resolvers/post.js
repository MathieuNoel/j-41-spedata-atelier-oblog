const categoryDatamapper = require('../datamappers/category');


module.exports = {
  category(parent) {
    return categoryDatamapper.findByPost(parent.id);
  },
};