import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title, badge, bgColor, onClick }) {
	const user = useSelector(selectUser);

	return (
		<Div onClick={onClick}>
			{Icon && <Icon className="headerOption__icon" />}

			{badge && (
				<span
					style={{
						backgroundColor: bgColor,
					}}
					className="badge__wrap">
					{badge}
				</span>
			)}

			{avatar && (
				<Avatar className="headerOption__icon" src={user?.photoUrl}>
					{user?.displayName[0]}
				</Avatar>
			)}
			<h3 className="headerOption__title mb-0"> {title} </h3>
		</Div>
	);
}

export default HeaderOption;

const Div = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	color: gray;
	cursor: pointer;
	transition: var(--sht-trans);

	/* .badge__wrap {
		position: absolute;
		top: -5px;
		right: -3%;
		padding: 5px;
		background-color: #0074b1;
		border-radius: 50%;
		font-size: 8px;
		font-weight: bold;
		color: #fff;
	} */

	&:hover {
		color: #000;
	}

	.headerOption__title {
		font-size: 12px;
		font-weight: 400;
		/* color: #0074b1; */
	}

	.headerOption__icon {
		object-fit: contain;
		height: 25px !important;
		width: 25px !important;
	}
`;
