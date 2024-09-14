import React from 'react';

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative z-60"
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
        <button
          className="absolute top-0 right-0 m-2 text-gray-500"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
