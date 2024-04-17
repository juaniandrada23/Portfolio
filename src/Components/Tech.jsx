import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenCode from '../Images/imagenCode.jpg';
import FlipCard from '../Components/Techs/FlipCard'

const Tech = () => {
  return (
    <div id='tech' className='w-full xs:h-full md:h-full bg-gradient-to-b from-gray-900 to-gray-800 relative'>
      <ParallaxBanner layers={[{ image: imagenCode, speed: 35 }, ]} style={{height: '130px',}}>
        <div className="absolute inset-0 flex items-center md:justify-start xs:justify-center bg-opacity-65 bg-reno-700">
          <h1 className="text-4xl font-semibold text-reno-50 md:ml-5 ">Tecnologias</h1>
        </div>
      </ParallaxBanner>

      <div className='flex justify-center md:items-center xs:items-start h-screen'>
        <div className='grid lg:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 gap-4 xs:my-4 md:my-0'>
            <FlipCard/>
        </div>
      </div>
    </div>
  );
};

export default Tech;
