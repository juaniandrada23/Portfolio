import React from 'react'
import "../../Styles/atropos.css";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import HtmlImage from "../../Images/html.png";
import CssImage from "../../Images/css.png";
import { FaHtml5, FaCss3  } from "react-icons/fa";


const TechAtropos = () => {
  const techs = [
    {
        icon: <FaHtml5 className='w-full h-full p-4 text-white'/>,
        scrLetter: HtmlImage,
        altLetter: 'HtmlImage',
        className: 'HtmlImage'
    },
    {
        icon: <FaCss3 className='w-full h-full p-4 text-white'/>,
        scrLetter: CssImage,
        altLetter: 'CssImage',
        className: 'CssImage'
    },
  ]

  return (
    <>
        {
            techs.map((item, idx) => (
            <Atropos key={idx} className="atropos bg-reno-900 rounded-3xl transition ease-in-out delay-100 duration-300" duration={200} shadowScale={0.3} shadowOffset={75} activeOffset={79} highlight={false}>
                {item.icon}
                <img data-atropos-offset="5" className={item.className} src={item.scrLetter} alt={item.altLetter} />
            </Atropos>
            ))
        }


    </>
  )
}

export default TechAtropos