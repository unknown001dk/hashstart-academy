import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Clock, User } from 'lucide-react';
import Modal from '../components/modals/Modal';
import RegistrationForm from '../components/forms/RegistrationForm';
import { events, Event } from '../data/events';
import { AnimatedSection } from '../components/AnimatedSection';

interface EventCardProps {
  event: Event;
  onRegister: (event: Event) => void;
}

const EventCard = ({ event, onRegister }: EventCardProps) => {
  const EventIcon = event.icon;
  
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Header with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-green-800/90 group-hover:scale-110 transition-transform duration-300" />
        <div className="relative p-6 flex flex-col h-full text-white z-10">
          <EventIcon className="h-10 w-10 mb-4 transform group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
          <p className="text-green-50/90">{event.description}</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-5 w-5 text-green-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-5 w-5 text-green-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <User className="h-5 w-5 text-green-500" />
            <span>{event.speaker}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5 text-green-500" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">Topics Covered:</h3>
          <div className="flex flex-wrap gap-2">
            {event.topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-100 group-hover:bg-green-100 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={() => onRegister(event)}
          className="mt-6 w-full bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-xl font-semibold 
                   group-hover:bg-green-600 group-hover:text-white transition-all duration-300 
                   flex items-center justify-center space-x-2"
        >
          <span>Register Now</span>
          <ExternalLink className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleSubmit = (formData: FormData) => {
    console.log('Registration submitted:', {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      event: selectedEvent?.title
    });
    
    setSelectedEvent(null);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-gray-600">
            Join our interactive events and workshops to enhance your skills and connect with industry experts.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <AnimatedSection key={event.id}>
              <EventCard 
                event={event}
                onRegister={handleRegister}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title="Event Registration"
      >
        {selectedEvent && (
          <RegistrationForm
            event={selectedEvent}
            onSubmit={handleSubmit}
          />
        )}
      </Modal>

      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Registration Successful!"
      >
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">You're all set!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for registering! We've sent a confirmation email with all the event details.
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EventsPage;