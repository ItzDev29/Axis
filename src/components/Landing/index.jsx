import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

export default function Home() {
  const videoRef = useRef(null);

  const slider = useRef(null);
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
  }, []);

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="flex justify-center items-center h-screen"
    >
      <div className="relative items-center w-full h-full">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-20 text-white z-10">
          <img
            src="/images/axis24ogocenter.png"
            alt="Image"
            className="w-100 h-80 pb-14"
          />
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/video/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-130 h-100 mt-55 pt-2"
          >
            <source src="/video/brain.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <img src="/images/hand.png" alt="Image" className="w-45 h-80" />
        </div>
      </div>
    </motion.main>
  );
}
