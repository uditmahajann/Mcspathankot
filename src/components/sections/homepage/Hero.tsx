import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { useEffect, useState } from "react";

const words = ["Young Minds", "Future Leaders", "Confident Learners"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % words.length);
    }, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative w-full">
      
      {/* Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Videos/sample.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Fullscreen Indigo + Black Overlay */}
      <div
        className="
          absolute top-0 left-0 h-full w-[60%] z-10 pointer-events-none
          bg-linear-to-r from-black via-black to-transparent
        "
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 5%, transparent 100%)',
          maskImage: 'linear-gradient(to right, black 5%, transparent 100%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full py-12 sm:py-22">
        <div className="max-w-7xl px-6 sm:px-12 lg:px-20 xl:px-30 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-left font-raleway text-white"
          >

            {/* School Identity */}
            <div className="mb-12 md:mb-16 flex items-center gap-4">
              <img
                src="/Images/Logos/mcslogo-white.png"
                alt="School Logo"
                className="w-16 sm:w-20 lg:w-28 invert"
              />
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
                  Montessori Cambridge School
                </h2>
                <span className="hidden sm:block text-base lg:text-lg font-inter text-white/70">
                  A Legacy of Excellence Since 1998
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Shaping{" "}
              <span className="relative inline-block text-amber-400">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              ,<br />
              Building a Stronger Tomorrow
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl max-w-xl mt-6 text-gray-200 font-inter">
              An Edifice of Pedagogical Academic Excellence
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-blue-700"
              >
                Apply for Admissions
                <ArrowRight size={18} className="hidden sm:block"/>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/campus"
                className="rounded-lg border border-white/40 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10"
              >
                Explore Campus
              </motion.a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;