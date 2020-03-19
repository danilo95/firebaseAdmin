import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';
import BasicLayout from './Layout/BasicLayout';
import Index from './Components/Index/Index';
import Users from './Components/Dashboard/Users';
import EditUser from './Components/Dashboard/EditUser';

const DashboardRoutes = () => {
	return (
		<BasicLayout>
			<Switch>
				<PrivateRoute exact path="/cms/index" component={Index} />
				<PrivateRoute exact path="/cms/users" component={Users} />
				<PrivateRoute
					exact
					path="/cms/edituser/:uid"
					component={EditUser}
				/>
			</Switch>
		</BasicLayout>
	);
};

export default DashboardRoutes;
