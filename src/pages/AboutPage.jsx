
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const values = [
    {
      title: "Confiance",
      description: "Une plateforme fiable pour vos achats de véhicules premium",
    },
    {
      title: "Expertise",
      description: "Une équipe de passionnés à votre service",
    },
    {
      title: "Excellence",
      description: "Une sélection rigoureuse des meilleurs véhicules",
    },
    {
      title: "Innovation",
      description: "Des solutions modernes pour l'automobile tunisienne",
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f7fb' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1, py: 6 }}>
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
            À Propos de Motorz.tn
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.8, mx: 'auto', maxWidth: 760 }}>
            Motorz.tn est la première plateforme en Tunisie dédiée aux voitures de luxe et motos sportives. Nous nous engageons à offrir à nos clients une expérience d'achat exceptionnelle, avec des véhicules soigneusement sélectionnés et des prix transparents incluant toutes les taxes.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.8, mx: 'auto', maxWidth: 760, mt: 3 }}>
            Que vous rêviez ou planifiez l'acquisition de votre prochain véhicule, Motorz.tn est votre source fiable pour découvrir les plus grandes marques automobiles avec des estimations de prix précises en TND.
          </Typography>
        </Box>

        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main" textAlign="center" sx={{ mb: 4 }}>
            Nos Valeurs
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {values.map((value, index) => (
              <Grid item xs={12} sm={10} md={5} lg={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    borderRadius: '30px',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 28px 60px rgba(0,0,0,0.12)',
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.main" sx={{ mb: 2 }}>
            Notre Histoire
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Fondée avec une passion pour l'automobile, Motorz.tn est née de la volonté de révolutionner 
            le marché des véhicules motorisés en Tunisie. Notre plateforme combine expertise technique 
            et innovation digitale pour offrir une expérience unique à nos clients.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Aujourd'hui, nous sommes fiers d'être le leader des véhicules motorisés en Tunisie, 
            avec une présence nationale et une réputation d'excellence.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box 
          sx={{ 
            p: 4, 
            bgcolor: 'background.paper', 
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'text.primary', 
            borderRadius: '16px', 
            textAlign: 'center',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="800" sx={{ color: 'primary.main' }}>50+</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>Marques</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="800" sx={{ color: 'secondary.main' }}>500+</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>Véhicules</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="800" sx={{ color: '#10ac84' }}>100%</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>Satisfaction</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default AboutPage;