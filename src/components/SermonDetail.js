import React, { useState } from 'react';

const SermonDetail = ({ sermon, isAdmin, onBack }) => {
  const [notes, setNotes] = useState('');
  const [newVerse, setNewVerse] = useState('');
  const [verses, setVerses] = useState(sermon.verses);

  const addVerse = () => {
    if (newVerse.trim()) {
      setVerses([...verses, newVerse]);
      setNewVerse('');
    }
  };

  const generatePDF = () => {
    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Apuntes - ${sermon.title}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1a365d; }
          .header { text-align: center; margin-bottom: 20px; }
          .title { color: #2b6cb0; font-size: 24px; font-weight: bold; }
          .subtitle { color: #4a5568; font-size: 16px; }
          .content { margin-top: 30px; white-space: pre-line; }
          .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #718096; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="title">La Gran Comisión</div>
          <div class="subtitle">${sermon.title} - ${new Date(sermon.date).toLocaleDateString()}</div>
        </div>
        <div class="content">${notes}</div>
        <div class="footer">Generado el ${new Date().toLocaleDateString()}</div>
      </body>
      </html>
    `;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Apuntes_${sermon.title.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button 
        onClick={onBack}
        className="flex items-center text-blue-900 mb-6 hover:text-blue-700 transition-colors"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver a todas las prédicas
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe 
              className="w-full h-96 rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">{sermon.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{sermon.pastor} - {new Date(sermon.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4">{sermon.description}</p>
            <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
              {sermon.theme}
            </span>
          </div>

          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-4">Tus Apuntes</h4>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-40 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Toma notas durante la prédica..."
            />
            <button 
              onClick={generatePDF}
              className="mt-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors"
            >
              Guardar y Descargar Apuntes
            </button>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-blue-900 mb-4">Versículos Bíblicos</h4>
            <ul className="space-y-3">
              {verses.map((verse, index) => (
                <li key={index} className="text-gray-700">{verse}</li>
              ))}
            </ul>

            {isAdmin && (
              <div className="mt-6">
                <h5 className="font-bold text-blue-900 mb-2">Añadir Versículo</h5>
                <div className="flex">
                  <input
                    type="text"
                    value={newVerse}
                    onChange={(e) => setNewVerse(e.target.value)}
                    className="flex-1 px-3 py-1 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="Nuevo versículo..."
                  />
                  <button
                    onClick={addVerse}
                    className="bg-blue-900 hover:bg-blue-800 text-white px-3 py-1 rounded-r transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonDetail;