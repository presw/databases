var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      new Promise(function(resolve, reject) {
        models.messages.get(req, function (results) {
          resolve(results);
        });
      })
        .then(function(messages) {
          res.send(messages);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.send("message post request received"); // a function which handles posting a message to the database
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
      res.send("user post request received");
    }
  }
};
