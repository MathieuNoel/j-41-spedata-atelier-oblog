const client = require('../clients/pg');

module.exports = class CoreDatamapper {
  static async findAll() {    
    const result = await client.query(`
      SELECT * FROM "${this.tableName}"
      `);
    return result.rows;
  }

  static async findById(id) {    
    const preparedQuery = {
      text : `
        SELECT * FROM "${this.tableName}"
        WHERE 
        "id"=$1
        `,
      values : [id],
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }

  static async createPost(value) {    
    const preparedQuery = {
      text : `
      INSERT INTO "${this.tableName}"
      ("slug","title","excerpt","content","category_id")
      VALUES
      ($1, $2, $3, $4, $5)
      `,
      values : [        
        value.slug,
        value.title,
        value.excerpt,
        value.content,
        value.category_id
      ],
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }
  static async createCategory(value) {
    const preparedQuery = {
      text : `
      INSERT INTO "${this.tableName}" 
      ("route","label")
      VALUES
      ($1, $2)
      `,
      values : [
        value.route,
        value.label
      ],
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }
  

  static async findPostsByLabel(id) {
    const preparedQuery = {
      text : `
        SELECT * FROM "${this.tableName}"
        WHERE 
        "category_id"=$1
        `,
      values : [id],
    }
    const result = await client.query(preparedQuery);
    return result.rows;
  }

  static async savePost({ slug, title, excerpt, content, category_id,id}) {
    
    const preparedQuery = {
      text : `UPDATE "${this.tableName}"
          SET          
          "slug"=$1,
          "title"=$2,
          "excerpt"=$3,
          "content"=$4,
          "category_id"=$5
          WHERE
          "id"=$6
          `,
      values : [slug, title, excerpt, content, category_id, id]
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }

  static async saveCategory({id, route, label}) {    
    const preparedQuery = {
      text : `UPDATE "${this.tableName}"
          SET          
          "route"=$1,
          "label"=$2          
          WHERE
          "id"=$3
          `,
      values : [route, label, id]
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }

  static async deleteById(id) {
    const preparedQuery = {
      text : `DELETE FROM "${this.tableName}"
          WHERE
          "id"=$1
          `,
      values : [id],
    }
    const result = await client.query(preparedQuery);
    return result.rows;
  }
  
};
