"use client"; 

import Image from "next/image";
import { useEffect, useState} from "react";

import { servicesImages } from "./servicesData";
import Description from "./description";



const ServicesCarousel = () => {

  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === servicesImages.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(servicesImages.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

return (
<div className="grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl ">

    <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
        {servicesImages.map((pict, idx) =>(
            <div key={idx} className={`${
                idx === activeImage
                    ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out" 
                    : "hidden"
                     }`}  
             >
                <Image
                src={pict.src}
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
                />

            </div>
        ))}
    </div>
    <Description 
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
    />
</div>


);

};

export default ServicesCarousel;