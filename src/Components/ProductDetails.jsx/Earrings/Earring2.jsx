import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Earring2() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "earring2",
      name: " Diamond Drop Earrings",
      price: 36449,
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw58eb627c/images/hi-res/50D2FFDMKAGA09_1.jpg?sw=640&amp;sh=640",
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <div className="lg:ml-10 mt-10">
        <img
          className="w-full h-auto aspect-ratio shadow-lg open-image-swiper "
          id="myimage"
          src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw58eb627c/images/hi-res/50D2FFDMKAGA09_1.jpg?sw=640&amp;sh=640"
          alt="Product"
        />
      </div>
      <div className="mx-4 mt-4 lg:mt-0 lg:ml-10">
        <h2 className="text-3xl font-bold mt-10"> Diamond Drop Earrings</h2>
        <div className="text-lg mt-2 lg:mt-4">
          Look sophisticated with the simplicity of these teardrop style, diamond-studded drop earrings crafted in 18 karat yellow gold.
        </div>
        <div className="prices mt-2 lg:mt-4">
          <span className="sales font-bold text-4xl">
            <span className="value price-text evgProductPrice">
              <label className="price-label text-black font-normal">
                {" "}
                Offer Price
              </label>
              <span className="ml-2">₹38,567</span>
            </span>
          </span>
          <del className="text-decoration-none font-medium text-xl ml-2">
            <span className="strike-through list">
              <label> Price</label>
              <span className="value" content="38,367">
                <span className="sr-only">Price reduced from</span>
                ₹40,596
                <span className="sr-only">to</span>
              </span>
            </span>
          </del>
          <div className="mt-2 lg:mt-5">
            <ul className="list-group text-lg">
              <li className="flex items-center mb-2">
                <span className="svg-sprite purity-icon"></span>
                <p className="ml-2 mb-0">Purity Guaranteed.</p>
              </li>
              <li className="flex items-center mb-2">
                <span className="svg-sprite exchange-icon"></span>
                <p className="ml-2 mb-0">Exchange across all stores.</p>
              </li>
              <li className="flex items-center mb-2">
                <span className="svg-sprite shipping-icon"></span>
                <p className="ml-2 mb-0">Free Shipping all across India</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row space-y-2 lg:space-y-0 mt-2 lg:mt-5">
            <div className="flex">
              <input
                type="hidden"
                className="add-to-cart-url"
                value="/on/demandware.store/Sites-Tanishq-Site/en_IN/Cart-AddProduct"
              />
              <button
                className="evgAddtoCart add-to-cart btn btn-lg btn-outline py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md"
                data-toggle="modal"
                data-target="#chooseBonusProductModal"
                data-pid="50d3b3dhuaga022bd000012"
                data-mpid="50D3B3DHUAGA02"
                data-max-qty="1"
                data-buttontype="addToCart"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
            <div className="flex mt-2 lg:mt-0">
              <input
                type="hidden"
                className="add-to-cart-url"
                value="/on/demandware.store/Sites-Tanishq-Site/en_IN/Cart-AddProduct"
              />
              <button
                className="add-to-cart btn btn-lg py-2  justify-content-center buy-now-outline bg-gray-200 p-4 rounded-md hover:text-white hover:bg-red-800"
                data-toggle="modal"
                data-pid="50d3b3dhuaga022bd000012"
                data-max-qty="1"
                data-buttontype="buyNow"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earring2;
