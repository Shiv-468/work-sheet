import React from 'react'
import Sneakers from '../assets/images/webp/Sneakers.png';
import ExclusiveGames from '../assets/images/webp/ExclusiveGames.png';
import Company from '../assets/images/webp/Company.png';
import NexAi from '../assets/images/webp/NexAi.png';
import NobleMind from '../assets/images/webp/NobleMind.png';

const february2024Projects = [
    {
        githubLink: 'https://github.com/Shiv-468/SNEAKERAS-.git',
        vercelLink: 'https://sneakeras.vercel.app/',
        image: Sneakers,
      },
      {
          githubLink: 'https://github.com/Shiv-468/my_games.git',
          vercelLink: 'https://my-games-two.vercel.app/',
          image: ExclusiveGames,
        },
        {
          githubLink: 'https://github.com/Shiv-468/company.git',
          vercelLink: 'https://company-beta-olive.vercel.app/',
          image: Company,
        },
        {
          githubLink: 'https://github.com/Shiv-468/NexAi.git',
          vercelLink: 'https://nex-ai-eight.vercel.app/',
          image: NexAi,
        },
        {
          githubLink: 'https://github.com/Shiv-468/Noble_mind.git',
          vercelLink: 'https://noble-mind.vercel.app/',
          image: NobleMind,
        },
  ];
const FebruaryData = () => {
  return (
    <>
    {february2024Projects.map((project, index) => (
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

export default FebruaryData