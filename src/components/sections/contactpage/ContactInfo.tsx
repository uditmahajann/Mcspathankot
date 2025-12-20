import type React from "react"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

const ContactInfo: React.FC = () => {
  return (
    <section className="min-[540px]:py-4 xl:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-8 lg:px-20 xl:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div
              className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6 flex flex-col items-center text-center transition-all transform hover:-translate-y-1"
            >
              <div className="bg-primary p-4 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-900">Our Address</h3>
              <p className="text-gray-700 font-inter">
                MCS, Defence Road (Pangoli), Pathankot – 145001
              </p>
            </div>

            <div
              className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6 flex flex-col items-center text-center transition-all transform hover:-translate-y-1"
            >
              <div className="bg-primary p-4 rounded-full mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-900">Phone Numbers</h3>
              <p className="text-gray-700 font-inter">
                +91 98765-70911
                <br />
                +91 98765-70911
              </p>
            </div>

            <div
              className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6 flex flex-col items-center text-center transition-all transform hover:-translate-y-1"
            >
              <div className="bg-primary p-4 rounded-full mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-900">Email Us</h3>
              <p className="text-gray-700 font-inter">
                mcs_pathankot@yahoo.co.in
                <br />
                mcs_pathankot@yahoo.co.in
              </p>
            </div>

            <div
              className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6 flex flex-col items-center text-center transition-all transform hover:-translate-y-1"
            >
              <div className="bg-primary p-4 rounded-full mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-900">Office Hours</h3>
              <p className="text-gray-700 font-inter">
                Mon-Fri: 8:00 AM - 4:00 PM
                <br />
                Sat-Sun: 9:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
