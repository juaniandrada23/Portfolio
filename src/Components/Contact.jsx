import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import fondoCiudad from "../Images/compuCodigo.jpg";
import { BsFillSendFill } from "react-icons/bs";
import "../Styles/inputs.css";
import { motion } from "framer-motion";
import useAnimateOnInView from "../Hooks/useAnimateOnInView";
import { variants4 } from "../Hooks/variants";

const Contact = () => {
  const { ref, controls } = useAnimateOnInView();
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio_juaniandrada23", "template_8iph545", form.current, {
        publicKey: "dGoFdoqto78odvrQ-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
            variants={variants4}
            className="flex flex-col md:items-center justify-center w-full h-full my-7"
          >
            <form ref={form} onSubmit={sendEmail}
              className="grid xs:grid-cols-1 md:w-2/3 lg:w-1/3 bg-reno-700/90 md:px-10 md:mx-0 xs:p-5 xs:mx-6 rounded-xl backdrop-blur-lg"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-reno-50">Nombre</h1>
                <input
                  type="text"
                  name="user_name" // Asegúrate de que el nombre coincide con el nombre en tu template de EmailJS
                  placeholder="Ingrese el nombre"
                  className="input-style"
                />
                <h1 className="text-reno-50">Apellido</h1>
                <input
                  type="text"
                  name="user_last_name" // Ajusta según tu template
                  placeholder="Ingrese el apellido"
                  className="input-style"
                />
                <h1 className="text-reno-50">Email</h1>
                <input
                  type="email"
                  name="user_email" // Ajusta según tu template
                  placeholder="juan@example.com"
                  className="input-style"
                />
                <h1 className="text-reno-50">Asunto</h1>
                <input
                  type="text"
                  name="subject" // Ajusta según tu template
                  placeholder="Ingrese el asunto"
                  className="input-style"
                />
                <h1 className="text-reno-50">Mensaje</h1>
                <textarea
                  name="message" // Ajusta según tu template
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
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
