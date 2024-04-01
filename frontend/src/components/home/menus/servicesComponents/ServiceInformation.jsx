import React, { useEffect, useState } from 'react';
import {
    Typography, Container,
    CardMedia
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getServiceInformationById } from '../../../../actions/services/getServiceInformationById';

export default function ServiceInformation() {

    const navigate = useNavigate();
    const { service_id } = useParams();
    const [serviceInformation, setServiceInformation] = useState(null);
    const [useCases, setUseCases] = useState(null);

    const getServiceInformation = async () => {
        try {
            const result = await getServiceInformationById(service_id);

            setServiceInformation(result);

        } catch (error) {
        }
    }

    useEffect(() => {
        getServiceInformation();
    }, [])

    useEffect(() => {
        if (serviceInformation) {
            const data = serviceInformation[0].use_cases.split('.');
            setUseCases(data);
        }
    }, [serviceInformation])

    return (
        <>
            <Container
                maxWidth='md'
                style={{
                    backgroundColor: 'white',
                    marginTop: '2em',
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '1em',
                }}>

                {serviceInformation ?
                    (
                        <>
                            <Typography variant='h4'
                                textAlign='center'
                                marginBottom='1em'
                                fontWeight='bold'>
                                {serviceInformation[0].name}
                            </Typography>

                            <Typography variant='h5'
                                marginBottom='1em'
                                fontStyle='italic'>
                                {serviceInformation[0].information}
                            </Typography>
                            <CardMedia
                                component="img"
                                height="40%"
                                image={serviceInformation[0].image_path}
                                alt="green iguana"
                                style={{
                                    width: '50%',
                                    margin: 'auto',
                                }}></CardMedia>
                            <Typography variant='h4'
                                textAlign='center'
                                marginTop='1em'
                                fontWeight='bold'
                            >Casos de uso</Typography>
                            {
                                useCases ?
                                    useCases.map((element, index) => {
                                        return <Typography
                                            fontStyle='italic'
                                            variant='h5'
                                            style={{
                                                marginTop: '2em'
                                            }}>
                                            {element}
                                        </Typography>
                                    })
                                    : <></>
                            }
                        </>
                    )
                    : <></>}

            </Container>
        </>
    )
}
