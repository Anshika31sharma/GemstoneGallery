import React, { useState } from "react";
import { useCart } from "../Bangles/CartContext";

function Bracelet4() {
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
      <img class="d-block img-fluid aspect-ratio open-image-swiper h-96 w-96 ml-10 mt-10" id="myimage" src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc42bf48/images/hi-res/51D3B1BGPAA00_2.jpg" width="100%" height="100%" onerror="this.src='/on/demandware.static/-/Sites-Tanishq-site-catalog/default/v7e4151d8817101406b98615b73a8da6b6467c4c1/noimage/medium_missing.svg'" image-index="0" alt="Sophisticated Dainty Diamond Drop Earrings,,hi-res image number null" hi-res-url="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw58eb627c/images/hi-res/50D2FFDMKAGA09_1.jpg" itemprop="image"/>
      </div>
      <div className=" ml-20 mt-10">
        <h2 className="text-2xl font-bold"> Intricate Leafy Bracelet</h2>
        <div class="col-sm-12 mt-5 col-md-8 col-lg-12 pt-2 value content px-0 pt-lg-0">
        Stand out of the crowd easily when you adorn the intricate leaf patterns of this bracelet, crafted in 22 karat yellow gold

</div>
<div className=" mt-10"> 
<h className= " text-5xl text-red-700 ">CURRENTLY OUT OF STOCK</h>
</div>
<button class="evgAddtoCart add-to-cart btn btn-lg btn-outline mt-10  py-2 text-align-center add-to-cart-outline bg-red-800 hover:bg-red-950 text-white p-4 rounded-md " data-toggle="modal" data-target="#chooseBonusProductModal" data-pid="50d3b3dhuaga022bd000012" data-mpid="50D3B3DHUAGA02" data-max-qty="1" data-buttontype="addToCart">
Notify me
</button>
      </div>
    </div>
  );
}
export default Bracelet4;