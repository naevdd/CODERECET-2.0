import React from 'react';

export default function RefreshReboot() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-10 md:ml-[50px] ml-0">
  {/* Left Side - Image */}
  <div className="md:w-1/2 w-full">
    <img 
      src="./src/assets/refresh.png" 
      alt="Hackathon"
      className="w-[600px] h-auto mr-0"
    />
  </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 w-full p-8 ml-0 mt-0">
        <h1 className="text-white z-10 font-seasons_r text-5xl text-left mt-0 ">
          REFRESH <span className="text-yellow-500">IDEAS.</span><br />
          REBOOT <span className="text-yellow-500">SOLUTIONS.</span>
        </h1>
        <p className="mt-6 text-gray-300 rounded-2xl text-s font-satoshi_v ">
        Great innovations start with fresh ideas. At <span>CodeRecet 2.0</span>, we challenge you to think beyond limits, break conventional patterns, and build solutions that create an impact. This hackathon isn’t just about writing code—it’s about transforming ideas into reality, solving real-world problems, and collaborating with like-minded innovators. Whether you're a beginner or an experienced coder, this is your platform to experiment, learn, and push boundaries.        </p>
        <p className="mt-6 text-gray-300 rounded-2xl text-s font-satoshi_v">
        <span>Rebooting solutions</span> means improving, adapting, and innovating with the latest technology. Here, creativity meets problem-solving as teams work on cutting-edge projects, tackle challenges, and turn ambitious ideas into functional solutions. It’s your chance to redefine what’s possible.            </p>
        <p className="mt-6 text-gray-300 rounded-2xl text-s font-satoshi_v">
        The future is built by those who dare to innovate. <span>Are you ready to refresh ideas and reboot the world?</span> Join <span>CodeRecet 2.0</span> and be part of something extraordinary!    </p>   </div>
    </div>
  );
}
