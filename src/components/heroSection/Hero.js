
import styled from 'styled-components';
import {Link} from 'react-scroll';

const Title  = styled.h1`

    color:#ffffff;
    font-weight:bold;
    font-size:50px;
    @media screen and (max-width:500px) {
      font-size:25px;
    }

`

const SubTitle = styled.h5`
    color:#DFDFDF;
    font-weight:bold;
    font-size:25px;
    cursor:pointer;
    @media screen and (max-width:500px) {
      font-size:14px;
    }

`
const Button = styled.button`
  background: linear-gradient(270deg, #711AFF 0%, #3563D9 100%);
  border-radius: 10px;
  color:white;
  width:150px;
  height:50px;
  padding:10px;
   border:none;
   outline:none;

   @media screen and (max-width:500px) {
     width:100px;
     height:40px;
     font-size:10px;
   }

`

const Wrapper = styled.div`
  width:500px;
  height:100%;
  font-family:'Quicksand' , sans-serif;
  transform:translateY(50%);

`



export default function Hero(){
  return (
     <div className="hero-section">
        <div className="container">
        <div className="row">
           <div className="col-sm-6">
              <Wrapper>
                    <Title>Hello & welcome, I'm Rishabh</Title>
                    <SubTitle>frontend developer & web designer</SubTitle>
                    <Link to="contact" duration={600} smooth={true} spy={true}> <Button className="mt-4 shadow">contact us</Button></Link>
              </Wrapper>
           </div>
           <div className="col-sm-6">
              <Wrapper className="text-center">
                  <SubTitle className="down-arrow">&darr;</SubTitle>
                  <Link to="about" duration={600} smooth={true} spy={true}><SubTitle>scroll down</SubTitle></Link>
              </Wrapper>
           </div>
        </div>
        </div>
     </div>
  )
};
