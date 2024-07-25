import React from 'react'
import { aprilData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const AprilData = ({year}) => {
  return (
    <div className = "flex flex-col w-full">
    {aprilData[year].map((project, index) => (
     <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
  )
}

export default AprilData