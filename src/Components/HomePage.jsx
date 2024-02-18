import React from 'react';
const Homepage = ({  setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };
  return (
    <div className="text-center">
      <h1 className='mt-10 text-red-800 text-5xl font-medium'>Shop by Category</h1>
      <p className='text-xl mt-5'>Browse through your favorite categories. We've got them all!</p>
      <img className="w-full" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="divider-image" />
      <div className="flex flex-wrap justify-center mt-5">
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47b1df4b/homepage/shopByCategory/fod-earrings.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('earrings')}>
          Earrings
          </button>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc4fb974/homepage/shopByCategory/fod-rings.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('fingerring')}>
          Finger Rings
          </button>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('pendants')}>
          Pendants
          </button>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0cb7b15f/homepage/shopByCategory/fod-nosepins.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('nosepins')}>
         Nose Pins
          </button>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4dcf3d1d/homepage/shopByCategory/fod-bracelet.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('bracelets')}>
         Bracelets
          </button> 
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw66347a7d/homepage/shopByCategory/fod-necklace-set.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('necklacesets')}>
          Necklace Sets
          </button>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7dbdbacf/homepage/shopByCategory/fod-bangle.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('bangles')}>
       Bangles
          </button>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcbb3ebbb/homepage/shopByCategory/fod-chain.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <button
            className=" hover:underline underline-offset-1 mt-5 text-red-800 text-xl "
            onClick={() => handleTabClick('chains')}>
          Chains
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
