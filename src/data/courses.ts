import { Code, Database, Globe, Palette  } from 'lucide-react';

export interface Course {
  id: number;
  icon: any; 
  title: string;
  description: string;
  level: string;
  duration: string;
  price: string;
  fullDescription: string;
  curriculum: string[];
  features: string[];
  discount: number;
  Originalprice: string;
  category: string;
  courseDetails: string;
}

export const courses: Course[] = [
  {
    id: 1,
    icon: Code,
    title: 'Frontend Development',
    description: 'Master modern frontend development with React, TypeScript, and more.',
    level: 'Beginner to Advanced',
    duration: '35 days',
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
    discount: 10,
    Originalprice: "₹5,999",
    category: "Payed",
    courseDetails: "/pdf/dummy.pdf"
  },
  {
    id: 2,
    icon: Database,
    title: 'Backend Development',
    description: 'Learn Node.js, Express, and server-side development.',
    level: 'Intermediate',
    duration: '45 days',
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
    discount: 10,
    Originalprice: "₹5,999",
    category: "Payed",
    courseDetails: "/pdf/dummy.pdf"
  },
  {
    id: 3,
    icon: Code,
    title: 'Python for Beginners',
    description: 'Start your programming journey with Python.',
    level: 'Beginner',
    duration: '35 days',
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
    discount: 10,
    Originalprice: "₹5,999",
    category: "Payed",
    courseDetails: "/pdf/dummy.pdf"
  },
  {
    id: 4,
    icon: Database,
    title: 'Database Management',
    description: 'Master SQL and database design principles.',
    level: 'Beginner to Intermediate',
    duration: '35 days',
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
    discount: 10,
    Originalprice: "₹5,999",
    category: "Payed",
    courseDetails: "/pdf/dummy.pdf"
  },
  {
    id: 5,
    icon: Globe,
    title: 'Full Stack Development',
    description: 'Complete web development from frontend to backend.',
    level: 'Beginner to Intermediate',
    duration: '40 days',
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
    discount: 0,
    Originalprice: "₹9,999",
    category: "Payed",
    courseDetails: "/pdf/dummy.pdf"
  },
  {
    id: 6,
    icon: Palette,
    title: "UI/UX Development",
    description: "Master UI/UX design principles, wireframing, prototyping, and user experience strategies.",
    level: "Beginner to Advanced",
    duration: "35 days",
    price: "₹7,999",
    Originalprice: "₹14,999",
    discount: 10,
    fullDescription: "A comprehensive UI/UX design course covering user research, wireframing, prototyping, usability testing, and high-fidelity designs using Figma and Adobe XD. Learn to create engaging user experiences.",
    curriculum: [
      "Introduction to UI/UX Design",
      "User Research & Psychology",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Design Tools (Figma, Adobe XD)",
      "Responsive & Mobile-first Design",
      "Usability Testing & Feedback"
    ],
    features: [
      "Hands-on projects",
      "Industry mentorship",
      "Portfolio development",
      "Job placement assistance"
    ],
    category: "Payed",
    courseDetails: "/pdf/dummy.pdf"
  },
  {
    id: 8,
    icon: Code,
    title: "C Programming Basics",
    description: "Learn the fundamentals of C programming from scratch.",
    level: "Beginner",
    duration: "15 days",
    price: "Free",
    Originalprice: "₹2,999",
    discount: 100,
    fullDescription: "This beginner-friendly course covers the basics of C programming, including syntax, data types, control structures, functions, and arrays. Perfect for those starting their programming journey.",
    curriculum: [
      "Introduction to C Programming",
      "Data Types & Variables",
      "Operators & Expressions",
      "Control Flow (if-else, loops)",
      "Functions & Recursion",
      "Arrays & Strings",
      "Pointers & Memory Management"
    ],
    features: [
      "Free course",
      "Hands-on coding exercises",
      "Beginner-friendly approach",
      "Certificate of completion"
    ],
    category: "Free",
    courseDetails: "/pdf/dummy.pdf"
  },
  {
    id: 10,
    icon: Globe,
    title: "React.js Development",
    description: "Master React.js and build dynamic web applications with modern UI components.",
    level: "Beginner to Intermediate",
    duration: "45 days",
    price: "₹5,999",
    Originalprice: "₹11,999",
    discount: 50,
    fullDescription: "This comprehensive React.js course covers everything from fundamental concepts to advanced topics like state management, hooks, context API, and performance optimization. Build real-world applications with hands-on projects.",
    curriculum: [
      "Introduction to React & JSX",
      "Components & Props",
      "State & Lifecycle",
      "Event Handling & Forms",
      "React Hooks & Custom Hooks",
      "React Router & Navigation",
      "Context API & Redux",
      "API Integration & Async Handling",
      "Performance Optimization",
      "Deploying React Apps"
    ],
    features: [
      "Project-based learning",
      "Hands-on coding exercises",
      "Industry mentorship",
      "Certificate of completion",
      "Job placement assistance"
    ],
    category: "Payed",
    courseDetails: "/pdf/dummy.pdf"
  }
];