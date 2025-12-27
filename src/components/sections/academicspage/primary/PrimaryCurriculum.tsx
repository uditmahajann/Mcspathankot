// CurriculumOverview.tsx
"use client";

import React from "react";
import { BookOpen, Calculator, Leaf, Palette, Dumbbell, Heart } from "lucide-react";

type Domain = {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  summary: string;
  activities: string[];
  outcome: string;
  color: string; // gradient classes
};

const DOMAINS: Domain[] = [
  {
    id: "language",
    icon: BookOpen,
    title: "Language & Communication",
    summary:
      "Learning about Reading, writing, and storytelling to build fluency and expression.",
    activities: ["Reading circles and storytelling", "Vocabulary games and discussions", "Journal writing and short poems"],
    outcome: "Improved fluency, confidence, and creative expression in both speech and writing.",
    color: "from-amber-300 to-amber-500",
  },
  {
    id: "numeracy",
    icon: Calculator,
    title: "Mathematical Thinking",
    summary:
      "Fun, practical math problems with counting, sorting and pattern play to build number sense.",
    activities: ["Math puzzles and challenges", "Measurement projects", "Geometry through art"],
    outcome: "Better problem-solving, reasoning, and practical understanding of math concepts.",
    color: "from-green-300 to-emerald-500",
  },
  {
    id: "motor",
    icon: Leaf,
    title: "Environmental Awareness",
    summary:
      "Learning to care for nature and our surroundings.",
    activities: ["Mini-garden projects", "Weather tracking", "Clean-campus drives"],
    outcome: "Early awareness of sustainability and responsible citizenship.",
    color: "from-sky-300 to-indigo-400",
  },
  {
    id: "emotional",
    icon: Palette,
    title: "Creative Arts & Expression",
    summary:
      "Art, music, dance, and drama encourage imagination and teamwork.",
    activities: ["Art & craft", "Theatre performances", "Music and rhythm sessions"],
    outcome: "Stronger imagination, fine motor skills, and confidence through self-expression.",
    color: "from-pink-300 to-rose-500",
  },
  {
    id: "creative",
    icon: Dumbbell,
    title: "Physical Development",
    summary:
      "Building strength, coordination, and teamwork.",
    activities: ["Team sports", "Yoga & stretching", "Dance-based games"],
    outcome: "Improved coordination, stamina, teamwork, and physical confidence.",
    color: "from-violet-300 to-purple-500",
  },
  {
    id: "nature",
    icon: Heart,
    title: "Values & Life Skills",
    summary:
      "Developing empathy, responsibility, and cooperation.",
    activities: ["Morning reflections", "Kindness role plays", "Class duties"],
    outcome: "Empathy, cooperation, and accountability in everyday behavior.",
    color: "from-lime-300 to-lime-500",
  },
];

const CurriculumOverview: React.FC = () => {
  return (
    <section id="curriculum-overview" className="py-30 bg-lime-100 -mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Building Foundations with Curiosity & Care
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            An engaging and interdisciplinary curriculum that strengthens literacy, numeracy, creativity, and character — nurturing confident, lifelong learners.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAINS.map((d) => {
            const Icon = d.icon;
            return (
              <article
                key={d.id}
                className="relative bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                aria-labelledby={`domain-${d.id}`}
              >
                {/* icon & title */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 rounded-lg items-center justify-center text-white shrink-0 bg-linear-to-br ${d.color}`}
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    <h3 id={`domain-${d.id}`} className="text-lg font-semibold text-gray-900">
                      {d.title}
                    </h3>
                    <p className="mt-2 font-inter text-sm text-gray-600">{d.summary}</p>
                  </div>
                </div>

                {/* activities (small list) */}
                <div className="mt-4 font-inter">
                  <div className="text-xs font-medium text-gray-700 mb-2">Sample activities</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {d.activities.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 text-primarydark">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* outcome */}
                <div className="mt-4 border-t pt-4 flex items-center justify-between font-inter">
                  <div className="text-sm text-gray-700">
                    <div className="text-xs font-medium text-gray-500">Learning outcome</div>
                    <div className="mt-1 text-sm font-medium">{d.outcome}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        {/* <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Want the full weekly curriculum and sample lesson plans?
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/docs/sample-kindergarten-curriculum.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium shadow"
            >
              View Full Curriculum
            </a>
            <a
              href="/admissions/schedule-visit"
              className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50"
            >
              Book a Classroom Visit
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CurriculumOverview;
