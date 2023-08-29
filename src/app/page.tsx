'use client'

import React, { useState } from 'react';
import FrontPageCard from './component/mobile/fronpage-card/front_page_card';
import MobileNavbar from './component/mobile/mobile_navbar/mobile_navbar';
import MobileDayInfo from './component/mobile/mobile_day_info/mobile_day_info';
import DesktopNavBar from './component/desktop/desktop_nav/desktop_nav';
import styles from './desktop.module.css';
import DesktopDayInfo from './component/desktop/desktop_day_info/desktop_day_info';

export default function Home() {
  const [isCardExpanded, setIsCardExpanded] = useState<boolean>(true);

  return (
    <main>
      {/* Mobile screens*/}
      <div className={`block w-700:hidden w-full min-h-screen bg-gradient-to-br from-custom-green-1 from-20% to-custom-green-2 to-90%`}
      >
        <FrontPageCard isExpanded={isCardExpanded} onExpandChange={setIsCardExpanded} />
        <MobileNavbar isCardExpanded={isCardExpanded} onExpandChange={setIsCardExpanded} />
        <div className="flex flex-col h-full w-full">
          <div className={`w-3/4 mt-0 h-740:mt-6 pl-5`}>
            <MobileDayInfo
              day='Torsdag 7/9'
              time='16.00 Matchstart'
              events={['+ Kvalifikationsmatcher', 'Pris 170:-']}
            />
            <MobileDayInfo
              day='Fredag 8/9'
              time='16.00 Matchstart'
              events={['+ Kvalifikationsmatcher', 'Pris 170:-']}
            />
            <MobileDayInfo
              day='Lördag 9/9'
              time='18.00 Matchstart'
              events={['+ Finaler', '+ Live DJ', '+ Artist']}
            />
            <div className="mt-3">
              <MobileDayInfo 
                day=""
                time=""
                events={["Biljettpris", "249:- / 349:-"]}
              />
            </div>
            <div>
              <a className="sm:mt-5 mt-2 text-sm" href="https://www.tickster.com/sv/events/ubjm4z2ugvumcll/2023-09-09/sm-final-thaiboxning-2023">Köp biljett</a>
              <br></br>
              <a className="sm:mt-5 mt-2 text-sm" href="https://www.haninge.se/uppleva-och-gora/idrott/idrottsanlaggningar/torvalla-sporthallar/">Torvalla Sportcentrum</a>
              <p className="text-sm">Dalarövägen 66, 136 45 Handen</p>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop screens */}
      <div className="hidden w-700:block w-full h-full bg-gradient-to-r from-custom-green-1 to-custom-green-2 to-90%">
        <DesktopNavBar />
        <div className="w-full h-[800px] relative">
          <div className="h-full flex flex-col z-10 justify-center items-center text-center">
            <h2 className={`z-10 text-[130px] gradient-text w-full font-bold`}>
              SM 2023
            </h2>
            <h2 className="text-white z-10 text-5xl font-medium -mt-8">
              THAIBOXNING
            </h2>
            <p className={` text-white z-10 mt-30 text-5xl w-2/3 xl:w-1/3 font-medium mt-12`}>
              SVENSKA MÄSTERSKAPET I THAIBOXNING <span className='text-custom-green-1'>+ </span>
              LIVE DJ <span className='text-custom-green-1'>+ </span> ARTIST
            </p>
            <p className="z-10 text-gray-200 mt-20 text-2xl px-42 xl:px-72 font-medium">
              TORSDAG 7/9 - LÖRDAG 9/9
              <br></br>TORVALLA SPORTCENRUM
            </p>
          </div>
          <img
            src="/thaiboxer-ss2-banner.jpg"
            alt="Female thaiboxer"
            className={styles["cover-image"]}
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
        </div>
        <div className="w-full h-[1000px] xl:h-[800px]">
          <div className="flex w-full h-full flex-col justify-center items-center text-center gap-16">
            <div className="flex flex-col xl:flex-row justify-center">
              <DesktopDayInfo
                day='TORSDAG 7/9'
                time='16.00 - Matchstart'
                events={['Kvalifikationsmatcher', 'Pris 170:-']}
              />
              <DesktopDayInfo
                day='FREDAG 8/9'
                time='16.00 - Matchstart'
                events={['Kvalifikationsmatcher', 'Pris 170:-']}
                borders={true}
              />
              <DesktopDayInfo
                day='LÖRDAG 9/9'
                time='18.00 - Matchstart'
                events={['Finaler', 'Live DJ', 'Artist']}
              />
            </div>
            <div className="lg:text-2xl xl:text-3xl xl:ml-16">
              <p>Biljettpris 249:- / 349:-</p>
              <br></br>
              <a href="https://www.tickster.com/sv/events/ubjm4z2ugvumcll/2023-09-09/sm-final-thaiboxning-2023">Köp biljett</a>
              <br></br>
              <a href="https://www.haninge.se/uppleva-och-gora/idrott/idrottsanlaggningar/torvalla-sporthallar/">Torvalla Sportcentrum</a>
              <p>Dalarövägen 66, 136 45 Handen</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-black rounded-tl-3xl rounded-tr-3xl grid grid-cols-5 justify-items-center items-center">
          <img
            src="/logos/federation-logo.png"
            alt="Kampsportstadion logo"
            className={styles.logoImage}
          />
          <img
            src="/logos/southside-white-logo.svg"
            alt="Southside logo"
            className={styles.logoMidImage}
          />
          <img
            src="/logos//ks-logo.svg"
            alt="Swedish thaiboxing federation logo"
            className={styles.logoMidImage}
          />
          <img
            src="/logos/rr-logo.svg"
            alt="Kampsportstadion logo"
            className={styles.logoMidImage}
          />
          <img
            src="/logos/pic-logo.svg"
            alt="Southside logo"
            className={styles.logoMidImage}
          />
          <img
            src="/logos/toro-logo.png"
            alt="Swedish thaiboxing federation logo"
            className={styles.logoMidImage}
          />

        </div>
        <style>
          {`
          .gradient-text {
            background: linear-gradient(90deg, #BED747, #C7D09C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
        </style>
      </div>
    </main>
  )
}
