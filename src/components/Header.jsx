import React, { useState } from 'react';

import {AppBar,Toolbar,Typography,Box,Button,Container,Menu,MenuItem,Chip,} from '@mui/material';
import { 
  DirectionsCar, 
  TwoWheeler, 
  DirectionsBoat, 
  Info, 
  ContactMail,
  AccountCircle,
  Login,
  Logout,
  Person
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import LoginModal from './LoginModal';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, login } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    { label: 'Auto', path: '/auto', icon: <DirectionsCar /> },
    { label: 'Moto', path: '/moto', icon: <TwoWheeler /> },
    { label: 'Accessoires Moto', path: '/accessoires' },
    { label: 'Bateau', path: '/bateau', icon: <DirectionsBoat /> },
    { label: 'À propos', path: '/about', icon: <Info /> },
    { label: 'Contactez-nous', path: '/contact', icon: <ContactMail /> },
  ];

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleUserMenuClose();
    navigate('/');
  };

  const handleLogin = () => {
    setLoginModalOpen(true);
  };

  const handleLoginSubmit = async (email, password) => {
    return await login(email, password);
  };

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <DirectionsCar sx={{ mr: 2 }} />
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              Motorz.tn
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  startIcon={item.icon}
                  onClick={() => navigate(item.path)}
                  variant={location.pathname === item.path ? "outlined" : "text"}
                  size="small"
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Section utilisateur */}
              {user ? (
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <Chip
                    icon={<Person />}
                    label={user.name}
                    onClick={handleUserMenuOpen}
                    color="secondary"
                    variant="outlined"
                    sx={{ color: 'white', borderColor: 'white' }}
                  />
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleUserMenuClose}
                  >
                    <MenuItem onClick={handleUserMenuClose}>
                      <AccountCircle sx={{ mr: 1 }} />
                      Profil
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Logout sx={{ mr: 1 }} />
                      Déconnexion
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  color="inherit"
                  startIcon={<Login />}
                  onClick={handleLogin}
                  variant="outlined"
                  size="small"
                  sx={{ ml: 2 }}
                >
                  Connexion
                </Button>
              )}
            </Box>
          </Toolbar>
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Leader des Véhicules Motorisés en Tunisie
            </Typography>
            <Typography variant="body1" color="inherit" sx={{ opacity: 0.8 }}>
              Voitures, motos, quads, scooters et bateaux : prix officiels, modèles, fiches techniques et équipements premium
            </Typography>
          </Box>
        </Container>
      </AppBar>

      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLoginSubmit}
      />
    </>
  );
};

export default Header;