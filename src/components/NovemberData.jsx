import React from 'react'
import { novemberData } from '../common/Helper';
import { LINK_CARD } from '../common/LinkCard';
const NovemberData = ({year}) => {
  return (
    <div className='flex flex-col w-full'>
    {novemberData[year].map((project, index) => (
       <LINK_CARD githubLink={project.githubLink} vercelLink={project.vercelLink} projectImage={project.image} i={index}/>
    ))}
  </div>
  )
}

export default NovemberData