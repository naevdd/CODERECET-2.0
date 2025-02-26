import { useState } from 'react';
import gif from '../assets/cube_float1 1.gif'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);
    const words=["CODE RECET","CODE RECET","CODE RECET","CODE RECET","CODE RECET","CODE RECET","CODE RECET"]
    return (
        <div className='h-screen bg-custom-black'>
            <div className='justify-center flex'>
                <div className='flex h-full gap-24 lg:gap-64 absolute'>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='sm:block hidden w-[1px] bg-custom-gray'></div>
                    <div className='sm:block hidden w-[1px] bg-custom-gray'></div>
                </div>
            </div>
            <div className='flex justify-center'>
                <nav className="flex mt-10 w-full">
                    <div className="lg:w-48 z-10 lg:ml-10 ml-2 cursor-pointer">
                        <img src={logo} width={100} height={100}/>
                    </div>
                    <div className='w-full'>
                    <ul className="sm:flex hidden w-full lg:text-xl font-satoshi_v space-x-2 lg:space-x-20 text-white font-medium justify-center items-center">
                        <li className=''>
                            About
                        </li>
                        <li>
                            Timeline
                        </li>
                        <li>
                            Gallery
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-block sm:hidden text-white z-50 focus:outline-none"
                        >
                        {isOpen ? (
                            <img src={close} className='w-8 -mt-5 mr-[22px] bg-white rounded-sm'/>
                        ) : (
                            <img src={menu} className='w-8 -mt-5 mr-[22px] bg-white rounded-sm'/>
                        )}
                    </button>
                    <button className='sm:block hidden bg-custom-yellow lg:w-48 lg:h-12 rounded-full mr-10'>
                        <p className='text-white font-satoshi_v lg:text-xl'>REGISTER</p>
                    </button>
                    {isOpen && (
                        <div className="sm:hidden p-4 top-0 h-svh w-full absolute z-40 bg-gray-50 shadow-lg">
                        <ul className="space-y-4 flex flex-col p-10 border-2 border-black rounded-2xl text-xl font-satoshi_v text-gray-700">
                            <li className='text-center'>
                            About
                            </li>
                            <li className='text-center'>
                            Timeline
                            </li >
                            <li className='text-center'>
                            Gallery
                            </li>
                            <li className='text-center'>
                            Contact
                            </li>
                            <button className='sm:hidden mx-auto rounded-full'>
                                <p className='text-custom-yellow font-seasons_r font-extrabold text-lg'>REGISTER</p>
                            </button>
                        </ul>
                        </div>
                    )}
                </nav>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-white z-10 lg:mt-24 mt-20 font-seasons_r text-5xl lg:text-8xl text-center
                '>CET<span className='font-satoshi_v'>'</span>S BIGGEST <br></br> <span className='text-custom-yellow'>HACKATHON</span> IS BACK.</h1>
                <button className='bg-custom-yellow border-2 mt-5 z-0 border-white w-36 h-10 lg:w-48 lg:h-12 rounded-full'>
                    <p className='text-white text-center font-satoshi_v lg:text-xl'>REGISTER NOW</p>
                </button>
                <img className='lg:-mt-48 -mt-20 z-20' src={gif} width={748} height={748}/>
                <div className='lg:h-20 absolute bottom-0 -mt-16 lg:-mt-[18rem] w-full z-10 bg-custom-black inline-flex flex-nowrap border-2 border-l-0 border-r-0 border-custom-gray'>
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
    )
}

export default LandingPage
