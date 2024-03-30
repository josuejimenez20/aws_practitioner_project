import React, { useState, useEffect } from 'react';
import Question from './Question';

export const ThirdExam = () => {
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
        question={'Which of the following improves the availability for a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances?'}
        options={[
            'Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different AWS Regions of the same Availability Zone (AZ)',
            'Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances in the same Availability Zone (AZ) of an AWS Region',
            'Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different Availability Zones (AZ) in the same AWS Region',
            'Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances in the same Availability Zone (AZ) across two different AWS Regions',
        ]}
        answer={
            'Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different Availability Zones (AZ) in the same AWS Region'
        }
    />
);

const Component2 = () => (
    <Question
        question={
            'A research group wants to provision an Amazon Elastic Compute Cloud (Amazon EC2) instance for a flexible application that can be interrupted. As a Cloud Practitioner, which of the following would you recommend as the MOST cost-optimal option?'
        }
        options={[
            'Dedicated Host',
            'On-Demand Instance',
            'Reserved Instance (RI)',
            'Spot Instance',
        ]}
        answer={'Spot Instance'}
    />
);

const Component3 = () => (
    <Question
        question={
            'A startup runs its proprietary application on docker containers. As a Cloud Practitioner, which AWS service would you recommend so that the startup can run containers and still have access to the underlying servers?'
        }
        options={[
            'Amazon Elastic Container Service (Amazon ECS)',
            'AWS Fargate',
            'AWS Lambda',
            'Amazon Elastic Container Registry (Amazon ECR)',
        ]}
        answer={'Amazon Elastic Container Service (Amazon ECS)'}
    />
);

const Component4 = () => (
    <Question
        question={
            'Compared to the on-demand instance prices, what is the highest possible discount offered for reserved instances (RI)?'
        }
        options={['72', '50', '90', '40']}
        answer={'72'}
    />
);

const Component5 = () => (
    <Question
        question={
            'Which AWS service can be used as an in-memory database with high-performance and low latency?'
        }
        options={[
            'Amazon Athena',
            'Amazon ElastiCache',
            'Amazon Relational Database Service (Amazon RDS)',
            'Amazon DynamoDB',
        ]}
        answer={'Amazon ElastiCache'}
    />
);

const Component6 = () => (
    <Question
        question={
            'An IT company is on a cost-optimization spree and wants to identify all Amazon Elastic Compute Cloud (Amazon EC2) instances that are under-utilized. Which AWS services can be used off-the-shelf to address this use-case without needing any manual configurations? (Select two)'
        }
        options={[
            'AWS Cost Explorer',
            'AWS Budgets',
            'AWS Cost & Usage Report (AWS CUR)',
            'Amazon CloudWatch',
            'AWS Trusted Advisor',
        ]}
        answer={['AWS Cost Explorer', 'AWS Trusted Advisor']}
    />
);

const Component7 = () => (
    <Question
        question={
            'Which feature of AWS Cloud offers the ability to innovate faster and rapidly develop, test and launch software applications?'
        }
        options={[
            'Agility',
            'Elasticity',
            'Cost savings',
            'Ability to deploy globally in minutes',
        ]}
        answer={'Agility'}
    />
);

const Component8 = () => (
    <Question
        question={
            'Which of the following statements are CORRECT about the AWS Auto Scaling group? (Select two)'
        }
        options={[
            'Auto Scaling group scales out and adds more number of Amazon EC2 instances to match an increase in demand',
            'Auto Scaling group scales in and reduces the number of Amazon EC2 instances to match a decrease in demand',
            'Auto Scaling group scales down and reduces the number of Amazon EC2 instances to match a decrease in demand',
            'Auto Scaling group scales down and downgrades to a less powerful Amazon EC2 instance to match a decrease in demand',
            'Auto Scaling group scales up and upgrades to a more powerful Amazon EC2 instance to match an increase in demand',
        ]}
        answer={[
            'Auto Scaling group scales out and adds more number of Amazon EC2 instances to match an increase in demand',
            'Auto Scaling group scales in and reduces the number of Amazon EC2 instances to match a decrease in demand',
        ]}
    />
);

