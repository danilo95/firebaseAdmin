import { login, getAdmin } from '../Api/Requests';
import History from '../Components/History/History';
import { message } from 'antd';

export const loginUser = (user, password) => async dispatch => {
	const response = await login(user, password);
	if (response.status) {
		message.error(response.message);
		dispatch({ type: 'LOGIN_ERRROR', payload: response });
	} else {
		dispatch({ type: 'LOGIN', payload: response });
		History.push('/validate');
	}
};

export const validateAdmin = uid => async dispatch => {
	const response = await getAdmin(uid);
	if (response.status) {
		message.error(response.message);
		dispatch({ type: 'LOGIN_ERRROR', payload: response });
	} else {
		const { isAdmin } = response;
		if (isAdmin) {
			dispatch({ type: 'IS_ADMIN', payload: response });
			History.push('/cms/index');
		} else {
			message.error('no tienes los privilegios adecuados punk');
			History.push('/login');
		}
	}
};

export const defaultError = () => dispatch => {
	dispatch({ type: 'DEFAULT_ERROR' });
};
export const loading = () => {
	return { type: 'IS_LOADING', payload: true };
};
