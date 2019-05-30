/// <reference path="./ICommentProps.d.ts" />
import React from 'react';

class Comment extends React.Component<ICommentProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			comment: this.props.comment,
		};
	}

	render() {
		return (
			<div className="comment">
				<p>
					<span className="bold">{this.state.comment.username}</span> {this.state.comment.text}
				</p>
			</div>
		);
	}
}

export default Comment;
