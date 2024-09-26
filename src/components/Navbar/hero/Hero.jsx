import React from "react";
import Video1 from "/assets/video1.mp4";
import Video2 from "/assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual build tools for
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Software Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools.Get started today and turn your imagination
        into immersive reality
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="hover:bg-gradient-to-r from-orange-500 to-orange-800  py-3 px-4 mx-3 rounded-md border"
        >
          Start For Free
        </a>
        <a
          href="#"
          className="hover:bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md border"
        >
          Documantation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tags.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
