import { memo, useState } from 'react'
import Footer from '../../components/Footer'
import {
  Container,
  Box,
  Typography,
  TextField,
  Divider,
  Tooltip,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import Logo from '../../assets/logos/logo_default.png'
import Button from '../../components/Button'
import { useMutation } from 'react-query'
import { login } from '../../services'
import { LoginI } from '../../services/interfaces'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const navigation = useNavigate()

  const [username, setUsername] = useState('')
  const [senha, setSenha] = useState('')

  const loginQuery = useMutation((data: LoginI) => login(data), {
    mutationKey: 'loginQuery',
    onSuccess: (r) => {
      localStorage.setItem('userToken', r.data.accessToken)
      navigation('/')
    },
    onError: (e: any) => {
      const message = e.response?.data?.message || 'Erro desconhecido'
      toast.error(message)
    },
  })

  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="120px"
          bgcolor="#f5f5f5"
          marginY={10}
          p={3}
          borderRadius={2}
          boxShadow={3}
        >
          <img
            src={Logo}
            alt="logo_login"
            width={'50%'}
            style={{ marginBottom: -50, cursor: 'pointer' }}
            onClick={() => navigation('/')}
          />
          <Typography variant="h4" gutterBottom>
            Enter an account
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Enter your username and password to sign in for this app
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={() =>
              loginQuery.mutateAsync({
                username,
                senha,
              })
            }
          >
            Sign in
          </Button>
          <Divider sx={{ width: '100%', marginY: 3 }}>or continue with</Divider>
          <Tooltip title="Em manunteção">
            <span>
              <Button
                variant="outlined"
                color="info"
                startIcon={<GoogleIcon />}
                fullWidth
                disabled
                sx={{ marginBottom: 2 }}
              >
                Google
              </Button>
            </span>
          </Tooltip>
          <Typography variant="body2" color="textSecondary">
            By clicking continue, you agree to our{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Login)
