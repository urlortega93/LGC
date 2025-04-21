import React, { useState, useEffect } from 'react';
import { getSermons, getSermonById } from '../mock/sermons';
import SermonCard from './SermonCard';
import SermonFilter from './SermonFilter';
import SermonDetail from './SermonDetail';
import LatestSermon from './LatestSermon';

const SermonArchive = ({ isAdmin }) => {
  const [sermons, setSermons] = useState([]);
  const [filteredSermons, setFilteredSermons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [latestSermon, setLatestSermon] = useState(null);

  useEffect(() => {
    const allSermons = getSermons();
    setSermons(allSermons);
    setFilteredSermons(allSermons.slice(1)); // Excluye la más reciente del listado
    setLatestSermon(allSermons[0]);
  }, []);

  useEffect(() => {
    let results = sermons.slice(1); // Siempre buscamos en las prédicas excepto la más reciente
    
    if (searchTerm) {
      results = results.filter(sermon => 
        sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.pastor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredSermons(results);
  }, [searchTerm, sermons]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSermonSelect = (sermon) => {
    setSelectedSermon(sermon);
  };

  const handleBackToList = () => {
    setSelectedSermon(null);
  };

  if (selectedSermon) {
    return <SermonDetail 
      sermon={selectedSermon} 
      isAdmin={isAdmin} 
      onBack={handleBackToList} 
    />;
  }

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Archivo de Prédicas</h2>
        
        {latestSermon && (
          <div className="mb-12">
            <LatestSermon 
              sermon={latestSermon} 
              onClick={handleSermonSelect} 
            />
          </div>
        )}
        
        <SermonFilter onSearch={handleSearch} />
        
        {filteredSermons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No se encontraron prédicas con los términos de búsqueda.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Prédicas anteriores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSermons.map(sermon => (
                <SermonCard 
                  key={sermon.id} 
                  sermon={sermon} 
                  onClick={handleSermonSelect} 
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SermonArchive;

// DONE