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
    icon: BookOpen,
    title: "Rigorous Academics & Skill Application",
    summary:
      "Learning deepens through inquiry, projects, and critical reflection.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-green-300 to-emerald-400",
  },
  {
    id: "playbased",
    icon: Play,
    title: "Career Readiness Programs",
    summary:
      "Exposure to diverse subjects helps students discover interests and goals.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-yellow-300 to-amber-400",
  },
  {
    id: "teachers",
    icon: Users,
    title: "Leadership & Collaboration",
    summary:
      "House systems, clubs, and councils nurture communication and teamwork.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-sky-300 to-indigo-400",
  },
  {
    id: "wellbeing",
    icon: HeartHandshake,
    title: "Values-led Guidance",
    summary:
      "Life skills sessions and mentoring build emotional strength and ethical awareness.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-pink-300 to-rose-400",
  },
  {
    id: "curriculum",
    icon: Sun,
    title: "Holistic Assessment",
    summary:
      "Beyond marks, we focus on progress, participation, and personal growth.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-violet-300 to-purple-500",
  },
];

const WhyKindergarten: React.FC = () => {
  return (
    <section
      id="why-kindergarten"
      className="relative py-25 bg-amber-200"
    >
      {/* Monkey image positioned absolutely */}
      <img
        src="/Images/Academics/SeniorWhy.png"
        alt="Cute monkey illustration"
        className="absolute -bottom-12.5 right-0 w-95 sm:w-115 lg:w-160 z-20 pointer-events-none select-none"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Why Our Secondary Wing?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            At this stage, students evolve into independent thinkers — guided to apply knowledge, lead with empathy, and prepare for their future aspirations.
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
