import localFont from "next/font/local";

interface MobileDayInfoProps {
    day: string;
    time: string;
    events: string[];
}

const MobileDayInfo: React.FC<MobileDayInfoProps> = ({ day, time, events }) => {
    return (
        <div className={`mt-0 h-740:mt-5 h-950:mt-12`}>
        <p className={`text-2xl h-950:text-3xl font-bold`}>{day}</p>
        <p className={`text-xs h-950:text-lg`}>{time}</p>
        {events.map((event, index) => (
            <p key={index} className={`ext-md h-950:text-lg`}>{event}</p>
        ))}
    </div>
    )
}

export default MobileDayInfo;