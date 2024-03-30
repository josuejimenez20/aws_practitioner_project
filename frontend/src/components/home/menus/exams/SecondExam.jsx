import React, { useState, useEffect } from 'react';
import Question from './Question';

export const SecondExam = () => {
    const [componentes, setComponentes] = useState([]);
    const listaDeComponentes = [
        <Component5 />,
        <Component6 />,
        <Component7 />,
        <Component8 />,
        <Component9 />,
        <Component10 />,
        <Component11 />,
        <Component12 />,
        <Component13 />,
        <Component14 />,
        <Component15 />,
        <Component16 />,
        <Component17 />,
        <Component18 />,
        <Component19 />,
        <Component20 />,
        <Component21 />,
        <Component22 />,
        <Component23 />,
        <Component24 />,
        <Component25 />,
        <Component26 />,
        <Component27 />,
        <Component28 />,
        <Component29 />,
        <Component30 />,
        <Component31 />,
        <Component32 />,
        <Component33 />,
        <Component34 />,
        <Component35 />,
        <Component36 />,
        <Component37 />,
        <Component38 />,
        <Component39 />,
        <Component40 />,
        <Component41 />,
        <Component42 />,
        <Component43 />,
        <Component44 />,
        <Component45 />,
        <Component46 />,
        <Component47 />,
        <Component48 />,
        <Component49 />,
        <Component50 />,
        <Component51 />,
        <Component52 />,
        <Component53 />,
        <Component54 />,
        <Component55 />,
        <Component56 />,
        <Component57 />,
        <Component58 />,
        <Component59 />,
        <Component60 />,
        <Component61 />,
        <Component62 />,
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Verifica si el usuario ha llegado al final de la página
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                // Agrega un componente de la lista a la vez
                setComponentes(prevComponentes => [
                    ...prevComponentes,
                    listaDeComponentes[prevComponentes.length]
                ]);
            }
        };

        // Agrega un listener de scroll cuando el componente se monta
        window.addEventListener('scroll', handleScroll);

        // Limpia el listener cuando el componente se desmonta
        return () => window.removeEventListener('scroll', handleScroll);
    }, [componentes, listaDeComponentes]);

    return (
        <>
            <br />
            <br />
            <br />
            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
            <div>
                {componentes.map((componente, index) => (
                    <div key={index}>{componente}</div>
                ))}
            </div>
        </>
    );
};

const Component1 = () => (
    <Question
        question={
            'Which of the following statement is correct for a Security Group and a Network Access Control List (Network ACL)?'
        }
        options={[
            'Security Group acts as a firewall at the Availability Zone (AZ) level whereas Network Access Control List (Network ACL) acts as a firewall at the VPC level', 'Security Group acts as a firewall at the VPC level whereas Network Access Control List (Network ACL) acts as a firewall at the Availability Zone (AZ) level',
            'Security Group acts as a firewall at the subnet level whereas Network Access Control List (Network ACL) acts as a firewall at the instance level', 'Security Group acts as a firewall at the instance level whereas Network Access Control List (Network ACL) acts as a firewall at the subnet level',
        ]}
        answer={
            'Security Group acts as a firewall at the instance level whereas Network Access Control List (Network ACL) acts as a firewall at the subnet level'
        }
    />
);

const Component2 = () => (
    <Question
        question={
            'Which policy describes prohibited uses of the web services offered by Amazon Web Services?'
        }
        options={[
            'AWS Applicable Use Policy', 'AWS Acceptable Use Policy', 'AWS Trusted Advisor', 'AWS Fair Use Policy',
        ]}
        answer={'AWS Acceptable Use Policy'}
    />
);

const Component3 = () => (
    <Question
        question={
            'A company is using a message broker service on its on-premises application and wants to move this messaging functionality to AWS Cloud. Which of the following AWS services is the right choice to move the existing functionality easily?'
        }
        options={[
            'Amazon MQ',
            'Amazon Kinesis Data Streams',
            'Amazon Simple Queue Service (Amazon SQS)',
            'Amazon Simple Notification Service (Amazon SNS)',
        ]}
        answer={'Amazon MQ'}
    />
);

