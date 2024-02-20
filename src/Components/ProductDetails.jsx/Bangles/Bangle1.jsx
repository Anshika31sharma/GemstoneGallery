import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Bangle1() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "bangle1", 
      name: "Vibrant Enamel Bangle",
      price: 36449,
      image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2cc90bc0/images/hi-res/51D3B3VWY2A00_2.jpg",
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="flex">
      <div>
        <img
          className="d-block img-fluid aspect-ratio open-image-swiper h-96 w-96 ml-10 mt-10"
          id="myimage"
          src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2cc90bc0/images/hi-res/51D3B3VWY2A00_2.jpg"
          alt="Earring"
        />
      </div>
      <div className="ml-20 mt-10">
        <h2 className="text-2xl font-bold"> Vibrant Enamel Bangle</h2>
        <div className="col-sm-12 mt-5 col-md-8 col-lg-12 pt-2 value content px-0 pt-lg-0">
          Abstract patterns of red and green enamel make a beautiful contrast against gold in this bangle crafted in 22 karat yellow gold.
       
        </div>
        <div className="prices mt-5">
          <span>
            <span className="sales font-bold text-4xl ">
              <span className="value price-text evgProductPrice  " content="36,449">
                <label className="price-label text-black font-normal"> Offer Price</label>
                ₹36,449
              </span>
            </span>
            <del className="text-decoration-none font-medium text-xl">
              <span className="strike-through list">
                <label> Price</label>
                <span className="value " content="38,367">
                  <span className="sr-only">Price reduced from</span>
                  ₹38,367
                  <span className="sr-only">to</span>
                </span>
              </span>
            </del>
          </span>
          <div className="col-12 mt-5">
            <ul className="list-group">
            <li class="d-flex align-items-center">
<span class="svg-sprite purity-icon"></span>
<p class="d-inline mb-0">Purity Guaranteed.</p>
</li>
<li class="d-flex align-items-center">
<span class="svg-sprite exchange-icon"></span>
<p class="d-inline mb-0">Exchange across all stores.</p>
</li>
<li class="d-flex align-items-center">
<span class="svg-sprite shipping-icon"></span>
<p class="d-inline mb-0">Free Shipping all across India</p>
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
                className="evgAddtoCart add-to-cart btn btn-lg btn-outline w-100 py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md "
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
            <div className="col-6 button-buy">
            <button
                class="add-to-cart btn btn-lg py-2 w-100 justify-content-center buy-now-outline bg-gray-200 p-4 rounded-md hover:text-white hover:bg-red-800"
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

export default Bangle1;
