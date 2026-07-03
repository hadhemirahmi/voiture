import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
} from '@mui/material';
import { ArrowForward, DirectionsCar, TwoWheeler, DirectionsBoat } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BrandSection from '../components/BrandSection';
import CarCard from '../components/CarCard';
import Footer from '../components/Footer';

const HomePage = ({ cars }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1 }}>
       
        <BrandSection />
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box>
              <Typography variant="h4" component="h2" fontWeight="800" sx={{ color: 'text.primary' }}>
                Véhicules en Vedette
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Sélection premium — prix officiels en TND
              </Typography>
            </Box>
            <Button 
              endIcon={<ArrowForward />}
              onClick={() => navigate('/auto')}
              variant="outlined"
            >
              Voir tous
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {cars.map((car) => (
              <Grid item xs={12} sm={6} md={4} key={car.id}>
                <CarCard car={car} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" textAlign="center" fontWeight="800" gutterBottom sx={{ mb: 6 }}>
            Explorez Nos Catégories
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 4, 
                  bgcolor: 'background.paper', 
                  color: 'text.primary', 
                  borderRadius: '20px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(227, 28, 37, 0.3)',
                    boxShadow: '0 16px 48px rgba(227, 28, 37, 0.14)',
                    '& .cat-icon': {
                      color: 'primary.main',
                      transform: 'scale(1.1)',
                    }
                  }
                }}
                onClick={() => navigate('/auto')}
              >
                
                <Typography variant="h6" fontWeight="800" gutterBottom>Voitures</Typography>
                <Typography variant="body2" color="text.secondary">Luxe & Performance</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 4, 
                  bgcolor: 'background.paper', 
                  color: 'text.primary', 
                  borderRadius: '20px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(26, 26, 46, 0.3)',
                    boxShadow: '0 16px 48px rgba(26, 26, 46, 0.1)',
                    '& .cat-icon': {
                      color: 'secondary.main',
                      transform: 'scale(1.1)',
                    }
                  }
                }}
                onClick={() => navigate('/moto')}
              >
                
                <Typography variant="h6" fontWeight="800" gutterBottom>Motos</Typography>
                <Typography variant="body2" color="text.secondary">Sport & Routières</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 4, 
                  bgcolor: 'background.paper', 
                  color: 'text.primary', 
                  borderRadius: '20px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(255, 159, 26, 0.4)',
                    boxShadow: '0 16px 48px rgba(255, 159, 26, 0.15)',
                    '& .cat-icon': {
                      color: '#ff9f1a',
                      transform: 'scale(1.1)',
                    }
                  }
                }}
                onClick={() => navigate('/bateau')}
              >
                
                <Typography variant="h6" fontWeight="800" gutterBottom>Bateaux</Typography>
                <Typography variant="body2" color="text.secondary">Luxe & Sport</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 4, 
                  bgcolor: 'background.paper', 
                  color: 'text.primary', 
                  borderRadius: '20px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(16, 172, 132, 0.4)',
                    boxShadow: '0 16px 48px rgba(16, 172, 132, 0.15)',
                    '& .cat-icon': {
                      color: '#10ac84',
                      transform: 'scale(1.1)',
                    }
                  }
                }}
                onClick={() => navigate('/accessoires')}
              >
              
                <Typography variant="h6" fontWeight="800" gutterBottom>Accessoires</Typography>
                <Typography variant="body2" color="text.secondary">Équipements Moto</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default HomePage;