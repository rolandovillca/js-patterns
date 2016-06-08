var publisher = {
  subscribers: {
    any: [] // Event type subscribers.
  },
  subscribe: function(fn, type) {
    type = type || 'any'
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  unsuscribe: function(fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  publish: function(publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  visitSubscribers: function(action, arg, type) {
    var pubtype = type || 'any',
    subscribers = this.subscribers[pubtype],
    i,
    max = subscribers.length;

    for (var i = 0; i < max; i++) {
      if (action === 'publish') {
        subscribers[i].(arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
}
