const CoreDatamapper = require('./coreDatamapper');

const client = require('../clients/pg');

class Post extends CoreDatamapper {
  tableName = 'post';

  async findByCategory(categoryId) {
    const prepatedQuery = {
      text: `
          SELECT *
          FROM "${this.tableName}"
          WHERE "category_id" = $1`,
      values: [categoryId]
    };

    const result = await this.client.query(preparedQuery);

    return result.raows
  }
}

module.exports = new Post(client);