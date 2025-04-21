import React from 'react';
import ManagementLink from './Management/ManagementLink';

const Footer = ({ onManagementClick }) => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">La Gran Comisión</h3>
            <p className="mb-4 text-blue-200">Comunidad de fe y amor</p>
            <div className="flex space-x-4">
              <SocialIcon icon="facebook" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="youtube" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Domingo: 9:00am - 12:00pm</li>
              <li>Martes: 7:00pm - 8:30pm</li>
              <li>Jueves: 7:00pm - 8:30pm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Menú</h3>
            <ul className="space-y-2">
              <FooterLink text="Inicio" />
              <FooterLink text="Nosotros" />
              <FooterLink text="Prédicas" />
              <FooterLink text="Eventos" />
              <FooterLink text="Contacto" />
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Administración</h3>
            <ul className="space-y-2">
              <li>
                <ManagementLink onClick={onManagementClick} />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-6 text-center text-blue-300">
          <p>© {new Date().getFullYear()} La Gran Comisión</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  const icons = {
    facebook: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    instagram: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
    twitter: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
    youtube: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'
  };

  return (
    <a href="#" className="text-white hover:text-blue-300 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={icons[icon]} />
      </svg>
    </a>
  );
};

const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="text-blue-200 hover:text-white transition-colors">
      {text}
    </a>
  </li>
);

export default Footer;