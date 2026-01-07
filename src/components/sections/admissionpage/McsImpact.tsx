import {
  Users,
  Star,
  Trophy,
  ArrowRight,
  MessageSquareText,
  GraduationCap,
} from "lucide-react"

const McsImpact = () => {
  
  const testimonials = [
    {
      quote:
        "Our son transformed from a shy student into a confident speaker. The teachers don’t just educate — they inspire.",
      name: "Parent of Grade 6 Student",
      role: "Parent Testimonial",
      img: "/Images/Heros/samplehero.JPG",
    },
    {
      quote:
        "The environment at MCS feels like a second home. I learned leadership, teamwork, and kindness — not just subjects.",
      name: "Student, Class 10",
      role: "Student Voice",
      img: "/Images/Heros/samplehero.JPG",
    },
    {
      quote:
        "Montessori Cambridge didn’t just prepare me for exams — it prepared me for life. Forever grateful.",
      name: "Alumni, Batch of 2020",
      role: "Alumni Reflection",
      img: "/Images/Heros/samplehero.JPG",
    },
  ]

  return (
    <section id="why-choose-us" className="bg-white">
      {/* MCS IMPACT */}
      <div className="text-center bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-12 min-[540px]:px-16 md:px-20">
          <div className="mb-8 flex flex-col gap-6 md:flex-row items-center justify-center">
          <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
            The MCS Impact
          </h2>
          </div>
        
          {/* Animated Impact Cards */}
          <div className="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[
              {
                icon: <Trophy className="w-7.5 h-7.5 text-orange-400" />,
                stat: "98%",
                title: "Boards Passing Percentage",
                desc: "Every student achieves academic excellence with passion and purpose.",
              },
              {
                icon: <Users className="w-8 h-8 text-green-400" />,
                stat: "20+",
                title: "Student Societies & Clubs",
                desc: "From astronomy to art — students explore every dimension of interest.",
              },
              {
                icon: <Star className="w-8 h-8 text-fuchsia-400" />,
                stat: "5000+",
                title: "Successful Alumni of MCS",
                desc: "Our alumni are thriving professionals, artists, and innovators worldwide.",
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-sky-400" />,
                stat: "30+",
                title: "Years of Academic Excellence",
                desc: "Decades of nurturing intellect, empathy, and global citizenship.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`group bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl xl:rounded-3xl p-6 text-center text-white transition-all duration-500 hover:scale-[1.05] hover:bg-white/10 hover:shadow-xl`}
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-4xl sm:text-5xl font-bold font-outfit bg-linear-to-r from-yellow-800 via-yellow-200 to-yellow-800 text-transparent bg-clip-text mb-3">
                  {card.stat}
                </h3>
                <p className="text-base font-medium font-poppins tracking-wide">{card.title}</p>
                {/* <p className="text-gray-300 mt-3 text-sm font-inter">{card.desc}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      
      <div className="max-w-7xl mx-auto my-16 lg:my-20">
        <div className="mx-6 min-[540px]:mx-12 sm:mx-16 lg:mx-20 rounded-xl lg:rounded-2xl bg-linear-to-br from-sky-100 to-indigo-50 p-8 md:p-10 shadow-2xl items-center">
          <div className="text-center">
            <MessageSquareText className="mx-auto w-8 h-8 sm:w-10 sm:h-10 text-sky-600" />
            <h3 className="mt-4 text-xl md:text-2xl font-outfit font-semibold tracking-wide text-gray-900">What Our Parents Say!</h3>
            <blockquote className="mt-4 lg:mt-6">
              <p className="text-base md:text-xl italic text-gray-700">
                "Choosing Montessori Cambridge School for our children was one of the best decisions we've made as
                parents. The school's commitment to academic excellence, character development, and creating a
                supportive community has exceeded our expectations."
              </p>
              <footer className="mt-4">
                <p className="font-outfit font-medium text-gray-400">— Parent of MCS students</p>
              </footer>
            </blockquote>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/testimonials"
              className="group inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-outfit text-base font-medium rounded-full transition-all duration-300 ease-in-out hover:font-semibold hover:scale-105 active:scale-95 shadow-md cursor-pointer border border-transparent bg-primarydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-300"
            >
              Enquire Now for Admissions
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default McsImpact
