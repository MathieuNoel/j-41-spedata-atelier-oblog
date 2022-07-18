const joi = require('joi');

module.exports = joi.object({
  id: joi.string()
    .pattern(/^[\d]+$/),
  route: joi.string()
      .min(1)
      .pattern(/^\/[^- A-Z]*$/),
      // .required(),
  label: joi.string()
      .min(2)
      .pattern(/^[A-Z]{1}[^\d ][a-z]{3,}$/),
      // .required(),
})