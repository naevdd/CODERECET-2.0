import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import gif from "../assets/cube_float1 1.gif";
import logo from "../assets/logo.png";
import menu from "../assets/menu_white.svg";
import close from "../assets/close_white.svg";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const words = [
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
    "CODE RECET",
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="landing">
      <div className="min-h-screen bg-custom-black">
        <div className="justify-center flex">
          <div className="flex h-full gap-24 lg:gap-64 absolute">
            <div className="w-[1px] bg-custom-gray"></div>
            <div className="w-[1px] bg-custom-gray"></div>
            <div className="w-[1px] bg-custom-gray"></div>
            <div className="w-[1px] bg-custom-gray"></div>
            <div className="sm:block hidden w-[1px] bg-custom-gray"></div>
            <div className="sm:block hidden w-[1px] bg-custom-gray"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <nav className="flex mt-10 w-full z-50">
            <div className="lg:w-48 lg:ml-10 ml-3 -mt-2 absolute cursor-pointer">
              <img src={logo} width={100} height={100} />
            </div>
            <div className="w-full">
              <ul className="sm:flex hidden w-full lg:text-xl font-satoshi_v space-x-2 lg:space-x-20 text-white justify-center items-center">
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="countdown"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-block sm:hidden text-white z-50 focus:outline-none"
            >
              <div className="w-10 h-10 bg-custom-black rounded-sm flex items-center justify-center mr-[20px] -mt-1">
                <img src={isOpen ? close : menu} className="w-6 h-6" />
              </div>
            </button>
            <div
              className={`sm:hidden fixed top-0 left-0 h-screen w-[60%] bg-custom-black z-40 shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul className="space-y-6 flex flex-col p-8 text-white font-satoshi_v text-xl">
                <li className="text-left">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    to="countdown"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Timeline
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <button className="rounded-full self-start ml-2 mt-4">
                  <p className="text-custom-yellow font-seasons_r font-extrabold text-lg">
                    REGISTER
                  </p>
                </button>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center">
          <h1
            className="text-white z-10 lg:mt-32 mt-20 font-seasons_r text-5xl lg:text-8xl text-center
                  "
          >
            CET<span className="font-satoshi_v">'</span>S BIGGEST <br></br>{" "}
            <span className="text-custom-yellow">HACKATHON</span> IS BACK.
          </h1>
          <div className="hidden sm:block z-30 mt-5 lg:mt-10">
            <div
              className="apply-button"
              data-hackathon-slug="code-recet-2"
              data-button-theme="dark"
              style={{
                height: "44px",
                width: "312px",
              }}
            ></div>
          </div>
          <img
            className="lg:-mt-32 -mt-20 z-20"
            src={gif}
            width={748}
            height={748}
          />
          <div className="sm:hidden mt-[1%] z-30">
            <div
              className="apply-button"
              data-hackathon-slug="code-recet-2"
              data-button-theme="dark"
              style={{
                height: "44px",
                width: "312px",
                margin: "0 auto",
              }}
            ></div>
          </div>
          {/* <div className="mt-6 mb-10 flex justify-center items-center w-full px-4 overflow-x-hidden">
            <div
              className="apply-button"
              data-hackathon-slug="code-recet-2"
              data-button-theme="dark"
              style={{
                height: "44px",
                width: "100%",
                maxWidth: "192px",
              }}
            ></div>
          </div> */}
          <div className="lg:h-20 absolute bottom-0 -mt-16 lg:-mt-[18rem] w-full z-10 bg-custom-black inline-flex flex-nowrap border-2 border-l-0 border-r-0 border-custom-gray">
            <div className="overflow-hidden relative">
              <div className="flex animate-infinite-scroll space-x-16 sm:space-x-36 p-2">
                {words.concat(words).map((word, index) => (
                  <li
                    key={index}
                    className="text-xl sm:text-lg lg:text-6xl list-none text-custom-gray font-seasons_r whitespace-nowrap"
                  >
                    {word}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
