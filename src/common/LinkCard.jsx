import Images from './Images';
export const LINK_CARD = ({githubLink, vercelLink, projectImage, i}) => (
    <div key={i} className="flex flex-col md:flex-row w-full justify-between items-center border p-3 rounded-[16px] hover:shadow-LinkBox duration-300 ease-linear">
    <div className="flex gap-1">
      <h3 className="text-2xl font-medium font-Grandstander">{`${i + 1}.`}</h3>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:gap-2">
          <p className="font-Grandstander text-lg font-medium">GitHub Link:</p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-base font-medium font-Poppins text-[#5928E5]">{githubLink}</a>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 mt-2">
          <p className="font-Grandstander text-lg font-medium">Vercel Link:</p>
          <a href={vercelLink} target="_blank"  className="text-base font-medium font-Poppins text-[#5928E5]" rel="noopener noreferrer">{vercelLink}</a>
        </div>
      </div>
    </div>
    <Images image={projectImage} className="max-w-[230px] max-h-[150px] rounded-[16px]" />
  </div>
)