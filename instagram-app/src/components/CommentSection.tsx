/// <reference path="./ICommentSectionProps.d.ts" />
import React from 'react';
import Comment from './Comment';
import { TiHeartOutline } from 'react-icons/ti';
// const date = new Date();

class CommentSection extends React.Component<ICommentSectionProps, any> {
	constructor(props: ICommentSectionProps) {
		super(props);
		this.state = {
			parent: this.props.parent,
			comments: this.props.comments,
			comment: '',
		};
	}

	commentChangeHandler(event: any): void {
		event.preventDefault();
		let target = event.target as HTMLInputElement;
		this.setState({ comment: target.value });
	}

	render() {
		return (
			<div id="comment-section">
				<div id="comment-btn">
					<TiHeartOutline size={32} />
				</div>
				<div id="comments">
					{this.state.comments.map((comment: any, ind: number, arr: Array<Object>) => {
						console.log('CommentID:', comment.id);
						console.log(typeof comment.id);

						return <Comment key={comment.id} comment={comment} />;
					})}
				</div>
				<span className="date-posted" />
				<hr />
				<input
					type="text"
					placeholder="Add a comment..."
					className="add-comment"
					value={this.state.comment}
					onChange={this.commentChangeHandler.bind(this)}
					onKeyDown={this.props.addCommentHandler.bind(this.state.parent)}
					name={this.state.parent.state.post.id}
				/>
			</div>
		);
	}
}

export default CommentSection;
