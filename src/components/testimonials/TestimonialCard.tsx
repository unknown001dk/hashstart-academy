import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="group bg-white h-96 rounded-xl overflow-auto shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Header with gradient */}
      <div className="relative h-24 bg-gradient-to-r from-green-600 to-green-700 p-6">
        <Quote className="absolute right-4 top-4 h-12 w-12 text-green-500/20 transform rotate-180" />
      </div>

      {/* Profile Section */}
      <div className="relative px-6 -mt-12">
        <div className="flex items-center space-x-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-white mb-3">{testimonial.role}</p>
            <p className="text-sm text-green-600">{testimonial.company}</p>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="px-6 py-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform"
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
        {testimonial.course && (
          <div className="mt-4 inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
            {testimonial.course}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;