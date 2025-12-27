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
      "Deep reading and creative writing to enhance comprehension and critical thinking.",
    activities: ["Creative writing and debates", "Group poetry recitations", "Reading comprehension"],
    outcome: "Critical thinking, refined communication, and appreciation of diverse perspectives.",
    color: "from-amber-300 to-amber-500",
  },
  {
    id: "numeracy",
    icon: Hash,
    title: "STEM Integration",
    summary:
      "Hands-on experiments and coding projects that connect science, technology, and logic.",
    activities: ["Science fairs", "DIY robotics & coding projects", "Math through real-world experiments"],
    outcome: "Enhanced curiosity, analytical reasoning, and teamwork in applying concepts.",
    color: "from-green-300 to-emerald-500",
  },
  {
    id: "motor",
    icon: Users,
    title: "Social Studies & Citizenship",
    summary:
      "Introduction to understanding history, culture, social science and community responsibility.",
    activities: ["Finger painting", "Play dough", "Outdoor obstacle play"],
    outcome: "Broader understanding of social structures, empathy, and civic awareness.",
    color: "from-sky-300 to-indigo-400",
  },
  {
    id: "emotional",
    icon: Music,
    title: "Creative Innovation",
    summary:
      "Bringing Art, design, and craft as tools for problem-solving, creativity and imagination.",
    activities: ["School art exhibitions", "Drama performances", "Short film making"],
    outcome: "Developed imagination, problem-solving, and collaboration skills.",
    color: "from-pink-300 to-rose-500",
  },
  {
    id: "creative",
    icon: Activity,
    title: "Health & Physical Education",
    summary:
      "Encouraging fitness through Yoga, sports, and wellness programs for balanced development.",
    activities: ["Yoga sessions", "Sports tournaments", "Fitness tracking"],
    outcome: "Stronger physical health, mental health and emotional resilience.",
    color: "from-violet-300 to-purple-500",
  },
  {
    id: "nature",
    icon: TreePalm,
    title: "Ethics & Well-being",
    summary:
      "Reflection sessions & counselling to build confidence, emotional awareness, and empathy.",
    activities: ["Mindfulness workshops", "Peer support sessions", "Reflection journals"],
    outcome: "Enhanced emotional intelligence and mental clarity for overall wellbeing.",
    color: "from-lime-300 to-lime-500",
  },
];

const CurriculumOverview: React.FC = () => {
  return (
    <section id="curriculum-overview" className="py-30 bg-yellow-100 -mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Learning Through Exploration & Discovery
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            A holistic and inquiry-driven curriculum that bridges conceptual understanding with curiosity, reflection, and collaboration.
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
        <div className="mt-12 text-center font-outfit text-lg">
          <div className="flex items-center justify-center gap-4">
            <a
              href="/docs/sample-kindergarten-curriculum.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium shadow"
            >
              Academic Calendar
            </a>
            <a
              href="/admissions/schedule-visit"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium shadow"
            >
              Check Booklist
            </a>
            <a
              href="/admissions/schedule-visit"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium shadow"
            >
              Check Syllabus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumOverview;
