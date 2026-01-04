import { Monitor, Wifi, Laptop, Video } from "lucide-react"

const SmartClasses = () => {
  return (
    <section id="smart-classes" className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">Smart Classrooms</h3>
            <p className="mt-6 text-gray-100 font-inter">
              Our smart classrooms are equipped with state-of-the-art technology that combines traditional teaching methods with newer technology to
              create an immersive and interactive learning environment enhancing student engagement and comprehension
            </p>

            <div className="mt-8 space-y-3 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Interactive Displays</h4>
                  <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">Touch-enabled screens with multi-user interaction</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">High-Speed Internet</h4>
                  <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">Seamless connectivity for online resources</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Laptop className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Digital Learning Platforms</h4>
                  <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">Access to premium educational software and resources</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Recording Capabilities</h4>
                  <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">Lesson recording for review and absent students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata">
                <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767545220/smartclassclip_cpwl0r.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartClasses
