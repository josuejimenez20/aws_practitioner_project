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
                    marginTop: '2em'
                }}
            >
                <Typography
                    variant='h3'
                    textAlign='center'
                    marginBottom={7}
                >
                    Examenes
                </Typography>

                <Stack
                    direction='row'
                    spacing={23}>

                    <Card
                        sx={{
                            width: '25%',
                            backgroundColor: 'black',
                            height: '25em'
                        }}
                        onClick={() => {
                            navigate('/home/exam/1')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='white'
                        >
                            1
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='white'
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
                            backgroundColor: 'black',
                            height: '25em'
                        }}
                        onClick={() => {
                            navigate('/home/exam/2')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='white'
                        >
                            2
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='white'
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
                            backgroundColor: 'black',
                            height: '25em'
                        }}
                        onClick={() => {
                            navigate('/home/exam/3')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='white'
                        >
                            3
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='white'
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
                            backgroundColor: 'black',
                            height: '25em'
                        }}
                        onClick={() => {
                            navigate('/home/exam/4')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='white'
                        >
                            4
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='white'
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
                            backgroundColor: 'black',
                            height: '25em'
                        }}
                        onClick={() => {
                            navigate('/home/exam/5')
                        }}>
                        <Typography
                            variant='h1'
                            textAlign='center'
                            color='white'
                        >
                            5
                        </Typography>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            marginBottom={7}
                            color='white'
                        >
                            <Typography variant='h4'>
                                Recomendacion de estudio:
                            </Typography>
                            <br />
                            Amazon Simple Queue Service (Amazon SQS)
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
