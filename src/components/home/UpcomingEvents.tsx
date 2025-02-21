import { Calendar, Users, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: 'March 5, 2025',
    type: 'Online',
    icon: Video,
  },
  {
    id: 2,
    title: 'Database management Workshop',
    date: 'March 2, 2025',
    type: 'Online',
    icon: Users,
  },
  {
    id: 3,
    title: 'Career Fair',
    date: 'April 1, 2025',
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
              <div key={event.id} className="group">
                <div className="bg-white rounded-xl shadow-md p-8 h-full transform transition-all duration-300 group-hover:bg-green-600 group-hover:shadow-xl group-hover:-translate-y-1">
                  <EventIcon className="h-12 w-12 text-green-600 mb-6 transition-colors group-hover:text-white" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white">{event.title}</h3>
                  <p className="text-gray-600 mb-2 group-hover:text-green-50">{event.date}</p>
                  <p className="text-green-600 mb-6 group-hover:text-white font-medium">{event.type}</p>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 text-green-600 underline font-medium group-hover:text-white"
                  >
                    Register Now
                    <Calendar className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;