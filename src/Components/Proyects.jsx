import React from 'react'

const Proyects = () => {
  return (
    <div id='proyects' className='h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
        <div className='w-full h-full flex flex-col'>
            <div className='flex md:justify-start py-6 xs:justify-center xs:items-center bg-gradient-to-l from-reno-950 to-gray-800 h-32'>
                <span className='text-4xl mt-4 md:ml-5 xs:my-2 font-semibold text-reno-50'>Proyectos</span>
            </div>
            <div className='w-full h-full grid md:grid-cols-4 xs:grid-cols-1'>
              <div className='bg-reno-50 h-full flex justify-center items-center'>
                <h1 className='text-reno-900'>Columna 1</h1>
              </div>
              <div className='bg-reno-100 h-full flex justify-center items-center'>
                <h1 className='text-reno-900'>Columna 2</h1>
              </div>
              <div className='bg-reno-200 h-full flex justify-center items-center'>
                <h1 className='text-reno-900'>Columna 3</h1>
              </div>
              <div className='bg-reno-300 h-full flex justify-center items-center'>
                <h1 className='text-reno-900'>Columna 4</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Proyects