import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import AdminPanel from './AdminPanel';
import LoginModal from '../Auth/LoginModal';

const ManagementSystem = ({ onContentUpdate }) => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user } = useContext(AuthContext);

  const handleManagementClick = () => {
    if (user) {
      setShowAdminPanel(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowAdminPanel(true);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleManagementClick}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
          aria-label="Panel de administración"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </div>

      {showAdminPanel && (
        <AdminPanel 
          onClose={() => setShowAdminPanel(false)}
          onUpdate={() => {
            onContentUpdate();
            setShowAdminPanel(false);
          }}
        />
      )}
      
      {showLogin && (
        <LoginModal 
          onSuccess={handleLoginSuccess}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
};

export default ManagementSystem;