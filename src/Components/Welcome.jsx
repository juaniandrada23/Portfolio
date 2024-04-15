import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenCiudad from '../Images/imagenCiudad.jpg';
import imagenJuani from '../Images/imagenJuani.png';
import { FaHandPointDown } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Welcome = () => {
  return (
    <div id='inicio' className='relative h-screen overflow-hidden'>
      <ParallaxBanner
        layers={[
          { image: imagenCiudad, speed: 15 },
        ]}
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        <div className="absolute inset-0 flex md:justify-start xs:justify-center items-center text-center text-white">
          <div className="bg-black bg-opacity-80 xs:p-8 cel:p-4 xs:mx-10 md:mx-0 xs:rounded-2xl md:rounded-none md:w-1/2 md:h-full flex justify-center items-center flex-col">
            <img src={imagenJuani} alt="Juan Ignacio Andrada Cabo" className="xs:w-40 xs:h-40 md:w-32 md:h-32 xl:w-52 xl:h-52 rounded-full mb-4 mx-auto object-contain" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Juan Ignacio Andrada Cabo</h1>
            <p className="text-lg md:text-xl mb-6">Desarrollador Full Stack</p>
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500} className="text-lg md:text-xl flex items-center">
              <FaHandPointDown className="w-8 h-8 animate-bounce"/>
            </Link>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Welcome;
