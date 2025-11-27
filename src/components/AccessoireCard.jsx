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
import { Security, Inventory, ExpandMore, ExpandLess } from '@mui/icons-material';

const AccessoireCard = ({ accessoire }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const specs = [
    { label: 'Catégorie', value: accessoire.category },
    { label: 'Marque', value: accessoire.brand },
    { label: 'Matériau', value: accessoire.material },
    { label: 'Taille', value: accessoire.size },
    { label: 'Couleur', value: accessoire.color },
    { label: 'Garantie', value: accessoire.warranty },
    { label: 'Compatibilité', value: accessoire.compatibility },
    { label: 'Poids', value: accessoire.weight },
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
        image={accessoire.image}
        alt={accessoire.name}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ flex: 1, mr: 1 }}>
            {accessoire.name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="error.main" fontWeight="bold">
              {accessoire.price}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {accessoire.priceEur}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Chip 
              icon={<Security />} 
              label={accessoire.category} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip 
              icon={<Inventory />} 
              label={accessoire.brand} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip 
              label={`En stock`} 
              color="success" 
              size="small" 
              sx={{ width: '100%', mt: 1 }}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Marque
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {accessoire.brand}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Matériau
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {accessoire.material}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Garantie
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {accessoire.warranty}
            </Typography>
          </Box>
        </Box>
      </CardContent>


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent sx={{ pt: 2, pb: 1 }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            {accessoire.description}
          </Typography>

          <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Détails du produit
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
              🚚 Livraison gratuite en Tunisie
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

export default AccessoireCard;