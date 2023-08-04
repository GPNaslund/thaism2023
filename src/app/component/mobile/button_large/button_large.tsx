import React from 'react';

interface ButtonLargeProps {
    href?: string;
    onClick?: () => void;
    text: string;
}

const ButtonLarge: React.FC<ButtonLargeProps> = ({ href, text, onClick}) => {
    if (href) {
        return (
            <a href={href} className="rounded-full bg-zinc-200 text-custom-green-1 py-2 px-6 z-10 bg-opacity-50 text-sm font-medium w-36 text-center">
                {text}
            </a>
        )
    }

    if (onClick) {
        return (
            <button
              className="rounded-full bg-zinc-200 text-lime-300 py-2 px-6 z-10 bg-opacity-50 text-sm font-medium w-36 text-center"
              onClick={onClick}
            >
              {text}
            </button>
          );
    }

    return null;
}

export default ButtonLarge;