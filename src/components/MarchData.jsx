import React from 'react'
import JulianProject from '../assets/images/webp/JulianProject.png'
import EverGreen from '../assets/images/webp/EverGreen.png'
import CVHawk from '../assets/images/webp/CV-Hawk.png'
import HustlinHardos from '../assets/images/webp/HustlinHardos.png'
import Chimpz from '../assets/images/webp/Chimpz.png'
import TravelClub from '../assets/images/webp/TravelClub.png'
const march2024Projects = [
    {
        githubLink: 'https://github.com/Shiv-468/The-Julian-project-Rebuild.git',
        vercelLink: 'https://the-julian-project-rebuild.vercel.app/',
        image: JulianProject,
      },
      {
          githubLink: 'https://github.com/Shiv-468/Ever_green.git',
          vercelLink: 'https://ever-green-jade.vercel.app/',
          image: EverGreen,
        },
        {
          githubLink: 'https://github.com/Shiv-468/CV-Hawk.git',
          vercelLink: 'https://company-beta-olive.vercel.app/',
          image: CVHawk,
        },
        {
          githubLink: 'https://github.com/Shiv-468/Hustlin-Hardos.git',
          vercelLink: 'https://hustlin-hardos-beta.vercel.app/',
          image: HustlinHardos,
        },
        {
          githubLink: 'https://github.com/Shiv-468/test1.git',
          vercelLink: 'https://test1-zeta-indol.vercel.app/',
          image: Chimpz,
        },
        {
            githubLink: 'https://github.com/Shiv-468/The-travel-club.git',
            vercelLink: 'https://the-travel-club.vercel.app/',
            image: TravelClub,
          },
  ];
const MarchData = () => {
  return (
    <>
    {march2024Projects.map((project, index) => (
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

export default MarchData