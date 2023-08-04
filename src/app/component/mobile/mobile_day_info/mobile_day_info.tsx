interface MobileDayInfoProps {
    day: string;
    time: string;
    events: string[];
}

const MobileDayInfo: React.FC<MobileDayInfoProps> = ({ day, time, events }) => {
    return (
        <div className={`mt-0 h-740:mt-5 h-950:mt-12`}>
        <p className={`text-xl h-950:text-2xl font-bold`}>{day}</p>
        <p className={`text-xs h-950:text-sm`}>{time}</p>
        {events.map((event, index) => (
            <p key={index} className={`ext-sm h-950:text-md`}>{event}</p>
        ))}
    </div>
    )
}

export default MobileDayInfo;