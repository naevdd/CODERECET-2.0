export default function FigmaRegisterButton({ className = "" }) {
  const handleClick = () => {
    window.open("https://apply.devfolio.co/code-recet-2", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#c88d28] overflow-clip relative rounded-[10.8759px] w-full h-[44px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b07d20] ${className}`}
    >
      <div className="absolute font-seasons_r leading-[0] left-1/2 not-italic text-[20px] text-center text-[#0A0A0A] text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[normal] whitespace-pre">Register Now</p>
      </div>
      <div
        className="absolute w-[20px] h-[16px] right-[8%] translate-y-[-50%]"
        style={{ top: "calc(50% + 0.652722px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28 23"
        >
          <path
            d="M2 11.8971H26.7427M26.7427 11.8971L17.4642 2M26.7427 11.8971L17.4642 21.7942"
            stroke="#0A0A0A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.17531"
          />
        </svg>
      </div>
    </button>
  );
}
