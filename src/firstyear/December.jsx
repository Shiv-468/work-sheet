import React from 'react'
import Postalott from '../assets/images/webp/Postalott.png'
import Counterapp from '../assets/images/webp/Counterapp.png'
import AccordionJS from '../assets/images/webp/AccordionJS.png'
import TabsJS from '../assets/images/webp/TabsJS.png'
import DigiencyHome from '../assets/images/webp/DigiencyHome.png'
import NFTsee from '../assets/images/webp/NFTsee.png'
import NFTwallet from '../assets/images/webp/NFTwallet.png'

const december2023Projects = [
    {
      githubLink: 'https://github.com/Shiv-468/Sign-In.git',
      vercelLink: 'https://sign-in-tan.vercel.app/',
      image: Postalott,
    },
    {
        githubLink: 'https://github.com/Shiv-468/counter-app.git',
        vercelLink: 'https://counter-app-mauve-omega.vercel.app/',
        image: Counterapp,
      },
      {
        githubLink: 'https://github.com/Shiv-468/Accordion.git',
        vercelLink: 'https://accordion-gules-seven.vercel.app/',
        image: AccordionJS,
      },
      {
        githubLink: 'https://github.com/Shiv-468/Tabs.git',
        vercelLink: 'https://tabs-three-psi.vercel.app/',
        image: TabsJS,
      },
      {
        githubLink: 'https://github.com/Shiv-468/Digiency-home-page.git',
        vercelLink: 'https://digiency-home-page.vercel.app/',
        image: DigiencyHome,
      },
      {
        githubLink: 'https://github.com/Shiv-468/NTFsee.git',
        vercelLink: 'https://nt-fsee.vercel.app/',
        image: NFTsee,
      },
      {
        githubLink: 'https://github.com/Shiv-468/NFTsee-Wallet.git',
        vercelLink: 'https://nf-tsee-wallet.vercel.app/',
        image: NFTwallet,
      },
  ];
const December = () => {
  return (
    <>
    {december2023Projects.map((project, index) => (
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

export default December