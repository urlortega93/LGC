import React, { useState, useEffect } from 'react';
import { db } from '../../mock/database';
import SermonForm from './SermonForm';
import EventForm from './EventForm';

const ManagementPanel = ({ user, onClose, onContentUpdate }) => {
  const [activeTab, setActiveTab] = useState('sermons');
  const [sermons, setSermons] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setSermons(db.getSermons());
    setEvents(db.getEvents());
  }, []);

  const handleNewSermon = (newSermon) => {
    const updatedSermons = db.addSermon(newSermon);
    setSermons(updatedSermons);
    onContentUpdate();
  };

  const handleNewEvent = (newEvent) => {
    const updatedEvents = db.addEvent(newEvent);
    setEvents(updatedEvents);
    onContentUpdate();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900">Panel de Gestión</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('sermons')}
                className={`${activeTab === 'sermons' ? 'border-blue-900 text-blue-900' : 'border-transparent text-gray-500'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Prédicas
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`${activeTab === 'events' ? 'border-blue-900 text-blue-900' : 'border-transparent text-gray-500'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Eventos
              </button>
            </nav>
          </div>

          {activeTab === 'sermons' ? (
            <SermonForm 
              onSuccess={handleNewSermon} 
              sermons={sermons} 
            />
          ) : (
            <EventForm 
              onSuccess={handleNewEvent} 
              events={events} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagementPanel;