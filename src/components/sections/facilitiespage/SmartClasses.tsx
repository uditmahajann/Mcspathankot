import { Monitor, Wifi, Laptop, Video, Lightbulb } from "lucide-react"

const SmartClasses = () => {
  return (
    <section id="smart-classes" className="py-25 my-10 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            {" "}
              Smart Classes
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-4xl mx-auto">
            Our digitally-enabled smart classrooms combine traditional teaching methods with newer technology to
            create an immersive and interactive learning environment that enhances student engagement and comprehension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Campus/NewHostel.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mb-1">Interactive Whiteboards</h3>
              <p className="text-blue-100 text-sm font-inter">Touch-enabled displays for interactive lessons and demonstrations</p>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Campus/NewHostel.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mb-1">1:1 Device Program</h3>
              <p className="text-blue-100 text-sm font-inter">Tablets and laptops for personalized digital learning experiences</p>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Campus/NewHostel.JPG"
              alt="Virtual reality learning session"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mb-1">VR/AR Learning</h3>
              <p className="text-blue-100 text-sm font-inter">Immersive virtual and augmented reality educational experiences</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-tr from-blue-50 via-blue-50 to-white rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-3">Features of Our Smart Classrooms</h3>
              <p className="text-gray-700 mb-6 font-inter">
                Our smart classrooms are equipped with state-of-the-art technology that transforms the traditional
                learning experience into an interactive and engaging journey of discovery.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-full">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-primarydark tracking-wide">Interactive Displays</h4>
                    <p className="text-sm text-gray-700 font-inter mt-1">Touch-enabled screens with multi-user interaction</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-full">
                    <Wifi className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-primarydark tracking-wide">High-Speed Internet</h4>
                    <p className="text-sm text-gray-700 font-inter mt-1">Seamless connectivity for online resources</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-full">
                    <Laptop className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-primarydark tracking-wide">Digital Learning Platforms</h4>
                    <p className="text-sm text-gray-700 font-inter mt-1">Access to premium educational software and resources</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-full">
                    <Video className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-primarydark tracking-wide">Recording Capabilities</h4>
                    <p className="text-sm text-gray-700 font-inter mt-1">Lesson recording for review and absent students</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-full">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-primarydark tracking-wide">Smart Lighting & Climate</h4>
                    <p className="text-sm text-gray-700 font-inter mt-1">Optimized environment for learning comfort</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Modern smart classroom with students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-xs text-center">
                    <h4 className="text-blue-900 font-bold text-xl mb-2">21st Century Learning</h4>
                    <p className="text-gray-700">
                      Our smart classrooms prepare students for the digital future by developing technological fluency
                      alongside traditional academic skills.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartClasses
