import React from "react";

const Navbar = ({ setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="bg-red-100 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1
          className="text-red-800 md:text-3xl font-bold font-serif cursor-pointer mb-2 md:mb-0"
          onClick={() => handleTabClick("home")}
        >
          Accessories Page
        </h1>

        <div className="md:flex items-center">
          <button
            className="border-none bg-red-800 text-white text-xl w-20 font-medium transition-all duration-500 cursor-pointer inline-block relative box-border rounded-full shadow-md hover:pl-8 hover:pr-24"
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
