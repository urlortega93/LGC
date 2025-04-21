import React from 'react';

const LatestSermon = ({ sermon, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-blue-100">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <img 
            src={`https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`}
            alt={sermon.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-blue-900 font-semibold mb-1">Última Prédica</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{sermon.title}</h3>
          <p className="text-gray-600 mb-4">{sermon.pastor} • {new Date(sermon.date).toLocaleDateString()}</p>
          <p className="text-gray-700 mb-6">{sermon.description}</p>
          <button
            onClick={() => onClick(sermon)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Ver Prédica Completa
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestSermon;