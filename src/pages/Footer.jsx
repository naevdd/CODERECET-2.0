import React from 'react';
import logo from '../assets/CodeRecet_LOGO.png';
import vector from '../assets/Vector.png';
import twitter from '../assets/twitter logo.png';
import facebook from '../assets/facebook logo.png';
import discord from '../assets/Discord logo.png';
import linkedin from '../assets/Linkedin logo.png';
import github from '../assets/Github logo.png';
import tinkerhub from '../assets/tinkerhub_black.png';
import iet from '../assets/iet.png';

function Footer() {
  return (
    <div className='bg-custom-black w-screen md:p-10 justify-center items-center flex '>
      <div className='bg-custom-yellow md:w-[1500px] h-[720px] rounded-2xl w-[380px]'>
        <div className='flex md:justify-start justify-center items-center md:pt-16 md:pl-20 h-[220px] pr-5'>
            <img src={logo} className='w-28 h-28'/>
        </div>
            <div className="w-128 h-[1px] bg-black md:mx-20 mx-30"></div>
        <div className='flex md:flex-row md:gap-20 flex-col gap-16 '>
        <div className='justify-start flex flex-col  gap-6 md:pl-20 md:pt-10'>
            <div className=' flex flex-row md:pl-0 pl-4'>
            <span className='text-2xl font-bold' ></span> 
                <div className='text-lg pl-4  text-[25px] font-semibold'>Home</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
                <span className='text-2xl font-bold' ></span>
                <div className='text-lg pl-4  text-[25px] font-semibold'>About us</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
            <span className='text-2xl font-bold' ></span>
                <div className='text-lg pl-4  text-[25px] font-semibold'>Events</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
                <span className='text-2xl font-bold' ></span>
                <div className='text-lg pl-4  text-[25px] font-semibold'>Gallery</div>
            </div>
            <div className=' flex flex-row md:pl-0 pl-4'>
            <span className='text-2xl font-bold' ></span>
                <div className='text-lg pl-4  text-[25px] font-semibold'>Our Team</div>
            </div>
        </div>
        <div className='flex justify-center items-center md:items-end md:flex-col flex-row ml-auto md:gap-6'>
            <div className='text-2xl text-custom-black md:pr-20 '>Hackathon organized by:</div>
            <div className='md:pr-20'>
                <img src={tinkerhub} className='sm:'/>
            </div>
            <div className='md:pr-20'>
                <img src={iet}/>
            </div>
        </div>
        </div>
        <div className="justify-start flex flex-row md:gap-12 md:pl-20 md:pt-32 gap-6 pt-10 pl-8 ">
            <div>
                <img src={twitter}/>
            </div>
            <div>
                <img src={facebook}/>
            </div>
            <div>
                <img src={discord}/>
            </div>
            <div>
                <img src={linkedin}/>
            </div>
            <div>
               <img src={github}/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
