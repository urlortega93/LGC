import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Nuestra Historia</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-blue-800 mb-6">
            Fundada en 1985, la Iglesia Luz Divina ha sido un faro de esperanza en nuestra comunidad. 
            Nuestra misión es compartir el amor de Cristo a través de la enseñanza bíblica, el servicio 
            comunitario y el compañerismo cristiano.
          </p>
          <p className="text-lg text-blue-800">
            Creemos en la importancia de la familia, la oración y el crecimiento espiritual. 
            Todos son bienvenidos en nuestra comunidad de fe, sin importar su trasfondo o circunstancias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;