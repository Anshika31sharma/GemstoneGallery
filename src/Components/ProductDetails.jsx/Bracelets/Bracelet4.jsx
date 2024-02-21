import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Bracelet4() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "bracelet4",
      name: "Intricate Leafy Bracelet",
      price: 36449,
      image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc42bf48/images/hi-res/51D3B1BGPAA00_2.jpg",
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div>
        <img
          className="d-block shadow-lg img-fluid aspect-ratio open-image-swiper w-96 h-96 md:ml-10 md:mt-10"
          id="myimage"
          src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc42bf48/images/hi-res/51D3B1BGPAA00_2.jpg"
          alt="Bracelet"
        />
      </div>
      <div className="md:ml-20 md:mt-10">
        <h2 className="text-3xl font-bold">Intricate Leafy Bracelet</h2>
        <div className="col-sm-12 text-lg mt-5 col-md-8 col-lg-12 pt-2 value content px-0 pt-lg-0">
          Stand out of the crowd easily when you adorn the intricate leaf patterns of this bracelet, crafted in 22 karat yellow gold.
        </div>
        <div className="mt-5 md:mt-10">
          <p className="text-5xl text-red-700">CURRENTLY OUT OF STOCK</p>
        </div>
        <button
          className="evgAddtoCart add-to-cart btn btn-lg btn-outline mt-5 md:mt-10 py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md"
          data-toggle="modal"
          data-target="#chooseBonusProductModal"
          data-pid="50d3b3dhuaga022bd000012"
          data-mpid="50D3B3DHUAGA02"
          data-max-qty="1"
          data-buttontype="addToCart"
          onClick={handleAddToCart}
        >
          Notify me
        </button>
      </div>
    </div>
  );
}

export default Bracelet4;
