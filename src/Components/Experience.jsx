import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenExp from '../Images/imagenExp.jpg';
import { MdWork } from "react-icons/md";
import UTN from '../Images/utn.png'

const Experience = () => {
  return (
    <div className='w-full bg-reno-100'>
      <ParallaxBanner layers={[{ image: imagenExp, speed: 15}, ]} style={{height: '130px',}}>
        <div className="absolute inset-0 flex items-center md:justify-start xs:justify-center bg-opacity-65 bg-reno-800">
          <h1 className="text-4xl font-semibold text-reno-50 md:ml-5 ">Expeciencia</h1>
        </div>
      </ParallaxBanner>

      <div className='flex justify-center items-center flex-col bg-reno-200'>

        <div className='border-l-4 border-reno-500 m-4'>
            <img src={UTN} alt='logoUTN' className='bg-reno-50 rounded-r-lg w-12 h-12 border-y-4 border-r-4 border-reno-500'/>
            <div className='m-2 bg-reno-50 rounded-lg p-3'>
                <h1>Estudiante de la carrera de Ing. En Sistemas de Informacion</h1>
            </div>
            <MdWork className='bg-reno-50 rounded-r-lg w-12 h-12 border-y-4 border-r-4 border-reno-500'/>
            <div className='m-2 bg-reno-50 rounded-lg p-3'>
                <h1>Programador FullStack</h1>
            </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <h1>Ver que ponemos aca</h1>
      </div>
    </div>
  )
}

export default Experience