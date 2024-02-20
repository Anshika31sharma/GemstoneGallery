import React from "react";

const Navbar = ({ setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="bg-red-100 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1
          className="text-red-800 text-3xl font-bold font-serif cursor-pointer mb-2 md:mb-0"
          onClick={() => handleTabClick("home")}
        >
          Accessories Page
        </h1>

        <div className="md:flex items-center">
          <button
            className="hover:underline text-2xl font-medium underline-offset-1 md:mr-4 text-red-800 mb-2 md:mb-0"
            onClick={() => handleTabClick("cart")}
          >
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
