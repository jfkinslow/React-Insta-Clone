/// <reference path="./IPostContainerProps.d.ts" />
import React from 'react';
import CommentSection from './CommentSection';
import uuid from 'uuid';

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
			let target = event.target;

			console.log(`Object: ${target.name}, Value: ${target.value}`);
			let newPost = Object.assign(this.state.post);
			let newId = uuid.v1();
			let newComment = { text: target.value, username: 'unknown', id: newId };
			newPost.comments.push(newComment);
			this.setState({ post: newPost });
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
