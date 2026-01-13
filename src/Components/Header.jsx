import React from "react";

const Header = () => {
  return (
    <header className="bg-[#114b51] h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <h1 className="text-white text-2xl font-bold tracking-tight">EdTech</h1>
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
        <button className="bg-[#fbbf24] hover:bg-yellow-500 text-[#114b51] font-bold py-1 px-4 rounded-full text-xs transition-transform active:scale-95">
          new Offer
        </button>
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-white text-sm font-medium hidden sm:inline">
            User Name
          </span>
          <div className="w-8 h-8 rounded-full bg-teal-200 flex items-center justify-center text-[#114b51] font-bold">
            UN
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
