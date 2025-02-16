import TestimonialCard from '../components/testimonials/TestimonialCard';
import VideoTestimonial from '../components/testimonials/VideoTestimonial';
import CompanyLogos from '../components/testimonials/CompanyLogos';
import { testimonials } from '../data/testimonials';
import { videoTestimonials } from '../data/videoTestimonials';
import { ArrowRight, Quote } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const TestimonialsPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 to-white py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent" />
          <Quote className="absolute -right-8 -bottom-8 h-64 w-64 text-green-100 transform rotate-12" />
        </div>
        <AnimatedSection className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how our graduates transformed their careers and achieved their dreams through our comprehensive tech education programs.
          </p>
        </AnimatedSection>
      </div>

      {/* Video Testimonials */}
      <section className="container mx-auto px-4 mb-20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our alumni share their journey and success stories after graduating from HashStart Academy.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <AnimatedSection key={index}>
              <VideoTestimonial {...video} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Company Logos */}
      <AnimatedSection>
        <CompanyLogos />
      </AnimatedSection>

      {/* Written Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Graduate Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our graduates have to say about their experience and success after completing our programs.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-20">
        <AnimatedSection className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join thousands of successful graduates who have transformed their careers with HashStart Academy.
            </p>
            <a
              href="/courses"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Explore Our Courses</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default TestimonialsPage;