
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
import { Speed, CalendarToday, TwoWheeler, ExpandMore, ExpandLess } from '@mui/icons-material';

const MotoCard = ({ moto }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const specs = [
    { label: 'Année', value: moto.year, icon: <CalendarToday /> },
    { label: 'Cylindrée', value: moto.engine },
    { label: 'Puissance', value: moto.power, icon: <Speed /> },
    { label: 'Vitesse max', value: moto.maxSpeed },
    { label: '0-100 km/h', value: moto.acceleration },
    { label: 'Couple', value: moto.torque },
    { label: 'Type', value: moto.type },
    { label: 'Poids', value: moto.weight },
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
        image={moto.image}
        alt={moto.name}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ flex: 1, mr: 1 }}>
            {moto.name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="error.main" fontWeight="bold">
              {moto.price}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {moto.priceEur}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Chip 
              icon={<CalendarToday />} 
              label={moto.year} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip 
              icon={<TwoWheeler />} 
              label={moto.type} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip 
              icon={<Speed />} 
              label={moto.power} 
              color="primary" 
              size="small" 
              sx={{ width: '100%', mt: 1 }}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              0-100 km/h
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {moto.acceleration}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Vitesse max
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {moto.maxSpeed}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Cylindrée
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {moto.engine}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent sx={{ pt: 2, pb: 1 }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            {moto.description}
          </Typography>
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
          <Box sx={{ mt: 2, p: 1, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              🏍️ Moto prête pour la route tunisienne
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

export default MotoCard;