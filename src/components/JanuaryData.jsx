import React from 'react';
import Eventsfree from '../assets/images/webp/Eventsfree.png';
import FestivalProfile from '../assets/images/webp/FestivalProfile.png';
import VipeStudio from '../assets/images/webp/VipeStudio.png';
import LayoutTailwind from '../assets/images/webp/LayoutTailwind.png';
import Crappo from '../assets/images/webp/Crappo.png';
import DecoMaster from '../assets/images/webp/DecoMaster.png';

const january2024Projects = [
  {
    githubLink: 'https://github.com/Shiv-468/chatapp-tailwind.git',
    vercelLink: 'https://chatapp-tailwind-theta.vercel.app/',
    image: Eventsfree,
  },
  {
    githubLink: 'https://github.com/Shiv-468/Festival-Profile.git',
    vercelLink: 'https://festival-profile-orpin.vercel.app/',
    image: FestivalProfile,
  },
  {
    githubLink: 'https://github.com/Shiv-468/Deco-Master.git',
    vercelLink: 'https://deco-master-sage.vercel.app/',
    image: DecoMaster,
  },
  {
    githubLink: 'https://github.com/Shiv-468/layout-page-tailwind.git',
    vercelLink: 'https://layout-page-tailwind.vercel.app/',
    image: LayoutTailwind,
  },
  {
    githubLink: 'https://github.com/Shiv-468/VIPE_STUDIO.git',
    vercelLink: 'https://vipe-studio-aj28.vercel.app/',
    image: VipeStudio,
  },
  {
    githubLink: 'https://github.com/Shiv-468/CRAPPO.git',
    vercelLink: 'https://crappo-phi.vercel.app/',
    image: Crappo,
  },
];

const JanuaryData = () => (
  <>
    {january2024Projects.map((project, index) => (
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
);

export default JanuaryData;
