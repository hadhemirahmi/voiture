// components/BrandSection.jsx
import React from 'react';
import { Box, Typography, Grid, Card } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const BrandSection = () => {
  const brands = {
    Auto: [
      { name: 'Mercedes-Benz', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mercedes_Benz_Logo_11.jpg' },
      { name: 'BMW', img: 'data:image/jpeg;base64,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' },
      { name: 'Audi', img: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg' },
      { name: 'Tesla', img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
      { name: 'Toyota', img: 'data:image/jpeg;base64,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' },
      { name: 'Honda', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/1280px-Honda.svg.png' },
      { name: 'Ford', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
      { name: 'Chevrolet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet-logo.png/3840px-Chevrolet-logo.png' },
      { name: 'Nissan', img: 'data:image/jpeg;base64,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' },
      { name: 'Volkswagen', img: 'https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356' },
    ],
    Luxe: [
      { name: 'Porsche', img: 'https://thumbs.dreamstime.com/b/logo-de-l-%C3%A9ditorial-porsche-sur-fond-blanc-d-illustration-imprim%C3%A9-le-vecteur-env-du-livre-184786279.jpg' },
      { name: 'Rolls-Royce', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o4z_Sh4ahgIeaTYBsGdhCwy9UtaR5BmIzv6XIsk5BA&s' },
      { name: 'Lamborghini', img: 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Lamborghini-Logo.svg/1280px-Lamborghini-Logo.svg.png' },
      { name: 'Ferrari', img: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Scuderia_Ferrari_Logo.svg/1920px-Scuderia_Ferrari_Logo.svg.png' },
      { name: 'Maserati', img: 'https://i.etsystatic.com/38881100/r/il/45e678/4772970676/il_fullxfull.4772970676_nus8.jpg' },
      { name: 'Bentley', img: 'https://1000logos.net/wp-content/uploads/2025/09/Bentley-Logo.jpg' },
      { name: 'Bugatti', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bugatti_logo.svg/1280px-Bugatti_logo.svg.png' },
      { name: 'Aston Martin', img: 'https://www.logodesignlove.com/images/evolution/aston-martin-logo-1984.jpg' },
    ],
  };

  return (
    <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          fontWeight="800"
          sx={{
            mb: 1.5,
            background: 'linear-gradient(90deg, #111827 0%, #e31c25 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Marques Disponibles
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Découvrez une sélection élégante de marques prestigieuses, du quotidien au luxe exclusif.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {Object.entries(brands).map(([category, brandList]) => (
          <Grid item xs={12} md={6} key={category}>
            <Box
              sx={{
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 1,
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: 34,
                  bgcolor: category === 'Luxe' ? '#e31c25' : 'primary.main',
                  borderRadius: '999px',
                  flexShrink: 0,
                }}
              />
              <Typography variant="h5" fontWeight="800" color="text.primary">
                {category}
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {brandList.map((brand, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1.5,
                      gap: 2,
                      cursor: 'pointer',
                      borderRadius: '18px',
                      border: '1px solid rgba(17, 24, 39, 0.08)',
                      boxShadow: '0 10px 30px rgba(17, 24, 39, 0.06)',
                      background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 16px 40px rgba(227, 28, 37, 0.14)',
                        borderColor: 'rgba(227, 28, 37, 0.25)',
                        '& .brand-name': { color: 'primary.main' },
                        '& .brand-arrow': { opacity: 1, transform: 'translateX(0)' },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 62,
                        height: 62,
                        flexShrink: 0,
                        borderRadius: '14px',
                        overflow: 'hidden',
                        bgcolor: '#f8f9ff',
                        border: '1px solid rgba(0,0,0,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1,
                      }}
                    >
                      <img
                        src={brand.img}
                        alt={brand.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        className="brand-name"
                        variant="body1"
                        fontWeight="700"
                        noWrap
                        sx={{ transition: 'color 0.2s ease', color: 'text.primary' }}
                      >
                        {brand.name}
                      </Typography>
                      {category === 'Luxe' && (
                        <Typography variant="caption" color="text.secondary">
                          Prestige & Performance
                        </Typography>
                      )}
                    </Box>

                    <ChevronRight
                      className="brand-arrow"
                      sx={{
                        color: 'primary.main',
                        fontSize: 20,
                        opacity: 0,
                        transform: 'translateX(-4px)',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandSection;
