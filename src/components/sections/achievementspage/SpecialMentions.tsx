import React from "react";

type BannerItem = {
  _id: string;
  title?: string;
  image: {
    asset: {
      url: string;
    };
  };
};

type Props = {
  banners: BannerItem[];
};

const SpecialMentions: React.FC<Props> = ({ banners }) => {
  return (
    <section
      id="achievers-showcase"
      className="my-10 py-12 lg:py-20 overflow-hidden bg-linear-to-r from-blue-950 via-blue-900 to-blue-950"
    >
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400">
            Student Achievers Showcase
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden">
          <div className="marquee-track flex">
            {[...banners, ...banners].map((b, i) => (
              <div
                key={`${b._id}-${i}`}
                className="mx-4 w-70 md:w-100 h-auto shrink-0 text-center"
              >
                <img
                  src={b.image.asset.url}
                  alt={b.title}
                  className="w-auto rounded-xl object-cover lg:grayscale lg:hover:grayscale-0 transition"
                  loading="lazy"
                />
                {b.title && (
                  <p className="mt-3 text-base font-inter font-medium text-gray-100">
                    {b.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS – no config needed */}
      <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default SpecialMentions;




// import React from "react";

// type BannerItem = {
//   _id: string;
//   title?: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// };

// type Props = {
//   banners: BannerItem[];
// };


// const SpecialMentions: React.FC<Props> = ({ banners }) => {
//   return (
//     <section id="achievers-showcase" className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
//         <div className="text-center mb-8 md:mb-12">
//         {/* Header */}
//         <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
//           Student Achievers Showcase
//         </h2>
//         </div>

//         {/* University Logos */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center justify-center">
//           {banners.map((b) => (
//             <div
//               key={b._id}
//               className="flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
//             >
//               <img
//                 src={b.image.asset.url}
//                 alt={b.title}
//                 className="object-contain lg:grayscale hover:grayscale-0 transition rounded-xl"
//                 loading="lazy"
//               />
//               <p className="mt-3 text-base md:text-lg font-inter font-medium text-gray-100">{b.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialMentions;
