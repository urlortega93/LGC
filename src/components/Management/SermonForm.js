import React, { useState } from 'react';

const SermonForm = ({ onSuccess, sermons }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    pastor: '',
    youtubeId: '',
    description: '',
    theme: '',
    verses: ['']
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(formData);
  };

  const addVerse = () => {
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
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Campos del formulario igual que antes */}
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
        >
          Guardar Prédica
        </button>
      </div>
    </form>
  );
};

export default SermonForm;