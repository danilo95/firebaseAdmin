import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { emailValidation, required } from '../validations/Validations';
import { loginUser, defaultError, loading } from '../../Actions/Index';
import { Button } from 'antd';
import firebase from 'firebase';
import History from '../History/History';
import { firebaseConfig } from '../../FirebaseConfig';

class Login extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		var app = firebase.initializeApp({ firebaseConfig });
	}

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div>
					<div className="error_alert">
						<i
							className="fa fa-exclamation-triangle"
							aria-hidden="true"
						>
							-
						</i>
						{error}
					</div>
				</div>
			);
		}
	}

	renderInput = ({ input, meta, label, type, className }) => {
		return (
			<div className="field">
				<input
					{...input}
					placeholder={label}
					type={type}
					className={className}
				/>
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {
		this.props.loading();
		this.props.loginUser(formValues.email, formValues.passwordSing);
		alert('hiciste submit');
	}
	render() {
		return (
			<>
				<div className="login-wrap">
					<div className="login-html">
						<form
							onSubmit={this.props.handleSubmit(this.onSubmit)}
							className="ui form"
						>
							<label htmlFor="tab-2" className="tab" />
							<div className="login-form">
								<div className="sign-in-htm">
									<div className="group">
										<label htmlFor="user" className="label">
											Username
										</label>
										<Field
											name="email"
											type="email"
											label="example@gmail.com"
											className="input"
											component={this.renderInput}
										/>
									</div>
									<div className="group">
										<label htmlFor="pass" className="label">
											Password
										</label>
										<Field
											name="passwordSing"
											type="password"
											label="*******"
											className="input"
											component={this.renderInput}
										/>
									</div>

									<div className="group">
										<input type="submit" value="Log In" />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}

const validate = ({ email, passwordSing }) => {
	const errors = {};
	errors.email = emailValidation(email);
	errors.passwordSing = required(passwordSing);
	return errors;
};

const mapStateToProps = state => {
	return {
		loginError: state.newUser.loginError,
		isLogin: state.newUser.isLogin,
		loadingState: state.newUser.loading
	};
};
export default connect(mapStateToProps, {
	loginUser,
	defaultError,
	loading
})(
	reduxForm({
		form: 'loginForm',
		validate
	})(Login)
);
