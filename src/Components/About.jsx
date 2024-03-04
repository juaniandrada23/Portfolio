import React from 'react'
import backend from '../Images/backendImage.png'
import frontend from '../Images/frontendImage.png'
import sistemas from '../Images/sistemasImage.png'

const About = () => {


  return (
    <>
    <div className='md:h-screen xs:h-1/2 bg-reno-100 relative'>

      <div className='flex md:justify-start xs:justify-center'> 
        <span className='text-reno-950 text-4xl mt-4 md:ml-5 xs:my-2 font-semibold'>Acerca de mi</span>
      </div>

      <div className='grid md:grid-cols-3 gap-4 xs:grid-cols-1 relative z-10 justify-center items-center md:mt-4'>
        <div className="bg-reno-600 mx-4 rounded-3xl shadow-md shadow-reno-300">
          <h1 className='text-reno-100 mx-8 my-4 text-justify text-lg'>
            <span className='px-6'>
              Bienvenidos, soy Juan Ignacio, estudiante de último año de Ingeniería en Sistemas en la UTN FRC. Con experiencia personal en programación y desarrollo de software, busco emplear mis habilidades en soluciones innovadoras aplicadas en el entorno laboral. He participado en proyectos personales y realizado cursos autodidactas por mi cuenta. 
            </span>
            <br />
            <span className='px-6'>
              Mi objetivo es contribuir al avance tecnológico de cualquier empresa y seguir aprendiendo en el campo laboral.
            </span>
          </h1>
        </div>

        <div className="md:col-span-2 bg-reno-600 mx-4 rounded-3xl relative z-10 shadow-md shadow-reno-300 xs:mb-10">
          <h1 className='text-center text-reno-100 pt-2 text-3xl font-semibold'>Roles</h1>
          <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-4 xs:mx-2 xs:pb-3 xs:pt-1 text-center'>
            <div className='bg-white md:ml-2 rounded-lg xs:mx-12 md:mx-0 flex items-center flex-col'>
              <h1 className='xs:text-xl pt-2'>Estudiante de Ing. En Sistemas</h1>
              <div>
                <img src={sistemas} alt="imagenSistemas" className='xs:w-36 xs:h-36'/>
              </div>
            </div>
            <div className='bg-white rounded-lg xs:mx-12 md:mx-0 flex items-center flex-col'>
              <h1 className='xs:text-xl pt-2'>Backend Developer</h1>
              <div>
                <img src={backend} alt="imagenBackend" className='xs:w-36 xs:h-36'/>
              </div>
            </div>
            <div className='bg-white md:mr-2 rounded-lg xs:mx-12 md:mx-0  flex items-center flex-col'>
              <h1 className='xs:text-xl pt-2'>Frontend Developer</h1>
              <div>
                <img src={frontend} alt="imagenFrontend" className='xs:w-36 xs:h-36'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full z-0">
        <div className="absolute bottom-0 left-0 w-full h-full" style={{ clipPath: 'polygon(100% 19%, 100% 100%, 0 100%, 0 81%)', backgroundColor: '#0b0d13'}}>
        </div>
      </div>
    </div>
    </>  
  )
}

export default About