import type React from "react";

const HistoryHero: React.FC = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="text-sm tracking-widest uppercase font-semibold text-white/80">Important Circulars</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                Latest <span className="text-emerald-400">Circulars</span><br className="hidden sm:block" />
                & Announcements
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85">
                Stay informed with official school circulars and get updates on exams, holidays, activities, and academic schedules in one place.
              </p>

              {/* <div className="sm:mt-2 md:mt-6 flex items-center gap-4">
                <a
                  href="/curriculum/academic-courses"
                  className="group inline-flex items-center px-6 py-2 md:py-3 text-outfit font-medium text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:font-semibold cursor-pointer hover:bg-blue-600"
                >
                  Find Courses
                </a>
                <a
                  href="/about/history"
                  className="group inline-flex items-center px-6 py-2 md:py-3 text-outfit font-medium bg-white/15 backdrop-blur rounded-lg transition-all duration-300 ease-in-out hover:font-semibold cursor-pointer hover:bg-white/25"
                >
                  Our History
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryHero;
