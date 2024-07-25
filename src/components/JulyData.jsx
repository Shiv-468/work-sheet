import React from 'react'
import { julyData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const JulyData = ({year}) => {
  return (
    <div className = "flex w-full flex-col">
    {julyData[year].map((project, index) => (
        <LINK_CARD key={index} githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
  )
}

export default JulyData