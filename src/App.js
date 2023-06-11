import React from "react";
import NavBar from "./component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="bg-[#87C7F6] h-full">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="single/:id" element={<SingleProduct />} />
          <Route path="cate/:categorizz" element={<Category />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;