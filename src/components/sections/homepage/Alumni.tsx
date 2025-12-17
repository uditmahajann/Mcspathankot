"use client";

import React, { useEffect, useRef, useState } from "react";
import CtaButton from "../../interface/CtaButton";

// Alumni avatars (10 total)
const alumniList = [
  { name: "Priya S.", img: "/Images/People/SampleStudent.png" },
  { name: "Rohan M.", img: "/Images/People/SampleStudent.png" },
  { name: "Ayesha K.", img: "/Images/People/SampleStudent.png" },
  { name: "Vikram D.", img: "/Images/People/SampleStudent.png" },
  { name: "Sana P.", img: "/Images/People/SampleStudent.png" },
  { name: "Neha T.", img: "/Images/People/SampleStudent.png" },
  { name: "Arjun B.", img: "/Images/People/SampleStudent.png" },
  { name: "Ishaan M.", img: "/Images/People/SampleStudent.png" },
  { name: "Tanya G.", img: "/Images/People/SampleStudent.png" },
  { name: "Devika R.", img: "/Images/People/SampleStudent.png" },
];

const CIRCLE_RADIUS = 180;

const Alumni: React.FC = () => {
  const [angleOffset, setAngleOffset] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      setAngleOffset((prev) => (prev + 0.2) % 360); // Adjust speed here
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="relative w-full py-10 sm:py-16 px-5 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT: Text */}
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-playpen font-medium mb-8 sm:mb-10 leading-8 sm:leading-14">
            Celebrating Our Legacy–
            <div className="container">
              <span className="relative inline-block">
                The MCS Alumni
                <img
                  src="/Images/Doodles/LineGreen.png"
                  alt="Underline"
                  className="w-[75%] absolute -bottom-6 sm:-bottom-8"
                />
              </span>
            </div>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl md:max-w-2xl">
            Our alumni network is a proud thread in our school’s story —
            spanning continents and careers.
            <br />
            <br />
            Join this vibrant circle to reconnect with classmates, share your
            journey, and inspire future generations through mentorship and
            collaboration.{" "}
            <span className="font-semibold italic">
              We honor your achievements and invite you to remain a vital part
              of our ever-growing family.
            </span>
          </p>
          <div className="mt-6 sm:mt-8 flex items-center justify-center">
            <CtaButton text="Join Our Alumni Network" href="" />
          </div>
        </div>

        {/* RIGHT: Circular Avatars Layout */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Circle Layout - Desktop */}
          <div
            className="relative hidden lg:block"
            style={{
              width: 2 * CIRCLE_RADIUS + 120,
              height: 2 * CIRCLE_RADIUS + 120,
            }}
          >
            {/* Center Logo */}
            <img
              src="/Images/Logos/McsLogo.png"
              alt="Center Logo"
              className="absolute left-1/2 top-1/2 w-50 h-50 object-contain -translate-x-1/2 -translate-y-1/2 z-10"
            />

            {/* Avatars in Orbit */}
            {alumniList.map((alumni, idx) => {
              const total = alumniList.length;
              const angleDeg = (360 / total) * idx + angleOffset;
              const angleRad = (angleDeg * Math.PI) / 180;
              const x = CIRCLE_RADIUS * Math.cos(angleRad);
              const y = CIRCLE_RADIUS * Math.sin(angleRad);

              return (
                <div
                  key={alumni.name}
                  className="absolute group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src={alumni.img}
                    alt={alumni.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-xs text-gray-700 font-semibold rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    {alumni.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile Version - Just Grid */}
          <div className="flex flex-wrap justify-center gap-4 lg:hidden">
            {alumniList.map((alumni) => (
              <div key={alumni.name} className="relative group">
                <img
                  src={alumni.img}
                  alt={alumni.name}
                  className="w-20 h-20 rounded-full object-cover border border-white shadow-md transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-xs text-gray-700 font-semibold rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                  {alumni.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;