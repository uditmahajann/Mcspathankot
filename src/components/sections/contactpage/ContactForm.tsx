import type React from "react"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    department: "general",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        department: "general",
      })

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact-form" className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 lg:grid-cols-2">
          <div className="text-start">
            <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
              Send us your Message
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
              Have any question, feedback, suggestion or complaint? Fill out the form and we will get back
              to you as soon as possible.
            </p>
            <div className="hidden lg:block w-full my-8 sm:my-12">
              <video
                className="w-full h-full shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/Videos/Mcs2023.mp4" type="video/mp4" />
              </video>
            </div>
          </div>


          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-inter font-bold text-black mb-2">Thank You!</h3>
              <p className="text-gray-700 mb-4 font-inter">
                Your message has been sent successfully. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-500 hover:bg-green-600 text-white font-outfit font-medium px-6 py-2 rounded-md transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 min-[540px]:p-8 text-sm sm:text-base">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-inter font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg font-inter border ${errors.name ? "border-secondary" : "border-gray-300"} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-secondary font-inter text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-inter font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg font-inter border ${errors.email ? "border-secondary" : "border-gray-300"} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                    placeholder="youremail@example.com"
                  />
                  {errors.email && <p className="text-secondary font-inter text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-inter font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg font-inter border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-gray-700 font-inter font-medium mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-3 py-3 font-inter rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors cursor-pointer"
                  >
                    <option value="general">General Enquiry / Feedback</option>
                    <option value="admissions">Admissions</option>
                    <option value="academics">Academics</option>
                    <option value="administration">Administration</option>
                    <option value="finance">Finance & Fees</option>
                    <option value="facilities">Facilities</option>
                    <option value="sports">Sports</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-inter font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg font-inter border ${errors.subject ? "border-secondary" : "border-gray-300"} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                  placeholder="Subject of your message"
                />
                {errors.subject && <p className="text-secondary font-inter text-sm mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-inter font-medium mb-2">
                  Type your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg font-inter border ${errors.message ? "border-secondary" : "border-gray-300"} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors resize-none`}
                  placeholder="Please type your message here..."
                ></textarea>
                {errors.message && <p className="text-secondary font-inter text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 rounded-lg px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-primary hover:bg-primarydark cursor-pointer"} transition-colors`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-1" />
                    </>
                  )}
                </button>
              </div>
              <div className="mt-8 text-center font-inter text-gray-600 text-sm">
                <p className="mt-2">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline font-medium">
                    Privacy Policy
                  </a>{" "}
                  and consent to be contacted regarding your inquiry.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
