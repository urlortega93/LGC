import React from 'react';

const SermonFilter = ({ onSearch }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Buscar prédicas por título, pastor o descripción..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
      </div>
    </div>
  );
};

export default SermonFilter;