import React from 'react'
import fondoCiudad from '../Images/cityFondo.jpg'

const Contact = () => {
  return (
    <div id='contact' className='w-full'>
        
        <div className='flex flex-col'>
            <div className='flex md:justify-start py-6 xs:justify-center bg-reno-900'>
                <span className='text-reno-50 text-4xl mt-4 md:ml-5 xs:my-2 font-semibold'>Contacto</span>
            </div>

            <div className='flex flex-col'>
                <img src={fondoCiudad} alt="FondoCiudad" style={{height:'90vh'}} className='md:object-cover xs:object-cover relative blur-sm'/>
            </div>
        </div>
    </div>
  )
}

export default Contact