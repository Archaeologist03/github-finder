import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		fetch('https://api.github.com/users')
			.then(data => data.json())
			.then(users => this.setState({ users }));
	}

	render() {
		return (
			<div className='App'>
				<Navbar title='Github Finder' icon='fab fa-github' />
				{this.state.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

export default App;
