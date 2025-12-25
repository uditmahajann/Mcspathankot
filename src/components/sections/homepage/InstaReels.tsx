import { useEffect, useRef, useState } from "react";
import { Play, Pause, Instagram } from "lucide-react";

const reels = [
  { id: "1", videoUrl: "/Videos/Reel1.mp4" },
  { id: "2", videoUrl: "/Videos/Reel2.mp4" },
  { id: "3", videoUrl: "/Videos/Reel3.mp4" },
  { id: "4", videoUrl: "/Videos/Reel4.mp4" },
  { id: "5", videoUrl: "/Videos/Reel5.mp4" },
  { id: "6", videoUrl: "/Videos/Reel6.mp4" },
];

// Must match Tailwind card styles
const CARD_WIDTH = 240;
const CARD_GAP = 16;
const SLIDE_SPEED = 2;

const InstaReels = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const rafRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  /* ---------------- AUTO SLIDE (TRANSFORM BASED) ---------------- */
  useEffect(() => {
    if (activeVideo) return;

    const track = trackRef.current;
    if (!track) return;

    const totalWidth = (CARD_WIDTH + CARD_GAP) * reels.length;

    const animate = () => {
      positionRef.current += SLIDE_SPEED;

      if (positionRef.current >= totalWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(-${positionRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeVideo]);

  /* ---------------- VIDEO CONTROL (BROWSER SAFE) ---------------- */
  const handleVideoClick = (
    id: string,
    video: HTMLVideoElement
  ) => {
    // Stop auto slide immediately
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([key, v]) => {
      if (v && key !== id) {
        v.pause();
        v.currentTime = 0;
      }
    });

    if (activeVideo === id) {
      video.pause();
      setActiveVideo(null);
    } else {
      video.play(); // ✅ Direct user gesture → always allowed
      setActiveVideo(id);
    }
  };

  return (
    <section className="bg-blue-950 my-10 py-12 md:py-20  overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">

        {/* Header */}
        <div className="mb-8 md:mb-12 flex flex-col gap-6 md:flex-row items-start justify-between">
          <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-amber-400 leading-normal">
            Campus Chronicles: Highlights of 2025
          </h2>

          <a
            href="https://instagram.com/montessoricambridge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center shrink-0 gap-2 rounded-md bg-linear-to-r from-purple-600 to-pink-600 px-4 py-2 font-medium text-white hover:opacity-90"
          >
            Follow Us
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Viewport */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 will-change-transform"
          >
            {[...reels, ...reels].map((reel, index) => (
              <div
                key={`${reel.id}-${index}`}
                className="h-105 w-60 shrink-0 overflow-hidden rounded-xl bg-black"
              >
                <div className="relative h-full w-full">

                  {/* VIDEO (CLICK TARGET) */}
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoUrl}
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={(e) =>
                      handleVideoClick(reel.id, e.currentTarget)
                    }
                    onEnded={() => setActiveVideo(null)}
                  />


                  {/* PLAY / PAUSE OVERLAY (VISUAL ONLY) */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30">
                    {activeVideo === reel.id ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white" />
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InstaReels;





// const CARD_WIDTH = 260;
// const AUTO_SCROLL_SPEED = 0.4;

// const InstaReels = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
//   const [activeVideo, setActiveVideo] = useState<string | null>(null);
//   const [pauseScroll, setPauseScroll] = useState(false);

//   /* ---------------- Auto Scroll ---------------- */
//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el || pauseScroll || activeVideo) return;

//     let raf: number;

//     const autoScroll = () => {
//       el.scrollLeft += AUTO_SCROLL_SPEED;

//       if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
//         el.scrollLeft = 0;
//       }
//       raf = requestAnimationFrame(autoScroll);
//     };

//     raf = requestAnimationFrame(autoScroll);
//     return () => cancelAnimationFrame(raf);
//   }, [pauseScroll, activeVideo]);

//   /* ---------------- Video Control ---------------- */
//   const toggleVideo = (id: string) => {
//     const video = videoRefs.current[id];
//     if (!video) return;

//     // Pause all others
//     Object.entries(videoRefs.current).forEach(([key, v]) => {
//       if (v && key !== id) {
//         v.pause();
//         v.currentTime = 0;
//       }
//     });

//     if (activeVideo === id) {
//       video.pause();
//       setActiveVideo(null);
//     } else {
//       video.muted = true;
//       video.play();
//       setActiveVideo(id);
//     }
//   };

//   /* ---------------- Manual Scroll ---------------- */
//   const scrollByCards = (dir: "left" | "right") => {
//     scrollRef.current?.scrollBy({
//       left: dir === "left" ? -CARD_WIDTH * 2 : CARD_WIDTH * 2,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-blue-950 py-16">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Header */}
//         <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <h2 className="text-3xl font-playpen font-medium text-amber-400">
//             Campus Chronicles: Highlights of 2025
//           </h2>

//           <a
//             href="https://instagram.com/montessoricambridge"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 font-medium text-white hover:opacity-90"
//           >
//             Follow Us
//             <Instagram className="h-5 w-5" />
//           </a>
//         </div>

//         {/* Carousel */}
//         <div
//           className="relative"
//           onMouseEnter={() => setPauseScroll(true)}
//           onMouseLeave={() => setPauseScroll(false)}
//         >
//           {/* Left */}
//           <button
//             onClick={() => scrollByCards("left")}
//             className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
//           >
//             <ChevronLeft />
//           </button>

//           {/* Reels */}
//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-hidden py-4"
//           >
//             {[...reels, ...reels].map((reel, i) => (
//               <div
//                 key={`${reel.id}-${i}`}
//                 className="h-[420px] w-[240px] shrink-0 overflow-hidden rounded-xl bg-black"
//               >
//                 <div
//                   className="relative h-full w-full cursor-pointer"
//                   onClick={() => toggleVideo(reel.id)}
//                 >
//                   <video
//                     ref={(el) => (videoRefs.current[reel.id] = el)}
//                     src={reel.videoUrl}
//                     className="h-full w-full object-cover"
//                     playsInline
//                     preload="metadata"
//                     onEnded={() => setActiveVideo(null)}
//                   />

//                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                     {activeVideo === reel.id ? (
//                       <Pause className="h-8 w-8 text-white" />
//                     ) : (
//                       <Play className="h-8 w-8 text-white" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right */}
//           <button
//             onClick={() => scrollByCards("right")}
//             className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InstaReels;
