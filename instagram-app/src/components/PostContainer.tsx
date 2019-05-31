/// <reference path="./IPostContainerProps.d.ts" />
import React from 'react';
import CommentSection from './CommentSection';
import uuid from 'uuid';

class PostContainer extends React.Component<IPostContainerProps, any> {
	constructor(props: IPostContainerProps) {
		super(props);
		this.state = {
			parent: this.props.parent,
			post: this.props.post,
		};
	}
	componentDidMount() {
		console.log(this.state.post);
	}
	addLikeHandler(event: React.MouseEvent<HTMLButtonElement>): void {
		let newPost = Object.assign(this.state.post);
		let newLikes = newPost.likes + 1;
		console.log('New Likes: ', newLikes);
		newPost.likes = newLikes;
		this.setState({ post: newPost });
		let index = this.state.parent.state.posts.indexOf(this.state.post);
		let newPosts = this.state.parent.state.posts;
		newPosts[index] = newPost;
		this.state.parent.setState({ posts: newPosts });
		localStorage.setItem('posts', JSON.stringify(newPosts));
	}
	addCommentHandler(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (event.key === 'Enter') {
			let target = event.target as HTMLInputElement;

			console.log(`Object: ${target.name}, Value: ${target.value}`);
			let newPost = Object.assign(this.state.post);
			let newId = uuid.v1();
			let newComment = { text: target.value, username: this.state.parent.state.username, id: newId };
			newPost.comments.push(newComment);
			this.setState({ post: newPost });
			let index = this.state.parent.state.posts.indexOf(this.state.post);
			let newPosts = this.state.parent.state.posts;
			newPosts[index] = newPost;
			this.state.parent.setState({ posts: newPosts });
			localStorage.setItem('posts', JSON.stringify(newPosts));
		} else {
		}
	}

	render() {
		return (
			<div key={this.state.post.id}>
				<div className="postHeader">
					<img className="avatar" src={this.state.post.thumbnailUrl} alt={this.state.post.username} />{' '}
					<span className="Username">{this.state.post.username}</span>
				</div>
				<img src={this.state.post.imageUrl} alt={this.state.post.comments[0]} />
				<div className="inner">
					<CommentSection
						parent={this}
						comments={this.state.post.comments}
						addCommentHandler={this.addCommentHandler}
						addLikeHandler={this.addLikeHandler}
					/>
				</div>
			</div>
		);
	}
}

export default PostContainer;
