import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducers from './AuthReducers';

export default combineReducers({
	form: formReducer,
	login: AuthReducers
});
