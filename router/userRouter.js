// external imports
const express = require('express');

// internal imports
const { getUsers } = require('../controller/userController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const router = express.Router();

// isers page
router.get('/', decorateHtmlResponse('Users'), getUsers);

module.exports = router;