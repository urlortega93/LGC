import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const LoginModal = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await login(email, password)) {
      onSuccess();
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Iniciar Sesión</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campos del formulario */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

// En App.js
import { AuthProvider } from './contexts/AuthContext';
import FloatingAdminButton from './components/Management/FloatingAdminButton';
import AdminPanel from './components/Management/AdminPanel';
import LoginModal from './components/Auth/LoginModal';

function App() {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [contentVersion, setContentVersion] = useState(0);

  return (
    <AuthProvider>
      {/* Resto de tu aplicación */}
      
      <FloatingAdminButton onClick={() => setShowLogin(true)} />
      
      {showAdminPanel && (
        <AdminPanel 
          onClose={() => setShowAdminPanel(false)} 
          onUpdate={() => setContentVersion(v => v + 1)}
        />
      )}
      
      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)} 
          onSuccess={() => {
            setShowLogin(false);
            setShowAdminPanel(true);
          }}
        />
      )}
    </AuthProvider>
  );
}

// DONE