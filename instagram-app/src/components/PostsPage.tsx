/// <reference path="IPostsPageProps.d.ts" />
import React from 'react';
import data from '../dummy-data';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component<IPostsPageProps, any> {
	constructor(props: any) {
		super(props);
		this.state = { posts: [], filteredposts: [], search: '', username: this.props.username };
	}
	componentDidMount() {
		let firstTime = localStorage.getItem('firstLoad');
		if (firstTime !== null) {
			let posts = localStorage.getItem('posts');
			if (posts !== null) {
				let parsed = JSON.parse(posts);
				this.setState({
					posts: parsed,
					filteredposts: parsed,
				});
				console.log('loaded data from local storage');
			} else {
				this.setState({
					posts: data,
					filteredposts: data,
				});
				localStorage.setItem('firstLoad', 'false');
				localStorage.setItem('posts', JSON.stringify(data));
			}
		} else {
			this.setState({
				posts: data,
				filteredposts: data,
			});
			localStorage.setItem('firstLoad', 'false');
			localStorage.setItem('posts', JSON.stringify(data));
		}
	}
	searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();
		let target = event.target;
		this.setState({ search: target.value });
	}
	searchHandler(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (event.key === 'Enter') {
			let target = event.target as HTMLInputElement;
			if (target.value !== '') {
				let newFiltered = this.state.posts.filter((post: any) => post.username === target.value);
				this.setState({ filteredposts: newFiltered });
			} else {
				this.setState({ filteredposts: this.state.posts });
			}
		} else {
		}
	}
	render() {
		return (
			<div className="App">
				<SearchBar
					parent={this}
					searchChangeHandler={this.searchChangeHandler}
					searchHandler={this.searchHandler}
				/>
				{this.state.filteredposts.map((post: any, ind: number, arr: Array<any>) => {
					console.log('PostID:', post.id);
					return <PostContainer parent={this} post={post} key={post.id} />;
				})}
			</div>
		);
	}
}

export default PostsPage;
