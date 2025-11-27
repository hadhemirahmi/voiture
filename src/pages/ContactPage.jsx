// pages/ContactPage.jsx
import React, { useState } from 'react';
import {Container,Typography,Grid, Box,TextField,Button,Card,CardContent,Alert,
} from '@mui/material';
import { Phone, Email, LocationOn, Send } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: "Téléphone",
      details: "+216 70 000 000",
      description: "Lun-Ven, 9h-18h"
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: "Email",
      details: "contact@motorz.tn",
      description: "Nous répondons sous 24h"
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: "Adresse",
      details: "Tunis, Tunisia",
      description: "Siège principal"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Contactez-Nous
        </Typography>

        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Nous sommes à votre écoute pour toutes vos questions
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Nos Coordonnées
              </Typography>
              <Typography variant="body1" paragraph>
                N'hésitez pas à nous contacter pour toute information concernant nos véhicules, 
                nos services ou pour prendre rendez-vous.
              </Typography>
            </Box>

            {contactInfo.map((info, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6">{info.title}</Typography>
                      <Typography variant="body1" fontWeight="bold">{info.details}</Typography>
                      <Typography variant="body2" color="text.secondary">{info.description}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card> ))}
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Envoyez-nous un message
                </Typography>

                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Nom complet"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Téléphone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Sujet"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{ minWidth: 200 }}
                      >
                        Envoyer le message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom color="primary">
            Notre Localisation
          </Typography>
          <Box sx={{height: 300,
              bgcolor: 'grey.200',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2}}>
            <Typography variant="h6" color="text.secondary">
              Carte interactive - Tunis, Tunisia
            </Typography>
          </Box>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default ContactPage;