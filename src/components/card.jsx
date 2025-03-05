import { useState } from "react";

const Card = ({ defaultText, flippedText, extraClasses = "" }) => {
  const [flipped, setFlipped] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return;
    setAnimating(true);
    
    setTimeout(() => {
      setFlipped(prev => !prev);
    }, 250);
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  
  return (
    <div
      className={`
        cursor-pointer transform transition-transform ease-in-out -skew-y-12 duration-700 md:hover:-translate-y-52
        flex border-black border-[1.5px] my-10 shadow-2xl items-center z-10 rounded-lg md:w-[545px] md:h-[273px]
        ${flipped ? "bg-white" : "bg-custom-yellow"} ${flipped ? "md:-translate-y-52" : "none"} ${animating ? "animate-rotateRight" : ""} ${extraClasses}
      `}
      onClick={handleClick}
    >
      <p className="font-seasons_r mx-auto p-10 text-center text-2xl md:text-6xl">
        {flipped ? flippedText : defaultText}
      </p>
    </div>
  );
};

export default Card;
