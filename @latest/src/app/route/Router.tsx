import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import Home from "../../features/home/Home";
import Dashboard from "../../features/activities/dashboard/Dashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {path:'',element:<Home/>},
            {path:'activities',element:<Dashboard />},
            {path:'activities/:id',element:<ActivityDetails />},
            {path:'createActivity',element:<ActivityForm  key='create'/>},
            {path:'manage/:id',element:<ActivityForm />}

        ]
    }
])