// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './Context/AuthContext';
import HomePage from './pages/HomePage';
import AutoPage from './pages/AutoPage';
import MotoPage from './pages/MotoPage';
import AccessoiresPage from './pages/AccessoiresPage';
import BateauPage from './pages/BateauPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#3498db',
    },
    error: {
      main: '#e74c3c',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
});

function AppContent() {
  const mockCars = [
    {
      id: 1,
      name: 'Audi RS Q8',
      year: '2025',
      energy: 'Essence',
      engine: 'Twin-turbo, V8 4L',
      power: '640 ch',
      maxSpeed: '305 km/h',
      acceleration: '3.5 sec',
      acceleration200: '12.9 sec',
      torque: '850 Nm',
      drive: 'AWD',
      transmission: 'Automatic',
      consumption: '13.4 l/100km',
      price: '648 000 DT',
      priceEur: '199 500 €',
      image:
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      description: "L'Audi Q8 dans sa version RS incarne le sommet de la performance...",
    },
    {
      id: 2,
      name: 'BMW M8 Competition',
      year: '2024',
      energy: 'Essence',
      engine: 'V8 4.4L TwinPower Turbo',
      power: '625 ch',
      maxSpeed: '305 km/h',
      acceleration: '3.2 sec',
      acceleration200: '11.2 sec',
      torque: '750 Nm',
      drive: 'AWD',
      transmission: 'Automatic',
      consumption: '12.5 l/100km',
      price: '720 000 DT',
      priceEur: '220 000 €',
      image:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      description: "La BMW M8 Competition représente l'apogée de la performance BMW...",
    },
    {
      id: 3,
      name: 'Mercedes-AMG GT 63 S',
      year: '2024',
      energy: 'Essence',
      engine: 'V8 4.0L Biturbo',
      power: '639 ch',
      maxSpeed: '315 km/h',
      acceleration: '3.2 sec',
      acceleration200: '10.8 sec',
      torque: '900 Nm',
      drive: 'AWD',
      transmission: 'Automatic',
      consumption: '13.2 l/100km',
      price: '680 000 DT',
      priceEur: '210 000 €',
      image:
        'https://images.unsplash.com/photo-1563720223485-8d85bf5dfd76?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      description: "Le Mercedes-AMG GT 63 S allie élégance et performance extrême...",
    },
  ];

  const [cars] = useState(mockCars);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage cars={cars} />} />
        <Route path="/auto" element={<AutoPage cars={cars} />} />
        <Route path="/moto" element={<MotoPage />} />
        <Route path="/accessoires" element={<AccessoiresPage />} />
        <Route path="/bateau" element={<BateauPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;