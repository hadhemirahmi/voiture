// components/Footer.jsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
} from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4 }} />
        <Typography variant="body1" textAlign="center" gutterBottom>
          Motorz.tn est la première plateforme en Tunisie dédiée aux voitures de luxe et motos sportives.
        </Typography>
        <Typography variant="body2" textAlign="center" color="text.secondary">
          Découvrez les plus grandes marques avec des estimations de prix précises en TND, taxes incluses.
        </Typography>
        <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mt: 2 }}>
          Modo with ▼ by StudioNet
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;