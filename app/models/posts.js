const CoreDatamapper = require('./coreDatamapper');

module.exports = class Posts extends CoreDatamapper {
  static tableName = 'post';
};