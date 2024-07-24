import React from 'react'
import { aprilData } from '../common/Helper';
import { Link_Card } from '../common/LinkCard';
const AprilData = ({year}) => {
  return (
    <>
    {aprilData[year].map((project, index) => (
     <Link_Card githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default AprilData