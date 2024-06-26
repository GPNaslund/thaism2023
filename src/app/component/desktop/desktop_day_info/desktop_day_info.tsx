import React from "react"

interface DesktopDayInfoProps {
    day: string;
    price: string;
    time: string;
    events: string;
    borders?: boolean;
}

const DesktopDayInfo: React.FC<DesktopDayInfoProps> = ({ day, time, events, borders = false, price }) => {
    return (
        <div className={`flex flex-col items-center py-10 px-0 xl:px-24 xl:py-0 ${borders ? 'border-y-2 border-x-0 xl:border-y-0 xl:border-x-2 border-black' : '' }`}>
            <p className="text-4xl font-bold">{day}</p>
            <p className="text-3xl">{time}</p>
            <p className="text-3xl">{price}</p>
            <p className="text-3xl mt-5">{events}</p>
        </div>
    )
}

export default DesktopDayInfo;