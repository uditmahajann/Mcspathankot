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
    <div className="justify-items-center bg-blue-900 text-white text-sm font-inter">
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







// import type React from "react";
// import {
//   Phone,
//   Mail,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   CreditCard,
//   MessageCircle,
//   LayoutDashboard,
//   Users,
// } from "lucide-react";

// interface TopBannerProps {
//   contactInfo: {
//     phone: string;
//     email: string;
//   };
//   socialLinks: {
//     name: string;
//     href: string;
//     icon: string;
//   }[];
//   quickActions: {
//     name: string;
//     href: string;
//     icon: string;
//   }[];
// }

// const buttonColors: Record<string, string> = {
//   "Pay Fee": "bg-blue-600 hover:bg-blue-500",
//   "Enquire Now": "bg-green-600 hover:bg-green-500",
//   "School ERP": "bg-purple-600 hover:bg-purple-500",
//   "Alumni Connect": "bg-pink-600 hover:bg-pink-500",
// };

// const TopBar: React.FC<TopBannerProps> = ({ contactInfo, socialLinks, quickActions }) => {
//   return (
//     <div className="bg-blue-900 text-white py-2">
//       <div className="container px-5 flex flex-col md:flex-row justify-between items-center">
//         {/* Contact Info */}
//         <div className="flex items-center space-x-5 mb-2 md:mb-0">
//           <a
//             href={`tel:${contactInfo.phone}`}
//             className="flex items-center text-base hover:text-blue-200 transition-colors"
//           >
//             <Phone className="h-4 w-4 mx-1" />
//             <span>{contactInfo.phone}</span>
//           </a>
//           <a
//             href={`mailto:${contactInfo.email}`}
//             className="hidden md:flex items-center text-base hover:text-blue-200 transition-colors"
//           >
//             <Mail className="h-4 w-4 mx-1" />
//             <span>{contactInfo.email}</span>
//           </a>
//         </div>

//         {/* Quick Action Buttons */}
//         <div className="flex items-center space-x-2">
//           {quickActions.map((action, index) => {
//             const colorClass = buttonColors[action.name] || "bg-blue-800 hover:bg-blue-700";

//             return (
//               <a
//                 key={index}
//                 href={action.href}
//                 className={`text-base font-inter px-3 py-1 rounded transition-colors ${colorClass}`}
//               >
//                 <span className="hidden md:inline">{action.name}</span>
//                 <span className="md:hidden">
//                   {action.icon === "credit-card" && <CreditCard className="h-4 w-4" />}
//                   {action.icon === "message-circle" && <MessageCircle className="h-4 w-4" />}
//                   {action.icon === "layout-dashboard" && <LayoutDashboard className="h-4 w-4" />}
//                   {action.icon === "users" && <Users className="h-4 w-4" />}
//                 </span>
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
