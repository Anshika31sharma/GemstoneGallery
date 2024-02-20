import React from "react";
const Bracelets = ({ setActivePage }) => {
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8b6a880c/images/hi-res/50D3B2BUMAA02_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Make a lasting impression with this charming bracelet, crafted in 18 karat rose gold, studded with diamonds

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("bracelet1")}
          >
        Flower Diamond Bracelet
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe42c4768/images/hi-res/501920BWVAA00_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Keep your style simple but classy with this linked pattern figaro bracelet, crafted in 18 karat yellow and white gold

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("bracelet1")}
          >
         Chain look Bracelet
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe42c4768/images/hi-res/501920BWVAA00_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Beautifully detailed, with a textured pattern, this heart style bracelet is crafted in 22 karat yellow gold, with rhodium finish

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("bracelet1")}
          >
      Graceful Stamp Bracelet
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc42bf48/images/hi-res/51D3B1BGPAA00_2.jpg"
            />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Stand out of the crowd easily when you adorn the intricate leaf patterns of this bracelet, crafted in 22 karat yellow gold

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("bracelet1")}
          >
     Intricate Leafy Bracelet
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
export default Bracelets;
