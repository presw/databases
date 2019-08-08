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
      new Promise(function(resolve, reject) {
        models.messages.post(req.body, function (results) {
          resolve();
        });
      })
        .then(function(messages) {
          res.send("message post request received");
        });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req.method, res.statusCode);
    },
    post: function (req, res) {
      new Promise((resolve, reject) => {
        models.users.post(req.body.username, (response) => {
          resolve(response);
        });
      })
        .then((response) => {
          res.send("user post request received: " + response);
        });
    }
  }
};
