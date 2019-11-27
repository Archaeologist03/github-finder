import React, { Component } from 'react';

export class UserItem extends Component {
	state = {
		id: this.props.user.id,
		login: this.props.user.login,
		avatar_url: this.props.user.avatar_url,
		html_url: this.props.user.html_url,
	};

	render() {
		const { avatar_url, login, html_url } = this.state;

		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt=''
					className='round-img'
					style={{ width: '60px' }}
				/>
				<h3>{login}</h3>

				<div>
					<a href={html_url} className='btn btn-dark btn-sm my-1'>
						{' '}
						More{' '}
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
