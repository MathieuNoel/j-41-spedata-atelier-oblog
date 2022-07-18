const joi = require('joi');

module.exports = joi.object({
  id: joi.string()
    .pattern(/^[\d]+$/),  
  slug: joi.string()
      .min(2)
      .pattern(/^[^ A-Z].*$/),      
  title: joi.string()
      .min(2),      
  excerpt: joi.string()
      .min(2),
  content: joi.string()
      .min(2),
  category_id: joi.string()
})