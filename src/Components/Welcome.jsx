import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenCiudad from '../Images/imagenCiudad.jpg';
import imagenJuani from '../Images/imagenJuani.png';
import { FaHandPointDown } from "react-icons/fa6";

const Welcome = () => {
  return (
<div className='relative h-screen overflow-hidden'>
  <ParallaxBanner
    layers={[
      { image: imagenCiudad, speed: 15},
    ]}
    style={{
      height: '100%',
      width: '100%'
    }}
  >
    <div className='absolute inset-0 flex md:justify-start bg-opacity-35 xs:justify-center xs:my-28 md:my-0 bg-reno-900'>
      <div className='bg-reno-950 bg-opacity-90 md:w-1/2 flex flex-col md:justify-center xs:justify-evenly items-center xs:mx-3 md:mx-0 xs:px-3 xs:pb-2 md:gap-10 xs:gap-4 xs:rounded-3xl md:rounded-none'>
        <div className='bg-white flex justify-center overflow-hidden rounded-full border-4 border-reno-400 shadow-reno-100 xs:m-4 cel:m-2 md:mt-28'>
          <img src={imagenJuani} alt="Foto de Juan Ignacio Andrada Cabo" className='object-contain md:h-60 md:w-60 xs:h-40 xs:w-40'/>
        </div>
        <div>
          <h1 className='text-3xl md:text-4xl cel:text-3xl xs:text-2xl px-2 md:px-10 lg:mb-2 xs:mb-6 text-reno-50 font-bold text-center'>Juan Ignacio Andrada Cabo</h1>
          <h3 className='text-3xl md:text-4xl cel:text-3xl xs:text-2xl px-2 md:px-10 text-reno-50 font-bold text-center'>Desarrollador FullStack</h3>
        </div>
        <div className='flex flex-col items-end justify-end xs:pb-3'>
          <button>
            <FaHandPointDown className='animate-bounce text-white w-10 h-10'/>
          </button>
        </div>
      </div>
    </div>
  </ParallaxBanner>
</div>

  );
};

export default Welcome;
