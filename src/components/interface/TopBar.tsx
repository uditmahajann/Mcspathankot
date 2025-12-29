import type React from "react";
import { Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import SearchButton from "./SearchButton";

const TopBar: React.FC = () => {
  // Hardcoded contact info
  const phone1 = "98765-70911";
  const phone2 = "98765-70911";
  const email = "mcs_pathankot@yahoo.co.in";

  // Social links with brand hover styles
  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: "facebook", color: "hover:bg-[#1877F2]" },
    { name: "Instagram", href: "https://instagram.com", icon: "instagram", color: "hover:bg-gradient-to-tr hover:from-pink-500 hover:via-pink-500 hover:to-yellow-500" },
    { name: "YouTube", href: "https://youtube.com", icon: "youtube", color: "hover:bg-[#FF0000]" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin", color: "hover:bg-[#0A66C2]" },
  ];

  return (
    <div className="justify-items-center bg-blue-950 text-white text-sm font-inter">
      <div className="container px-4 sm:px-6 py-2 flex flex-col gap-3 lg:flex-row items-center lg:justify-between">
        {/* Contact Info */}

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
          <a
            href={`mailto:${email}`}
            className="flex items-center hover:underline"
          >
            <Mail className="h-3.5 w-3.5 sm:h-5 sm:w-5 mr-2 text-amber-300" />
            <span>{email}</span>
          </a>|
          <a
            href={`tel:${phone1}`}
            className="flex items-center hover:underline"
          >
            <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5 mr-2 fill-amber-300 stroke-0" />
            <span>{phone1}</span>
          </a>
          <a
            href={`tel:${phone2}`}
            className="hidden sm:flex items-center hover:underline"
          >
            <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5 mr-2 fill-amber-300 stroke-0" />
            <span>{phone2}</span>
          </a>

        </div>

        {/* Social: "Follow us on" + icons */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-white/90">Follow us on:</span>
            <div className="flex items-center gap-1.5">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`group flex items-center justify-center w-7 h-7 rounded-full bg-white/10 transition-colors ${link.color}`}
                  title={link.name}
                >
                  {link.icon === "facebook" && <Facebook className="h-4.5 w-4.5 text-white group-hover:text-white" />}
                  {link.icon === "instagram" && <Instagram className="h-4.5 w-4.5 text-white group-hover:text-white" />}
                  {link.icon === "youtube" && <Youtube className="h-4.5 w-4.5 text-white group-hover:text-white" />}
                  {link.icon === "linkedin" && <Linkedin className="h-4.5 w-4.5 text-white group-hover:text-white" />}
                </a>
              ))}
            </div>
          </div>|
          <SearchButton />

        </div>
      </div>
    </div>
  );
};

export default TopBar;