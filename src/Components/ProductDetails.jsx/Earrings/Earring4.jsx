import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Earring4() {
  const { addToCart } = useCart();
  const [isItemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "earring4",
      name: "The Lightness of Being",
      price: 36449,
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw40c38f79/images/hi-res/50LB21DAKABA34_1.jpg?sw=640&sh=640",
    });
    setItemAdded(true);
    window.alert("Item added to the cart!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div>
        <img
          className="lg:block ml-5 mt-10 w-64  h-auto  aspect-ratio shadow-lg lg:w-96 lg:h-96 mx-auto"
          id="myimage"
          src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw40c38f79/images/hi-res/50LB21DAKABA34_1.jpg?sw=640&sh=640"
          alt="The Lightness of Being"
        />
      </div>
      <div className="mx-4 mt-4 md:mt-0 md:ml-10">
        <h2 className="text-3xl font-bold mt-10"> The Lightness of Being</h2>
        <div className="text-xl mt-2 md:mt-5">
          Beautiful chandelier earrings
        </div>
        <div className="mt-5">
          <h className="text-3xl text-red-700">CURRENTLY OUT OF STOCK</h>
        </div>
        <button
          className="evgAddtoCart add-to-cart btn btn-lg btn-outline mt-5 py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md"
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

export default Earring4;
