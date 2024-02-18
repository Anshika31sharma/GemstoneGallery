import React from "react";

const Navbar = ({ setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="bg-red-100 h-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1
          className="text-red-800 md:text-2xl font-semibold font-serif cursor-pointer mb-4 md:mb-0"
          onClick={() => handleTabClick("home")}
        >
          Accessories Page
        </h1>
       
      </div>
    </nav>
  );
};

export default Navbar;
