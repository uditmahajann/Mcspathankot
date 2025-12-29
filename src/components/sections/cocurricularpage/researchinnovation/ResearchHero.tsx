"use client";

import React from "react";
import { Target } from "lucide-react";

const SportsPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Icon */}
        <Target className="w-10 h-10 text-amber-500 mx-auto mb-4" />

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-playpen font-semibold text-gray-900 mb-6">
          Built on Focus, Discipline & Competitive Growth
        </h2>

        {/* Body Copy */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our sports philosophy centres on building physically skilled, mentally strong and strategically aware athletes. Training begins with fundamentals, then evolves to technique refinement and competitive precision. Students learn to lead, collaborate, challenge themselves and perform under pressure — developing character, endurance and accountability along the way.
        </p>

        {/* Supporting line */}
        <p className="mt-8 text-base text-gray-600 italic">
          “The goal is not just to play — but to compete with purpose and excellence.”
        </p>
      </div>
    </section>
  );
};

export default SportsPhilosophy;








