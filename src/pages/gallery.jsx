import photo from "../assets/trimg.png";

const Gallery = () => {
    return (
        <div id="gallery" className='bg-custom-black flex flex-col mx-auto items-center h-screen w-screen'>
            <h1 className='text-custom-white font-seasons_r text-7xl md:text-8xl'>GALLERY<span className="text-custom-yellow">.</span></h1>
            <div className="w-[60vw] overflow-hidden group mt-10">
                <div className="-ml-96 -mt-20 grid -rotate-45 justify-center gap-4">
                    {[...Array(4)].map((_, row) => (
                        <div
                            key={row}
                            className={`flex space-x-4 transition-transform duration-1000 ease-in-out ${
                                row % 2 != 0 ? 'group-hover:translate-x-[-20%] ml-[445px]' : 'group-hover:translate-x-[20%]'
                            }`}
                        >
                            {[...Array(4)].map((_, col) => (
                                <img key={col} className="p-2" src={photo} width={500} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
