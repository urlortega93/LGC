import React, { useState } from 'react';

const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newEvent.title || !newEvent.date) return;

    if (editingId) {
      setEvents(events.map(event => 
        event.id === editingId ? { ...newEvent, id: editingId } : event
      ));
    } else {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
    }
    
    setNewEvent({
      title: '',
      date: '',
      location: '',
      description: ''
    });
    setEditingId(null);
  };

  const handleEdit = (event) => {
    setNewEvent(event);
    setEditingId(event.id);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          {editingId ? 'Editar Evento' : 'Agregar Nuevo Evento'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título*</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha*</label>
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {editingId ? 'Actualizar Evento' : 'Agregar Evento'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setNewEvent({
                title: '',
                date: '',
                location: '',
                description: ''
              });
              setEditingId(null);
            }}
            className="ml-2 text-gray-600 hover:text-gray-800 px-4 py-2"
          >
            Cancelar
          </button>
        )}
      </form>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="bg-gray-50 px-4 py-3 font-medium">Eventos Programados</h3>
        {events.length === 0 ? (
          <p className="p-4 text-gray-500">No hay eventos registrados</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {events.map(event => (
              <li key={event.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date} {event.location && `• ${event.location}`}</p>
                    {event.description && <p className="mt-1 text-sm text-gray-500">{event.description}</p>}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventManager;