import {combineReducers} from 'redux';
import {usersListReducer} from './users';
import {currentUserReducer} from './currentUser';

export default combineReducers({
  detail: currentUserReducer,
  users: usersListReducer,
});
