import { Video, Users, Award } from 'lucide-react';

export interface Event {
  id: number;
  icon: typeof Video | typeof Users | typeof Award;
  title: string;
  date: string;
  time: string;
  type: string;
  speaker: string;
  description: string;
  location: string;
  topics: string[];
}

export const events: Event[] = [
  {
    id: 1,
    icon: Video,
    title: 'Tech Talk: Future of Web Development',
    date: 'March 25, 2024',
    time: '2:00 PM EST',
    type: 'Online Webinar',
    speaker: 'Sarah Johnson',
    description: 'Learn about the latest trends in web development and what skills will be in demand.',
    location: 'Virtual',
    topics: ['Web Development', 'Future Tech', 'Career Growth'],
  },
  {
    id: 2,
    icon: Users,
    title: 'Coding Bootcamp Open House',
    date: 'April 1, 2024',
    time: '11:00 AM EST',
    type: 'Virtual Event',
    speaker: 'HashStart Team',
    description: 'Meet our instructors and learn about our bootcamp programs.',
    location: 'Virtual',
    topics: ['Bootcamp', 'Education', 'Programming'],
  },
  {
    id: 3,
    icon: Award,
    title: 'Student Project Showcase',
    date: 'April 15, 2024',
    time: '3:00 PM EST',
    type: 'Online Event',
    speaker: 'Current Students',
    description: 'Watch our students present their final projects and network with industry professionals.',
    location: 'Virtual',
    topics: ['Projects', 'Networking', 'Student Success'],
  },
];