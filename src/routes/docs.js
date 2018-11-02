let express = require('express')
let router = express.Router()
let swaggerJSDoc = require('swagger-jsdoc');
let path =require('path');

// -- setup up swagger-jsdoc --
let swaggerDefinition = {
  info: {
    title: 'FILacronym',
    version: '1.0.0',
    description: 'FIL acronyms',
  },
  host: 'localhost:3000',
  basePath: '/',
};

let options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, './acronym.js')],
  //apis: ['./acronym.js'],
};

let swaggerSpec = swaggerJSDoc(options);

// -- routes for docs and generated swagger spec --
router.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, '/../docs/redoc.html'));
});

router.get('/docs/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

module.exports = router