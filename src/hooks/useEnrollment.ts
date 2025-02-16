import { useState } from 'react';

interface EnrollmentData {
  courseId: number;
  name: string;
  email: string;
  phone: string;
  paymentMethod: string;
}

export function useEnrollment() {
  const [isLoading, setIsLoading] = useState(false);

  const enrollInCourse = async (data: EnrollmentData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Enrollment data:', data);
      // Here you would typically make an API call to your backend
      return true;
    } catch (error) {
      console.error('Enrollment failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { enrollInCourse, isLoading };
}