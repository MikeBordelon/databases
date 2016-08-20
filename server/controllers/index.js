var models = require('../models');
var utils = require('./utils');

module.exports = {
  messages: {
    get: function (req, res) {
      return models.messages.get(req, res);
      // Get request returns an array of all message object from database
      // Req -> get url /messages
      // Res -> body = db messages table in json format
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      return models.messages.post(req, res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      return models.users.get(req, res);

    },
    post: function (req, res) {
      console.log(req);
      utils.collectData(req, function (newuser) {
        models.users.post(newuser);
        utils.sendResponse(res, newuser, 201);
      }); 
    }
  }
};

