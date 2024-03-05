import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenCode from '../Images/imagenCode.jpg';
import TechAtropos from './Techs/TechAtropos';

const Tech = () => {
  return (
    <div className='w-full h-screen bg-reno-100'>
      <ParallaxBanner
        layers={[
          { image: imagenCode, speed: 35 },
        ]}
        style={{
          height: '130px',
        }}
      >
        <div className="absolute inset-0 flex items-center md:justify-start xs:justify-center bg-opacity-65 bg-reno-700">
          <h1 className="text-4xl font-semibold text-reno-50 md:ml-5 ">Tecnologias</h1>
        </div>
      </ParallaxBanner>

      <div className='flex justify-center items-center h-2/3'>
        <div className='text-reno-50 grid md:grid-cols-7 xs:grid-cols-1 md:gap-8 md:mx-10 md:space-x-6 xs:gap-5'>
            <TechAtropos/>
        </div>
      </div>

    </div>
  );
};

export default Tech;