const Component4 = () => (
    <Question
        question={
            'Which of the following AWS services allows a database to have flexible schema and supports document data models?'
        }
        options={[
            'Amazon DynamoDB',
            'Amazon Relational Database Service (Amazon RDS)',
            'Amazon Redshift',
            'Amazon Aurora',
        ]}
        answer={'Amazon DynamoDB'}
    />
);

const Component5 = () => (
    <Question
        question={
            'According to the AWS Shared Responsibility Model, which of the following are responsibilities of the customer for Amazon RDS?'
        }
        options={[
            'Database encryption',
            'Applying patches to the underlying OS',
            'Managing the underlying server hardware on which Amazon Relational Database Service (Amazon RDS) runs',
            'Applying patches to the Amazon Relational Database Service (Amazon RDS) database',
        ]}
        answer={'Database encryption'}
    />
);

const Component6 = () => (
    <Question
        question={
            'An online gaming company wants to block users from certain geographies from accessing its content. Which AWS service can be used to accomplish this task?'
        }
        options={[
            'AWS Web Application Firewall (AWS WAF)',
            'Security group',
            'Amazon CloudWatch',
            'AWS Shield',
        ]}
        answer={'AWS Web Application Firewall (AWS WAF)'}
    />
);

const Component7 = () => (
    <Question
        question={
            'Which AWS support plan provides access to a designated Technical Account Manager (TAM)?'
        }
        options={[
            'AWS Enterprise Support',
            'AWS Developer Support',
            'AWS Business Support',
            'AWS Enterprise On-Ramp Support',
        ]}
        answer={'AWS Enterprise Support'}
    />
);

const Component8 = () => (
    <Question
        question={
            'Which characteristic of Cloud Computing imparts the ability to acquire resources as you need and release when you no longer need them?'
        }
        options={[
            'Durability',
            'Reliability',
            'Resiliency',
            'Elasticity',
        ]}
        answer={'Elasticity'}
    />
);

const Component9 = () => (
    <Question
        question={
            'Which AWS service can be used to store, manage, and deploy Docker container images?'
        }
        options={[
            'AWS Lambda',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'Amazon Elastic Container Registry (Amazon ECR)',
            'Amazon Elastic Container Service (Amazon ECS)',
        ]}
        answer={'Amazon Elastic Container Registry (Amazon ECR)'}
    />
);

const Component10 = () => (
    <Question
        question={
            'A company wants a fully managed, flexible, and scalable file storage system, with low latency access, for its Windows-based applications. Which AWS service is the right choice for the company?'
        }
        options={[
            'Amazon Elastic File System (Amazon EFS)',
            'Amazon FSx for Lustre',
            'Amazon FSx for Windows File Server',
            'Amazon Elastic Block Storage (Amazon EBS)',
        ]}
        answer={'Amazon FSx for Windows File Server'}
    />
);

const Component11 = () => (
    <Question
        question={
            'The AWS Well-Architected Framework provides guidance on building cloud based applications using AWS best practices. Which of the following options are the pillars mentioned in the AWS Well-Architected Framework? (Select two)'
        }
        options={['', '', '', '']}
        answer={null}
    />
);

const Component12 = () => (
    <Question
        question={
            'Which of the following AWS services comes under the Software as a Service (SaaS) Cloud Computing Type?'
        }
        options={[
            'Availability',
            'Cost Optimization',
            'Reliability',
            'Elasticity',
            'Scalability',
        ]}
        answer={'Availability'}
    />
);

