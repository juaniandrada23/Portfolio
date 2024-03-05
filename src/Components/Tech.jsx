import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import imagenCode from '../Images/imagenCode.jpg';
import { FaHtml5 } from "react-icons/fa";
import "../Styles/atropos.css";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import ReactImage from "../Images/atropos.png";

const Tech = () => {
  return (
    <div className='w-full h-screen bg-reno-100'>
      <ParallaxBanner
        layers={[
          { image: imagenCode, speed: 35 },
        ]}
        style={{
          height: '130px',
        }}
      >
        <div className="absolute inset-0 flex items-center md:justify-start xs:justify-center bg-opacity-65 bg-reno-700">
          <h1 className="text-4xl font-semibold text-reno-50 md:ml-5 ">Tecnologias</h1>
        </div>
      </ParallaxBanner>

      <div className='flex justify-center items-center h-2/3'>
        <div className='text-reno-50 grid md:grid-cols-7 xs:grid-cols-2 md:gap-8 xs:gap-10'>
          <div className='bg-reno-950 rounded-2xl p-4 text-center flex flex-col gap-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-reno-700 duration-300 hover:shadow-md shadow-reno-550 border-4 border-reno-400/90'>
            <FaHtml5 className='h-20 w-20 text-reno-100'/>
            <h1 className='font-bold text-lg uppercase'>HTML</h1>
          </div>
        </div>
        <div>
          <Atropos className="atropos bg-reno-400 rounded-3xl transition ease-in-out delay-100 duration-300 hover:scale-110" duration={200} shadowScale={0.3} shadowOffset={75} activeOffset={79} highlight={false}>
            <img data-atropos-opacity="0.5;1" data-atropos-offset="5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="LogoReact" className='p-6'/>
            <img data-atropos-offset="5" className="ReactImage" src={ReactImage} alt="ReactImage" />
          </Atropos>
        </div>
      </div>

    </div>
  );
};

export default Tech;
