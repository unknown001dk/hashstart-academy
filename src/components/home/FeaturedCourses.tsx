import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';

const FeaturedCourses = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your journey with our most popular courses, designed to help you master the skills that matter most.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {featuredCourses.map((course, index) => {
            const CourseIcon = course.icon;
            return (
              <AnimatedSection key={course.id} className="group">
                <div className="bg-white rounded-xl shadow-md p-8 h-full transform transition-all duration-300 group-hover:bg-green-600 group-hover:shadow-xl group-hover:-translate-y-1">
                  <CourseIcon className="h-12 w-12 text-green-600 mb-6 transition-colors group-hover:text-white" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white">{course.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-green-50">{course.description}</p>
                  <p className="text-green-600 font-semibold mb-6 text-lg group-hover:text-white">{course.price}</p>
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 text-green-600 font-medium group-hover:text-white"
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>View All Courses</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default FeaturedCourses;