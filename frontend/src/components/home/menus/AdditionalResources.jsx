import React from 'react';
import {
    Container, Stack
} from '@mui/material';
import AdditionalServiceLink from './additionalComponents/AdditionalServiceLink';

export default function AdditionalResources() {
    return (
        <Container
            maxWidth='xl'
            style={{
                marginTop: '2em',
            }}>
            <Stack spacing={3}>

                <AdditionalServiceLink
                    tittle='Desplegar Pagina Web En AWS S3'
                    topics={['S3', 'S3 Policies', 'VPC', 'IAM']}
                    link='https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html'
                />

                <AdditionalServiceLink
                    tittle='Get Started With Amazon EC2 Linux Instances'
                    topics={['EC2', 'VPC']}
                    link='https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/EC2_GetStarted.html'
                />

                <AdditionalServiceLink
                    tittle='Crear Base De Datos De MySQL Con RDS Y Conectarse A Ella'
                    topics={['RDS', 'Security Groups']}
                    link='https://aws.amazon.com/es/getting-started/hands-on/create-mysql-db/'
                />

                <AdditionalServiceLink
                    tittle='Configurar La Firma De Código Para AWS Lambda'
                    topics={['Lambda']}
                    link='https://docs.aws.amazon.com/es_es/lambda/latest/dg/configuration-codesigning.html'
                />
                <AdditionalServiceLink
                    tittle='Build A Serverless'
                    topics={['Serverless', 'Lambda']}
                    link='https://aws.amazon.com/es/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/?ref=gsrchandson'
                />
                <AdditionalServiceLink
                    tittle='Create Continous Delivery Pipeline'
                    topics={['Piplen', 'CI', 'CO', 'Github', 'Beanstalk', 'CodePipeline', 'CodeBuild']}
                    link='https://aws.amazon.com/es/getting-started/hands-on/create-continuous-delivery-pipeline/?ref=gsrchandson'
                />
                <AdditionalServiceLink
                    tittle='Replicate Existing Objects In Your Amazon S3 Bucket With Amazon S3 Batch Replication'
                    topics={['Batch', 'S3', 'Buckets']}
                    link='https://aws.amazon.com/es/getting-started/hands-on/replicate-existing-objects-with-amazon-s3-batch-replication/?ref=gsrchandson'
                />
                <AdditionalServiceLink
                    tittle='Create A Subnet'
                    topics={['VPC', 'Subnets']}
                    link='https://docs.aws.amazon.com/vpc/latest/userguide/create-subnets.html'
                />
                <AdditionalServiceLink
                    tittle='Additional Exam Questions'
                    topics={['Exam Questions']}
                    link='https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes/blob/master/practice-exam/practice-exam-1.md'
                />
                <AdditionalServiceLink
                    tittle='How To Deploy Node Js Api In AWS'
                    topics={['EC2', 'Linux', 'IAM', 'Security Keys']}
                    link='https://www.linkedin.com/pulse/how-deploy-nodejs-application-aws-ec2-step-by-step-guide-v/'
                />
                <AdditionalServiceLink
                    tittle='Simple Queue Service Best Pratices'
                    topics={['SQS', 'Best Practices']}
                    link='=https://www.rocky.dev/blog/sqs-best-practices'
                />
                <AdditionalServiceLink
                    tittle='Simple Queue Service Best Pratices'
                    topics={['SQS', 'Best Practices']}
                    link='=https://www.rocky.dev/blog/sqs-best-practices'
                />
                <AdditionalServiceLink
                    tittle='AWS Billing Alerts and Budgets for Your Costs'
                    topics={['Budget']}
                    link='=https://www.rocky.dev/blog/sqs-best-practices'
                />
            </Stack>




        </Container >
    )
}
