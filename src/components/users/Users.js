import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		fetch('https://api.github.com/users')
			.then(data => data.json())
			.then(users =>
				this.setState(() => {
					let sixUsers = [];
					for (let i = 0; i < 6; i++) {
						sixUsers.push(users[i]);
					}
					return { users: sixUsers };
				}),
			);
	}

	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColums: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

export default Users;
