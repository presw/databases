var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { console.log(req) }, // a function which handles a get request for all messages
    post: function (req, res) { console.log(req) } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { console.log(req) },
    post: function (req, res) { console.log(req) }
  }
};

