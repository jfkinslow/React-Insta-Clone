/// <reference path="./ISearchBarProps.d.ts" />
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './SearchBar.css';

class SearchBar extends React.Component<ISearchBarProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			parent: this.props.parent
		}
	}
	render() {
		return (
			<div id="SearchBar">
				<div className="logo">
					<FaInstagram size={32} color="#808080" />
					<span id="HeaderText">Instagram</span>
				</div>
				<input id="Search" value={this.state.parent.state.search} type="text" placeholder="Search" onChange={this.props.searchChangeHandler.bind(this.state.parent)} onKeyDown={this.props.searchHandler.bind(this.state.parent)}/>
				<div className="other-btn" />
			</div>
		);
	}
};

export default SearchBar;