const Component9 = () => (
    <Question
        question={'Which AWS services support High Availability by default? (Select two)'}
        options={[
            'Amazon DynamoDB',
            'Amazon Elastic Block Store (Amazon EBS)',
            'Amazon Redshift',
            'Amazon Elastic File System (Amazon EFS)',
            'Instance Store',
        ]}
        answer={['Amazon DynamoDB', 'Amazon Elastic File System (Amazon EFS)']}
    />
);

const Component10 = () => (
    <Question
        question={
            'Which AWS service protects your AWS account by monitoring malicious activity and detecting threats?'
        }
        options={[
            'Amazon GuardDuty',
            'AWS Trusted Advisor',
            'AWS CloudTrail',
            'Amazon CloudWatch',
        ]}
        answer={'Amazon GuardDuty'}
    />
);

const Component11 = () => (
    <Question
        question={
            'Which of the following AWS entities provides the information required to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance?'
        }
        options={[
            'Amazon Elastic Block Store (Amazon EBS)',
            'AWS Lambda',
            'Amazon Machine Image (AMI)',
            'Amazon Elastic File System (Amazon EFS)',
        ]}
        answer={'Amazon Machine Image (AMI)'}
    />
);

const Component12 = () => (
    <Question
        question={'As a Cloud Practitioner, which Amazon Simple Storage Service (Amazon S3) storage class would you recommend for data archival?'}
        options={[
            'Amazon S3 Standard',
            'Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)',
            'Amazon S3 Glacier Flexible Retrieval',
            'Amazon S3 Intelligent-Tiering',
        ]}
        answer={'Amazon S3 Glacier Flexible Retrieval'}
    />
);

const Component13 = () => (
    <Question
        question={'Which of the following is the best way to protect your data from accidental deletion on Amazon S3?'}
        options={[
            'Amazon S3 storage classes',
            'Amazon S3 lifecycle configuration',
            'Amazon S3 Transfer Acceleration (Amazon S3TA)',
            'Amazon S3 Versioning',
        ]}
        answer={'Amazon S3 Versioning'}
    />
);

const Component14 = () => (
    <Question
        question={'Which of the following AWS services are regional in scope? (Select two)'}
        options={[
            'AWS Web Application Firewall (AWS WAF)',
            'Amazon Rekognition',
            'AWS Identity and Access Management (AWS IAM)',
            'AWS Lambda',
            'Amazon CloudFront',
        ]}
        answer={['AWS Web Application Firewall (AWS WAF)', 'AWS Identity and Access Management (AWS IAM)']}
    />
);

const Component15 = () => (
    <Question
        question={
            'An IT company has deployed a static website on Amazon Simple Storage Service (Amazon S3), but the website is still inaccessible. As a Cloud Practioner, which of the following solutions would you suggest to address this issue?'
        }
        options={[
            'Disable Amazon S3 encryption',
            'Fix the Amazon S3 bucket policy',
            'Enable Amazon S3 replication',
            'Enable Amazon S3 versioning',
        ]}
        answer={'Fix the Amazon S3 bucket policy'}
    />
);

const Component16 = () => (
    <Question
        question={'AWS Lambda pricing is based on which of the following criteria? (Select two)'}
        options={[
            'The language runtime of the AWS Lambda function',
            'Number of requests for the AWS Lambda function',
            'The size of the deployment package for the AWS Lambda function',
            'The number of lines of code for the AWS Lambda function',
            'The time it takes for the AWS Lambda function to execute',
        ]}
        answer={['Number of requests for the AWS Lambda function', 'The time it takes for the AWS Lambda function to execute']}
    />
);

const Component17 = () => (
    <Question
        question={'Which of the following is a perspective of the AWS Cloud Adoption Framework (AWS CAF)?'}
        options={['Architecture', 'Process', 'Product', 'Business']}
        answer={'Business'}
    />
);

