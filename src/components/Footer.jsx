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


const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", pt: 10 }} style={{backgroundImage: `url('https://motorz.tn/wp-content/uploads/2024/06/Lamborghini-Revuelto-Tunisie-pngff-1080x577.webp')`, backgroundPosition: 'center',backgroundRepet:'non-repet'}}>
      <Container maxWidth="lg">

        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={4} textAlign="center">
            

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
              <InstagramIcon sx={{ fontSize: 28, cursor: "pointer" }} />
              <TikTokIcon sx={{ fontSize: 28, cursor: "pointer" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Motorz.tn
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              Motorz.tn est une plateforme tunisienne dédiée aux voitures,
              motos, scooters, quads et bateaux. Nous proposons des fiches
              techniques fiables, des prix officiels en TND, ainsi qu’un large
              espace accessoires et équipements.
              <br /><br />
              Notre mission est d’offrir une information claire, structurée
              et constamment mise à jour, afin de faciliter vos décisions
              d’achat et votre expérience de recherche.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ cursor: "pointer" }}>Auto</Typography>
              <Typography sx={{ cursor: "pointer" }}>Moto</Typography>
              <Typography sx={{ cursor: "pointer" }}>Accessoires Moto</Typography>
              <Typography sx={{ cursor: "pointer" }}>Recherche</Typography>
              <Typography sx={{ cursor: "pointer" }}>À propos</Typography>
              <Typography sx={{ cursor: "pointer" }}>Contactez-nous</Typography>
            </Box>
          </Grid>

        </Grid>

        <Box sx={{ textAlign: "center", mt: 8, pb: 3, opacity: 0.7 }}>
          <Typography variant="body2">
            Made with love by <span style={{ color: "#3EA6FF" }}>StudioNet</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
