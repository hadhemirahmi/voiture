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
import { DirectionsBoat, CalendarToday, ExpandMore, ExpandLess } from '@mui/icons-material';

const BateauCard = ({ bateau }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const specs = [
    { label: 'Année', value: bateau.year, icon: <CalendarToday /> },
    { label: 'Longueur', value: bateau.length },
    { label: 'Type', value: bateau.type },
    { label: 'Moteur', value: bateau.engine },
    { label: 'Puissance', value: bateau.power },
    { label: 'Capacité', value: bateau.capacity },
    { label: 'Carburant', value: bateau.fuel },
    { label: 'Vitesse max', value: bateau.maxSpeed },
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
        image={bateau.image}
        alt={bateau.name}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ flex: 1, mr: 1 }}>
            {bateau.name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="error.main" fontWeight="bold">
              {bateau.price}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {bateau.priceEur}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Chip 
              icon={<CalendarToday />} 
              label={bateau.year} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip 
              icon={<DirectionsBoat />} 
              label={bateau.type} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip 
              label={`Longueur: ${bateau.length}`} 
              color="primary" 
              size="small" 
              sx={{ width: '100%', mt: 1 }}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Longueur
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {bateau.length}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Moteur
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {bateau.engine}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Capacité
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {bateau.capacity}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent sx={{ pt: 2, pb: 1 }}>

          <Typography variant="body2" color="text.secondary" paragraph>
            {bateau.description}
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Caractéristiques techniques
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
              ⚓ Livraison partout en Tunisie
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

export default BateauCard;