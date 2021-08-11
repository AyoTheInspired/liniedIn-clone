import { Avatar } from "@material-ui/core";
import {
	ChatOutlined,
	SendOutlined,
	ShareOutlined,
	ThumbsUpDownOutlined,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
import InputOption from "./InputOption";

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
	const user = useSelector(selectUser);

	return (
		<Div ref={ref}>
			<div className="post__header">
				<Avatar src={user?.photoUrl}>{name[0]}</Avatar>
				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className="post__body">
				<p>{message}</p>
			</div>

			<div className="post__buttons">
				<InputOption Icon={ThumbsUpDownOutlined} title="Like" color="gray" />
				<InputOption Icon={ChatOutlined} title="Comment" color="gray" />
				<InputOption Icon={ShareOutlined} title="Share" color="gray" />
				<InputOption Icon={SendOutlined} title="Send" color="gray" />
			</div>
		</Div>
	);
});

export default Posts;

const Div = styled.div`
	background-color: #fff;
	padding: 15px;
	margin-bottom: 10px;
	border-radius: 10px;

	.post__header {
		display: flex;
		margin-bottom: 10px;
	}

	.post__info {
		margin-left: 10px;

		p {
			font-size: 12px;
			color: gray;
		}

		h2 {
			font-size: 15px;
		}
	}

	.post__body {
		overflow-wrap: anywhere;
	}

	.post__buttons {
		display: flex;
		justify-content: space-evenly;
	}
`;
