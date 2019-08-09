var Messages = {

  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.ID] = Messages._conform(message);
    }
    console.log(Messages._data);

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {

    // ensure each message object conforms to expected shape
    message.messageText = message.messageText || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    console.log(message);
    return message;
  }

};
