import React from 'react';
import './App.css';
import withAuthenticate from './authentication/withAuthenticate.js';
import PostsPage from './components/PostsPage';
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);
class App extends React.Component<any> {
	constructor(props: any) {
		super(props);
		this.state = {
		}
	}
	
	render() {
		return (
			<ComponentFromWithAuthenticate />
		);
	}
};

export default App;
