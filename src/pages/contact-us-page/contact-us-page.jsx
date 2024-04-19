import React from 'react';
import './contact-us-page.scss';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const ContactUs = () => { 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message')
    });
  };

    return (
      <div className="contact-us-container">
        <div className="container">
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1" variant="h4" sx={{marginBottom:4}}>
              Contact Us
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="current-password"
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows={4}
                id="message"
                label="Message"
                name="message"
              />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Submit
                </Button>
            </Box>
            </Box>
        </Container>
        </div>
      </div>
    );
  }

export default ContactUs;