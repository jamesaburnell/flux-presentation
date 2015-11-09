var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');


//all of these call handleViewAction from our add-dispatcher
var AppActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      //comes from our app-constants
      actionType: AppConstants.ADD_ITEM,
      //also adds an item to the cart
      item: item
    })
  },
  removeItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      index: index
    })
  },
  increaseItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_ITEM,
      index: index
    })
  },
  decreaseItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DECREASE_ITEM,
      index: index
    })
  }
}

module.exports = AppActions;
