// components/CarCard.jsx
import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Grid,
  Collapse,
  Divider,
  Paper,
} from '@mui/material';
import { Speed, CalendarToday, LocalGasStation, ExpandMore, ExpandLess } from '@mui/icons-material';

const CarCard = ({ car }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const specs = [
    { label: 'Année', value: car.year, icon: <CalendarToday /> },
    { label: 'Énergie', value: car.energy, icon: <LocalGasStation /> },
    { label: 'Moteur', value: car.engine },
    { label: 'Puissance', value: car.power, icon: <Speed /> },
    { label: 'Vitesse max', value: car.maxSpeed },
    { label: '0-100 km/h', value: car.acceleration },
    { label: '0-200 km/h', value: car.acceleration200 },
    { label: 'Couple maxi', value: car.torque },
    { label: 'Transmission', value: car.transmission },
    { label: 'Consommation', value: car.consumption },
  ];

  return (
    <Card 
      sx={{ 
        height: 'auto', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={car.image}
        alt={car.name}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        {/* En-tête avec nom et prix */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ flex: 1, mr: 1 }}>
            {car.name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="error.main" fontWeight="bold">
              {car.price}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {car.priceEur}
            </Typography>
          </Box>
        </Box>

        {/* Spécifications principales */}
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Chip 
              icon={<CalendarToday />} 
              label={car.year} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip 
              icon={<LocalGasStation />} 
              label={car.energy} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip 
              icon={<Speed />} 
              label={car.power} 
              color="primary" 
              size="small" 
              sx={{ width: '100%', mt: 1 }}
            />
          </Grid>
        </Grid>

        {/* Performance rapide */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              0-100 km/h
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {car.acceleration}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Vitesse max
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {car.maxSpeed}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Moteur
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              V8
            </Typography>
          </Box>
        </Box>
      </CardContent>

      {/* Section détails dépliables */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent sx={{ pt: 2, pb: 1 }}>
          {/* Description */}
          <Typography variant="body2" color="text.secondary" paragraph>
            {car.description}
          </Typography>

          {/* Toutes les spécifications */}
          <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Spécifications complètes
            </Typography>
            <Grid container spacing={1}>
              {specs.map((spec, index) => (
                <Grid item xs={6} key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      {spec.label}:
                    </Typography>
                    <Typography variant="caption" fontWeight="bold">
                      {spec.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Informations supplémentaires */}
          <Box sx={{ mt: 2, p: 1, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              rix TTC incluant toutes les taxes tunisiennes
            </Typography>
          </Box>
        </CardContent>
      </Collapse>

      {/* Bouton pour étendre/réduire */}
      <CardActions sx={{ p: 2, pt: 1 }}>
        <Button 
          fullWidth 
          variant={expanded ? "outlined" : "contained"}
          onClick={handleExpandClick}
          endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
          sx={{ 
            py: 1,
            transition: 'all 0.2s ease-in-out'
          }}
        >
          {expanded ? 'Réduire' : 'Voir détails'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarCard;