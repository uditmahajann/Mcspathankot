import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react";
import CtaButton from "../../interface/CtaButton";

interface HappeningItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
}

const happeningsData: HappeningItem[] = [
  {
    id: 1,
    title: "CBSE CLASS XII RESULT 2024-25",
    date: "May 16, 2025",
    description:
      "Join us for our Annual Sports Day celebration featuring track and field events, team sports competitions, and special performances by students.",
    image: "/Images/Campus/McsEntry.JPG",
    link: "/news-detail",
  },
  {
    id: 2,
    title: "National Science Olympiad Winners",
    date: "2023-11-28",
    description:
      "Congratulations to our students who secured top positions in the National Science Olympiad, bringing laurels to our school.",
    image: "/Images/Campus/McsEntry.JPG",
    link: "/news-detail",
  },
  {
    id: 3,
    title: "New STEM Lab Inauguration",
    date: "2023-11-10",
    description:
      "We are proud to announce the inauguration of our state-of-the-art STEM laboratory, enhancing our science and technology curriculum.",
    image: "/Images/Campus/McsEntry.JPG",
    link: "/news-detail",
  },
  {
    id: 4,
    title: "Holiday Schedule for Winter Break",
    date: "2023-12-01",
    description:
      "The school will remain closed for winter break from December 24th to January 5th. Classes will resume on January 6th.",
    image: "/Images/Campus/McsEntry.JPG",
    link: "/news-detail",
  },
  {
    id: 5,
    title: "Holiday Schedule for Winter Break",
    date: "2023-12-01",
    description:
      "The school will remain closed for winter break from December 24th to January 5th. Classes will resume on January 6th.",
    image: "/Images/Campus/McsEntry.JPG",
    link: "/news-detail",
  },
  {
    id: 6,
    title: "Holiday Schedule for Winter Break",
    date: "2023-12-01",
    description:
      "The school will remain closed for winter break from December 24th to January 5th. Classes will resume on January 6th.",
    image: "/Images/Campus/McsEntry.JPG",
    link: "/news-detail",
  },
];

const CARD_WIDTH = 400; // px
const CARD_GAP = 20; // px

const News = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update arrow state on scroll
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  // Scroll by container width (or by one card, as you prefer)
  const handlePrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: -(scrollRef.current.clientWidth * 0.9),
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth * 0.9,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  // Initial check on mount
  // (optional: add useEffect(() => checkScroll(), []); if you want initial state correct)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            Latest Happenings @MCS
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Explore inspiring moments, milestones, memories and all the latest updates from Montessori Cambridge School
          </p>
        </div>

        {/* 🆕 News Grid (2-column layout) */}
        <div className="grid md:grid-cols-2 gap-8">
          {happeningsData.slice(0, 6).map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="flex flex-col md:flex-row group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="md:w-1/3 h-40 md:h-auto overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-inter mb-2">
                  <Clock className="h-4 w-4" />
                  {formatDate(item.date)}
                </div>

                <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2 group-hover:text-primary transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-2 font-inter">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="mt-4 inline-flex items-center text-blue-600 font-medium text-sm sm:text-base hover:underline group-hover:text-blue-700 transition-all"
                >
                  Read More <ArrowRight className="ml-1 h-5 w-5" />
                </a>

              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <CtaButton text="View All News & Events" href="/news-events" />
        </div>
      </div>
    </section>

  );
};

export default News;