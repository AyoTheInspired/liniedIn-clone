import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import InputOption from "./InputOption";
import Posts from "./Posts";

function Feed() {
	const [posts, setPosts] = useState([]);

	const sendPost = (e) => {
		e.preventDefault();
	};

	return (
		<Div>
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input type="text" placeholder="Post a feed..." />
						<button type="submit" onClick={sendPost}>
							Send
						</button>
					</form>
				</div>

				<div className="feed__inputOptions">
					<InputOption Icon={Image} title="Photo" color="#70B5F9" />
					<InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
					<InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
					<InputOption
						Icon={CalendarViewDay}
						title="Write Article"
						color="#7FC15E"
					/>
				</div>
			</div>
			{posts.map((post) => (
				<Posts />
			))}
			<Posts
				name="Ayo Abimbola"
				description="Test Description"
				message="Random message..."
			/>
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

	.feed__inputOptions {
		display: flex;
		justify-content: space-evenly;
	}
`;
