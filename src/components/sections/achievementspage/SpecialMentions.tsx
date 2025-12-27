import React from "react";

type BannerItem = {
  _id: string;
  title?: string;
  image: {
    asset: {
      url: string;
    };
  };
};

type Props = {
  banners: BannerItem[];
};


const SpecialMentions: React.FC<Props> = ({ banners }) => {
  return (
    <section id="global-recognition" className="my-10 md:my-20 py-15 md:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6 min-[540px]:px-12 sm:px-16 lg:px-20 text-center">
        <div className="text-center mb-10">
        {/* Header */}
        <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium leading-normal">
          Student Achievers Showcase
        </h2>
        <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
          Every achievement at Montessori Cambridge School reflects curiosity, discipline, and the courage to shine — inside and beyond the classroom.
        </p>
        </div>

        {/* University Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center justify-center">
          {banners.map((b) => (
            <div
              key={b._id}
              className="flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={b.image.asset.url}
                alt={b.title}
                className="object-contain lg:grayscale hover:grayscale-0 transition rounded-xl"
                loading="lazy"
              />
              <p className="mt-3 text-base md:text-lg font-inter font-medium text-gray-100">{b.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMentions;
