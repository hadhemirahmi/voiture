// Context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté au chargement
    const savedUser = localStorage.getItem('motorz_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulation d'authentification
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@motorz.tn' && password === 'password') {
          const userData = {
            id: 1,
            email: email,
            name: 'Admin Motorz',
            role: 'admin'
          };
          setUser(userData);
          localStorage.setItem('motorz_user', JSON.stringify(userData));
          resolve(userData);
        } else if (email === 'user@example.com' && password === 'password') {
          const userData = {
            id: 2,
            email: email,
            name: 'Utilisateur Test',
            role: 'user'
          };
          setUser(userData);
          localStorage.setItem('motorz_user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Email ou mot de passe incorrect'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('motorz_user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};