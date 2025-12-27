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
    title: "Personal Mentorship",
    desc: "Temperature & wellness checks with clear guidance for parents.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "med",
    title: "Academic Support",
    desc: "Supervised medical room with trained staff to care for children safely.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "staff",
    title: "Digital Awareness",
    desc: "All staff complete regular safety training and child-protection checks.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "security",
    title: "Wellbeing & Confidence",
    desc: "Controlled access and monitored play areas ensure child safety.",
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
        backgroundImage: `url('/Images/Academics/Msafety.png')`, // replace with your image path
      }}
    >

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-35">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Personal Guidance &{" "}
            <span className="relative inline-block">
              Growth
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            A supportive environment where pre-teens gain confidence, responsibility, and a deeper love for learning.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT STRIPE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl shadow-2xl bg-pink-200 overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16"> 
  <h2 className="text-3xl sm:text-4xl font-poppins font-semibold text-gray-900 leading-tight tracking-wide">
    A Sense of Belonging in Growing Years
  </h2>

  <p className="mt-6 font-inter text-lg text-gray-700">
    The Middle Wing provides a caring environment where students transition smoothly into adolescence with confidence. Our teachers and mentors work closely with every learner, offering academic guidance and personal support when it matters most.
  </p>

  <p className="mt-4 font-inter text-lg text-gray-700">
    Safety extends beyond the classroom — from digital awareness sessions to emotional wellness programs, we nurture responsibility, balance, and empathy in every student as they discover who they are and what they can become.
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