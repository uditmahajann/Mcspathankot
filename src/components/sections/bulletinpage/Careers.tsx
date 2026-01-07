import { useState } from "react"
import { GraduationCap, Clock, Calendar, ChevronRight, Lightbulb, Rocket, Users } from "lucide-react"
import CareerForm from "./CareerForm"

interface CareerOpening {
  _id: string;
  title: string;
  department: "academics" | "administration" | "sports" | "performingArts";
  experience?: number;
  education?: string;
  applicationDeadline: string;
  description?: string;
  responsibilities?: string[];
}

const HR_EMAIL = "hr@mcs.example.com";

const development = [
  {
    icon: Rocket,
    title: "Faculty Orientation Programs",
    desc: "New educators at MCS undergo a comprehensive orientation to understand our pedagogy, ethics, and learner-centered philosophy.",
  },
  {
    icon: Lightbulb,
    title: "In-Service Training Workshops",
    desc: "Monthly workshops on modern teaching methods, classroom innovation, and digital tools for education.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Peer Observation",
    desc: "Teachers mentor one another through classroom observations and collaborative feedback cycles that promote reflective practice.",
  },
  {
    icon: Users,
    title: "External Certifications & Webinars",
    desc: "We partner with national education boards and training bodies to encourage faculty participation in certified development programs.",
  },
]

const Careers = ({ careers }: { careers: CareerOpening[] }) => {

  const mappedCareers = careers.map((job, index) => ({
  id: index + 1, // used for expand/collapse
  title: job.title,
  department:
    job.department === "academics"
      ? "Academic"
      : job.department === "administration"
      ? "Administration"
      : job.department === "sports"
      ? "Sports"
      : "Performing Arts",
  experience: job.experience
    ? `${job.experience}+ years`
    : "Not specified",
  education: job.education ?? "Not specified",
  deadline: new Date(job.applicationDeadline).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  description: job.description ?? "",
  responsibilities: job.responsibilities ?? [],
}));


  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  const filteredJobs = mappedCareers

  return (
    <section id="careers" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0 mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Careers{" "}
            <span className="relative inline-block">
              @MCS
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="absolute w-8 sm:w-10 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Join our team of dedicated educators and staff. We are always looking for talented individuals who are
            passionate about education and committed to nurturing young minds.
          </p>
        </div>

        {/* Current Openings */}
        <h3 className="text-xl text-center md:text-start sm:text-2xl font-poppins tracking-wide font-bold text-primarydark mb-6">Current Openings</h3>
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <h3 className="text-xl font-poppins tracking-wide font-bold text-gray-900">{job.title}</h3>
                    <span
                      className={`mt-2 md:mt-0 inline-flex items-center px-4 py-1.5 font-inter rounded-full text-sm font-medium ${job.department === "Academic"
                        ? "bg-blue-100 text-blue-800"
                        : job.department === "Administration"
                          ? "bg-purple-100 text-purple-800"
                          : job.department === "Sports"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {job.department}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 font-inter">
                    <div className="flex items-center ">
                      <GraduationCap size={22} className="text-gray-400 mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Education</p>
                        <p className="text-md font-medium text-gray-700">{job.education}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={22} className="text-gray-400 mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Experience</p>
                        <p className="text-md font-medium text-gray-700">{job.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={22} className="text-gray-400 mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Application Deadline</p>
                        <p className="text-md font-medium text-gray-700">{job.deadline}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 mb-2 font-inter">{job.description}</p>

                  {expandedJob === job.id && (
                    <div className="mt-4 border-t border-gray-200 pt-4 font-inter">
                      <h4 className="font-medium text-primarydark mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {job.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      className="text-blue-600 hover:text-blue-800 font-inter font-medium text-base flex items-center mb-4 sm:mb-0 cursor-pointer"
                    >
                      {expandedJob === job.id ? "Show Less" : "View Details"}
                      <ChevronRight size={18} className="ml-1" />
                    </button>

                    <a
                      href={`mailto:${HR_EMAIL}?subject=Application for ${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center justify-center px-6 py-2 bg-primary hover:bg-primarydark text-white font-outfit font-semibold rounded-lg transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="items-center w-full mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 bg-gray-100 rounded-lg shadow">
              <div className="flex flex-col text-center items-center mb-6">
                <h2 className="text-gray-900 text-xl sm:text-2xl font-poppins font-semibold">No openings right now.</h2>
                <p className="text-gray-500 mt-4 font-inter text-base max-w-3xl">But, we're always interested in hearing from talented individuals. Fill out this Application Form and send us your resume for future opportunities.</p>
              </div>
              <CareerForm />
            </div>


          )}
        </div>

      </div>


      {/* FACULTY DEVELOPMENT */}
      <div className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 min-[540px]:px-12 sm:px-16 lg:px-24 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 xl:gap-20">
          <div className="xl:w-1/2">
            <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
              Faculty Development & Professional Growth
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-200 mx-auto mb-6">
              MCS is committed to empowering its faculty through continuous professional development programs that encourage lifelong learning, innovation in teaching practices, and collaborative growth through regular training workshops & academic conferences.
            </p>
            <div className="hidden xl:block w-full my-8">
              <video
                className="w-full h-full shadow-lg rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767545220/smartclassclip_cpwl0r.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="xl:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-6">
            {development.map((item, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 hover:shadow-md transition-all"
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-poppins tracking-wide font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-700 font-inter">{item.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
        </div>
      </div>

      {/* Job Application Form and Process */}
      <div className="flex flex-col md:flex-row gap-8 container mx-auto px-6 min-[540px]:px-8 max-w-7xl">

        {/* Application Process */}
        <div className="w-full bg-gray-50 p-6 rounded-lg ">
          <h3 className="text-xl lg:text-2xl font-poppins font-semibold text-gray-900 mb-8 tracking-wide">Application Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Submit Application",
                description: "Apply online with your resume and cover letter",
              },
              {
                title: "Initial Screening",
                description: "Applications are reviewed by our HR department",
              },
              {
                title: "Interview",
                description: "Selected candidates are invited for interviews",
              },
              {
                title: "Demo Class/Assessment",
                description: "Teaching positions require a demonstration class",
              },
              {
                title: "Final Selection",
                description: "Offer letter is issued to selected candidates",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex items-start">
                <div className="shrink-0 h-12 w-12 rounded-full bg-blue-100 text-primarydark flex items-center justify-center font-bold font-playpen text-lg">
                  {idx + 1}
                </div>
                <div className="ml-4 font-inter">
                  <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>
                  <p className="text-md text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Careers