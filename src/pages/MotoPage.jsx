
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { Speed, TwoWheeler } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
const MotoPage = () => {
  const motorcycles = [
    {
      id: 1,
      name: "Ducati Panigale V4",
      price: "85 000 DT",
      power: "214 ch",
      image: "https://images.unsplash.com/photo-1558618666-fcd25856cd63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "BMW S1000RR",
      price: "72 000 DT",
      power: "207 ch",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Yamaha R1",
      price: "65 000 DT",
      power: "200 ch",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={moto.image}
                  alt={moto.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {moto.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Speed sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1" fontWeight="bold">
                      {moto.power}
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="error.main" fontWeight="bold">
                    {moto.price}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button fullWidth variant="contained">
                    Voir détails
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Coming Soon Section */}
        <Box sx={{ textAlign: 'center', mt: 6, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <TwoWheeler sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Plus de modèles bientôt disponibles
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Notre catalogue de motos s'enrichit régulièrement. Revenez bientôt pour découvrir de nouveaux modèles.
          </Typography>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default MotoPage;