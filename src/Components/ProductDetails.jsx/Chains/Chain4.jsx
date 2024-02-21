import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Chain4() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "chain4",
      name: "Lord Jagganath Chain",
      price: 36449,
      image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe8be77aa/images/hi-res/51F3JRGBDAA00_2.jpg",
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div>
        <img
          className="d-block shadow-lg img-fluid aspect-ratio open-image-swiper h-96 w-96 md:ml-5 md:mt-10"
          id="myimage"
          src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe8be77aa/images/hi-res/51F3JRGBDAA00_2.jpg"
          alt="Lord Jagganath Chain"
        />
      </div>
      <div className="md:ml-10 md:mt-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl mt-5 font-bold">Lord Jagganath Chain</h2>
        <div className="col-sm-12 text-base md:text-lg mt-3 md:mt-5 col-md-8 col-lg-12 pt-2 value content px-0 pt-lg-0">
          Red and black enamel contrasts with the radiance of gold in this Lord Jagannath pendant with chain, crafted in 22 karat yellow gold.
        </div>
        <div className="prices mt-5">
          <span>
            <span className="sales font-bold text-4xl ">
              <span className="value price-text evgProductPrice" content="36,449">
                <label className="price-label text-black font-normal"> Offer Price</label>
                <span className="ml-2 md:ml-0">₹36,449</span>
              </span>
            </span>
            <del className="text-decoration-none font-medium text-xl ml-2 md:ml-0">
              <span className="strike-through list">
                <label> Price</label>
                <span className="value" content="38,367">
                  <span className="sr-only">Price reduced from</span>
                  ₹38,367
                  <span className="sr-only">to</span>
                </span>
              </span>
            </del>
          </span>
          <div className="col-12 mt-5">
            <ul className="list-group text-base md:text-lg">
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
          <div className="row cart-and-ipay flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 mt-5">
            <div className="col-12 md:col-6 button-add">
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
            <div className="col-12 md:col-6 button-buy">
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

export default Chain4;
