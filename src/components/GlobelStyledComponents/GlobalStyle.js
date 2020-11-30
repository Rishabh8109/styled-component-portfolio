
import styled from 'styled-components';

export const Title = styled.h1`
  font-family : 'Mulish' , sans-serif;
  font-weight:bold;

  @media screen and (max-width:500px) {
    font-size:24px;
    text-align:ce
  }
`
export const SubTitle = styled.h5`
  font-family: "Poppins" , sans-serif;
  font-weight:600;
  color:indigo;
  opacity:.5;

  @media screen and (max-width:500px) {
    font-size:18px;
  }

`

export const Desc = styled.p`
   margin-top:15px;
   opacity:.9;
   font-family:'Poppins' , sans-serif;

   @media screen and (max-width:500px) {
      font-size:15px;
   }

`
export const Row  =  styled.div`
    @media screen and (max-width:500px) {
      margin:auto;
      display:block;
      padding:20px;

    }
`

export const Img = styled.img`
    border:10px solid #9575CD;
    border-radius:50%;
    
    @media screen and (max-width:500px) {
      margin:auto;
      display:block;
      width:70%;
    }
`


export const Container = styled.div`
  width:80%;
  margin:auto;
  display:block;
`

// work page
export const Project = styled.div`
    position:relative;
    border-radius:6px;
    z-index:2;
  
    &:before {
      content :'';
     position: absolute;
     top:0;
     left : 0;
    transition: background-color.4s;
     width:100%;
     height:100%;
     opacity:.4;
     z-index:-1;
       border-radius:6px;
    }

    &:hover:before {
       background-color:#5433FF;
    }
`
export const SourceLInk = styled.a`
  color:white;
  font-size:10px;
  background-color:indigo;
  opacity:.7;
  padding:10px 10px;
  border-radius:5px;

  &:hover {
     text-decoration: none;
     color:indigo;
     background: none;
     border:1px solid indigo;
  }
`
