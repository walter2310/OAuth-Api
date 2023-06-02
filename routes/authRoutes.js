const express = require('express');
const router = express.Router();
const oauthControllers = require('../controllers/authController');

router.get('/auth', function(req, res) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT}`)
});

router.get('/oauth/redirect', oauthControllers.githubAuthRedirect)

module.exports = router;