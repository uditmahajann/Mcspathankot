import React from 'react';
import { PlayCircle, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[screen] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Videos/Mcs2023.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fullscreen Indigo + Black Overlay */}
      <div
        className="
          absolute top-0 left-0 h-full w-[60%] z-10 pointer-events-none
          bg-linear-to-r from-black/90 via-indigo-950 to-transparent
        "
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 5%, transparent 100%)',
          maskImage: 'linear-gradient(to right, black 5%, transparent 100%)',
        }}
      />

      {/* Optional Stronger Overlay on Left */}
      <div
        className="
          absolute top-0 left-0 h-full w-[20%] z-10 pointer-events-none
          bg-linear-to-r from-black/90 to-indigo-950
        "
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 5%, transparent 100%)',
          maskImage: 'linear-gradient(to right, black 5%, transparent 100%)',
        }}
      />

      {/* Top-to-Bottom Overlay */}
      <div
        className="
          absolute top-0 left-0 h-full w-full z-10 pointer-events-none
          bg-linear-to-t from-black/90 to-indigo-950
        "
        style={{
          WebkitMaskImage: 'linear-gradient(to top, black 5%, transparent 100%)',
          maskImage: 'linear-gradient(to top, black 5%, transparent 100%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full px-4 md:px-12 lg:px-20 xl:px-30">
        <div className="flex flex-col max-w-xl text-white py-20">
          <img
            src="Images/Logos/McsLogoB.png"
            alt="MCS Logo"
            className="w-36 invert mb-10"
            loading="lazy"
          />
          <h1 className="text-3xl text-primary mb-4 font-outfit font-medium">
            Welcome to{' '}
            <span className="inline-block text-white font-poppins font-bold md:text-5xl lg:text-6xl drop-shadow-lg">
              Montessori Cambridge School
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-200">
            An Edifice of Pedagogical Academic Excellence
          </p>
          <div>
            <a
              href="#explore"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-secondarydark hover:text-white text-black font-semibold font-inter text-base rounded-full transition duration-300 ease-in-out"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Explore Campus
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;