const Component13 = () => (
    <Question
        question={
            'A customer has created a VPC and a subnet within AWS Cloud. Which of the following statements is correct?'
        }
        options={[
            'An Amazon Virtual Private Cloud (Amazon VPC) spans all of the Availability Zones (AZ) in the Region whereas a subnet spans only one Availability Zone (AZ) in the Region',
            'Both the Amazon Virtual Private Cloud (Amazon VPC) and the subnet span all of the Availability Zones (AZ) in the Region',
            'Both the Amazon Virtual Private Cloud (Amazon VPC) and the subnet span only one Availability Zone (AZ) in the Region',
            'A subnet spans all of the Availability Zones (AZ) in the Region whereas an Amazon Virtual Private Cloud (Amazon VPC) spans only one Availability Zone (AZ) in the Region',
        ]}
        answer={
            'An Amazon Virtual Private Cloud (Amazon VPC) spans all of the Availability Zones (AZ) in the Region whereas a subnet spans only one Availability Zone (AZ) in the Region'
        }
    />
);

const Component14 = () => (
    <Question
        question={
            'Which AWS compute service provides the EASIEST way to access resizable compute capacity in the cloud with support for per-second billing and access to the underlying OS?'
        }
        options={[
            'Amazon Elastic Container Service (Amazon ECS)',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'Amazon Lightsail',
            'AWS Lambda',
        ]}
        answer={'Amazon Elastic Compute Cloud (Amazon EC2)'}
    />
);

const Component15 = () => (
    <Question
        question={'What are the fundamental drivers of cost with AWS Cloud?'}
        options={[
            'Compute, Databases and Inbound Data Transfer',
            'Compute, Databases and Outbound Data Transfer',
            'Compute, Storage and Outbound Data Transfer',
            'Compute, Storage and Inbound Data Transfer',
        ]}
        answer={'Compute, Storage and Outbound Data Transfer'}
    />
);

const Component16 = () => (
    <Question
        question={
            'Which of the following is the correct statement regarding the AWS Storage services?'
        }
        options={[
            'Amazon Simple Storage Service (Amazon S3) is file based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is object based storage',
            'Amazon Simple Storage Service (Amazon S3) is block based storage, Amazon Elastic Block Store (Amazon EBS) is object based storage and Amazon Elastic File System (Amazon EFS) is file based storage',
            'Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is file based storage and Amazon Elastic File System (Amazon EFS) is block based storage',
            'Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is file based storage',
        ]}
        answer={
            'Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is file based storage'
        }
    />
);

const Component17 = () => (
    <Question
        question={
            'Which AWS service publishes up-to-the-minute information on the general status and availability of all AWS services in all the Regions of AWS Cloud?'
        }
        options={[
            'AWS CloudFormation',
            'AWS Health Dashboard – Your account health',
            'AWS Health Dashboard - service health',
            'Amazon CloudWatch',
        ]}
        answer={'AWS Health Dashboard - service health'}
    />
);

const Component18 = () => (
    <Question
        question={
            'A fleet of Amazon EC2 instances spread across different Availability Zones (AZ) needs to access, edit and share file-based data stored centrally on a system. As a Cloud Practitioner, which AWS service would you recommend for this use-case?'
        }
        options={[
            'Amazon Simple Storage Service (Amazon S3)',
            'Amazon Elastic File System (Amazon EFS)',
            'EC2 Instance Store',
            'Amazon Elastic Block Store (Amazon EBS)',
        ]}
        answer={'Amazon Elastic File System (Amazon EFS)'}
    />
);

const Component19 = () => (
    <Question
        question={
            'An organization is planning to move its infrastructure from the on-premises datacenter to AWS Cloud. As a Cloud Practioner, which options would you recommend so that the organization can identify the right AWS services to build solutions on AWS Cloud (Select two)?'
        }
        options={[
            'Amazon CloudWatch',
            'AWS Service Catalog',
            'AWS Organizations',
            '',
        ]}
        answer={null}
    />
);

