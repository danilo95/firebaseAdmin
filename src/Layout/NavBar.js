import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import history from '../Components/History/History';

class NavBar extends React.Component {
	state = {
		current: ''
	};

	handleClick = e => {
		this.setState({
			current: e.key
		});
		history.push(`/cms${e.key}`);
	};

	render() {
		return (
			<Menu
				style={{ border: 0 }}
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal"
			>
				<Menu.Item key="/profile" style={{ float: 'right' }}>
					<Icon type="user" />
					Profile
				</Menu.Item>
			</Menu>
		);
	}
}

export default NavBar;
