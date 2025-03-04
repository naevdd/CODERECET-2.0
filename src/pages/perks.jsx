import { motion } from "framer-motion";
import { useState } from "react";

const PerksSection = () => {
  const perks = [
    { title: "REGISTER", description: "Sign up your team now. Share your innovative ideas to solve real problems.", image: "PLACEHOLDER_GIF" },
    { title: "BUILD", description: "Code your solution using cutting-edge tech. Overcome challenges and bring your idea to life.", image: "PLACEHOLDER_GIF" },
    { title: "CONNECT", description: "Collaborate with students across majors. Network with peers who can boost your project.", image: "PLACEHOLDER_GIF" },
    { title: "GROW", description: "Level up your skills with expert feedback. Top teams earn prizes and resume credentials.", image: "PLACEHOLDER_GIF" },
  ];

  return (
    <section className="relative w-screen overflow-hidden flex justify-center items-center py-10 mb-[12px] px-[22px]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] border-t-[2px] border-custom-gray opacity-50"></div>
      {/* Cards Container */}
      <div className="w-full max-w-[1440px] flex flex-wrap justify-center gap-[2vw]">
        {perks.map((perk, index) => (
          <PerkCard key={index} title={perk.title} description={perk.description} image={perk.image} />
        ))}
      </div>
    </section>
  );
};

const PerkCard = ({ title, description, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const backgroundColor = title === "REGISTER" ? "bg-custom-yellow" :
    "bg-[linear-gradient(209deg,#565D60_9%,transparent_50%,rgba(86,93,96,0)_100%)]";

  return (
    <motion.div
      className="relative w-[23vw] h-[42vw] max-w-[332px] max-h-[607px] 
      min-w-[250px] min-h-[450px] perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >

      <motion.div
        className="relative w-full h-full rounded-[1.5vw] shadow-lg border-[2px] border-custom-yellow"
        animate={{ rotateY: isFlipped ? 360 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full flex flex-col justify-between items-center text-center 
          px-[22px] py-[20%] rounded-[1.5vw] ${backgroundColor}`}
          style={{ backfaceVisibility: "hidden", gap: "clamp(20px, 2.5vw, 32px)" }}
        >
          <h3 className="text-custom-white font-normal font-seasons_r leading-none text-[clamp(24px,4vw,48.77px)] h-[clamp(40px, 5vw, 60px)] flex items-center justify-center">
            {title}
          </h3>

          <div className="w-[clamp(150px,15vw,244px)] h-[clamp(150px,15vw,244px)] 
            bg-gray-700 flex justify-center items-center rounded-lg">
            {image === "PLACEHOLDER_GIF" ? <span className="text-white text-sm">GIF Here</span> : <img src={image} alt={title} className="w-full h-full object-contain" />}
          </div>

          <p className="text-custom-white font-normal font-satoshi_v text-[clamp(18px,1.8vw,20px)] flex-grow flex items-start text-center">
            
            {description}
          </p>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full flex flex-col justify-between items-center text-center 
          px-[22px] py-[20%] rounded-[1.5vw] ${backgroundColor}`}
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", gap: "clamp(20px, 2.5vw, 32px)" }}
        >
          <h3 className="text-custom-white font-normal font-seasons_r leading-none text-[clamp(24px,4vw,48.77px)] h-[clamp(40px, 5vw, 60px)] flex items-center justify-center">
            {title}
          </h3>

          <div className="w-[clamp(150px,15vw,244px)] h-[clamp(150px,15vw,244px)] 
            bg-gray-700 flex justify-center items-center rounded-lg">
            {image === "PLACEHOLDER_GIF" ? <span className="text-white text-sm">GIF Here</span> : <img src={image} alt={title} className="w-full h-full object-contain" />}
          </div>

          <p className="text-[#EAEAEA] font-normal font-satoshi_v text-[clamp(18px,1.8vw,20px)] flex-grow flex items-start text-center">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PerksSection;
