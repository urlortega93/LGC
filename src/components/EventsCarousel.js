import React, { useState } from 'react';
import EventCard from './EventCard';

const EventsCarousel = ({ isAdmin }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [events, setEvents] = useState([
    {
      title: "Retiro Espiritual",
      date: "25-27 Noviembre 2023",
      description: "Un fin de semana de renovación espiritual en las montañas."
    },
    {
      title: "Concierto de Navidad",
      date: "15 Diciembre 2023",
      description: "Celebra el nacimiento de Jesús con nuestra comunidad."
    },
    {
      title: "Campamento Juvenil",
      date: "5-7 Enero 2024",
      description: "Evento especial para jóvenes con actividades y enseñanza."
    }
  ]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    description: ''
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.description) {
      setEvents([...events, newEvent]);
      setNewEvent({
        title: '',
        date: '',
        description: ''
      });
    }
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Próximos Eventos</h2>
        
        {isAdmin && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Añadir Nuevo Evento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Título</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Fecha</label>
                <input
                  type="text"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Descripción</label>
                <input
                  type="text"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            </div>
            <button
              onClick={handleAddEvent}
              className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors"
            >
              Añadir Evento
            </button>
          </div>
        )}

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {events.map((event, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center mt-6 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-900' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;