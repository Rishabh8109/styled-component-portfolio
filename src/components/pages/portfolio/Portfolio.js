import {Title , SubTitle , Project , SourceLInk} from '../../GlobelStyledComponents/GlobalStyle';
import projectImage from '../../Images/github-job.png';

export default function Work(){
  return (
    <div className="container py-3">
      <div className="text-center py-4">
        <Title>Portfolio</Title>
        <SubTitle>Most recent work</SubTitle>
      </div>
      <div className="row p-5">
         <div className="col-sm-4">
            <Project className="p-3 text-center bg-light shadow-lg">
                <img src={projectImage} alt="github-job-project" width="100%"/>
                <SubTitle className="text-dark mt-3 py-4">Github job api (REACTJS)</SubTitle>
                <SourceLInk href="https://github.com/Rishabh8109/github-job-project-reactjs" className="text-center">Get source code</SourceLInk>
             </Project>
         </div>
      </div>
    </div>
  );
};
