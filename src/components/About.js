import React from "react";
import "../App.css";

function About() {
	return (
		<div style={{ margin: "0 200px" }}>
			<h1>About</h1>
			<hr />
			<p>
				This is a small project that uses the <code>React Router</code>{" "}
				in order to seamlessly transition between pages.
			</p>
			<h2>How does that work?</h2>
			<p>
				Well, first there are two basic types of websites:{" "}
				<code>static</code> and <code>dynamic</code>. The difference is
				simple...
			</p>
			<br />
			<div>
				<p>
					<b>Static: </b>
					<p>
						Static websites are websites with information that
						doesn't change. For example, if you go to one of my very
						first front-end project (
						<a
							style={{ color: "white" }}
							href="https://topshelf-recipes.netlify.app"
							target="_blank"
						>
							here
						</a>
						), you will see a lot of information, though none of it
						changes. The information is hardcoded in.
					</p>
					<b>Dynamic: </b>
					<p>
						Dynamic websites contain information that will change
						based on other information. For example, a weather app
						will have data that changes based on the data it
						receives (more specifically the API will pass new
						information based on the weather). Or, if a user logs
						into their account, they are shown different information
						that a user who isn't logged in wouldn't be able to view
						(account information, ability to do things like create
						posts or edit their profile, etc.). This is dynamic
						data.
					</p>
				</p>
			</div>
			<br />
			<p>
				This website is <em>dynamic</em>. The information on this
				website changes based on what it receives from the API (in this
				case a{" "}
				<a
					style={{ color: "white" }}
					href="https://fortnite-api.com"
					target="_blank"
				>
					Fortnite API
				</a>{" "}
				I found, for the memes).
			</p>
			<br />
			<br />
			<p>
				So, the <code>React Router</code> I previously mentioned:
			</p>
			<p>
				React's Router essentially allows for different pages to be
				loaded with virtually no load-time (excluding APIs and such).
				This happens because, instead of making <code>GET</code>{" "}
				requests to each individual (HTML) document, on the back-end of
				things React uses a simple yet powerful API in order to route to
				different endpoints on a website with little to no loading
				required. This gives your web-apps the more smooth, faster, more
				reliable feeling of an <em>app</em> rather than the frustrating,
				more sluggush feel of a <em>webstie</em>.
			</p>
		</div>
	);
}

export default About;
