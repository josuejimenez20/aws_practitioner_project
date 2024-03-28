import React from 'react';
import {
    Container, Typography, Stack
} from '@mui/material';

export default function CourseInformation() {
    return (
        <>
            <Container
                maxWidth='md'
                style={{
                    backgroundColor: 'white',
                    marginTop: '3em',
                    border: '2px solid brown'
                }}
            >
                <Typography
                    variant="h4"
                    textAlign='center'
                    marginTop={2}>
                    CURSO AWS PRACTITIONER CERTIFICATION
                </Typography>

                <Stack spacing={-2}>


                    <Typography
                        variant="body1"
                        padding='2em'
                    >
                        Este curso se centra en la preparación para la certificación de AWS "Practitioner",
                        un hito fundamental en la trayectoria de cualquier profesional de la nube.
                        Consta de un programa completo que abarca cinco exámenes exhaustivos diseñados para
                        evaluar tus conocimientos y habilidades en los servicios y prácticas fundamentales de Amazon Web Services.
                    </Typography>

                    <Typography
                        variant="body1"
                        padding='2em'
                    >
                        A lo largo de este curso, tendrás acceso a una amplia gama de recursos de aprendizaje que te ayudarán
                        a dominar los conceptos clave de AWS. Desde guías detalladas hasta vídeos instructivos, pasando por ejercicios prácticos y
                        simulacros de exámenes, te proporcionaremos las herramientas necesarias para que puedas comprender y
                        aplicar los principios fundamentales de la nube de AWS de manera efectiva.
                    </Typography>
                    <Typography
                        variant="body1"
                        padding='2em'
                    >
                        No solo nos limitaremos a cubrir el contenido necesario para aprobar los exámenes, sino que también te proporcionaremos información
                        privilegiada sobre los recursos más importantes de AWS.<br /> Aprenderás a navegar por la amplia gama de servicios y productos ofrecidos por AWS,
                        comprendiendo cómo se integran y cómo pueden beneficiar a tu organización.
                        <br /> <br />Además, exploraremos los recursos externos más relevantes disponibles para aquellos que deseen profundizar aún más en su comprensión de AWS.
                    </Typography>

                    <Typography
                        variant="body1"
                        padding='2em'
                    >
                        Desde blogs y foros hasta comunidades en línea y eventos de la industria, te orientaremos sobre dónde encontrar información actualizada, discutir ideas con colegas
                        y mantenerte al tanto de las últimas tendencias y desarrollos en el mundo de la nube.
                        <br /><br /> En resumen, este curso está diseñado para brindarte una preparación completa y exhaustiva para la certificación de AWS "Practitioner", equipándote con los conocimientos,
                        habilidades y recursos necesarios para tener éxito en el mundo de la nube. ¡Prepárate para dar un gran paso adelante en tu carrera profesional con AWS!
                    </Typography>
                </Stack>
            </Container>


        </>
    )
}
