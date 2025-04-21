import React, { useState, useContext } from 'react';
import { db } from '../../mock/database';
import SermonManager from './SermonManager';
import EventManager from './EventManager';
import { AuthContext } from '../../contexts/AuthContext';

const AdminPanel = ({ onClose, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('sermons');
  const { logout } = useContext(AuthContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-900">Panel de Administración</h2>
          <div className="flex space-x-4">
            <button 
              onClick={logout}
              className="text-gray-600 hover:text-gray-900"
            >
              Cerrar Sesión
            </button>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('sermons')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'sermons' 
                  ? 'border-blue-900 text-blue-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Prédicas
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events' 
                  ? 'border-blue-900 text-blue-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Eventos
            </button>
          </nav>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'sermons' ? (
            <SermonManager onUpdate={onUpdate} />
          ) : (
            <EventManager onUpdate={onUpdate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;