const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Was Defined in index.js file 
// reading from the top to bottom so, if top right, will skip bot;

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;