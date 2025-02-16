import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/home/Stats';
import About from '../components/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedCourses from '../components/home/FeaturedCourses';
import SuccessStories from '../components/home/SuccessStories';
import UpcomingEvents from '../components/home/UpcomingEvents';
import ProgrammingLogos from '../components/home/ProgrammingLogos';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProgrammingLogos />
      <Stats />
      <About />
      <FeaturedCourses />
      <WhyChooseUs />
      <SuccessStories />
      <UpcomingEvents />
      
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with HashStart Academy.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            <span>Browse Our Courses</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;