import React from 'react';

const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {image || <span className="text-gray-500">Imagen del evento</span>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-blue-700 font-medium mb-3">{date}</p>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors">
          Más información
        </button>
      </div>
    </div>
  );
};

export default EventCard;