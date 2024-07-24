import React from 'react'
import { novemberData } from '../common/Helper';
import { Link_Card } from '../common/LinkCard';
const NovemberData = ({year}) => {
  return (
    <>
    {novemberData[year].map((project, index) => (
       <Link_Card githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default NovemberData