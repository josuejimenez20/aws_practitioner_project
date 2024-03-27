import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import Register from '../components/login/Register';

export default function AppRouter() {

    return (
        <>
            <Routes>
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path='/' element={<h2>PRINCIPAL</h2>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {/* <Route path='/login/*' element={<Login />} />
                <Route path='/Home/*' element={<Home />} /> */}
            </Routes>
        </>
    )
}