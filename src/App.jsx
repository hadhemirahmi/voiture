
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
    mode: 'light',
    primary: {
      main: '#e31c25', // Ferrari/AMG Red
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a1a2e', // Deep Navy
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#f5f6fa', // Soft off-white page background
      paper: '#ffffff',   // Pure white cards
    },
    text: {
      primary: '#1a1a2e',   // Deep navy for headings
      secondary: '#64748b', // Muted slate for body text
    },
    divider: 'rgba(0,0,0,0.08)',
  },
  typography: {
    fontFamily: "'Outfit', 'Inter', sans-serif",
    h1: { fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#1a1a2e' },
    h2: { fontSize: '2rem',   fontWeight: 700, letterSpacing: '-0.02em', color: '#1a1a2e' },
    h3: { fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em', color: '#1a1a2e' },
    h4: { fontSize: '1.25rem',fontWeight: 600, color: '#1a1a2e' },
    body1: { lineHeight: 1.7 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f6fa',
          color: '#1a1a2e',
        },
        '::-webkit-scrollbar': { width: '8px' },
        '::-webkit-scrollbar-track': { background: '#f1f1f1' },
        '::-webkit-scrollbar-thumb': { background: '#c1c1c1', borderRadius: '4px' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 48px rgba(227, 28, 37, 0.16)',
            borderColor: 'rgba(227, 28, 37, 0.25)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 700,
          padding: '10px 24px',
          transition: 'all 0.25s ease-in-out',
          fontSize: '0.9rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #e31c25 0%, #b01018 100%)',
          color: '#fff',
          boxShadow: '0 4px 18px rgba(227, 28, 37, 0.35)',
          '&:hover': {
            background: 'linear-gradient(135deg, #ff2a34 0%, #c41018 100%)',
            boxShadow: '0 8px 28px rgba(227, 28, 37, 0.5)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: '#e31c25',
          borderWidth: '2px',
          color: '#e31c25',
          '&:hover': {
            backgroundColor: 'rgba(227, 28, 37, 0.06)',
            borderColor: '#b01018',
            borderWidth: '2px',
          },
        },
        outlinedSecondary: {
          borderColor: '#1a1a2e',
          borderWidth: '2px',
          color: '#1a1a2e',
          '&:hover': {
            backgroundColor: 'rgba(26, 26, 46, 0.05)',
            borderWidth: '2px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.78rem',
        },
        outlined: {
          borderColor: 'rgba(0,0,0,0.15)',
          backgroundColor: 'rgba(0,0,0,0.02)',
          color: '#475569',
        },
        colorPrimary: {
          backgroundColor: 'rgba(227, 28, 37, 0.1)',
          color: '#e31c25',
          borderColor: 'rgba(227, 28, 37, 0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: { boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: '#fafafa',
            '&:hover fieldset': { borderColor: '#e31c25' },
            '&.Mui-focused fieldset': { borderColor: '#e31c25' },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(0,0,0,0.08)' },
      },
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
      image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTERUTEhISExUSFRgVExUYFhgaGBYZFRUXFhYVFRYZHigiGBomHRUVIjEiJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFRAPGi8lHR0tKy0xLSsrLSwtLTc1ODctODgtKy0rLSstNDQrOCs1Ly0tKy0rLS41KzUtNy0tLC03Lf/AABEIAKQBMwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABJEAACAQIDBAYGBwQIBQUBAAABAgADEQQSIQUGMUETIlFhcZEHMlKBobEUM3KCksHRQkNToiNig7LC0uHwFTREk/EWJFRj4gj/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAUER/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARPLuALkgDtMg9qb1UaXAhjyuQoJ7ATxMCeic8x299Zr5DlHYqm/uzgA+4yBxe16z+tiMR4WHyFW0Dr7OBxIHvmJsZTHF08xOK1Krt6uKqKeXSAop+8rMB96w75DY7bWIpVDSrFgwNjc2tfgb8CNQb9kDv52lSH7xfOfP+K0f4q+c/OjbxVLXubds8Db9Q/tfOB+kF2lSP7xPMTKuJQ8HU/eE/Nybbq+2f9++bFPbtYfvGgfo0GfZwPCb04hdRVbzEnsBv/iRxdW+0v+sDr0Sk7N39DWFSn71P5Nb5y24LHJVXNTYHtHMeIgbMREBERAREQEREBERAREQEREBERAREQEREBERAREwV8WicWHgNT5QM8h9tbw06GUavUc5aaKLs7cbKBx01J4AXJIAJmntLbg4cB2frKrjq9630ii4SqFyHMMyspIJUi9wOqNVIOg8IEnjqlerrWfIP4aHl2M/lovAjRjNI7PUFLWHSkltOsVTmzHUnxmtiN5GHr0VPej8fBWA+c8UNu03N2z0soAUNrxJvbKSLcIEr9EpqfVFwL666duvCVnarZiTy5DsHdJKtjaTH6+mdLauAbcbWOvGU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',
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