const Component18 = () => (
    <Question
        question={
            'An AWS user is trying to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance in a given region. What is the region-specific constraint that the Amazon Machine Image (AMI) must meet so that it can be used for this Amazon Elastic Compute Cloud (Amazon EC2) instance?'
        }
        options={[
            'You should use an Amazon Machine Image (AMI) from the same region, as it improves the performance of the Amazon EC2 instance',
            'An Amazon Machine Image (AMI) is a global entity, so the region is not applicable',
            'You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance',
            'You can use an Amazon Machine Image (AMI) from a different region, but it degrades the performance of the Amazon EC2 instance',
        ]}
        answer={
            'You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance'
        }
    />
);

const Component19 = () => (
    <Question
        question={
            'An AWS hardware failure has impacted one of your Amazon Elastic Block Store (Amazon EBS) volumes. Which AWS service will alert you of the affected resources and provide a remedial action?'
        }
        options={[
            'Amazon GuardDuty',
            'AWS Config',
            'AWS Health Dashboard – Your account health',
            'AWS Trusted Advisor',
        ]}
        answer={'AWS Health Dashboard – Your account health'}
    />
);

const Component20 = () => (
    <Question
        question={
            'A multi-national company has its business-critical data stored on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances, in various countries, configured in region-specific compliance rules. To demonstrate compliance, the company needs to submit historical configurations on a regular basis. Which AWS service is best suited for this requirement?'
        }
        options={['AWS Config', 'Amazon Macie', 'AWS CloudTrail', 'Amazon GuardDuty']}
        answer={'AWS Config'}
    />
);

const Component21 = () => (
    <Question
        question={'Which of the following are recommended best practices for AWS Identity and Access Management (AWS IAM) service? (Select two)'}
        options={[
            'Create a minimum number of accounts and share these account credentials among employees',
            'Grant maximum privileges to avoid assigning privileges again',
            'Rotate credentials regularly',
            'Share AWS account root user access keys with other administrators',
            'Enable multi-factor authentication (MFA) for all users',
        ]}
        answer={['Rotate credentials regularly', 'Enable multi-factor authentication (MFA) for all users']}
    />
);

const Component22 = () => (
    <Question
        question={
            'A financial services company must meet compliance requirements that mandate storing multiple copies of data in geographically distant locations. As the company uses Amazon Simple Storage Service (Amazon S3) as its main storage service, which of the following represents the MOST resource-efficient solution for this use-case?'
        }
        options={[
            'Use S3 same-region replication (S3 SRR) to replicate data between distant AWS Regions',
            'Run a daily job on an Amazon Elastic Compute Cloud (Amazon EC2) instance to copy objects into another Region',
            'For every new object, trigger an AWS Lambda function to write data into a bucket in another AWS Region',
            'Use S3 cross-region replication (S3 CRR) to replicate data between distant AWS Regions',
        ]}
        answer={'Use S3 cross-region replication (S3 CRR) to replicate data between distant AWS Regions'}
    />
);

const Component23 = () => (
    <Question
        question={
            'A medical device company is looking for a durable and cost-effective way of storing their historic data. Due to compliance requirements, the data must be stored for 10 years. Which AWS Storage solution will you suggest?'
        }
        options={[
            'Amazon S3 Glacier Deep Archive',
            'Amazon Elastic File System (Amazon EFS)',
            'Amazon S3 Glacier Flexible Retrieval',
            'AWS Storage Gateway',
        ]}
        answer={'Amazon S3 Glacier Deep Archive'}
    />
);

const Component24 = () => (
    <Question
        question={'Which of the following AWS services offer block-level storage? (Select two)'}
        options={[
            'Amazon Elastic Container Service (Amazon ECS)',
            'Amazon Elastic Block Store (Amazon EBS)',
            'Amazon Simple Storage Service (Amazon S3)',
            'Amazon Elastic File System (Amazon EFS)',
            'Instance Store',
        ]}
        answer={['Amazon Elastic Block Store (Amazon EBS)', 'Instance Store']}
    />
);

