import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { FaHandPointDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

import cityImage from '../Images/imagenCiudad.jpg';
import profileImage from '../Images/fotoJuani.png';

const Welcome = () => {
  return (
    <div id="inicio" className="relative h-screen overflow-hidden">
      <ParallaxBanner
        layers={[{ image: cityImage, speed: 15 }]}
        style={{ height: '100%', width: '100%' }}
      >
        <div className="absolute inset-0 flex items-center text-white">
          <div className="w-full md:w-1/2 p-8 md:p-4 bg-black bg-opacity-80 flex flex-col items-center justify-center h-full">
            <img
              src={profileImage}
              alt="Juan Ignacio Andrada Cabo"
              className="xs:w-44 xs:h-44 md:w-40 md:h-40 rounded-full mb-4 object-cover object-top"
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Juan Ignacio Andrada Cabo</h1>
            <p className="text-lg md:text-xl mb-6">Desarrollador Full Stack</p>
            <Link to="about" spy smooth offset={-70} duration={500} className="flex items-center text-lg md:text-xl cursor-pointer">
              <FaHandPointDown className="w-7 h-7 md:w-8 md:h-8 animate-bounce"/>
            </Link>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Welcome;
