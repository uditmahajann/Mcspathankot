import type React from "react";
import { useEffect, useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

import { urlFor } from "../../../lib/sanity";

interface PrintMediaItem {
  _id: string;
  title: string;
  description?: string;
  image: any;
}


interface PressReleaseItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  source: string;
  link: string;
  thumbnail: any;
}


const PressRelease = ({
  pressReleases,
  printMedia,
}: {
  pressReleases: PressReleaseItem[];
  printMedia: PrintMediaItem[];
}) => {


  const mappedPressHighlights = pressReleases.map((p) => ({
    date: new Date(p.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).toUpperCase(),
    title: p.title,
    description: p.description,
    thumbnail: urlFor(p.thumbnail).width(1200).auto("format").url(),
    source: p.source,
    link: p.link,
  }));


  const mappedPrintMedia = printMedia.map((item) => ({
  id: item._id,
  title: item.title,
  description: item.description,
  image: urlFor(item.image).width(1200).auto("format").url(),
}));



  const shortVideos = [
    {
      title: "Montessori Cambridge School Pathankot, Vice Chairman's Message",
      source: "MERA PUNJAB FW",
      link: "https://www.youtube.com/embed/hu_DD5rMl8c?si=UAlnyE-IcmVN3M13",
    },
    {
      title: "Montessori Cambridge School Pathankot, Principal's Message",
      source: "MERA PUNJAB FW",
      link: "https://www.youtube.com/embed/Lo0qcOC1R2Y?si=A7bup_4qitYAd-an",
    },
    {
      title: "Montessori Cambridge School Pathankot Farewell Party 2024-25",
      source: "NTV24 NETWORK",
      link: "https://www.youtube.com/embed/r-gxEi1nk4Q?si=UhLcL88q2HafSn3F",
    },
  ];

  // ---------- New state for requested features ----------
  // Index of currently-open fullscreen image (null = closed)
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  // Whether the "View All" gallery overlay is open
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Pagination for pressHighlights (3 per page)
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.max(1, Math.ceil(mappedPressHighlights.length / ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHighlights = mappedPressHighlights.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Keyboard support (Esc + arrows)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIdx(null);
      if (e.key === "ArrowRight") setActiveImageIdx((prev) =>
        prev === null ? 0 : (prev + 1) % mappedPrintMedia.length
      );
      if (e.key === "ArrowLeft") setActiveImageIdx((prev) =>
        prev === null ? 0 : (prev - 1 + mappedPrintMedia.length) % mappedPrintMedia.length
      );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mappedPrintMedia.length]);

  // ---------- Render ----------
  return (
    <main className="bg-white mx-auto max-w-7xl px-6 min-[540px]:px-12 my-10 lg:my-16">

      {/* Print Media Section */}
      <section className="bg-white pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 bg-blue-900 text-white rounded-xl sm:rounded-2xl py-10 px-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-4">MCS in News</h2>
              <p className="text-blue-100 font-inter leading-relaxed mb-8">
                Our initiatives, events, and student achievements are regularly featured across print, digital, and broadcast media — showcasing the values and vision of our learning community.
              </p>
            </div>

            {/* View All now opens gallery overlay */}
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="text-orange-400 font-poppins font-semibold uppercase tracking-wide hover:underline text-left cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {mappedPrintMedia.map((item, i) => (
              // each image is now clickable to open fullscreen
              <button
                key={i}
                onClick={() => setActiveImageIdx(i)}
                className="rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition focus:outline-none cursor-pointer"
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Short Videos Section (with public embeds) */}
      <section className="pb-16 lg:pb-20">
        <h2 className="text-xl sm:text-2xl text-gray-900 font-poppins font-semibold mb-4 sm:mb-8">Featured Media Coverage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shortVideos.map((video, i) => (
            <div
              key={i}
              className="rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-gray-50"
            >
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  src={video.link}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="p-4">
                <p className="text-lg font-inter font-medium text-gray-900">{video.title}</p>
                <p className="mt-2 text-sm font-inter text-gray-600 font-medium">{video.source}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Highlights (paginated) */}
      <section className="pb-16 lg:pb-20 bg-white">
        <h2 className="text-xl sm:text-2xl text-gray-900 font-poppins font-semibold mb-4 sm:mb-8">Press Highlights</h2>

        {/* Render only current page's items (3 per page) */}
        {currentHighlights.map((press, i) => (
          <div
            key={startIndex + i}
            className="grid md:grid-cols-2 gap-1 sm:gap-2 xl:gap-6 mb-6 sm:mb-8 xl:mb-12 bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={press.thumbnail}
                alt={press.title}
                className="w-full h-60 sm:h-72 object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-center">
              <div className="text-sm text-gray-500 font-medium mb-3 leading-normal">
                {press.date} • {press.source}
              </div>
              <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">
                {press.title}
              </h3>
              <p className="text-gray-700 font-inter mb-4">{press.description}</p>
              <a
                href={press.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-medium inline-flex items-center gap-1 hover:underline"
              >
                View Full Coverage <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}

        {/* Pagination controls */}
        <div className="flex items-center justify-center sm:justify-between mt-6">
          <div className="hidden sm:block text-base font-inter text-gray-600">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, mappedPressHighlights.length)} of {mappedPressHighlights.length}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border border-gray-200 bg-gray-200 disabled:opacity-50 cursor-pointer"
            >
              Prev
            </button>
            <div className="text-base text-gray-700 font-inter">{currentPage} / {totalPages}</div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border border-gray-200 bg-blue-600 text-white disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 px-6 py-8 sm:py-12 text-center text-white rounded-xl">
        <h3 className="text-2xl font-poppins font-bold mb-2 tracking-wide">
          For Press & Media Inquiries
        </h3>
        <p className="text-blue-100 mb-6">
          For media inquiries, press releases, interview requests, event coverage or any other additional information, please contact our Media Desk.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-medium py-3 px-6 rounded-full transition"
        >
          Contact Media Desk
        </a>
      </section>

      {/* ---------- Fullscreen image modal (single image) ---------- */}
      {activeImageIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveImageIdx(null)}
        >
          <div
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 sm:top-3 sm:right-3 z-20 text-white bg-black/60 rounded-full p-2 shadow hover:bg-black cursor-pointer"
              onClick={() => setActiveImageIdx(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>


            {/* Prev / Next */}
            <button
              onClick={() =>
                setActiveImageIdx((prev) =>
                  prev !== null ? (prev - 1 + mappedPrintMedia.length) % mappedPrintMedia.length : 0
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setActiveImageIdx((prev) =>
                  prev !== null ? (prev + 1) % mappedPrintMedia.length : 0
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <img
              src={mappedPrintMedia[activeImageIdx].image}
              alt={mappedPrintMedia[activeImageIdx].title}
              className="w-full h-auto sm:max-h-[75vh] object-contain rounded-xl"
            />



            <div className="mt-3 text-center text-white">
              <div className="text-lg font-semibold">{mappedPrintMedia[activeImageIdx].title}</div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Gallery overlay (View All) ---------- */}
      {isGalleryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-100 flex items-start justify-center overflow-auto bg-black/60 p-5 sm:p-8 lg:p-12"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="w-full max-w-5xl bg-white rounded-xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsGalleryOpen(false)}
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl lg:text-2xl font-poppins font-semibold mb-4">All Print Coverage</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {mappedPrintMedia.map((p, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveImageIdx(i);
                    // keep gallery open closed so user sees fullscreen; close the gallery overlay
                    setIsGalleryOpen(false);
                  }}
                  className="rounded-lg overflow-hidden hover:shadow-lg transition focus:outline-none"
                >
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover cursor-pointer" />
                </button>
              ))}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="px-3 py-2 rounded-md border font-poppins font-medium border-gray-200 bg-primary text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default PressRelease;