import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Shop from "./Shop";
import "./App.css";

function ItemDetail() {
  const params = useParams();
  useEffect(() => {
    fetchItem();
    console.log(params);
  }, []);

  const [item, setItem] = useState({
    item: { name: "", images: "", background: "", icon: "", type: "" },
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data);
    return item;
  };

  console.log(item);

  return (
    <div className="container-details">
      <div className="card-details">
        <h1>{item.item.name}</h1>
        <ul className="list-details">
          <li className="list_item-details">
            <span className="item">Item rarity: </span>
            {item.item.rarity}
          </li>
          <li className="list_item-details">
            <span className="item">Item type: </span>
            {item.item.type}
          </li>
        </ul>
        <img src={item.item.images.icon} className="image-details" />
      </div>
    </div>
  );
}

export default ItemDetail;
