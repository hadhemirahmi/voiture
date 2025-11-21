// pages/AccessoiresPage.jsx
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import Header from '../components/Header';
import AccessoireCard from '../components/AccessoireCard';
import Footer from '../components/Footer';

const AccessoiresPage = () => {
  const accessories = [
    {
      id: 1,
      name: "Casque Integral Race Pro",
      category: "Sécurité",
      brand: "Shoei",
      material: "Fibre de carbone",
      size: "M (57-58cm)",
      color: "Noir/Blanc",
      warranty: "5 ans",
      compatibility: "Toutes motos",
      weight: "1450g",
      price: "450 DT",
      priceEur: "135 €",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "Casque intégral haut de gamme en fibre de carbone. Certification ECE 22.06. Ventilation optimale et visière anti-rayures."
    },
    {
      id: 2,
      name: "Gants Sport Carbon",
      category: "Protection",
      brand: "Alpinestars",
      material: "Cuir de veau",
      size: "L",
      color: "Noir/Rouge",
      warranty: "2 ans",
      compatibility: "Sport/Trail",
      weight: "180g",
      price: "180 DT",
      priceEur: "55 €",
      image: "https://images.unsplash.com/photo-1621537152542-4c67dd6c83e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "Gants sport en cuir de veau avec renforts carbone. Protection renforcée aux articulations et paume en cuir renforcé."
    },
    {
      id: 3,
      name: "Veste Cuir Racing",
      category: "Équipement",
      brand: "Dainese",
      material: "Cuir pleine fleur",
      size: "XL",
      color: "Noir/Blanc",
      warranty: "3 ans",
      compatibility: "Course/Sport",
      weight: "3200g",
      price: "620 DT",
      priceEur: "185 €",
      image: "https://images.unsplash.com/photo-1581798459210-a1e6b5d5b5a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description: "Veste de course en cuir pleine fleur avec coques de protection amovibles. Confort et sécurité optimaux."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Accessoires Moto
        </Typography>
        
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Équipez-vous avec les meilleurs accessoires pour votre passion
        </Typography>

        <Grid container spacing={3}>
          {accessories.map((accessory) => (
            <Grid item xs={12} sm={6} md={4} key={accessory.id}>
              <AccessoireCard accessoire={accessory} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default AccessoiresPage;