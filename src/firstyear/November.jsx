import React from 'react'
import EventsFeed from '../assets/images/webp/EventsFeed.png'
import SolanaBusiness from '../assets/images/webp/SolanaBusiness.png'
import LaslesVPN from '../assets/images/webp/LaslesVPN.png'
import Digiency from '../assets/images/webp/Digiency.png'
import BuddyBullies from '../assets/images/webp/BuddyBullies.png'

const november2023Projects = [
    {
      githubLink: 'https://github.com/Shiv-468/feed.git',
      vercelLink: 'https://feed-zeta.vercel.app/',
      image: EventsFeed,
    },
    {
        githubLink: 'https://github.com/Shiv-468/solana-business.git',
        vercelLink: 'https://solana-business.vercel.app/',
        image: SolanaBusiness,
      },
      {
        githubLink: 'https://github.com/Shiv-468/lasles-VPN.git',
        vercelLink: 'https://lasles-vpn-six.vercel.app/',
        image: LaslesVPN,
      },
      {
        githubLink: 'https://github.com/Shiv-468/digiency.git',
        vercelLink: 'https://digiency-three.vercel.app/',
        image: Digiency,
      },
      {
        githubLink: 'https://github.com/Shiv-468/Buddy-Bullies.git',
        vercelLink: 'https://buddy-bullies-alpha.vercel.app/',
        image: BuddyBullies,
      },
  ];
const November = () => {
  return (
    <>
    {november2023Projects.map((project, index) => (
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

export default November