/// <reference path="./IPostContainerProps.d.ts" />
import React from 'react';
import CommentSection from './CommentSection';
import uuid from 'uuid';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import styled from 'styled-components';

const AvatarImage = styled.img`
	width: 64px;
`;

const StyledCard = styled(Card)`
	font-size: 1.6rem;
	max-width: 640px;
	margin: 10px auto;
	justify-content: flex-start;
`;

const StyledCardBody = styled(CardBody)`
	&& {
		padding-top: 0;
	}
	flex-grow: 0;
	flex-shrink: 0;
`;

const CardText = styled.div`
	&:last-child {
		margin-bottom: 0;
	}
`;

const StyledCardHeader = styled(CardTitle)`
	margin: 10px;
	&& {
		margin-bottom: 0;
	}
	padding: 0;
`;

const StyledCardImage = styled(CardImg)`
	height: 400px;
	margin: 10px 0;
`;

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
			<StyledCard key={this.state.post.id}>
				<StyledCardHeader>
					<AvatarImage src={this.state.post.thumbnailUrl} alt={this.state.post.username} />{' '}
					<span className="Username">{this.state.post.username}</span>
				</StyledCardHeader>
				<StyledCardBody>
					<StyledCardImage
						src={this.state.post.imageUrl}
						alt={
							this.state.post.comments[0].username === this.state.post.username
								? this.state.post.comments[0].text
								: `${this.state.post.username} did not add a comment during the posting`
						}
					/>
					<CardText>
						<CommentSection
							parent={this}
							comments={this.state.post.comments}
							addCommentHandler={this.addCommentHandler}
							addLikeHandler={this.addLikeHandler}
						/>
					</CardText>
				</StyledCardBody>
			</StyledCard>
		);
	}
}

export default PostContainer;
