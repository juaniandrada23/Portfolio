import React, { useState } from 'react';
import '../../Styles/flipCard.css';
import { FaAws, FaHtml5, FaCss3Alt  } from "react-icons/fa";

const FlipCard = () => {

  const handleClick = (index) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  const techs = [
    {
        icon: <FaAws className='w-auto h-auto'/>,
        h1: "Amazon Web Services",
        p1: "Nivel: Inicial",
        p2: "Experiencia: Inicial"
    },
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
    }
  ];

  const [isFlipped, setIsFlipped] = useState(Array(techs.length).fill(false));

  return (
    <>
      {techs.map((item, idx) => (
        <div className={`flip-card ${isFlipped[idx] ? 'is-flipped' : ''}`} key={idx} onClick={() => handleClick(idx)}>
          <div className="flip-card-inner hover:cursor-pointer">
            <div className="flip-card-front flex justify-center p-2 text-white">
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
