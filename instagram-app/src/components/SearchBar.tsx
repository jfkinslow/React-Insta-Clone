import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar: React.FC = () => {
	return (
		<div id="SearchBar">
			<div className="logo">
				<FaInstagram size={32} color="#808080" />
				<span id="HeaderText">Instagram</span>
			</div>
			<input id="Search" type="text" placeholder="Search" />
			<div className="other-btn" />
		</div>
	);
};

export default SearchBar;
