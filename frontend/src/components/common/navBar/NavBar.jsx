import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack, Button
} from '@mui/material';
import { deletLoginCookie } from '../../../helpers/login_cookies';

export default function NavBar() {

    const navigate = useNavigate();

    const outLogin = async () => {
        const result = await deletLoginCookie('FLO_IFSKH#_R43_FJ');

        if (result) {
            navigate('/login')
        }
    }

    return (

        <Container
            maxWidth='auto'
            style={{
                height: 'auto',
                marginTop: '1.5em'
            }}>
            <Stack
                direction='row'
                spacing={15}
                justifyContent='center'>
                <Button
                    onClick={() => {
                        navigate('/home/information')
                    }}
                    variant='outlined'
                    size='medium'
                    sx={{
                        color: 'black', fontWeight: 'bold', borderColor: 'yellow',
                        borderWidth: '3px'
                    }}
                >Informacion sobre el curso</Button>
                <Button
                    onClick={() => {
                        navigate('/home/exams')
                    }}
                    variant='outlined'
                    size='medium'
                    sx={{
                        color: 'black', borderColor: 'yellow', fontWeight: 'bold',
                        borderWidth: '3px'
                    }}
                >Examenes Prueba</Button>
                <Button
                    onClick={() => {
                        navigate('/home/services')
                    }}
                    variant='outlined' size='medium'
                    sx={{
                        color: 'black', borderColor: 'yellow', fontWeight: 'bold',
                        borderWidth: '3px'
                    }}
                >Aprender sobre servicios</Button>
                <Button
                    onClick={() => {
                        navigate('/home/additional_recources')
                    }} variant='outlined'
                    size='medium'
                    sx={{
                        color: 'black', borderColor: 'yellow', fontWeight: 'bold',
                        borderWidth: '3px'
                    }}

                >Recursos adicionales</Button>
                <Button
                    onClick={() => {
                        outLogin();
                    }}
                    variant='outlined' size='medium'
                    sx={{
                        color: 'black', borderColor: 'yellow', fontWeight: 'bold',
                        borderWidth: '3px'
                    }}
                >Cerrar Sesion</Button>
            </Stack>

        </Container>

    )
}
