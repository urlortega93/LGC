import React, { useState } from 'react';
import EventManager from './EventManager';
import SermonManager from './SermonManager';

const AdminPanel = ({ onClose, onLogout }) => {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Panel de Administración</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'events' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('events')}
            >
              Eventos
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'sermons' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('sermons')}
            >
              Prédicas
            </button>
          </div>

          {activeTab === 'events' && <EventManager />}
          {activeTab === 'sermons' && <SermonManager />}
        </div>

        <div className="sticky bottom-0 bg-white p-4 border-t flex justify-end">
          <button
            onClick={onLogout}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;