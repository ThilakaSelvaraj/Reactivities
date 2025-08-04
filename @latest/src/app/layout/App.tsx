// import './App.css'
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router';
import Home from '../../features/home/Home';

function App() {

  const location = useLocation();

  return (
    <>
      <Box sx={{ bgcolor: '#eeee', minHeight: '100vh' }}>
        <CssBaseline />
        {location.pathname === '/' ? <Home /> : (
          <>
            <NavBar />
            <Container maxWidth='xl' sx={{ mt: 3 }}>
              <Outlet />
            </Container>
          </>
        )}

      </Box>

    </>

  )
}

export default App
