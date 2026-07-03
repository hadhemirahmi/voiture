
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { Phone, Email, LocationOn, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ email: "", name: "", company: "", message: "", consent: false });
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box sx={{ py: 8, backgroundColor: '#f4f8ff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4, maxWidth: 520 }}>
                <Typography variant="overline" color="primary.main" fontWeight={700} letterSpacing={2}>
                  CONTACT US
                </Typography>
                <Typography variant="h3" fontWeight="800" sx={{ mt: 2, mb: 2 }}>
                  Get in touch today
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 520 }}>
                  We love questions and feedback — and we’re always happy to help! Have any queries? Get in touch with us.
                </Typography>
              </Box>

              <Card sx={{ borderRadius: '42px', boxShadow: '0 32px 80px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                <Box sx={{ backgroundColor: '#fff', p: 4, borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '18px', bgcolor: 'rgba(227, 28, 37, 0.12)', color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                      <Email sx={{ fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        contact@company.com
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Email support
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '18px', bgcolor: 'rgba(227, 28, 37, 0.12)', color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                      <Phone sx={{ fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        (123) 323-323-23
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Support téléphonique
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '18px', bgcolor: 'rgba(227, 28, 37, 0.12)', color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                      <LocationOn sx={{ fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        Les Berges du Lac II, Tunis
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Tunisia
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'flex-start' }}>
                    <IconButton size="large" color="primary" sx={{ bgcolor: 'rgba(227, 28, 37, 0.08)', '&:hover': { bgcolor: 'rgba(227, 28, 37, 0.16)' } }}>
                      <Facebook />
                    </IconButton>
                    <IconButton size="large" color="primary" sx={{ bgcolor: 'rgba(227, 28, 37, 0.08)', '&:hover': { bgcolor: 'rgba(227, 28, 37, 0.16)' } }}>
                      <Instagram />
                    </IconButton>
                    <IconButton size="large" color="primary" sx={{ bgcolor: 'rgba(227, 28, 37, 0.08)', '&:hover': { bgcolor: 'rgba(227, 28, 37, 0.16)' } }}>
                      <LinkedIn />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={20} md={18}>
              <Card sx={{ borderRadius: '42px', boxShadow: '0 32px 80px rgba(0,0,0,0.08)' ,height: '600px' ,width: '500px'}}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight={800} sx={{ mb: 3 }}>
                    Envoyer un message
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'grid', gap: 2.25 }}
                  >
                    <TextField
                      label="Nom complet *"
                      fullWidth
                      required
                      value={formData.name}
                      name="name"
                      onChange={handleChange}
                      sx={{ backgroundColor: '#fbfbff', borderRadius: '18px' }}
                    />

                    <TextField
                      label="Email *"
                      type="email"
                      fullWidth
                      required
                      value={formData.email}
                      name="email"
                      onChange={handleChange}
                      sx={{ backgroundColor: '#fbfbff', borderRadius: '18px' }}
                    />

                    <TextField
                      label="Société (optionnel)"
                      fullWidth
                      value={formData.company}
                      name="company"
                      onChange={handleChange}
                      sx={{ backgroundColor: '#fbfbff', borderRadius: '18px' }}
                    />

                    <TextField
                      label="Laissez-nous un message"
                      fullWidth
                      multiline
                      rows={4}
                      value={formData.message}
                      name="message"
                      onChange={handleChange}
                      sx={{ backgroundColor: '#fbfbff', borderRadius: '18px' }}
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.consent}
                          onChange={handleCheckboxChange}
                          name="consent"
                          color="primary"
                        />
                      }
                      label="Je ne suis pas un robot"
                      sx={{ mt: 1 }}
                    />

                    <Button type="submit" variant="contained" size="large" sx={{ py: 1.75, bgcolor: 'primary.main', color: '#fff', '&:hover': { bgcolor: 'rgba(227, 28, 37, 0.9)' } }}>
                      Envoyer
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
 

      <Footer />
    </Box>
  );
};

export default ContactPage;
