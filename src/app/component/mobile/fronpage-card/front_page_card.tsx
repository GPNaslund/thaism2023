import Image from 'next/image'
import localFont from 'next/font/local'
import ButtonLarge from '../button_large/button_large'
import React from 'react';
import './frontpagecard.module.css'

interface FrontPageCardProps {
  isExpanded: boolean;
  onExpandChange: (expanded: boolean) => void;
}


const FrontPageCard: React.FC<FrontPageCardProps> = ({ isExpanded, onExpandChange }) => {

  const handleExpandChange = (expanded: boolean) => {
    onExpandChange(expanded);
  }


  return (
    <div className="absolute bottom-0 left-0 right-0 top-7 min-h-screen p-6 overflow-hidden">
      <div
        className={`absolute bottom-0 left-0 right-0 top-7 flex flex-col items-center min-h-screen p-6 rounded-tl-3xl rounded-tr-3xl bg-gray-300 shadow-2xl overflow-hidden transition-transform duration-500`}
        style={{
          transform: isExpanded ? 'translateY(0%)' : 'translateY(60%)',
        }}
      >
        <h2
          className={`z-10 mt-10 text-7xl font-bold text-custom-green-1`}
          style={{
            opacity: isExpanded ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
        >
          SM 2023
        </h2>
        <h2
          className="text-white z-10 text-4xl font-medium"
          style={{
            opacity: isExpanded ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
        >
          THAIBOXNING
        </h2>
        <div
          className={`w-full z-10 -mt-40 grid grid-cols-4 gap-1 justify-items-center justify-center`}
          style={{ opacity: isExpanded ? 0 : 1, transition: 'opacity 0.5s' }}
        >
          <div className="w-full max-w-[50px]">
            <img src="/federation-logo.svg" alt="Kampsportstadion logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/southside-white-logo.svg" alt="Southside logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/ks-logo.svg" alt="Swedish thaiboxing federation logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[50px]">
            <img src="/logos/mocklogo-1-white.svg" alt="Kampsportstadion logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/logos/mocklogo-2-white.svg" alt="Southside logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/logos/mocklogo-3-white.svg" alt="Swedish thaiboxing federation logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/logos/mocklogo-4-white.svg" alt="Kampsportstadion logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/logos/mocklogo-5-white.svg" alt="Southside logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/logos/mocklogo-6-white.svg" alt="Swedish thaiboxing federation logo" className="logoImage" />
          </div>
          <div className="w-full max-w-[100px]">
            <img src="/logos/mocklogo-7-white.svg" alt="Kampsportstadion logo" className="logoImage" />
          </div>
        </div>
        <div
          className="z-10"
          style={{
            opacity: isExpanded ? 1 : 0,
            transition: 'opacity 0.5s',
          }}>
          <p className={` text-white z-10 mt-30 text-3xl pr-20 font-bold`}>
            SVENSKA MÄSTERSKAPET I THAIBOXNING <span className='text-custom-green-1'>+ </span>
            LIVE DJ <span className='text-custom-green-1'>+ </span> UTSTÄLLARE <span className='text-custom-green-1'>+ </span> ERBJUDANDEN
          </p>
          <p className="z-10 text-gray-200 mt-5 text-sm pr-24 font-medium">
            TORSDAG 7/9 - LÖRDAG 9/9<br></br>
            TORVALLA SPORTCENRUM
          </p>
          <div className={`grid grid-cols-2 w-full mt-12 h-720:mt-32 justify-items-center`}>
            <ButtonLarge
              onClick={() => {
                handleExpandChange(false);
              }}
              text="LÄS MER"
            />
            <ButtonLarge
              href="www.google.se"
              text="KÖP BILJETT"
            />
          </div>
        </div>
        <img
          src="/thaiboxer-ss2-sm.jpg"
          alt="Thai boxer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute top-0 left-0 w-full h-full ${isExpanded ? 'bg-black bg-opacity-50 transition-opacity duration-500' : 'bg-black bg-opacity-100 transition-opacity duration-500'}`}></div>
      </div>
    </div>
  )
}

export default FrontPageCard;