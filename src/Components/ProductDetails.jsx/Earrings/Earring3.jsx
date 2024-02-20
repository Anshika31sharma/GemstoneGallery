import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Earring3() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "earring3",
      name: "Split Delight Stud Earrings",
      price: 36449,
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd59c5696/images/hi-res/50D3P2SAWABAP6_1.jpg?sw=640&sh=640",
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="md:ml-10 mt-10">
        <img
          className=" lg:block w-full h-auto aspect-ratio shadow-lg  mx-auto"
          src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd59c5696/images/hi-res/50D3P2SAWABAP6_1.jpg?sw=640&sh=640"
          alt="Split Delight Stud Earrings"
        />
      </div>
      <div className="mx-4 mt-4 md:mt-0 md:ml-10">
        <h2 className="text-xl md:text-3xl font-bold mt-10"> Split Delight Stud Earrings</h2>
        <div className="text-lg md:text-lg mt-2 md:mt-4">
          Go from simple to stylish in an instant with these two-in-one stud earrings - wear these as classic studs or add on the colorfully charming drop backing for an instant youthful look!
        </div>
        <div className="prices mt-2 md:mt-5">
          <span className="sales font-bold text-4xl">
            <span className="value price-text evgProductPrice">
              <label className="price-label text-black font-normal"> Offer Price</label>
              <span className="ml-2">₹34,567</span>
            </span>
          </span>
          <del className="text-decoration-none font-medium text-xl ml-2">
            <span className="strike-through list">
              <label> Price</label>
              <span className="value" content="38,367">
                <span className="sr-only">Price reduced from</span> ₹65,596
                <span className="sr-only">to</span>
              </span>
            </span>
          </del>
        </div>
        <div className="mt-2 md:mt-5">
          <ul className="list-group text-sm md:text-lg">
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
        <div className="flex flex-col md:flex-row space-y-2 gap-2 md:space-y-0 mt-2 md:mt-5">
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
          <div className="flex- mt-2 md:mt-0">
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
  );
}

export default Earring3;
