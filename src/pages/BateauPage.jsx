// pages/BateauPage.jsx
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import Header from '../components/Header';
import BateauCard from '../components/BateauCard';
import Footer from '../components/Footer';

const BateauPage = () => {
  const boats = [
    {
      id: 1,
      name: "Sunseeker Manhattan 55",
      year: "2024",
      type: "Yacht",
      length: "16.7m",
      engine: "2x Volvo Penta D13",
      power: "2x 1000ch",
      capacity: "12 personnes",
      fuel: "Diesel",
      maxSpeed: "35 nœuds",
      price: "1 200 000 DT",
      priceEur: "350 000 €",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "Le Sunseeker Manhattan 55 allie luxe et performance avec son design élégant et ses équipements haut de gamme. Parfait pour les croisières côtières en Méditerranée."
    },
    {
      id: 2,
      name: "Sea Ray Sundancer 320",
      year: "2024",
      type: "Dayboat",
      length: "10.2m",
      engine: "Mercury Verado",
      power: "350ch",
      capacity: "8 personnes",
      fuel: "Essence",
      maxSpeed: "45 nœuds",
      price: "850 000 DT",
      priceEur: "250 000 €",
      image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "Le Sea Ray Sundancer 320 offre le parfait équilibre entre confort et performances. Idéal pour les sorties en mer et les activités nautiques."
    },
    {
      id: 3,
      name: "Beneteau Antares 11",
      year: "2024",
      type: "Cabine",
      length: "10.8m",
      engine: "Yanmar 250ch",
      power: "250ch",
      capacity: "6 personnes",
      fuel: "Diesel",
      maxSpeed: "28 nœuds",
      price: "450 000 DT",
      priceEur: "130 000 €",
      image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "Le Beneteau Antares 11 est un bateau polyvalent parfait pour la pêche et les croisières côtières. Confortable et maniable."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Bateaux de Luxe
        </Typography>
        
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Naviguez vers l'excellence avec notre sélection de bateaux premium
        </Typography>

        <Grid container spacing={3}>
          {boats.map((boat) => (
            <Grid item xs={12} sm={6} md={4} key={boat.id}>
              <BateauCard bateau={boat} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default BateauPage;