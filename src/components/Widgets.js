import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecord />
			</div>
			<div className="widgets__articleRight">
				<h4> {heading} </h4>
				<p> {subtitle} </p>
			</div>
		</div>
	);

	return (
		<Div>
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<Info />
			</div>

			{newsArticle(
				"Olympics",
				"Gold medalist tracks down woman who gave him taxi fare and saved his Olympic dreams."
			)}
			{newsArticle(
				"Wild Fires",
				"Sicily reports 48.8C in what would be Europe's highest ever temperature."
			)}
			{newsArticle(
				"COVID-19",
				"Nurse suspected of injectinf thousands with saline solution instead of COVID vaccine."
			)}
		</Div>
	);
}

export default Widgets;

const Div = styled.div`
	position: sticky;
	top: 80px;
	flex: 0.2;
	background-color: #fff;
	border-radius: 10px;
	border: 1px solid lightgray;
	height: fit-content;
	bottom: 10px;

	.widgets__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;

		h2 {
			font-size: 16px;
			font-weight: 700;
			white-space: nowrap;
			margin-right: 10px;
		}
	}

	.widgets__article {
		display: flex;
		padding: 10px;
		cursor: pointer;
		transition: var(--sht-trans);

		&:hover {
			background-color: whitesmoke;
		}
	}

	.widgets__articleLeft {
		color: #0177b7;
		margin-right: 5px;

		.MuiSvgIcon-root {
			font-size: 15px;
		}
	}

	.widgets__articleRight {
		flex: 1;

		h4 {
			font-size: 14px;
			margin-bottom: 3px;
		}

		p {
			font-size: 12px;
			color: gray;
			text-align: justify;
		}
	}
`;
