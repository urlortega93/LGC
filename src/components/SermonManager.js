import React, { useState } from 'react';

const SermonManager = () => {
  const [sermons, setSermons] = useState([]);
  const [newSermon, setNewSermon] = useState({
    title: '',
    preacher: '',
    date: '',
    biblePassage: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSermon({ ...newSermon, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newSermon.title || !newSermon.preacher || !newSermon.date) return;

    if (editingId) {
      setSermons(sermons.map(sermon => 
        sermon.id === editingId ? { ...newSermon, id: editingId } : sermon
      ));
      setEditingId(null);
    } else {
      setSermons([...sermons, { ...newSermon, id: Date.now() }]);
    }
    
    setNewSermon({
      title: '',
      preacher: '',
      date: '',
      biblePassage: '',
      description: ''
    });
  };

  const handleEdit = (sermon) => {
    setNewSermon(sermon);
    setEditingId(sermon.id);
  };

  const handleDelete = (id) => {
    setSermons(sermons.filter(sermon => sermon.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Gestión de Prédicas</h2>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título*</label>
            <input
              type="text"
              name="title"
              value={newSermon.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Predicador*</label>
            <input
              type="text"
              name="preacher"
              value={newSermon.preacher}
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
              value={newSermon.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pasaje Bíblico</label>
            <input
              type="text"
              name="biblePassage"
              value={newSermon.biblePassage}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea
            name="description"
            value={newSermon.description}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {editingId ? 'Actualizar Prédica' : 'Agregar Prédica'}
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Prédicas Registradas</h3>
        {sermons.length === 0 ? (
          <p className="text-gray-500">No hay prédicas registradas</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {sermons.map(sermon => (
              <li key={sermon.id} className="py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{sermon.title}</h4>
                    <p className="text-sm text-gray-600">{sermon.preacher} • {sermon.date}</p>
                    {sermon.biblePassage && <p className="text-sm text-gray-600">Pasaje: {sermon.biblePassage}</p>}
                    {sermon.description && <p className="mt-1 text-sm text-gray-500">{sermon.description}</p>}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(sermon)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(sermon.id)}
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

export default SermonManager;

// DONE