const Component25 = () => (
    <Question
        question={
            'A company has a static website hosted on an Amazon Simple Storage Service (Amazon S3) bucket in an AWS Region in Asia. Although most of its users are in Asia, now it wants to drive growth globally. How can it improve the global performance of its static website?'
        }
        options={[
            'Use Amazon S3 Transfer Acceleration (Amazon S3TA) to improve the performance of your website',
            'Use AWS Web Application Firewall (AWS WAF) to improve the performance of your website',
            'Use Amazon CloudFormation to improve the performance of your website',
            'Use Amazon CloudFront to improve the performance of your website',
        ]}
        answer={'Use Amazon CloudFront to improve the performance of your website'}
    />
);

const Component26 = () => (
    <Question
        question={
            'According to the AWS Shared Responsibility Model, which of the following are the responsibilities of the customer? (Select two)'
        }
        options={[
            'Ensuring AWS employees cannot access customer data',
            'Operating system patches and updates of an Amazon Elastic Compute Cloud (Amazon EC2) instance',
            'Compliance validation of Cloud infrastructure',
            'Enabling data encryption of data stored in Amazon Simple Storage Service (Amazon S3) buckets',
            'AWS Global Network Security',
        ]}
        answer={[
            'Operating system patches and updates of an Amazon Elastic Compute Cloud (Amazon EC2) instance',
            'Compliance validation of Cloud infrastructure',
        ]}
    />
);

const Component27 = () => (
    <Question
        question={
            'An IT company has a hybrid cloud architecture and it wants to centralize the server logs for its Amazon Elastic Compute Cloud (Amazon EC2) instances and on-premises servers. Which of the following is the MOST effective for this use-case?'
        }
        options={[
            'Use AWS Lambda to send log data from Amazon Elastic Compute Cloud (Amazon EC2) instance as well as on-premises servers to Amazon CloudWatch Logs',
            'Use AWS CloudTrail for the Amazon Elastic Compute Cloud (Amazon EC2) instance and Amazon CloudWatch Logs for the on-premises servers',
            'Use Amazon CloudWatch Logs for the Amazon Elastic Compute Cloud (Amazon EC2) instance and AWS CloudTrail for the on-premises servers',
            'Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud (Amazon EC2) instance and the on-premises servers',
        ]}
        answer={'Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud (Amazon EC2) instance and the on-premises servers'}
    />
);

const Component28 = () => (
    <Question
        question={'Which AWS service can be used for online analytical processing?'}
        options={[
            'Amazon ElastiCache',
            'Amazon Redshift',
            'Amazon DynamoDB',
            'Amazon Relational Database Service (Amazon RDS)',
        ]}
        answer={'Amazon Redshift'}
    />
);

const Component29 = () => (
    <Question
        question={'Which of the following are correct statements regarding the AWS Shared Responsibility Model? (Select two)'}
        options={[
            'For a service like Amazon EC2, that falls under Infrastructure as a Service (IaaS), AWS is responsible for maintaining guest operating system',
            'For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms',
            'Configuration Management is the responsibility of the customer',
            'AWS is responsible for Security \'of\' the Cloud',
            'AWS is responsible for training AWS and customer employees on AWS products and services',
        ]}
        answer={[
            'For a service like Amazon EC2, that falls under Infrastructure as a Service (IaaS), AWS is responsible for maintaining guest operating system',
            'Configuration Management is the responsibility of the customer',
        ]}
    />
);

const Component30 = () => (
    <Question
        question={'Which of the following capabilities does Amazon Rekognition provide as a ready-to-use feature?'}
        options={[
            'Convert images into greyscale',
            'Identify objects in a photo',
            'Resize images quickly',
            'Human pose detection',
        ]}
        answer={['Identify objects in a photo']}
    />
);

