import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';
import '../../Styles/flipCard.css';
import { FaAws, FaHtml5, FaCss3Alt, FaGithub, FaReact, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiPostman, SiTailwindcss, SiRender } from "react-icons/si";

const techs = [
  {
    icon: <FaHtml5 className='w-auto h-auto' />,
    h1: "Html",
    nivel: 5,
    experiencia: 80
  },
  {
    icon: <FaCss3Alt className='w-auto h-auto' />,
    h1: "Css",
    nivel: 5,
    experiencia: 80
  },
  {
    icon: <DiMysql className='w-auto h-auto' />,
    h1: "Mysql",
    nivel: 5,
    experiencia: 80
  },
  {
    icon: <FaGithub className='w-auto h-auto' />,
    h1: "Github",
    nivel: 3,
    experiencia: 60
  },
  {
    icon: <FaReact className='w-auto h-auto' />,
    h1: "React",
    nivel: 3,
    experiencia: 60
  },
  {
    icon: <SiPostman className='w-auto h-auto' />,
    h1: "Postman",
    nivel: 3,
    experiencia: 60
  },
  {
    icon: <SiTailwindcss className='w-auto h-auto' />,
    h1: "Tailwind css",
    nivel: 5,
    experiencia: 80
  },
  {
    icon: <FaPython className='w-auto h-auto' />,
    h1: "Python",
    nivel: 3,
    experiencia: 40
  },
  {
    icon: <SiRender className='w-auto h-auto' />,
    h1: "Render",
    nivel: 3,
    experiencia: 60
  },
  {
    icon: <FaAws className='w-auto h-auto' />,
    h1: "AWS",
    nivel: 2,
    experiencia: 20
  }
];

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(Array(techs.length).fill(false));

  const handleClick = (index) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  return (
    <>
      {techs.map((item, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className={`flip-card ${isFlipped[idx] ? 'is-flipped' : ''}`}
          onClick={() => handleClick(idx)}
        >
          <div className="flip-card-inner hover:cursor-pointer">
            <div className="flip-card-front flex justify-center p-2 text-white hover:text-reno-700 hover:bg-reno-50 transition duration-500">
              {item.icon}
            </div>
            <div className="flip-card-back p-4">
              <h1 className='uppercase font-bold text-center'>{item.h1}</h1>
              <div className='mt-3'>
                <h1 className='text-white font-semibold'>
                  Nivel
                </h1>
                <Rating name="read-only" value={item.nivel} readOnly />
              </div>
              <div sx={{ mt: 2 }}>
                <h1 className='text-white font-semibold'>
                  Experiencia
                </h1>
                <LinearProgress variant="determinate" value={item.experiencia} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default FlipCard;
