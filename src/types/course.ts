export interface Course {
  _id: string;
  icon: any; // Using any for Lucide icons
  title: string;
  description: string;
  level: string;
  duration: string;
  price: string;
  fullDescription: string;
  curriculum: string[];
  features: string[];
}