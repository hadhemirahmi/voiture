
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import { Business, People, EmojiEvents, Security } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: <Security sx={{ fontSize: 48 }} />,
      title: "Confiance",
      description: "Une plateforme fiable pour vos achats de véhicules premium"
    },
    {
      icon: <People sx={{ fontSize: 48 }} />,
      title: "Expertise",
      description: "Une équipe de passionnés à votre service"
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 48 }} />,
      title: "Excellence",
      description: "Une sélection rigoureuse des meilleurs véhicules"
    },
    {
      icon: <Business sx={{ fontSize: 48 }} />,
      title: "Innovation",
      description: "Des solutions modernes pour l'automobile tunisienne"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          À Propos de Motorz.tn
        </Typography>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Notre Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Motorz.tn est la première plateforme en Tunisie dédiée aux voitures de luxe et motos sportives. 
            Nous nous engageons à offrir à nos clients une expérience d'achat exceptionnelle, avec des véhicules 
            soigneusement sélectionnés et des prix transparents incluant toutes les taxes.
          </Typography>
          <Typography variant="body1" paragraph>
            Que vous rêviez ou planifiez l'acquisition de votre prochain véhicule, Motorz.tn est votre source 
            fiable pour découvrir les plus grandes marques automobiles avec des estimations de prix précises en TND.
          </Typography>
        </Box>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom color="primary" textAlign="center">
            Nos Valeurs
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Notre Histoire
          </Typography>
          <Typography variant="body1" paragraph>
            Fondée avec une passion pour l'automobile, Motorz.tn est née de la volonté de révolutionner 
            le marché des véhicules motorisés en Tunisie. Notre plateforme combine expertise technique 
            et innovation digitale pour offrir une expérience unique à nos clients.
          </Typography>
          <Typography variant="body1">
            Aujourd'hui, nous sommes fiers d'être le leader des véhicules motorisés en Tunisie, 
            avec une présence nationale et une réputation d'excellence.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box sx={{ p: 4, bgcolor: 'primary.main', color: 'white', borderRadius: 2, textAlign: 'center' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="bold">50+</Typography>
              <Typography variant="h6">Marques</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="bold">500+</Typography>
              <Typography variant="h6">Véhicules</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="bold">100%</Typography>
              <Typography variant="h6">Satisfaction</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default AboutPage;