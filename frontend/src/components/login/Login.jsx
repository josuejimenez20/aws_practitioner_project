import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack, TextField, Button,
    Alert
} from '@mui/material';
import { loginAction } from '../../actions/login/loginAction';

export default function Login() {

    const navigate = useNavigate();

    const [logInError, setLogInError] = useState(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        if (email === '') {
            setEmailError(true);
        }
        if (password === '') {
            setPasswordError(true);
        }

        const dataFormat = {
            email,
            password,
        }

        try {
            const { message, status } = await loginAction(dataFormat);
            if (status === 200) {
                navigate('/home')
                return
            }
            setLogInError(message);
        } catch (error) {
            setLogInError('Error to logIn');
        }
    };


    return (
        <>
            <Container maxWidth='md' style={{
                backgroundColor: 'blue', height: '50em',
                paddingTop: '1em'
            }}>
                <h1 style={{ textAlign: 'center' }}>INICIAR SESIÓN</h1>
                {
                    logInError ?
                        <Alert severity="error">{logInError}.</Alert>
                        : <></>
                }

                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Stack spacing={7} marginBottom={6} marginTop={6}>
                        <TextField
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            required
                            variant="outlined"
                            type="email"
                            sx={{ mb: 3 }}
                            value={email}
                            error={emailError}
                        />
                        <TextField
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            required
                            variant="outlined"
                            type="password"
                            sx={{ mb: 3 }}
                            value={password}
                            error={passwordError}
                        />

                        <Button variant="contained" size="large" type="submit">Iniciar Sesión</Button>
                    </Stack>
                    <Button variant="outlined" size="sm"
                    onClick={() => {
                        navigate('/register')
                    }}>CREAR CUENTA</Button>
                </form>
            </Container>
        </>
    )
}
