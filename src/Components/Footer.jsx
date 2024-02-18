import React from 'react';

const Footer = () => {
  return (
    <div className="bg-red-100  p-20 h-full mt-10  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-red-800">Your Online Jewellery Store</h2>
            <p className="hidden md:block">Know Your Jewellery</p>
            <div className="flex space-x-4 mt-4">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251b1e702b6e99fe50ca3f_appstorelink.svg" alt="App Store Logo" loading="lazy" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251afd2981fa2f54bce447_googleplay-link.svg" alt="Google Play Logo" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2 text-red-800">Custmor Service</h3>
            <a href="/terms-conditions" className="block mb-2">Terms & Conditions</a>
            <a href="/privacy-policy" className="block mb-2">Privacy Policy</a>
            <a href="/refund-policy" className="block mb-2">Refund Policy</a>
          </div>
          <div>
  <h3 className="text-xl font-bold mb-2 text-red-800">Contact</h3>
  <a href="tel:123456789" className="block mb-2">
    <img
      src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251d8c99875d9c1e808fb0_call-icon-footer.svg"
      alt="Call icon"
      loading="lazy"
      className="inline-block mr-2"
    />
    +91123456789
  </a>
  <a href="mailto:support@elda.com?subject=Hello" className="block mb-2">
    <img
      src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251d8cbda598aae92cafc5_main-icon-footer.svg"
      alt="Mail Icon"
      loading="lazy"
      className="inline-block mr-2"
    />
    abc@gmail.com
  </a>
</div>

        </div>
        <div className="text-center mt-5 ">
        <p className="text-sm">@2024 All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;