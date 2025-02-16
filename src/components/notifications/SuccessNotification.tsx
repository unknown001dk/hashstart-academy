import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessNotificationProps {
  message: string;
  onClose: () => void;
}

const SuccessNotification = ({ message, onClose }: SuccessNotificationProps) => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center bg-green-50 border border-green-200 px-4 py-3 rounded-lg shadow-lg animate-in">
      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
      <p className="text-green-800">{message}</p>
      <button onClick={onClose} className="ml-4 text-green-600 hover:text-green-800">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SuccessNotification;