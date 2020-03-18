import baseUrl from './AuthApi';
import firebase from 'firebase';

export const login = (userEmail, userPassword) => {
	let result = firebase
		.auth()
		.signInWithEmailAndPassword(userEmail, userPassword)
		.then(credential => {
			return [credential.user.uid, credential.user.refreshToken];
		})
		.catch(error => {
			return handleError(error);
		});
	return result;
};

export const getAdmin = (uid, token) => {
	let result = baseUrl
		.get(`/profile?uid=${uid}&token=${token}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return handleError(error);
		});

	return result;
};

const handleError = errorHttp => {
	switch (errorHttp.code) {
		case 400:
			return { status: 400, message: errorHttp.message };
		default:
			return { status: 500, message: errorHttp.message };
	}
};
