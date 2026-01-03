import React from "react";
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-8 text-white w-full h-16 bg-[#184F5B]">
      <div className="flex">
        <div className="text-2xl font-bold mr-15">EdTech</div>
        <div className="flex items-center gap-4">
          <div className="text-sm">Explore</div>
          <div className="relative text-[#BCBCBC]">
            <input
              className="bg-white rounded-2xl h-7 w-97 p-2 pl-10 text-sm font-semibold outline-none"
              type="text"
              placeholder="Search for anything"
            />
            <FaSearch className="absolute top-1/4 left-4" />
          </div>
          <div className="flex justify-center items-center bg-[#F9C518] h-7 w-31 rounded-2xl">
            <span className="font-bold">new Offer</span>
          </div>
        </div>
      </div>
      {(user == true) ? (
        <p>User</p>
      ) : (
        <div className="font-bold flex gap-4 items-center">
          <FiShoppingCart className="mr-4" />
          <button onClick={() => {navigate('/login')}} className="h-7 w-21 border border-[#F9C518] bg-[#F9C518]/20 rounded-sm cursor-pointer">
            Login
          </button>
          <button onClick={() => {navigate('/signup')}} className="h-7 w-21 bg-[#F9C518] rounded-sm cursor-pointer">Sign up</button>
        </div>
      )}
    </div>
  );
};

export default Header;
