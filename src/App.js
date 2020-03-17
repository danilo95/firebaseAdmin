import React from 'react';
import { Router, Route } from 'react-router-dom';
import History from './Components/History/History';
import Index from './Components/Index/Index';
import Login from './Components/Login/Login';

function App() {
	return (
		<Router history={History}>
			<Route path="/" exact component={Index} />
			<Route path="/login" exact component={Login} />
		</Router>
	);
}

export default App;
