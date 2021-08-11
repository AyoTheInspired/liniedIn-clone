import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
	return (
		<Div>
			<div className="header__left">
				<img
					src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
					alt=""
				/>
				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__right"></div>
		</Div>
	);
}

export default Header;

const Div = styled.div`
	.header__left {
		display: flex;
	}

	.header__left > img {
		object-fit: contain;
		height: 40px;
		margin-right: 10px;
	}

	.header__search {
		padding: 10px;
		display: flex;
		align-items: center;
		border-radius: 5px;
		height: 22px;
		color: gray;
		background-color: #eef3f8;

		input {
			outline: none;
			border: none;
			background: none;
		}
	}
`;
