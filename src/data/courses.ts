import { Code, Database, Globe } from 'lucide-react';

export interface Course {
  id: number;
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

export const courses: Course[] = [
  {
    id: 1,
    icon: Code,
    title: 'Frontend Development',
    description: 'Master modern frontend development with React, TypeScript, and more.',
    level: 'Beginner to Advanced',
    duration: '12 weeks',
    price: '₹5,000',
    fullDescription: 'Comprehensive frontend development course covering React, TypeScript, and modern web development practices. Learn to build responsive and interactive web applications.',
    curriculum: [
      'HTML5, CSS3, and Modern JavaScript',
      'React.js and State Management',
      'TypeScript Fundamentals',
      'Responsive Web Design',
      'Modern UI/UX Principles',
      'Performance Optimization',
    ],
    features: [
      'Live coding sessions',
      'Real-world projects',
      'Industry mentorship',
      'Job placement assistance',
    ],
  },
  {
    id: 2,
    icon: Database,
    title: 'Backend Development',
    description: 'Learn Node.js, Express, and server-side development.',
    level: 'Intermediate',
    duration: '12 weeks',
    price: '₹4,999',
    fullDescription: 'Master backend development with Node.js, Express, and database integration. Build secure and scalable server-side applications.',
    curriculum: [
      'Node.js Fundamentals',
      'Express.js Framework',
      'RESTful API Design',
      'Database Integration',
      'Authentication & Authorization',
      'Server Deployment',
    ],
    features: [
      'Hands-on projects',
      'API development',
      'Server management',
      'Career guidance',
    ],
  },
  {
    id: 3,
    icon: Code,
    title: 'Python for Beginners',
    description: 'Start your programming journey with Python.',
    level: 'Beginner',
    duration: '8 weeks',
    price: '₹4,500',
    fullDescription: 'Perfect introduction to programming using Python. Learn fundamentals, data structures, and basic algorithms.',
    curriculum: [
      'Python Basics',
      'Data Types & Structures',
      'Control Flow',
      'Functions & Modules',
      'File Handling',
      'Basic Object-Oriented Programming',
    ],
    features: [
      'Interactive sessions',
      'Practice exercises',
      'Basic projects',
      'Learning support',
    ],
  },
  {
    id: 4,
    icon: Database,
    title: 'Database Management',
    description: 'Master SQL and database design principles.',
    level: 'Beginner to Intermediate',
    duration: '6 weeks',
    price: '₹2,000',
    fullDescription: 'Learn database design, SQL, and management of relational databases. Essential skills for any developer.',
    curriculum: [
      'SQL Fundamentals',
      'Database Design',
      'Data Modeling',
      'Queries & Optimization',
      'Database Administration',
      'Data Security',
    ],
    features: [
      'Practical exercises',
      'Real database management',
      'Performance tuning',
      'Project work',
    ],
  },
  {
    id: 5,
    icon: Globe,
    title: 'Full Stack Development',
    description: 'Complete web development from frontend to backend.',
    level: 'Intermediate to Advanced',
    duration: '24 weeks',
    price: '₹8,999',
    fullDescription: 'Comprehensive full stack development program covering both frontend and backend technologies. Become a complete web developer.',
    curriculum: [
      'Frontend Development (React)',
      'Backend Development (Node.js)',
      'Database Management',
      'API Development',
      'Authentication & Security',
      'Deployment & DevOps',
    ],
    features: [
      'Full stack projects',
      'Industry mentorship',
      'Job placement assistance',
      'Portfolio development',
    ],
  }
];