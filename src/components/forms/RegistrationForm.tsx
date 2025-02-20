import React from "react";
import { Mail, User, Phone } from "lucide-react";

interface RegistrationFormProps {
  event: {
    title: string;
    date: string;
    time: string;
  };
  onSubmit: (data: FormData) => void;
}

const RegistrationForm = ({ event, onSubmit }: RegistrationFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-1">Event Details</h3>
        <p className="text-gray-600">{event.title}</p>
        <p className="text-sm text-gray-500">
          {event.date} at {event.time}
        </p>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="pl-10 block w-full rounded-md p-2 border-gray-300 outline-none bg-gray-50 shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="DK"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="pl-10 block w-full rounded-md border-gray-300 outline-none p-2 bg-gray-50 shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="pl-10 block w-full rounded-md outline-none bg-gray-50 p-2 border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="+91 9876543210"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
      >
        Complete Registration
      </button>
    </form>
  );
};

export default RegistrationForm;
