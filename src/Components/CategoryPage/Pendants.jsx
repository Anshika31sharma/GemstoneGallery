import React from "react";
const Pendants = ({ setActivePage }) => {
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd177ab4b/images/hi-res/50D3I1PRRAAA29_2.jpg"
              />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  A stunning pearl sits on a radial mesh pattern in this
                  pendant, crafted in 18 karat rose gold, studded with diamonds.
                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("pendant1")}
          >
            Pearl and Diamond Pendant
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd3e19672/images/hi-res/506060PKLAAA02_2.jpg"
              />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Interrupted swirls of luminous gold are encrusted with tiny
                  diamonds in this artistic pendant, crafted in 18 karat rose
                  gold
                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("pendant2")}
          >
            Swirls Diamond Pendant
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f261308/images/hi-res/50D3I1PRTAAA29_2.jpg"
              />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Feel the beauty of nature with this floral mesh pendant,
                  crafted in 18 karat rose gold, studded with pearls and
                  diamonds
                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("pendant3")}
          >
            Charming Mesh Pendant
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd7c0cf4c/images/hi-res/50D3I1PSAAAA02_2.jpg"
            />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  An unparalleled expression of elegance, this 18 karat yellow gold solitaire pendant celebrates the allure discovered in simplicity

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("pendant4")}
          >
          Ritzy Radiant Pendant
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
};
export default Pendants;
