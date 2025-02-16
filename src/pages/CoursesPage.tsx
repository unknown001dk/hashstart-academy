import { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';
import EnrollmentModal from '../components/enrollment/EnrollmentModal';
import SuccessNotification from '../components/notifications/SuccessNotification';
import type { Course } from '../data/courses';
import { AnimatedSection } from '../components/AnimatedSection';
import { useNotification } from '../hooks/useNotification';
import { Search, GraduationCap, Sparkles } from 'lucide-react';

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { notification, showNotification, hideNotification } = useNotification();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleEnrollmentSuccess = () => {
    setSelectedCourse(null);
    showNotification('Successfully enrolled in the course! Check your email for details.');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-full blur-lg opacity-50"></div>
              <GraduationCap className="relative h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-green-600">Expert-Led</span> Courses
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our comprehensive range of tech courses designed to help you achieve your career goals.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto group">
            <div className="absolute inset-0 bg-green-200 rounded-xl blur-md opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
              />
              {searchTerm && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-sm text-gray-500">
                  <span>{filteredCourses.length} results</span>
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <AnimatedSection key={course.id}>
              <CourseCard
                course={course}
                onEnroll={() => handleEnroll(course)}
              />
            </AnimatedSection>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg">No courses found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Clear search
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>

      {selectedCourse && (
        <EnrollmentModal
          course={selectedCourse}
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onSuccess={handleEnrollmentSuccess}
        />
      )}

      {notification && (
        <SuccessNotification
          message={notification}
          onClose={hideNotification}
        />
      )}
    </div>
  );
};

export default CoursesPage;