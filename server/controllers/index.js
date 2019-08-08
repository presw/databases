var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req.method, res.statusCode);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('MESSAGE', req.method, res.statusCode);
      res.send("OY OY OY OY"); // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req.method, res.statusCode);
    },
    post: function (req, res) {
      console.log('USER', req.body.username, res.statusCode);
      models.users.post(req.body.username);
      res.send("received message");
    }
  }
};

