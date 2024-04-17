import React from 'react'
import "../../Styles/atropos.css";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import HtmlImage from "../../Images/html.png";
import CssImage from "../../Images/css.png";
import JsImage from "../../Images/js.png";
import ReactImage from "../../Images/atropos.png";
import MYSQLImage from "../../Images/mysql.png";
import GITImage from "../../Images/git.png";
import AwsImage from "../../Images/aws.png"
import { FaHtml5, FaCss3, FaReact, FaGithub, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";

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
    {
      icon: <IoLogoJavascript className='w-full h-full p-4 text-white'/>,
      scrLetter: JsImage,
      altLetter: 'JsImage',
      className: 'JsImage'
    },
    {
      icon: <FaReact className='w-full h-full p-4 text-white'/>,
      scrLetter: ReactImage,
      altLetter: 'ReactImage',
      className: 'ReactImage'
    },
    {
      icon: <GrMysql className='w-full h-full p-4 text-white'/>,
      scrLetter: MYSQLImage,
      altLetter: 'MYSQLImage',
      className: 'MYSQLImage'
    },
    {
      icon: <FaGithub className='w-full h-full p-4 text-white'/>,
      scrLetter: GITImage,
      altLetter: 'GITImage',
      className: 'GITImage'
    },
    {
      icon: <FaAws className='w-full h-full p-4 text-white'/>,
      scrLetter: AwsImage,
      altLetter: 'AwsImage',
      className: 'AwsImage'
    },
  ]

  return (
    <>
        {
            techs.map((item, idx) => (
            <Atropos key={idx} className="atropos bg-reno-800 hover:bg-reno-700 rounded-3xl transition ease-in-out delay-100 duration-300" duration={200} shadowScale={0.3} shadowOffset={75} activeOffset={79} highlight={false}>
                {item.icon}
                <img data-atropos-offset="5" className={item.className} src={item.scrLetter} alt={item.altLetter} />
            </Atropos>
            ))
        }
    </>
  )
}

export default TechAtropos