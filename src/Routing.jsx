import React from "react";
import { Route, Routes } from "react-router-dom";

import AddProdut from "./components/AddProduct/AddProdut";
import EditProdut from "./components/EditProduct/EditProduct";
import ProductsList from "./components/ProductsList/ProductsList";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add-product" element={<AddProdut />} />
      <Route path="/edit/:id" element={<EditProdut />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
