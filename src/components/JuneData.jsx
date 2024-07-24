import React from 'react'
import { juneData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const JuneData = ({year}) => {
  return (
    <>
    {juneData[year].map((project, index) => (
      <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default JuneData