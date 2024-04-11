import React from 'react';
import fondoCiudad from '../Images/compuCodigo.jpg';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ label, ...props }) => {
  return (
    <TextField
      label={label}
      variant="standard"
      sx={{
        "& .MuiInput-root": {
          color: "#d3d9ee",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Bottom border
          "&:before": {
            borderColor: "#d3d9ee",
          },
          "&:after": {
            borderColor: "#d3d9ee",
          },
          ":hover:not(.Mui-focused)": {
            "&:before": {
              borderColor: "#4f73b5",
            },
          },
        },
        // Label
        "& .MuiInputLabel-standard": {
          color: "#d3d9ee",
          fontWeight: "bold",
        },
      }}
      {...props}
    />
  );
};


const Contact = () => {
  return (
    <div id='contact' className='w-full relative'>

        <div className='flex flex-col'>
            <div className='flex md:justify-start py-6 xs:justify-center bg-reno-900'>
                <span className='text-reno-50 text-4xl mt-4 md:ml-5 xs:my-2 font-semibold'>Contacto</span>
            </div>

            <div className='flex flex-col relative'>
                <div className="absolute inset-0 bg-reno-700 opacity-60 z-10"></div>
                <img src={fondoCiudad} alt="FondoCiudad" style={{height:'90vh'}} className='md:object-cover xs:object-cover xs:object-right md:object-center relative z-0'/>
                
                <div className="absolute z-20 inset-0">
                    <form className="flex flex-col md:items-center justify-center w-full h-full">
                      <div className='grid md:grid-cols-12 xs:grid-cols-1 gap-4 bg-reno-900/70 md:p-10 md:mx-0 xs:p-5 xs:mx-10 rounded-xl backdrop-blur-sm'> 
                        <div className='flex flex-col md:col-span-4 gap-3'>
                          <CustomTextField label="Nombre" />
                          <CustomTextField label="Apellido" />
                        </div>
                        <div className='flex flex-col md:col-span-8'> 
                          <input type="email" placeholder="Email" className="bg-white border-2 border-gray-300 rounded-lg mb-4 px-4 py-2" />
                          <textarea placeholder="Mensaje" className="bg-white border-2 border-gray-300 rounded-lg mb-4 px-4 py-2 resize-none h-32"></textarea>
                          <div className='flex flex-row justify-center'>
                            <button type="submit" className="bg-blue-500 text-white font-semibold px-8 py-2 rounded-lg transition duration-300 hover:bg-blue-600 md:w-1/3">Confirmar</button>
                          </div>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
