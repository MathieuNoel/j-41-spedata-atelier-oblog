const express = require('express');

const router = express.Router()

const controllers = require('../controllers');

const controllerHandler = require('../helpers/controllerHandler');

const schemasPosts = require('../validation/schemas/posts');

const schemasCategories = require('../validation/schemas/categories');

const validation = require('../validation/validator');

/**
 * a posts
 * @typedef {object} posts
 * @property {string} posts - the posts
 */
router.route('/posts')
  /**
   * GET /posts
   * @summary show all posts
   * @return {post} 200 - success response - application/json
   * @return {UserInputError} 400 - user error response - application/json
  */
  .get(controllerHandler(controllers.postsController.getPosts))
  /**
   * POST /posts
   * @summary create new posts   
   * @param {string} request.body.slug - create slug of the post
   * @param {string} request.body.title - create title of the post
   * @param {string} request.body.excerpt- create excerpt of the post
   * @param {string} request.body.content - create content of the post
   * @param {string} request.body.category_id - create category_id of the post
   * @return {post} 200 - success response - application/json
   * @return {UserInputError} 400 - user error response - application/json
   */
  .post(validation('body', schemasPosts), controllerHandler(controllers.postsController.createPost))
/**
 * a post
 * @typedef {object} post
 * @property {string} post - one post
 */
router.route('/posts/:id')
  /**
     * GET /posts/:id
     * @summary show one post
     * @return {post} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
    */
  .get(validation('params', schemasPosts), controllerHandler(controllers.postsController.getOnePost))
  /**
     * PATCH /posts/:id
     * @summary modifiy one post     
     * @param {string} request.body.slug - modifiy slug of the post
     * @param {string} request.body.title - modifiy title of the post
     * @param {string} request.body.excerpt- modifiy excerpt of the post
     * @param {string} request.body.content - modifiy content of the post
     * @return {post} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
     */
  .patch(validation('body', schemasPosts),controllerHandler(controllers.postsController.updatePost))
  /**
     * DELETE /posts/:id
     * @summary delete one post
     * @return {post} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
    */
  .delete(controllerHandler(controllers.postsController.deletePost))
/**
 * all posts of one category
 * @typedef {object} posts
 * @property {string} posts - the posts
 */
router.route('/posts/category/:id')
  /**
      * GET /posts/category/:id
      * @summary show all posts of one category
      * @return {post} 200 - success response - application/json
      * @return {UserInputError} 400 - user error response - application/json
      */
  .get(validation('params', schemasCategories), controllerHandler(controllers.postsController.getPostsByCategoryId))
/**
 * a categories
 * @typedef {object} categories
 * @property {string} categories - the categories
 */
router.route('/categories')
   /**
     * GET /categories
     * @summary show all categories
     * @return {categories} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
     */
  .get(controllerHandler(controllers.categoriesController.getCategories))
   /**
     * POST /categories
     * @summary create new category
     * @param {string} request.body.route - create route of the category
     * @param {string} request.body.label - create label of the category     
     * @return {post} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
     */
  .post(validation('body', schemasCategories), controllerHandler(controllers.categoriesController.createCategory))
/**
 * a categories
 * @typedef {object} categories
 * @property {string} categories - the categories
 */
router.route('/categories/:id')
  /**
     * GET /categories/:id
     * @summary show one category
     * @return {categories} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
     */
  .get(controllerHandler(controllers.categoriesController.getOneCategory))
  /**
     * PATCH /categories/:id
     * @summary modifiy one category
     * @param {string} request.body.route - modifiy route of the category
     * @param {string} request.body.label - modifiy label of the category     
     * @return {post} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
     */
  .patch(validation('body', schemasCategories), controllerHandler(controllers.categoriesController.updateCategory))
  /**
     * DELETE /categories/:id
     * @summary delete one category
     * @return {categories} 200 - success response - application/json
     * @return {UserInputError} 400 - user error response - application/json
     */
  .delete(controllerHandler(controllers.categoriesController.deleteCategory))

  module.exports = router;