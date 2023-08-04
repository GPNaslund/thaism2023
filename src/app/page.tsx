'use client'

import React, {useState, useEffect } from 'react';
import MobilePage from './component/mobile/mobile-page/mobile_page'
import DesktopPage from './component/desktop/desktop_page/desktop_page';


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <main>
      {isMobile ? <MobilePage/> : <DesktopPage />}
    </main>
  )
}
