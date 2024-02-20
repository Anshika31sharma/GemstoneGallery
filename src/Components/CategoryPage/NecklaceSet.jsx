import React from "react";
const NecklaceSet = ({ setActivePage }) => {
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2dbdbc62/images/hi-res/50D3B22QVAGA02_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Enchant everyone with the delicate beauty of this necklace set crafted in 18 karat rose gold, studded with diamonds. 

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("necklaceset1")}
          >
     Delicate Diamond Necklace Set
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3756e376/images/hi-res/51D3B42MQABAP3_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Enchant everyone with the delicate beauty of this necklace set crafted in 18 karat rose gold, studded with diamonds. 

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("necklaceset2")}
          >
   Lotus Necklace Set
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8ca21967/images/hi-res/51D3B12HDABA00_2.jpg"
                />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Be a stunning presence when you don this lovely necklace set, crafted in 22 karat yellow gold

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("necklaceset3")}
          >
    Gleaming Gold Necklace Set
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
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc31a8c83/images/hi-res/5138182AZABAP1_2.jpg"
            />
            </div>
            <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
              <div className="center p-8 text-center ">
                <p className="text-white mt-11 text-lg">
                  {" "}
                  Be a stunning presence when you don this lovely necklace set, crafted in 22 karat yellow gold

                </p>
              </div>
            </div>
          </div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("necklaceset4")}
          >
  Charming Gold Necklace Set
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
export default NecklaceSet;