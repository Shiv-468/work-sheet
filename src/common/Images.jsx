import React from 'react'
import use_location from '../assets/images/webp/use-location.webp'
import events_free from '../assets/images/webp/events-free.webp'
import festival_profile from '../assets/images/webp/festival-profile.webp'
import sneakers from '../assets/images/webp/sneakers.webp'
import exclusive_games from '../assets/images/webp/exclusive-games.webp'
import company from '../assets/images/webp/company.webp'
import nex_ai from '../assets/images/webp/nex-ai.webp'
import noble_mind from '../assets/images/webp/noble-mind.webp'
import julian_project from '../assets/images/webp/julian-project.webp'
import ever_green from '../assets/images/webp/ever-green.webp'
import cv_hawk from '../assets/images/webp/cv-hawk.webp'
import hustlin_hardos from '../assets/images/webp/hustlin-hardos.webp'
import chimpz from '../assets/images/webp/chimpz.webp'
import travel_club from '../assets/images/webp/travel-club.webp'
import passage from '../assets/images/webp/passage.webp'
import idox_ai from '../assets/images/webp/idox-ai.webp'
import cybertise from '../assets/images/webp/cybertise.webp'
import gardena from '../assets/images/webp/gardena.webp'
import solana_page from '../assets/images/webp/solana-page.webp'
import block_chain from '../assets/images/webp/block-chain.webp'
import atlentic from '../assets/images/webp/atlentic.webp'
import fitness_myths from '../assets/images/webp/fitness-myths.webp'
import sclair from '../assets/images/webp/sclair.webp'
import my_pets from '../assets/images/webp/my-pets.webp'
import hubrich from '../assets/images/webp/hubrich.webp'
import edge from '../assets/images/webp/edge.webp'
import chat_app from '../assets/images/webp/chat-app.webp'
import events_feed from '../assets/images/webp/events-feed.webp'
import solana_business from '../assets/images/webp/solana-business.webp'
import lasles_vpn from '../assets/images/webp/lasles-vpn.webp'
import digiency from '../assets/images/webp/digiency.webp'
import buddy_bullies from '../assets/images/webp/buddy-bullies.webp'
import postalott from '../assets/images/webp/postalott.webp'
import counter_app from '../assets/images/webp/counter-app.webp'
import accordion_js from '../assets/images/webp/accordion-js.webp'
import tabs_js from '../assets/images/webp/tabs-js.webp'
import digiency_home from '../assets/images/webp/digiency-home.webp'
import nft_see from '../assets/images/webp/nft-see.webp'
import nft_wallet from '../assets/images/webp/nft-wallet.webp'
import vipe_studio from '../assets/images/webp/vipe-studio.webp'
import layout_tailwind from '../assets/images/webp/layout-tailwind.webp'
import crappo from '../assets/images/webp/crappo.webp'
import deco_master from '../assets/images/webp/deco-master.webp'
import breda_university from '../assets/images/webp/breda-university.webp'
import bed_rock from '../assets/images/webp/bed-rocks.webp'
const Images = ({ image, className }) => {
  const imageList = {
    events_free,
    festival_profile,
    sneakers,
    exclusive_games,
    company,
    nex_ai,
    noble_mind,
    julian_project,
    ever_green,
    cv_hawk,
    hustlin_hardos,
    chimpz,
    travel_club,
    passage,
    idox_ai,
    cybertise,
    gardena,
    solana_page,
    block_chain,
    atlentic,
    fitness_myths,
    sclair,
    my_pets,
    hubrich,
    edge,
    chat_app,
    events_feed,
    solana_business,
    lasles_vpn,
    digiency,
    buddy_bullies,
    postalott,
    counter_app,
    accordion_js,
    tabs_js,
    digiency_home,
    nft_see,
    nft_wallet,
    vipe_studio,
    layout_tailwind,
    crappo,
    deco_master,
    use_location,
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