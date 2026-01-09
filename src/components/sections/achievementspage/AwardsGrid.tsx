import type React from "react"
import { urlFor } from "../../../lib/sanity";


interface Award {
  _id: string;
  name: string;
  year: number;
  description?: string;
  presentedBy?: string;
  image?: any;
}

interface AwardsGridProps {
  awards: Award[];
}


const AwardsGrid: React.FC<AwardsGridProps> = ({ awards }) => {
  return (
    <section id="awards" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Awards & {" "}
            <span className="relative inline-block">
              Recognitions
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-8 sm:w-10 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our commitment to academic excellence, innovation, and community engagement has been celebrated by reputed organizations across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (

            <div
              key={award._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
            >
              {award.image && (
                <img
                  src={urlFor(award.image).width(600).auto("format").url()}
                  alt={award.name}
                  className="w-full h-60 object-cover"
                />

              )}

              <div className="p-4 sm:p-5 text-left">
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-1 tracking-wide">
                  {award.name}
                </h3>

                {award.presentedBy && (
                  <p className="text-sm font-inter text-gray-600 mb-1">
                    {award.presentedBy}
                  </p>
                )}

                <p className="text-base font-inter font-semibold text-blue-800 mb-2">
                  {award.year}
                </p>

                {award.description && (
                  <p className="text-sm font-inter text-gray-700">
                    {award.description}
                  </p>
                )}
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;

