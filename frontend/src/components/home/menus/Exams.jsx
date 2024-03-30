import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Card, Typography,
    Stack
} from '@mui/material';

export default function Exams() {

    const navigate = useNavigate();

    return (
        <>
            <Container
                maxWidth='xl'
                style={{
                    backgroundColor: 'white',
                    marginTop: '2em',
                }}
            >
                <Typography
                    variant='h3'
                    textAlign='center'
                    marginBottom={7}
                    fontStyle={'oblique'}
                >
                    Examenes Practica
                </Typography>

                <Stack
                    direction='row'
                    spacing={23}>

                    <Card
                        sx={{
                            width: '25%',
                            backgroundColor: 'white',
                            height: '25em',
                            border: '2px solid yellow',
                            transition: 'transform 0.3s, border-radius 0.3s', // Agregamos transición para suavizar el efecto
                            '&:hover': {
                                transform: 'scale(1.05)', // Hace la tarjeta un poco más grande al pasar el cursor
                                borderRadius: '20px' // Hace que el radio del borde sea más grande al pasar el cursor
                            }
                        }}
                        onClick={() => {
                            navigate('/home/exam/1')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='yellow'
                        >
                            1
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='black'
                        >
                            <Typography variant='h4'>
                                Recomendacion de estudio:
                            </Typography>
                            <br />
                            EC2 (Elastic Compute Cloud)
                            <br />
                            <br />
                            S3 (Simple Storage Service)
                            <br />
                            <br />
                            RDS (Relational Database Service)

                        </Typography>
                    </Card>
                    <Card
                        sx={{
                            width: '25%',
                            backgroundColor: 'white',
                            height: '25em',
                            border: '2px solid green',
                            transition: 'transform 0.3s, border-radius 0.3s', // Agregamos transición para suavizar el efecto
                            '&:hover': {
                                transform: 'scale(1.05)', // Hace la tarjeta un poco más grande al pasar el cursor
                                borderRadius: '20px' // Hace que el radio del borde sea más grande al pasar el cursor
                            }
                        }}
                        onClick={() => {
                            navigate('/home/exam/2')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='green'
                        >
                            2
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='black'
                        >
                            <Typography variant='h4'>
                                Recomendacion de estudio:
                            </Typography>
                            <br />
                            AWS Management Console
                            <br />
                            <br />
                            AWS Command Line Interface
                            <br />
                            <br />
                            AWS Config

                        </Typography>
                    </Card>
                    <Card
                        sx={{
                            width: '25%',
                            backgroundColor: 'white',
                            height: '25em',
                            border: '2px solid red',
                            transition: 'transform 0.3s, border-radius 0.3s', // Agregamos transición para suavizar el efecto
                            '&:hover': {
                                transform: 'scale(1.05)', // Hace la tarjeta un poco más grande al pasar el cursor
                                borderRadius: '20px' // Hace que el radio del borde sea más grande al pasar el cursor
                            }
                        }}
                        onClick={() => {
                            navigate('/home/exam/3')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='red'
                        >
                            3
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='black'
                        >
                            <Typography variant='h4'>
                                Recomendacion de estudio:
                            </Typography>
                            <br />
                            High Availability and Fault Tolerance
                            <br />
                            <br />
                            Cost Optimization
                            <br />
                            <br />
                            AWS Container Services

                        </Typography>
                    </Card>
                </Stack>

                <Stack
                    direction='row'
                    spacing={20}
                    justifyContent='center'
                    marginTop={10}
                >
                    <Card
                        sx={{
                            width: '25%',
                            backgroundColor: 'white',
                            height: '25em',
                            border: '2px solid black',
                            transition: 'transform 0.3s, border-radius 0.3s', // Agregamos transición para suavizar el efecto
                            '&:hover': {
                                transform: 'scale(1.05)', // Hace la tarjeta un poco más grande al pasar el cursor
                                borderRadius: '20px' // Hace que el radio del borde sea más grande al pasar el cursor
                            }
                        }}
                        onClick={() => {
                            navigate('/home/exam/4')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='black'
                        >
                            4
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='black'
                        >
                            <Typography variant='h4'>
                                Recomendacion de estudio:
                            </Typography>
                            <br />
                            AWS Support Plans:
                            <br />
                            <br />
                            Security and Compliance
                            <br />
                            <br />
                            Serverless Computing

                        </Typography>
                    </Card>
                    <Card
                        sx={{
                            width: '25%',
                            backgroundColor: 'white',
                            height: '25em',
                            border: '2px solid blue',
                            transition: 'transform 0.3s, border-radius 0.3s', // Agregamos transición para suavizar el efecto
                            '&:hover': {
                                transform: 'scale(1.05)', // Hace la tarjeta un poco más grande al pasar el cursor
                                borderRadius: '20px' // Hace que el radio del borde sea más grande al pasar el cursor
                            }
                        }}
                        onClick={() => {
                            navigate('/home/exam/5')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='blue'
                        >
                            5
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='black'
                        >
                            <Typography variant='h4'>
                                Recomendacion de estudio:
                            </Typography>
                            <br />
                            Amazon Simple Queue Service (SQS)
                            <br />
                            <br />
                            Health checks and monitoring
                            <br />
                            <br />
                            AWS CloudHSM

                        </Typography>
                    </Card>
                </Stack>
            </Container>


        </>
    )
}
