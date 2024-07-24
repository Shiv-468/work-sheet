import React from 'react'
import { novemberData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const NovemberData = ({year}) => {
  return (
    <>
    {novemberData[year].map((project, index) => (
       <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default NovemberData