import type React from "react";
import { Mail } from "lucide-react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative text-white">
      <div
        className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center"
        style={{
          backgroundImage: `url('/Images/Heros/contacthero.JPG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax-like
        }}
      >
        {/* left-to-right overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 min-[540px]:px-10 sm:px-12 lg:px-20 xl:px-10">
            <div className="max-w-md md:max-w-xl lg:max-w-2xl">
              <span className="text-xs md:text-sm tracking-widest uppercase font-semibold text-white/80">Contact Us</span>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                Connect with <span className="text-blue-400"> MCS </span><br className="" />
                Office
              </h1>
              <p className="mt-3 sm:mt-4 text-base md:text-lg text-white/85">
                We're here to answer your questions and help you connect with our school community
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-primarydark"
                >
                  Send a Message
                  <Mail size={18} className="hidden sm:block"/>
                </a>
                <a
                  href="/contact#location"
                  className="inline-flex items-center rounded-lg border border-white/40 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/20"
                >
                  Know our Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;