const Component20 = () => (
    <Question
        question={
            'An organization has a complex IT architecture involving a lot of system dependencies and it wants to track the history of changes to each resource. Which AWS service will help the organization track the history of configuration changes for all the resources?'
        }
        options={[
            'AWS CloudFormation',
            'AWS Service Catalog',
            'AWS Config',
            'AWS CloudTrail',
        ]}
        answer={'AWS Config'}
    />
);

const Component21 = () => (
    <Question
        question={
            'A data analytics company stores its data on Amazon Simple Storage Service (Amazon S3) and wants to do SQL based analysis on this data with minimum effort. As a Cloud Practitioner, which of the following AWS services will you suggest for this use case?'
        }
        options={[
            'Amazon Aurora',
            'Amazon Athena',
            'Amazon DynamoDB',
            'Amazon Redshift',
        ]}
        answer={'Amazon Athena'}
    />
);

const Component22 = () => (
    <Question
        question={
            'Access Key ID and Secret Access Key are tied to which of the following AWS Identity and Access Management (AWS IAM) entities?'
        }
        options={['IAM Policy', 'IAM User', 'IAM Role', 'IAM User Group']}
        answer={'IAM User'}
    />
);

const Component23 = () => (
    <Question
        question={
            'Which of the following are examples of Horizontal Scalability (aka Elasticity)? (Select two)'
        }
        options={[
            'Elastic Load Balancing (ELB)',
            'Modify a Database instance to higher CPU and RAM',
            'Read Replicas in Amazon Relational Database Service (Amazon RDS)',
            'Modify an EC2 instance type from t2.nano to u-12tb1.metal',
            'Add a bigger CPU to a computer',
        ]}
        answer={
            ['Elastic Load Balancing (ELB)',
                'Read Replicas in Amazon Relational Database Service (Amazon RDS)']
        }
    />
);

const Component24 = () => (
    <Question
        question={
            'Which of the following statement is correct regarding the AWS pricing policy for data transfer charges into or out of an AWS Region?'
        }
        options={[
            'Both inbound data transfer and outbound data transfer are charged',
            'Only outbound data transfer is charged',
            'Only inbound data transfer is charged',
            'Neither inbound nor outbound data transfer are charged',
        ]}
        answer={'Both inbound data transfer and outbound data transfer are charged'}
    />
);

const Component25 = () => (
    <Question
        question={
            'Which AWS service can be used to provision resources to run big data workloads on Hadoop clusters?'
        }
        options={[
            'AWS Step Functions',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'AWS Batch',
            'Amazon EMR',
        ]}
        answer={'Amazon EMR'}
    />
);

const Component26 = () => (
    <Question
        question={
            "A company's flagship application runs on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances. As per the new policies, the system administrators are looking for the best way to provide secure shell access to Amazon Elastic Compute Cloud (Amazon EC2) instances without opening new ports or using public IP addresses."
        }
        options={[
            'Amazon Inspector',
            'Amazon Route 53',
            'Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect',
            'AWS Systems Manager Session Manager',
        ]}
        answer={'AWS Systems Manager Session Manager'}
    />
);

const Component27 = () => (
    <Question
        question={
            'An IT company wants to run a log backup process every Monday at 2 AM. The usual runtime of the process is 5 minutes. As a Cloud Practitioner, which AWS services would you recommend to build a serverless solution for this use-case? (Select two)'
        }
        options={[
            'AWS Systems Manager',
            'AWS Lambda',
            'AWS Step Function',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'Amazon Eventbridge',
        ]}
        answer={['AWS Lambda', 'Amazon Eventbridge']}
    />
);

const Component28 = () => (
    <Question
        question={
            'Which AWS service should be used when you want to run container applications, but want to avoid the operational overhead of scaling, patching, securing, and managing servers?'
        }
        options={[
            'Amazon Elastic Container Service (Amazon ECS) - EC2 launch type',
            'Amazon Elastic Container Service (Amazon ECS) - Fargate launch type',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'AWS Lambda',
        ]}
        answer={'Amazon Elastic Container Service (Amazon ECS) - Fargate launch type'}
    />
);

