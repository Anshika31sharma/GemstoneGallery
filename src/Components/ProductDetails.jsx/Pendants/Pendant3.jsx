import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Pendant3() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "pendant3",
      name: "Charming Mesh Pendant",
      price: 36449,
      image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f261308/images/hi-res/50D3I1PRTAAA29_2.jpg"
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div>
        <img
          className="d-block  shadow-lg img-fluid aspect-ratio open-image-swiper h-96 w-96 md:ml-10 md:mt-10"
          id="myimage"
          src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f261308/images/hi-res/50D3I1PRTAAA29_2.jpg"
          alt="Earring"
        />
      </div>
      <div className="md:ml-20 md:mt-10">
        <h2 className="text-3xl font-bold">Charming Mesh Pendant</h2>
        <div className="col-sm-12 text-lg mt-5 col-md-8 col-lg-12 pt-2 value content px-0 pt-lg-0">
          Feel the beauty of nature with this floral mesh pendant, crafted in 18 karat rose gold, studded with pearls and diamonds.
        </div>
        <div className="prices mt-5">
          <span>
            <span className="sales font-bold text-4xl">
              <span className="value price-text evgProductPrice" content="36,449">
                <label className="price-label text-black font-normal"> Offer Price</label>
                <span className=" ml-2">₹27,363</span>
              </span>
            </span>
            <del className="text-decoration-none font-medium text-xl ml-2">
              <span className="strike-through list">
                <label> Price</label>
                <span className="value" content="38,367">
                  <span className="sr-only">
                    Price reduced from
                  </span>
                  ₹28,803
                  <span className="sr-only">
                    to
                  </span>
                </span>
              </span>
            </del>
          </span>
          <div className="col-12 mt-5">
            <ul className="list-group text-lg">
              <li className="d-flex align-items-center">
                <span className="svg-sprite purity-icon"></span>
                <p className="d-inline mb-0">Purity Guaranteed.</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="svg-sprite exchange-icon"></span>
                <p className="d-inline mb-0">Exchange across all stores.</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="svg-sprite shipping-icon"></span>
                <p className="d-inline mb-0">Free Shipping all across India</p>
              </li>
            </ul>
          </div>
          <div className="row cart-and-ipay flex space-x-5 mt-5">
            <div className="col-6 button-add">
              <input
                type="hidden"
                className="add-to-cart-url"
                value="/on/demandware.store/Sites-Tanishq-Site/en_IN/Cart-AddProduct"
              />
              <button
                className="evgAddtoCart add-to-cart btn btn-lg btn-outline w-full py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md "
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
            <div className="col-6 button-buy">
              <input
                type="hidden"
                className="add-to-cart-url"
                value="/on/demandware.store/Sites-Tanishq-Site/en_IN/Cart-AddProduct"
              />
              <button
                className="add-to-cart btn btn-lg py-2 w-full justify-content-center buy-now-outline bg-gray-200 p-4 rounded-md hover:text-white hover:bg-red-800"
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

export default Pendant3;
