const express = require('express');
const router = express.Router();
const testsRouter = require('./tests');
const resultsRouter = require('./results');
router.use('/tests', testsRouter);
router.use('/results', resultsRouter);
module.exports = router;