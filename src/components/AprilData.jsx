import React from 'react'
import { aprilData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const AprilData = ({year}) => {
  return (
    <>
    {aprilData[year].map((project, index) => (
     <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default AprilData