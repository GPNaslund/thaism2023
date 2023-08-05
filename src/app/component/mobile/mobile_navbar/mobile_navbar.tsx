import Image from 'next/image'
import ButtonSmall from '../button_small/button_small'

interface NavBarProps {
  isCardExpanded: boolean;
  onExpandChange: (expanded: boolean) => void;
}

const MobileNavbar: React.FC<NavBarProps> = ({ isCardExpanded, onExpandChange }) => {
  const handleClick = () => {
    if (isCardExpanded) {
      onExpandChange(false);
    } else {
      onExpandChange(true);
    }
  }

  return (
    <nav className="grid grid-cols-6 w-full p-3 items-center">
      <div className="flex flex-row gap-5 col-span-3">
        <div onClick={() => {
          handleClick()
        }}>
          <img
            src="/backwards-icon.svg"
            alt="Backwards icon"
            width="35"
            height="35"
            className={`transition-transform transform duration-500 ${isCardExpanded ? '-rotate-90' : 'rotate-90'
              }`}
          />
        </div>
        <img 
            src="/email-icon.svg"
            alt="Email icon"
            width="35"
            height="35"
        />
      </div>
      <div className="col-start-4 col-span-3 justify-self-end">
        <ButtonSmall
          text="KÖP BILJETT"
          href="nada"
        />
      </div>
    </nav>
  )
}

export default MobileNavbar;