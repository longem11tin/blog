const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Was Defined in index.js file 
// reading from the top to bottom so, if top right, will skip bot;

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;