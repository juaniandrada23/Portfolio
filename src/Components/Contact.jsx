import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import fondoCiudad from "../Images/compuCodigo.jpg";
import { BsFillSendFill } from "react-icons/bs";
import "../Styles/inputs.css";
import { motion, AnimatePresence } from "framer-motion";
import useAnimateOnInView from "../Hooks/useAnimateOnInView";
import { variants4 } from "../Hooks/variants";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const { ref, controls } = useAnimateOnInView();
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar el alert
  const userID = process.env.REACT_APP_PUBLICID;
  const serviceID = process.env.REACT_APP_ID;
  const templateID = process.env.REACT_APP_TEMPLATEID;

  const alertVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };
  

  const fields = [
    { name: "user_name", placeholder: "Ingrese el nombre", label: "Nombre" },
    {
      name: "user_last_name",
      placeholder: "Ingrese el apellido",
      label: "Apellido",
    },
    {
      name: "user_email",
      placeholder: "juan@example.com",
      label: "Email",
      type: "email",
    },
    { name: "subject", placeholder: "Ingrese el asunto", label: "Asunto" },
    {
      name: "message",
      placeholder: "Ingrese el mensaje",
      label: "Mensaje",
      type: "textarea",
    },
  ];

  const handleSendEmail = (event) => {
    event.preventDefault();
    const formElements = formRef.current.elements;
    let newErrors = {};

    // Validar cada campo
    fields.forEach((field) => {
      if (!formElements[field.name].value.trim()) {
        newErrors[field.name] = `${field.label} debe ser completado.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Limpiar errores si todo está bien
    setLoading(true); // Iniciar loading
    emailjs.sendForm(serviceID, templateID, formRef.current, userID).then(
      () => {
        console.log("Mensaje enviado con éxito!");
        formRef.current.reset();
        setLoading(false); // Terminar loading
        setShowAlert(true); // Mostrar alert

        // Ocultar alert después de 3 segundos
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      },
      (error) => {
        console.error("FAILED...", error.text);
        setLoading(false); // Terminar loading
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
            <form
              ref={formRef}
              onSubmit={handleSendEmail}
              className="grid xs:grid-cols-1 md:w-2/3 lg:w-1/3 gap-4 bg-reno-700/90 md:px-10 md:mx-0 xs:p-5 xs:mx-6 rounded-xl backdrop-blur-lg"
            >
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <h1 className="text-reno-50">{field.label}</h1>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      className="input-style input-textarea"
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="input-style"
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm my-2">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 items-center justify-center">
                <button
                  type="submit"
                  className="bg-white text-reno-900 font-bold px-2 py-2 rounded-lg transition duration-500 hover:bg-reno-500 hover:text-white flex flex-row justify-center items-center gap-2"
                  disabled={loading}
                >
                  <div>
                    {loading ? (
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <h1>Enviando</h1>
                        <CircularProgress size={24} />
                      </div>
                    ) : (
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <h1>Enviar</h1>
                        <BsFillSendFill />
                      </div>
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {showAlert && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={alertVariants}
                    >
                      <Alert severity="success" className="mt-2">
                        ¡Mensaje enviado con éxito!
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
