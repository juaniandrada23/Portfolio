import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Slide } from '@mui/material';
import { FiEye, FiX, FiDownload } from 'react-icons/fi';
import imagenCV from '../../Images/cv.png';
import '../../Styles/modal.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={{ appear: 0, enter: 1500, exit: 1500 }} />;
});

const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    const input = document.getElementById('cv-image');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save('CV_JuanIgnacioAndradaCabo.pdf');
      });
  };

  return (
    <>
      <button className='bg-reno-400 p-2 my-4 rounded-xl font-semibold text-white transition-transform transform hover:scale-105 hover:bg-reno-500 flex items-center' onClick={handleClickOpen}>
        <FiEye className="mr-2" />
        Ver Currículum
      </button>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <div className="text-reno-50 bg-reno-500 font-semibold py-4 pl-4 text-lg">{"Currículum Vitae"}</div>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img id="cv-image" src={imagenCV} alt="Currículum" className="w-full h-auto rounded-lg shadow-2xl shadow-black" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className='bg-reno-500 p-2 mt-1 rounded-xl text-white transition-transform transform hover:scale-105 hover:bg-reno-700 flex items-center' onClick={handleDownload}>
            <FiDownload className="mr-2" />
            Descargar
          </button>
          <button className='bg-reno-500 p-2 mt-1 rounded-xl text-white transition-transform transform hover:scale-105 hover:bg-reno-700 flex items-center' onClick={handleClose}>
            <FiX className="mr-2" />
            Cerrar
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
