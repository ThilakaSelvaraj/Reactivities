import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import Home from "../../features/home/Home";
import Dashboard from "../../features/activities/dashboard/Dashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailsPage from "../../features/activities/details/ActivityDetailsPage";
import Counter from "../../features/counter/Counter";
import TestErrors from "../../features/error/TestErrors";
import NotFound from "../../features/error/NotFound";
import ServerError from "../../features/error/ServerError";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {path:'',element:<Home/>},
            {path:'activities',element:<Dashboard />},
            {path:'activities/:id',element:<ActivityDetailsPage />},
            {path:'createActivity',element:<ActivityForm  key='create'/>},
            {path:'manage/:id',element:<ActivityForm />},
            {path:'counter',element:<Counter />},
            {path:'error',element:<TestErrors/>},
            {path:'not-found',element:<NotFound/>},
            {path:'server-error',element:<ServerError/>},
            {path:'*',element:<Navigate to='/not-found' />},

        ]
    }
])