import React from "react";
import imgtop from "../assets/abtimgtop.png";
import arrow from "../assets/btnarrow.svg";
import star from "../assets/star.svg";
import image from "../assets/trimg.png";
import gif from "../assets/Code recet.gif";

function AboutUs() {
  return (
    <div
      id="about"
      className="min-h-screen w-screen bg-custom-black border-custom-gray border-b relative flex flex-col lg:grid lg:grid-cols-12 lg:p-6 lg:pr-20 lg:pl-10 overflow-hidden max-w-full"
    >
      {/* Left Text Section */}
      <div className="w-full lg:col-span-5 lg:col-start-2 pt-10 p-4 pl-6 lg:pl-0 ">
        <h1 className="text-custom-white text-5xl font-seasons_r">What is</h1>
        <h1 className="text-custom-yellow text-5xl font-seasons_r">
          Code ReCET <span className="text-custom-white">?</span>
        </h1>
        <h2 className="text-custom-white text-[17px] pr-4 font-satoshi_v mt-3 w-[350px] lg:w-[500px]">
          Code ReCET is a 36-hour hackathon that blends innovation, creativity,
          and pure coding bliss! Conducted collaboratively by TinkerHub CET and
          IET on campus CET, this hackathon is set to ignite the tech spirit at
          College of Engineering, Trivandrum.
        </h2>

        <h1 className="text-white font-seasons_r text-3xl mt-6 mb-4">
          Benefits <span className="text-custom-yellow">you get</span>.
        </h1>

        <ul className="flex flex-col gap-3">
          {[
            {
              title: "HUGE PRIZE POOL",
              desc: "Amazing cash prizes await those who seek innovation!",
            },
            {
              title: (
                <>
                  GOODIES<span className="font-satoshi_v">?</span>
                </>
              ),
              desc: "Stickers, T-Shirts, and more fascinating prizes!",
            },
            {
              title: (
                <>
                  CODE<span className="font-satoshi_v"> & </span>CHILL
                </>
              ),
              desc: "Write code, chill with the others and have fun!",
            },
            {
              title: (
                <>
                  RESUME BOOST<span className="font-satoshi_v">!</span>
                </>
              ),
              desc: "Boost your resume with a new project! Better if you win!",
            },
            {
              title: (
                <>
                  FREE FOOD<span className="text-custom-red">?</span>
                </>
              ),
              desc: "Would you say no?",
            },
          ].map((item, index) => (
            <li key={index} className="flex flex-row items-start gap-3">
              <img src={star} className="w-6 h-6 mt-1" />
              <div
                className="p-2 text-white border border-custom-yellow 
                bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] rounded-md lg:w-[380px] w-[300px]"
              >
                <h2 className="font-seasons_r text-[15px]">{item.title}</h2>
                <h2 className="font-satoshi_v text-[14px]">{item.desc}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Images and Register Section */}
      <div className="lg:col-span-5 lg:col-start-8 relative flex w-full mt-28 lg:mt-0 pb-4 -ml-4 lg:ml-0 mb-2 lg:mb-0 justify-center items-center">
        {/* Background Images */}
        <div className="absolute w-[500px] lg:w-[800px] min-h-full">
          <img
            src={imgtop}
            className="absolute w-[400px] lg:w-[500px] -mt-36 lg:mt-0 z-1"
          />
          <img
            src={imgtop}
            className="absolute w-[370px] lg:w-[600px] mt-28 lg:mt-56 ml-36 lg:ml-52 z-0"
          />
        </div>

        {/* Floating GIF */}
        <div className="absolute z-40 w-24 mr-[272px] mt-[210px]">
          <img src={gif} />
        </div>

        {/* Card Section */}
        <div className="relative flex items-center">
          {/* Front Card */}
          <div className="relative z-20  lg:ml-[46px]">
            <div
              className="w-80 p-5 rounded-lg border-2 border-custom-yellow 
                bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] 
                flex flex-col justify-center items-center shadow-lg"
            >
              <img src={image} className="w-full" />

              <div className="font-seasons_r mt-5 mb-5 text-[18px] flex flex-col items-center">
                <h2 className="text-custom-white">
                  REFRESH <span className="text-custom-yellow">IDEAS</span>
                </h2>
                <h2 className="text-custom-white">
                  REBOOT <span className="text-custom-yellow">SOLUTIONS</span>
                </h2>
              </div>

              <button className="flex items-center p-3 rounded-lg bg-custom-yellow font-seasons_r text-2xl hover:bg-yellow-700 hover:scale-110 transition-all ease-in-out">
                Register Now <img src={arrow} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Background Yellow Box */}
          <div
            className="absolute z-10 w-80 h-[460px] rounded-lg bg-custom-yellow 
              -translate-y-8 translate-x-7 opacity-100 lg:ml-[46px]"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
