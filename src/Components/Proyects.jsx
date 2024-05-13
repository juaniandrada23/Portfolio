import React from "react";
import Card from '@mui/material/Card';
import { MdOutlineWeb } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import imagenAppFolledo from "../Images/imagenAppFolledo.JPG";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Gestión de Balances",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat blanditiis omnis voluptates voluptatibus quibusdam error beatae exercitationem. Minus corporis exercitationem repellendus nulla delectus? Soluta error alias maiores commodi libero?",
      imageUrl: imagenAppFolledo,
      webLink: "URL del proyecto",
      githubLink: "URL del repositorio en GitHub"
    },
    {
      id: 2,
      title: "Simulación Montecarlo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat blanditiis omnis voluptates voluptatibus quibusdam error beatae exercitationem. Minus corporis exercitationem repellendus nulla delectus? Soluta error alias maiores commodi libero?",
      imageUrl: imagenAppFolledo,
      webLink: "URL del proyecto",
      githubLink: "URL del repositorio en GitHub"
    },
    {
      id: 3,
      title: "Variables aleatorias",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat blanditiis omnis voluptates voluptatibus quibusdam error beatae exercitationem. Minus corporis exercitationem repellendus nulla delectus? Soluta error alias maiores commodi libero?",
      imageUrl: imagenAppFolledo,
      webLink: "URL del proyecto",
      githubLink: "URL del repositorio en GitHub"
    },
    {
      id: 4,
      title: "Landing Page",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat blanditiis omnis voluptates voluptatibus quibusdam error beatae exercitationem. Minus corporis exercitationem repellendus nulla delectus? Soluta error alias maiores commodi libero?",
      imageUrl: imagenAppFolledo,
      webLink: "URL del proyecto",
      githubLink: "URL del repositorio en GitHub"
    },
  ];

  return (
    <div id="proyect" className="bg-reno-900 flex flex-col text-reno-950">
      <div className="flex md:justify-start py-6 xs:justify-center xs:items-center bg-gradient-to-l from-reno-950 to-reno-800 h-32">
        <span className="text-4xl mt-4 md:ml-5 xs:my-2 font-semibold text-white">
          Proyectos
        </span>
      </div>

      <div className="md:my-16 xs:my-10 xs:mx-2 md:mx-0 flex justify-center items-center gap-10 md:flex-row xs:flex-col">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map(project => (
            <Card key={project.id} sx={{ maxWidth: 385, boxShadow: '0px 5px 20px black' }} className="m-2">
              <CardActionArea>
                <CardMedia component="img" height="140" image={project.imageUrl} alt="Image proyect" />
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
                <a href={project.webLink} target="_blank" rel="noopener noreferrer" className="bg-reno-800 hover:bg-reno-50 hover:text-reno-900 transition duration-700 text-white font-normal p-2 ml-2 my-2 rounded-3xl">
                  <MdOutlineWeb className="w-6 h-6" />
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-reno-800 hover:bg-reno-50 hover:text-reno-900 transition duration-700 text-white font-normal p-2 ml-2 my-2 rounded-3xl">
                  <FaGithubAlt className="w-6 h-6" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
