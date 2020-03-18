import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
import NavBar from './NavBar';

const { Header, Content, Footer } = Layout;

const BasicLayout = props => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<SideBar />
			<Layout style={{ minHeight: '100vh' }}>
				<Header style={{ background: '#fff', padding: 0, height: 26 }}>
					<NavBar />
				</Header>
				<Content style={{ margin: '26px 16px' }}>
					{props.children}
				</Content>
				<Footer style={{ textAlign: 'center' }}>REDKNOT ©2019</Footer>
			</Layout>
		</Layout>
	);
};

export default BasicLayout;
