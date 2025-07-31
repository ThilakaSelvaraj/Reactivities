// import './App.css'
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import NavBar from './NavBar';
import { useActivities } from '../../lib/hooks/useActivities';
import { Outlet } from 'react-router';

function App() {

  // const [activities,setActivities]=useState<Activity[]>([]);

  const {activities, isPending} = useActivities();

 


 

  return (
    <>
      <Box sx={{ bgcolor: '#eeee' ,minHeight:'100vh'}}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth='xl' sx={{ mt: 3 }}>
          {!activities || isPending ? (
            <Typography>Loading...</Typography>
          ) : (
            // <Dashboard  />
            <Outlet />
          )}

        </Container>
      </Box>

    </>

  )
}

export default App
