import { useState, useEffect } from "react";
import "../Styles/stylemodalCV.css";
import CV from '../Images/cv.png';
import { BsPersonBadgeFill } from "react-icons/bs";

export const Modal1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <section className="page modal-1-page">
      <div
        className={`modal-1-overlay ${isOpen ? "open" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-1-modal" onClick={(e) => e.stopPropagation()}>
          <header>
            <h2 className="font-bold">Curriculum</h2>
          </header>
          <div className="flex justify-center items-center flex-col contenedor gap-2">
            <div className="scrolldeimagen border-4 border-reno-500">
              <img src={CV} alt="Curriculum Juan Ignacio Andrada Cabo" className="img"/>
            </div>
            <button className="bg-reno-600 rounded-2xl p-3 text-center text-reno-50 font-semibold">Descargar CV</button>
          </div>
        </div>
      </div>
      <div className="text-reno-50 flex justify-center h-full py-2">
        <button className='text-center flex flex-row items-center gap-2 justify-center mt-3 p-2 rounded-xl bg-reno-50 text-reno-950 font-bold' type="button" onClick={toggleModal}>
          <h1 className='uppercase text-sm'>Curriculum</h1>
          <BsPersonBadgeFill className='text-2xl' />
        </button>
      </div>
    </section>
  );
};
