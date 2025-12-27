import React, { useState, useEffect } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

type Banner = {
  _id: string;
  title?: string;
  imageUrl: string;
};

type Props = {
  banners: Banner[];
};


const BannerGallery: React.FC<Props> = ({ banners }) => {

  const MAX_ITEMS = 3;
  const visibleBanners = banners.slice(0, MAX_ITEMS);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (index: number) => {
    setCurrentIdx(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIdx((prev) =>
      prev === 0 ? visibleBanners.length - 1 : prev - 1
    );

  const nextImage = () =>
    setCurrentIdx((prev) =>
      prev === visibleBanners.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <>
      {/* Image Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-6 flex-wrap">
          {visibleBanners.map((banner, idx) => (
            <div
              key={idx}
              className="md:w-80 xl:w-90 overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(idx)}
            >
              <img
                src={banner.imageUrl}
                alt={banner.title || "Achievement Banner"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={prevImage}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={visibleBanners[currentIdx].imageUrl}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={nextImage}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
};

export default BannerGallery;
