import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Necklaceset3() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);
  const handleAddToCart = () => {
    addToCart({
      id: "necklaceset3", 
      name: "Gleaming Gold Necklace Set",
      price: 36449,
      image:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8ca21967/images/hi-res/51D3B12HDABA00_2.jpg"
       
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
          src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8ca21967/images/hi-res/51D3B12HDABA00_2.jpg"
       
       />
      </div>
      <div className=" ml-20 mt-10">
        <h2 className="text-2xl font-bold"> Gleaming Gold Necklace Set</h2>
        <div class="col-sm-12 mt-5 col-md-8 col-lg-12 pt-2 value content px-0 pt-lg-0">
        Be a stunning presence when you don this lovely necklace set, crafted in 22 karat yellow gold
</div>
<div class="prices mt-5">
<span>
<span class="sales font-bold text-4xl ">
<span class="value price-text evgProductPrice  " content="36,449">
<label class="price-label text-black font-normal"> Offer Price</label>
₹23,868
</span>
</span>
<del class="text-decoration-none font-medium text-xl">
<span class="strike-through list">
<label> Price</label>
<span class="value " content="38,367">
<span class="sr-only">
Price reduced from
</span>
₹25,125
<span class="sr-only">
to
</span>
</span>
</span>
</del>
</span>
<div class="col-12 mt-5">
<ul class="list-group">
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
<div class="row cart-and-ipay flex space-x-5 mt-5">
            <div class="col-6 button-add">
              <input
                type="hidden"
                class="add-to-cart-url"
                value="/on/demandware.store/Sites-Tanishq-Site/en_IN/Cart-AddProduct"
              />
              <button
                className="evgAddtoCart add-to-cart btn btn-lg btn-outline w-100 py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md "
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
            <div class="col-6 button-buy">
              <input
                type="hidden"
                class="add-to-cart-url"
                value="/on/demandware.store/Sites-Tanishq-Site/en_IN/Cart-AddProduct"
              />
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
export default Necklaceset3;