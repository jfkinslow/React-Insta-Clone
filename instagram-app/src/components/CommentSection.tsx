/// <reference path="./ICommentSectionProps.d.ts" />
import React from 'react';
import Comment from './Comment';
import { TiHeartOutline } from 'react-icons/ti';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';
// const date = new Date();

const StyledInput = styled(Input)`
	width: 100%;
`;

class CommentSection extends React.Component<ICommentSectionProps, any> {
	constructor(props: ICommentSectionProps) {
		super(props);
		this.state = {
			parent: this.props.parent,
			comments: this.props.comments,
			comment: '',
		};
	}

	commentChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();
		let target = event.target as HTMLInputElement;
		this.setState({ comment: target.value });
	}

	render() {
		return (
			<div id="comment-section">
				<div id="comment-btn">
					<Button onClick={this.props.addLikeHandler.bind(this.state.parent)}>
						<TiHeartOutline size={32} />
					</Button>
				</div>
				<div id="likes-counter">{this.state.parent.state.post.likes} Likes</div>
				<div id="comments">
					{this.state.comments.map((comment: any, ind: number, arr: Array<Object>) => {
						console.log('CommentID:', comment.id);
						console.log(typeof comment.id);

						return <Comment key={comment.id} comment={comment} />;
					})}
				</div>
				<span className="date-posted" />
				<hr />
				<StyledInput
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
