import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { EnrollmentForm } from './EnrollmentForm';
import { Course } from '../../data/courses';

interface EnrollmentModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const EnrollmentModal = ({ course, isOpen, onClose, onSuccess }: EnrollmentModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-[95%] sm:max-w-[80%] md:max-w-[600px] max-h-[90vh] overflow-y-auto animate-in shadow-xl"
        style={{
          animation: 'modalSlideIn 0.3s ease-out'
        }}
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Course Application</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full p-1.5"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <EnrollmentForm course={course} onClose={onClose} onSuccess={onSuccess} />
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;