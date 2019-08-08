var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (name) {
      db.connect();
      console.log('getting to here');
      db.query(`INSERT INTO users(ID, username) values(1, "${name}")`, (err,rows) => {
        if(err) { throw err; }
      });
      // do some query to insert username into database;
      // db.end();
    }
  }
};

