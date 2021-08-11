import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../features/userSlice";
import { auth } from "../firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	// https://res.cloudinary.com/ayotheinspired/image/upload/v1620704711/inspired-global-media/images/Team%20Members/The_Inspired_qo4e4p.jpg

	const register = (e) => {
		e.preventDefault();
		if (!name) {
			return alert("Please enter your full name");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((err) => alert(err.message));
	};

	const loginToApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: name,
					})
				);
			})
			.catch((err) => alert(err));
	};
	return (
		<Div>
			<img
				src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
				alt=""
			/>
			<form>
				<input
					required
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
					placeholder="Full Name (required if registering)"
				/>

				<input
					type="text"
					onChange={(e) => setProfilePic(e.target.value)}
					value={profilePic}
					placeholder="Profile pic URL (optional)"
				/>

				<input
					required
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					placeholder="ayoinspired@gmail.com"
				/>
				<input
					required
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					placeholder="Password"
				/>

				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member? &nbsp;
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</Div>
	);
}

export default Login;

const Div = styled.div`
	display: grid;
	place-items: center;
	margin: 0 auto;
	padding-top: 100px;
	padding-bottom: 100px;
	/* height: 100vh; */

	form {
		display: flex;
		flex-direction: column;

		input {
			width: 350px;
			height: 22px;
			font-size: 14px;
			padding: 5px;
			padding-left: 10px;
			margin-bottom: 10px;
			border-radius: 5px;
			outline: 0;
			border: 1px solid #0074b1;
		}

		button {
			width: inherit;
			height: 35px;
			font-size: large;
			color: #fff;
			background-color: #0074b1;
			border-radius: 5px;
			outline: 0;
			border: none;
			cursor: pointer;
			margin-bottom: 10px;
		}
	}

	img {
		object-fit: contain;
		width: 150px;
		margin-bottom: 20px;
		border-radius: 5%;
	}

	.login__register {
		color: #0074b1;
		cursor: pointer;
	}
`;
