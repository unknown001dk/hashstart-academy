export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  company: string;
  course?: string;
}

export interface VideoTestimonialType {
  thumbnail: string;
  name: string;
  title: string;
  duration: string;
}