import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import {
	BusinessCenter,
	Chat,
	Home,
	Notifications,
	SupervisorAccount,
} from "@material-ui/icons";

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
			<div className="header__right">
				<HeaderOption Icon={Home} title="Home" />
				<HeaderOption Icon={SupervisorAccount} title="My Network" />
				<HeaderOption Icon={BusinessCenter} title="Jobs" />
				<HeaderOption Icon={Chat} title="Messaging" />
				<HeaderOption Icon={Notifications} title="Notifications" />
				<HeaderOption avatar="/Ayo.jpg" title="TheInspired" />
			</div>
		</Div>
	);
}

export default Header;

const Div = styled.div`
	display: flex;
	justify-content: space-evenly;
	border-bottom: 0.1px solid lightgray;
	padding: 10px 5px;
	width: 99%;
	position: sticky;
	top: 0;
	z-index: 999;

	.header__left {
		display: flex;
	}

	.header__left > img {
		object-fit: contain;
		height: 40px !important;
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

	.header__right {
		display: flex;
	}
`;
