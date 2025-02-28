import React from 'react';
import imgtop from '../assets/abtimgtop.png';
import imgbtm from '../assets/abtimgbtm.png';
import star from '../assets/star.svg'
import image from '../assets/trimg.png'

function AboutUs() {
  return (
    <div className="h-screen w-screen bg-[linear-gradient(to_bottom,#000000_100%,#565D60_9%)] relative grid grid-cols-12">
      
      {/* Content */}
      <div className="flex flex-row z-3 col-span-5 col-start-2 pt-5 relative">
        
        {/* Left text section */}
        <div className="flex flex-col mt-12 gap-2">
          <h1 className="text-custom-white text-5xl font-seasons_r">What is</h1>
          <h1 className="text-custom-yellow text-5xl font-seasons_r">Code ReCET?</h1>
          <h2 className="text-custom-white text-[17px] font-satoshi_v mt-3 w-[500px]">
            Code ReCET is a 36-hour hackathon that blends innovation, creativity, and pure coding bliss! 
            Conducted collaboratively by TinkerHub CET and IET on campus CET, this hackathon is set to ignite 
            the tech spirit at College of Engineering, Trivandrum.
          </h2>
          <h1 className='text-white font-seasons_r text-3xl mt-4 mb-4'>Benefits <span className='text-custom-yellow'>you get</span></h1>

            <ul className='flex flex-col w-full gap-2'>
                <li className='w-full'>
                    <div className='flex flex-row w-full'>
                        <img src={star}/>
                        <div className='p-2 text-white border-[1px] border-custom-yellow bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] rounded-md w-[380px]'>
                            <h2 className='font-seasons_r text-[15px]'>HUGE PRIZE POOL</h2>
                            <h2 className='font-satoshi_v text-[14px]'>Amazing cash prizes await those who seek innovation!</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex flex-row w-full'>
                        <img src={star}/>
                        <div className='p-2 text-white border-[1px] border-custom-yellow bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] rounded-md w-[380px]'>
                            <h2 className='font-seasons_r text-[15px]'>GOODIES!</h2>
                            <h2 className='font-satoshi_v text-[14px]'>Stickers, T-Shirts, and more fascinating prizes!</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex flex-row w-full'>
                        <img src={star}/>
                        <div className='p-2 text-white border-[1px] border-custom-yellow bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] rounded-md w-[380px]'>
                            <h2 className='font-seasons_r text-[15px]'>CODE & CHILL</h2>
                            <h2 className='font-satoshi_v text-[14px]'>Write code, chill with the others and have fun!</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex flex-row w-full'>
                        <img src={star}/>
                        <div className='p-2 text-white border-[1px] border-custom-yellow bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] rounded-md w-[380px]'>
                            <h2 className='font-seasons_r text-[15px]'>RESUME BOOST</h2>
                            <h2 className='font-satoshi_v text-[14px]'>Boost your resume with a new project! Better if you win!</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex flex-row w-full'>
                        <img src={star}/>
                        <div className='p-2 text-white border-[1px] border-custom-yellow bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] rounded-md w-[380px]'>
                            <h2 className='font-seasons_r text-[15px]'>FREE FOOD</h2>
                            <h2 className='font-satoshi_v text-[14px]'>Would you say no?</h2>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
        
        {/* Right side */}
        <div className='col-span-5 col-end-11 relative w-full h-full'>
          
            {/* background image */}
            <div className='w-[800px] h-full absolute'>
              <img
                src={imgtop}
                className="absolute w-[500px] z-1"
              />
              <img
                src={imgtop}
                className="absolute w-[600px] z-0 mt-56 ml-52"
              />
            </div>
            {/* right side image */}
            <div className='relative z-20 mt-40 ml-40'>
              <div className='w-80 p-5 rounded-lg border-2 border-custom-yellow bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] flex flex-col justify-center items-center'>
                <div className=''>
                  <img src={image} className='w-full'/>
                </div>
                
                <div className='font-seasons_r mt-5 text-[18px] flex flex-col items-center'>
                  <h2 className='text-custom-white'>REFRESH <span className='text-custom-yellow'>IDEAS</span></h2>
                  <h2 className='text-custom-white'>REBOOT <span className='text-custom-yellow'>SOLUTIONS</span></h2>
                </div>
              </div>
            </div>
            <div className='absolute z-10 mt-5 ml-40'>
              <div className='w-80 p-5 rounded-lg border-2 border-custom-yellow bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] flex flex-col justify-center items-center'>
                <div className=''>
                  <img src={image} className='w-full'/>
                </div>
                
                <div className='font-seasons_r mt-5 text-[18px] flex flex-col items-center'>
                  <h2 className='text-custom-white'>REFRESH <span className='text-custom-yellow'>IDEAS</span></h2>
                  <h2 className='text-custom-white'>REBOOT <span className='text-custom-yellow'>SOLUTIONS</span></h2>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
