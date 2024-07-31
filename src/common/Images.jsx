import React from 'react';
import uselocation from '../assets/images/webp/uselocation.webp'
import Eventsfree from '../assets/images/webp/Eventsfree.webp';
import FestivalProfile from '../assets/images/webp/FestivalProfile.webp';
import Sneakers from '../assets/images/webp/Sneakers.webp';
import ExclusiveGames from '../assets/images/webp/ExclusiveGames.webp';
import Company from '../assets/images/webp/Company.webp';
import NexAi from '../assets/images/webp/NexAi.webp';
import NobleMind from '../assets/images/webp/NobleMind.webp';
import JulianProject from '../assets/images/webp/JulianProject.webp'
import EverGreen from '../assets/images/webp/EverGreen.webp'
import CVHawk from '../assets/images/webp/CV-Hawk.webp'
import HustlinHardos from '../assets/images/webp/HustlinHardos.webp'
import Chimpz from '../assets/images/webp/Chimpz.webp'
import TravelClub from '../assets/images/webp/TravelClub.webp'
import Passage from '../assets/images/webp/Passage.webp'
import IdoxAi from '../assets/images/webp/IdoxAi.webp'
import Cybertise from '../assets/images/webp/Cybertise.webp'
import Gardena from '../assets/images/webp/Gardena.webp'
import SolanaPage from '../assets/images/webp/SolanaPage.webp'
import Blockchain from '../assets/images/webp/Blockchain.webp'
import Atlentic from '../assets/images/webp/Atlentic.webp'
import Fitness from '../assets/images/webp/Fitness.webp'
import Sclair from '../assets/images/webp/Sclair.webp';
import Mypets from '../assets/images/webp/Mypets.webp';
import Hubrich from '../assets/images/webp/Hubrich.webp';
import Edge from '../assets/images/webp/Edge.webp';
import ChatApp from '../assets/images/webp/ChatApp.webp';
import EventsFeed from '../assets/images/webp/EventsFeed.webp'
import SolanaBusiness from '../assets/images/webp/SolanaBusiness.webp'
import LaslesVPN from '../assets/images/webp/LaslesVPN.webp'
import Digiency from '../assets/images/webp/Digiency.webp'
import BuddyBullies from '../assets/images/webp/BuddyBullies.webp'
import Postalott from '../assets/images/webp/Postalott.webp'
import Counterapp from '../assets/images/webp/Counterapp.webp'
import AccordionJS from '../assets/images/webp/AccordionJS.webp'
import TabsJS from '../assets/images/webp/TabsJS.webp'
import DigiencyHome from '../assets/images/webp/DigiencyHome.webp'
import NFTsee from '../assets/images/webp/NFTsee.webp'
import NFTwallet from '../assets/images/webp/NFTwallet.webp'
import VipeStudio from '../assets/images/webp/VipeStudio.webp';
import LayoutTailwind from '../assets/images/webp/LayoutTailwind.webp';
import Crappo from '../assets/images/webp/Crappo.webp';
import DecoMaster from '../assets/images/webp/DecoMaster.webp';
import breda_university from '../assets/images/webp/breda-university.webp';
import bed_rock from '../assets/images/webp/bed-rocks.webp'
const Images = ({ image, className }) => {
  const imageList = {
    Eventsfree,
    FestivalProfile,
    Sneakers,
    ExclusiveGames,
    Company,
    NexAi,
    NobleMind,
    JulianProject,
    EverGreen,
    CVHawk,
    HustlinHardos,
    Chimpz,
    TravelClub,
    Passage,
    IdoxAi,
    Cybertise,
    Gardena,
    SolanaPage,
    Blockchain,
    Atlentic,
    Fitness,
    Sclair,
    Mypets,
    Hubrich,
    Edge,
    ChatApp,
    EventsFeed,
    SolanaBusiness,
    LaslesVPN,
    Digiency,
    BuddyBullies,
    Postalott,
    Counterapp,
    AccordionJS,
    TabsJS,
    DigiencyHome,
    NFTsee,
    NFTwallet,
    VipeStudio,
    LayoutTailwind,
    Crappo,
    DecoMaster,
    uselocation,
    breda_university,
    bed_rock
  };

  return (
    <span className={`rounded-[16px] ${className}`}>
      {image && <img src={imageList[image]} alt={image} className='rounded-[16px] max-w-[230px] max-h-[150px] border' />}
    </span>
  );
};

export default Images;