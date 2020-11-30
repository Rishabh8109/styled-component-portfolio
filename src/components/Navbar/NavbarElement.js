import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Nav = styled.nav`
   background:#fff;
   width:100%;
   height:80px;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size : 1rem;
   position : sticky;
   top :0;
   z-index:10;
  

   @media screen and (max-width:500px) {
     width:100%;
     overflow-x:hidden;
   }

`
export const NavbarContainer = styled.div`
    width:60%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media screen and (max-width:500px) {
       justify-content:space-between;
       align-items:center;
       width:90%;
    }
`

export const NavbarLogo = styled.h3`
     color:navy;
     text-decoration:none;
     display:flex;
     justify-content:space-around;
     align-items:center;
     width:190px;
     font-family:'Quicksand' ,sans-serif;
     font-size:22px;
     font-weight:bold;

     @media screen and (max-width:500px) {
      font-size:18px;
      width:150px;
     }

`
export const NavLink = styled.div`
   display:flex;
   width:auto;
   display:flex;
   align-items:center;
  justify-content:center;

  @media screen and (max-width:500px) {
    display:none;
  }
`
export const NavLinkItem = styled(Link)`
   color:#000;
   width:100%;
   text-decoration:none;
   cursor:pointer;
   margin-right:2rem;
   font-family:'Poppins' ,sans-serif;
   font-weight:bold;
   height:100%;
   opacity:.8;
   font-size:18px;

   &:active {
     border-bottom;1px solide indigo;
   }

   &:hover {
     opacity:1;
     transition:.1s;
     border-bottom:2px solid DarkViolet;
     text-decoration:none;
     color:#000;
   }

   &:last-child {
     border:2px solid DarkViolet;
     padding:7px 10px;
     border-radius:4px;
     color:DarkViolet;
   }

   &:last-child:hover {
     background:DarkViolet;
     transition:.2s;
     color:white;
   }

  
`

export const MobileIcon = styled.div`
  color:black;
  transition:.4s;
  background-color:white;
  padding:12px;
`
