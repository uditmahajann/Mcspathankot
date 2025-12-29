// CurriculumOverview.tsx
"use client";

import React from "react";
import { GraduationCap, Briefcase, Target, Users, MessageSquare, HeartPulse } from "lucide-react";

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
    icon: GraduationCap,
    title: "Scholarly Focus",
    summary:
      "In-depth study in chosen streams: Medical, Non-medical, Commerce, or Humanities.",
    activities: ["Advanced subject seminars", "Resume building sessions", "Interdisciplinary research projects"],
    outcome: "Specialized subject mastery and advanced conceptual understanding.",
    color: "from-amber-300 to-amber-500",
  },
  {
    id: "career-prep",
    icon: Briefcase,
    title: "Career & College Preparation",
    summary:
      "Comprehensive guidance for higher studies, career exploration, and college readiness.",
    activities: [
      "Career counselling and aptitude mapping",
      "University application guidance",
      "Exposure to internships, and guest lectures",
    ],
    outcome:
      "Clear career vision, improved readiness for college admissions.",
      color: "from-green-300 to-emerald-500"
  },
  {
    id: "competitive-exam",
    icon: Target,
    title: "Competitive Exam Readiness",
    summary:
      "Focused preparation, strategy support & special classes for competitive examinations.",
    activities: [
      "Focused preparation for NEET, JEE, and other entrance exams",
      "Time management and test strategy workshops",
      "Regular mock tests with performance analysis",
    ],
    outcome:
      "Systematic preparation habits, and test confidence under exam conditions.",
      color: "from-sky-300 to-indigo-400",
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Communication & Professional Skills",
    summary:
      "Developing confidence, articulation, and workplace-ready communication.",
    activities: [
      "Group discussions and public speaking events",
      "Resume and presentation skill-building sessions",
      "Leadership through anchoring and seminars",
    ],
    outcome:
      "Polished communication, confidence in articulation, and professional presentation skills.",
      color: "from-pink-300 to-rose-500",
  },
  {
    id: "wellbeing",
    icon: HeartPulse,
    title: "Emotional & Mental Well-being",
    summary:
      "Balanced support for emotional growth, mindfulness, and exam-related stress relief.",
    activities: [
      "Stress and exam anxiety management workshops",
      "Counsellor-led mindfulness and motivation circles",
      "Peer support and mentoring programs",
    ],
    outcome:
      "Emotional stability, self-awareness, and a positive mindset toward challenges and growth.",
      color: "from-violet-300 to-purple-500",
  },
  {
    id: "leadership",
    icon: Users,
    title: "Values & Leadership",
    summary:
      "Building moral grounding, teamwork, and responsible leadership qualities.",
    activities: [
      "Student council leadership roles",
      "Community outreach initiatives",
      "School representation at conferences",
    ],
    outcome:
      "Strong moral grounding, and readiness to lead responsibly in future environments.",
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
            Academic Depth & Future Readiness
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            An advanced, specialized curriculum that encourages deep inquiry, analytical thinking, and preparation for higher education and beyond.
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
