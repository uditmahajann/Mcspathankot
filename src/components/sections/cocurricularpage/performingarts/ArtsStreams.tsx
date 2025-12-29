"use client";
import React from "react";

const players = [
  {
    title: "DANCE",
    desc: "Movement, control, rhythm — where confidence grows through expression and discipline.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "MUSIC",
    desc: "Voice, melody, harmony — a space to listen, create, feel, and perform with intention.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "THEATRE",
    desc: "Character, voice, storytelling — building presence, empathy, and fearless communication.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "VISUAL ARTS",
    desc: "Design, arts, experimentation — where creativity takes shape through skill and ideas.",
    img: "/Images/Campus/NewHostel.JPG",
  },
];

const ArtStreams = () => {
  return (
    <section className="my-10 py-16 bg-white">
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 font-raleway font-extrabold">
            Performing Arts {" "}
            <span className="relative inline-block">
              is a Language
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
              />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            A place where creativity feels at home.
          </p>
        </div>
  
      <div className="grid md:grid-cols-2 gap-10 px-20">
        {players.map((p, i) => (
          <div key={i} className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img src={p.img} className="w-full h-145 object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-[#C9FF6C] font-poppins tracking-wide text-2xl font-bold">{p.title}</h3>
              <p className="mt-1 font-inter opacity-90">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ArtStreams;






