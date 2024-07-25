import React from 'react';
import { januaryData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';

const JanuaryData = ({ year }) => (
  <div className = "flex flex-col w-full">
    {januaryData[year].map((project, index) => (
      <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
);

export default JanuaryData;