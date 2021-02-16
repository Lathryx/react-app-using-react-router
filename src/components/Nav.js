import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
	const navStyle = {
		color: "white",
	};

	return (
		<nav className="Nav">
			<Link style={{...navStyle, fontFamily: 'Comic Sans MS'}} to="/">
				<h3>Fortnite API</h3>
			</Link>
			<ul className="nav-links">
				<Link style={navStyle} to="/about">
					<li>About</li>
				</Link>
				<Link style={navStyle} to="/shop">
					<li>Shop</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
