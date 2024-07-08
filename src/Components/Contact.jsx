import React from "react";
import fondoCiudad from "../Images/compuCodigo.jpg";
import { BsFillSendFill } from "react-icons/bs";
import "../Styles/inputs.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <div id="contact" className="w-full relative">
      <div className="flex flex-col">
        <div className="flex md:justify-start py-6 xs:justify-center xs:items-center bg-gradient-to-l from-reno-950 to-reno-800 h-32">
          <span className="text-4xl mt-4 md:ml-5 xs:my-2 font-semibold text-white">
            Contacto
          </span>
        </div>
        <div
          id="formulario"
          className="relative z-20 flex items-center justify-center w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(28, 38, 64, 0.7), rgba(11, 13, 19, 1)), url(${fondoCiudad})`,
          }}
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="flex flex-col md:items-center justify-center w-full h-full my-7"
          >
            <div className="grid xs:grid-cols-1 md:w-2/3 lg:w-1/3 bg-reno-700/90 md:px-10 md:mx-0 xs:p-5 xs:mx-6 rounded-xl backdrop-blur-lg">
              <div className="flex flex-col gap-2">
                <h1 className="text-reno-50">Nombre</h1>
                <input
                  type="text"
                  placeholder="Ingrese el nombre"
                  className="input-style"
                />
                <h1 className="text-reno-50">Apellido</h1>
                <input
                  type="text"
                  placeholder="Ingrese el apellido"
                  className="input-style"
                />
                <h1 className="text-reno-50">Email</h1>
                <input
                  type="email"
                  placeholder="juan@example.com"
                  className="input-style"
                />
                <h1 className="text-reno-50">Asunto</h1>
                <input
                  type="text"
                  placeholder="Ingrese el asunto"
                  className="input-style"
                />
                <h1 className="text-reno-50">Mensaje</h1>
                <textarea
                  placeholder="Ingrese el mensaje"
                  className="input-style input-textarea"
                />
              </div>
              <div className="flex flex-row justify-center">
                <button
                  type="submit"
                  className="bg-white text-reno-900 font-bold px-2 py-2 rounded-lg transition duration-500 hover:bg-reno-500 hover:text-white flex flex-row justify-center items-center gap-2"
                >
                  <h1>Enviar</h1>
                  <BsFillSendFill />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
