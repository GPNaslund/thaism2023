import FrontPageCard from "../fronpage-card/front_page_card";
import MobileNavbar from "../mobile_navbar/mobile_navbar";
import { useState } from 'react';
import MobileDayInfo from "../mobile_day_info/mobile_day_info";

export default function MobilePage() {
    const [isCardExpanded, setIsCardExpanded] = useState<boolean>(true);
    
    return (
        <div className={`w-full min-h-screen bg-gradient-to-r from-custom-green-1 to-custom-green-2 to-90%`}
            >
            <FrontPageCard isExpanded={isCardExpanded} onExpandChange={setIsCardExpanded}/>
            <MobileNavbar isCardExpanded={isCardExpanded} onExpandChange={setIsCardExpanded}/>
            <div className="flex flex-col h-full w-full">
                <div className={`w-3/4 mt-0 h-740:mt-6 pl-5`}>
                    <MobileDayInfo
                        day='TORSDAG 7/9'
                        time='15.00 - 20.00'
                        events={['+ Kvalifikationsmatcher', '+ Utställare']}
                    />
                    <MobileDayInfo
                        day='Fredag 8/9'
                        time='15.00 - 20.00'
                        events={['+ Kvalifikationsmatcher', '+ Utställare']}
                    />
                    <MobileDayInfo
                        day='Lördag 9/9'
                        time='15.00 - 22.00'
                        events={['+ Finaler', '+ Live DJ', '+ Utställare']}
                    />
                    <div>
                        <p className="sm:mt-5 mt-2 text-sm">Torvalla Sportcentrum</p>
                        <p className="text-sm">Torvallavägen, 136 46 Handen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}