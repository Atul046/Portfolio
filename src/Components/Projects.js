import React from 'react';
import ProjectBox from './ProjectBox';
// import NewsletterImage from '../images/NewsletterImage.png';
// import RogfreeImage from '../images/RogfreeImage.png';
// import TindogImage from '../images/TindogImage.png';
import IconsMatchingImage from '../images/IconsMatchingImage.jpeg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        // <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        // <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        // <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
        <ProjectBox projectPhoto={IconsMatchingImage} projectName="IconsMatching" />
      </div>

    </div>
  )
}

export default Projects
