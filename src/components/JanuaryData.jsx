import React from 'react';
import { januaryData } from '../common/Helper';
import { Link_Card } from '../common/LinkCard';

const JanuaryData = ({ year }) => (
  <>
    {januaryData[year].map((project, index) => (
      <Link_Card githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
);

export default JanuaryData;