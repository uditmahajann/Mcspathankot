import { ArrowRight } from "lucide-react";

const AdmissionsCTA = () => {
  return (
    <section className="relative bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">

        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 items-center">

          {/* Left Content */}
          <div className="text-white">
            <span className="inline-block rounded-full font-inter bg-white/10 px-4 py-2 text-xs sm:text-sm">
              Admissions Open
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl font-raleway font-bold leading-tight">
              Begin Your Child’s <br />
              Journey Towards <span className="text-yellow-400">Excellence</span>
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300">
              Applications are now open for the academic session 2026–27.
              Join a nurturing environment focused on academic strength,
              values, and holistic development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/admission#"
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-yellow-300"
              >
                Apply for Admissions
                <ArrowRight size={18} className="hidden sm:block"/>
              </a>

              <a
                href="/campus"
                className="hidden md:block rounded-lg border border-white/40 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10"
              >
                Enquire Now
              </a>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="hidden lg:block rounded-2xl bg-white/5 p-8 md:p-10 backdrop-blur-sm font-inter">
            <h3 className="text-xl font-semibold text-white">
              Admission Highlights
            </h3>

            <ul className="mt-6 space-y-4 text-blue-100">
              <li>• Classes from Pre-Primary to Senior Secondary</li>
              <li>• Experienced & qualified faculty</li>
              <li>• Safe, secure & student-friendly campus</li>
              <li>• Focus on academics, values & life skills</li>
              <li>• Limited seats available</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
