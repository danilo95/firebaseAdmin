import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import history from '../Components/History/History';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = props => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = collapsed => {
		setCollapsed(collapsed);
	};

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
				<SubMenu
					key="dev"
					title={
						<span>
							<Icon type="team" />
							<span>Administrador</span>
						</span>
					}
				>
					<Menu.Item
						key="1"
						onClick={() => history.push('/cms/users')}
					>
						Users
					</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};

export default connect()(SideBar);
