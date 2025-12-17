import type React from "react";

const CampusLifeHero: React.FC = () => {
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
              <span className="text-sm tracking-widest uppercase font-semibold text-white/80">Life @MCS</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                <span className="text-purple-400">Moments</span> that create <br className="hidden sm:block" />
                Memories
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85">
                Experience our vibrant, enriching, and holistic environment where students thrive academically, socially, and personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeHero;