import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Fingerring1() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "fingerring1",
      name: "Glinting Circles Diamond Ring",
      price: 36449,
      image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw505ea267/images/hi-res/50D2PTFWSAA09_2.jpg"
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <img
          className="lg:block ml-10 mt-10 w-64 h-auto aspect-ratio shadow-lg lg:w-96 lg:h-96 mx-auto"
          id="myimage"
          src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw505ea267/images/hi-res/50D2PTFWSAA09_2.jpg"
          alt="Earring"
        />
      </div>
      <div className="ml-10 mt-10 lg:ml-20">
        <h2 className="text-3xl font-bold">Glinting Circles Diamond Ring</h2>
        <div className="col-sm-12 mt-5 text-lg col-md-8 col-lg-12 pt-2 value content px-0 pt-lg-0">
          Tiny overlapping circles, encrusted with glinting diamonds form an elegant design in this ring crafted in 18 karat rose gold
        </div>
        <div className="prices mt-5">
          <span>
            <span className="sales font-bold text-4xl ">
              <span className="value price-text evgProductPrice" content="36,449">
                <label className="price-label text-black font-normal "> Offer Price</label>
                <span className=" ml-2">₹23,868</span>
              </span>
            </span>
            <del className="text-decoration-none font-medium text-xl ml-2">
              <span className="strike-through list">
                <label> Price</label>
                <span className="value" content="38,367">
                  <span className="sr-only">
                    Price reduced from
                  </span>
                  ₹25,125
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
                className="evgAddtoCart add-to-cart btn btn-lg btn-outline w-full py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md"
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

export default Fingerring1;
