import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const FloatingAdminButton = ({ onClick }) => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-900 text-white p-4 rounded-full shadow-xl hover:bg-blue-800 transition-colors z-50"
      aria-label="Panel de administración"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </button>
  );
};

export default FloatingAdminButton;