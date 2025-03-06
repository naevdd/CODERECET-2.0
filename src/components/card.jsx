import { useState } from "react";
import { useIsDesktop } from "../hooks/media"; // Adjust the path as needed

const Card = ({ defaultText, flippedText, extraClasses = "" }) => {
  const isDesktop = useIsDesktop();
  const [flipped, setFlipped] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return;
    if (!isDesktop) {
      setFlipped(prev => !prev);
      return;
    }
    
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
      onClick={handleClick}
      className={`
        cursor-pointer transform transition-all ease-in-out duration-700
        ${flipped ? "bg-white md:-translate-y-52" : "bg-custom-yellow"}
        ${animating? "md:animate-rotateRight" : ""}
        flex border-black border-[1.5px] md:-skew-y-12 my-10 shadow-2xl 
        items-center rounded-lg w-[300px] h-[150px] md:w-[545px] md:h-[273px] ${extraClasses}
        ${isDesktop 
          ? "md:hover:-translate-y-52"
          : "hover:!scale-110 hover:!blur-0 md:!scale-100 md:!blur-0 md:hover:!scale-100 group-hover:scale-90 group-hover:blur-[5px]" }
      `}
    >
      <p className="font-seasons_r mx-auto p-10 text-center text-2xl md:text-6xl">
        {flipped ? flippedText : defaultText}
      </p>
    </div>
  );
};

export default Card;
