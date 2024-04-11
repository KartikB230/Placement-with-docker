import { createStore } from 'redux';

const initialState = {
  notifications: []
};

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        notifications: [...state.notifications, action.payload]
      };
    default:
      return state;
  }
}

const store = createStore(notificationReducer);

export default store;