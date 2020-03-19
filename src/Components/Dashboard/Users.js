import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import History from '../History/History';

const columns = [
	{
		title: 'ID',
		dataIndex: 'ID',
		key: 'ID',
		render: text => <a>{text}</a>
	},
	{
		title: 'Email',
		dataIndex: 'Email',
		key: 'Email'
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: tags => (
			<span>
				{tags.map(tag => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'Ambassador') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		)
	},
	{
		title: 'Action',
		key: 'action',
		render: text => (
			<span>
				<a style={{ marginRight: 5 }}>View</a>
				<a>Delete</a>
			</span>
		)
	}
];

const data = [
	{
		ID: 'lwknsSMU1vhIxlKPESnFwelhYFo2',
		Email: 'ben@reknot.com',
		age: 32,
		tags: ['Ambassador']
	},
	{
		ID: 'MfNCEZMhxqNsAFutjxyetnEzPdU2',
		Email: 'cj@redknot.com',
		age: 42,
		tags: ['Traveller']
	},
	{
		ID: '3',
		Email: 'michelle@goredknot.com',
		age: 32,
		tags: ['Ambassador']
	}
];

export default class Users extends Component {
	render() {
		return (
			<div>
				<Table
					columns={columns}
					dataSource={data}
					onRow={record => ({
						onClick: () => {
							History.push('/cms/edituser/' + record.ID);
						}
					})}
					rowKey="ID"
				/>
			</div>
		);
	}
}
