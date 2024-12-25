import React from 'react';
import { Calendar, Users, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: 'March 25, 2024',
    type: 'Online',
    icon: Video,
  },
  {
    id: 2,
    title: 'Data Science Seminar',
    date: 'March 28, 2024',
    type: 'Online',
    icon: Users,
  },
  {
    id: 3,
    title: 'Career Fair',
    date: 'April 1, 2024',
    type: 'Online',
    icon: Calendar,
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our upcoming events to learn from industry experts and network with fellow developers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {upcomingEvents.map((event) => {
            const EventIcon = event.icon;
            return (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <EventIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-green-600 mb-4">{event.type}</p>
                <Link
                  to="/events"
                  className="text-green-600 font-medium hover:text-green-700"
                >
                  Register Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;