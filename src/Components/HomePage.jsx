import React from 'react';
const Homepage = () => {
  return (
    <div>
      <h1 className=' text-center justify-center mt-10 text-red-800 text-5xl font-medium'>Shop by Category</h1>
     <p className='text-center justify-center text-xl mt-5'>Browse through your favorite categories. We've got them all!</p>
     <img class="w-100" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="divider-image"/>  
     <div className="flex">
  <div className=" ml-11">
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47b1df4b/homepage/shopByCategory/fod-earrings.jpg" class="card-img-top h-80 transition-transform transform-gpu hover:scale-105 "  alt="..." loading="lazy"/>
    <h6 className='ml-32 mt-5 text-red-800 text-xl'>Earrings</h6>
  </div>
  <div className="ml-5">
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc4fb974/homepage/shopByCategory/fod-rings.jpg" class="card-img-top h-80 w-80 transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy"/>
    <h6 class="ml-32 mt-5 text-red-800 text-xl">Finger Rings</h6>
  </div>
  <div className="ml-5">
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg" class="card-img-top h-80 transition-transform transform-gpu hover:scale-105"  alt="..." loading="lazy"/>
    <h6 className='ml-32 mt-5 text-red-800 text-xl'>Pendants</h6>
  </div>
  <div className="ml-5">
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0cb7b15f/homepage/shopByCategory/fod-nosepins.jpg" class="card-img-top h-80 w-80 transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy"/>
    <h6 class="ml-32 mt-5 text-red-800 text-xl">Nose Pins</h6>
  </div>
</div>
<div className="flex mt-10">
<div className="ml-11 ">
  <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4dcf3d1d/homepage/shopByCategory/fod-bracelet.jpg" class="card-img-top h-80 transition-transform transform-gpu hover:scale-105 " alt="..." loading="lazy"/>
  <h6 className='ml-32 mt-5 text-red-800 text-xl'>Bracelets</h6>
</div>

  <div className="ml-5">
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw66347a7d/homepage/shopByCategory/fod-necklace-set.jpg" class="card-img-top h-80 w-80  transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy"/>
    <h6 class="ml-32 mt-5 text-red-800 text-xl">Necklace sets</h6>
  </div>
  <div className="ml-5">
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7dbdbacf/homepage/shopByCategory/fod-bangle.jpg" class="card-img-top h-80 transition-transform transform-gpu hover:scale-105 "  alt="..." loading="lazy"/>
    <h6 className='ml-32 mt-5 text-red-800 text-xl'>Bangles</h6>
  </div>
  <div className="ml-5">
    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcbb3ebbb/homepage/shopByCategory/fod-chain.jpg" class="card-img-top h-80 w-80 transition-transform transform-gpu hover:scale-105" alt="..." loading="lazy"/>
    <h6 class="ml-32 mt-5 text-red-800 text-xl">Chains</h6>
  </div>
</div>
    </div>
  );
};

export default Homepage;
