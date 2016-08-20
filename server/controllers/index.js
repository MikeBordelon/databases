var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      return models.messages.get;
      // Get request returns an array of all message object from database
      // Req -> get url /messages
      // Res -> body = db messages table in json format
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

