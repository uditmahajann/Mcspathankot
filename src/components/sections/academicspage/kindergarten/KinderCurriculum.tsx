// CurriculumOverview.tsx
"use client";

import React from "react";
import { BookOpen, Hash, Activity, Users, Music, TreePalm } from "lucide-react";

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
    title: "Language & Literacy",
    summary:
      "Stories, songs and early phonics that spark vocabulary, listening and emergent writing.",
    activities: ["Story circles", "Rhymes & phonics games", "Emergent writing corners"],
    outcome: "Stronger vocabulary, listening skills and confidence with early literacy.",
    color: "from-amber-300 to-amber-500",
  },
  {
    id: "numeracy",
    icon: Hash,
    title: "Early Numeracy",
    summary:
      "Hands-on experiences with counting, sorting and pattern play to build number sense.",
    activities: ["Counting games", "Sorting & pattern trays", "Simple number songs"],
    outcome: "Comfortable with quantities, simple patterns and early mathematical thinking.",
    color: "from-green-300 to-emerald-500",
  },
  {
    id: "motor",
    icon: Activity,
    title: "Motor Skills & Play",
    summary:
      "Fine and gross motor development through play, construction and movement activities.",
    activities: ["Finger painting", "Play dough", "Outdoor obstacle play"],
    outcome: "Improved hand coordination, balance and self-care independence.",
    color: "from-sky-300 to-indigo-400",
  },
  {
    id: "emotional",
    icon: Users,
    title: "Social & Emotional Learning",
    summary:
      "Guided interactions that teach empathy, turn-taking and emotional vocabulary.",
    activities: ["Role play", "Circle-time sharing", "Feelings games"],
    outcome: "Better self-regulation, empathy and cooperative play with peers.",
    color: "from-pink-300 to-rose-500",
  },
  {
    id: "creative",
    icon: Music,
    title: "Creative Arts & Music",
    summary:
      "Art, music and movement to encourage expression, rhythm and creative thinking.",
    activities: ["Singing & instruments", "Messy art", "Dance & movement sessions"],
    outcome: "Stronger self-expression, rhythm awareness and imaginative play.",
    color: "from-violet-300 to-purple-500",
  },
  {
    id: "nature",
    icon: TreePalm,
    title: "Nature & Outdoor Learning",
    summary:
      "Garden exploration, nature walks and sensory play that link learning with the outdoors.",
    activities: ["Mini-garden care", "Seasonal walks", "Sensory nature trays"],
    outcome: "Curiosity about the natural world and foundational environmental awareness.",
    color: "from-lime-300 to-lime-500",
  },
];

const CurriculumOverview: React.FC = () => {
  return (
    <section id="curriculum-overview" className="py-30 bg-purple-200 -mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Learning Through Joy & Wonder
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            A playful, developmentally appropriate curriculum that builds early skills across language, thinking,
            physical development and creativity.
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
