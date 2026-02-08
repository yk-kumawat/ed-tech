import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";

const Header = () => {
  const { user, isAdmin, logout } = useAuth(); // Destructure isAdmin
  const navigate = useNavigate();

  return (
    <header className="bg-[#114b51] h-16 flex items-center justify-between px-6 top-0 z-50">
      <>
        <div className="flex items-center gap-8">
          <h1
            className="text-white text-2xl font-bold tracking-tight cursor-pointer"
            onClick={() => navigate("/")}
          >
            EdTech
          </h1>
          <nav className="hidden md:flex gap-6">
            <a
              className="text-teal-50 hover:text-white transition-colors font-medium"
              href="#"
            >
              Explore
            </a>
          </nav>
          <div className="flex-1 w-lg px-8 hidden sm:block">
            <div className="relative">
              <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-teal-200">
                search
              </span>
              <input
                className="w-full bg-teal-600/40 border-none outline-none rounded-full py-1 pl-10 pr-4 text-white placeholder-teal-300"
                placeholder="Search for anything"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user && ( // Only show "Courses Inventory" link if user is admin
            <a
              className="text-teal-50 hover:text-white transition-colors font-medium mr-4"
              onClick={() => navigate("/dashboard")}
              style={{ cursor: "pointer" }}
            >
              Dashboard
            </a>
          )}
          {isAdmin && ( // Only show "Courses Inventory" link if user is admin
            <a
              className="text-teal-50 hover:text-white transition-colors font-medium mr-4"
              onClick={() => navigate("/courses-inventory")}
              style={{ cursor: "pointer" }}
            >
              Courses Inventory
            </a>
          )}
          <button className="bg-[#fbbf24] hover:bg-yellow-500 text-[#114b51] font-bold py-1 px-4 rounded-full text-xs transition-transform active:scale-95">
            new Offer
          </button>
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-teal-200 flex items-center justify-center text-[#114b51] font-bold">
                  {user.username?.substring(0, 2).toUpperCase()}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-center cursor-pointer text-white border border-[#fbbf24] bg-[#ffd978]/20 px-4 py-0.5 rounded"
              onClick={() => navigate("/login")}
            >
              <span className="text-sm font-semibold">Login</span>
            </div>
          )}
        </div>
      </>
    </header>
  );
};

export default Header;
