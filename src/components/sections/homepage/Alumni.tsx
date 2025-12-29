import { ArrowRight } from "lucide-react";

const AlumniConnect = () => {
  return (
    <section className="relative bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 py-4 sm:py-10 lg:py-20 mt-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12">

        
          <div className="grid grid-cols-1 gap-8 xl:gap-12 lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="text-white">
              <span className="inline-block rounded-full font-inter bg-white/10 px-4 py-2 text-xs sm:text-sm">
                Alumni Connect
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-raleway font-bold leading-tight">
                Once a Student, <br />
                Always a Part of <span className="text-amber-400">Our Family</span>
              </h2>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300">
                Our alumni carry forward the values, discipline, and excellence
                nurtured on campus. From higher education to professional
                success, their journeys continue to inspire our students.
              </p>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-300">
                We invite our alumni to reconnect, share experiences, and remain
                an integral part of the school community.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-amber-500"
              >
                Join Alumni Network
                <ArrowRight size={18} className="hidden sm:block"/>
              </a>

              <a
                href="/campus"
                className="hidden md:block rounded-lg border border-white/40 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10"
              >
                Explore Alumni Success
              </a>
            </div>
            </div>

            {/* Right Highlight Box */}
            <div className="hidden lg:block rounded-2xl bg-white/5 p-8 md:p-10 backdrop-blur-sm font-inter">
              <h3 className="text-xl font-semibold text-white">
                Why Stay Connected?
              </h3>

              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Reconnect with teachers & classmates</li>
                <li>• Inspire current students through mentorship</li>
                <li>• Participate in alumni meets & events</li>
                <li>• Share achievements & milestones</li>
                <li>• Give back to your alma mater</li>
              </ul>
            </div>

          </div>
        

      </div>
    </section>
  );
};

export default AlumniConnect;
