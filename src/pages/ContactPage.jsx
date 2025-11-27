
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Phone, Email, LocationOn, Info } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ email: "", name: "" });
  };

  const items = [
    {
      icon: <Info fontSize="large" />,
      title: "ABOUT CLUB",
      text1: "Running Guide",
      text2: "Workouts",
    },
    {
      icon: <Phone fontSize="large" />,
      title: "PHONE (LANDLINE)",
      text1: "+1 987 456 9867",
      text2: "+1 526 963 5684",
    },
    {
      icon: <LocationOn fontSize="large" />,
      title: "OUR OFFICE LOCATION",
      text1: "The Interior Design Studio Company",
      text2: "The Courtyard, Alfiger | Colorado, USA",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Container maxWidth="sm" sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Any questions or remarks? Just write us a message!
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <TextField
            label="Enter your email address"
            fullWidth
            value={formData.email}
            name="email"
            onChange={handleChange}
          />

          <TextField
            label="Enter your name"
            fullWidth
            value={formData.name}
            name="name"
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#b7b72aff",
              borderRadius: "30px",
              py: 1.2,
              fontWeight: "bold",
              mt: 1,
              "&:hover": { backgroundColor: "#b7b72aff" },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#b7b72aff",
          py: 6,
          mt: 4,
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {items.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Box textAlign="center">
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      color: "#b7b72aff",
                      mx: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>

                  <Typography>{item.text1}</Typography>
                  <Typography>{item.text2}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactPage;
