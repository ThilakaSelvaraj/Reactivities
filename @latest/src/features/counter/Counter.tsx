import { Box, Button, ButtonGroup, List, ListItemText, Paper, Typography } from "@mui/material"
import { useStore } from "../../lib/hooks/useStore"
import {observer} from 'mobx-react-lite'

const Counter=observer( function Counter() {

  const {counterStore}=useStore()

  return (
  <Box sx={{display:'flex',justifyContent:'space-between'}}>
       <Box sx={{width:'60%'}}>
          <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
          <Typography variant="h6">The count is:{counterStore.count} </Typography>
      <ButtonGroup sx={{mt:3}}>
        <Button onClick={()=>counterStore.decreament()} variant="contained" color="error">Decreament</Button>
        <Button onClick={()=>counterStore.increament()} variant="contained" color="success">Increament</Button>
        <Button onClick={()=>counterStore.increament(5)} variant="contained" color="primary">Increament By 5</Button>
  
      </ButtonGroup>
       </Box>
       <Paper sx={{width:'40%'}}>
      <Typography variant="h5">Counter Events({counterStore.eventCount}) </Typography>
      <List>
        {counterStore.events.map((event,index)=>(
          <ListItemText key={index}> {event}</ListItemText>
        ))}
      </List>
       </Paper>
  </Box>
  )
})

export default Counter;