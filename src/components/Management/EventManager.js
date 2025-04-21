import React, { useState, useEffect } from 'react';
import { db } from '../../mock/database';

const EventManager = ({ onUpdate }) => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    refreshEvents();
  }, []);

  const refreshEvents = () => {
    setEvents(db.getEvents());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.addEvent(formData);
    refreshEvents();
    setFormData({
      title: '',
      date: '',
      description: '',
      image: ''
    });
    onUpdate();
    alert('Evento agregado exitosamente');
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Agregar Nuevo Evento</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Resto de campos del formulario */}
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
        >
          Guardar Evento
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Eventos Existentes</h3>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="p-4 border border-gray-200 rounded-md">
              <h4 className="font-medium">{event.title}</h4>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventManager;

// En App.js
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/Footer';
import AdminPanel from './components/Management/AdminPanel';
import LoginModal from './components/Auth/LoginModal';

function App() {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [contentVersion, setContentVersion] = useState(0);

  const handleManagementClick = () => {
    setShowLogin(true);
  };

  return (
    <AuthProvider>
      {/* Resto de tu aplicación */}
      
      <Footer onManagementClick={handleManagementClick} />
      
      {showAdminPanel && (
        <AdminPanel 
          onClose={() => setShowAdminPanel(false)} 
          onUpdate={() => setContentVersion(v => v + 1)}
        />
      )}
      
      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)} 
          onSuccess={() => {
            setShowLogin(false);
            setShowAdminPanel(true);
          }}
        />
      )}
    </AuthProvider>
  );
}

// DONE