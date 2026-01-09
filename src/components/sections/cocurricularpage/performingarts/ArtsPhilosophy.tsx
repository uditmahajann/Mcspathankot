import React from "react";

const SportsPhilosophy = () => {
  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden flex items-center justify-start px-6 md:px-16"
      style={{
        backgroundImage: "url('/Images/Heros/artsbanner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="font-extrabold text-white text-5xl md:text-7xl leading-tight tracking-tight">
          MAKE IT SEEN<br />
          MAKE IT FELT.
        </h1>

        <p className="mt-6 text-white/90 text-lg md:text-2xl max-w-2xl font-light tracking-wide">
          Where passion becomes skill — and every performance builds courage, discipline, and identity.
        </p>
      </div>
    </section>
  );
};

export default SportsPhilosophy;










