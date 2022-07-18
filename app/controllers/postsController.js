const {Posts} = require('../models');

const PostError = require('../errors/postError');




module.exports = {
  async getPosts(req, res) {
    const postsData = await Posts.findAll();
    console.log('ICICICICIREQICICICI↓↓↓↓↓↓',postsData);
    if(!postsData) {
      throw new PostError('No posts data available');
    }
    
    res.json({postsData: postsData})
  },
  async getOnePost(req, res) {
    const id = +req.params.id
    const postData = await Posts.findById(id)
    if(!postData) {
      throw new PostError('No post data available')
    }
    res.json({postData : postData})
  },
  async createPost(req, res) {    
    const newPost = req.body    
    const createNewPost = await Posts.createPost(newPost)
    res.json({newPost : newPost})
  },
  async getPostsByCategoryId(req, res) {
    const categoryId = +req.params.id        
    const postsData = await Posts.findPostsByLabel(categoryId)
    if(!postsData) {
      throw new PostError('No posts data available')
    }
    res.json({postsData : postsData})
  },
  async updatePost(req, res) {
    const id = +req.params.id
    const postModifications = req.body
    const postData = await Posts.findById(id)
    if(!postData) {
      throw new PostError('No post data available')
    }
    if(postModifications.slug) {
      postData.slug = postModifications.slug;
    }
    if(postModifications.title) {
      postData.title = postModifications.title;
    }
    if(postModifications.excerpt) {
      postData.excerpt = postModifications.excerpt;
    }
    if(postModifications.content) {
      postData.content = postModifications.content;
    }
    if(postModifications.Category_id) {
      postData.Category_id = postModifications.Category_id;
    }
    const postSave = await Posts.savePost(postData)
    res.json({postData : postSave})
  },
  async deletePost(req, res) {
    const id = +req.params.id    
    const postData = await Posts.findById(id)
    if(!postData) {
      throw new PostError('No post data available')
    } else {
    await Posts.deleteById(id)
  }
  res.json({postData : "deleted with success"})
  },
}