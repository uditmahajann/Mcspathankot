"use client";

import React from "react";
import {
  Users,
  ShieldCheck,
  Bandage,
  Thermometer,
  CheckCircle,
  Truck,
  Clock,
} from "lucide-react";

const tiles = [
  {
    id: "health",
    title: "Career Counselling",
    desc: "Temperature & wellness checks with clear guidance for parents.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "med",
    title: "Emotional Well-being",
    desc: "Supervised medical room with trained staff to care for children safely.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "staff",
    title: "Goal-oriented Coaching",
    desc: "All staff complete regular safety training and child-protection checks.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "security",
    title: "Supportive Community",
    desc: "Controlled access and monitored play areas ensure child safety.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
];

const timeline = [
  { id: "drill", title: "Monthly drills & practice", Icon: CheckCircle },
  { id: "training", title: "Quarterly staff training", Icon: Users },
  { id: "meals", title: "Daily hygiene routines", Icon: Clock },
  { id: "transport", title: "Transport & driver checks", Icon: Truck },
];

const SafetyCareCreative: React.FC = () => {
  return (
    <section id="curriculum-overview" className="py-25 bg-emerald-100">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Ready for the World —{" "}
            <span className="relative inline-block">
              Inside and Out
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            A supportive environment where pre-teens gain confidence, responsibility, and a deeper love for learning.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT STRIPE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl shadow-2xl bg-fuchsia-200 overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16"> 
  <h2 className="text-3xl sm:text-4xl font-poppins font-semibold text-gray-900 leading-tight tracking-wide">
    Where Guidance Meets Growth
  </h2>

  <p className="mt-6 font-inter text-lg text-gray-700">
    The Senior Secondary Wing provides a secure, encouraging space where students prepare for life beyond school. Here, safety means both physical well-being and emotional steadiness — supported by mentors who truly understand each student’s journey.
  </p>

  <p className="mt-4 font-inter text-lg text-gray-700">
    Through personalized academic planning, we help students manage stress, stay goal-focused, and grow with confidence. A caring community ensures they graduate not just prepared — but genuinely ready for the world.
  </p>
</div>

            </div>
          </div>

          {/* RIGHT GRID — overlay version */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tiles.map((t) => (
                <article
                  key={t.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg group h-64"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h3 className="text-lg font-poppins font-semibold tracking-wide">
                      {t.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default SafetyCareCreative;







// // SafetyCareCreative.tsx
// "use client";

// import React from "react";
// import {
//   HeartPulse,
//   Users,
//   ShieldCheck,
//   Truck,
//   Bandage,
//   Thermometer,
//   FileText,
//   Clock,
//   CheckCircle,
//   Zap,
// } from "lucide-react";

// const tiles = [
//   {
//     id: "health",
//     title: "Daily Health Checks",
//     desc: "Simple temperature & wellness checks with clear guidance for parents on illness and return-to-school.",
//     icon: Thermometer,
//     bg: "bg-gradient-to-br from-rose-50 to-rose-100",
//     accent: "text-rose-600",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "med",
//     title: "Infirmary & First Aid",
//     desc: "Quiet, supervised medical room with trained staff to stabilise and care for children until parents arrive.",
//     icon: Bandage,
//     bg: "bg-gradient-to-br from-amber-50 to-amber-100",
//     accent: "text-amber-600",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "staff",
//     title: "Trained Team",
//     desc: "All staff complete child-safety checks and regular training in early-years care, safeguarding and first aid.",
//     icon: Users,
//     bg: "bg-gradient-to-br from-sky-50 to-sky-100",
//     accent: "text-sky-600",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "security",
//     title: "Secure Campus",
//     desc: "Controlled access, verified visitors and monitored playgrounds keep the campus friendly and secure.",
//     icon: ShieldCheck,
//     bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
//     accent: "text-emerald-600",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
// ];

// const timeline = [
//   { id: "drill", title: "Monthly Drills", icon: CheckCircle },
//   { id: "training", title: "Quarterly Staff Training", icon: Users },
//   { id: "meals", title: "Daily Hygiene Routines", icon: Zap },
//   { id: "transport", title: "GPS + Driver Checks", icon: Truck },
// ];

// const SafetyCareCreative: React.FC = () => {
//   return (
//     <section
//       id="safety-care"
//       className="relative bg-cover bg-center bg-no-repeat flex items-center"
//       style={{
//         backgroundImage: `url('/Images/Academics/Leavesborder.png')`, // replace with your image path
//       }}
//     >
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* Left hero stripe */}
//           <div className="lg:col-span-6">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-50 to-amber-50">
//               {/* subtle pattern / image */}
//               <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/Images/Patterns/soft-dots.png')] bg-repeat" />
//               <div className="relative p-8 sm:p-12">
              
//                 <h2 className="mt-6 text-3xl sm:text-4xl font-playpen font-semibold text-gray-900 leading-tight">
//                   Safety & Care designed for little learners
//                 </h2>

//                 <p className="mt-4 text-base text-gray-700 max-w-xl">
//                   A protection-first approach — prevention, rapid care and clear communication. We blend daily
//                   health routines with trained staff, safe transport and emergency readiness so families can feel confident.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right tile cluster */}
//           <div className="lg:col-span-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {tiles.map((t, idx) => {
//                 const Icon = t.icon as any;
//                 const orderClass = idx % 2 === 0 ? "translate-y-0" : "translate-y-8";
//                 return (
//                   <div
//                     key={t.id}
//                     className={`relative rounded-2xl overflow-hidden shadow-lg transform transition hover:-translate-y-2 ${orderClass}`}
//                     style={{ background: "white" }}
//                     role="article"
//                     aria-labelledby={`tile-${t.id}`}
//                   >
//                     {/* image at top (lazy) */}
//                     <div className="h-36 w-full bg-gray-50 overflow-hidden">
//                       <img
//                         src={t.img}
//                         alt={t.title}
//                         loading="lazy"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     <div className="p-4 sm:p-5">
//                       <div className="flex items-start gap-3">
//                         <div>
//                           <h3 id={`tile-${t.id}`} className="text-lg font-semibold text-gray-900">
//                             {t.title}
//                           </h3>
//                           <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SafetyCareCreative;




// // SafetyCare.tsx
// "use client";

// import React from "react";
// import {
//   HeartPulse,
//   Users,
//   ShieldCheck,
//   Truck,
//   Bandage,
//   Thermometer,
//   MapPin,
//   FileText,
// } from "lucide-react";

// type SafetyCard = {
//   id: string;
//   Icon: React.ComponentType<any>;
//   title: string;
//   description: string;
//   image?: string;
//   accent?: string;
// };

// const CARDS: SafetyCard[] = [
//   {
//     id: "health-screen",
//     Icon: Thermometer,
//     title: "Daily Health Screening",
//     description:
//       "Simple daily checks and clear guidance for parents if children are unwell. We work with parents to keep learning safe and consistent.",
//     accent: "from-rose-200 to-red-300",
//   },
//   {
//     id: "med-room",
//     Icon: Bandage,
//     title: "On-site Medical Room",
//     description:
//       "A staffed infirmary with first-aid trained personnel and a quiet space for students who need care, with clear pick-up procedures for parents.",
//     image: "/Images/Kindergarten/medroom.jpg",
//   },
//   {
//     id: "trained-staff",
//     Icon: Users,
//     title: "Trained & Background-checked Staff",
//     description:
//       "All team members undergo background checks, child-safety training and continuous professional development in early-years care.",
//     accent: "from-sky-200 to-blue-300",
//   },
//   {
//     id: "secure-campus",
//     Icon: ShieldCheck,
//     title: "Secure Campus Access",
//     description:
//       "Controlled entry, visitor verification, fencing and CCTV in key areas to keep the campus safe while maintaining a welcoming atmosphere.",
//     image: "/Images/Kindergarten/gates.jpg",
//   },
//   {
//     id: "transport-safety",
//     Icon: Truck,
//     title: "Safe Transport & Drivers",
//     description:
//       "All buses have trained staff, seat reminders and GPS tracking. Drivers are background-checked and trained in child safety procedures.",
//     accent: "from-emerald-200 to-emerald-300",
//   },
//   {
//     id: "meals-hygiene",
//     Icon: HeartPulse,
//     title: "Healthy Meals & Hygiene",
//     description:
//       "Nutritious, portioned meals and strict food-safety practices. Hand-washing routines are built into daily schedules for every child.",
//     image: "/Images/Kindergarten/meals.jpg",
//   },
//   {
//     id: "safeguarding",
//     Icon: MapPin,
//     title: "Child Protection Policies",
//     description:
//       "Robust safeguarding framework with reporting channels, clear behaviour policies and parental engagement to keep children safe and supported.",
//   },
//   {
//     id: "emergency",
//     Icon: FileText,
//     title: "Emergency Preparedness",
//     description:
//       "Clear evacuation routes, regular drills, and a communication plan so families and staff stay informed and safe in any situation.",
//   },
// ];

// const SafetyCare: React.FC = () => {
//   return (
//     <section id="safety-care" className="bg-white py-16">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="max-w-3xl mx-auto text-center mb-10">
//           <h2 className="text-3xl sm:text-4xl font-playpen font-semibold text-gray-900">
//             Safety & Care
//           </h2>
//           <p className="mt-3 text-gray-600 text-base sm:text-lg">
//             Our foremost priority — a healthy, secure and nurturing environment where every child can thrive.
//             We combine preventive health practices, trained staff and clear safety policies to safeguard our
//             youngest learners.
//           </p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {CARDS.map((card) => {
//             const Icon = card.Icon;
//             return (
//               <article
//                 key={card.id}
//                 className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
//                 aria-labelledby={`safety-${card.id}`}
//               >
//                 {/* optional image */}
//                 {card.image ? (
//                   <div className="h-36 w-full overflow-hidden bg-gray-50">
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       loading="lazy"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ) : (
//                   <div
//                     className={`h-12 w-full flex items-center justify-start px-4 ${card.accent ? "" : "bg-gray-50"}`}
//                     aria-hidden
//                   >
//                     {/* small visual bar for cards without images */}
//                     <div
//                       className={`h-3 w-16 rounded-full ${card.accent ? "bg-gradient-to-r " : "bg-gray-200"}`}
//                       style={card.accent ? { backgroundImage: `linear-gradient(90deg, ${card.accent.includes("to") ? "" : ""})` } : {}}
//                     />
//                   </div>
//                 )}

//                 <div className="p-5">
//                   <div className="flex items-start gap-3">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
//                       <Icon className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h3 id={`safety-${card.id}`} className="text-base font-semibold text-gray-900">
//                         {card.title}
//                       </h3>
//                       <p className="mt-2 text-sm text-gray-700">{card.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* Policies / Downloads */}
//         <div className="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div>
//             <h4 className="text-lg font-medium text-gray-900">Policies & Downloads</h4>
//             <p className="text-gray-600 text-sm mt-1">
//               Download our health, safeguarding and transport policies for full details.
//             </p>
//           </div>

//           <div className="flex gap-3 items-center">
//             <a
//               href="/docs/safety-policy.pdf"
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:shadow transition"
//               download
//             >
//               <FileText className="w-4 h-4 text-gray-700" /> Safety Policy (PDF)
//             </a>

//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
//             >
//               Contact Health Desk
//             </a>
//           </div>
//         </div>

//         {/* Small assurance strip */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-600">
//             We regularly review our policies in line with local health guidance and best practice. For urgent
//             enquiries please call the school office.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SafetyCare;
