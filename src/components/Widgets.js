import { Info } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Widgets() {
	return (
		<Div>
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<Info />
			</div>
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
			font-weight: 400;
			white-space: nowrap;
			margin-right: 10px;
		}
	}
`;
