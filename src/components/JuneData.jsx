import React from 'react'
import { juneData } from '../common/Helper';
import { Link_Card } from '../common/LinkCard';
const JuneData = ({year}) => {
  return (
    <>
    {juneData[year].map((project, index) => (
      <Link_Card githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default JuneData