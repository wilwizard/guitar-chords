var pubsub = {
  subscribe: function(event, func){
    if(this[event]){
      this[event].push(func);
    } else {
      this[event] = [func];
    }
  },
  publish: function(event){
    if(this[event]){
      this[event].forEach(function(func){
        func.call();
      });
    }
  }
};