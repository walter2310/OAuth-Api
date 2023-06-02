const { request, response } = require('express'); 
const { ConnectionError } = require('../ERRORS/Errors');
const axios = require('axios');

const githubAuthRedirect = async(req = request, res = response) => {
  try {
      await axios.post("https://github.com/login/oauth/access_token", {
          client_id: process.env.GITHUB_CLIENT,  
          client_secret: process.env.GITHUB_SECRET,  
          code: req.query.code,  
      },{
          headers: {
            Accept: "application/json"
          }
      }).then((result) => {
          res.send("You are authorized ")
      });

  } catch (error) {
    res.status(400).json({
      status: 'FAILED',
      error: new ConnectionError
    });
  }
}


module.exports = {
  githubAuthRedirect
}