const Component29 = () => (
    <Question
        question={
            'As per the AWS Shared Responsibility Model, which of the following is a responsibility of the customer from a security and compliance point of view?'
        }
        options={[
            'Availability Zone (AZ) infrastructure management',
            'Managing patches of the guest operating system on Amazon Elastic Compute Cloud (Amazon EC2)',
            'Configuration management for AWS global infrastructure',
            'Patching/fixing flaws within the AWS infrastructure',
        ]}
        answer={'Managing patches of the guest operating system on Amazon Elastic Compute Cloud (Amazon EC2)'}
    />
);

const Component30 = () => (
    <Question
        question={
            'Which AWS technology/service helps you to scale your resources to match supply with demand while still keeping your cloud solution cost-effective?'
        }
        options={[
            'AWS OpsWorks',
            'AWS Auto Scaling',
            'AWS Cost Explorer',
            'AWS CloudFormation',
        ]}
        answer={'AWS Auto Scaling'}
    />
);

const Component31 = () => (
    <Question
        question={
            'Which AWS service enables users to find, buy, and immediately start using software solutions in their AWS environment?'
        }
        options={[
            'AWS Systems Manager',
            'AWS Marketplace',
            'AWS OpsWorks',
            'AWS Config',
        ]}
        answer={'AWS Marketplace'}
    />
);

const Component32 = () => (
    <Question
        question={
            'Which of the following statements are correct about the AWS root user account? (Select two)'
        }
        options={[
            'Root user access credentials are the email address and password used to create the AWS account',
            'Root user account gets unrestricted permissions when the account is created, but these can be restricted using IAM policies',
            'Root user account password cannot be changed once it is set',
            'Root user credentials should only be shared with managers requiring administrative responsibilities to complete their jobs',
            'It is highly recommended to enable Multi-Factor Authentication (MFA) for root user account',
        ]}
        answer={
            ['Root user access credentials are the email address and password used to create the AWS account',
                'It is highly recommended to enable Multi-Factor Authentication (MFA) for root user account']
        }
    />
);

const Component33 = () => (
    <Question
        question={
            'A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon Simple Storage Service (Amazon S3). The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on Amazon Simple Storage Service (Amazon S3)?'
        }
        options={[
            'Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails',
            'Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails',
            'Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) to store the thumbnails',
            'Use Amazon S3 Standard to store the thumbnails',
        ]}
        answer={'Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails'}
    />
);

const Component34 = () => (
    <Question
        question={
            'Which of the following statements is INCORRECT about AWS Auto Scaling?'
        }
        options={[
            'You can scale out and add more Amazon Elastic Compute Cloud (Amazon EC2) instances to match an increase in demand as well as scale in and remove Amazon Elastic Compute Cloud (Amazon EC2) instances to match a reduced demand',
            'You can automatically deploy AWS Shield when a DDoS attack is detected',
            'You can automatically register new instances to a load balancer',
            'You can automatically remove unhealthy instances',
        ]}
        answer={'You can automatically deploy AWS Shield when a DDoS attack is detected'}
    />
);

const Component35 = () => (
    <Question
        question={
            'Which of the following AWS services are always free to use (Select two)?'
        }
        options={[
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'AWS Auto Scaling',
            'AWS Identity and Access Management (AWS IAM)',
            'Amazon Simple Storage Service (Amazon S3)',
            'Amazon DynamoDB',
        ]}
        answer={['AWS Auto Scaling', 'AWS Identity and Access Management (AWS IAM)']}
    />
);

const Component36 = () => (
    <Question
        question={
            'Which AWS service would you use to send alerts when the costs for your AWS account exceed your budgeted amount?'
        }
        options={[
            'AWS Organizations',
            'AWS Pricing Calculator',
            'AWS Cost Explorer',
            'AWS Budgets',
        ]}
        answer={'AWS Budgets'}
    />
);

