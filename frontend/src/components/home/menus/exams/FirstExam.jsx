import React from 'react';
import { Container, Typography } from '@mui/material';
import Question from './Question';

export default function FirstExam() {
    return (
        <>

            <Container
                maxWidth='xl'
                sx={{
                    backgroundColor: 'red'
                }}
            >
                <Question
                    question={'A company wants to identify the optimal AWS resource configuration for its workloads so that the company can reduce costs and increase workload performance. Which of the following services can be used to meet this requirement?'}
                    options={['AWS Systems Manager', 'AWS Compute Optimizer', 'AWS Cost Explorer', 'AWS Budgets']}
                    answer={'AWS Compute Optimizer'}
                />


            </Container>

        </>
    )
}
