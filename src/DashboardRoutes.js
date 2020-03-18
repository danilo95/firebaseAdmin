import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';
import BasicLayout from './Layout/BasicLayout';
import Index from './Components/Index/Index';

const DashboardRoutes = () => {
	return (
		<BasicLayout>
			<Switch>
				<PrivateRoute exact path="/cms/index" component={Index} />
			</Switch>
		</BasicLayout>
	);
};

export default DashboardRoutes;
