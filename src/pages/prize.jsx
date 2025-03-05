import first from '../assets/1.png';
import second from '../assets/2.png';
import third from '../assets/3.png';
import gift1 from '../assets/gift1.png';
import gift2 from '../assets/gift2.png';
import gift from '../assets/Gifts.png';

const Prize = () => {
    return (
        <div className='bg-custom-black border-custom-gray flex flex-col gap-y-9 items-center justify-start min-h-screen'>
            <div className='text-custom-yellow font-seasons_r text-7xl md:text-8xl'>PRIZES</div>

            {/* Flex container for prizes */}
            <div className='flex flex-wrap border-custom-gray md:border-t md:border-b md:flex-nowrap items-center justify-center md:h-[800px] w-full'>

                {/* SECOND PRIZE - Always first in nowrap, moves to second in wrap */}
                <div className='h-full order-2 md:order-1 pb-14 px-5 flex flex-col items-center justify-center space-y-7'>
                    <img src={second} 
                        alt="second" 
                        className="mt-32 hover:-translate-y-3  
                            hover:drop-shadow-[0_0_90px_rgba(122,114,111,1)] hover:brightness-100 
                            transition-all duration-700 ease-in-out"/>
                    <div className='font-seasons_r text-white text-3xl md:text-5xl'>SECOND</div>
                    <div className='text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl'>Rs.20000</div>
                </div>

                {/* FIRST PRIZE - Moves to first position in wrap, middle in nowrap */}
                <div className='h-full order-1 md:order-2 border-custom-gray md:border-l md:border-r pb-14 px-5 flex flex-col items-center justify-center space-y-7'>
                    <img src={first} alt="first" className="md:-mt-32 hover:-translate-y-3 transition-all duration-700 hover:filter hover:drop-shadow-[0px_0px_30px_rgba(215,159,24,1)] filter drop-shadow-[0px_0px_5px_rgba(215,159,24,0.5)]" />
                    <div className="font-seasons_r text-white text-3xl md:text-5xl">FIRST</div>
                    <div className="text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl">Rs.40000</div>
                </div>

                {/* THIRD PRIZE - Always last */}
                <div className='h-full order-3 md:order-3 border-custom-gray pb-14 flex flex-col items-center justify-center space-y-7'>
                    <img src={third} 
                        className="mt-32 drop-shadow-[0_0_30px_rgba(118,53,37,1)] 
                            hover:drop-shadow-[0_0_150px_rgba(255,0,0,0.8)] 
                            transition-all duration-700 ease-in-out"/>
                    <div className='font-seasons_r text-white text-3xl md:text-5xl'>THIRD</div>
                    <div className='text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl'>Rs.15000</div>
                </div>

            </div>

            {/* Additional Content */}
            <div className='p-10 w-full flex items-center justify-center'>
            
                <div className='bg-custom-yellow w-[1250px] flex flex-col items-start p-5 md:px-14 md:pb-6 md:pt-10 rounded-lg md:rounded-3xl space-y-6 '>
                    <div className='font-seasons_r text-4xl md:text-6xl'>Is that all?</div>
                    <div className='flex md:flex-row items-start justify-start '>
                    <div className='text-2xl md:text-4xl font-satoshi_v text-custom-white w-full md:w-[75%]'>
                        Not at all! Everyone who gets selected gets Goodies! T-Shirts, stickers, you name it!
                    </div>
                    <div className=' w-24 md:w-[30%] md:flex md:flex-row justify-end -mt-20 md:-mt-36 md:-mr-36'>
                      <img src={gift} alt="gift" className="w-24 md:w-96"/>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Prize;
