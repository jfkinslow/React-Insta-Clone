import React from 'react';
import data from '../dummy-data';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component<any> {
	constructor(props: any) {
		super(props);
		this.state = {
			posts: data,
			filteredposts: data,
			search: ''
		}
	}
	searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();
		let target = event.target;
		this.setState({search: target.value});
	}
	searchHandler(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (event.key === 'Enter') {
			let target = event.target;
			if (target.value !== "") {
				let newFiltered = this.state.posts.filter((post: any) => post.username === target.value);
				this.setState({filteredposts: newFiltered});
			} else {
				this.setState({filteredposts: this.state.posts});
			}
		} else {
		}
	}
	render() {
		return (
			<div className="App">
				<SearchBar parent={this} searchChangeHandler={this.searchChangeHandler} searchHandler={this.searchHandler} />
				{this.state.filteredposts.map((post: any, ind: number, arr: Array<any>) => {
					console.log('PostID:', post.id);
					return <PostContainer post={post} key={post.id} />;
				})}
			</div>
		);
	}
};

export default PostsPage;
