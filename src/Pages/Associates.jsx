import React, { useRef, useEffect } from "react";
import mapVideo from "../assets/vedio.mp4"; 

export default function MapPointerPolished() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }, []);

  return (
    /* 1. height: auto rakhein taaki video apne ratio ke hisaab se space le */
    <div className="relative w-full overflow-hidden" >
      
      <div className="w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          /* 2. 'object-contain' se video poori dikhegi, upar-niche se kategi nahi */
          className="w-full h-auto max-h-[100vh] object-contain"
        >
          <source src={mapVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
}