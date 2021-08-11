import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function HeaderOption({ avatar, Icon, title }) {
	return (
		<Div>
			{Icon && <Icon className="headerOption__icon" />}

			{avatar && <Avatar className="headerOption__icon" src={avatar} />}
			<h3 className="headerOption__title"> {title} </h3>
		</Div>
	);
}

export default HeaderOption;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	color: gray;
	cursor: pointer;
	transition: var(--sht-trans);

	&:hover {
		color: #000;
	}

	.headerOption__title {
		font-size: 12px;
		font-weight: 400;
	}

	.headerOption__icon {
		object-fit: contain;
		height: 25px !important;
		width: 25px !important;
	}
`;
