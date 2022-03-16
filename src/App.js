import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import "./App.css";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
