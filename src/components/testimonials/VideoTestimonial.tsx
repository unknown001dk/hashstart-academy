import React from 'react';
import { Play } from 'lucide-react';

interface VideoTestimonialProps {
  thumbnail: string;
  name: string;
  title: string;
  duration: string;
}

const VideoTestimonial = ({ thumbnail, name, title, duration }: VideoTestimonialProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img 
          src={thumbnail} 
          alt={`${name}'s story`} 
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-all duration-300 group-hover:bg-white">
            <Play className="h-8 w-8 text-green-600 group-hover:text-green-700" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
          {duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="mt-4 space-y-2">
        <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
          {name}
        </h4>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default VideoTestimonial;