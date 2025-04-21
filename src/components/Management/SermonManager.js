import React, { useState, useEffect } from 'react';
import { db } from '../../mock/database';

const SermonManager = ({ onUpdate }) => {
  const [sermons, setSermons] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    pastor: '',
    youtubeId: '',
    description: '',
    theme: '',
    verses: ['']
  });

  useEffect(() => {
    refreshSermons();
  }, []);

  const refreshSermons = () => {
    setSermons(db.getSermons());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.addSermon(formData);
    refreshSermons();
    setFormData({
      title: '',
      date: '',
      pastor: '',
      youtubeId: '',
      description: '',
      theme: '',
      verses: ['']
    });
    onUpdate();
    alert('Prédica agregada exitosamente');
  };

  const addVerseField = () => {
    setFormData({
      ...formData,
      verses: [...formData.verses, '']
    });
  };

  const updateVerse = (index, value) => {
    const newVerses = [...formData.verses];
    newVerses[index] = value;
    setFormData({
      ...formData,
      verses: newVerses
    });
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Agregar Nueva Prédica</h3>
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
          Guardar Prédica
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Prédicas Existentes</h3>
        <div className="space-y-4">
          {sermons.map(sermon => (
            <div key={sermon.id} className="p-4 border border-gray-200 rounded-md">
              <h4 className="font-medium">{sermon.title}</h4>
              <p className="text-sm text-gray-600">{sermon.pastor} - {sermon.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SermonManager;