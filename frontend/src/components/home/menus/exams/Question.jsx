import React from 'react';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function Question({ question, options, answer }) {
    return (
        <>

            <Typography variant='h6'>
                {question}
            </Typography>

            {options.map((element, index) => {
                return <Typography variant='body1' key={index}>
                    {element}
                </Typography>
            })}

            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Respuesta
                </AccordionSummary>
                <AccordionDetails>
                    {answer}
                </AccordionDetails>
            </Accordion>
        </>
    )
}
