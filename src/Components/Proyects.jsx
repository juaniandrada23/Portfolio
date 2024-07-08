import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { MdOutlineWeb } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Styles/projects.css";

const projectsData = [
  {
    id: 1,
    title: "Gestión de Balances",
    description:
      "Simplifica el seguimiento de gastos e ingresos con proveedores...",
    imageUrl: require("../Images/imagenAppFolledo.JPG"),
    webLink: "URL del proyecto",
    githubLink: "https://github.com/juaniandrada23/proyectogestionfolledo",
  },
  {
    id: 2,
    title: "Simulación Montecarlo",
    description: "Trabajo realizado sobre el método de Montecarlo...",
    imageUrl: require("../Images/tpmontecarlosim.png"),
    webLink: "URL del proyecto",
    githubLink: "https://github.com/juaniandrada23/tp2simulacion",
  },
  {
    id: 3,
    title: "Variables aleatorias",
    description:
      "Trabajo realizado sobre la generación de variables aleatorias...",
    imageUrl: require("../Images/tp2sim.png"),
    webLink: "URL del proyecto",
    githubLink: "https://github.com/juaniandrada23/tp3simulacion",
  },
  {
    id: 4,
    title: "Landing Page",
    description: "Página estática para una empresa familiar...",
    imageUrl: require("../Images/imagenAppFolledo.JPG"),
    webLink: "URL del proyecto",
    githubLink: "URL del repositorio en GitHub",
  },
];

const Projects = () => (
  <div id="proyect" className="bg-reno-900 flex flex-col text-reno-950">
    <div className="flex md:justify-start py-6 xs:justify-center xs:items-center bg-gradient-to-l from-reno-950 to-reno-800 h-32">
      <span className="text-4xl mt-4 md:ml-5 xs:my-2 font-semibold text-white">
        Proyectos
      </span>
    </div>

    <div className="md:my-16 xs:my-10 xs:mx-2 md:mx-0 flex justify-center items-center gap-10 md:flex-row xs:flex-col">
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Card
              sx={{
                maxWidth: 385,
                boxShadow: "0px 5px 20px black",
                backgroundColor: "#2c406d",
              }}
              className="m-2 flex flex-col justify-between"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  className="h-56 imagencarta"
                  image={project.imageUrl}
                  alt="Image proyect"
                />
                <div className="flex justify-center flex-col bg-reno-600">
                  <div className="mt-3 mb-1 ml-4 mr-4">
                    <h1 className="text-white font-bold text-2xl">
                      {project.title}
                    </h1>
                    <h1 className="text-reno-50 font-normal text-base text-justify">
                      {project.description}
                    </h1>
                  </div>
                </div>
              </CardActionArea>
              <div className="flex justify-start items-center bg-reno-600">
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-reno-800 hover:bg-reno-50 hover:text-reno-900 transition duration-700 text-white font-normal p-2 ml-2 my-2 rounded-3xl"
                >
                  <MdOutlineWeb className="w-6 h-6" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-reno-800 hover:bg-reno-50 hover:text-reno-900 transition duration-700 text-white font-normal p-2 ml-2 my-2 rounded-3xl"
                >
                  <FaGithubAlt className="w-6 h-6" />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