const Component31 = () => (
    <Question
        question={
            'AWS Identity and Access Management (AWS IAM) policies are written as JSON documents. Which of the following are mandatory elements of an IAM policy?'
        }
        options={[
            'Effect, Sid',
            'Sid, Principal',
            'Action, Condition',
            'Effect, Action',
        ]}
        answer={['Effect, Action']}
    />
);
const Component32 = () => (
    <Question
        question={
            'A cyber-security agency uses AWS Cloud and wants to carry out security assessments on its own AWS infrastructure without any prior approval from AWS. Which of the following describes/facilitates this practice?'
        }
        options={[
            'Network Stress Testing',
            'AWS Secrets Manager',
            'Penetration Testing',
            'Amazon Inspector',
        ]}
        answer={'AWS Secrets Manager'}
    />
);

const Component33 = () => (
    <Question
        question={'Amazon CloudWatch billing metric data is stored in which AWS Region?'}
        options={[
            'In the AWS Region where the AWS account is created',
            'In the AWS Region where the AWS resource is provisioned',
            'US West (N. California) - us-west-',
        ]}
        answer={'In the AWS Region where the AWS account is created'}
    />
);

const Component34 = () => (
    <Question
        question={'Which of the following statements are CORRECT regarding security groups and network access control lists (network ACL)? (Select two)'}
        options={[
            'A security group contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic',
            'A security group is stateful, that is, it automatically allows the return traffic',
            'A network access control list (network ACL) contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic',
            'A network access control list (network ACL) is stateful, that is, it automatically allows the return traffic',
            'A security group is stateless, that is, the return traffic must be explicitly allowed',
        ]}
        answer={[
            'A security group contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic',
            'A security group is stateful, that is, it automatically allows the return traffic',
        ]}
    />
);

const Component35 = () => (
    <Question
        question={
            'A development team is looking for a forum where the most frequent questions and requests from AWS customers are listed along with AWS provided solutions.'
        }
        options={[
            'AWS Knowledge Center',
            'AWS Health Dashboard - service health',
            'AWS Support Center',
            'AWS Marketplace',
        ]}
        answer={'AWS Knowledge Center'}
    />
);

const Component36 = () => (
    <Question
        question={
            'AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations for which of the following categories? (Select two)'
        }
        options={[
            'Cost Optimization',
            'Elasticity',
            'Service Limits',
            'Change Management',
            'Documentation',
        ]}
        answer={['Cost Optimization', 'Service Limits']}
    />
);

const Component37 = () => (
    <Question
        question={'Which of the following AWS services have data encryption automatically enabled? (Select two)?'}
        options={[
            'Amazon Simple Storage Service (Amazon S3)',
            'AWS Storage Gateway',
            'Amazon Elastic Block Store (Amazon EBS)',
            'Amazon Elastic File System (Amazon EFS)',
            'Amazon Redshift',
        ]}
        answer={['Amazon Simple Storage Service (Amazon S3)', 'AWS Storage Gateway']}
    />
);

const Component38 = () => (
    <Question
        question={
            "Which of the following Cloud Computing models does the 'gmail' service represent?"
        }
        options={[
            'Function as a service (FaaS)',
            'Software as a service (SaaS)',
            'Platform as a service (PaaS)',
            'Infrastructure as a service (IaaS)',
        ]}
        answer={'Software as a service (SaaS)'}
    />
);

const Component39 = () => (
    <Question
        question={
            'A leading research firm needs to access information available in old patents and documents (such as PDFs, Text Files, Word documents, etc) present in its huge knowledge base. The firm is looking for a powerful search tool that can dig into these knowledge resources and return the most relevant files/documents. Which of the following is the correct service to address this requirement?'
        }
        options={[
            'Amazon Kendra',
            'Amazon Comprehend',
            'Amazon Lex',
            'Amazon Personalize',
        ]}
        answer={'Amazon Kendra'}
    />
);