const Component37 = () => (
    <Question
        question={'Which of the following AWS services are global in scope? (Select two)'}
        options={[
            'Amazon CloudFront',
            'Amazon Relational Database Service (Amazon RDS)',
            'Amazon Simple Storage Service (Amazon S3)',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'AWS Identity and Access Management (AWS IAM)',
        ]}
        answer={['Amazon CloudFront', 'AWS Identity and Access Management (AWS IAM)']}
    />
);

const Component38 = () => (
    <Question
        question={
            'Which tool will help you review your workloads against current AWS best practices for cost optimization, security, and performance improvement and then obtain advice to architect them better?'
        }
        options={[
            'Amazon Inspector',
            'AWS Trusted Advisor',
            'AWS Cost Explorer',
            'Amazon CloudWatch',
        ]}
        answer={'AWS Trusted Advisor'}
    />
);

const Component39 = () => (
    <Question
        question={
            'A social media company wants to protect its web application from common web exploits such as SQL injection and cross-site scripting. Which of the following AWS services can be used to address this use-case?'
        }
        options={[
            'AWS CloudWatch',
            'Amazon Inspector',
            'Amazon GuardDuty',
            'AWS Web Application Firewall (AWS WAF)',
        ]}
        answer={'AWS Web Application Firewall (AWS WAF)'}
    />
);

const Component40 = () => (
    <Question
        question={
            'An e-commerce company wants to store data from a recommendation engine in a database. As a Cloud Practitioner, which AWS service would you recommend to provide this functionality with the LEAST operational overhead for any scale?'
        }
        options={[
            'Amazon Simple Storage Service (Amazon S3)',
            'Amazon Relational Database Service (Amazon RDS)',
            'Amazon Neptune',
            'Amazon DynamoDB',
        ]}
        answer={'Amazon DynamoDB'}
    />
);

const Component41 = () => (
    <Question
        question={
            'A startup is looking for 24x7 phone based technical support for its AWS account. Which of the following is the MOST cost-effective AWS support plan for this use-case?'
        }
        options={[
            'AWS Enterprise On-Ramp Support',
            'AWS Developer Support',
            'AWS Business Support',
            'AWS Enterprise Support',
        ]}
        answer={'AWS Business Support'}
    />
);

const Component42 = () => (
    <Question
        question={
            'A developer has written a simple web application in PHP and he wants to just upload his code to AWS Cloud and have AWS handle the deployment automatically but still wants access to the underlying operating system for further enhancements. As a Cloud Practitioner, which of the following AWS services would you recommend for this use-case?'
        }
        options={[
            'Amazon Elastic Container Service (Amazon ECS)',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
            'AWS CloudFormation',
            'AWS Elastic Beanstalk',
        ]}
        answer={'AWS Elastic Beanstalk'}
    />
);

const Component43 = () => (
    <Question
        question={
            'The AWS Cloud Adoption Framework (AWS CAF) recommends four iterative and incremental cloud transformation phases. Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud will help accelerate your business outcomes?'
        }
        options={['Envision', 'Align', 'Launch', 'Scale']}
        answer={'Envision'}
    />
);

const Component44 = () => (
    <Question
        question={
            'Due to regulatory and compliance reasons, an organization is supposed to use a hardware device for any data encryption operations in the cloud. Which AWS service can be used to meet this compliance requirement?'
        }
        options={[
            'AWS CloudHSM',
            'AWS Secrets Manager',
            'AWS Key Management Service (AWS KMS)',
            'AWS Trusted Advisor',
        ]}
        answer={'AWS CloudHSM'}
    />
);

