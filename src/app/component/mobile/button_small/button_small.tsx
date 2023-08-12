import React from 'react';

interface ButtonSmallProps {
    href?: string;
    onClick?: () => void;
    text: string;
}

const ButtonSmall: React.FC<ButtonSmallProps> = ({ href, text, onClick}) => {
    if (href) {
        return (
            <a href={href} className="rounded-full bg-black text-custom-green-1 py-2 px-6 z-10 text-xs font-medium w-20 text-center">
                {text}
            </a>
        )
    }

    if (onClick) {
        return (
            <button
              className="rounded-full bg-black text-custom-green-1 py-2 px-6 z-10 bg-opacity-50 text-xs font-medium w-20 text-center"
              onClick={onClick}
            >
              {text}
            </button>
          );
    }

    return null;
}

export default ButtonSmall;