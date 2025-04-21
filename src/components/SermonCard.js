import React from 'react';

const SermonCard = ({ sermon, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(sermon)}
    >
      <div className="relative pb-[56.25%] bg-gray-200">
        <img 
          src={`https://img.youtube.com/vi/${sermon.youtubeId}/mqdefault.jpg`}
          alt={sermon.title}
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-16 h-16 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900 mb-1">{sermon.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{sermon.pastor} - {new Date(sermon.date).toLocaleDateString()}</p>
        <p className="text-sm text-gray-700 line-clamp-2">{sermon.description}</p>
        <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
          {sermon.theme}
        </span>
      </div>
    </div>
  );
};

export default SermonCard;