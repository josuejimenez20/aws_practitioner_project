import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack, TextField, Button,
    Alert
} from '@mui/material';
import { registerAction } from '../../actions/login/registerAction';

export default function Register() {

    const navigate = useNavigate();

    const [logInError, setLogInError] = useState(null);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastnameError] = useState(false);

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
        if (name === '') {
            setNameError(true);
        }
        if (lastname === '') {
            setLastnameError(true);
        }

        const dataFormat = {
            email,
            password,
            name,
            lastname
        }

        try {
            const { message, status } = await registerAction(dataFormat);
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
                <h1 style={{ textAlign: 'center' }}>CREAR CUENTA</h1>
                {
                    logInError ?
                        <Alert severity="error">{logInError}.</Alert>
                        : <></>
                }
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Stack spacing={7} marginBottom={6} marginTop={6}>
                        <TextField
                            label="Name"
                            onChange={e => setName(e.target.value)}
                            required
                            variant="outlined"
                            type="text"
                            sx={{ mb: 3 }}
                            value={name}
                            error={nameError}
                        />
                        <TextField
                            label="Lastname"
                            onChange={e => setLastname(e.target.value)}
                            required
                            variant="outlined"
                            type="text"
                            sx={{ mb: 3 }}
                            value={lastname}
                            error={lastNameError}
                        />
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

                        <Button variant="contained" size="large" type="submit">REGISTRARSE</Button>
                    </Stack>
                    <Button variant="outlined" size="sm"
                        onClick={() => {
                            navigate('/login')
                        }}
                    >INICIAR SESION</Button>
                </form>
            </Container>
        </>
    )
}
