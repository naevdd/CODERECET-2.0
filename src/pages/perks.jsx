import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const PerkCard = ({ title, description, image, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlippedThisHover, setHasFlippedThisHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isInView = useInView(cardRef, {
    margin: "0px 0px -50px 0px",
    amount: 0.3,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    if (isInView && !isVisible) {
      setIsFlipped(true);
      setIsVisible(true);
    } else if (!isInView && isVisible) {
      setIsFlipped(false);
      setIsVisible(false);
    }
  }, [isInView, isMobile, isVisible]);

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
      <h3 className="text-custom-white font-seasons_r text-[36px] lg:text-[40px] mb-4 h-[40px] flex items-center mt-4 sm:mt-6">
        {title}
      </h3>

      <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] flex justify-center items-center mb-4">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <p className="text-custom-white font-satoshi_v text-[16px] sm:text-[18px] flex-grow flex items-center px-2 text-center">
        {description}
      </p>
    </div>
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-[450px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] perspective-1000 cursor-pointer"
      onHoverStart={() => {
        if (!isMobile && !hasFlippedThisHover) {
          setIsFlipped((prev) => !prev);
          setHasFlippedThisHover(true);
        }
      }}
      onHoverEnd={() => {
        if (!isMobile) {
          setHasFlippedThisHover(false);
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: isMobile ? index * 0.1 : 0,
      }}
    >
      <motion.div
        className="relative w-full h-full rounded-[12px] shadow-lg border-2 border-custom-yellow"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: "tween",
          duration: 1.2, 
          ease: "easeInOut",
          delay: isMobile ? index * 0.1 : 0,
        }}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <CardFace />
        <CardFace isBack={true} />
      </motion.div>
    </motion.div>
  );
};

export default PerksSection;
