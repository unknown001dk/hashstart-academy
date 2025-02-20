import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const EnrollModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md mx-4 sm:mx-0 p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">{title}</h2>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default EnrollModal;
