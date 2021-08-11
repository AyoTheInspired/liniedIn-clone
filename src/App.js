import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Status from "./components/Status";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__body">
				<Sidebar />
				<Feed />
				<Status />
			</div>
		</div>
	);
}

export default App;
