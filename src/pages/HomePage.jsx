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
            <Typography variant="h4" component="h2">
              Véhicules en Vedette
            </Typography>
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

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Explorez Nos Catégories
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
                onClick={() => navigate('/auto')}
              >
                <DirectionsCar sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6">Voitures</Typography>
                <Typography variant="body2">Luxe & Performance</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  bgcolor: 'secondary.main', 
                  color: 'white', 
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
                onClick={() => navigate('/moto')}
              >
                <TwoWheeler sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6">Motos</Typography>
                <Typography variant="body2">Sport & Routières</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  bgcolor: 'success.main', 
                  color: 'white', 
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
                onClick={() => navigate('/bateau')}
              >
                <DirectionsBoat sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6">Bateaux</Typography>
                <Typography variant="body2">Luxe & Sport</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  bgcolor: 'warning.main', 
                  color: 'white', 
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
                onClick={() => navigate('/accessoires')}
              >
                <TwoWheeler sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6">Accessoires</Typography>
                <Typography variant="body2">Équipements Moto</Typography>
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