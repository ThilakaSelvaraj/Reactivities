import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { NavLink } from "react-router";

type Props={
    activity:Activity
}

export default function ActivityCard({activity}:Props) {

  const {deleteActivity}=useActivities()
  return (
    <Card sx={{borderRadius:3}}>
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography sx={{color:'text.secondary',mb:1}}>{activity.date}</Typography>
            <Typography variant="body2">{activity.description} </Typography>
            <Typography variant="subtitle1">{activity.city} / {activity.venue} </Typography>
        </CardContent>
        <CardActions sx={{display:'flex', justifyContent:'space-between',pb:3}}>
            <Chip  label={activity.category} variant="outlined"/>
            <Box>
              <Button style={{marginRight:'20px'}} component={NavLink} to={`/activities/${activity.id}`} size="medium" variant="contained"> View</Button>
              <Button onClick={()=>deleteActivity.mutate(activity.id)} size="medium" disabled={deleteActivity.isPending}
              variant="contained" color="error"> Delete</Button>
            </Box>
        </CardActions>
    </Card>
  )
}