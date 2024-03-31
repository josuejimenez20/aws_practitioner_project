import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Card, Typography, CardMedia } from '@mui/material';

export default function CardService({ id, name, image_path }) {
    
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                width: '70%',
                backgroundColor: 'white',
                height: '13em',
                transition: 'transform 0.3s, border-radius 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                    borderRadius: '20px'
                },
                marginLeft: '3em'
            }}
            onClick={() => {
                navigate(`/home/service/${id}`)
            }}>

            <Typography
                textAlign='center'
                variant='h6'
                fontWeight='bold'
                style={{
                    backgroundImage: 'linear-gradient(to right, brown, #DEDB1E)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}
            >
                {name}
            </Typography>
            <CardMedia
                component="img"
                height="50%"
                image={image_path}
                alt="green iguana"
                style={{
                    width: '60%',
                    margin: 'auto'
                }}>

            </CardMedia>
        </Card>

    )
}
