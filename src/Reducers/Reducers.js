import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import NewUserReducer from './AuthReducers';

export default combineReducers({
	form: formReducer,
	newUser: NewUserReducer
});
