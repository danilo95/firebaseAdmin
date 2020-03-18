import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAdmin = false, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isAdmin ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};

const mapStateToProps = state => {
	const { isAdmin } = state.login.user;
	return {
		isAdmin
	};
};

export default connect(mapStateToProps)(PrivateRoute);
