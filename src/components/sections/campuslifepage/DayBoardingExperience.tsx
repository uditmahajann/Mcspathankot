import { Clock, Home, Utensils, Book, Users, Moon, Sun, Brain, Award, Timer, Volleyball } from "lucide-react"

const DayBoardingExperience = () => {
    return (
        <section id="boarding-experience" className="px-6 min-[540px]:px-12 sm:px-16 lg:px-20 my-10 md:my-20 py-15 md:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">
            <div className="container max-w-5xl mx-auto ">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
                        Day-Boarding School Experience
                    </h2>
                    <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
                        Our day-boarding program offers the perfect balance between school and home life, providing extended hours
                        of supervised learning, activities, and meals.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 sm:p-6 lg:p-8 gap-8 xl:gap-10 mb-8 md:mb-12 items-center">
                    {/* Right Column - Daily Schedule */}
                    
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "/Images/Heros/samplehero.JPG",
                                "/Images/Heros/samplehero.JPG",
                                "/Images/Heros/samplehero.JPG",
                                "/Images/Heros/samplehero.JPG",
                                "/Images/Heros/samplehero.JPG",
                                "/Images/Heros/samplehero.JPG",
                            ].map((src, idx) => (
                                <div key={idx} className="overflow-hidden rounded-lg shadow-md group">
                                    <img
                                        src={src}
                                        alt={`Boarding photo ${idx + 1}`}
                                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    
                    {/* Left Column - Description and Features */}
                    <div>
                        <div className="bg-blue-50 rounded-xl p-8 mb-8">
                            <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-primarydark mb-3 tracking-wide">A Second Home for Day-Boarders</h3>
                            <p className="text-gray-700 mb-6 font-inter">
                                Our day-boarding program offers a structured, secure and enriching environment, where students grow holistically with access to academic support, engaging activities, and personal mentorship.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { icon: <Timer size={22} />, text: "Extended academic hours" },
                                    { icon: <Utensils size={22} />, text: "Healthy & timely meals" },
                                    { icon: <Users size={22} />, text: "Personal mentoring" },
                                    { icon: <Brain size={22} />, text: "Life skills & value education" },
                                    { icon: <Book size={22} />, text: "Supervised study sessions" },
                                    { icon: <Volleyball size={22} />, text: "Co-curricular & sports" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="p-3 bg-blue-100 rounded-full text-primarydark">{item.icon}</div>
                                        <span className="text-gray-900 font-inter font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Weekend Activities */}
                        <div className="bg-linear-to-r from-primary to-primarydark rounded-xl p-8 text-white">
                            <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-3 tracking-wide">Weekend Activities</h3>
                            <p className="text-blue-50 mb-6 font-inter">
                                Weekends at MCS are filled with enriching activities that balance recreation, learning, and personal
                                development.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Movie nights",
                                    "Sports tournaments",
                                    "Cultural outings",
                                    "Community service",
                                    "Hobby clubs",
                                    "Special workshops",
                                ].map((activity, index) => (
                                    <div key={index} className="flex items-center gap-2 font-inter text-white font-medium">
                                        <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                                        <span>{activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Testimonials */}
                <div className="bg-blue-100 rounded-xl p-6 sm:p-12">
                    <h3 className="text-xl sm:text-2xl font-playpen font-semibold text-primarydark mb-6 sm:mb-8 sm:text-center">What Our Day-Boarding Students Say:</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                quote:
                                    "Boarding at MCS has taught me independence and helped me build lifelong friendships. The house parents are like family to us.",
                                student: "Aryan S., Grade 11",
                            },
                            {
                                quote:
                                    "I've grown so much as a person since joining the boarding program. The evening study sessions have really improved my academics.",
                                student: "Priya M., Grade 10",
                            },
                            {
                                quote:
                                    "As an international student, the boarding community made me feel at home right away. The weekend activities are always something to look forward to.",
                                student: "David L., Grade 12",
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-5 sm:p-6 rounded-lg shadow-lg text-sm sm:text-base">
                                <p className="text-gray-700 mb-4 italic font-inter">"{testimonial.quote}"</p>
                                <p className="text-primarydark font-inter font-semibold">— {testimonial.student}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DayBoardingExperience
