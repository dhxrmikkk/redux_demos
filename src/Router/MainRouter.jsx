import React from 'react';
import { Route, Routes } from 'react-router-dom';

//auth
import Login from '../Pages/auth/Login';
import Register from '../Pages/auth/Register';

//admin
import Dashboard from '../Pages/admin/Dashboard'

//other 
import ErrorPage from '../Pages/other/ErrorPage'


const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route index path="/" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default MainRouter;

