import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import type { ContactFormData } from "../types/contact";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    username: "",
    email: "",
    message: "",
    type: "academy",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const url = import.meta.env.VITE_BASE_URL;
    try {
      // use axios
      const response = await axios.post(`${url}/api/academy/contact`, formData);
      if (response.status === 201) {
        setShowSuccess(true);
        setFormData({ username: "", email: "", message: "", type: "academy" });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Failed to send contact email");
      }

      // const response = await fetch(`${url}/contact`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to send contact email');
      // }

      setShowSuccess(true);
      setFormData({ username: "", email: "", message: "", type: "academy" });

      // const success = await sendContactEmail(formData);
      // if (success) {
      //   setShowSuccess(true);
      //   setFormData({ username: '', email: '', message: '' });
      //   setTimeout(() => setShowSuccess(false), 5000);
      // }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Get in Touch
          </h1>

          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-gray-600">
                    hashstartacademy@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-gray-600">+91 9363883007</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-gray-600">karur</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {showSuccess && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* add maps here */}
      {/* use embbeded code */}
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-4xl px-4">
          <div
            className="relative overflow-hidden rounded-lg"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5542.216759865659!2d78.18220473767985!3d10.815976132941339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739719261985!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-[90%] h-[90%] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
