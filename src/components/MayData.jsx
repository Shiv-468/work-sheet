import React from 'react'
import { mayData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const MayData = ({year}) => {
  return (
    <div className = "flex flex-col w-full">
    {mayData[year].map((project, index) => (
      <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
  )
}

export default MayData