const Component40 = () => (
    <Question
        question={
            "A startup has just moved its IT infrastructure to AWS Cloud. The CTO would like to receive detailed reports that break down the startup's AWS costs by the hour in an Amazon Simple Storage Service (Amazon S3) bucket. As a Cloud Practitioner, which AWS service would you recommend for this use-case?"
        }
        options={[
            'AWS Cost & Usage Report (AWS CUR)',
            'AWS Pricing Calculator',
            'AWS Cost Explorer',
            'AWS Budgets',
        ]}
        answer={'AWS Cost & Usage Report (AWS CUR)'}
    />
);

const Component41 = () => (
    <Question
        question={
            'Which AWS service will you use if you have to move large volumes of on-premises data to AWS Cloud from a remote location with limited bandwidth?'
        }
        options={[
            'AWS Virtual Private Network (VPN)',
            'AWS Transit Gateway',
            'AWS Direct Connect',
            'AWS Snowball',
        ]}
        answer={'AWS Snowball'}
    />
);

const Component42 = () => (
    <Question
        question={
            'Which AWS service can be used to automate code deployment to Amazon Elastic Compute Cloud (Amazon EC2) instances as well as on-premises instances?'
        }
        options={[
            'AWS CloudFormation',
            'AWS CodePipeline',
            'AWS CodeDeploy',
            'AWS CodeCommit',
        ]}
        answer={'AWS CodeDeploy'}
    />
);

const Component43 = () => (
    <Question
        question={'Which budget types can be created under AWS Budgets (Select three)?'}
        options={[
            'Cost budget',
            'Hardware budget',
            'Reservation budget',
            'Usage budget',
            'Resource budget',
        ]}
        answer={['Cost budget', 'Reservation budget', 'Usage budget']}
    />
);

const Component44 = () => (
    <Question
        question={
            'An organization maintains separate Amazon Virtual Private Clouds (Amazon VPC) for each of its departments. With expanding business, the organization now wants to connect all Amazon Virtual Private Clouds (Amazon VPC) for better departmental collaboration. Which AWS service will help the organization tackle the issue effectively?'
        }
        options={[
            'AWS Site-to-Site VPN',
            'AWS Direct Connect',
            'VPC peering connection',
            'AWS Transit Gateway',
        ]}
        answer={'AWS Transit Gateway'}
    />
);

const Component45 = () => (
    <Question
        question={'Which of the following statements is correct regarding the Amazon Elastic File System (Amazon EFS) storage service?'}
        options={[
            'EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system only in one Availability Zone (AZ)',
            'EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ), Regions and VPCs',
            'EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ) and VPCs but not across Regions',
            'EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ) but not across VPCs and Regions',
        ]}
        answer={'EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system only in one Availability Zone (AZ)'}
    />
);

const Component46 = () => (
    <Question
        question={'Which Amazon Simple Storage Service (Amazon S3) storage class offers the lowest availability?'}
        options={[
            'Amazon S3 Glacier Flexible Retrieval',
            'Amazon S3 Standard',
            'Amazon S3 Intelligent-Tiering',
            'Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)',
        ]}
        answer={'Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)'}
    />
);

const Component47 = () => (
    <Question
        question={'Which of the following is a part of the AWS Global Infrastructure?'}
        options={[
            'Virtual Private Network (VPN)',
            'AWS Region',
            'Virtual Private Cloud (VPC)',
            'Subnet',
        ]}
        answer={'AWS Region'}
    />
);

const Component48 = () => (
    <Question
        question={'Which pillar of the AWS Well-Architected Framework recommends maintaining infrastructure as code (IaC)?'}
        options={[
            'Operational Excellence',
            'Cost Optimization',
            'Security',
            'Performance Efficiency',
        ]}
        answer={'Operational Excellence'}
    />
);

const Component49 = () => (
    <Question
        question={'Which AWS service can be used to execute code triggered by new files being uploaded to Amazon Simple Storage Service (Amazon S3)?'}
        options={[
            'AWS Lambda',
            'Amazon Simple Queue Service (Amazon SQS)',
            'Amazon Elastic Container Service (Amazon ECS)',
            'Amazon Elastic Compute Cloud (Amazon EC2)',
        ]}
        answer={'AWS Lambda'}
    />
);

