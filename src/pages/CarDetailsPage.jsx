import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  Chip,
  Divider,
  Card,
  CardMedia,
} from '@mui/material';
import {
  ArrowBack,
  Speed,
  CalendarToday,
  LocalGasStation,
  DirectionsCar,
} from '@mui/icons-material';

const CarDetailsPage = ({ getCarById }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const car = getCarById ? getCarById(id) : null;

  if (!car) {
    return (
      <Container>
        <Typography variant="h4" textAlign="center" sx={{ mt: 4 }}>
          Voiture non trouvée
        </Typography>
        <Button 
          startIcon={<ArrowBack />} 
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Retour à l'accueil
        </Button>
      </Container>
    );
  }

  const specs = [
    { label: 'Année', value: car.year, icon: <CalendarToday /> },
    { label: 'Énergie', value: car.energy, icon: <LocalGasStation /> },
    { label: 'Moteur', value: car.engine, icon: <DirectionsCar /> },
    { label: 'Puissance', value: car.power, icon: <Speed /> },
    { label: 'Vitesse maximale', value: car.maxSpeed },
    { label: '0-100 Km/h', value: car.acceleration },
    { label: '0-200 Km/h', value: car.acceleration200 },
    { label: 'Couple maxi', value: car.torque },
    { label: 'Drive', value: car.drive },
    { label: 'Transmission', value: car.transmission },
    { label: 'Consommation Mixte', value: car.consumption },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button 
        startIcon={<ArrowBack />} 
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Retour
      </Button>

      <Grid container spacing={4}>
        {/* Car Image */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={car.image}
              alt={car.name}
              sx={{ objectFit: 'cover' }}
            />
          </Card>
        </Grid>

        {/* Car Details */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              {car.name}
            </Typography>
            
            {/* Price Section */}
            <Paper elevation={2} sx={{ p: 3, mb: 3, bgcolor: 'primary.main', color: 'white' }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {car.price}
              </Typography>
              <Typography variant="h6">
                {car.priceEur}
              </Typography>
            </Paper>

            {/* Key Specs Chips */}
            <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip 
                icon={<Speed />} 
                label={car.power} 
                color="primary" 
                variant="outlined" 
              />
              <Chip 
                label={`0-100: ${car.acceleration}`} 
                color="secondary" 
                variant="outlined" 
              />
              <Chip 
                label={`Vitesse: ${car.maxSpeed}`} 
                variant="outlined" 
              />
            </Box>
          </Box>

          {/* Specifications Grid */}
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Spécifications Techniques
            </Typography>
            <Grid container spacing={2}>
              {specs.map((spec, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {spec.icon && (
                      <Box sx={{ mr: 1, color: 'primary.main' }}>
                        {spec.icon}
                      </Box>
                    )}
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {spec.label}
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        {spec.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Description
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" paragraph>
              {car.description}
            </Typography>
            <Typography variant="body1">
              Motorz.tn est votre source fiable pour les véhicules de luxe en Tunisie.
              Tous nos prix sont indiqués TTC avec une estimation précise incluant les taxes.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarDetailsPage;