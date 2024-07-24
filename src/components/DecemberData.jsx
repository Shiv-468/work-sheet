import React from 'react'
import { decemberData } from '../common/Helper';
import { Link_Card } from '../common/LinkCard';
const DecemberData = ({year}) => {
  return (
    <>
    {decemberData[year].map((project, index) => (
       <Link_Card githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default DecemberData