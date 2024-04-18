import React, { useState } from 'react';
import '../../Styles/flipCard.css';
import { FaAws, FaHtml5, FaCss3Alt, FaGithub, FaReact, FaPython} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiPostman, SiTailwindcss, SiRender } from "react-icons/si";

const FlipCard = () => {

  const handleClick = (index) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  const techs = [
    {
      icon: <FaHtml5 className='w-auto h-auto'/>,
      h1: "Html",
      p1: "Nivel: Avanzado",
      p2: "Experiencia: Avanzado"
    },
    {
      icon: <FaCss3Alt className='w-auto h-auto'/>,
      h1: "Css",
      p1: "Nivel: Avanzado",
      p2: "Experiencia: Avanzado"
    },    
    {
      icon: <DiMysql className='w-auto h-auto'/>,
      h1: "Mysql",
      p1: "Nivel: Avanzado",
      p2: "Experiencia: Avanzado"
    },
    {
      icon: <FaGithub className='w-auto h-auto'/>,
      h1: "Github",
      p1: "Nivel: Intermedio",
      p2: "Experiencia: Intermedio"
    },
    {
      icon: <FaReact className='w-auto h-auto'/>,
      h1: "React",
      p1: "Nivel: Intermedio",
      p2: "Experiencia: Intermedio"
    },
    {
      icon: <SiPostman className='w-auto h-auto'/>,
      h1: "Postman",
      p1: "Nivel: Intermedio",
      p2: "Experiencia: Intermedio"
    },
    {
      icon: <SiTailwindcss className='w-auto h-auto'/>,
      h1: "Tailwind css",
      p1: "Nivel: Avanzado",
      p2: "Experiencia: Avanzado"
    },
    {
      icon: <FaPython className='w-auto h-auto'/>,
      h1: "Python",
      p1: "Nivel: Intermedio",
      p2: "Experiencia: Inicial"
    },
    {
      icon: <SiRender className='w-auto h-auto'/>,
      h1: "Render",
      p1: "Nivel: Intermedio",
      p2: "Experiencia: Intermedio"
    },
    {
      icon: <FaAws className='w-auto h-auto'/>,
      h1: "Amazon Web Services",
      p1: "Nivel: Inicial",
      p2: "Experiencia: Inicial"
  }
  ];

  const [isFlipped, setIsFlipped] = useState(Array(techs.length).fill(false));

  return (
    <>
      {techs.map((item, idx) => (
        <div className={`flip-card ${isFlipped[idx] ? 'is-flipped' : ''}`} key={idx} onClick={() => handleClick(idx)}>
          <div className="flip-card-inner hover:cursor-pointer">
            <div className="flip-card-front flex justify-center p-2 text-white hover:text-reno-700 hover:bg-reno-50 transition duration-500">
              {item.icon}
            </div>
            <div className="flip-card-back">
              <h1 className='uppercase font-bold'>{item.h1}</h1>
              <p>{item.p1}</p>
              <p>{item.p2}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FlipCard;
