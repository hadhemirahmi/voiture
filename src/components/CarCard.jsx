
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
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="220"
          image={car.image}
          alt={car.name}
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 12, 
            left: 12,
            bgcolor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            px: 1.5,
            py: 0.5,
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
          }}
        >
          <Typography variant="caption" fontWeight="800" sx={{ color: '#1a1a2e', letterSpacing: '0.04em' }}>
            {car.year}
          </Typography>
        </Box>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, pb: 1, pt: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" fontWeight="700" sx={{ flex: 1, mr: 1 }}>
            {car.name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="primary.main" fontWeight="800">
              {car.price}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {car.priceEur}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Chip 
              icon={<CalendarToday sx={{ fontSize: 16 }} />} 
              label={car.year} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%', justifyContent: 'flex-start', pl: 1 }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip 
              icon={<LocalGasStation sx={{ fontSize: 16 }} />} 
              label={car.energy} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%', justifyContent: 'flex-start', pl: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip 
              icon={<Speed sx={{ fontSize: 16 }} />} 
              label={car.power} 
              color="primary"
              variant="outlined"
              size="small" 
              sx={{ 
                width: '100%', 
                mt: 0.5, 
                justifyContent: 'flex-start', 
                pl: 1,
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2, p: 1.5, bgcolor: '#f8f9ff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">0-100 km/h</Typography>
            <Typography variant="body2" fontWeight="800" color="text.primary">{car.acceleration}</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">Vitesse max</Typography>
            <Typography variant="body2" fontWeight="800" color="text.primary">{car.maxSpeed}</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">Moteur</Typography>
            <Typography variant="body2" fontWeight="800" color="primary.main">V8</Typography>
          </Box>
        </Box>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent sx={{ pt: 2, pb: 1 }}>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            {car.description}
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f8f9ff', borderColor: 'rgba(0,0,0,0.07)', borderRadius: '12px' }}>
            <Typography variant="subtitle2" fontWeight="800" gutterBottom sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.72rem' }}>
              Spécifications complètes
            </Typography>
            <Grid container spacing={1}>
              {specs.map((spec, index) => (
                <Grid item xs={6} key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.3 }}>
                    <Typography variant="caption" color="text.secondary">{spec.label}:</Typography>
                    <Typography variant="caption" fontWeight="700" color="text.primary">{spec.value}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Box sx={{ mt: 2, p: 1.5, border: '1px solid rgba(227, 28, 37, 0.15)', bgcolor: 'rgba(227, 28, 37, 0.04)', borderRadius: '8px', textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              Prix TTC incluant toutes les taxes tunisiennes
            </Typography>
          </Box>
        </CardContent>
      </Collapse>
      
      <CardActions sx={{ p: 2, pt: 1 }}>
        <Button 
          fullWidth 
          variant={expanded ? "outlined" : "contained"}
          onClick={handleExpandClick}
          endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
          sx={{ 
            py: 1.2,
          }}
        >
          {expanded ? 'Réduire' : 'Voir détails'}
        </Button>
      </CardActions>
    </Card>
  );
};
export default CarCard;