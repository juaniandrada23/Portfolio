import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import logoJuani from '../Images/LogoJuani.png'
import { Link } from 'react-scroll';

const Footer = () => {
    const footerNavs = [
        {
            to: 'about',
            offset: -70,
            href: 'Acerca de section',
            name: 'Acerca de'
        },
        {
            to: 'tech',
            offset: -70,
            href: 'Tech section',
            name: 'Tecnologias'
        },
        {
            to: 'xp',
            offset: -70,
            href: 'Xp section',
            name: 'Expeciencia'
        },
        {
            to: 'about',
            offset: -70,
            href: 'Proyectos section',
            name: 'Proyectos'
        },

        {
            to: 'contact',
            offset: -70,
            href: 'Contact section',
            name: 'Contacto'
        }
    ]
  
    const icons = [
        {
            href: '',
            icon: <FaInstagram className='w-6 h-6'/>
        },
        {
            href: '',
            icon: <FaFacebook className='w-6 h-6'/>
        },
        {
            href: '',
            icon: <FaLinkedin className='w-6 h-6'/>
        },
        {
            href: '',
            icon: <FaGithub className='w-6 h-6'/>
        }
    ]

    var today = new Date();
    var year = today.getFullYear();

  return (
      <>
        <footer className="text-reno-50 bg-reno-950 px-4 py-5 mx-auto md:px-8">
            <div className="max-w-lg xs:mx-auto xs:text-justify xs:px-8">
                <img alt='logoJuani' src={logoJuani} className="w-20 xs:mx-auto bg-white pl-2 rounded-xl" />
                <p className="leading-relaxed mt-2 text-[15px] xs:mt-4">
                ¡Muchas gracias por revisar mi portfolio! Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto conmigo.
                </p>
            </div>
            <ul className="items-center md:justify-center md:flex-row md:space-x-10 font-semibold xs:justify-between xs:flex-col xs:gap-2 mt-8 space-y-5 xs:flex xs:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <Link key={idx} to={item.to} smooth={true} duration={500} offset={item.offset} className='group transition-all duration-300 ease-in-out'>
                            <li className="hover:text-reno-400 transition duration-300">
                                <button href={item.href}>
                                    { item.name }
                                </button>
                            </li>
                        </Link>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between xs:flex font-black">
                <div className="mt-4 xs:mt-0">
                    &copy; {year} Juan Ignacio Andrada Cabo.
                </div>
                <div className="mt-6 xs:mt-0">
                    <ul className="flex items-center space-x-4">
                        {
                            icons.map((item, idx) => (
                                <li key={idx} className="w-10 h-10 border rounded-full flex items-center justify-center hover:text-reno-600 hover:bg-blue-100 transition duration-500">
                                    <a href={item.href}> 
                                        { item.icon }
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </footer>  
      </>
  )
}

export default Footer