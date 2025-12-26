import { useEffect, useState } from "react";
import { Award } from "lucide-react"

type AwardItem = {
  _id: string;
  name: string;
  description: string;
  year: number;
  presentedBy: string;
  image: string;
};

type Props = {
  awards: AwardItem[];
};


const AwardsSpotlight = ({ awards }: Props) => {

const INTERVAL = 3000; // 5 seconds (calm, premium)

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!awards || awards.length === 0) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % awards.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [awards]);

  const award = awards[active];

  return (
    <section className="relative bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">

      <picture>
          <img
            src="/Images/Sample/awardsbg.png"
            alt="MCS"
            className="hidden lg:block absolute -top-20 right-0"
          />
        </picture>

        <picture>
          <img
            src="/Images/Sample/awardsbg.png"
            alt="MCS"
            className="hidden lg:block absolute -bottom-20 right-0 scale-y-[-1]"
          />
        </picture>
        
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">

        {/* Spotlight Card */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 xl:gap-12">

            {/* Image */}
            <div className="w-full shadow-sm">
              <img
                src={award.image}
                alt={award.name}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center text-center">

              <p className="mb-4 text-base sm:text-lg xl:text-xl text-white leading-normal">
                {award.description}
              </p>

              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="w-16 md:w-24 h-px bg-amber-200/60"></div>
                <Award className="w-6 h-6 text-amber-200" />
                <div className="w-16 md:w-24 h-px bg-amber-200/60"></div>
              </div>

              {/* <span className="text-sm text-gray-500">{award.year}</span> */}

              <h3 className="mt-3 text-3xl sm:text-4xl xl:text-5xl font-raleway font-bold sm:font-black bg-linear-to-r from-yellow-800 via-yellow-200 to-yellow-800 text-transparent bg-clip-text uppercase leading-tight">
                {award.name}
              </h3>

              <p className="mt-4 xl:mt-6 text-base lg:text-lg font-medium text-white">
                ({award.presentedBy})
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSpotlight;