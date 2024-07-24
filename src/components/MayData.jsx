import React from 'react'
import { mayData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const MayData = ({year}) => {
  return (
    <>
    {mayData[year].map((project, index) => (
      <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default MayData