import React from 'react';
import { 
  FileCode2, 
  Database, 
  Terminal, 
  Cpu, 
  Code2, 
  Brackets,
  Binary,
  Webhook
} from 'lucide-react';

const languages = [
  { name: 'JavaScript', icon: FileCode2, color: '#F7DF1E' },
  { name: 'Python', icon: Terminal, color: '#3776AB' },
  { name: 'Java', icon: Cpu, color: '#007396' },
  { name: 'SQL', icon: Database, color: '#4479A1' },
  { name: 'C++', icon: Code2, color: '#00599C' },
  { name: 'HTML/CSS', icon: Brackets, color: '#E34F26' },
  { name: 'TypeScript', icon: Binary, color: '#3178C6' },
  { name: 'React', icon: Webhook, color: '#61DAFB' }
];

const ProgrammingLogos = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {languages.map((lang, index) => {
            const Icon = lang.icon;
            return (
              <div
                key={lang.name}
                className="flex flex-col items-center space-y-2 group"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div 
                  className="p-4 rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${lang.color}15` }}
                >
                  <Icon 
                    className="h-8 w-8 transition-colors duration-300"
                    style={{ color: lang.color }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">{lang.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingLogos;