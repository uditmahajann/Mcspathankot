"use client";

import { Clock, ArrowLeft, Share2 } from "lucide-react";

export default function NewsDetail() {
  const goBack = () => window.history.back();

  return (
    <section id="news-detail" className="bg-white py-10 sm:py-16">
      <div className="container mx-auto max-w-4xl px-5 sm:px-8">

        {/* Back Button */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-md mb-10">
          <img
            src="/Images/Campus/McsEntry.JPG"
            className="w-full h-95 object-cover"
            alt="News Banner"
          />
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-600 text-sm font-inter mb-3">
          <Clock className="w-4 h-4" />
          May 16, 2025
        </div>

        {/* Title */}
        <h1 className="font-playpen text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
          CBSE CLASS XII RESULT 2024–25 ANNOUNCED 🎓
        </h1>

        {/* Share (Optional future functionality) */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-inter">
          <p>
            We are proud to announce the outstanding performance of our Class XII students in the 
            2024–25 CBSE Board Examinations. This year's batch achieved exceptional results with 
            remarkable subject-wise performances and multiple distinctions.
          </p>

          <p>
            The commitment of our students, combined with tireless support from faculty and parents, 
            led to another year of academic excellence at Montessori Cambridge School.
          </p>

          <h3 className="font-semibold">⭐ Highlights</h3>
          <ul>
            <li>100% Pass Rate</li>
            <li>27 Students Scored Above 90%</li>
            <li>9 Subject Toppers</li>
            <li>3 National Merit Scholars</li>
          </ul>

          <p>
            The school congratulates every student and wishes them continued success as they move 
            toward future careers and higher education.
          </p>
        </article>

        {/* Gallery */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 font-poppins">
            Celebration Moments
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src="/Images/Campus/McsEntry.JPG"
                className="rounded-xl h-40 object-cover shadow-sm hover:scale-[1.03] transition"
                alt="Gallery"
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-14"></div>

        {/* Back to News Button */}
        <div className="text-center">
          <a
            href="/news-events"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-medium shadow-md hover:bg-blue-700 transition"
          >
            ← Back to All News & Events
          </a>
        </div>
      </div>
    </section>
  );
}
