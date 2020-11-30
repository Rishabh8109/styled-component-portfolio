import React , {useState} from 'react';
import {Nav , NavbarContainer , NavLink ,MobileIcon } from './NavbarElement';
import { RiMenuUnfoldLine , RiMenuFoldLine } from "react-icons/ri";
import {createGlobalStyle} from 'styled-components';
import NavLinks from './NavLinks';
import Logo from '../Navbar/Logo';
import Sidebar from '../sidebar/Sidebar';



function Navbar() {
  const [open, setOpen] = useState(false);

  // sidebar open function 
  const OpenSidebar = () => {
      setOpen(!open);
      
  }

  //gloabl style
  const GlobalStyle = createGlobalStyle`
    body {
      opacity:${({open}) => open ? .5 : 1}
    }
 `
    return (
       <>
        <Nav>
          <NavbarContainer>
               <Logo />
              <NavLink>
                <NavLinks />
              </NavLink>
              <MobileIcon onClick={OpenSidebar} className="d-md-none d-xl-none d-sm-block">
                {open ? ( <RiMenuFoldLine className="icon1  d-md-none d-xl-none d-sm-block" ></RiMenuFoldLine>) : ( <RiMenuUnfoldLine className="icon1  d-md-none d-xl-none d-sm-block" ></RiMenuUnfoldLine>)}
              </MobileIcon>
          </NavbarContainer>
        </Nav>
        <Sidebar open={open}/>
        <GlobalStyle />
       </>
    )
}

export default Navbar;
