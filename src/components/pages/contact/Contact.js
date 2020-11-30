
import {Input , Button ,TextArea } from './ContactElement';
import {Title} from '../../GlobelStyledComponents/GlobalStyle';

export default function Contect(){
  return (
    <div className="container contactForm pt-5">
         <Title>Contact us</Title>
          <form>
          <div className="row p-4 mt-5">
             <div className="col-sm-6">
                <Input type="text"   placeholder="Enter your name..." />
             </div>
             <div className="col-sm-6">
                <Input type="text"  placeholder="Enter your Email..." />
             </div>
             <div className="col-sm-12 mt-2">
                <TextArea  col="50" row="50" placeholder="Type your message..." />
             </div>
             <Button className="m-4 mx-auto" type="button">send message</Button>
          </div>
          </form>
    </div>
   )
};