const Component45 = () => (
    <Question
        question={
            'Which Amazon Elastic Compute Cloud (Amazon EC2) pricing model is the most cost-effective and flexible with no requirement for a long term resource commitment or upfront payment but still guarantees that instance would not be interrupted?'
        }
        options={[
            'Spot Instance',
            'On-demand Instance',
            'Reserved Instance (RI)',
            'Dedicated Host',
        ]}
        answer={'On-demand Instance'}
    />
);

const Component46 = () => (
    <Question
        question={
            'Which Amazon Route 53 routing policy would you use to improve the performance for your customers by routing the requests to the AWS endpoint that provides the fastest experience?'
        }
        options={[
            'Simple routing',
            'Weighted routing',
            'Latency-based routing',
            'Failover routing',
        ]}
        answer={'Latency-based routing'}
    />
);

const Component47 = () => (
    <Question
        question={
            'An organization deploys its IT infrastructure in a combination of its on-premises data center along with AWS Cloud. How would you categorize this deployment model?'
        }
        options={[
            'Private deployment',
            'Cloud deployment',
            'Mixed deployment',
            'Hybrid deployment',
        ]}
        answer={'Hybrid deployment'}
    />
);

const Component48 = () => (
    <Question
        question={
            'Which of the following AWS services can be used to prevent Distributed Denial-of-Service (DDoS) attack? (Select three)'
        }
        options={[
            'AWS Shield',
            'AWS Trusted Advisor',
            'AWS CloudHSM',
            'Amazon Inspector',
            'Amazon CloudFront with Amazon Route 53',
            'AWS Web Application Firewall (AWS WAF)',
        ]}
        answer={['AWS Shield', 'Amazon CloudFront with Amazon Route 53', 'AWS Web Application Firewall (AWS WAF)']}
    />
);

const Component49 = () => (
    <Question
        question={
            'What foundational capability under the operations perspective is part of the AWS Cloud Adoption Framework (AWS CAF)?'
        }
        options={[
            'Vulnerability management',
            'Platform engineering',
            'Application portfolio management',
            'Performance and capacity management',
        ]}
        answer={'Performance and capacity management'}
    />
);

const Component50 = () => (
    <Question
        question={
            'Which of the following AWS services is essential for implementing security of resources in AWS Cloud?'
        }
        options={[
            'AWS Identity and Access Management (IAM)',
            'Amazon CloudWatch',
            'AWS Shield',
            'AWS Web Application Firewall (AWS WAF)',
        ]}
        answer={'AWS Identity and Access Management (IAM)'}
    />
);

const Component51 = () => (
    <Question
        question={
            'A gaming company is looking at a technology/service that can deliver a consistent low-latency gameplay to ensure a great user experience for end-users in various locations.'
        }
        options={[
            'AWS Edge Locations',
            'AWS Wavelength',
            'AWS Direct Connect',
            'AWS Local Zones',
        ]}
        answer={'AWS Local Zones'}
    />
);

const Component52 = () => (
    <Question
        question={'Which of the following use-cases is NOT supported by Amazon Rekognition?'}
        options={[
            'Quickly resize photos to create thumbnails',
            'Identify person in a photo',
            'Label objects in a photo',
            'Detect text in a photo',
        ]}
        answer={'Quickly resize photos to create thumbnails'}
    />
);

const Component53 = () => (
    <Question
        question={
            'Which AWS service helps with global application availability and performance using the AWS global network?'
        }
        options={[
            'Elastic Load Balancing (ELB)',
            'Amazon CloudFront',
            'Amazon Route 53',
            'AWS Global Accelerator',
        ]}
        answer={'AWS Global Accelerator'}
    />
);

const Component54 = () => (
    <Question
        question={
            'An e-commerce company wants to assess its applications deployed on Amazon Elastic Compute Cloud (Amazon EC2) instances for vulnerabilities and deviations from AWS best practices. Which AWS service can be used to facilitate this?'
        }
        options={[
            'Amazon Inspector',
            'AWS Secrets Manager',
            'AWS CloudHSM',
            'AWS Trusted Advisor',
        ]}
        answer={'Amazon Inspector'}
    />
);

