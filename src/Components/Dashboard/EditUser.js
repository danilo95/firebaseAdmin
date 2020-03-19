import React, { Component } from 'react';

export default class EditUser extends Component {
	componentDidMount() {
		console.log(this.props.match.params);
	}
	render() {
		return <div>aca editare al usuario</div>;
	}
}
