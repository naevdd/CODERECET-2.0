import gif from '../assets/cube_float1 1.gif'
import logo from '../assets/logo.png'

function LandingPage() {
    const words=["CODE RECET","CODE RECET","CODE RECET","CODE RECET","CODE RECET","CODE RECET","CODE RECET"]
    return (
        <div className='h-screen bg-custom-black'>
            <div className='justify-center flex'>
                <div className='flex h-full gap-64 absolute'>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                    <div className='w-[1px] bg-custom-gray'></div>
                </div>
            </div>
            <div className='flex justify-center'>
                <nav className="flex mt-10 w-full">
                    <div className="flex items-center w-48 ml-10 space-x-2 cursor-pointer">
                        <img src={logo} width={100} height={100}/>
                    </div>
                    <div className='w-full'>
                    <ul className="flex w-full text-xl font-satoshi_v space-x-20 text-white font-medium justify-center items-center">
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
                    
                    <button className='bg-custom-yellow w-48 h-12 rounded-full mr-10'>
                        <p className='text-white font-satoshi_v text-xl'>REGISTER</p>
                    </button>
                </nav>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-white mt-24 font-seasons_r text-8xl text-center
                '>CET'S BIGGEST <br></br> <span className='text-custom-yellow'>HACKATHON</span> IS BACK.</h1>
                <button className='bg-custom-yellow border-2 mt-5 z-40 border-white w-48 h-12 rounded-full'>
                    <p className='text-white text-center font-satoshi_v text-xl'>REGISTER NOW</p>
                </button>
                <img className='-mt-48 z-20' src={gif} width={748} height={748}/>
                <div className='h-20 -mt-[18rem] w-full z-10 bg-custom-black inline-flex flex-nowrap border-2 border-l-0 border-r-0 border-custom-gray'>
                <div className="overflow-hidden relative">
                <div className="flex animate-infinite-scroll space-x-16 sm:space-x-36 p-2">
                {words.concat(words).map((word, index) => (
                <li
                    key={index}
                    className="text-sm sm:text-lg lg:text-6xl list-none text-custom-gray font-seasons_r whitespace-nowrap"
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
