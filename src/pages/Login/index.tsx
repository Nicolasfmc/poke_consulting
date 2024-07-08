import { memo } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

const Login = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          bgcolor="#f5f5f5"
          p={3}
          borderRadius={2}
          boxShadow={3}
        >
          <Typography variant="h4" gutterBottom>
            Create an account
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Enter your email to sign up for this app
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Sign up with email
          </Button>
          <Divider sx={{ width: '100%', marginY: 3 }}>or continue with</Divider>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<GoogleIcon />}
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            Google
          </Button>
          <Typography variant="body2" color="textSecondary">
            By clicking continue, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Login)
