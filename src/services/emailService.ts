import { ContactFormData } from '../types/contact';

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Simulate API call to email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Email sent:', formData);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};