import React, { useState } from 'react';
import { Course } from '../../data/courses';
import { Mail, User, Phone } from 'lucide-react';
import axios from 'axios';

interface EnrollmentFormProps {
  course: Course;
  onClose: () => void;
  onSuccess: () => void;
}

export const EnrollmentForm = ({ course, onSuccess }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    course: course.title
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = import.meta.env.VITE_BASE_URL
      const response = await axios.post(`${url}/api/course/course-form`, formData);
      if (response.status === 201) {
        setFormData({
          fullname: '',
          email: '',
          phoneNumber: '',
          course: course.title
        });
      }
      onSuccess();
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "pl-10 block w-full rounded-lg border border-gray-200 outline-none bg-gray-50 py-3 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 focus:bg-white";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";
  const iconClasses = "h-5 w-5 text-gray-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600">Complete the form below to apply for this course</p>
      </div>

      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className={iconClasses} />
          </div>
          <input
            type="text"
            id="name"
            required
            className={inputClasses}
            value={formData.fullname}
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            placeholder="Enter your full name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className={iconClasses} />
          </div>
          <input
            type="email"
            id="email"
            required
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email address"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className={iconClasses} />
          </div>
          <input
            type="tel"
            id="phone"
            required
            className={inputClasses}
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-3.5 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {isSubmitting ? 'Sending Application...' : 'Submit Application'}
      </button>

      <p className="text-sm text-gray-500 text-center mt-4">
        Our team will contact you shortly with course details and next steps.
      </p>
    </form>
  );
};