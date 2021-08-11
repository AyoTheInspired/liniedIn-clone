import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Sidebar() {
	return (
		<Div>
			<div className="sidebar__top">
				<img
					src="https://res.cloudinary.com/ayotheinspired/image/upload/v1622868491/inspired-global-media/images/Backgrounds/pexels-edward-jenner-4252666_eybi6p.jpg"
					alt="splash-image"
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Display name</h2>
				<h4>Emailapodsifapodiapodifapodifapodifa</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,577</p>
				</div>
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">8,335</p>
				</div>
			</div>

			<div className="sidebar__button">
				<p>Recent</p>
			</div>
		</Div>
	);
}

export default Sidebar;

const Div = styled.div`
	top: 80px;
	position: sticky;
	flex: 0.2;
	border-radius: 10px;
	text-align: center;
	height: fit-content;

	.sidebar__avatar {
		margin-bottom: 10px;
	}

	.sidebar__top {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid lightgray;
		border-bottom: 0;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: #fff;
		padding-bottom: 10px;
	}

	.sidebar__top > img {
		object-fit: cover;
		margin-bottom: -20px;
		width: 100%;
		height: 60px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.sidebar__stats {
		padding: 10px;
		margin-bottom: 10px;
		border: 1px solid lightgray;
		background-color: #fff;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.sidebar__stat {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;

		p {
			color: gray;
			font-size: 13px;
			font-weight: 600;
		}

		.sidebar__statNumber {
			font-weight: bold;
			color: #0a66c2 !important;
		}
	}
`;
