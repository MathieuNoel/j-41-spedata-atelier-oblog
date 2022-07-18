const {Categories} = require('../models');


const CategoryError = require('../errors/categoryError');


module.exports = {
  async getCategories(req, res) {
    const categoriesData = await Categories.findAll();
    if(!categoriesData) {
      throw new CategoryError('No categories data available')
    }
    res.json({categoriesData : categoriesData})
  },
  async getOneCategory(req, res) {
    const id = +req.params.id
    const categoriesData = await Categories.findById(id)
    if(!categoriesData) {
      throw new CategoryError('No category data available')
    }
    res.json({categoryData : categoriesData})
  },
  async createCategory(req, res) {
    const newCategory = req.body
    const createNewCategory = await Categories.createCategory(newCategory)
    res.json({newCategory : createNewCategory})
  },
  async updateCategory(req, res) {
    const id = +req.params.id
    const categoryModifications = req.body
    const categoryData = await Categories.findById(id)
    if(!categoryData) {
      throw new CategoryError('No category data available')
    }
    if(categoryModifications.route) {
      categoryData.route = categoryModifications.route;
    }
    if(categoryModifications.label) {
      categoryData.label = categoryModifications.label;
    }
    const categorySave = await Categories.saveCategory(categoryData)
    res.json({categoryData : categorySave})
  },
  async deleteCategory(req, res) {
    const id = +req.params.id    
    const categoryData = await Categories.findById(id)
    if(!categoryData) {
      throw new CategoryError('No category data available')
    } else {
    await Categories.deleteById(id)
  }
  res.json({categoryData : "deleted with success"})
  }
}