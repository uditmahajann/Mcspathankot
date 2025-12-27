import CtaButton from "../../interface/CtaButton";
import React, { useState } from "react"
import BannerGallery from "../../elements/BannerGallery";

type Banner = {
  _id: string;
  title?: string;
  imageUrl: string;
};

type Props = {
  classXII: Banner[];
  classX: Banner[];
  students: Banner[];
};

const categories = [
  { key: "class-xii", label: "Class XII Toppers" },
  { key: "class-x", label: "Class X Toppers" },
  { key: "student-achievers", label: "Student Achievers" },
];

const Achievements: React.FC<Props> = ({
  classXII,
  classX,
  students,
}) => {
  const [activeCategory, setActiveCategory] = useState("class-xii");

  return (
    <section
      className="relative py-4 sm:py-10 my-10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 xl:px-0">
        <div className="text-center mb-6">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
            Our Annual {" "}
            <span className="relative z-10 inline-block pl-3 pr-2">
              Hall of Fame
              <span className="absolute inset-0 -z-10 -top-6 md:-top-8">
                <img
                  src="/Images/Doodles/CircleYellow.png"
                  alt="Circle Doodle"
                  className="w-full h-auto object-contain"
                />
              </span>
            </span>{" "}
            2024-25
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Celebrating the outstanding talents and achievements of our students across academics, arts, sports & co-curricular excellence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-inter font-medium cursor-pointer border-2 transition ${activeCategory === cat.key
                ? "bg-primary text-white"
                : "bg-white text-primary border-blue-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Conditional rendering of section components */}
        <div className="mt-8">
          {activeCategory === "class-xii" && (
            <BannerGallery banners={classXII} />
          )}

          {activeCategory === "class-x" && (
            <BannerGallery banners={classX} />
          )}

          {activeCategory === "student-achievers" && (
            <BannerGallery banners={students} />
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 flex items-center justify-center">
          <CtaButton text="View All Achievements" href="" />
        </div>
      </div>
    </section>
  )
}

export default Achievements