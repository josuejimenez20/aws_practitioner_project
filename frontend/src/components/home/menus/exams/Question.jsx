import React from 'react';
import { Typography, Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaChevronCircleDown, FaCircle } from "react-icons/fa";

export default function Question({ question, options, answer }) {
    return (
        <>
            <Container
                maxWidth='xl'
                style={{
                    border: '2px solid yellow',
                    padding: '0.8em',
                    marginBottom: '2em'
                }}
            >

                <Typography variant='h6' fontWeight='bold' fontStyle='oblique'>
                    {question}
                </Typography>

                {options.map((element, index) => {
                    return (
                        <Typography variant='subtitle1' key={index} marginTop={3}>
                            <FaCircle style={{ marginRight: '0.5em' }} />
                            {element}
                        </Typography>
                    )
                })}

                <Container maxWidth='sm'>
                    <Accordion style={{
                        backgroundColor: 'greenyellow',
                        marginTop: '2em'
                    }}>
                        <AccordionSummary
                            expandIcon={<FaChevronCircleDown />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Respuesta
                        </AccordionSummary>
                        <AccordionDetails>
                            {answer}
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Container>
        </>
    )
}
