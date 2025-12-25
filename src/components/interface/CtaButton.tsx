import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  text: string;
  href: string;
  className?: string;
  icon?: LucideIcon; // Accept any Lucide icon
}

const CtaButton: React.FC<CtaButtonProps> = ({ text, href, className = "", icon: Icon = ArrowRight }) => {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 text-inter font-medium text-white bg-primary rounded-full transition-all duration-300 ease-in-out hover:font-semibold hover:text-white hover:bg-secondarydark hover:scale-105 active:scale-95 shadow-md cursor-pointer ${className}`}
    >
      {text}
      <Icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={22} />
    </a>
  );
};

export default CtaButton;