import { Create } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import InputOption from "./InputOption";

function Feed() {
	return (
		<Div>
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input type="text" placeholder="Post a feed..." />
						<button type="submit">Send</button>
					</form>
				</div>

				<div className="feed__inputOptions">
					<InputOption />
				</div>
			</div>
		</Div>
	);
}

export default Feed;

const Div = styled.div`
	flex: 0.6;
	margin: 0 20px;

	.feed__inputContainer {
		background-color: #fff;
		padding: 10px;
		border-radius: 10px;
		padding-bottom: 20px;
		margin-bottom: 20px;
	}

	.feed__input {
		border: var(--lg-border);
		border-radius: 30px;
		display: flex;
		padding: 10px;
		color: gray;
		padding-left: 15px;

		form {
			display: flex;
			width: 100%;

			button {
				display: none;
			}
		}

		form > input {
			border: none;
			flex: 1;
			margin-left: 10px;
			outline-width: 0;
			font-weight: 600;
		}
	}
`;
