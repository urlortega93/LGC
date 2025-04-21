import React, { useState } from 'react';
import { getSermons, getThemes } from '../mock/sermons';

const ManagementPanel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('sermons');
  const [sermonForm, setSermonForm] = useState({
    title: '',
    date: '',
    pastor: '',
    youtubeId: '',
    description: '',
    theme: '',
    verses: ['']
  });
  const themes = getThemes();

  const handleSermonSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la nueva prédica
    console.log('Nueva prédica:', sermonForm);
    alert('Prédica guardada exitosamente');
    onClose();
  };

  const addVerseField = () => {
    setSermonForm({
      ...sermonForm,
      verses: [...sermonForm.verses, '']
    });
  };

  const updateVerse = (index, value) => {
    const newVerses = [...sermonForm.verses];
    newVerses[index] = value;
    setSermonForm({
      ...sermonForm,
      verses: newVerses
    });
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
                className={`${activeTab === 'sermons' ? 'border-blue-900 text-blue-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Añadir Prédica
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`${activeTab === 'events' ? 'border-blue-900 text-blue-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Editar Eventos
              </button>
            </nav>
          </div>

          {activeTab === 'sermons' ? (
            <form onSubmit={handleSermonSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título de la Prédica</label>
                  <input
                    type="text"
                    value={sermonForm.title}
                    onChange={(e) => setSermonForm({...sermonForm, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                  <input
                    type="date"
                    value={sermonForm.date}
                    onChange={(e) => setSermonForm({...sermonForm, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Predicador</label>
                  <input
                    type="text"
                    value={sermonForm.pastor}
                    onChange={(e) => setSermonForm({...sermonForm, pastor: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID de YouTube</label>
                  <input
                    type="text"
                    value={sermonForm.youtubeId}
                    onChange={(e) => setSermonForm({...sermonForm, youtubeId: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    placeholder="Ej: Iru0s0eDw24"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tema</label>
                  <select
                    value={sermonForm.theme}
                    onChange={(e) => setSermonForm({...sermonForm, theme: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    required
                  >
                    <option value="">Selecciona un tema</option>
                    {themes.map(theme => (
                      <option key={theme} value={theme}>{theme}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                  <textarea
                    value={sermonForm.description}
                    onChange={(e) => setSermonForm({...sermonForm, description: e.target.value})}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Versículos Bíblicos</label>
                  {sermonForm.verses.map((verse, index) => (
                    <div key={index} className="flex mb-2">
                      <input
                        type="text"
                        value={verse}
                        onChange={(e) => updateVerse(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                        placeholder="Ej: Juan 3:16 - Porque de tal manera amó Dios al mundo..."
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addVerseField}
                    className="mt-2 inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  >
                    <svg className="-ml-0.5 mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Añadir versículo
                  </button>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                >
                  Guardar Prédica
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Edición de Eventos</h3>
              <p className="text-gray-500 mb-6">Aquí puedes editar los eventos existentes o añadir nuevos.</p>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Eventos existentes</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                    <div>
                      <p className="font-medium">Retiro Espiritual</p>
                      <p className="text-sm text-gray-500">25-27 Noviembre 2023</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-900 hover:text-blue-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Más eventos aquí */}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Añadir Nuevo Evento</h4>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Título del Evento</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                        placeholder="Ej: 25-27 Noviembre 2023"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                      <textarea
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Imagen (URL)</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                        placeholder="Pega la URL de la imagen"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                    >
                      Guardar Evento
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagementPanel;