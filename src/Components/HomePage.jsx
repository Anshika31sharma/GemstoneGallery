import React from 'react';

const Homepage = () => {
  return (
    <div className="text-center">
      <h1 className='mt-10 text-red-800 text-5xl font-medium'>Shop by Category</h1>
      <p className='text-xl mt-5'>Browse through your favorite categories. We've got them all!</p>
      <img className="w-full" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="divider-image" />
      <div className="flex flex-wrap justify-center mt-5">
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47b1df4b/homepage/shopByCategory/fod-earrings.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Earrings</h6>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc4fb974/homepage/shopByCategory/fod-rings.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Finger Rings</h6>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Pendants</h6>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0cb7b15f/homepage/shopByCategory/fod-nosepins.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Nose Pins</h6>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4dcf3d1d/homepage/shopByCategory/fod-bracelet.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Bracelets</h6>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw66347a7d/homepage/shopByCategory/fod-necklace-set.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Necklace sets</h6>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7dbdbacf/homepage/shopByCategory/fod-bangle.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Bangles</h6>
        </div>
        <div className="m-4">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcbb3ebbb/homepage/shopByCategory/fod-chain.jpg" className="card-img-top h-80 w-full transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy" />
          <h6 className='mt-5 text-red-800 text-xl'>Chains</h6>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
