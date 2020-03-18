import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';
import DashboardRoutes from './DashboardRoutes';
import Login from './Components/Login/Login';
import ValidateSesion from './Components/validateSesion/ValidateSesion';

const AppRoutes = () => {
	return (
		<Switch>
			<PrivateRoute path="/cms" component={DashboardRoutes} />
			<Route exact path="/" component={Login} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/validate" component={ValidateSesion} />
		</Switch>
	);
};

export default AppRoutes;
