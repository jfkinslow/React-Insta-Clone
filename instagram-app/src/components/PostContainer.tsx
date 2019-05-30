/// <reference path="./IPostContainerProps.d.ts" />
import React from 'react';
import CommentSection from './CommentSection';

class PostContainer extends React.Component<IPostContainerProps, any> {
	constructor(props: IPostContainerProps) {
		super(props);
		this.state = {
			post: this.props.post,
		};
	}
	componentDidMount() {
		console.log(this.state.post);
	}
	addCommentHandler(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (event.key === 'Enter') {
			console.log(`Object: ${event.target.name}, Value: ${event.target.value}`);
			let newPost = Object.assign(this.state.post);
			let newComment = { text: event.target.value, username: 'unknown' };
			// newPost.comments.push(newComment);
			// this.setState({ post: newPost });
		} else {
		}
	}

	render() {
		return (
			<div className="post" key={this.state.post.id}>
				<img src={this.state.post.imageUrl} alt={this.state.post.comments[0]} />
				<div className="inner">
					<CommentSection
						parent={this}
						comments={this.state.post.comments}
						addCommentHandler={this.addCommentHandler}
					/>
				</div>
			</div>
		);
	}
}

export default PostContainer;
