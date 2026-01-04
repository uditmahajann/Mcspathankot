import type React from "react"
import { MapPin, Navigation, Phone, Clock, Info } from "lucide-react"

const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-4 sm:py-10 my-10 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
              Locate <span className="relative inline-block">our Campus
                <img
                  src="/Images/Doodles/LineGreen.png"
                  alt="Underline"
                  className="absolute w-[80%] -bottom-5 left-12"
                />
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our serene campus nestled in the heart of Pathankot. We're just a visit away from your child's next big opportunity.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 h-100 lg:h-125 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.1521197286183!2d75.66919097543949!3d32.30776667386326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7e56c1d3ebad%3A0x6775b62b31d7b45!2sMontessori%20Cambridge%20School!5e0!3m2!1sen!2sin!4v1748068024037!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-6 lg:p-9 bg-primarydark text-white">
                <h3 className="text-lg sm:text-xl font-poppins font-bold mb-6 tracking-wide uppercase">Visit Our Campus</h3>

                <div className="space-y-6 font-inter text-sm min-[540px]:text-base">
                  <div className="flex">
                    <MapPin className="w-5 h-5 mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-blue-100 mt-1">
                        Defence Road (Pangoli), Pathankot
                        <br />
                        Punjab – 145001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <Phone className="w-5 h-5 mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-semibold">Contact</h4>
                      <p className="text-blue-100 mt-1 leading-relaxed">
                        Reception: 9876570911, 9876570912, 9876570913 
                        <br />
                        P.A. to Principal: 7696333777
                        <br />
                        Fee Desk Contact: 9417339301
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <Clock className="w-5 h-5 mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-semibold">Visiting Hours</h4>
                      <p className="text-blue-100 mt-1 leading-relaxed">
                        Principal: 12:00 PM - 1:00 PM
                        <br />
                        Teachers: 09:00 AM - 12:00 PM
                        <br />
                        (with prior appointment)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-base font-poppins font-semibold text-primarydark mb-2 tracking-wide uppercase">Parking Information</h3>
              <p className="text-gray-600">
                Visitor parking is available in the front lot. Additional parking can be found on the east side of the
                campus.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-base font-poppins font-semibold text-primarydark mb-2 tracking-wide uppercase">Public Transportation</h3>
              <p className="text-gray-600">
                School buses cover all major city routes. Auto and taxi stands nearby ensure smooth last-mile
                connectivity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-base font-poppins font-semibold text-primarydark mb-2 tracking-wide uppercase">Campus Tours</h3>
              <p className="text-gray-600">
                Schedule a guided tour of our campus to see our facilities firsthand. Tours are available by
                appointment.
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default LocationMap
