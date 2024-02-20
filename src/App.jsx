import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import EarringPage from "./Components/CategoryPage/Earrings";
import FingerRing from "./Components/CategoryPage/FingerRing";
import Pendants from "./Components/CategoryPage/Pendants";
import NosePins from "./Components/CategoryPage/NosePin";
import Bracelets from "./Components/CategoryPage/Bracelets";
import NecklaceSets from "./Components/CategoryPage/NecklaceSet";
import Bangles from "./Components/CategoryPage/Bangles";
import Chains from "./Components/CategoryPage/Chains";
import Earring1 from "./Components/ProductDetails.jsx/Earrings/Earring1";
import Earring2 from "./Components/ProductDetails.jsx/Earrings/Earring2";
import Earring3 from "./Components/ProductDetails.jsx/Earrings/Earring3";
import Earring4 from "./Components/ProductDetails.jsx/Earrings/Earring4";
import Fingerring1 from "./Components/ProductDetails.jsx/Fingerrings/Fingerring1";
import Fingerring2 from "./Components/ProductDetails.jsx/Fingerrings/Fingerring2";
import Fingerring3 from "./Components/ProductDetails.jsx/Fingerrings/Fingerring3";
import Fingerring4 from "./Components/ProductDetails.jsx/Fingerrings/Fingerring4";
import Pendant1 from "./Components/ProductDetails.jsx/Pendants/Pendant1";
import Pendant2 from "./Components/ProductDetails.jsx/Pendants/Pendant2";
import Pendant3 from "./Components/ProductDetails.jsx/Pendants/Pendant3";
import Pendant4 from "./Components/ProductDetails.jsx/Pendants/Pendant4";
import NosePin1 from "./Components/ProductDetails.jsx/NosePins/NosePin1";
import NosePin2 from "./Components/ProductDetails.jsx/NosePins/NosePin2";
import NosePin3 from "./Components/ProductDetails.jsx/NosePins/NosePin3";
import NosePin4 from "./Components/ProductDetails.jsx/NosePins/NosePin4";
import Bracelet1 from "./Components/ProductDetails.jsx/Bracelets/Bracelet1";
import Bracelet2 from "./Components/ProductDetails.jsx/Bracelets/Bracelet2";
import Bracelet3 from "./Components/ProductDetails.jsx/Bracelets/Bracelet3";
import Bracelet4 from "./Components/ProductDetails.jsx/Bracelets/Bracelet4";
import NecklaceSet1 from "./Components/ProductDetails.jsx/NecklaceSets/NecklaceSet1";
import NecklaceSet2 from "./Components/ProductDetails.jsx/NecklaceSets/NecklaceSet2";
import NecklaceSet3 from "./Components/ProductDetails.jsx/NecklaceSets/NecklaceSet3";
import NecklaceSet4 from "./Components/ProductDetails.jsx/NecklaceSets/NecklaceSet4";
import Bangle1 from "./Components/ProductDetails.jsx/Bangles/Bangle1";
import Bangle2 from "./Components/ProductDetails.jsx/Bangles/Bangle2";
import Bangle3 from "./Components/ProductDetails.jsx/Bangles/Bangle3";
import Bangle4 from "./Components/ProductDetails.jsx/Bangles/Bangle4";
import Chain1 from "./Components/ProductDetails.jsx/Chains/Chain1";
import Chain2 from "./Components/ProductDetails.jsx/Chains/Chain2";
import Chain3 from "./Components/ProductDetails.jsx/Chains/Chain3";
import Chain4 from "./Components/ProductDetails.jsx/Chains/Chain4";
import ShoppingCart from "./Components/ProductDetails.jsx/Bangles/Cart";
import { CartProvider } from "./Components/ProductDetails.jsx/Bangles/CartContext";

function App() {
  const [activePage, setActivePage] = useState("home");
  const carouselSlides = [
    "https://www.orra.co.in/media/wysiwyg/Web_banner_For_Aeka_Collection_Without_HDFC_Logo.jpg",
    "https://kinclimg4.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/valentine_static_desktop_home.jpg",
    "https://kinclimg3.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1701877714735-you_and_me_desktop_banner.jpg",
    "https://kinclimg4.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1689617310653-Colour-me-pop-Desktop-hompeage-banner-v1.gif",
  ];
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  return (
    <CartProvider>
    <div className="lg:flex lg:flex-col min-h-screen">
      <Navbar setActivePage={handlePageChange} />
      {activePage === "home" && (
        <>
          <Carousel autoSlide autoSlideInterval={3000}>
            {carouselSlides.map((slide, index) => (
              <img
                key={`slide-${index}`}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-96 object-cover md:max-h-screen"
              />
            ))}
          </Carousel>
          <HomePage setActivePage={handlePageChange} />
        </>
      )}
      {activePage === "earrings" && <EarringPage setActivePage={handlePageChange}  />}
      {activePage === "fingerring" && <FingerRing  setActivePage={handlePageChange} />}
      {activePage === "pendants" && <Pendants setActivePage={handlePageChange}  />}
      {activePage === "nosepins" && <NosePins setActivePage={handlePageChange} />}
      {activePage === "bracelets" && <Bracelets setActivePage={handlePageChange} />}
      {activePage === "necklacesets" && <NecklaceSets setActivePage={handlePageChange} />}
      {activePage === "bangles" && <Bangles setActivePage={handlePageChange} />}
      {activePage === "chains" && <Chains setActivePage={handlePageChange} />}
      {activePage === "earring1" && <Earring1 />}
      {activePage === "earring2" && <Earring2 />}
      {activePage === "earring3" && <Earring3 />}
      {activePage === "earring4" && <Earring4 />}
      {activePage === "fingerring1" && <Fingerring1 />}
      {activePage === "fingerring2" && <Fingerring2 />}
      {activePage === "fingerring3" && <Fingerring3 />}
      {activePage === "fingerring4" && <Fingerring4 />}
      {activePage === "pendant1" && <Pendant1 />}
      {activePage === "pendant2" && <Pendant2 />}
      {activePage === "pendant3" && <Pendant3 />}
      {activePage === "pendant4" && <Pendant4 />}
      {activePage === "nosepin1" && <NosePin1/>}
      {activePage === "nosepin2" && <NosePin2/>}
      {activePage === "nosepin3" && <NosePin3/>}
      {activePage === "nosepin4" && <NosePin4/>}
      {activePage === "bracelet1" && <Bracelet1/>}
      {activePage === "bracelet2" && <Bracelet2/>}
      {activePage === "bracelet3" && <Bracelet3/>}
      {activePage === "bracelet4" && <Bracelet4/>}
      {activePage === "necklaceset1" && <NecklaceSet1/>}
      {activePage === "necklaceset2" && <NecklaceSet2/>}
      {activePage === "necklaceset3" && <NecklaceSet3/>}
      {activePage === "necklaceset4" && <NecklaceSet4/>}
      {activePage === "bangle1" && <Bangle1/>}
      {activePage === "bangle2" && <Bangle2/>}
      {activePage === "bangle3" && <Bangle3/>}
      {activePage === "bangle4" && <Bangle4/>}
      {activePage === "chain1" && <Chain1/>}
      {activePage === "chain2" && <Chain2/>}
      {activePage === "chain3" && <Chain3/>}
      {activePage === "chain4" && <Chain4/>}
      {activePage === "cart" && <ShoppingCart />}

      <Footer />
    </div>
    </CartProvider>
  );
}
export default App;