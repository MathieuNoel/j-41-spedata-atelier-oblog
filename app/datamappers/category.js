const CoreDatamapper = require('./coreDatamapper');

const client = require('../clients/pg');

class Category extends CoreDatamapper {
  tebleName = 'category';

  async findByPost(categoryId) {
    const preparedQuery = {
      text: `
          SELECT * 
          FROM "${this.tableName}"
          WHERE "id" = $1`,
      values: [categoryId],
    };
    const result = await this.client.query(preparedQuery);

    return result.rows;
  }
}

module.exports = new Category(client)