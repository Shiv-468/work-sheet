import React from 'react'
import { juneData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const JuneData = ({year}) => {
  return (
    <div className = "flex flex-col w-full">
    {juneData[year].map((project, index) => (
      <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
  )
}

export default JuneData