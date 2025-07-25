import { useEffect, useState } from 'react'
// import './App.css'
import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import Dashboard from '../../features/activities/dashboard/Dashboard';

function App() {

  const [activities,setActivities]=useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]=useState<Activity | undefined>(undefined);
  const [editMode,setEditMode]=useState(false);

  useEffect(()=>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response=>setActivities(response.data))
    return()=>{}
  },[])

  const handleSelectedActivity=(id:string)=>{
    setSelectedActivity(activities.find(x=>x.id===id));
  }

  const handleCancelSelectedActivity=()=>{
    setSelectedActivity(undefined);
  }

  const handleOpenForm= (id?:string)=>{
    if(id) handleSelectedActivity(id)
      else handleCancelSelectedActivity()
    setEditMode(true);
  }

  const handleCloseForm=()=>{
    setEditMode(false);
  }

  const handleSubmitForm=(activity:Activity)=>{
    if(activity.id)
    {
      setActivities(activities.map(x=>x.id===activity.id?activity:x))
    }
    else{
      const newActivity={...activity, id:activities.length.toString()}
      setSelectedActivity(newActivity);
      setActivities([...activities,newActivity])
    }
    setEditMode(false)
  }

  const handleDelete=(id:string)=>{
    setActivities(activities.filter(x=>x.id!==id));
  }

  return (
  <>
    <Box sx={{bgcolor:'#eeee'}}>
      <CssBaseline/>
      <NavBar openForm={handleOpenForm}/>
      <Container maxWidth='xl' sx={{mt:3}}>
        <Dashboard activities={activities}
        selectActivity={handleSelectedActivity}
        cancelSelectActivity={handleCancelSelectedActivity}
        selectedActivity={selectedActivity}
        openForm={handleOpenForm}
        closeForm={handleCloseForm}
        submitForm={handleSubmitForm}
        deleteActivity={handleDelete}
        editMode={editMode}  />
      </Container>
    </Box>
     
     </>
 
  )
}

export default App
