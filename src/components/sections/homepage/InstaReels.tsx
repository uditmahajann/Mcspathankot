import { useEffect, useRef, useState } from "react";
import { Play, Pause, Instagram } from "lucide-react";

type Reel = {
  _id: string;
  title: string;
  videoUrl: string;
};

type Props = {
  reels: Reel[];
};

// Must match Tailwind card styles
const CARD_WIDTH = 240;
const CARD_GAP = 16;
const SLIDE_SPEED = 2;

const InstaReels = ({ reels }: Props) => {

  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const rafRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  /* ---------------- AUTO SLIDE (TRANSFORM BASED) ---------------- */
  useEffect(() => {
  const handleVisibility = () => {
    if (document.hidden && rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  };

  document.addEventListener("visibilitychange", handleVisibility);
  return () =>
    document.removeEventListener("visibilitychange", handleVisibility);
}, []);


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
    <section className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">

        {/* Header */}
        <div className="mb-8 md:mb-12 flex flex-col gap-6 md:flex-row items-start justify-between">
          <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
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
                key={`${reel._id}-${index}`}
                className="h-105 w-60 shrink-0 overflow-hidden rounded-xl bg-black"
              >
                <div className="relative h-full w-full">

                  {/* VIDEO (CLICK TARGET) */}
                  <video
                    ref={(el) => {
                      videoRefs.current[reel._id] = el;
                    }}
                    src={reel.videoUrl}
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={(e) =>
                      handleVideoClick(reel._id, e.currentTarget)
                    }
                    onEnded={() => setActiveVideo(null)}
                  />


                  {/* PLAY / PAUSE OVERLAY (VISUAL ONLY) */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
                    {activeVideo === reel._id ? (
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