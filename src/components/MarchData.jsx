import React from 'react'
import { marchData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const MarchData = ({year}) => {
  return (
    <div className = "flex flex-col w-full">
    {marchData[year].map((project, index) => (
      <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
  )
}

export default MarchData