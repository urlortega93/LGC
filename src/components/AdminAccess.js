import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

const AdminAccess = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user, login, logout } = useContext(AuthContext);

  const handleAdminClick = () => {
    if (user) {
      setShowPanel(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = (username, password) => {
    if (login(username, password)) {
      setShowLogin(false);
      setShowPanel(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleAdminClick}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {showLogin && (
        <LoginForm 
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}

      {showPanel && user && (
        <AdminPanel
          onClose={() => setShowPanel(false)}
          onLogout={() => {
            logout();
            setShowPanel(false);
          }}
        />
      )}
    </>
  );
};

export default AdminAccess;