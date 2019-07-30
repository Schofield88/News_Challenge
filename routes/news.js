const express = require('express');

const router = express.Router();
const news = require('../controllers/newsController');

/* GET the news. */
router.post('/', news.thisIsTheNews);

module.exports = router;
