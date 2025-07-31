import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { NavLink, useNavigate, useParams } from "react-router";


export default function ActivityDetails() {

    const {id}=useParams();
    const navigate=useNavigate();
    const {activity,isLoadingActivity}=useActivities(id);

    if(isLoadingActivity) return <Typography>Loading...</Typography>

    if(!activity) return <Typography>Activity not Found</Typography>


  return (
   <Card sx={{borderRadius:3}}>
    <CardMedia component='img'
    src={`/images/categoryImages/${activity.category}.jpg`}/>
    <CardContent>
        <Typography variant="h5">{activity.title} </Typography>
        <Typography variant="subtitle1" fontWeight='light'>{activity.date} </Typography>
        <Typography variant="body1">{activity.description} </Typography>
    </CardContent>
    <CardActions>
        <Button color="primary" component={NavLink} to={`/manage/${activity.id}`} >Edit</Button>
        <Button onClick={()=>navigate('/activities')} color="inherit">Cancel</Button>
    </CardActions>
   </Card>
  )
}