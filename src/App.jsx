import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import CategoryPage from "./Components/CategoryPage";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  const [activePage, setActivePage] = useState("home");
  const carouselSlides = [
    "https://www.orra.co.in/media/wysiwyg/Web_banner_For_Aeka_Collection_Without_HDFC_Logo.jpg",
    "https://kinclimg4.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/valentine_static_desktop_home.jpg",
    "https://kinclimg3.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1701877714735-you_and_me_desktop_banner.jpg",
    "https://kinclimg4.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1689617310653-Colour-me-pop-Desktop-hompeage-banner-v1.gif",
  ];

  return (
    <div className="lg:flex lg:flex-col min-h-screen">
      <Navbar setActivePage={setActivePage} />

      {activePage === 'home' && (
        <>
          <Carousel autoSlide autoSlideInterval={3000}>
            {carouselSlides.map((slide, index) => (
              <img
                key={`slide-${index}`}
                src={slide}
                alt={`Slide ${index + 1}`}
                className='w-full max-h-96 object-cover md:max-h-screen'
              />
            ))}
          </Carousel>
          <HomePage />
        </>
      )}

      {activePage === 'CategoryPage' && <CategoryPage />}
      {activePage === 'Product' && <Product />}
      {activePage === 'Cart' && <Cart />}
      
      <Footer />
    </div>
  );
}

export default App;
