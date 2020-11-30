import styled from 'styled-components';
import {Link} from 'react-scroll';

export const SidebarEl = styled.div`
   background-color:whitesmoke;
   height:100vh;
   width:300px;
   position:fixed;
   top:0;
   z-index:100;
   display:flex;
   flex-direction:column;
   text-align:center;
   left : ${({open}) => (open ? 0 : '-100%')};
   transition:.6s;
`

export const SidebarLinkItem = styled(Link)`
  color:black;
  font-family:'Poppins' ,sans-serif;
  font-weight:600;
  font-size:20px;
 
  &:hover {
      text-decoration:none;
      cursor : pointer;
      color:indigo;
      opacity:1;
      
  }

`