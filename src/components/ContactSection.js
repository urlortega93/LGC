import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Contáctanos</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Información de Contacto</h3>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Dirección:</span> Calle Principal #123, Ciudad
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Teléfono:</span> (123) 456-7890
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Email:</span> info@iglesialuzdivina.com
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Horarios:</span> Domingos 9:00am y 11:00am
            </p>
          </div>
          <div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <textarea 
                placeholder="Mensaje" 
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
              ></textarea>
              <button 
                type="submit" 
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;