"use client";

import React from "react";
import {
  Users,
  ShieldCheck,
  Bandage,
  Thermometer,
  CheckCircle,
  Truck,
  Clock,
} from "lucide-react";

const tiles = [
  {
    id: "health",
    title: "Joyful Classrooms",
    desc: "Spaces that invite exploration, collaboration, and curiosity-driven learning.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "med",
    title: "Student Mentorship",
    desc: "Teachers personally guide emotional, social, and academic growth.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "staff",
    title: "Active Learning Corners",
    desc: "Creative, hands-on areas that make learning exciting and meaningful.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "security",
    title: "Safe, Happy Environment",
    desc: "A warm, respectful culture where every child feels valued and heard.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
];

const timeline = [
  { id: "drill", title: "Monthly drills & practice", Icon: CheckCircle },
  { id: "training", title: "Quarterly staff training", Icon: Users },
  { id: "meals", title: "Daily hygiene routines", Icon: Clock },
  { id: "transport", title: "Transport & driver checks", Icon: Truck },
];

const SafetyCareCreative: React.FC = () => {
  return (
    <section
      id="safety-care"
      className="relative bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('/Images/Academics/Psafety.png')`, // replace with your image path
      }}
    >

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-35">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Where Learning Meets{" "}
            <span className="relative inline-block">
              Creativity
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            A nurturing environment where children feel safe to explore, express, and grow — blending care with creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT STRIPE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl shadow-2xl bg-fuchsia-100 overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16"> 
  <h2 className="text-3xl sm:text-4xl font-poppins font-semibold text-gray-900 leading-tight tracking-wide">
    Confidence & Curiosity in Every Classroom
  </h2>

  <p className="mt-6 font-inter text-lg text-gray-700">
    In the Primary Wing, we create an environment where safety and creativity go hand in hand. Our classrooms are warm, structured, and inclusive — spaces where children feel comfortable expressing themselves and exploring new ideas freely.
  </p>

  <p className="mt-4 font-inter text-lg text-gray-700">
    Teachers act as mentors, guiding both academic and emotional growth. From active learning corners to thoughtful routines, every detail helps young learners build curiosity, confidence, and a deep sense of belonging.
  </p>
</div>

            </div>
          </div>

          {/* RIGHT GRID — overlay version */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tiles.map((t) => (
                <article
                  key={t.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg group h-64"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h3 className="text-lg font-poppins font-semibold tracking-wide">
                      {t.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default SafetyCareCreative;