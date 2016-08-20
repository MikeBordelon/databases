var db = require('../db');
var con = require('../db/index');


module.exports = {
  messages: {
    get: function () {
      con.con.query('select * from messages', function(err, rows) {
        if (err) {
          throw err;
        }
        return rows;
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

