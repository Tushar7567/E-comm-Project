import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element, user }) => {
    const Navigate = useNavigate();
    return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;