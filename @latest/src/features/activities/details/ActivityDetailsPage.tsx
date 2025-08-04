import { Grid2, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import {  useParams } from "react-router";
import ActivityDetailHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";


export default function ActivityDetailsPage() {

    const {id}=useParams();
    const {activity,isLoadingActivity}=useActivities(id);

    if(isLoadingActivity) return <Typography>Loading...</Typography>

    if(!activity) return <Typography>Activity not Found</Typography>


  return (
   <Grid2 container spacing={3}>
    <Grid2 size={8}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
        <ActivityDetailChat/>
    </Grid2>
    <Grid2 size={4}>
        <ActivityDetailsSidebar/>
    </Grid2>

   </Grid2>
  )
}