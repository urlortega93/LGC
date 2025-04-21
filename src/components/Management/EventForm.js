import React, { useState } from 'react';

const EventForm = ({ onSuccess, events }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Campos del formulario para eventos */}
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
        >
          Guardar Evento
        </button>
      </div>
    </form>
  );
};

export default EventForm;