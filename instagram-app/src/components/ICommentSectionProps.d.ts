interface ICommentSectionProps {
	parent: Object;
	comments: Object;
	addCommentHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	addLikeHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
