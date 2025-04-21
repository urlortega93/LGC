import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import AdminAccess from './components/AdminAccess';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      {/* Resto de tu aplicación */}
      
      <Footer />
      <AdminAccess />
    </AuthProvider>
  );
};

export default App;

// DONE