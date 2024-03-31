import React from 'react';
import {
    Link, Card,
    Stack, Typography
} from '@mui/material';

export default function AdditionalServiceLink({
    tittle,
    topics,
    link
}) {
    return (
        <Link href={link}
            target="_blank"
            style={{
                textDecoration: 'none',
            }}>
            <Card
                style={{
                    width: '100%',
                    height: '4em',
                }}>
                <Stack direction='row' spacing={10}
                    marginTop={2} marginLeft={2}>
                    <Typography variant='h5'>
                        {tittle}
                    </Typography>

                    {topics.map((element, index) => {
                        return <Card key={index}>
                            <Typography variant='h6'>
                                {element}
                            </Typography>
                        </Card>
                    })}
                </Stack>

            </Card>

        </Link>
    )
}
