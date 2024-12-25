import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';
import CourseModal from '../components/courses/CourseModal';

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Courses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
};

export default CoursesPage;