import React from 'react'
import Passage from '../assets/images/webp/Passage.png'
import IdoxAi from '../assets/images/webp/IdoxAi.png'
import Cybertise from '../assets/images/webp/Cybertise.png'
import Gardena from '../assets/images/webp/Gardena.png'

const april2024Projects = [
    {
      githubLink: 'https://github.com/Shiv-468/Passage.git',
      vercelLink: 'https://passage-self.vercel.app/',
      image: Passage,
    },
    {
      githubLink: 'https://github.com/Shiv-468/iDoxai.git',
      vercelLink: 'https://i-doxai.vercel.app/',
      image: IdoxAi,
    },
    {
      githubLink: 'https://github.com/Shiv-468/cybertise.git',
      vercelLink: 'https://cybertise.vercel.app/',
      image: Cybertise,
    },
    {
      githubLink: 'https://github.com/Shiv-468/Gardena.git',
      vercelLink: 'https://gardena-pi.vercel.app/',
      image: Gardena,
    },
  ];
const AprilData = () => {
  return (
    <>
    {april2024Projects.map((project, index) => (
       <div key={index} className="flex flex-col md:flex-row w-full justify-between items-center border p-3 rounded-[16px] hover:shadow-LinkBox duration-300 ease-linear">
        <div className="flex gap-1">
          <h3 className="text-2xl font-medium font-Grandstander">{`${index + 1}.`}</h3>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:gap-2">
              <p className="font-Grandstander text-lg font-medium">GitHub Link:</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-base font-medium font-Poppins text-[#5928E5]">{project.githubLink}</a>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 mt-2">
              <p className="font-Grandstander text-lg font-medium">Vercel Link:</p>
              <a href={project.vercelLink} target="_blank"  className="text-base font-medium font-Poppins text-[#5928E5]" rel="noopener noreferrer">{project.vercelLink}</a>
            </div>
          </div>
        </div>
        {project.image && <img src={project.image} alt={`Project ${index + 1}`} className="max-w-[230px] max-h-[150px] rounded-[16px]" />}
      </div>
    ))}
  </>
  )
}

export default AprilData