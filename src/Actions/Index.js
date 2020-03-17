import { login } from '../Api/Requests';
import History from '../Components/History/History';
import { message } from 'antd';

export const loginUser = (user, password) => async dispatch => {
	const response = await login(user, password);
	if (response.status) {
		message.error(response.message);
		dispatch({ type: 'LOGIN_ERRROR', payload: response });
	} else {
		dispatch({ type: 'LOGIN', payload: response });
		History.push('/Homepage/Homepage');
	}
};

export const defaultError = () => dispatch => {
	dispatch({ type: 'DEFAULT_ERROR' });
};
export const loading = () => {
	return { type: 'IS_LOADING', payload: true };
};
