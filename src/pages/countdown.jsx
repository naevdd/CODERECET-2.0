import React from "react";
import { useState, useEffect } from "react";

const countdown = () => {
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const calculateTimeLeft = () => {
    const targetDate = new Date(
      "July 18, " + new Date().getFullYear() + " 00:00:00"
    );
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: formatNumber(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="countdown" className="bg-custom-black px-3 lg:px-14">
      <div className="w-full flex justify-center items-center pt-20 pb-4">
        {/* <div
          className="apply-button"
          data-hackathon-slug="code-recet-2"
          data-button-theme="dark"
          style={{
            height: "44px",
            width: "192px",
            maxWidth: "100%",
          }}
        ></div> */}
      </div>

      <div className="w-full gap-20 flex flex-col">
        <div className="lg:mt-20 mt-16 px-8 lg:px-64">
          <h1
            className="font-satoshi_v text-custom-white text-center 
                    lg:text-5xl text-xl"
          >
            Build innovative products and challenge conventional ideas in this
            36-hour hackathon
          </h1>
        </div>
        <div className="bg-custom-yellow flex justify-center items-center rounded-xl mx-4 lg:mx-8 w-auto text-[#0A0A0A] h-40 sm:h-48 md:h-56 lg:h-72 mb-6">
          <div className="flex flex-row lg:space-x-9 space-x-2 lg:mb-4 mb-0 text-6xl lg:text-[230px] font-bebas_neue">
            <div className="text-center">
              <span>{timeLeft.days}</span>
              <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">
                DAYS
              </div>
            </div>
            <span>:</span>
            <div className="text-center">
              <span>{timeLeft.hours}</span>
              <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">
                HOURS
              </div>
            </div>
            <span>:</span>
            <div className="text-center">
              <span>{timeLeft.minutes}</span>
              <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">
                MINUTES
              </div>
            </div>
            <span>:</span>
            <div className="text-center">
              <span>{timeLeft.seconds}</span>
              <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">
                SECONDS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default countdown;
