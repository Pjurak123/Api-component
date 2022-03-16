import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );

    const items = await data.json();
    console.log(data);
    console.log(items);
    setItems(items.data);
  };

  return (
    <div>
      {items.map((item) => (
        <div className="container">
          <ul className="nav-ul">
            <li className="nav-li" key={item.itemId}>
              <Link className="api-data" to={`/shop/${item.itemId}`}>
                {item.item.name}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Shop;
