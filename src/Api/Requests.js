import baseUrl from './AuthApi';
import firebase from 'firebase';

export const login = (userEmail, userPassword) => {
	let result = firebase
		.auth()
		.signInWithEmailAndPassword(userEmail, userPassword)
		.then(credential => {
			console.log('entre');
			return credential;
		})
		.catch(error => {
			console.log('error');
			return handleError(error);
		});
};

const handleError = errorHttp => {
	switch (errorHttp.response.status) {
		case 400:
			return { status: 400, message: errorHttp.response.data.error };
		default:
			return { status: 500, message: errorHttp.response.data.error };
	}
};
