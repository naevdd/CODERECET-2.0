import React from 'react'
import { useState,useEffect } from 'react';

const countdown = () => {

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    const calculateTimeLeft = () => {
        const targetDate = new Date("March 21, " + new Date().getFullYear() + " 00:00:00");
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
        }
        return timeLeft;
      };

      
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    
    return (
        <div className='bg-custom-black px-3 lg:px-14 min-h-screen'>
            <div className='w-full gap-20 flex flex-col'>
                <div className='lg:mt-64 mt-36 px-8 lg:px-64'>
                    <h1 className='font-satoshi_v text-white text-center 
                    lg:text-5xl text-xl'>
                        Build innovative products and challenge conventional
                        ideas in this 36-hour hackathon
                    </h1>
                </div>
                <div className='bg-custom-yellow flex justify-center items-center rounded-xl
                 mx-auto w-full text-black h-24 lg:h-72'>
                <div className="flex flex-row lg:space-x-9 space-x-2 lg:mb-4 text-6xl lg:text-[230px] font-bebas_neue">
                    <div className="text-center">
                    <span>{timeLeft.days}</span>
                    <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">DAYS</div>
                    </div>
                    <span>:</span>
                    <div className="text-center">
                    <span>{timeLeft.hours}</span>
                    <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">HOURS</div>
                    </div>
                    <span>:</span>
                    <div className="text-center">
                    <span>{timeLeft.minutes}</span>
                    <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">MINUTES</div>
                    </div>
                    <span>:</span>
                    <div className="text-center">
                    <span>{timeLeft.seconds}</span>
                    <div className="lg:text-2xl text-xs lg:-mt-6 font-satoshi_v">SECONDS</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default countdown