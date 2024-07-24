import React from 'react'
import { marchData } from '../common/Helper';
import { Link_Card } from '../common/LinkCard';
const MarchData = ({year}) => {
  return (
    <>
    {marchData[year].map((project, index) => (
      <Link_Card githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default MarchData