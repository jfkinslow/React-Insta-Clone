import React from 'react';
import './App.css';
import data from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import fs from 'fs';

const App: React.FC = () => {
	return (
		<div className="App">
			<SearchBar />
			{data.map((post: any, ind: number, arr: Array<any>) => {
				console.log('PostID:', post.id);
				return <PostContainer post={post} key={post.id} />;
			})}
		</div>
	);
};

export default App;