const Component55 = () => (
    <Question
        question={
            'Which service gives a personalized view of the status of the AWS services that are part of your Cloud architecture so that you can quickly assess the impact on your business when AWS service(s) are experiencing issues?'
        }
        options={[
            'Amazon Inspector',
            'AWS Health - Your Account Health Dashboard',
            'Amazon CloudWatch',
            'AWS Health - Service Health Dashboard',
        ]}
        answer={'AWS Health - Your Account Health Dashboard'}
    />
);

const Component56 = () => (
    <Question
        question={
            'A retail company has multiple AWS accounts for each of its departments. Which of the following AWS services can be used to set up consolidated billing and a single payment method for these AWS accounts?'
        }
        options={[
            'AWS Secrets Manager',
            'AWS Budgets',
            'AWS Cost Explorer',
            'AWS Organizations',
        ]}
        answer={'AWS Organizations'}
    />
);

const Component57 = () => (
    <Question
        question={'Which of the following statements are true about AWS Lambda? (Select two)'}
        options={[
            'You pay for the compute time you consume for AWS Lambda',
            'AWS Lambda allows you to install databases on the underlying serverless Operating System',
            'AWS Lambda lets you run code without provisioning or managing servers',
            'AWS Lambda provides access to the underlying operating system to control its behavior through code',
            'AWS Lambda allows you to orchestrate and manage Docker containers to facilitate complex containerized applications on AWS',
        ]}
        answer={['You pay for the compute time you consume for AWS Lambda', 'AWS Lambda lets you run code without provisioning or managing servers']}
    />
);

const Component58 = () => (
    <Question
        question={
            'The engineering team at an IT company wants to monitor the CPU utilization for its fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances and send an email to the administrator if the utilization exceeds 80%. As a Cloud Practitioner, which AWS services would you recommend to build this solution? (Select two)'
        }
        options={[
            'Amazon Simple Queue Service (SQS)',
            'AWS CloudTrail',
            'AWS Lambda',
            'Amazon Simple Notification Service (SNS)',
        ]}
        answer={['Amazon Simple Notification Service (SNS)', 'AWS Lambda']}
    />
);

const Component59 = () => (
    <Question
        question={'Multi-AZ deployment is an example of which of the following?'}
        options={[
            'Scale out',
            'Scale up',
            'Performance Efficiency',
            'High Availability',
        ]}
        answer={'High Availability'}
    />
);

const Component60 = () => (
    <Question
        question={
            'Which of the following solutions can you use to connect your on-premises network with AWS Cloud (Select two)?'
        }
        options={[
            'AWS Direct Connect',
            'AWS Virtual Private Network (VPN)',
            'Internet Gateway',
            'Amazon Virtual Private Cloud (Amazon VPC)',
            'Amazon Route 53',
        ]}
        answer={['AWS Direct Connect', 'AWS Virtual Private Network (VPN)']}
    />
);

const Component61 = () => (
    <Question
        question={'What are the different gateway types supported by AWS Storage Gateway service?'}
        options={[
            'Tape Gateway, File Gateway and Volume Gateway',
            'Tape Gateway, File Gateway and Block Gateway',
            'Tape Gateway, Object Gateway and Volume Gateway',
            'Object Gateway, File Gateway and Block Gateway',
        ]}
        answer={'Tape Gateway, File Gateway and Volume Gateway'}
    />
);

const Component62 = () => (
    <Question
        question={
            'As per the AWS Shared Responsibility Model, which of the following is a responsibility of AWS from a security and compliance point of view?'
        }
        options={[
            'Identity and Access Management',
            'Server-side Encryption (SSE)',
            'Edge Location Management',
            'Customer Data',
        ]}
        answer={'Server-side Encryption (SSE)'}
    />
);






// Agrega más componentes si es necesario

