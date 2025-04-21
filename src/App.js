import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import SermonSection from './components/SermonSection';
import EventsCarousel from './components/EventsCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <FeaturesSection />
          </>
        );
      case 'about':
        return <AboutSection />;
      case 'sermons':
        return <SermonSection isAdmin={isAdmin} />;
      case 'events':
        return <EventsCarousel isAdmin={isAdmin} />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <FeaturesSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 flex flex-col">
      <LayoutHeader 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onAdminClick={() => setShowLogin(true)}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer />
      
      {showLogin && !isAdmin && (
        <AdminLogin 
          onLogin={(success) => {
            setIsAdmin(success);
            setShowLogin(false);
          }} 
        />
      )}
    </div>
  );
};

export default App;

// DONE