import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Modal from '../components/modals/Modal';
import RegistrationForm from '../components/forms/RegistrationForm';
import { events, Event } from '../data/events';

interface EventCardProps {
  event: Event;
  onRegister: (event: Event) => void;
}

const EventCard = ({ event, onRegister }: EventCardProps) => {
  const EventIcon = event.icon;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col space-y-4">
        <div className="flex items-start space-x-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <EventIcon className="h-8 w-8 text-green-600" />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
            <p className="text-gray-600 mt-1">{event.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{event.speaker}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{event.location}</span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h3>
          <div className="flex flex-wrap gap-2">
            {event.topics.map((topic, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onRegister(event)}
          className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Register Now</span>
          <ExternalLink className="h-4 w-4" />
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
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard 
              key={event.id}
              event={event}
              onRegister={handleRegister}
            />
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
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Thank you for registering! We've sent a confirmation email with event details.
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EventsPage;