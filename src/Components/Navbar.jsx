import React from "react";
const Navbar = ({ setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };
  return (
    <nav className=" bg-red-100  h-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1
          className="text-red-800  md:text-2xl  font-semibold font-serif cursor-pointer mb-4 md:mb-0"
          onClick={() => handleTabClick("home")}
        >
          Accessories Page
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-2xl font-serif  ">
          <button
            className="text-red-800  hover:underline underline-offset-1"
            onClick={() => handleTabClick("login")}
          >
          Category
          </button>
          <button
            className="text-red-800  hover:underline underline-offset-1"
            onClick={() => handleTabClick("product")}
          >
            Product
          </button>
          <button
            className="text-red-800  hover:underline underline-offset-1"
            onClick={() => handleTabClick("yoga")}
          >
           Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
