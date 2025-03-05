const Gallery = () => {
    return (
        <div id="gallery" className='bg-custom-black p-8 flex flex-col items-center min-h-screen md:pt-20 pt-10'>
            <h1 className='text-custom-white font-seasons_r text-left text-4xl md:text-7xl'>FREQUENTLY <span className="text-custom-yellow">ASKED QUESTIONS</span>.</h1>
            <div className="hidden md:flex md:flex-row flex-col  my-auto items-center gap-1 group">
                <div className="bg-custom-yellow -skew-y-12 flex border-black border-[1.5px] shadow-2xl items-center z-10 rounded-lg w-[545px] h-[273px]">
                    <p className="font-seasons_r p-10 text-center text-6xl">No one really asked these questions.</p>
                </div>
                <div className="bg-custom-yellow -skew-y-12 flex border-black border-[1.5px] shadow-2xl md:-ml-96 items-center z-20 rounded-lg w-[545px] h-[273px]">
                    <p className="font-seasons_r p-10 text-center text-6xl">Are there any prerequisites for this hackathon?</p>
                </div>
                <div className="bg-custom-yellow -skew-y-12 flex border-black border-[1.5px] shadow-2xl md:-ml-96 items-center z-30 rounded-lg w-[545px] h-[273px]">
                    <p className="font-seasons_r p-10 text-center text-6xl">How many members can be there in a team?</p>
                </div>
                <div className="bg-custom-yellow -skew-y-12 flex border-black border-[1.5px] shadow-2xl md:-ml-96 items-center z-40 rounded-lg w-[545px] h-[273px]">
                    <p className="font-seasons_r p-10 text-center text-6xl">How many prizes can a team aquire?</p>
                </div>
                <div className="bg-custom-yellow -skew-y-12 flex border-black border-[1.5px] shadow-2xl md:-ml-96 items-center z-50 rounded-lg w-[545px] h-[273px]">
                    <p className="font-seasons_r p-10 text-center text-6xl">But I<span className="font-satoshi_v">'</span>ve never participated in a hackathon?</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
