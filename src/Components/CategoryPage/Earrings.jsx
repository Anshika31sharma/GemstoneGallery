import React from "react";
const Earrings = ({ setActivePage }) => {
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
      src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw72e63c46/images/hi-res/50D3B3DHUAGA02_1.jpg"
      alt="Front Image"
    />
  </div>
  <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
    <div className="center p-8 text-center ">
      <p className="text-white mt-11 text-lg"> Add a leafy radiance to your style with these drop earrings, crafted
          in 18 karat yellow gold, studded with diamonds..</p>
    </div>
  </div>
</div>

          <button
            className=" hover:underline underline-offset-1 mt-5  text-red-800 text-2xl "
            onClick={() => handleTabClick("earring1")}
          >
            Leafy Diamond Earring
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
      src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd089080d/images/hi-res/50D2FFDMKAGA09_2.jpg"
      />
  </div>
  <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
    <div className="center p-8 text-center ">
      <p className="text-white mt-11 text-lg"> Look sophisticated with the simplicity of these teardrop style,
          diamond studded drop earrings crafted in 18 karat yellow gold.</p>
    </div>
  </div>
</div>
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-2xl "
            onClick={() => handleTabClick("earring2")}
          >
            Diamond Drop Earrings
          </button>

          <div className="price-content">
            <div className="price">
              <span className="range">
                <span>
                  <span className="sales">
                    <span className="value price-text " content="36,449">
                      ₹ 38567
                    </span>
                  </span>
                  <del className="text-decoration-none">
                    <span className="strike-through list">
                      <span className="value " content="null">
                        <span className="sr-only">Price reduced from</span>₹
                        40596 <span className="sr-only">to</span>
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
      src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw06727a6b/images/hi-res/50D3P2SAWABAP6_2.jpg"
          />
  </div>
  <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
    <div className="center p-8 text-center ">
      <p className="text-white mt-11 text-lg"> Look sophisticated with the simplicity of these teardrop style,
          diamond studded drop earrings crafted in 18 karat yellow gold.</p>
    </div>
  </div>
</div>
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-2xl "
            onClick={() => handleTabClick("earring3")}
          >
          Split Delight Stud Earrings
          </button>

          <div className="price-content">
            <div className="price">
              <span className="range">
                <span>
                  <span className="sales">
                    <span className="value price-text " content="36,449">
                      ₹ 38567
                    </span>
                  </span>
                  <del className="text-decoration-none">
                    <span className="strike-through list">
                      <span className="value " content="null">
                        <span className="sr-only">Price reduced from</span>₹
                        40596 <span className="sr-only">to</span>
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
      src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw40c38f79/images/hi-res/50LB21DAKABA34_1.jpg"
      />
  </div>
  <div className="absolute top-0 left-0 h-72 w-72  bg-red-800 transition-transform duration-500 transform-origin-left transform -translate-x-full group-hover:translate-x-0">
    <div className="center p-8 text-center ">
      <p className="text-white mt-11 text-lg"> Go from simple to stylish in an instant with these two-in-one stud earrings - wear these  colourfully charming drop backing for an instant youthful look.</p>
    </div>
  </div>
</div>
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-2xl "
            onClick={() => handleTabClick("earring4")}
          >
         The Lightness of Being
          </button>

          <div className="price-content">
            <div className="price">
              <span className="range">
                <span>
                  <span className="sales">
                    <span className="value price-text " content="36,449">
                      ₹ 38567
                    </span>
                  </span>
                  <del className="text-decoration-none">
                    <span className="strike-through list">
                      <span className="value " content="null">
                        <span className="sr-only">Price reduced from</span>₹
                        40596 <span className="sr-only">to</span>
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
export default Earrings;
