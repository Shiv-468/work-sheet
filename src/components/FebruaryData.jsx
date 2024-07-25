import React from 'react';
import { februaryData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const JanuaryData = ({ year }) => (
  <div className = "flex w-full flex-col">
    {februaryData[year].map((project, index) => (
       <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
);

export default JanuaryData;