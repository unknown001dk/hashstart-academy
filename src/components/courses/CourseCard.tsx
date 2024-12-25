import React from 'react';
import { Course } from '../../data/courses';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard = ({ course, onClick }: CourseCardProps) => {
  const CourseIcon = course.icon;

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <CourseIcon className="h-12 w-12 text-green-600 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Level: {course.level}</p>
          <p>Duration: {course.duration}</p>
          <p className="text-lg font-semibold text-green-600">{course.price}</p>
        </div>
        <button
          className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;