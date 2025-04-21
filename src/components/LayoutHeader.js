import React from 'react';

const LayoutHeader = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">La Gran Comisión</div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-blue-700' : 'text-blue-900'} hover:text-blue-700 transition-colors`}>Inicio</button>
          <button onClick={() => setCurrentPage('about')} className={`${currentPage === 'about' ? 'text-blue-700' : 'text-blue-900'} hover:text-blue-700 transition-colors`}>Nosotros</button>
          <button onClick={() => setCurrentPage('sermons')} className={`${currentPage === 'sermons' ? 'text-blue-700' : 'text-blue-900'} hover:text-blue-700 transition-colors`}>Prédicas</button>
          <button onClick={() => setCurrentPage('events')} className={`${currentPage === 'events' ? 'text-blue-700' : 'text-blue-900'} hover:text-blue-700 transition-colors`}>Eventos</button>
          <button onClick={() => setCurrentPage('contact')} className={`${currentPage === 'contact' ? 'text-blue-700' : 'text-blue-900'} hover:text-blue-700 transition-colors`}>Contacto</button>
        </nav>
        <button className="md:hidden text-blue-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default LayoutHeader;