import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateAdmin, defaultError, loading } from '../../Actions/Index';

class ValidateSesion extends Component {
	componentDidMount() {
		this.props.validateAdmin(this.props.uid);
	}
	render() {
		return <div>que no ven que estoy validando</div>;
	}
}

const mapStateToProps = state => {
	return {
		uid: state.login.userUid
	};
};
export default connect(mapStateToProps, {
	validateAdmin,
	defaultError,
	loading
})(ValidateSesion);
