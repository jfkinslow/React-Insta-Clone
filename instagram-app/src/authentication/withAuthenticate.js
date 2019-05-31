import React from 'react';

const withAuthenticate = PostsPage => LoginPage => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loggedIn: false,
				username: '',
			};
		}
		componentDidMount() {
			let username = localStorage.getItem('username');
			if (username !== null) {
				this.setState({ loggedIn: true, username: username });
			}
		}
		render() {
			if (this.state.loggedIn) {
				return <PostsPage username={this.state.username} />;
			} else {
				return <LoginPage />;
			}
		}
	};
};
export default withAuthenticate;
