import React from 'react'
import { mayData } from '../common/Helper';
import { Link_Card } from '../common/LinkCard';
const MayData = ({year}) => {
  return (
    <>
    {mayData[year].map((project, index) => (
      <Link_Card githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default MayData