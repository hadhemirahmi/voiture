// components/BrandSection.jsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Star } from '@mui/icons-material';

const BrandSection = () => {
  const brands = {
    "Auto": ["Mercedes-Benz", "BMW"],
    "Luxe": [
      "Land Rover", "Porsche", "Bugatti", "Ferrari", 
      "Lamborghini", "Rolls-Royce", "Maserati", "Tesla", "Xiaomi Auto"
    ]
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        textAlign="center" 
        gutterBottom
        sx={{ mb: 4 }}
      >
        <Star sx={{ mr: 1, color: 'gold' }} />
        Top Marques voitures Internationales
        <Star sx={{ ml: 1, color: 'gold' }} />
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {Object.entries(brands).map(([category, brandList]) => (
          <Grid item xs={12} md={6} key={category}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  {category}
                </Typography>
                <List dense>
                  {brandList.map((brand, index) => (
                    <ListItem key={index}>
                      <ListItemText 
                        primary={brand}
                        primaryTypographyProps={{
                          variant: 'body1',
                          sx: { fontWeight: category === 'Luxe' ? 600 : 400 }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandSection;