import photo from "../assets/trimg.png";
import first from "../assets/coderecet-1.jpg";
import second from "../assets/coderecet-2.jpg";
import third from "../assets/coderecet-3.jpg";
import img1 from "../assets/coderecet-img1.jpg";
import img2 from "../assets/coderecet-img2.jpg";
import img3 from "../assets/coderecet-img3.jpg";
import img4 from "../assets/coderecet-img4.jpg";
import img5 from "../assets/coderecet-img5.jpg";
import img6 from "../assets/coderecet-img6.jpg";
import img7 from "../assets/coderecet-img7.jpg";
import img8 from "../assets/coderecet-img8.jpg";

const Gallery = () => {

    const image_array=[first, second, third, img1, img2, img3, img4, img5, img6, img7, img8]

    return (
        <div id="gallery" className='bg-custom-black flex flex-col mx-auto items-center h-screen'>
            <h1 className='text-custom-white font-seasons_r text-7xl md:text-8xl'>GALLERY<span className="text-custom-yellow">.</span></h1>
            <div className="w-[80vw] rounded-2xl overflow-hidden group mt-10">
                <div className="-ml-[425px] -mt-[230px] grid -rotate-45 justify-center gap-4">
                    <div
                        className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[20%]"
                    >
                        <img className="p-2" src={img1} width={600} />
                        <img className="p-2" src={img2} width={600} />
                        <img className="p-2" src={img3} width={600} />
                        <img className="p-2" src={img5} width={600} />
                    </div>
                    <div
                        className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[-20%] ml-[445px]"
                    >
                        <img className="p-2" src={first} width={600} />
                        <img className="p-2" src={second} width={600} />
                        <img className="p-2" src={first} width={600} />
                        <img className="p-2" src={first} width={600} />
                    </div>
                    <div
                        className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[20%]"
                    >
                        <img className="p-2" src={img2} width={600} />
                        <img className="p-2" src={third} width={600} />
                        <img className="p-2" src={img1} width={600} />
                        <img className="p-2" src={img2} width={600} />
                    </div>
                    <div
                        className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[-20%] ml-[445px]"
                    >
                        <img className="p-2" src={first} width={600} />
                        <img className="p-2" src={img5} width={600} />
                        <img className="p-2" src={first} width={600} />
                        <img className="p-2" src={first} width={600} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
