import React from 'react';
import fondoCiudad from '../Images/compuCodigo.jpg';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ label, ...props }) => {
  return (
    <TextField
      label={label}
      variant="filled"
      sx={{
        '&.MuiTextField-root:hover .MuiInputLabel-filled': {
          color: '#d3d9ee', // Cambia el color del texto del label al pasar el ratón sobre el TextField
        },
        '& .MuiFilledInput-root': {
          backgroundColor: '#d3d9ee', // Color de fondo
          borderRadius: '8px', // Bordes redondeados
          transition: 'background-color 0.3s ease-in-out', // Transición suave del color de fondo
          '&:hover': {
            backgroundColor: '#2c406d', // Color de fondo al pasar el ratón
          },
          '&:hover .MuiFilledInput-input': {
            color: '#d3d9ee', // Color del texto del input al pasar el ratón
          },
        },
        '& .MuiInputLabel-filled': {
          color: '#4f73b5', // Color del texto de la etiqueta
          fontWeight: 'bold',
          transition: 'color 0.3s ease-in-out', // Transición suave del color del texto de la etiqueta
        },
        '& .MuiFilledInput-input': {
          color: '#1c2640', // Color del texto del input
        },
        '& .MuiFilledInput-underline:before': {
          borderBottomColor: 'transparent', // Ocultar línea de fondo
        },
        '& .MuiFilledInput-underline:after': {
          borderBottomColor: 'transparent', // Ocultar línea de fondo después de escribir
        },
        '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'transparent', // Ocultar línea de fondo al pasar el ratón
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
                <div id='formulario' className="relative z-20 flex items-center justify-center w-full h-full bg-cover bg-center bg-reno-700 bg-opacity-60" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fondoCiudad})` }}>
                    <form className="flex flex-col md:items-center justify-center w-full h-full my-7">
                      <div className='grid xs:grid-cols-1 gap-5 md:w-1/3 bg-reno-900/70 md:p-10 md:mx-0 xs:p-5 xs:mx-6 rounded-xl backdrop-blur-sm'> 
                          <CustomTextField label="Nombre" />
                          <CustomTextField label="Apellido" />
                          <CustomTextField label="Email" />
                          <CustomTextField label="Asunto" />
                          <CustomTextField label="Mensaje" multiline rows={4}/>
                          <div className='flex flex-row justify-center'>
                            <button type="submit" className="bg-reno-500 text-white font-bold px-4 py-2 rounded-lg transition duration-300 hover:bg-reno-600 border-reno-100 border-2">Confirmar</button>
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
