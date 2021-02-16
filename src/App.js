import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import ItemDetails from "./components/ItemDetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={ItemDetails} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => {
	const linkStyles = {
		color: "white",
	};

	return (
		<div>
			<h1>Home Page!</h1>
			<hr />
			<p>Yeah, I'm too lazy to put anything hear....</p>
			<br />

			<p>
				Just go to the{" "}
				<Link style={linkStyles} to="/about">
					about
				</Link>{" "}
				or{" "}
				<Link style={linkStyles} to="/shop">
					shop
				</Link>{" "}
				page(s) instead, I guess.{" "}
			</p>
		</div>
	);
};

export default App;
