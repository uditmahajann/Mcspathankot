"use client";

import type React from "react";
import { Sun, Play, Users, HeartHandshake, BookOpen } from "lucide-react";

type Pillar = {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  summary: string;
  image: string;
  accent?: string;
};

const PILLARS: Pillar[] = [
  {
    id: "montessori",
    icon: Sun,
    title: "Montessori-led Discovery",
    summary:
      "Hands-on materials and thoughtful environments help children focus, build independence & enjoy learning.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-green-300 to-emerald-400",
  },
  {
    id: "playbased",
    icon: Play,
    title: "Play-based & Intentional",
    summary:
      "Purposeful play builds language, motor, and social-emotional skills through fun, engaging activities.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-yellow-300 to-amber-400",
  },
  {
    id: "teachers",
    icon: Users,
    title: "Experienced, Caring Teachers",
    summary:
      "Warm, trained educators who observe, extend and celebrate every child’s small wins every day.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-sky-300 to-indigo-400",
  },
  {
    id: "wellbeing",
    icon: HeartHandshake,
    title: "Nurturing & Safe Environment",
    summary:
      "A secure, caring space with steady routines where children feel safe to explore and grow.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-pink-300 to-rose-400",
  },
  {
    id: "curriculum",
    icon: BookOpen,
    title: "Enriched Early Curriculum",
    summary:
      "A balanced blend of language, art, music, and nature-based learning prepares kids for the next stage.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-violet-300 to-purple-500",
  },
];

const WhyKindergarten: React.FC = () => {
  return (
    <section
      id="why-kindergarten"
      className="relative py-30 bg-amber-100"
    >
      {/* Monkey image positioned absolutely */}
      <img
        src="/Images/Academics/Monkey.png"
        alt="Cute monkey illustration"
        className="absolute -bottom-25 right-0 w-95 sm:w-115 lg:w-135 z-20 pointer-events-none select-none"
      />
      <img
        src="/Images/Academics/Bird.png"
        alt="Cute monkey illustration"
        className="absolute w-90 -left-7.5 top-5 z-20 pointer-events-none select-none"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Why Our Kindergarten?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            A child-first philosophy that blends Montessori principles with joyful, play-based learning — designed to nurture curiosity,
            independence and social-emotional growth.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition transform hover:-translate-y-1"
                aria-labelledby={`pillar-${p.id}`}
              >
                {/* Image top */}
                <div className="h-60 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  {/* chip + icon */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 rounded-lg items-center justify-center text-white shrink-0 bg-linear-to-br ${p.accent}`}
                      aria-hidden
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <h3
                        id={`pillar-${p.id}`}
                        className="text-lg font-poppins font-semibold text-gray-900 tracking-wide"
                      >
                        {p.title}
                      </h3>
                      <p className="mt-2 font-inter text-gray-700">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKindergarten;
