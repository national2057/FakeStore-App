import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
          <h4 className="text-xl mb-4 font-bold">National Fashion Wears</h4>
          <p>Welcome to National fashion wear, where style meets sophistication. Discover a diverse collection of trendy and high-quality fashion pieces that will elevate your wardrobe to new heights. From elegant dresses to chic tops, stylish bottoms, and fashionable accessories, we have everything you need to create stunning outfits for any occasion. Our curated selection showcases the latest fashion trends, ensuring you stay on top of your style game. Explore our website and indulge in the joy of fashion as you find your perfect ensemble.</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
          <h4 className="text-xl mb-4 font-bold">Links</h4>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Products</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
          <h4 className="text-xl mb-4 font-bold">Social Media</h4>
          <ul className="space-y-5 ml-8">
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaFacebook size={30} /> </a></li>
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaInstagram size={30} /> </a></li>
            <li><a href="#" className="text-gray-300 hover:text-white"> <FaTwitter size={30} /> </a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} National Fashion Wears. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
