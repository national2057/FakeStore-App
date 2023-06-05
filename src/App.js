import React from "react";
import NavBar from "./component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="single/:id" element={<SingleProduct />} />
          <Route path="cates/:categorizz" element={<Category />} />
        </Routes>
      </div>
    </>
  );
}
export default App;