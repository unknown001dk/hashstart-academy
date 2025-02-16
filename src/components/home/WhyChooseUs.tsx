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
    <section className="py-16 bg-gray-50">
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
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-green-600 transform origin-left -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative p-8">
                <feature.icon className="h-12 w-12 text-green-600 mb-6 transition-colors group-hover:text-white" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 transition-colors group-hover:text-green-50">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;