import first from '../assets/1.png';
import second from '../assets/2.png';
import third from '../assets/3.png';

const Prize = () => {
    return (
        <div className='bg-custom-black flex flex-col gap-y-9 items-center justify-start h-full md:h-screen'>
        <div className='text-custom-yellow font-seasons_r text-7xl md:text-8xl'>PRIZES</div>
        <div className='flex flex-row items-center justify-center flex-wrap md:flex-nowrap'>
            <div className='h-full border-y border-r border-custom-gray pb-14 px-5 flex flex-col items-center justify-center space-y-7'> 
            <img src={second} 
     alt="first" 
     className="mt-32 hover:-translate-y-3  
                hover:drop-shadow-[0_0_90px_rgba(122,114,111,1)] hover:brightness-125 
                transition-all duration-700 ease-in-out"
/>

                <div className='font-seasons_r text-white text-3xl md:text-5xl'>SECOND</div>
                <div className='text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl'>Rs.20000</div>
                </div>
            <div className='h-full border border-custom-gray pb-14 flex flex-col items-center justify-center space-y-7'> 
                <img src={first} alt="second" className='md:-mt-32 animate-float '   style={{ filter: "drop-shadow(0px 0px 30px rgba(215, 159, 24, 1))" }} />
                <div className='font-seasons_r text-white text-3xl md:text-5xl'>FIRST</div>
                <div className='text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl'>Rs.40000</div>
                </div>
            <div className='h-full border-y border-l border-custom-gray pb-14  flex flex-col items-center justify-center space-y-7 '>
            <img src={third} 
     alt="third" 
     className="mt-32 drop-shadow-[0_0_80px_rgba(118,53,37,1)] 
                hover:drop-shadow-[0_0_150px_rgba(255,0,0,1)] 
                
                transition-all duration-700 ease-in-out"
/>

                 <div className='font-seasons_r text-white text-3xl md:text-5xl'>THIRD</div>
                 <div className='text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl'>Rs.20000</div>
                 </div>
        </div>
        
        </div>
    );
    }
export default Prize;