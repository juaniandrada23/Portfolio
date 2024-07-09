import React from "react";
import backend from "../Images/backendImage.png";
import frontend from "../Images/frontendImage.png";
import sistemas from "../Images/sistemasImage.png";
import Modal from "./Techs/Modal";
import { motion } from "framer-motion";
import useAnimateOnInView from "../Hooks/useAnimateOnInView";
import { variants, variants2 } from "../Hooks/variants";

const roles = [
  {
    title: "Estudiante de Ing. En Sistemas",
    img: sistemas,
    alt: "imagenSistemas",
  },
  {
    title: "Backend Developer",
    img: backend,
    alt: "imagenBackend",
  },
  {
    title: "Frontend Developer",
    img: frontend,
    alt: "imagenFrontend",
  },
];

const About = () => {
  const { ref, controls } = useAnimateOnInView();

  return (
    <div id="about" className="md:min-h-screen xs:min-h-0 bg-reno-700 relative">
      <div className="flex md:justify-start xs:justify-center items-center h-32 bg-gradient-to-l from-reno-950 to-reno-800">
        <span className="text-4xl mt-4 md:ml-5 xs:my-2 font-semibold text-white">
          Acerca de mi
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 gap-8 relative z-10 justify-center items-center xs:mt-6 md:mt-4 lg:mt-0">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex justify-center items-center flex-col bg-reno-600 rounded-lg shadow-lg md:col-span-2 lg:col-span-3 lg:mx-80 lg:mt-10 md:mx-44 md:mt-4 xs:mx-4 p-9"
        >
          <h2 className="text-white text-lg md:text-xl font-semibold mb-4">
            ¡Hola! Soy Juan Ignacio.
          </h2>
          <p className="text-reno-50 text-base md:text-lg leading-relaxed text-justify">
            Bienvenidos a mi espacio. Soy un apasionado estudiante de Ingeniería
            en Sistemas con una sólida experiencia en programación y desarrollo
            de software. Mi objetivo es aplicar mis habilidades para crear
            soluciones innovadoras y contribuir al avance tecnológico en
            cualquier empresa.
          </p>
          <Modal />
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants2}
          className="md:col-span-2 lg:col-span-3 bg-reno-600 mx-4 md:mx-8 rounded-lg shadow-lg p-6 xs:mb-10 md:mb-10 lg:mb-10 lg:mx-64"
        >
          <h2 className="text-white text-center text-3xl md:text-2xl hover:underline hover:underline-offset-4 font-bold mb-6">
            Roles
          </h2>
          <div className="flex justify-center flex-wrap gap-6 text-center">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md xl:w-1/3 md:w-3/5 xs:w-3/4 p-2"
              >
                <h3 className="text-reno-900 text-lg md:text-xl font-semibold mb-4">
                  {role.title}
                </h3>
                <img
                  src={role.img}
                  alt={role.alt}
                  className="w-40 h-40 mx-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full z-0">
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-reno-900 to-reno-800"
          style={{ clipPath: "polygon(100% 19%, 100% 100%, 0 100%, 0 81%)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
