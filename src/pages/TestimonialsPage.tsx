import React, { useState } from 'react';
import { Star, Award, Users, Briefcase, X } from 'lucide-react';

const testimonials = [
  {
    name: 'David Chen',
    role: 'Full Stack Developer at Tech Corp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'HashStart Academy transformed my career. The project-based learning approach gave me real-world experience that employers value.',
    company: 'Tech Corp',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Mobile Developer at StartApp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'The mobile development course was exactly what I needed. The instructors are incredibly knowledgeable and supportive.',
    company: 'StartApp',
  },
  {
    name: 'Michael Kim',
    role: 'Data Scientist at DataCo',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'The data science program exceeded my expectations. I learned practical skills that I use daily in my new role.',
    company: 'DataCo',
  },
];

const statistics = [
  { icon: Award, label: 'Award-Winning Courses', value: '10+' },
  { icon: Users, label: 'Students Trained', value: '5,000+' },
  { icon: Briefcase, label: 'Successful Job Placements', value: '1,200+' },
];

const TestimonialsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h1>
        <p className="text-lg text-gray-600">
          Real stories from real people who transformed their careers with HashStart Academy.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="text-sm text-gray-500">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center bg-emerald-600 text-white rounded-lg mt-12">
        <h2 className="text-3xl font-bold mb-4">Transform Your Career Today</h2>
        <p className="text-lg mb-8">
          Join thousands of students who have advanced their careers with HashStart Academy.
        </p>
        <button
          onClick={toggleModal}
          className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Get Started</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
                  Course of Interest
                </label>
                <select
                  id="course"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-500"
                >
                  <option>Full Stack Development</option>
                  <option>Mobile Development</option>
                  <option>Data Science</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-bold py-2 rounded-lg hover:bg-emerald-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
