var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');


//allows us to assign new properties to a new dispatcher
var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action){
    console.log('action', action);

    //dispatch method from the dispatcher
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })

  }
});

module.exports = AppDispatcher;
