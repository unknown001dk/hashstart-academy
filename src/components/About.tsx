import { Code, Users, Laptop, Trophy } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: '100% Project-based Learning',
    description:
      'Learn by doing with real-world projects that build your portfolio.',
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    description:
      'Learn from industry professionals with years of practical experience.',
  },
  {
    icon: Laptop,
    title: 'Flexible Learning',
    description:
      'Study at your own pace with our flexible online learning platform.',
  },
  {
    icon: Trophy,
    title: 'Career Support',
    description:
      'Get personalized career guidance and job placement assistance.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About HashStart Academy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing high-quality programming education
            tailored to the needs of tomorrow's innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;