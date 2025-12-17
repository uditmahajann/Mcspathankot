import type React from "react";
import { useEffect, useState } from "react";
import { PlayCircle, ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

const PressMedia: React.FC = () => {
  const printMedia = [
    { image: "/Images/Sample/news.jpg", title: "The Times of India covers MCS Annual Sports Meet" },
    { image: "/Images/Sample/news.jpg", title: "Education Today highlights MCS as a Top Emerging School" },
    { image: "/Images/Sample/news.jpg", title: "Hindustan Times features student success stories" },
    { image: "/Images/Sample/news.jpg", title: "The Tribune on Montessori’s STEM Education Drive" },
    { image: "/Images/Sample/news.jpg", title: "Punjab Kesari showcases our environmental initiative" },
    { image: "/Images/Sample/news.jpg", title: "Punjab Kesari showcases our environmental initiative" },
    { image: "/Images/Sample/news.jpg", title: "Punjab Kesari showcases our environmental initiative" },
  ];

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

  const mediaLogos = [
    "/Images/MediaLogos/TimesNow.png",
    "/Images/MediaLogos/NDTV.png",
    "/Images/MediaLogos/HindustanTimes.png",
    "/Images/MediaLogos/TheHindu.png",
    "/Images/MediaLogos/TOI.png",
    "/Images/MediaLogos/DNA.png",
    "/Images/MediaLogos/ANI.png",
    "/Images/MediaLogos/ThePrint.png",
    "/Images/MediaLogos/Tribune.png",
  ];

  const pressHighlights = [
    {
      date: "05 SEP 2025",
      title: "MCS Celebrates Teacher’s Day with a Grand Felicitation Ceremony",
      description:
        "Our annual celebration to honor educators was covered by multiple national publications. The event emphasized the importance of holistic teaching in modern education.",
      thumbnail: "/Images/Sample/Media.jpg",
      source: "The Week, India Today, Hindustan Times",
    },
    {
      date: "15 AUG 2025",
      title: "Independence Day Parade Wins Media Attention",
      description:
        "The school’s creative parade depicting India’s scientific progress featured on Bharat Express and The Tribune.",
      thumbnail: "/Images/Sample/Media.jpg",
      source: "Bharat Express, The Tribune",
    },
    {
      date: "05 SEP 2025",
      title: "MCS Celebrates Teacher’s Day with a Grand Felicitation Ceremony",
      description:
        "Our annual celebration to honor educators was covered by multiple national publications. The event emphasized the importance of holistic teaching in modern education.",
      thumbnail: "/Images/Sample/Media.jpg",
      source: "The Week, India Today, Hindustan Times",
    },
    {
      date: "15 AUG 2025",
      title: "Independence Day Parade Wins Media Attention",
      description:
        "The school’s creative parade depicting India’s scientific progress featured on Bharat Express and The Tribune.",
      thumbnail: "/Images/Sample/Media.jpg",
      source: "Bharat Express, The Tribune",
    },
    {
      date: "05 SEP 2025",
      title: "MCS Celebrates Teacher’s Day with a Grand Felicitation Ceremony",
      description:
        "Our annual celebration to honor educators was covered by multiple national publications. The event emphasized the importance of holistic teaching in modern education.",
      thumbnail: "/Images/Sample/Media.jpg",
      source: "The Week, India Today, Hindustan Times",
    },
    {
      date: "15 AUG 2025",
      title: "Independence Day Parade Wins Media Attention",
      description:
        "The school’s creative parade depicting India’s scientific progress featured on Bharat Express and The Tribune.",
      thumbnail: "/Images/Sample/Media.jpg",
      source: "Bharat Express, The Tribune",
    },
  ];

  // ---------- New state for requested features ----------
  // Index of currently-open fullscreen image (null = closed)
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  // Whether the "View All" gallery overlay is open
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Pagination for pressHighlights (3 per page)
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.max(1, Math.ceil(pressHighlights.length / ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHighlights = pressHighlights.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Keyboard support (Esc + arrows)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIdx(null);
      if (e.key === "ArrowRight") setActiveImageIdx((prev) =>
        prev === null ? 0 : (prev + 1) % printMedia.length
      );
      if (e.key === "ArrowLeft") setActiveImageIdx((prev) =>
        prev === null ? 0 : (prev - 1 + printMedia.length) % printMedia.length
      );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [printMedia.length]);

  // ---------- Render ----------
  return (
    <main className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">

      {/* Print Media Section */}
      <section className="bg-white py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 bg-blue-950 text-white rounded-2xl py-10 px-8 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-poppins font-semibold mb-4">MCS in News</h2>
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

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {printMedia.map((item, i) => (
              // each image is now clickable to open fullscreen
              <button
                key={i}
                onClick={() => setActiveImageIdx(i)}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition focus:outline-none cursor-pointer"
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
      <section className="py-16">
        <h2 className="text-2xl sm:text-3xl text-gray-900 font-poppins font-semibold mb-8">Featured Media Coverage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shortVideos.map((video, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-gray-50"
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
      <section className="py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl text-gray-900 font-poppins font-semibold mb-8">Press Highlights</h2>

        {/* Render only current page's items (3 per page) */}
        {currentHighlights.map((press, i) => (
          <div
            key={startIndex + i}
            className="grid md:grid-cols-2 gap-6 mb-14 bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={press.thumbnail}
                alt={press.title}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="text-sm text-gray-500 font-medium mb-3">
                {press.date} • {press.source}
              </div>
              <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">
                {press.title}
              </h3>
              <p className="text-gray-700 font-inter mb-4">{press.description}</p>
              <a
                href="#"
                className="text-blue-700 font-medium inline-flex items-center gap-1 hover:underline"
              >
                View Full Coverage <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}

        {/* Pagination controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-base font-inter text-gray-600">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, pressHighlights.length)} of {pressHighlights.length}
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
      <section className="bg-blue-900 py-12 text-center text-white rounded-xl">
        <h3 className="text-2xl font-poppins font-bold mb-2">
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
              className="absolute top-3 right-3 z-20 text-white bg-black/60 rounded-full p-2 shadow hover:bg-black cursor-pointer"
              onClick={() => setActiveImageIdx(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>


            {/* Prev / Next */}
                <button
                  onClick={() =>
                    setActiveImageIdx((prev) =>
                      prev !== null ? (prev - 1 + printMedia.length) % printMedia.length : 0
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIdx((prev) =>
                      prev !== null ? (prev + 1) % printMedia.length : 0
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

            <img
              src={printMedia[activeImageIdx].image}
              alt={printMedia[activeImageIdx].title}
              className="w-full h-auto min-h-[75vh] object-contain rounded-xl"
            />

          

            <div className="mt-3 text-center text-white">
              <div className="text-lg font-semibold">{printMedia[activeImageIdx].title}</div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Gallery overlay (View All) ---------- */}
      {isGalleryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-100 flex items-start justify-center overflow-auto bg-black/60 p-12"
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

            <h3 className="text-2xl font-poppins font-semibold mb-4">All Print Coverage</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {printMedia.map((p, i) => (
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

export default PressMedia;




// import type React from "react";
// import { PlayCircle, ArrowRight, ExternalLink } from "lucide-react";

// const PressMedia: React.FC = () => {
//   const printMedia = [
//     { image: "/Images/Sample/news.jpg", title: "The Times of India covers MCS Annual Sports Meet" },
//     { image: "/Images/Sample/news.jpg", title: "Education Today highlights MCS as a Top Emerging School" },
//     { image: "/Images/Sample/news.jpg", title: "Hindustan Times features student success stories" },
//     { image: "/Images/Sample/news.jpg", title: "The Tribune on Montessori’s STEM Education Drive" },
//     { image: "/Images/Sample/news.jpg", title: "Punjab Kesari showcases our environmental initiative" },
//   ];

//   const shortVideos = [
//     {
//       title: "Montessori Cambridge School Pathankot, Vice Chairman's Message",
//       source: "MERA PUNJAB FW",
//       link: "https://www.youtube.com/embed/hu_DD5rMl8c?si=UAlnyE-IcmVN3M13",
//     },
//     {
//       title: "Montessori Cambridge School Pathankot, Principal's Message",
//       source: "MERA PUNJAB FW",
//       link: "https://www.youtube.com/embed/Lo0qcOC1R2Y?si=A7bup_4qitYAd-an",
//     },
//     {
//       title: "Montessori Cambridge School Pathankot Farewell Party 2024-25",
//       source: "NTV24 NETWORK",
//       link: "https://www.youtube.com/embed/r-gxEi1nk4Q?si=UhLcL88q2HafSn3F",
//     },
//     // {
//     //   title: "Aaj Tak spotlights our Innovative Teaching Week",
//     //   source: "Aaj Tak",
//     //   link: "https://www.youtube.com/embed/6hmcW1-b-U0?si=Z7_RJn9eN1dIY3Ff",
//     // },
//     // {
//     //   title: "Aaj Tak spotlights our Innovative Teaching Week",
//     //   source: "Aaj Tak",
//     //   link: "https://www.youtube.com/embed/TPlQInOvww0?si=TVJvJykNwEcvU5cm",
//     // },
//     // {
//     //   title: "Aaj Tak spotlights our Innovative Teaching Week",
//     //   source: "Aaj Tak",
//     //   link: "https://www.youtube.com/embed/awj2zEqS72k?si=XraBVx0UpjeYG-dW",
//     // },
    
//   ];

//   const mediaLogos = [
//     "/Images/MediaLogos/TimesNow.png",
//     "/Images/MediaLogos/NDTV.png",
//     "/Images/MediaLogos/HindustanTimes.png",
//     "/Images/MediaLogos/TheHindu.png",
//     "/Images/MediaLogos/TOI.png",
//     "/Images/MediaLogos/DNA.png",
//     "/Images/MediaLogos/ANI.png",
//     "/Images/MediaLogos/ThePrint.png",
//     "/Images/MediaLogos/Tribune.png",
//   ];

//   const pressHighlights = [
//     {
//       date: "05 SEP 2025",
//       title: "MCS Celebrates Teacher’s Day with a Grand Felicitation Ceremony",
//       description:
//         "Our annual celebration to honor educators was covered by multiple national publications. The event emphasized the importance of holistic teaching in modern education.",
//       thumbnail: "/Images/Sample/Media.jpg",
//       source: "The Week, India Today, Hindustan Times",
//     },
//     {
//       date: "15 AUG 2025",
//       title: "Independence Day Parade Wins Media Attention",
//       description:
//         "The school’s creative parade depicting India’s scientific progress featured on Bharat Express and The Tribune.",
//       thumbnail: "/Images/Sample/Media.jpg",
//       source: "Bharat Express, The Tribune",
//     },
//     {
//       date: "05 SEP 2025",
//       title: "MCS Celebrates Teacher’s Day with a Grand Felicitation Ceremony",
//       description:
//         "Our annual celebration to honor educators was covered by multiple national publications. The event emphasized the importance of holistic teaching in modern education.",
//       thumbnail: "/Images/Sample/Media.jpg",
//       source: "The Week, India Today, Hindustan Times",
//     },
//     {
//       date: "15 AUG 2025",
//       title: "Independence Day Parade Wins Media Attention",
//       description:
//         "The school’s creative parade depicting India’s scientific progress featured on Bharat Express and The Tribune.",
//       thumbnail: "/Images/Sample/Media.jpg",
//       source: "Bharat Express, The Tribune",
//     },
//     {
//       date: "05 SEP 2025",
//       title: "MCS Celebrates Teacher’s Day with a Grand Felicitation Ceremony",
//       description:
//         "Our annual celebration to honor educators was covered by multiple national publications. The event emphasized the importance of holistic teaching in modern education.",
//       thumbnail: "/Images/Sample/Media.jpg",
//       source: "The Week, India Today, Hindustan Times",
//     },
//     {
//       date: "15 AUG 2025",
//       title: "Independence Day Parade Wins Media Attention",
//       description:
//         "The school’s creative parade depicting India’s scientific progress featured on Bharat Express and The Tribune.",
//       thumbnail: "/Images/Sample/Media.jpg",
//       source: "Bharat Express, The Tribune",
//     },
//   ];

//   return (
//     <main className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
      
//       {/* Print Media Section */}
//       <section className="bg-white py-10">
//           <div className="grid lg:grid-cols-3 gap-10">
//             <div className="lg:col-span-1 bg-blue-950 text-white rounded-2xl py-10 px-8 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-4xl font-poppins font-semibold mb-4">MCS in News</h2>
//                 <p className="text-blue-100 font-inter leading-relaxed mb-8">
//                   Our initiatives, events, and student achievements are regularly featured across print, digital, and broadcast media — showcasing the values and vision of our learning community.
//                 </p>
//               </div>
//               <a
//                 href="#"
//                 className="text-orange-400 font-poppins font-semibold uppercase tracking-wide hover:underline"
//               >
//                 View All
//               </a>
//             </div>

//             <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-5">
//               {printMedia.map((item, i) => (
//                 <div key={i} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-48 object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//       </section>

//       {/* Short Videos Section (with public embeds) */}
//       <section className="py-16">
//           <h2 className="text-2xl sm:text-3xl text-gray-900 font-poppins font-semibold mb-8">Media Coverage</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {shortVideos.map((video, i) => (
//               <div
//                 key={i}
//                 className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-gray-50"
//               >
//                 {/* Embed YouTube Video */}
//                 <div className="aspect-video w-full overflow-hidden">
//                   <iframe
//                     src={video.link}
//                     title={video.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="w-full h-full"
//                   ></iframe>
//                 </div>

//                 <div className="p-4">
//                   <p className="text-lg font-inter font-medium text-gray-900">{video.title}</p>
//                   <p className="mt-2 text-sm font-inter text-gray-600 font-medium">{video.source}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//       </section>

//       {/* Media Logos */}
//       {/* <section className="bg-white py-12 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <h3 className="text-center text-gray-700 text-sm tracking-wide uppercase mb-6">
//             Columns • Recognition • Awards
//           </h3>
//           <div className="flex flex-wrap justify-center gap-8 opacity-80">
//             {mediaLogos.map((logo, i) => (
//               <img
//                 key={i}
//                 src={logo}
//                 alt="Media Logo"
//                 className="h-10 object-contain grayscale hover:grayscale-0 transition"
//               />
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Press Highlights */}
//       <section className="py-16 bg-white">
//           <h2 className="text-2xl sm:text-3xl text-gray-900 font-poppins font-semibold mb-8">Press Highlights</h2>
//           {pressHighlights.map((press, i) => (
//             <div
//               key={i}
//               className="grid md:grid-cols-2 gap-6 mb-14 bg-white rounded-2xl shadow-sm overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={press.thumbnail}
//                   alt={press.title}
//                   className="w-full h-72 object-cover"
//                 />
//               </div>
//               <div className="p-6 flex flex-col justify-center">
//                 <div className="text-sm text-gray-500 font-medium mb-3">
//                   {press.date} • {press.source}
//                 </div>
//                 <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">
//                   {press.title}
//                 </h3>
//                 <p className="text-gray-700 mb-4">{press.description}</p>
//                 <a
//                   href="#"
//                   className="text-blue-700 font-medium inline-flex items-center gap-1 hover:underline"
//                 >
//                   View Full Coverage <ArrowRight className="h-4 w-4" />
//                 </a>
//               </div>
//             </div>
//           ))}
//       </section>

//       {/* CTA Section */}
//       <section className="bg-blue-900 py-12 text-center text-white rounded-xl">
        
//         <h3 className="text-2xl font-poppins font-bold mb-4">
//           For Press & Media Inquiries
//         </h3>
//         <p className="text-blue-100 mb-6">
//           For media inquiries, press releases, interview requests, event coverage or any other additional information, please contact our Media Desk.
//         </p>
//         <a
//           href="/contact"
//           className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-medium py-3 px-6 rounded-full transition"
//         >
//           Contact Media Desk
//         </a>
//       </section>
//     </main>
//   );
// };

// export default PressMedia;



// "use client"

// import { useState } from "react"
// import { Newspaper, Download, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

// const pressReleaseData = [
//   {
//     id: 1,
//     title: "School Achieves 100% Results in Board Examinations",
//     date: "May 15, 2025",
//     summary:
//       "Our school has achieved outstanding results in the CBSE Board Examinations with a 100% pass rate and 85% students scoring above 90% marks.",
//     content:
//       "We are proud to announce that our school has achieved exceptional results in the CBSE Board Examinations for the academic year 2024-25. All students have successfully passed the examinations, with 85% of students scoring above 90% marks. This remarkable achievement is a testament to the hard work and dedication of our students, the guidance of our teachers, and the support of parents. The school has maintained its tradition of academic excellence, with several students securing top ranks at the regional and national levels.",
//     downloadUrl: "#",
//     fileSize: "320 KB",
//   },
//   {
//     id: 2,
//     title: "School Hosts International Education Conference",
//     date: "April 28, 2025",
//     summary:
//       "Our school successfully hosted the International Education Conference with participation from educators across 15 countries.",
//     content:
//       'Our school recently hosted the prestigious International Education Conference, bringing together educators and education experts from 15 countries. The three-day conference focused on "Future of Education in the Digital Age" and featured keynote speeches, panel discussions, and workshops on various aspects of modern education. The event was inaugurated by the Minister of Education and attended by over 500 delegates. The conference provided a platform for sharing best practices, innovative teaching methodologies, and the latest research in education.',
//     downloadUrl: "#",
//     fileSize: "450 KB",
//   },
//   {
//     id: 3,
//     title: "School Wins National Green School Award",
//     date: "April 10, 2025",
//     summary:
//       "Our school has been recognized with the National Green School Award for its sustainable practices and environmental initiatives.",
//     content:
//       "We are delighted to announce that our school has been honored with the prestigious National Green School Award for its outstanding contribution to environmental conservation and sustainability. The award recognizes the school's comprehensive approach to environmental education, including our solar power installation, rainwater harvesting system, waste management program, and organic garden. The student-led Green Club has been instrumental in implementing various eco-friendly initiatives across the campus. The award was presented at a ceremony in the capital, attended by environmental leaders and education officials.",
//     downloadUrl: "#",
//     fileSize: "280 KB",
//   },
//   {
//     id: 4,
//     title: "School Launches State-of-the-Art STEM Innovation Lab",
//     date: "March 25, 2025",
//     summary:
//       "Our school has inaugurated a cutting-edge STEM Innovation Lab equipped with the latest technology to foster scientific thinking and innovation.",
//     content:
//       "Our school has taken a significant step towards enhancing science and technology education with the inauguration of a state-of-the-art STEM Innovation Lab. The lab is equipped with advanced equipment including 3D printers, robotics kits, virtual reality systems, and various scientific instruments. The facility aims to provide students with hands-on experience in science, technology, engineering, and mathematics, fostering innovation and problem-solving skills. The lab was inaugurated by a renowned scientist and will support various STEM programs, competitions, and research projects for students across all grade levels.",
//     downloadUrl: "#",
//     fileSize: "380 KB",
//   },
// ]

// const mediaFeatures = [
//   {
//     id: 1,
//     publication: "Education Today",
//     title: "Leading Schools Transforming Education",
//     date: "May 2025",
//     logo: "/Images/Logos/Sof.jpg",
//     link: "#",
//   },
//   {
//     id: 2,
//     publication: "City Chronicle",
//     title: "Schools Setting New Standards in Academic Excellence",
//     date: "April 2025",
//     logo: "/Images/Logos/Sof.jpg",
//     link: "#",
//   },
//   {
//     id: 3,
//     publication: "Education Weekly",
//     title: "Innovation in School Education: Success Stories",
//     date: "March 2025",
//     logo: "/Images/Logos/Sof.jpg",
//     link: "#",
//   },
//   {
//     id: 4,
//     publication: "National School Review",
//     title: "Top 50 Schools Making a Difference",
//     date: "February 2025",
//     logo: "/Images/Logos/Sof.jpg",
//     link: "#",
//   },
// ]

// const PressRelease = () => {
//   const [expandedRelease, setExpandedRelease] = useState(null)

//   const toggleRelease = (id) => {
//     setExpandedRelease(expandedRelease === id ? null : id)
//   }

//   return (
//     <section id="press" className="pb-10 sm:pb-16 my-10 bg-white">
//       <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
//         <div className="text-center mb-10 sm:mb-12 lg:mb-20">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//             Press{" "}
//             <span className="relative inline-block">
//               Releases
//               <img
//                 src="/Images/Doodles/SparkGreen.png"
//                 alt="Spark"
//                 className="absolute w-10 sm:w-12 md:w-14 -top-6 -right-15"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             Stay informed about the latest news, achievements, and announcements from our school. Our press releases
//           provide detailed information about significant events and milestones.
//           </p>
//         </div>
      
//         {/* Media features */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Media Features</h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {mediaFeatures.map((feature) => (
//               <a
//                 key={feature.id}
//                 href={feature.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col items-center text-center"
//               >
//                 <img
//                   src={feature.logo || "/placeholder.svg"}
//                   alt={feature.publication}
//                   className="h-16 mb-4 object-contain"
//                 />
//                 <h4 className="font-inter font-semibold text-lg text-gray-900 mb-2">{feature.publication}</h4>
//                 <p className="font-inter text-md text-gray-600 mb-2">{feature.title}</p>
//                 <span className="font-inter text-sm text-gray-500">{feature.date}</span>
//                 <div className="font-inter mt-3 text-primarydark hover:text-secondarydark text-sm font-medium flex items-center">
//                   Read Article
//                   <ExternalLink size={14} className="ml-1" />
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Press releases */}
//         <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Official Press Releases</h3>

//         <div className="space-y-6">
//           {pressReleaseData.map((release) => (
//             <div key={release.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h4 className="text-lg font-poppins font-bold text-gray-900">{release.title}</h4>
//                   <div className="flex font-inter items-center text-sm text-gray-700">
//                     <Calendar size={16} className="mr-1" />
//                     {release.date}
//                   </div>
//                 </div>

//                 <p className="text-gray-700 mb-4 font-inter">
//                   {expandedRelease === release.id ? release.content : release.summary}
//                 </p>

//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-200">
//                   <button
//                     onClick={() => toggleRelease(release.id)}
//                     className="text-blue-600 hover:text-blue-800 font-inter font-medium text-md flex items-center mb-4 sm:mb-0 cursor-pointer"
//                   >
//                     {expandedRelease === release.id ? (
//                       <>
//                         Show Less
//                         <ChevronUp size={18} className="ml-1" />
//                       </>
//                     ) : (
//                       <>
//                         Read More
//                         <ChevronDown size={18} className="ml-1" />
//                       </>
//                     )}
//                   </button>

//                   <a
//                     href={release.downloadUrl}
//                     className="inline-flex items-center font-inter text-sm text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 px-4 py-1.5 rounded-full transition-colors"
//                   >
//                     <Download size={16} className="mr-1" />
//                     <span>Download PDF ({release.fileSize})</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Media contact */}
//         <div className="border-t border-gray-200 py-12">
//           <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Media Contact</h3>
//           <div className="bg-white border border-gray-200 rounded-lg p-6">
//             <div className="md:flex items-start gap-12">
//               <div className="md:w-1/2 font-inter">
//                 <h4 className=" font-semibold text-gray-900 mb-2">For Press Inquiries</h4>
//                 <p className="text-gray-600 mb-4">
//                   For media inquiries, interview requests, or additional information, please contact our Public
//                   Relations department.
//                 </p>
//                 <div className="space-y-2">
//                   <p className="text-gray-700">
//                     <span className="font-medium">Contact Person:</span> Ms. Meenakshi 
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-medium">Position:</span> Public Relations Officer
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-medium">Email:</span>{" "}
//                     <a href="mailto:pr@schoolname.edu" className="text-primarydark hover:underline">
//                       pr@schoolname.edu
//                     </a>
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-medium">Phone:</span>{" "}
//                     <a href="tel:+1234567890" className="text-primarydark hover:underline">
//                       +123-456-7890
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               <div className="md:w-1/2 font-inter">
//                 <h4 className="font-semibold text-gray-800 mb-2">Media Visit Request</h4>
//                 <p className="text-gray-600 mb-4">
//                   Interested in visiting our campus for a story? Please fill out our media visit request form at least
//                   one week in advance.
//                 </p>
//                 <a href="#" className="inline-flex items-center text-primarydark hover:text-secondarydark font-medium">
//                   Media Visit Request Form
//                   <ExternalLink size={16} className="ml-1" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PressRelease