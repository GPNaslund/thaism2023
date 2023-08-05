import DesktopNavBar from "../desktop_nav/desktop_nav";
import Image from 'next/image';
import localFont from 'next/font/local'
import DesktopDayInfo from "../desktop_day_info/desktop_day_info";
import styles from './desktop.module.css';


const kaushan_script = localFont({
  src: '../../../KaushanScript-Regular.ttf',
  display: 'swap',
})

const julee = localFont({
  src: '../../../julee.regular.ttf',
  display: 'swap',
})



export default function DesktopPage() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-custom-green-1 to-custom-green-2 to-90%">
      <DesktopNavBar />
      <div className="w-full h-[800px] relative">
        <div className="h-full flex flex-col z-10 justify-center items-center text-center">
          <h2 className={`${julee.className} z-10 text-[130px] gradient-text w-full`}>
            SM 2023
          </h2>
          <h2 className="text-white z-10 text-5xl font-medium -mt-8">
            THAIBOXNING
          </h2>
          <p className={`${julee.className} text-white z-10 mt-30 text-5xl w-2/3 xl:w-1/3 font-medium mt-12`}>
            SVENSKA MÄSTERSKAPET I THAIBOXNING <span className='text-custom-green-1'>+ </span>
            LIVE DJ <span className='text-custom-green-1'>+ </span> UTSTÄLLARE <span className='text-custom-green-1'>+ </span> ERBJUDANDEN.
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
              time='15.00 - 20.00'
              events={['Kvalifikationsmatcher', 'Utställare']}
            />
            <DesktopDayInfo
              day='FREDAG 8/9'
              time='15.00 - 20.00'
              events={['Kvalifikationsmatcher', 'Utställare']}
              borders={true}
            />
            <DesktopDayInfo
              day='LÖRDAG 9/9'
              time='15.00 - 22.00'
              events={['Finaler', 'Live DJ', 'Utställare']}
            />
          </div>
          <div className="lg:text-2xl xl:text-3xl xl:ml-16">
            <p>Torvalla Sportcentrum</p>
            <p>Torvallavägen, 136 46 Handen</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] bg-black rounded-tl-3xl rounded-tr-3xl grid grid-cols-5 justify-items-center items-center">
        <img
          src="/federation-logo.svg"
          alt="Kampsportstadion logo"
          className={styles.logoImage}
        />
        <img
          src="/southside-white-logo.svg"
          alt="Southside logo"
          className={styles.logoMidImage}
        />
        <img
          src="/ks-logo.svg"
          alt="Swedish thaiboxing federation logo"
          className={styles.logoMidImage}
        />
        <img
          src="/logos/mocklogo-1-white.svg"
          alt="Kampsportstadion logo"
          className={styles.logoImage}
        />
        <img
          src="/logos/mocklogo-2-white.svg"
          alt="Southside logo"
          className={styles.logoMidImage}
        />
        <img
          src="/logos/mocklogo-3-white.svg"
          alt="Swedish thaiboxing federation logo"
          className={styles.logoMidImage}
        />
        <img
          src="/logos/mocklogo-4-white.svg"
          alt="Kampsportstadion logo"
          className={styles.logoMidImage}
        />
        <img
          src="/logos/mocklogo-5-white.svg"
          alt="Southside logo"
          className={styles.logoMidImage}
        />
        <img
          src="/logos/mocklogo-6-white.svg"
          alt="Swedish thaiboxing federation logo"
          className={styles.logoMidImage}
        />
        <img
          src="/logos/mocklogo-7-white.svg"
          alt="Kampsportstadion logo"
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
  )
}