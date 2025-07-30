import { useState } from 'react'
// import './App.css'
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import NavBar from './NavBar';
import Dashboard from '../../features/activities/dashboard/Dashboard';
import { useActivities } from '../../lib/hooks/useActivities';

function App() {

  // const [activities,setActivities]=useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending} = useActivities();

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities!.find((x: { id: string; }) => x.id === id));
  }

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id)
    else handleCancelSelectedActivity()
    setEditMode(true);
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }


 

  return (
    <>
      <Box sx={{ bgcolor: '#eeee' ,minHeight:'100vh'}}>
        <CssBaseline />
        <NavBar openForm={handleOpenForm} />
        <Container maxWidth='xl' sx={{ mt: 3 }}>
          {!activities || isPending ? (
            <Typography>Loading...</Typography>
          ) : (
            <Dashboard activities={activities}
              selectActivity={handleSelectedActivity}
              cancelSelectActivity={handleCancelSelectedActivity}
              selectedActivity={selectedActivity}
              openForm={handleOpenForm}
              closeForm={handleCloseForm}
              editMode={editMode} />
          )}

        </Container>
      </Box>

    </>

  )
}

export default App
