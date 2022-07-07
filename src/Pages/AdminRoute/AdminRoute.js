import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const location = useLocation();
    const {user,admin} = useAuth();
    if(user.email && admin){
       return children;
    }
    return  <Navigate to="/signup" state={{ from: location }} />;
};

export default AdminRoute;