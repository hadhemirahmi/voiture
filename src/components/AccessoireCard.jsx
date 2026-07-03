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
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="220"
          image={accessoire.image}
          alt={accessoire.name}
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </Box>
      
      <CardContent sx={{ flexGrow: 1, pb: 1, pt: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" fontWeight="700" sx={{ flex: 1, mr: 1 }}>
            {accessoire.name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="primary.main" fontWeight="800">
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
              icon={<Security sx={{ fontSize: 16 }} />} 
              label={accessoire.category} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%', justifyContent: 'flex-start', pl: 1 }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip 
              icon={<Inventory sx={{ fontSize: 16 }} />} 
              label={accessoire.brand} 
              variant="outlined" 
              size="small" 
              sx={{ width: '100%', justifyContent: 'flex-start', pl: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip 
              label={`En stock`} 
              color="success" 
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
            <Typography variant="caption" color="text.secondary" display="block">Marque</Typography>
            <Typography variant="body2" fontWeight="800" color="text.primary">{accessoire.brand}</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">Matériau</Typography>
            <Typography variant="body2" fontWeight="800" color="text.primary">{accessoire.material}</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">Garantie</Typography>
            <Typography variant="body2" fontWeight="800" color="primary.main">{accessoire.warranty}</Typography>
          </Box>
        </Box>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent sx={{ pt: 2, pb: 1 }}>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            {accessoire.description}
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f8f9ff', borderColor: 'rgba(0,0,0,0.07)', borderRadius: '12px' }}>
            <Typography variant="subtitle2" fontWeight="800" gutterBottom sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.72rem' }}>
              Détails du produit
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
              Livraison gratuite en Tunisie
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
export default AccessoireCard;