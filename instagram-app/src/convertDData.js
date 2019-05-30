const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

const datafile = path.join(__dirname, '/dummy-data.json');
const datafile2 = path.join(__dirname, '/dummy-data-id.json');
let json = fs.readFileSync(datafile);
let parsed = JSON.parse(json);
let newData = parsed.map(post => {
	let newPost = post;
	let id = uuidv1();
	newPost.id = id;
	let newComments = newPost.comments.map(comment => {
		let newComment = comment;
		let id = uuidv1();
		newComment.id = id;
		return newComment;
	});
	newPost.comments = newComments;
	return newPost;
});
let newJson = JSON.stringify(newData);
fs.writeFileSync(datafile2, newJson);
