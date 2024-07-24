import React from 'react'
import { decemberData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const DecemberData = ({year}) => {
  return (
    <>
    {decemberData[year].map((project, index) => (
       <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default DecemberData