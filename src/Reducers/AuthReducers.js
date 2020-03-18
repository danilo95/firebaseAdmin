const initialState = {
	userUid: null,
	token: null,
	isLogin: false,
	email: null,
	loading: false,
	loginError: ' ',
	isAdmin: false,
	user: {}
};
export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isLogin: true,
				loading: false,
				loginError: ' ',
				userUid: action.payload[0],
				token: action.payload[1]
			};
		case 'LOGIN_ERRROR':
			return {
				...state,
				loginError: action.payload,
				loading: false
			};
		case 'DEFAULT_ERROR':
			return {
				...state,
				loginError: ' '
			};
		case 'IS_LOADING':
			return {
				...state,
				loading: action.payload
			};
		case 'IS_ADMIN':
			return {
				...state,
				isAdmin: true,
				user: action.payload
			};
		case 'RESET':
			return initialState;

		default:
			return state;
	}
};
