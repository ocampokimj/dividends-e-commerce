import Homepage from "./Homepage";
import Navigation from "./Navigation";
import Shop from "./Shop";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/App.css'
import ProductInfo from "./ProductInfo";

function App() {
  const [carts, setCarts] = useState([]);

  const handleCartItem = (item) => {
    setCarts([...carts, item]);
  }; // adds pushes the selected item into cart array

  console.log(carts);
  return (
    <BrowserRouter>
     <Navigation carts={carts}/>
    <div className="app">
      {/* <Homepage /> */}
      {/* <HomePage /> */}
      {/* <AboutMe /> */}
      <Routes>
        <Route
          path="/shop"
          element={<Shop handleCartItem={handleCartItem}/>}
        />
        <Route
          path="/"
          element={<Homepage carts={carts}/>}
        />
        <Route
          path="/shop/:id"
          element={<ProductInfo handleCartItem={handleCartItem}/>}
        />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;



