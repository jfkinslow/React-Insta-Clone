/// <reference path="./ISearchBarProps.d.ts" />
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Input } from 'reactstrap';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.6rem;
	max-width: 640px;
	margin: 10px auto;
`;

const StyledInput = styled(Input)`
	max-width: 220px;
	&& {
		font-size: 1.6rem;
	}
`;

const StyledLogo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 2rem;
`;

class SearchBar extends React.Component<ISearchBarProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			parent: this.props.parent,
		};
	}
	render() {
		return (
			<StyledContainer id="SearchBar">
				<StyledLogo>
					<FaInstagram size={32} color="#808080" />
					<span id="HeaderText">Instagram</span>
				</StyledLogo>
				<StyledInput
					id="Search"
					value={this.state.parent.state.search}
					type="text"
					placeholder="Search"
					onChange={this.props.searchChangeHandler.bind(this.state.parent)}
					onKeyDown={this.props.searchHandler.bind(this.state.parent)}
				/>
				<div className="other-btn" />
			</StyledContainer>
		);
	}
}

export default SearchBar;
