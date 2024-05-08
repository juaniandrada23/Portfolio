import React from "react";
import imagenAppFolledo from "../Images/imagenAppFolledo.JPG";

const ProjectCard = ({ title, img }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center 10%",
  };

  return (
    <div
      style={cardStyle}
      className="bg-reno-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 relative overflow-hidden"
    >
      <div className="p-6 bg-reno-700">
        <div className="rounded-lg">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-reno-50">Descripción breve del proyecto.</p>
        </div>
      </div>
      <div className="text-reno-50 mx-4 my-4">
        <span>
          Bueno aca vamos a poner una breve funcionalidad y los botones
        </span>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="proyect"
      className="min-h-screen bg-reno-900 flex flex-col text-reno-950"
    >
      <div className="flex md:justify-start py-6 xs:justify-center xs:items-center bg-gradient-to-l from-reno-950 to-reno-800 h-32">
        <span className="text-4xl mt-4 md:ml-5 xs:my-2 font-semibold text-white">
          Proyectos
        </span>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        <ProjectCard title="Proyecto 1" img={imagenAppFolledo} />
        <ProjectCard title="Proyecto 2" />
        <ProjectCard title="Proyecto 3" />
        <ProjectCard title="Proyecto 4" />
      </div>
    </div>
  );
};

export default Projects;
