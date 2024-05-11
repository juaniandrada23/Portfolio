import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import imagenExp from "../Images/imagenExp.jpg";
import { TbCertificate } from "react-icons/tb";
import UTN from "../Images/utn.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import blockchain from "../Images/experience/blockchain.jpg";
import fullstack from "../Images/experience/fullstack.jpg";
import javascript from "../Images/experience/javascript.jpg";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [titleMessage, setTitleMessage] = useState("");
  const [imageMessage, setImageMessage] = useState("");

  const experiences = [
    {
      logo: UTN,
      date: "2019-ACT",
      description:
        "Estudiante de la carrera de Ing. En Sistemas de Informacion",
      message: "Mensaje para la experiencia 1",
      image: "",
    },
    {
      logo: UTN,
      date: "2020-2021",
      description: "Curso introductorio de Javascript",
      message: "Mensaje para la experiencia 2",
      image: javascript,
    },
    {
      logo: UTN,
      date: "2021",
      description: "Curso introductorio de Blockchain",
      message: "Mensaje para la experiencia 3",
      image: blockchain,
    },
    {
      logo: UTN,
      date: "2021-2022",
      description: "Programador FullStack",
      message: "Mensaje para la experiencia 4",
      image: fullstack,
    },
  ];

  const handleButtonClick = (message, description, image) => {
    setDialogMessage(message);
    setTitleMessage(description);
    setImageMessage(image);
    setModalOpen(true);
  };

  return (
    <div id="xp" className="w-full">
      <ParallaxBanner
        layers={[{ image: imagenExp, speed: 15 }]}
        style={{ height: "130px" }}
      >
        <div className="absolute inset-0 flex items-center md:justify-start xs:justify-center bg-opacity-65 bg-reno-800">
          <h1 className="text-4xl font-semibold text-white md:ml-5 ">
            Experiencia
          </h1>
        </div>
      </ParallaxBanner>

      <div className="flex justify-center items-center flex-col bg-gradient-to-t from-reno-900 to-reno-800">
        <div className="bg-reno-600 p-4 m-5 rounded-r-3xl rounded-es-3xl shadow-md shadow-black">
          <div className="border-l-4 border-reno-400 m-4">
            {experiences.map((experience, index) => (
              <div key={index}>
                <div className="flex flex-row justify-between">
                  <img
                    src={experience.logo}
                    alt="logoUTN"
                    className="bg-white rounded-r-lg w-14 h-14 border-y-4 border-r-4 border-reno-400"
                  />
                  <div className="bg-white text-reno-950 font-extrabold text-center flex items-center rounded-xl p-2">
                    <h1>{experience.date}</h1>
                  </div>
                </div>
                <div className="ml-2 my-3 bg-white rounded-lg p-3">
                  <h1>{experience.description}</h1>
                  <div className="flex justify-end mt-2">
                    <button
                      className={`bg-reno-800 p-1 px-2 rounded-xl text-reno-50 hover:bg-reno-300 hover:text-reno-950 transition duration-500 ${
                        index === 0 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={() =>
                        handleButtonClick(
                          experience.message,
                          experience.description,
                          experience.image
                        )
                      }
                      disabled={index === 0}
                    >
                      <TbCertificate className="text-3xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="bg-reno-500 text-white text-center p-4 text-lg font-bold">
          {titleMessage}
        </div>
        <DialogContent>
          <h1>{dialogMessage}</h1>
          <img src={imageMessage} alt="Imagen del certificado" />
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setModalOpen(false)}
            className="bg-reno-500 hover:bg-reno-700 text-white p-2 text-lg rounded-2xl transition-colors duration-700"
          >
            Atrás
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Experience;
