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
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="220"
          image={bateau.image}
          alt={bateau.name}
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
            bgcolor: 'rgba(7, 10, 19, 0.75)',
            backdropFilter: 'blur(8px)',
            borderRadius: '6px',
            px: 1.5,
            py: 0.5,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Typography variant="caption" fontWeight="bold" sx={{ color: 'secondary.main' }}>
            {bateau.year}
          </Typography>
        </Box>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, pb: 1, pt: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" fontWeight="700" sx={{ flex: 1, mr: 1 }}>
            {bateau.name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="primary.main" fontWeight="800">
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
              icon={<CalendarToday sx={{ fontSize: 16 }} />} 
              label={bateau.year} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%', justifyContent: 'flex-start', pl: 1 }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip 
              icon={<DirectionsBoat sx={{ fontSize: 16 }} />} 
              label={bateau.type} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%', justifyContent: 'flex-start', pl: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip 
              label={`Longueur: ${bateau.length}`} 
              variant="outlined" 
              size="small" 
              color="primary"
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
            <Typography variant="caption" color="text.secondary" display="block">Longueur</Typography>
            <Typography variant="body2" fontWeight="800" color="text.primary">{bateau.length}</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">Moteur</Typography>
            <Typography variant="body2" fontWeight="800" color="text.primary">{bateau.engine}</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">Capacité</Typography>
            <Typography variant="body2" fontWeight="800" color="primary.main">{bateau.capacity}</Typography>
          </Box>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent sx={{ pt: 2, pb: 1 }}>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            {bateau.description}
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f8f9ff', borderColor: 'rgba(0,0,0,0.07)', borderRadius: '12px' }}>
            <Typography variant="subtitle2" fontWeight="800" gutterBottom sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.72rem' }}>
              Caractéristiques techniques
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
          <Box sx={{ mt: 2, p: 1.5, border: '1px dashed rgba(227, 28, 37, 0.4)', bgcolor: 'rgba(227, 28, 37, 0.05)', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
               Livraison partout en Tunisie
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
export default BateauCard;