import { motion } from "framer-motion";
import { useState } from "react";
import gif from "../assets/cube_float1 1.gif";

const PerksSection = () => {
  const perks = [
    {
      title: "REGISTER",
      description:
        "Sign up your team now. Share your innovative ideas to solve real problems.",
      image: gif,
    },
    {
      title: "BUILD",
      description:
        "Code your solution using cutting-edge tech. Overcome challenges and bring your idea to life.",
      image: gif,
    },
    {
      title: "CONNECT",
      description:
        "Collaborate with students across majors. Network with peers who can boost your project.",
      image: gif,
    },
    {
      title: "GROW",
      description:
        "Level up your skills with expert feedback. Top teams earn prizes and resume credentials.",
      image: gif,
    },
  ];

  return (
    <section className="relative overflow-hidden flex justify-center items-center py-10 mb-[12px] px-4 sm:px-[22px]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] border-custom-gray opacity-50"></div>
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-8 sm:px-0">
        {perks.map((perk, index) => (
          <PerkCard
            key={index}
            title={perk.title}
            description={perk.description}
            image={perk.image}
          />
        ))}
      </div>
    </section>
  );
};

const PerkCard = ({ title, description, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const backgroundColor =
    title === "REGISTER"
      ? "bg-custom-yellow"
      : "bg-[linear-gradient(209deg,#565D60_9%,transparent_50%,rgba(86,93,96,0)_100%)]";

  
  const CardFace = ({ isBack = false }) => (
    <div
      className={`absolute w-full h-full flex flex-col items-center p-6 rounded-[10px] ${backgroundColor}`}
      style={{
        transform: isBack ? "rotateY(180deg)" : "rotateY(0deg)",
        backfaceVisibility: "hidden",
      }}
    >
      <h3 className="text-custom-white font-seasons_r text-[40px] lg:text-[40px] mb-4 h-[40px] flex items-center mt-4 sm:mt-6">
        {title}
      </h3>

      <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] flex justify-center items-center mb-4">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <p className="text-custom-white font-satoshi_v text-[20px] flex-grow flex items-center px-2 text-center">
        {description}
      </p>
    </div>
  );

  return (
    <motion.div
      className="relative w-full h-[450px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] perspective-1000 cursor-pointer"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full rounded-[12px] shadow-lg border-2 border-custom-yellow "
        animate={{ rotateY: isFlipped ? 360 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <CardFace />

        {/* Back */}
        <CardFace isBack={true} />
      </motion.div>
    </motion.div>
  );
};

export default PerksSection;