const Component50 = () => (
    <Question
        question={'A financial services enterprise plans to enable Multi-Factor Authentication (MFA) for its employees. For ease of travel, they prefer not to use any physical devices to implement Multi-Factor Authentication (MFA). Which of the below options is best suited for this use case?'}
        options={[
            'Hardware Multi-Factor Authentication (MFA) device',
            'U2F security key',
            'Soft Token Multi-Factor Authentication (MFA) device',
            'Virtual Multi-Factor Authentication (MFA) device',
        ]}
        answer={'Virtual Multi-Factor Authentication (MFA) device'}
    />
);

const Component51 = () => (
    <Question
        question={'What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?'}
        options={[
            'Read Replica enhances database availability',
            'Read Replica reduces database usage costs',
            'Read Replica protects the database from a regional failure',
            'Read Replica improves database scalability',
        ]}
        answer={'Read Replica improves database scalability'}
    />
);

const Component52 = () => (
    <Question
        question={'Which of the following statements are true about Cost Allocation Tags in AWS Billing? (Select two)'}
        options={[
            'For each resource, each tag key must be unique, and each tag key can have only one value',
            'Only user-defined tags need to be activated before they can appear in Cost Explorer or on a cost allocation report',
            'For each resource, each tag key must be unique, but can have multiple values',
            'Tags help in organizing resources and are a mandatory configuration item to run reports',
        ]}
        answer={[
            'For each resource, each tag key must be unique, and each tag key can have only one value',
            'You must activate both AWS generated tags and user-defined tags separately before they can appear in Cost Explorer or on a cost allocation report',
        ]}
    />
);

const Component53 = () => (
    <Question
        question={'Which of the following AWS services specialize in data migration from on-premises to AWS Cloud? (Select two)'}
        options={[
            'AWS Site-to-Site VPN',
            'AWS Direct Connect',
            'AWS Snowball',
            'AWS Transit Gateway',
            'AWS Database Migration Service (AWS DMS)',
        ]}
        answer={[
            'AWS Snowball',
            'AWS Database Migration Service (AWS DMS)',
        ]}
    />
);

const Component54 = () => (
    <Question
        question={'Which Amazon Route 53 routing policy would you use when you want to route your traffic in an active-passive configuration?'}
        options={[
            'Simple routing',
            'Latency-based routing',
            'Failover routing',
            'Weighted routing',
        ]}
        answer={'Failover routing'}
    />
);

const Component55 = () => (
    <Question
        question={'Under the AWS Shared Responsibility Model, which of the following is the responsibility of a customer regarding AWS Lambda?'}
        options={[
            'Patch underlying OS for the AWS Lambda function infrastructure',
            'Maintain versions of an AWS Lambda function',
            'Maintain all runtime environments for AWS Lambda functions',
            'Configure networking infrastructure for the AWS Lambda functions',
        ]}
        answer={'Maintain versions of an AWS Lambda function'}
    />
);

const Component56 = () => (
    <Question
        question={'A customer is running a comparative study of pricing models of Amazon EFS and Amazon Elastic Block Store (Amazon EBS) that are used with the Amazon EC2 instances that host the application. Which of the following statements are correct regarding this use-case? (Select two)'}
        options={[
            'Amazon Elastic Block Store (Amazon EBS) Snapshots are stored incrementally, which means you are billed only for the changed blocks stored',
            'Amazon Elastic Block Store (Amazon EBS) Snapshot storage pricing is based on the amount of space your data consumes in Amazon Elastic Block Store (Amazon EBS)',
            'With AWS Backup, you pay only for the amount of Amazon Elastic File System (Amazon EFS) backup storage you use in a month, you need not pay for restoring this data',
            'You will pay a fee each time you read from or write data stored on the Amazon Elastic File System (Amazon EFS) - Infrequent Access storage class',
            'Amazon Elastic Compute Cloud (Amazon EC2) data transfer charges will apply for all Amazon Elastic Block Store (Amazon EBS) direct APIs for Snapshots'
        ]}
        correctOptions={'Amazon Elastic Block Store (Amazon EBS) Snapshots are stored incrementally, which means you are billed only for the changed blocks stored, With AWS Backup, you pay only for the amount of Amazon Elastic File System (Amazon EFS) backup storage you use in a month, you need not pay for restoring this data'}
    />
);

