import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import EarringPage from "./Components/CategoryPage/Earrings";
import FingerRing from "./Components/CategoryPage/FingerRing";
import Pendants from './Components/CategoryPage/Pendants';
import NosePins from "./Components/CategoryPage/NosePin";
import Bracelets from "./Components/CategoryPage/Bracelets";
import NecklaceSets from "./Components/CategoryPage/NecklaceSet";
import Bangles from "./Components/CategoryPage/Bangles";
import Chains from "./Components/CategoryPage/Chains";
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

      {activePage === "earrings" && <EarringPage />}
      {activePage === "fingerring" && <FingerRing />}
      {activePage === "pendants" && <Pendants />}
      {activePage === "nosepins" && <NosePins />}
      {activePage === "bracelets" && <Bracelets />}
      {activePage === "necklacesets" && <NecklaceSets />}
      {activePage === "bangles" && < Bangles/>}
      {activePage === "chains" && <Chains/>}
      <Footer />
    </div>
  );
}

export default App;
