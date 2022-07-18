/**
 * Factory which generate a data validation middleware function
 * @param {string} dataType - type of HTTP user input data source (query, body, or params)
 * @param {object} schema - Schema made with Joi.object()
 * @returns {object} express middleware function
 */
module.exports = (dataType, schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req[dataType]);
    next();
  } catch (err) {
    next(err);
  }
};

