"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Instagram } from "lucide-react";

const reels = [
  {
      id: "1",
      imageUrl: "/placeholder.svg?height=600&width=340",
      videoUrl: "/Videos/Reel1.mp4", // Replace with actual video URL
      postUrl: "https://www.instagram.com/reel/DJt_aQesgLt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "CELEBRATING OUR CBSE 10TH TOPPERS",
      subtitle: "PRIDE OF MONTESSORI!",
    },
    {
      id: "2",
      imageUrl: "/placeholder.svg?height=600&width=340",
      videoUrl: "/Videos/Reel2.mp4", // Replace with actual video URL
      postUrl: "https://www.instagram.com/reel/DJt_8uqxMk_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "CELEBRATING OUR CBSE 12TH TOPPERS",
      subtitle: "PRIDE OF MONTESSORI!",
    },
    {
      id: "3",
      imageUrl: "/placeholder.svg?height=600&width=340",
      videoUrl: "/Videos/Reel3.mp4", // Replace with actual video URL
      postUrl: "https://www.instagram.com/reel/DFajLNII13c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "Sports'S DAY CELEBRATION",
      subtitle: "CHAMPIONS IN ACTION",
    },
    {
      id: "4",
      imageUrl: "/placeholder.svg?height=600&width=340",
      videoUrl: "/Videos/Reel4.mp4", // Replace with actual video URL
      postUrl: "https://www.instagram.com/reel/DHWDkH8CNNN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "",
      subtitle: "",
    },
    {
      id: "5",
      imageUrl: "/placeholder.svg?height=600&width=340",
      videoUrl: "/Videos/Reel5.mp4", // Replace with actual video URL
      postUrl: "https://www.instagram.com/reel/DJRbRn6tymA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "CELEBRATING EARTH DAY 2025",
      subtitle: "STUDENT-LED SAPLING PLANTATION DRIVE",
    },
    {
      id: "6",
      imageUrl: "/placeholder.svg?height=600&width=340",
      videoUrl: "/Videos/Reel6.mp4", // Replace with actual video URL
      postUrl: "https://www.instagram.com/reel/DJPIevNKmyF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "CELEBRATING OUR CBSE 10TH TOPPERS",
      subtitle: "PRIDE OF MONTESSORI!",
    },

];

const CARD_WIDTH = 320;
const CARD_GAP = 20;
const AUTOSCROLL_INTERVAL = 30;
const AUTOSCROLL_STEP = 1;

const InstaReels = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [id: string]: HTMLVideoElement | null }>({});
  const [isPaused, setIsPaused] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused || playingVideo) return;
    const el = scrollRef.current;
    if (!el) return;

    let frame: number;
    const scroll = () => {
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += AUTOSCROLL_STEP;
      }
      frame = window.setTimeout(scroll, AUTOSCROLL_INTERVAL);
    };
    frame = window.setTimeout(scroll, AUTOSCROLL_INTERVAL);
    return () => clearTimeout(frame);
  }, [isPaused, playingVideo]);

  // Pause all other videos when one is played
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video) {
        if (playingVideo !== id) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [playingVideo]);

  // Play video when play button is pressed
  const handlePlayPause = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;
    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      setPlayingVideo(id);
      // Try to play (with sound)
      setTimeout(() => {
        video.play().catch(() => {
          // If browser blocks, mute and play
          video.muted = true;
          video.play();
        });
      }, 0);
    }
  };

  // Navigation
  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -(CARD_WIDTH + CARD_GAP) * 2 : (CARD_WIDTH + CARD_GAP) * 2;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 sm:py-16 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
              <span className="relative inline-block">
                Campus Chronicles:
                <img
                  src="/Images/Doodles/LinePink.png"
                  alt="Underline"
                  className="w-[60%] absolute -bottom-6 sm:-bottom-8 lg:-bottom-10"
                />
              </span>{" "}
              Highlights of 2025
            </h2>
          </div>
          <a
            href="https://instagram.com/montessoricambridge"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            Follow Us
            <Instagram className="h-5 w-5 ml-2" />
          </a>
        </div>

        <div className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 opacity-90 hover:opacity-100"
            onClick={() => scrollBy("left")}
            aria-label="Scroll left"
            type="button"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          {/* Reel Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {reels.map((reel) => (
              <div key={reel.id} className="shrink-0 w-70 sm:w-[320px] mx-2 snap-start">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Reel Content */}
                  <div className="relative aspect-9/15 bg-gray-100">
                    <video
                      ref={el => { videoRefs.current[reel.id] = el }}
                      src={reel.videoUrl}
                      className="w-full h-full object-cover"
                      controls={false}
                      autoPlay={playingVideo === reel.id}
                      muted={false}
                      loop={false}
                      playsInline
                      preload="metadata"
                      onEnded={() => setPlayingVideo(null)}
                      tabIndex={0}
                      style={{ cursor: "pointer" }}
                      onClick={() => handlePlayPause(reel.id)}
                    />
                    {/* Play/Pause Button */}
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        handlePlayPause(reel.id);
                      }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition duration-300 z-10"
                      aria-label={playingVideo === reel.id ? "Pause video" : "Play video"}
                    >
                      {playingVideo === reel.id ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </button>
                    
                  </div>
                  {/* View on Instagram Button */}
                  <a
                    href={reel.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    View on Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 opacity-90 hover:opacity-100"
            onClick={() => scrollBy("right")}
            aria-label="Scroll right"
            type="button"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstaReels;