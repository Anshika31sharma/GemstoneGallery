import React from "react";
const NosePins = ({ setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };
  return (
    <div className="flex flex-wrap justify-center">
       <div className="product-tile mb-4 sm:mb-4 md:mb-5 mt-10 ml-2 sm:ml-4 md:ml-6 lg:ml-10">
        <div className="image-container ">
          <div className="relative  overflow-hidden group">
            <div className="w-full transition-transform duration-500 ease-in-out group-hover:opacity-50 group-hover:translate-x-30">
              <img
                className=" h-72 object-cover  duration-500"
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7c51ff96/images/hi-res/513817OAAAAAP3_1.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Decorated with radiant stones as petals, this nathini has been masterfully crafted in 22 Karat Yellow Gold .

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("earring1")}
          >
        Classic Radiant Gold Nath
          </button>
          <div className="price-content">
            <div className="price">
              <span className="range">
                <span>
                  <span className="sales">
                    <span className="value price-text " content="36,449">
                      ₹ 36449
                    </span>
                  </span>
                  <del className="text-decoration-none">
                    <span className="strike-through list">
                      <span className="value " content="null">
                        <span className="sr-only">Price reduced from</span>₹
                        38367 <span className="sr-only">to</span>
                      </span>
                    </span>
                  </del>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-tile mb-4 sm:mb-4 md:mb-5 mt-10 ml-2 sm:ml-4 md:ml-6 lg:ml-10">
        <div className="image-container ">
          <div className="relative  overflow-hidden group">
            <div className="w-full transition-transform duration-500 ease-in-out group-hover:opacity-50 group-hover:translate-x-30">
              <img
                className=" h-72 object-cover  duration-500"
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bd42f3/images/hi-res/500063OCAAAC02_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  These flowerbud inspired nose pin has been crafted in 18 Karat Yellow Gold and studded with a diamond.

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("earring1")}
          >
        Flowerbud Nosering
          </button>
          <div className="price-content">
            <div className="price">
              <span className="range">
                <span>
                  <span className="sales">
                    <span className="value price-text " content="36,449">
                      ₹ 36449
                    </span>
                  </span>
                  <del className="text-decoration-none">
                    <span className="strike-through list">
                      <span className="value " content="null">
                        <span className="sr-only">Price reduced from</span>₹
                        38367 <span className="sr-only">to</span>
                      </span>
                    </span>
                  </del>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-tile mb-4 sm:mb-4 md:mb-5 mt-10 ml-2 sm:ml-4 md:ml-6 lg:ml-10">
        <div className="image-container ">
          <div className="relative  overflow-hidden group">
            <div className="w-full transition-transform duration-500 ease-in-out group-hover:opacity-50 group-hover:translate-x-30">
              <img
                className=" h-72 object-cover  duration-500"
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa3172804/images/hi-res/513020OKJAAAP1_1.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Accent the magnificence of your occasion ensemble with this peacock inspired nathini crafted in 22 karat yellow gold.

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("earring1")}
          >
       Peacock Nath
          </button>
          <div className="price-content">
            <div className="price">
              <span className="range">
                <span>
                  <span className="sales">
                    <span className="value price-text " content="36,449">
                      ₹ 36449
                    </span>
                  </span>
                  <del className="text-decoration-none">
                    <span className="strike-through list">
                      <span className="value " content="null">
                        <span className="sr-only">Price reduced from</span>₹
                        38367 <span className="sr-only">to</span>
                      </span>
                    </span>
                  </del>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-tile mb-4 sm:mb-4 md:mb-5 mt-10 ml-2 sm:ml-4 md:ml-6 lg:ml-10">
        <div className="image-container ">
          <div className="relative  overflow-hidden group">
            <div className="w-full transition-transform duration-500 ease-in-out group-hover:opacity-50 group-hover:translate-x-30">
              <img
                className=" h-72 object-cover  duration-500"
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa65fe344/images/hi-res/511619OBEAAAP3_1.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Cast a spell of absolute enchantment when you adorn this handmade, filigree nathini, crafted in 22 karat yellow gold.

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("earring1")}
          >
    Kundan Nosepin
          </button>
          <div className="price-content">
            <div className="price">
              <span className="range">
                <span>
                  <span className="sales">
                    <span className="value price-text " content="36,449">
                      ₹ 36449
                    </span>
                  </span>
                  <del className="text-decoration-none">
                    <span className="strike-through list">
                      <span className="value " content="null">
                        <span className="sr-only">Price reduced from</span>₹
                        38367 <span className="sr-only">to</span>
                      </span>
                    </span>
                  </del>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NosePins;
