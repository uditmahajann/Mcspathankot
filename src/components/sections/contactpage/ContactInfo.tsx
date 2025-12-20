import type React from "react"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

const ContactInfo: React.FC = () => {
  return (
    <section className="min-[540px]:py-4 xl:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-16 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          {/* Main Contact Information */}
          {/* <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2" /> Main Contact Information
              </h3>

              <ul className="space-y-6">
                <li className="flex">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">School Address</h4>
                    <p className="text-gray-600 mt-1">
                      123 Education Lane
                      <br />
                      School District
                      <br />
                      City, State - 12345
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
                    <p className="text-gray-600 mt-1">
                      Main Office: (123) 456-7890
                      <br />
                      Fax: (123) 456-7899
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Addresses</h4>
                    <p className="text-gray-600 mt-1">
                      General Inquiries: info@modernchildrenschool.edu
                      <br />
                      Support: support@modernchildrenschool.edu
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 8:00 AM - 4:00 PM
                      <br />
                      Saturday: 9:00 AM - 12:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}

          {/* Department Contacts */}
          {/* <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2" /> Department Contacts
              </h3>

              <ul className="space-y-6">
                <li>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      A
                    </span>
                    Admissions Department
                  </h4>
                  <div className="ml-11 text-gray-600 mt-1">
                    <p>Phone: (123) 456-7891</p>
                    <p>Email: admissions@modernchildrenschool.edu</p>
                  </div>
                </li>

                <li>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      F
                    </span>
                    Finance & Accounts
                  </h4>
                  <div className="ml-11 text-gray-600 mt-1">
                    <p>Phone: (123) 456-7892</p>
                    <p>Email: finance@modernchildrenschool.edu</p>
                  </div>
                </li>

                <li>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      A
                    </span>
                    Academic Affairs
                  </h4>
                  <div className="ml-11 text-gray-600 mt-1">
                    <p>Phone: (123) 456-7893</p>
                    <p>Email: academics@modernchildrenschool.edu</p>
                  </div>
                </li>

                <li>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      S
                    </span>
                    Sports & Activities
                  </h4>
                  <div className="ml-11 text-gray-600 mt-1">
                    <p>Phone: (123) 456-7894</p>
                    <p>Email: sports@modernchildrenschool.edu</p>
                  </div>
                </li>

                <li>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      T
                    </span>
                    Transportation
                  </h4>
                  <div className="ml-11 text-gray-600 mt-1">
                    <p>Phone: (123) 456-7895</p>
                    <p>Email: transport@modernchildrenschool.edu</p>
                  </div>
                </li>
              </ul>
            </div> */}
          {/* </div> */}

          {/* Additional Contact Information */}
          {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-blue-800">Documents & Forms</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Download admission forms, transfer certificates, and other important documents.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                View Documents →
              </a>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-blue-800">FAQs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Find answers to frequently asked questions about admissions, academics, and school policies.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                View FAQs →
              </a>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-blue-800">Staff Directory</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Find contact information for our teachers, administrators, and support staff.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                View Directory →
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
