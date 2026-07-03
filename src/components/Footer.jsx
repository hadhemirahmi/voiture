// components/Footer.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: '#f5f7fb',
        color: 'text.primary',
        pt: 10,
        pb: 6,
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, mb: 2, color: 'primary.main', letterSpacing: 0.7 }}
            >
              Motorz.tn
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.9, color: 'text.secondary', maxWidth: 420, mx: { xs: 'auto', md: 0 } }}
            >
              Motorz.tn est la plateforme de référence en Tunisie dédiée aux voitures premium,
              motos sportives, quads, scooters et bateaux. Nous proposons des fiches techniques
              fiables, des prix officiels en TND, ainsi qu'un large espace d'accessoires et équipements.
            </Typography>
            <Box
              sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, mt: 3 }}
            >
              <InstagramIcon
                sx={{
                  fontSize: 26,
                  cursor: 'pointer',
                  color: 'text.secondary',
                  transition: 'all 0.2s ease',
                  '&:hover': { color: 'primary.main', transform: 'scale(1.1)' },
                }}
              />
              <TikTokIcon
                sx={{
                  fontSize: 26,
                  cursor: 'pointer',
                  color: 'text.secondary',
                  transition: 'all 0.2s ease',
                  '&:hover': { color: 'primary.main', transform: 'scale(1.1)' },
                }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'text.primary' }}>
              Qui Sommes-Nous ?
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.9, color: 'text.secondary', maxWidth: 380 }}>
              Notre mission est d'offrir une information claire, structurée et constamment
              mise à jour, afin de faciliter vos décisions d'achat et votre expérience de
              recherche dans l'univers motorisé.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: "800", mb: 2, color: 'text.primary' }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: { xs: 'center', md: 'flex-start' } }}>
              {[
                { label: 'Auto', path: '/auto' },
                { label: 'Moto', path: '/moto' },
                { label: 'Accessoires', path: '/accessoires' },
                { label: 'À propos', path: '/about' },
                { label: 'Contactez-nous', path: '/contact' },
              ].map((item) => (
                <Typography
                  key={item.path}
                  sx={{
                    cursor: 'pointer',
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': { color: 'primary.main', ml: 0.5 },
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6, pt: 3, borderTop: '1px solid rgba(0, 0, 0, 0.07)', opacity: 0.75 }}>
          <Typography variant="body2" color="text.secondary">
            Made with love by <Box component="span" sx={{ color: '#e31c25' }}>StudioNet</Box> &middot; © {new Date().getFullYear()} Motorz
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
