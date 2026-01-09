import type React from "react";

const ResultsHero: React.FC = () => {
  return (
    <section className="relative text-white">
      <div
        className="relative min-h-[60vh] md:min-h-[65vh] flex items-center"
        style={{
          backgroundImage: `url('/Images/Campus/EntryFront.JPG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax-like
        }}
      >
        {/* left-to-right overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="text-sm tracking-widest uppercase font-semibold text-white/80">Exam Results</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                Celebrating our <span className="text-fuchsia-400">Academic</span> Excellence<br className="hidden sm:block" />
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85">
                Our students consistently achieve outstanding results in board exams and beyond, a reflection of dedicated effort and quality teaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;