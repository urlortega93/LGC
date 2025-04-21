import { useState } from 'react';
import { db } from '../mock/database';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (email, password) => {
    try {
      const authenticatedUser = db.verifyUser(email, password);
      if (authenticatedUser) {
        setUser(authenticatedUser);
        setError(null);
        return true;
      }
      setError("Credenciales incorrectas");
      return false;
    } catch (err) {
      setError("Error al iniciar sesión");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, error, login, logout };
};