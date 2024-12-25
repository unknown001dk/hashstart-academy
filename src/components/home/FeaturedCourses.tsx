import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import { ArrowRight } from 'lucide-react';

const FeaturedCourses = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your journey with our most popular courses, designed to help you master the skills that matter most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {featuredCourses.map((course) => {
            const CourseIcon = course.icon;
            return (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <CourseIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-green-600 font-semibold mb-4">{course.price}</p>
                <Link
                  to="/courses"
                  className="text-green-600 font-medium hover:text-green-700 flex items-center gap-2"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            <span>View All Courses</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;