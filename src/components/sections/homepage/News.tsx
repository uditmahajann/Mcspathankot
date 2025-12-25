import { ArrowRight } from "lucide-react";
import CtaButton from "../../interface/CtaButton";

const news = [
  {
    title: "Outstanding Board Results 2024",
    description:
      "Our students delivered exceptional performance in the board examinations, continuing our long-standing tradition of academic excellence.",
    date: "March 2024",
    image: "/Images/Heros/samplehero.JPG",
    link: "/news/board-results-2024",
  },
  {
    title: "Annual Sports Meet 2024",
    description:
      "A vibrant celebration of teamwork, discipline, and sportsmanship with enthusiastic participation from all grades.",
    date: "February 2024",
    image: "/Images/Heros/samplehero.JPG",
    link: "/news/annual-sports-meet-2024",
  },
  {
    title: "Admissions Open for 2025–26",
    description:
      "Admissions are now open for Pre-Primary to Senior Secondary classes for the academic year 2025–26.",
    date: "Ongoing",
    image: "/Images/Heros/samplehero.JPG",
    link: "/admissions",
  },
  {
    title: "Science Exhibition 2024",
    description:
      "Students showcased innovative models and projects demonstrating creativity and scientific thinking.",
    date: "January 2024",
    image: "/Images/Heros/samplehero.JPG",
    link: "/news/science-exhibition-2024",
  },
  {
    title: "Inter-School Debate Competition",
    description:
      "Our students excelled in the inter-school debate competition, earning accolades for their performance.",
    date: "December 2023",
    image: "/Images/Heros/samplehero.JPG",
    link: "/news/inter-school-debate",
  },
  {
    title: "Inter-School Debate Competition",
    description:
      "Our students excelled in the inter-school debate competition, earning accolades for their performance.",
    date: "December 2023",
    image: "/Images/Heros/samplehero.JPG",
    link: "/news/inter-school-debate",
  },
];

const MAX_ITEMS = 5;

const News = () => {
  // Limit items
  const limitedNews = news.slice(0, MAX_ITEMS);

  // First item = featured
  const [featured, ...others] = limitedNews;

  return (
    <section className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">

        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
            School Highlights &{" "}
            <span className="relative inline-block">
              News
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 -top-6 -right-10 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with inspiring moments, milestones, memories and all the latest updates from Montessori Cambridge School
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

          {/* Featured News */}
          {featured && (
            <a
              href={featured.link}
              className="group relative md:col-span-2 h-120 lg:h-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md"
            >
              {/* Background Image */}
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="font-inter font-medium text-sm sm:text-base text-amber-400">
                  {featured.date}
                </span>

                <h3 className="mt-2 font-raleway text-2xl sm:text-3xl font-bold text-white">
                  {featured.title}
                </h3>

                <p className="mt-3 max-w-xl font-inter text-sm sm:text-base text-white/90">
                  {featured.description}
                </p>

                <span className="mt-6 inline-block font-inter text-sm sm:text-base font-medium text-white underline-offset-4 group-hover:underline">
                  Read more →
                </span>
              </div>
            </a>

          )}

          {/* Other News */}
          <div className="flex flex-col gap-5">
            {others.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="group flex flex-row overflow-hidden bg-white transition h-36 lg:h-auto"
              >
                <div className="h-full w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>

                <div className="px-4 py-3 font-inter">
                  <span className="text-sm font-medium text-blue-800">{item.date}</span>
                  <h4 className="mt-2 font-semibold text-gray-900 group-hover:underline line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* CTA */}

        <div className="mt-8 sm:mt-12 flex items-center justify-center">
          <CtaButton text="View All Highlights" href="" />
        </div>

      </div>
    </section>
  );
};

export default News;