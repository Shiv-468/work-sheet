import React from 'react'
import { octoberData } from '../common/Helper'
import { LINK_CARD } from '../common/LinkCard'
const OctoberData  = ({ year }) => {
  return (
    <>
    {octoberData[year].map((project, index) => (
        <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </>
  )
}

export default OctoberData