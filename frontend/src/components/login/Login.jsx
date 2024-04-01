import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack, TextField, Button,
    Alert
} from '@mui/material';
import { loginAction } from '../../actions/login/loginAction';
import { setLoginCookie } from '../../helpers/login_cookies';

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

                const setCookie = await setLoginCookie('FLO_IFSKH#_R43_FJ', 'JD');

                if (!setCookie)
                    return setLogInError('Please try again');

                navigate('/home/information')
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
                backgroundColor: 'white', height: '50em',
                paddingTop: '1em', border: '2px solid yellow'
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
