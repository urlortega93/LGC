import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import AdminPanel from './AdminPanel';
import LoginModal from './LoginModal';

const AdminButton = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user, login, logout } = useContext(AuthContext);

  const handleButtonClick = () => {
    if (user) {
      setShowPanel(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = (credentials) => {
    if (login(credentials.username, credentials.password)) {
      setShowLogin(false);
      setShowPanel(true);
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-colors z-50"
        aria-label="Panel de administración"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>

      {showPanel && user && (
        <AdminPanel 
          onClose={() => setShowPanel(false)}
          onLogout={logout}
        />
      )}

      {showLogin && (
        <LoginModal 
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
};

export default AdminButton;