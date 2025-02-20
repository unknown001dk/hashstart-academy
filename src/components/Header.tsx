import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// import Modal from './modals/Modal';
// import EnrollModal from './modals/EnrollModal';

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    phone: "",
    course: "frontend",
  });
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Events", href: "/events" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Registration submitted:", formData);
    setShowRegistrationModal(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "frontend",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/* <Code2 className="h-8 w-8 text-green-600" /> */}
            {/* add logo here */}
            <img src="/assets/logo.png" alt="" className="h-16" />
            {/* <span className="text-xl font-bold text-gray-800">HashStart</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "text-green-600 font-semibold"
                    : "text-gray-600 hover:text-green-600"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/courses">
              <button
                // onClick={() => setShowRegistrationModal(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Enroll Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block ${
                  isActive(item.href)
                    ? "text-green-600 font-semibold"
                    : "text-gray-600 hover:text-green-600"
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/courses">
              <button
                // onClick={() => {
                //   setIsMenuOpen(false);
                //   setShowRegistrationModal(true);
                // }}
                // onClick={() => setShowRegistrationModal(true)}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Enroll Now
              </button>
            </Link>
          </div>
        )}
      </nav>

      {showRegistrationModal && (
        <div className="bg-black w-full">
          <div className="absolute top-96 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Enroll in the Course
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="frontend">
                      Frontend Development (₹5,000)
                    </option>
                    <option value="backend">
                      Backend Development (₹4,999)
                    </option>
                    <option value="python">
                      Python for Beginners (₹4,500)
                    </option>
                    <option value="database">
                      Database Management (₹2,000)
                    </option>
                    <option value="fullstack">
                      Full Stack Development (₹8,999)
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Registration
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Our team will contact you shortly with course details and
                  payment information.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {/* <EnrollModal
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
        title="Quick Registration"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Course
            </label>
            <select
              id="course"
              name="course"
              required
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="frontend">Frontend Development (₹5,000)</option>
              <option value="backend">Backend Development (₹4,999)</option>
              <option value="python">Python for Beginners (₹4,500)</option>
              <option value="database">Database Management (₹2,000)</option>
              <option value="fullstack">Full Stack Development (₹8,999)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Submit Registration
          </button>

          <p className="text-sm text-gray-500 text-center">
            Our team will contact you shortly with course details and payment information.
          </p>
        </form>
      </EnrollModal> */}
    </header>
  );
};

export default Header;
