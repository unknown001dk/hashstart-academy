import React from 'react';
import { X, CheckCircle2, Clock, Users, Laptop } from 'lucide-react';
import { Course } from '../../data/courses';

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const CourseModal = ({ course, onClose }: CourseModalProps) => {
  const CourseIcon = course.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-4">
              <CourseIcon className="h-12 w-12 text-green-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                <p className="text-green-600 font-semibold">{course.price}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Course Overview</h3>
              <p className="text-gray-600">{course.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>{course.level}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Curriculum</h3>
              <ul className="space-y-2">
                {course.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="space-y-2">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Laptop className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
              Enroll Now for {course.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;