import baseUrl from './AuthApi';
import firebase from 'firebase';

export const login = (userEmail, userPassword) => {
	let result = firebase
		.auth()
		.signInWithEmailAndPassword(userEmail, userPassword)
		.then(credential => {
			console.log(credential);
			return credential.user.uid;
		})
		.catch(error => {
			return handleError(error);
		});
	return result;
};

export const getAdmin = uid => {
	let result = baseUrl
		.get(`/profile?uid=${uid}`, {
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
