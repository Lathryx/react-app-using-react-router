import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Shop() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [shopItems, setShopItems] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchItems = async () => {
		setLoading(true);
		let URL = "https://fortnite-api.com/v2/shop/br";
		const data = await fetch(URL);

		const items = await data.json();
		console.log(items.data.daily.entries);
		setShopItems(items.data.daily.entries);
		setLoading(false);
	};


	const itemStyle = {
		color: "white",
	};

	return (
		<div>
			<h1>Items: </h1>
			<hr />
			{loading
			? <img style={{marginTop: '25vh', width: 75, height: 'auto'}} src='https://i.imgur.com/llF5iyg.gif' alt="Loading..." />
			: 	(
			shopItems.map((item) => (
				<h1 key={item.items[0].id}>
					<Link style={itemStyle} to={`/shop/${item.items[0].id}`}>
						{item.items[0].name}
					</Link>
				</h1>
			))
			)} 

		</div>
	);
}


export default Shop;
