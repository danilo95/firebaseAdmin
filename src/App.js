import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import History from './Components/History/History';
import firebase from 'firebase';
import AppRoutes from './AppRoutes';
import { firebaseConfig } from './FirebaseConfig';

import 'antd/dist/antd.css';

function App() {
	useEffect(() => {
		firebase.initializeApp(firebaseConfig);
	});
	return (
		<Router history={History}>
			<AppRoutes />
		</Router>
	);
}

export default App;
