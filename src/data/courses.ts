import { BookOpen, Code, Database, Smartphone, Globe, Shield, Brain, Cloud } from 'lucide-react';

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
    title: 'Web Development',
    description: 'Master modern web development with React, Node.js, and more.',
    level: 'Beginner to Advanced',
    duration: '12 weeks',
    price: '$999',
    fullDescription: 'Dive deep into web development with our comprehensive course. Learn frontend and backend technologies, including React, Node.js, and modern development practices.',
    curriculum: [
      'HTML5, CSS3, and Modern JavaScript',
      'React.js and State Management',
      'Node.js and Express',
      'Database Design with MongoDB',
      'REST API Development',
      'Authentication and Security',
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
    title: 'Data Science',
    description: 'Learn Python, data analysis, and machine learning fundamentals.',
    level: 'Intermediate',
    duration: '16 weeks',
    price: '$1299',
    fullDescription: 'Master the fundamentals of data science, from statistical analysis to machine learning. Build real-world projects using Python and popular data science libraries.',
    curriculum: [
      'Python Programming',
      'Statistical Analysis',
      'Data Visualization',
      'Machine Learning Basics',
      'Deep Learning Introduction',
      'Big Data Technologies',
    ],
    features: [
      'Hands-on projects',
      'Industry datasets',
      'AI lab access',
      'Career guidance',
    ],
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Build iOS and Android apps with React Native.',
    level: 'Intermediate',
    duration: '10 weeks',
    price: '$899',
    fullDescription: 'Learn to build native mobile applications for both iOS and Android using React Native. Master mobile UI/UX and app deployment.',
    curriculum: [
      'React Native Fundamentals',
      'Mobile UI/UX Design',
      'State Management',
      'Native Device Features',
      'App Store Deployment',
      'Performance Optimization',
    ],
    features: [
      'Cross-platform development',
      'Real device testing',
      'App store submission guide',
      'Portfolio projects',
    ],
  },
  {
    id: 4,
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Master AWS, Azure, and cloud architecture.',
    level: 'Advanced',
    duration: '14 weeks',
    price: '$1499',
    fullDescription: 'Comprehensive cloud computing course covering major platforms and best practices in cloud architecture and deployment.',
    curriculum: [
      'AWS Services Deep Dive',
      'Azure Fundamentals',
      'Cloud Architecture Patterns',
      'DevOps Practices',
      'Serverless Computing',
      'Cloud Security',
    ],
    features: [
      'Cloud lab access',
      'Certification prep',
      'Real-world scenarios',
      'Enterprise projects',
    ],
  },
  {
    id: 5,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Learn ethical hacking and security fundamentals.',
    level: 'Intermediate to Advanced',
    duration: '16 weeks',
    price: '$1599',
    fullDescription: 'Comprehensive cybersecurity program covering ethical hacking, security protocols, and threat prevention.',
    curriculum: [
      'Network Security',
      'Ethical Hacking',
      'Security Protocols',
      'Penetration Testing',
      'Incident Response',
      'Security Compliance',
    ],
    features: [
      'Security lab access',
      'CTF challenges',
      'Industry certifications',
      'Defense simulations',
    ],
  },
  {
    id: 6,
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Deep dive into AI, ML, and neural networks.',
    level: 'Advanced',
    duration: '20 weeks',
    price: '$1999',
    fullDescription: 'Advanced course in artificial intelligence and machine learning, covering neural networks, deep learning, and AI applications.',
    curriculum: [
      'Neural Networks',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Reinforcement Learning',
      'AI Ethics',
    ],
    features: [
      'GPU-powered labs',
      'Research projects',
      'Industry partnerships',
      'AI model deployment',
    ],
  }
];