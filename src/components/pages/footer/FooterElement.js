import styled from 'styled-components';
import {Link} from 'react-scroll';

export const FooterSection = styled.div`
  background-color:black;
  text-align:center;
  padding:0 40px;
  width:100%;
`

export const Title = styled.h3`
    font-family:'Mulish' ,sans-serif;
    color:#651FFF;
    
`
export const SubTitle = styled.p`
  font-family:'Poppins' , sans-serif;
  font-width:500;
  opacity:.6;
`

export const FooterLink = styled(Link)`
   font-family:'Poppins' ,sans-serif;
   font-width:800;
   color:white;
   opacity:.6;
   transition : all .5s;
   line-height:.7;
  
   &:hover {
       text-decoration:none;
       cursor : pointer;
       color:white;
       opacity:1;
       
   }
   
`

export const SocialMediaIcon  = styled.div`
   font-size:30px;
   color:white;
   opacity:.7;
   margin:0 auto;
   display:block;
`

const socialMediaLink = styled.a`
  color : white;
  opacity:.6;
  &:hover {
    color:white;
    opacity:1;
  }
`

export const NavLink = styled.div`
  text-transform : uppercase;
  
`