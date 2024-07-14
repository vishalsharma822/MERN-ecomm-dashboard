// this is a private component
import React from "react";
// Outlet will handle the component which will pass in private component as a PROPS
import { Navigate, Outlet } from 'react-router-dom';


const PrivateComponent = () => {
    const auth = localStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to="/signup" />;
}

export default PrivateComponent;