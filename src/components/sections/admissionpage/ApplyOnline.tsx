import { useState } from "react"
import type React from "react"
import { Send, CheckCircle, ArrowRight, Info } from "lucide-react"

const ApplyOnline: React.FC = () => {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    applyingForClass: "",
    academicYear: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    previousSchool: "",
    howDidYouHear: "",
    agreeToTerms: false,
  })

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validateStep = () => {
    const errors: { [key: string]: string } = {}

    if (formStep === 1) {
      if (!formData.studentName.trim()) errors.studentName = "Full name is required"
      if (!formData.dob.trim()) errors.dob = "Date of birth is required"
      if (!formData.gender) errors.gender = "Gender is required"
      if (!formData.applyingForClass) errors.applyingForClass = "Please select a class"
      if (!formData.academicYear) errors.academicYear = "Please select academic year"
    }

    if (formStep === 2) {
      if (!formData.parentName.trim()) errors.parentName = "Parent/Guardian name is required"
      if (!formData.email.trim()) {
        errors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Enter a valid email"
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required"
      } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Enter a valid 10-digit phone number"
      }
      if (!formData.address.trim()) errors.address = "Residential address is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }


  const nextStep = () => {
    if (validateStep()) {
      setFormStep(formStep + 1)
      window.scrollTo(0, 0)
    }
  }


  const prevStep = () => {
    setFormStep(formStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    alert("Application submitted successfully! We will contact you shortly.")
    // Reset form after submission
    setFormStep(1)
    setFormData({
      studentName: "",
      dob: "",
      gender: "",
      applyingForClass: "",
      academicYear: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      previousSchool: "",
      howDidYouHear: "",
      agreeToTerms: false,
    })
  }

  return (
    <section id="apply-online" className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 lg:grid-cols-2">
          <div className="text-start">
            <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
              Apply Online for Admissions
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-base xl:text-lg text-gray-200 mx-auto">
              Fill & Submit the application form to apply online for admission at Montessori Cambridge School. This online application helps us understand your child’s academic background and admission preferences. Once submitted, our admissions team will review the details and guide you through the next steps, including interaction, documentation, and confirmation.
            </p>
            <div className="hidden lg:block w-full my-8 sm:my-12">
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

          {/* Application Form */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Progress Steps */}
            <div className="mx-auto max-w-7xl px-12 min-[540px]:px-16 xl:px-24 my-6 min-[540px]:my-8 lg:mt-12">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center font-inter">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${formStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    1
                  </div>
                  <span className="mt-2 text-sm text-gray-600">Student Info</span>
                </div>
                <div className="flex-1 h-0.5 mx-4 bg-gray-200">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: formStep >= 2 ? "100%" : "0%" }}
                  ></div>
                </div>
                <div className="flex flex-col items-center font-inter">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${formStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    2
                  </div>
                  <span className="mt-2 text-sm text-gray-600">Parent Info</span>
                </div>
                <div className="flex-1 h-0.5 mx-4 bg-gray-200">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: formStep >= 3 ? "100%" : "0%" }}
                  ></div>
                </div>
                <div className="flex flex-col items-center font-inter">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${formStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    3
                  </div>
                  <span className="mt-2 text-sm text-gray-600">Review</span>
                </div>
              </div>
            </div>


            <div className="p-6 sm:p-8 xl:p-10">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Student Information */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-base text-center font-inter font-medium text-gray-500 mb-12 uppercase">Student Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base lg:text-sm xl:text-base">
                      <div>
                        <label htmlFor="studentName" className="block text-gray-700 font-inter font-medium mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className={`w-full px-4 py-3 rounded-lg font-inter border ${formErrors.studentName ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        />
                        {formErrors.studentName && <p className="text-sm font-inter text-secondary mt-1">{formErrors.studentName}</p>}
                      </div>

                      <div>
                        <label htmlFor="dob" className="block text-gray-700 font-inter font-medium mb-2">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg font-inter border cursor-pointer ${formErrors.dob ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        />
                        {formErrors.dob && <p className="text-sm font-inter text-secondary mt-1">{formErrors.dob}</p>}
                      </div>

                      <div>
                        <label htmlFor="gender" className="block text-gray-700 font-inter font-medium mb-2">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg font-inter border cursor-pointer ${formErrors.gender ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        >
                          <option className="" value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {formErrors.gender && <p className="text-sm font-inter text-secondary mt-1">{formErrors.gender}</p>}
                      </div>

                      <div>
                        <label htmlFor="applyingForClass" className="block text-gray-700 font-inter font-medium mb-2">
                          Applying for Class <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="applyingForClass"
                          name="applyingForClass"
                          value={formData.applyingForClass}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg font-inter border cursor-pointer ${formErrors.applyingForClass ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        >
                          <option value="">Select Class</option>
                          <option value="pre-nursery">Pre-Nursery</option>
                          <option value="nursery">Nursery</option>
                          <option value="lkg">LKG</option>
                          <option value="ukg">UKG</option>
                          <option value="class1">Class 1</option>
                          <option value="class2">Class 2</option>
                          <option value="class3">Class 3</option>
                          <option value="class4">Class 4</option>
                          <option value="class5">Class 5</option>
                          <option value="class6">Class 6</option>
                          <option value="class7">Class 7</option>
                          <option value="class8">Class 8</option>
                          <option value="class9">Class 9</option>
                          <option value="class10">Class 10</option>
                          <option value="class11">Class 11</option>
                          <option value="class12">Class 12</option>
                        </select>
                        {formErrors.applyingForClass && <p className="text-sm font-inter text-secondary mt-1">{formErrors.applyingForClass}</p>}
                      </div>

                      <div>
                        <label htmlFor="academicYear" className="block text-gray-700 font-inter font-medium mb-2">
                          Academic Year <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="academicYear"
                          name="academicYear"
                          value={formData.academicYear}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg font-inter border cursor-pointer ${formErrors.academicYear ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        >
                          <option value="">Select Academic Year</option>
                          <option value="2023-2024">2026-2027</option>
                          <option value="2024-2025">2027-2028</option>
                        </select>
                        {formErrors.academicYear && <p className="text-sm font-inter text-secondary mt-1">{formErrors.academicYear}</p>}
                      </div>

                      <div>
                        <label htmlFor="previousSchool" className="block text-gray-700 font-inter font-medium mb-2">
                          Previous School (if any)
                        </label>
                        <input
                          type="text"
                          id="previousSchool"
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg font-inter border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end mt-8">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg text-white bg-primary hover:bg-primarydark cursor-pointer"
                      >
                        Next Step <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Parent Information */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-base text-center font-inter font-medium text-gray-500 mb-12 uppercase">Parent/Guardian Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
                      <div>
                        <label htmlFor="parentName" className="block text-gray-700 font-inter font-medium mb-2">
                          Parent/Guardian Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          placeholder="Enter Parent's Name"
                          required
                          className={`w-full px-4 py-3 rounded-lg font-inter border ${formErrors.parentName ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        />
                        {formErrors.parentName && <p className="text-sm font-inter text-secondary mt-1">{formErrors.parentName}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-inter font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="youremail@example.com"
                          required
                          className={`w-full px-4 py-3 rounded-lg font-inter border ${formErrors.email ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        />
                        {formErrors.email && <p className="text-sm font-inter text-secondary mt-1">{formErrors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-inter font-medium mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91-XXXXXXXXXX"
                          required
                          className={`w-full px-4 py-3 rounded-lg font-inter border ${formErrors.phone ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        />
                        {formErrors.phone && <p className="text-sm font-inter text-secondary mt-1">{formErrors.phone}</p>}
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-gray-700 font-inter font-medium mb-2">
                          Residential Address <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Type your current address..."
                          required
                          rows={3}
                          className={`w-full px-4 py-3 rounded-lg font-inter border ${formErrors.address ? "border-secondary" : "border-gray-300"
                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors`}
                        ></textarea>
                        {formErrors.address && <p className="text-sm font-inter text-secondary mt-1">{formErrors.address}</p>}
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="howDidYouHear" className="block text-gray-700 font-inter font-medium mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          id="howDidYouHear"
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg font-inter border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                        >
                          <option value="">Select an option</option>
                          <option value="website">School Website</option>
                          <option value="social-media">Social Media</option>
                          <option value="friend-family">Friend or Family</option>
                          <option value="newspaper">Newspaper</option>
                          <option value="current-parent">Current Parent</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
                      >
                        Previous Step
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg text-white bg-primary hover:bg-primarydark cursor-pointer"
                      >
                        Next Step <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Review and Submit */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-base text-center font-inter font-medium text-gray-500 mb-12 uppercase">Review Your Application</h3>

                    <div className="bg-gray-50 p-6 rounded-lg text-sm md:text-base">
                      <h4 className="font-inter font-semibold text-lg text-primary mb-6">Student Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Full Name</p>
                          <p className="font-inter font-medium">{formData.studentName || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Date of Birth</p>
                          <p className="font-inter font-medium">{formData.dob || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Gender</p>
                          <p className="font-inter font-medium">{formData.gender || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Applying for Class</p>
                          <p className="font-inter font-medium">{formData.applyingForClass || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Academic Year</p>
                          <p className="font-inter font-medium">{formData.academicYear || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Previous School</p>
                          <p className="font-inter font-medium">{formData.previousSchool || "None"}</p>
                        </div>
                      </div>

                      <h4 className="font-inter font-semibold text-lg text-primary mb-6">Parent/Guardian Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Name</p>
                          <p className="font-inter font-medium">{formData.parentName || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Email</p>
                          <p className="font-inter font-medium">{formData.email || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-inter text-sm text-gray-500">Phone</p>
                          <p className="font-inter font-medium">{formData.phone || "Not provided"}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="mb-1 font-inter text-sm text-gray-500">Address</p>
                          <p className="font-inter font-medium">{formData.address || "Not provided"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start mt-6">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="h-4.5 w-4.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer mt-1"
                      />
                      <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700 font-inter">
                        I confirm that the information provided is accurate and complete. I understand that providing
                        false information may result in the cancellation of the application or admission.{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
                      >
                        Previous Step
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.agreeToTerms}
                        className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${formData.agreeToTerms
                          ? "bg-primary text-white hover:bg-primarydark focus:ring-blue-500 cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplyOnline