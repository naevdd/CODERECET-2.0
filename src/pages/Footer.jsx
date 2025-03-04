import React from 'react';
import logo from '../assets/CodeRecet_LOGO.png';
import vector from '../assets/Vector.png';
import twitter from '../assets/twitter logo.png';
import facebook from '../assets/facebook logo.png';
import discord from '../assets/Discord logo.png';
import linkedin from '../assets/Linkedin logo.png';
import github from '../assets/Github logo.png';
import tinkerhub from '../assets/Tinkerhub.png';
import iet from '../assets/IET.png';

function Footer() {
  return (
    <div className='bg-custom-black md:p-10 justify-center items-center flex '>
      <div className='bg-custom-yellow md:w-[1300px] md:h-[560px] rounded-2xl w-[380px] h-[510px]'>
        <div className='flex md:justify-start justify-center items-center md:pt-10 md:pl-20 md:h-[150px] h-[120px] pr-5'>
            <img src={logo} className='md:w-20 md:h-20 w-20 h-20'/>
        </div>
            <div className="w-128 h-[1px] bg-black md:mx-20 mx-30"></div>
        <div className='flex md:flex-row md:gap-96 md:justify-center flex-col gap-8 md:mx-auto md:h-[200px]'>
        <div className='justify-start flex flex-col md:w-[600px] gap-2 md:pl-20 md:pt-10 md:h-[230px] h-[200px]'>
            <div className=' flex flex-row md:pl-0 pl-4'>
            <span className='text-2xl font-poppins' >&gt;</span> 
                <div className='text-lg pl-4  text-[25px] font-poppins'>Home</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
                <span className='text-2xl font-poppins' >&gt;</span>
                <div className='text-lg pl-4  text-[25px] font-poppins'>About us</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
            <span className='text-2xl font-poppins' >&gt;</span>
                <div className='text-lg pl-4  text-[25px] font-poppins'>Events</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
                <span className='text-2xl font-poppins' >&gt;</span>
                <div className='text-lg pl-4  text-[25px] font-poppins'>Gallery</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
            <span className='text-2xl font-poppins' >&gt;</span>
                <div className='text-lg pl-4  text-[25px] font-poppins'>Our Team</div>
            </div>
        </div>
        <div className='flex justify-center mx-auto gap-4 items-center md:items-end md:flex-col flex-row ml-auto md:gap-6 md:h-[260px] h-[40px] '>
            <div className='hidden md:block text-2xl text-custom-black md:pr-10 font-poppins '>Hackathon organized by:</div>
            <div className='md:pr-20'>
                <img src={tinkerhub} className='w-40 h-auto'/>
            </div>
            <div className='md:pr-20'>
                <img src={iet} className='w-36 h-auto'/>
            </div>
        </div>
        </div>
        <div className="justify-start items-center flex flex-row md:gap-12 md:pl-20 md:pt-32 gap-6 pt-10 pl-8 md:h-[100px] h-[80px]">
            <div>
                <img src={twitter} className='transition filter hover:invert hover:brightness-200'/>
            </div>
            <div>
                <img src={facebook} className='transition filter hover:invert hover:brightness-200'/>
            </div>
            <div>
                <img src={discord} className='transition filter hover:invert hover:brightness-200'/>
            </div>
            <div>
                <img src={linkedin} className='transition filter hover:invert hover:brightness-200'/>
            </div>
            <div>
               <img src={github} className='transition filter hover:invert hover:brightness-200'/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
