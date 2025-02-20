import React from 'react';
import { Course } from '../../data/courses';
import { Clock, Users, ArrowRight, CheckCircle, Tag } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onEnroll: () => void;
}

const CourseCard = ({ course, onEnroll }: CourseCardProps) => {
  const CourseIcon = course.icon;

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEnroll();
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between mb-6">
          <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors duration-300">
            <CourseIcon className="h-8 w-8 text-green-600" />
          </div>
          {course.discount && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-600">
              <Tag className="h-4 w-4 mr-1" />
              {course.discount}% OFF
            </span>
          )}
          <div className="flex flex-col items-end mt-3">
            <span className="text-2xl font-bold text-green-600">{course.Originalprice}</span>
            <span className="text-2xl font-bold text-green-500 line-through">{course.price}</span>
            <span className="text-sm text-gray-500">Full Course</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
            {course.title}
          </h2>
          <p className="text-gray-600 group-hover:text-gray-700">{course.description}</p>

          {/* Course Details */}
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5 text-green-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5 text-green-500" />
              <span>{course.level}</span>
            </div>
          </div>

          {/* Features Preview */}
          <div className="space-y-2">
            {course.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          {/* Enroll Button */}
          <button
            onClick={handleEnrollClick}
            className="w-full mt-6 bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-xl font-semibold 
                     group-hover:bg-green-600 group-hover:text-white transition-all duration-300 
                     flex items-center justify-center space-x-2"
          >
            <span>Enroll Now</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 h-20 w-20 transform translate-x-10 -translate-y-10">
          <div className="absolute inset-0 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;