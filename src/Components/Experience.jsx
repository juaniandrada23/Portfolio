import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenExp from '../Images/imagenExp.jpg';
import { FcDiploma1 } from "react-icons/fc";
import UTN from '../Images/utn.png'

const Experience = () => {
  return (
    <div id='xp' className='w-full bg-reno-100'>
      <ParallaxBanner layers={[{ image: imagenExp, speed: 15}, ]} style={{height: '130px',}}>
        <div className="absolute inset-0 flex items-center md:justify-start xs:justify-center bg-opacity-65 bg-reno-800">
          <h1 className="text-4xl font-semibold text-reno-50 md:ml-5 ">Expeciencia</h1>
        </div>
      </ParallaxBanner>

      <div className='flex justify-center items-center flex-col bg-reno-200'>
        <div className='bg-reno-900 p-4 m-5 rounded-r-3xl rounded-es-3xl shadow-md shadow-black hover:shadow-2xl hover:shadow-black transition duration-200 delay-75 ease-in'>
          <div className='border-l-4 border-reno-400 m-4'>
              <div className='flex flex-row justify-between'>
                <img src={UTN} alt='logoUTN' className='bg-reno-50 rounded-r-lg w-14 h-14 border-y-4 border-r-4 border-reno-400'/>
                <div className='bg-reno-50 text-reno-950 font-extrabold text-center flex items-center rounded-xl p-2'>
                  <h1>2019-ACT</h1>
                </div>
              </div>
              <div className='ml-2 my-3 bg-reno-50 rounded-lg p-3'>
                  <h1>Estudiante de la carrera de Ing. En Sistemas de Informacion</h1>
                  <div className='flex justify-end mt-2'>
                    <button className='bg-reno-800 p-1 px-2 rounded-xl hover:bg-reno-800/70'><FcDiploma1 className='text-3xl'/></button>
                  </div>
              </div>
              <div className='flex flex-row justify-between'>
                <img src={UTN} alt='logoUTN' className='bg-reno-50 rounded-r-lg w-14 h-14 border-y-4 border-r-4 border-reno-400'/>
                <div className='bg-reno-50 text-reno-950 font-extrabold text-center flex items-center rounded-xl p-2'>
                  <h1>2021-2022</h1>
                </div>
              </div>            
              <div className='ml-2 my-3 bg-reno-50 rounded-lg p-3'>
                  <h1>Programador FullStack</h1>
                  <div className='flex justify-end mt-2'>
                    <button className='bg-reno-800 p-1 px-2 rounded-xl hover:bg-reno-800/70'><FcDiploma1 className='text-3xl'/></button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience