const expressJSDocSwagger = require('express-jsdoc-swagger');

module.exports = (app) => expressJSDocSwagger(app)(option = {
  info: {
    version: '1.0.0',
    title: 'oblog',
    description: 'API permettant d\'afficher des posts et leurs categories',
    license: {
        name: 'MIT',
    },
},
baseDir: __dirname,
// Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
filesPattern: '../**/*.js', // Tous ce qui se trouve dans /app
// URL where SwaggerUI will be rendered
swaggerUIPath: '/api-docs',
// Expose OpenAPI UI
exposeSwaggerUI: true,
// Expose Open API JSON Docs documentation in `apiDocsPath` path.
exposeApiDocs: true,
// Open API JSON Docs endpoint.
apiDocsPath: '/v3/api-docs',
// Set non-required fields as nullable by default
notRequiredAsNullable: false,
})