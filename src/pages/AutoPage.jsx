// pages/MotoPage.jsx
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import Header from '../components/Header';
import MotoCard from '../components/MotoCard';
import Footer from '../components/Footer';

const MotoPage = () => {
  const motorcycles = [
    {
      id: 1,
      name: "Ducati Panigale V4",
      year: "2024",
      type: "Sportive",
      engine: "1103cc",
      power: "214 ch",
      maxSpeed: "299 km/h",
      acceleration: "3.0 sec",
      torque: "124 Nm",
      weight: "198 kg",
      price: "85 000 DT",
      priceEur: "25 000 €",
      image: "https://images.unsplash.com/photo-1558618666-fcd25856cd63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "La Ducati Panigale V4 est la moto de sport ultime, combinant technologie de pointe et performances exceptionnelles. Idéale pour les passionnés de vitesse et de précision."
    },
    {
      id: 2,
      name: "BMW S1000RR",
      year: "2024",
      type: "Sportive",
      engine: "999cc",
      power: "207 ch",
      maxSpeed: "303 km/h",
      acceleration: "3.1 sec",
      torque: "113 Nm",
      weight: "197 kg",
      price: "72 000 DT",
      priceEur: "21 500 €",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "La BMW S1000RR allie puissance brute et technologie avancée pour une expérience de conduite incomparable sur circuit et route."
    },
    {
      id: 3,
      name: "Yamaha R1",
      year: "2024",
      type: "Sportive",
      engine: "998cc",
      power: "200 ch",
      maxSpeed: "299 km/h",
      acceleration: "3.2 sec",
      torque: "112.4 Nm",
      weight: "201 kg",
      price: "65 000 DT",
      priceEur: "19 500 €",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "La Yamaha R1 continue de repousser les limites de la performance avec son moteur crossplane et son châssis ultra-performant."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Motos Sportives
        </Typography>
        
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Découvrez notre sélection de motos haute performance
        </Typography>

        <Grid container spacing={3}>
          {motorcycles.map((moto) => (
            <Grid item xs={12} sm={6} md={4} key={moto.id}>
              <MotoCard moto={moto} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default MotoPage;