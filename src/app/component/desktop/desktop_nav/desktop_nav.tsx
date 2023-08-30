import Image from 'next/image'

const DesktopNavBar: React.FC = () => {

  return (
    <nav className="flex flex-row w-full p-3 gap-5 xl:gap-10 justify-end items-center h-28 sticky top-0 z-50 bg-gradient-to-r from-custom-green-1 to-custom-green-2 to-90%">
      <div className="flex flex-row gap-6 xl:gap-12 justify-self-start">
      <a href="https://www.muaythai.se/">
        <img
          src="/logos/federation-logo.png"
          alt="Svenska thaiboxningsförbundet logo"
          className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] mt-2 xl:mt-6"
        />
      </a>
      <a href="https://southsidearena.se/">
        <img
          src="/logos/southside-logo-black.svg"
          alt="Southside arena logo"
          className="w-[100px] h-[100px] xl:w-[125px] xl:h-[125px] xl:mt-3"
        />
      </a>
      <a href="http://www.kampsportstadion.se/intro">
        <img
          src="/logos/ks-logo-black.svg"
          alt="Kampsportstadion logo"
          className="w-[125px] h-[125px] xl:w-[150px] xl:h-[150px] -mt-2 xl:mt-0"
        />
      </a>
      </div>
      <div className="ml-auto">
        {/* <img
          src="/email-icon.svg"
          alt="Email icon"
          className="w-12 h-12 xl:w-75 xl:h-75"
        /> */}
      </div>
      <a href="https://www.tickster.com/sv/events/ubjm4z2ugvumcll" className="rounded-full bg-black text-lime-100 py-2 px-12 z-10 text-lg xl:text-2xl font-medium w-22 xl:w-42 text-center mr-5">
        KÖP BILJETT
      </a>
    </nav>
  )
}

export default DesktopNavBar;