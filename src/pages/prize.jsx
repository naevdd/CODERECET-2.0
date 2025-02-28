import first from '../assets/1.png';
import second from '../assets/2.png';
import third from '../assets/3.png';

const Prize = () => {
    return (
        <div className='bg-custom-black flex flex-col gap-y-9 items-center justify-start h-full '>
        <div className='text-custom-yellow font-seasons_r text-7xl md:text-8xl'>PRIZES</div>
        <div className='flex flex-row items-center justify-center flex-wrap md:flex-nowrap md:h-[800px] w-full '>
            <div className='h-full order-2 md:border-y md:border-r  border-custom-gray pb-14 px-5 flex flex-col items-center justify-center space-y-7'> 
            <img src={second} 
     alt="first" 
     className="mt-32 hover:-translate-y-3  
                hover:drop-shadow-[0_0_90px_rgba(122,114,111,1)] hover:brightness-100 
                transition-all duration-700 ease-in-out"
/>

                <div className='font-seasons_r text-white text-3xl md:text-5xl'>SECOND</div>
                <div className='text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl'>Rs.20000</div>
                </div>
                <div className="order-1 group h-full md:border border-custom-gray pb-14 flex flex-col items-center justify-center space-y-7 transition-all duration-700 
    hover:filter hover:drop-shadow-[0px_0px_30px_rgba(215,159,24,1)] filter drop-shadow-[0px_0px_5px_rgba(215,159,24,0.5)] ">
    <img src={first} alt="second" className="md:-mt-32  hover:-translate-y-3 transition-all duration-700 " />
    <div className="font-seasons_r text-white text-3xl md:text-5xl ">FIRST</div>
    <div className="text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl">Rs.40000</div>
</div>

            <div className='order-3 h-full md:border-y md:border-l border-custom-gray pb-14  flex flex-col items-center justify-center space-y-7 '>
            <img src={third} 
     
     className="mt-32 drop-shadow-[0_0_30px_rgba(118,53,37,1)] 
                hover:drop-shadow-[0_0_150px_rgba(255,0,0,0.8)] 
                
                transition-all duration-700 ease-in-out"
/>

                 <div className='font-seasons_r text-white text-3xl md:text-5xl'>THIRD</div>
                 <div className='text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl'>Rs.15000</div>
                 </div>
        </div>
        <div className='p-10 w-full flex items-center justify-center'>
        <div className='bg-custom-yellow w-[1250px] flex flex-col items-start p-5 md:p-10 rounded-lg space-y-5'>
        <div className='font-seasons_r text-4xl md:text-6xl'>Is that all?</div>
        <div className='text-2xl md:text-4xl font-satoshi_v text-custom-white md:w-[75%]'>Not at all! Every one who gets selected gets Goodies!  T-Shirts, stickers, you name it!</div>
        </div>
        </div>
        </div>
        
    );
    }
export default Prize;