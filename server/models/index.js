var db = require('../db');

module.exports = {
  messages: {
    get: function (request, callback) {
      var queryString = 'SELECT * FROM messages';
      var queryArgs = ['ID', 'messageText', 'roomname', 'username'];

      db.query(queryString, queryArgs, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (body) {
      db.query(`SELECT ID FROM MESSAGES`, (err,ids) => {
        var maxId = 0;
        if(err) { throw err; }
        for (var i = 0; i < ids.length; i++) {
          if (maxId < ids[i].ID) {
            maxId = ids[i].ID;
          }
        }
        db.query(`INSERT INTO messages(ID, messageText, username, roomname) values(${maxId + 1}, "${body.message}", "${body.username}", "${body.roomname}")`, (err, messages) => {
        // callback body
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (name) {
      db.query(`SELECT ID FROM USERS`, (err,ids) => {
        var maxId = 0;
        if(err) { throw err; }
        for (var i = 0; i < ids.length; i++) {
          if (maxId < ids[i].ID) {
            maxId = ids[i].ID;
          }
        }
        db.query(`INSERT INTO users(ID, username) values(${maxId + 1}, "${name}")`, (err, rows) => {
          if(err) { throw err; }
        });
      });
    }
  }
};

