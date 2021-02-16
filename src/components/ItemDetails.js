import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import arrowLeft from "../img/arrowLeft.png";

function ItemDetails({ match }) {
	useEffect(() => {
		fetchItem();
	}, []);

	const [shopItem, setShopItem] = useState({
		data: { images: {} },
	});
	const [loading, setLoading] = useState(false);

	const fetchItem = async () => {
		setLoading(true);
		let URL = `https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`;
		const fetchItem = await fetch(URL);
		const item = await fetchItem.json();

		setShopItem(item);
		setLoading(false);
		console.log(item);
	};

	return (
		<div>
			{loading ? (
				<img
					style={{ marginTop: "25vh", width: 75, height: "auto" }}
					src="https://i.imgur.com/llF5iyg.gif"
					alt="Loading..."
				/>
			) : (
				<div>
					<Link
						style={{ float: "left", color: "white" }}
						to="/shop"
					>
						<img
							style={{ marginLeft: '50px', position: 'absolute', width: "auto", height: "7%", zIndex: 10 }}
							src={arrowLeft}
							alt="Go back."
						/>
					</Link>
					<h1>{shopItem.data.name}</h1>
					<img
						src={shopItem.data.images.icon}
						alt={shopItem.data.name}
					/>
				</div>
			)}
		</div>
	);
}

export default ItemDetails;
