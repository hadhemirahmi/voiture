import React, { useState } from 'react';

import {AppBar,Toolbar,Typography,Box,Button,Container,Menu,MenuItem,Chip,IconButton,Divider,} from '@mui/material';
import { 
  DirectionsCar, 
  TwoWheeler, 
  DirectionsBoat, 
  Info, 
  ContactMail,
  AccountCircle,
  Login,
  Logout,
  Person,
  Menu as MenuIcon,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);

  const menuItems = [
    { label: 'Auto', path: '/auto' },
    { label: 'Moto', path: '/moto' },
    { label: 'Accessoires Moto', path: '/accessoires' },
    { label: 'Bateau', path: '/bateau'  },
    { label: 'À propos', path: '/about'},
    { label: 'Contactez-nous', path: '/contact' },
  ];

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuOpen(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(null);
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
      <AppBar 
        position="sticky" 
        sx={{ 
          top: 0,
          zIndex: 1100,
          background: '#bdbbbb78',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 1px 16px rgba(0,0,0,0.06)',
          mb: location.pathname === '/' ? 0 : 4
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box 
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              
              <Typography 
                variant="h5" 
                fontWeight="800"
                sx={{ 
                  background: 'linear-gradient(45deg, #e31c25 30%, #1a1a2e 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Motorz.tn
              </Typography>
            </Box>

            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#111' }}
            >
              <MenuIcon />
            </IconButton>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  startIcon={item.icon}
                  onClick={() => navigate(item.path)}
                  variant={location.pathname === item.path ? "outlined" : "text"}
                  sx={{
                    borderRadius: '8px',
                    px: 2,
                    color: '#111',
                    borderColor: location.pathname === item.path ? 'rgba(0,0,0,0.2)' : 'transparent',
                    backgroundColor: location.pathname === item.path ? 'rgba(0,0,0,0.06)' : 'transparent',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                      color: '#111',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              {user ? (
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <Chip
                    icon={<Person sx={{ color: 'white !important' }} />}
                    label={user.name}
                    onClick={handleUserMenuOpen}
                    color="primary"
                    variant="outlined"
                    sx={{ 
                      borderRadius: '8px',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'rgba(227, 28, 37, 0.1)',
                      }
                    }}
                  />
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleUserMenuClose}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        backgroundColor: '#111',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                        color: '#ffffff',
                      }
                    }}
                  >
                    <MenuItem onClick={handleUserMenuClose} sx={{ py: 1, px: 2 }}>
                      <AccountCircle sx={{ mr: 1.5, color: 'primary.main' }} />
                      Profil
                    </MenuItem>
                    <MenuItem onClick={handleLogout} sx={{ py: 1, px: 2, color: 'error.main' }}>
                      <Logout sx={{ mr: 1.5 }} />
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
                  sx={{ 
                    ml: 2,
                    borderRadius: '8px',
                    borderColor: 'rgba(0,0,0,0.16)',
                    color: '#111',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.06)',
                      borderColor: 'rgba(0,0,0,0.24)',
                    }
                  }}
                >
                  Connexion
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        anchorEl={mobileMenuOpen}
        open={Boolean(mobileMenuOpen)}
        onClose={handleMobileMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            backgroundColor: '#111',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          }
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            onClick={() => {
              navigate(item.path);
              handleMobileMenuClose();
            }}
            sx={{ minWidth: 200, color: '#fff' }}
          >
            {item.label}
          </MenuItem>
        ))}

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

        {user ? (
          <>
            <MenuItem
              onClick={() => {
                handleUserMenuClose();
                handleMobileMenuClose();
              }}
            >
              <AccountCircle sx={{ mr: 1, color: 'primary.main' }} />
              Profil
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                handleMobileMenuClose();
              }}
              sx={{ color: 'error.main' }}
            >
              <Logout sx={{ mr: 1 }} />
              Déconnexion
            </MenuItem>
          </>
        ) : (
          <MenuItem
            onClick={() => {
              handleLogin();
              handleMobileMenuClose();
            }}
          >
            <Login sx={{ mr: 1, color: 'primary.main' }} />
            Connexion
          </MenuItem>
        )}
      </Menu>

      {location.pathname === '/' && (
        <Box
          sx={{
            position: 'relative',
            mb: 6,
            py: { xs: 8, md: 12 },
            px: 3,
            textAlign: 'center',
            backgroundImage: `url('https://motorz.tn/wp-content/uploads/2024/06/Lamborghini-Revuelto-Tunisie-pngff-1080x577.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(7, 10, 19, 0.65)',
              zIndex: 1,
            }
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              fontWeight="800" 
              color="common.white"
             
            >
              Leader des Véhicules Motorisés en Tunisie
            </Typography>
            <Typography 
              variant="h6" 
              color="common.white" 
              sx={{ opacity: 0.9, maxWidth: '700px', mx: 'auto'}}
            >
              Voitures, motos, quads, scooters et bateaux : prix officiels, modèles, fiches techniques et équipements premium
            </Typography>
          </Container>
        </Box>
      )}

      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLoginSubmit}
      />
    </>
  );
};

export default Header;