import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Home from '../components/home/Home';
import { getLoginCookie } from '../helpers/login_cookies';

export default function AppRouter() {

    const navigate = useNavigate();

    const initialNavigation = async () => {
        const getCookie = await getLoginCookie('FLO_IFSKH#_R43_FJ');

        if (getCookie === false) {
            navigate('/login')
        } else {
            navigate('/home/information');
        }
    }

    useEffect(() => {
        initialNavigation()
    }, [])


    return (
        <>
            <Routes>
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path='/' element={<h2>PRINCIPAL</h2>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home/*' element={<Home />} />
            </Routes>
        </>
    )
}