import { Users, BookOpen, Trophy, Building } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Students Enrolled', value: '50+' },
  { icon: BookOpen, label: 'Courses', value: '10+' },
  { icon: Trophy, label: 'Success Rate', value: '95%' },
  { icon: Building, label: 'Partner Companies', value: '3+' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;