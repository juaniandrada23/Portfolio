import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Button
} from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import { useAnimation } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import { TiThMenu } from "react-icons/ti";
import logoJuani from '../Images/LogoJuani.png'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerOpenMax, setDrawerOpenMax] = React.useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    controls.start({ x: 0 });
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    controls.start({ x: '-100%' });
  };

  const controls = useAnimation();

  const handleDrawerOpenMax = () => {
    setDrawerOpenMax(true);
    controlsMax.start({ x: 0 });
  };

  const handleDrawerCloseMax = () => {
    setDrawerOpenMax(false);
    controlsMax.start({ x: '-100%' });
  };

  const controlsMax = useAnimation();

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#0b0d13'}}>
        <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
          <div className='bg-white rounded-full xs:my-4 md:my-3'>
            <img src={logoJuani} alt="Logo" className='md:w-8 md:h-8 xs:w-8 xs:h-8 m-2'/>
          </div>  

          <div>
            {isMobile && (
              <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            )}
          </div>

          {!isMobile && (
            <div>
              <button className='flex justify-center items-center bg-white p-2 rounded-full text-reno-900 hover:text-white hover:bg-reno-500 transition duration-500' onClick={handleDrawerOpenMax}>
                <TiThMenu className='h-6 w-6'/>
              </button>
                  <Drawer transitionDuration={1600} anchor="right" open={drawerOpenMax} onClose={handleDrawerCloseMax} PaperProps={{ sx: { width: '100%', backgroundColor: 'rgba(11, 13, 19, 0.95)'}}}>
                  <div className='text-reno-50 flex justify-center h-full'>
                  <List>
                    <div className='flex flex-row mb-4'>
                      <ListItem style={{ marginTop: '20px' }}>
                        <Link to="inicio" smooth={true} duration={500}>
                          <Button variant="h6" sx={{textTransform: 'uppercase' }} style={{borderRadius: '50px', backgroundColor: 'white', boxShadow: '0px 15px 15px -15px rgba(0, 0, 0, 1)' }} onClick={handleDrawerCloseMax}>
                            <HomeIcon sx={{ fontSize: '6vh' }} className='text-reno-900'/>
                          </Button>
                        </Link>
                      </ListItem>
                      <ListItem style={{ marginTop: '20px' }}>
                        <Button variant="h6" sx={{textTransform: 'uppercase' }} style={{borderRadius: '50px', backgroundColor: 'white', boxShadow: '0px 15px 15px -15px rgba(0, 0, 0, 1)' }} onClick={handleDrawerCloseMax}>
                          <CloseIcon sx={{ fontSize: '6vh' }} className='text-reno-900'/>
                        </Button>
                      </ListItem>
                    </div>
                    <div className='gap-8 border-l-4 border-reno-300 ml-2 flex justify-center flex-col'>
                    <ListItem className='mt-4'>
                      <Link to="about" smooth={true} duration={500} offset={-68} className='group transition-all duration-300 ease-in-out'>
                        <label onClick={handleDrawerCloseMax} className='text-3xl font-bold bg-left-bottom bg-gradient-to-r from-reno-200 to-reno-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] pb-2 transition-all duration-500 ease-out'>
                          ACERCA DE MI
                        </label>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="tech" smooth={true} duration={500} offset={-59} className='group transition-all duration-300 ease-in-out'>
                        <label onClick={handleDrawerCloseMax} className='text-3xl font-bold bg-left-bottom bg-gradient-to-r from-reno-200 to-reno-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] pb-2 transition-all duration-500 ease-out uppercase'>
                          tecnologías
                        </label>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="xp" smooth={true} duration={500} offset={-55} className='group transition-all duration-300 ease-in-out'>
                        <label onClick={handleDrawerCloseMax} className='text-3xl font-bold bg-left-bottom bg-gradient-to-r from-reno-200 to-reno-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] pb-2 transition-all duration-500 ease-out'>
                          EXPERIENCIA
                        </label>
                      </Link>
                    </ListItem>
                    <ListItem className='mb-4'>
                      <Link to="contact" smooth={true} duration={500} offset={-70} className='group transition-all duration-300 ease-in-out'>
                        <label onClick={handleDrawerCloseMax} className='text-3xl font-bold bg-left-bottom bg-gradient-to-r from-reno-200 to-reno-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] pb-2 transition-all duration-500 ease-out'>
                          CONTACTO
                        </label>
                      </Link>
                    </ListItem>
                    </div>
                  </List>
                </div>

              </Drawer>
            </div>    
          )}
          
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <List style={{ width: '100%', backgroundColor: '#0b0d13', color: 'white', height: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5px', marginBottom: '10px' }}>
            <ListItem style={{ marginTop: '-10px' }}>
              <Link to="inicio" smooth={true} duration={500}>
                <Button variant="h6" sx={{textTransform: 'uppercase' }} style={{borderRadius: '50px', backgroundColor: 'white', boxShadow: '0px 15px 15px -15px rgba(0, 0, 0, 1)' }} onClick={handleDrawerClose}>
                  <HomeIcon sx={{ fontSize: '3vh' }} className='text-reno-900'/>
                </Button>
              </Link>
            </ListItem>
            <ListItem style={{ marginTop: '-10px' }}>
              <Button variant="h6" sx={{textTransform: 'uppercase' }} style={{borderRadius: '50px', backgroundColor: 'white', boxShadow: '0px 15px 15px -15px rgba(0, 0, 0, 1)' }} onClick={handleDrawerClose}>
                <CloseIcon sx={{ fontSize: '3vh' }} className='text-reno-900'/>
              </Button>
            </ListItem>
          </div>
          <div className='border-l-4 border-reno-300 ml-2'>
          <ListItem>
            <Link to="about" smooth={true} duration={500} offset={-80}>
              <label onClick={handleDrawerClose} style={{ fontWeight: 'bold' }}>
                ACERCA DE MI
              </label>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="tech" smooth={true} duration={500} offset={-75}>
              <label className='uppercase' onClick={handleDrawerClose} style={{ fontWeight: 'bold' }}>
                tecnologías
              </label>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="xp" smooth={true} duration={500} offset={-75}>
              <label onClick={handleDrawerClose} style={{ fontWeight: 'bold' }}>
                EXPERIENCIA
              </label>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="contact" smooth={true} duration={500} offset={-75}>
              <label onClick={handleDrawerClose} style={{ fontWeight: 'bold' }}>
                CONTACTO
              </label>
            </Link>
          </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  )
}

export default Navbar