const Component57 = () => (
    <Question
        question={'A company is looking for a guided path to help deploy, configure, and secure its new workloads while ensuring that it is ready for on-going operations in the cloud. Which of the following AWS services/tools can be leveraged for this use case?'}
        options={[
            'Cloud Foundations',
            'AWS Trusted Advisor',
            'AWS Shared Responsibility Model',
            'AWS Config'
        ]}
        correctOption={'Cloud Foundations'}
    />
);

const Component58 = () => (
    <Question
        question={'An e-commerce company uses AWS Cloud and would like to receive separate invoices for development and production environments. As a Cloud Practioner, which of the following solutions would you recommend for this use-case?'}
        options={[
            'Tag all resources in the AWS account as either development or production. Then use the tags to create separate invoices',
            'Use AWS Cost Explorer to create separate invoices for development and production environments',
            'Use AWS Organizations to create separate invoices for development and production environments',
            'Create separate AWS accounts for development and production environments to receive separate invoices'
        ]}
        correctOption={'Create separate AWS accounts for development and production environments to receive separate invoices'}
    />
);

const Component59 = () => (
    <Question
        question={'Which of the following is correct regarding the AWS Shield Advanced pricing?'}
        options={[
            'AWS Shield Advanced is a free service for AWS Business Support plan',
            'AWS Shield Advanced is a free service for AWS Enterprise Support plan',
            'AWS Shield Advanced offers protection against higher fees that could result from a DDoS attack',
            'AWS Shield Advanced is a free service for all AWS Support plans'
        ]}
        correctOption={'AWS Shield Advanced offers protection against higher fees that could result from a DDoS attack'}
    />
);

const Component60 = () => (
    <Question
        question={'A research lab wants to optimize the caching capabilities for its scientific computations application running on Amazon Elastic Compute Cloud (Amazon EC2) instances. Which Amazon Elastic Compute Cloud (Amazon EC2) storage option is best suited for this use-case?'}
        options={[
            'Instance Store',
            'Amazon Elastic Block Store (Amazon EBS)',
            'Amazon Simple Storage Service (Amazon S3)',
            'Amazon Elastic File System (Amazon EFS)'
        ]}
        correctOption={'Instance Store'}
    />
);

const Component61 = () => (
    <Question
        question={'Which AWS service can help you create data-driven business cases for transitioning your business from on-premises to AWS Cloud?'}
        options={[
            'AWS Trusted Advisor',
            'AWS Billing and Cost Management',
            'AWS Budgets',
            'AWS Migration Evaluator'
        ]}
        correctOption={'AWS Migration Evaluator'}
    />
);

const Component62 = () => (
    <Question
        question={'Which AWS service will you use to privately connect your virtual private cloud (VPC) to Amazon Simple Storage Service (Amazon S3)?'}
        options={[
            'AWS Transit Gateway',
            'AWS Direct Connect',
            'Amazon API Gateway',
            'VPC Endpoint'
        ]}
        correctOption={'VPC Endpoint'}
    />
);

const Component63 = () => (
    <Question
        question={'Which of the following are components of an AWS Site-to-Site VPN? (Select two)'}
        options={[
            'AWS storage gateway',
            'Customer gateway',
            'Virtual private gateway (VGW)',
            'Network Address Translation gateway (NAT gateway)',
            'Internet gateway'
        ]}
        correctOptions={'Customer gateway, Virtual private gateway (VGW)'}
    />
);
