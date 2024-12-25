import React from 'react';
import { Award, Clock, Users, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Industry-Leading Curriculum',
    description: 'Courses designed and updated regularly with input from tech industry leaders.',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Learn at your own pace with both live and recorded sessions available 24/7.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from professionals with years of real-world industry experience.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Get personalized career guidance and job placement assistance after graduation.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HashStart?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best tech education experience with industry-leading practices and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
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

export default WhyChooseUs;