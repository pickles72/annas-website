const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// '/' Path
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

router.get('/gallery', (req, res) => {
    res.render('gallery', { title: 'Gallery' });
});

router.get('/splash', (req, res) => {
    res.render('splash', { title: 'Splash' });
});

module.exports = router;