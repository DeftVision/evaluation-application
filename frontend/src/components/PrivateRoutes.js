import { Outlet, Navigate } from 'react-router-dom';
import UserContext from './UserContext';
import { useContext } from 'react';

export default function PrivateRoutes() {
    const {user} = useContext(UserContext);
    return user ? <Outlet /> : <Navigate to="/" />
}