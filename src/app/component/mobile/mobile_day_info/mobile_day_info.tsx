import localFont from "next/font/local";

interface MobileDayInfoProps {
    day: string;
    time: string;
    price: string;
    events: string;
}

const MobileDayInfo: React.FC<MobileDayInfoProps> = ({ day, time, events, price }) => {
    return (
        <div className={`mt-2 h-740:mt-8 h-950:mt-12`}>
        <p className={`text-2xl h-950:text-3xl font-bold`}>{day}</p>
        <p className={`text-xs h-950:text-lg`}>{time}</p>
        <p className={`text-xs h-950:text-lg`}>{price}</p>
        <p className={`ext-md h-950:text-lg`}>{events}</p>
    </div>
    )
}

export default MobileDayInfo;