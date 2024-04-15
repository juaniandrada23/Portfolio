import React from 'react';
import backend from '../Images/backendImage.png';
import frontend from '../Images/frontendImage.png';
import sistemas from '../Images/sistemasImage.png';

const About = () => {
  return (
    <div id='about' className='md:min-h-screen xs:min-h-0 bg-gradient-to-b from-gray-900 to-gray-800 relative'>
      <div className='flex md:justify-start xs:justify-center items-center h-32 bg-gradient-to-l from-reno-950 to-gray-800'> 
        <span className='text-4xl mt-4 md:ml-5 xs:my-2 font-semibold text-reno-50'>Acerca de mi</span>
      </div>

      <div className='grid md:grid-cols-3 gap-8 xs:grid-cols-1 relative z-10 justify-center items-center xs:mt-6 md:mt-4'>
        <div className="bg-gray-800 mx-4 md:mx-8 rounded-lg shadow-lg p-9">
          <h2 className='text-white text-lg md:text-xl font-semibold mb-4'>
            ¡Hola! Soy Juan Ignacio.
          </h2>
          <p className='text-gray-400 text-base md:text-lg leading-relaxed'>
            Bienvenidos a mi espacio. Soy un apasionado estudiante de Ingeniería en Sistemas con una sólida experiencia en programación y desarrollo de software. Mi objetivo es aplicar mis habilidades para crear soluciones innovadoras y contribuir al avance tecnológico en cualquier empresa.
          </p>
        </div>

        <div className="md:col-span-2 bg-gray-800 mx-4 md:mx-8 rounded-lg shadow-lg p-6">
          <h2 className='text-white text-center text-3xl md:text-4xl font-bold mb-6'>Roles</h2>
          <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-6 text-center'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-gray-900 text-lg md:text-xl font-semibold mb-4'>Estudiante de Ing. En Sistemas</h3>
              <img src={sistemas} alt="imagenSistemas" className='w-40 h-40 mx-auto'/>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-gray-900 text-lg md:text-xl font-semibold mb-4'>Backend Developer</h3>
              <img src={backend} alt="imagenBackend" className='w-40 h-40 mx-auto'/>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-gray-900 text-lg md:text-xl font-semibold mb-4'>Frontend Developer</h3>
              <img src={frontend} alt="imagenFrontend" className='w-40 h-40 mx-auto'/>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-gray-800" style={{ clipPath: 'polygon(100% 19%, 100% 100%, 0 100%, 0 81%)'}}>
        </div>
      </div>
    </div>
  );
}

export default About;
