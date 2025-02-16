import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <AnimatedSection className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empower Your Future with{' '}
              <span className="text-green-600">Cutting-Edge</span> Coding Skills
            </h1>
            <p className="text-lg text-gray-600">
              Learn programming from industry experts and master the technologies
              shaping the world. Join our community of innovators today.
            </p>
            <div className="flex space-x-4">
              <Link to='/courses'>
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2">        
                    <span>Explore Courses</span>
                    <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link to='/testimonials'>
                <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-50 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Students learning to code"
              className="rounded-lg shadow-xl"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;