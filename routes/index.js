const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// '/' Path
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});


module.exports = router;