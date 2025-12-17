"use client";
import React from "react";

const EVENTS = [
  {
    title: "Annual Performing Arts Showcase",
    caption: "A celebration of dance, music, and theatre, bringing the entire school community together.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Classical Music Recital",
    caption: "Solo and ensemble performances highlight voice, rhythm, and instrumental mastery.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Theatre Production Night",
    caption: "Script, direction, staging, and acting — students bring stories to life under the spotlight.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Dance Festival",
    caption: "Classical, contemporary, and fusion — creativity and expression in movement.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Inter-School Cultural Competitions",
    caption: "Students perform, represent, compete, and collaborate beyond the school stage.",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Art & Stage Exhibition",
    caption: "A curated showcase of costumes, props, set design, and backstage creative work.",
    img: "/Images/Campus/NewHostel.JPG",
  },
];

const PerformingArtsShowcase = () => {
  return (
    <section className="w-full py-20 md:py-25 bg-[#0B0B0B] text-white">
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">PERFORMANCES & PRODUCTIONS</h2>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A year-round calendar of showcases, festivals, and staged performances gives students real platforms to
          express, collaborate, and shine.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS.map((event, i) => (
          <div key={i} className="group bg-white relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={event.img}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              alt={event.title}
            />
            <div className="p-5">
              <h3 className="text-xl font-poppins tracking-wide font-semibold text-gray-900">{event.title}</h3>
              <p className="mt-2 font-inter text-base text-gray-600 leading-relaxed">{event.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformingArtsShowcase;
