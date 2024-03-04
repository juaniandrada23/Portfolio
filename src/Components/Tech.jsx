import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenCode from '../Images/imagenCode.jpg';

const Tech = () => {
  return (
    <div className='w-full h-screen'>
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

      <div>
        <h1 className='text-center'>Aca vamos a poner los cuadros </h1>
      </div>

    </div>
  );
};

export default Tech;
