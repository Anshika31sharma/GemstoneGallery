import React from "react";
const Chains = ({ setActivePage }) => {
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3083dc61/images/hi-res/504025CIKAA00_2.jpg"
            />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Mesmerising abstract patterns come together to form this glamorous tassel chain crafted in 18 karat yellow gold

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("chain1")}
          >
       Abstract Gold Chain
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5df35328/images/hi-res/504025CZDAA00_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  A simple accessory that adds a touch of dazzle to your style, this chain is crafted in 22 karat yellow gold

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("chain2")}
          >
       Swirls Orbs  Chain
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe6ab6951/images/hi-res/503520CARAE00_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Foxtail Chain Crafted in 22 Karat Yellow Gold
                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("chain3")}
          >
      Charming Gold Chain
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe8be77aa/images/hi-res/51F3JRGBDAA00_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Red and black enamel contrasts with the radiance of gold in this Lord Jagannath pendant with chain, crafted in 22 karat yellow gold

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("chain4")}
          >
     Lord Jagganath Chain
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
export default Chains;