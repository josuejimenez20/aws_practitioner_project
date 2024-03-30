import React, { useState, useEffect } from 'react';
import Question from './Question';

export default function firstExam() {
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
        <Component63 />,
        <Component64 />,
        <Component65 />,
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


const Component1 = () => <Question
    question={'A company wants to identify the optimal AWS resource configuration for its workloads so that the company can reduce costs and increase workload performance. Which of the following services can be used to meet this requirement?'}
    options={['AWS Systems Manager', 'AWS Compute Optimizer', 'AWS Cost Explorer', 'AWS Budgets']}
    answer={'AWS Compute Optimizer'}
/>
const Component2 = () => <Question
    question={'Which AWS Service can be used to mitigate a Distributed Denial of Service (DDoS) attack?'}
    options={['AWS Key Management Service (AWS KMS)', 'AWS Systems Manager', 'Amazon CloudWatch', 'AWS Shield']}
    answer={'AWS Shield'}
/>

const Component3 = () => <Question
    question={'A cyber forensics team has detected that AWS owned IP-addresses are being used to carry out malicious attacks. As this constitutes prohibited use of AWS services, which of the following is the correct solution to address this issue?'}
    options={['Contact AWS Developer Forum moderators', 'Contact AWS Support', 'Write an email to Jeff Bezos, the founder of Amazon, with the details of the incident', 'Contact AWS Abuse Team']}
    answer={'Contact AWS Abuse Team'}
/>

const Component4 = () => <Question
    question={'A company runs an application on a fleet of EC2 instances. The company wants to automate the traditional maintenance job of running timely assessments and checking for OS vulnerabilities. As a Cloud Practitioner, which service will you suggest for this use case?'}
    options={['Amazon GuardDuty', 'Amazon Macie', 'Amazon Inspector', 'AWS Shield']}
    answer={'Amazon Inspector'}
/>

const Component5 = () => <Question
    question={'Which tool/service will help you access AWS services using programming language-specific APIs?'}
    options={['AWS Management Console', 'AWS Software Developer Kit (SDK)', 'Integrated Development Environments (IDE)', 'AWS Command Line Interface (CLI)']}
    answer={'AWS Software Developer Kit (SDK)'}
/>

const Component6 = () => <Question
    question={'What are the advantages that AWS Cloud offers over a traditional on-premises IT infrastructure? (Select two)'}
    options={['Make a capacity decision before deploying an application, to reduce costs', 'Eliminate guessing on your infrastructure capacity needs', 'Trade capital expense for variable expense', 'Increase speed and agility by keeping servers and other required resources ready before time in your data centers']}
    answer={['Eliminate guessing on your infrastructure capacity needs', 'Trade capital expense for variable expense']}
/>

const Component7 = () => <Question
    question={'Which of the following Amazon S3 storage classes takes the most time to retrieve data (also known as first byte latency)?'}
    options={['Amazon S3 Intelligent-Tiering', 'Amazon S3 Glacier Deep Archive', 'Amazon S3 Standard', 'Amazon S3 Glacier Flexible Retrieval']}
    answer={'Amazon S3 Intelligent-Tiering'}
/>

const Component8 = () => <Question
    question={'Which security service of AWS is enabled for all AWS customers, by default, at no additional cost?'}
    options={['AWS Shield Standard', 'AWS Shield Advanced', 'AWS Web Application Firewall (AWS WAF)', 'AWS Secrets Manager']}
    answer={'AWS Shield Standard'}
/>

const Component9 = () => <Question
    question={'Which of the following are the storage services offered by the AWS Cloud? (Select two)'}
    options={['Amazon Simple Storage Service (Amazon S3)', 'Amazon Simple Notification Service (SNS)', 'Amazon Elastic Compute Cloud (Amazon EC2)', 'Amazon Elastic File System (Amazon EFS)']}
    answer={['Amazon Simple Storage Service (Amazon S3)', 'Amazon Elastic File System (Amazon EFS)']}
/>

const Component10 = () => <Question
    question={'Which of the following entities applies patches to the underlying OS for Amazon Aurora?'}
    options={['The AWS Product Team automatically', 'The AWS customer by using AWS Systems Manager', 'The AWS Support after receiving a request from the customer']}
    answer={'The AWS Product Team automatically'}
/>

const Component11 = () => <Question
    question={'According to the AWS Cloud Adoption Framework (AWS CAF), what are two tasks that a company should perform when planning to migrate to the AWS Cloud and aiming to become more responsive to customer inquiries and feedback as part of their organizational transformation? (Select two)'}
    options={['Organize your teams around products and value streams', 'Create new analytical insights with existing products and services', 'Organize your teams around bureaucratic design principles', 'Leverage agile methods to rapidly iterate and evolve', 'Leverage legacy infrastructure for cost efficiencies']}
    answer={['Organize your teams around products and value streams', 'Leverage agile methods to rapidly iterate and evolve']}
/>

const Component12 = () => <Question
    question={'A web application stores all of its data on Amazon S3 buckets. A client has mandated that data be encrypted before sending it to Amazon S3.'}
    options={['Enable server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)', 'Encryption is enabled by default for all the objects written to Amazon S3. Additional configuration is not required', 'Enable server-side encryption with Amazon S3 Managed Keys (SSE-S3)', 'Enable client-side encryption using AWS encryption SDK']}
    answer={'Enable server-side encryption with Amazon S3 Managed Keys (SSE-S3)'}
/>

const Component13 = () => <Question
    question={'Which of the following is an INCORRECT statement about Scaling, a design principle of Reliability pillar of the AWS Well-Architected Framework?'}
    options={['A scale out operation implies you scale by adding more instances to your existing pool of resources', 'Fault tolerance is achieved by a scale up operation', 'A scale up operation implies you scale by adding more power (CPU, RAM) to your existing machine/node', 'Fault tolerance is achieved by a scale out operation']}
    answer={'Fault tolerance is achieved by a scale up operation'}
/>

const Component14 = () => <Question
    question={'Compared to the on-demand instance prices, what is the highest possible discount offered for spot instances?'}
    options={['10', '90', '50', '75']}
    answer={'10'}
/>

const Component15 = () => <Question
    question={'A company uses reserved EC2 instances across multiple units with each unit having its own AWS account. However, some of the units under-utilize their reserved instances while other units need more reserved instances. As a Cloud Practitioner, which of the following would you recommend as the most cost-optimal solution?'}
    options={['Use AWS Trusted Advisor to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units', 'Use AWS Cost Explorer to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units', 'Use AWS Systems Manager to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units', 'Use AWS Organizations to manage AWS accounts of all unit']}
    answer={'Use AWS Organizations to manage AWS accounts of all unit'}
/>

const Component16 = () => <Question
    question={'A research group wants to use EC2 instances to run a scientific computation application that has a fault tolerant architecture. The application needs high-performance hardware disks that provide fast I/O performance. As a Cloud Practitioner, which of the following storage options would you recommend as the MOST cost-effective solution?'}
    options={['Amazon Elastic Block Store (EBS)', 'Amazon Simple Storage Service (Amazon S3)', 'Amazon Elastic File System (Amazon EFS)', 'Instance Store']}
    answer={'Instance Store'}
/>

const Component17 = () => <Question
    question={'The DevOps team at an e-commerce company is trying to debug performance issues for its serverless application built using a microservices architecture. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?'}
    options={['AWS Trusted Advisor', 'Amazon Pinpoint', 'AWS CloudFormation', 'AWS X-Ray']}
    answer={'AWS X-Ray'}
/>

const Component18 = () => <Question
    question={'The DevOps team at an IT company is moving 500 GB of data from an EC2 instance to an S3 bucket in the same region. Which of the following scenario captures the correct charges for this data transfer?'}
    options={['The company would be charged for both the outbound data transfer from EC2 instance as well as the inbound data transfer into the S3 bucket', 'The company would only be charged for the outbound data transfer from EC2 instance', 'The company would only be charged for the inbound data transfer into the S3 bucket', 'The company would not be charged for this data transfer']}
    answer={'The company would not be charged for this data transfer'}
/>

const Component19 = () => <Question
    question={'Which of the following AWS Support plans provide access to only core checks from the AWS Trusted Advisor Best Practice Checks? (Select two)'}
    options={['AWS Basic Support', 'AWS Business Support', 'AWS Enterprise On-Ramp Support', 'AWS Enterprise Support']}
    answer={['AWS Basic Support', 'AWS Business Support']}
/>

const Component20 = () => <Question
    question={'Which of the following is a benefit of using AWS managed services such as Amazon Relational Database Service (Amazon RDS)?'}
    options={['The customer needs to patch the underlying OS', 'There is no need to optimize database instance type and size', 'The customer needs to manage database backups', 'The performance of AWS managed Amazon Relational Database Service (Amazon RDS) instance is better than a customer-managed database instance']}
    answer={'The performance of AWS managed Amazon Relational Database Service (Amazon RDS) instance is better than a customer-managed database instance'}
/>

const Component21 = () => <Question
    question={'Which of the following are the advantages of cloud computing? (Select three)'}
    options={['Benefit from massive economies of scale', 'Spend money on building and maintaining data centers', 'Trade variable expense for capital expense', 'Allocate a few months of planning for your infrastructure capacity needs', 'Go global in minutes and deploy applications in multiple regions around the world with just a few clicks', 'Trade capital expense for variable expense']}
    answer={['Benefit from massive economies of scale', 'Go global in minutes and deploy applications in multiple regions around the world with just a few clicks', 'Trade capital expense for variable expense']}
/>

const Component22 = () => <Question
    question={'A company wants to improve the resiliency of its flagship application so it wants to move from its traditional database system to a managed AWS NoSQL database service to support active-active configuration in both the East and West US AWS regions. The active-active configuration with cross-region support is the prime criteria for any database solution that the company considers.'}
    options={['Amazon Aurora with multi-master clusters', 'Amazon DynamoDB with DynamoDB Accelerator', 'Amazon Relational Database Service (Amazon RDS) for MYSQL', 'Amazon DynamoDB with global tables']}
    answer={'Amazon DynamoDB with global tables'}
/>

const Component23 = () => <Question
    question={'A data analytics company is running a proprietary batch analytics application on AWS and wants to use a storage service which would be accessed by hundreds of EC2 instances simultaneously to append data to existing files. As a Cloud Practitioner, which AWS service would you suggest for this use-case?'}
    options={['Amazon Elastic Block Store (Amazon EBS)', 'Instance Store', 'Amazon Simple Storage Service (Amazon S3)', 'Amazon Elastic File System (Amazon EFS)']}
    answer={'Amazon Elastic File System (Amazon EFS)'}
/>

const Component24 = () => <Question
    question={'An e-commerce company has deployed an RDS database in a single Availability Zone (AZ). The engineering team wants to ensure that in case of an AZ outage, the database should continue working on the same endpoint without any manual administrative intervention. Which of the following solutions can address this use-case?'}
    options={['Deploy the database via AWS Elastic Beanstalk', 'Provision the database via AWS CloudFormation', 'Configure the database in RDS Multi-AZ deployment with automatic failover to the standby', 'Configure the database in RDS read replica mode with automatic failover to the standby']}
    answer={'Configure the database in RDS Multi-AZ deployment with automatic failover to the standby'}
/>

const Component25 = () => <Question
    question={'Which of the following is a recommended way to provide programmatic access to AWS resources?'}
    options={['Create a new IAM user and share the username and password', 'Use Access Key ID and Secret Access Key to access AWS resources programmatically', 'Use IAM user group to access AWS resources programmatically', 'Use AWS Multi-Factor Authentication (AWS MFA) to access AWS resources programmatically']}
    answer={'Use Access Key ID and Secret Access Key to access AWS resources programmatically'}
/>

const Component26 = () => <Question
    question={'Which of the following statements are CORRECT regarding the Availability Zone (AZ) specific characteristics of Amazon Elastic Block Store (EBS) and Amazon Elastic File System (Amazon EFS) storage types?'}
    options={['EBS volume can be attached to a single instance in the same Availability Zone (AZ) and EFS file system can only be mounted on instances in the same Availability Zone (AZ)', 'EBS volume can be attached to a single instance in the same Availability Zone (AZ) whereas EFS file system can be mounted on instances across multiple Availability Zones (AZ)', 'EBS volume can be attached to one or more instances in multiple Availability Zones (AZ) and EFS file system can be mounted on instances in the same Availability Zone (AZ)', 'EBS volume can be attached to one or more instances in multiple Availability Zones (AZ) and EFS file system can be mounted on instances across multiple Availability Zones (AZ)']}
    answer={'EBS volume can be attached to a single instance in the same Availability Zone (AZ) and EFS file system can only be mounted on instances in the same Availability Zone (AZ)'}
/>

const Component27 = () => <Question
    question={'A financial services company wants to ensure that its AWS account activity meets the governance, compliance and auditing norms. As a Cloud Practitioner, which AWS service would you recommend for this use-case?'}
    options={['AWS Config', 'AWS Trusted Advisor', 'AWS CloudTrail', 'Amazon CloudWatch']}
    answer={'AWS CloudTrail'}
/>

const Component28 = () => <Question
    question={'According to the AWS Shared Responsibility Model, which of the following are responsibilities of AWS? (Select two)'}
    options={['Replacing faulty hardware of Amazon EC2 instances', 'Creating IAM role for accessing Amazon EC2 instances', 'Creating S3 bucket policies for appropriate user access', 'Operating the infrastructure layer, the operating system and the platform for the Amazon S3 service', 'Enabling Multi Factor Authentication on AWS accounts in your organization']}
    answer={['Replacing faulty hardware of Amazon EC2 instances', 'Operating the infrastructure layer, the operating system and the platform for the Amazon S3 service']}
/>

const Component29 = () => <Question
    question={'Which AWS services can be used to decouple components of a microservices based application on AWS Cloud? (Select two)'}
    options={['AWS Step Functions', 'Amazon Elastic Compuconst te Cloud (Amazon EC2)', 'Amazon Simple Queue Service (SQS)', 'AWS Lambda', 'Amazon Simple Notification Service (SNS)']}
    answer={['Amazon Simple Queue Service (SQS)', 'Amazon Simple Notification Service (SNS)']}
/>
const Component30 = () => <Question
    question={'AWS Shield Advanced provides expanded DDoS attack protection for web applications running on which of the following resources? (Select two)'}
    options={['AWS Global Accelerator', 'Amazon Route 53', 'AWS CloudFormation', 'AWS Elastic Beanstalk', 'Amazon API Gateway']}
    answer={['AWS Global Accelerator', 'Amazon Route 53']}
/>

const Component31 = () => <Question
    question={'A medical research startup wants to understand the compliance of AWS services concerning HIPAA guidelines. Which AWS service can be used to review the HIPAA compliance and governance-related documents on AWS?'}
    options={['AWS Artifact', 'AWS Secrets Manager', 'AWS Systems Manager', 'AWS Trusted Advisor']}
    answer={'AWS Artifact'}
/>

const Component32 = () => <Question
    question={'Which of the following is a serverless AWS service?'}
    options={['AWS Lambda', 'Amazon EMR', 'Amazon Elastic Compute Cloud (Amazon EC2)', 'AWS Elastic Beanstalk']}
    answer={'AWS Lambda'}
/>

const Component33 = () => <Question
    question={'Which of the following is the MOST cost-effective option to purchase an EC2 Reserved Instance (RI)?'}
    options={['Partial upfront payment option with standard 3-years term', 'No upfront payment option with standard 3-years term', 'No upfront payment option with standard 1-year term', 'All upfront payment option with the standard 1-year term']}
    answer={'Partial upfront payment option with standard 3-years term'}
/>

const Component34 = () => <Question
    question={'A big data analytics company is moving its IT infrastructure from an on-premises data center to AWS Cloud. The company has some server-bound software licenses that it wants to use on AWS. As a Cloud Practitioner, which of the following EC2 instance types would you recommend to the company?'}
    options={['Reserved Instance (RI)', 'Dedicated Host', 'On-Demand Instance', 'Dedicated Instance']}
    answer={'Dedicated Host'}
/>

const Component35 = () => <Question
    question={'AWS Web Application Firewall (WAF) offers protection from common web exploits at which layer?'}
    options={['Layer 4 and 7', 'Layer 3', 'Layer 7', 'Layer 4']}
    answer={'Layer 7'}
/>

const Component36 = () => <Question
    question={'A multi-national company has just moved its infrastructure from its on-premises data center to AWS Cloud. As part of the shared responsibility model, AWS is responsible for which of the following?'}
    options={['Service and Communications Protection or Zone Security', 'Configuring customer applications', 'Physical and Environmental controls', 'Patching guest OS']}
    answer={['Physical and Environmental controls']}
/>

const Component37 = () => <Question
    question={'A company needs a storage solution for a project wherein the data is accessed less frequently but needs rapid access when required. Which S3 storage class is the MOST cost-effective for the given use-case?'}
    options={['Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)', 'Amazon S3 Standard-Infrequent Access (S3 Standard-IA)', 'Amazon S3 Glacier (S3 Glacier)', 'Amazon S3 Standard']}
    answer={'Amazon S3 Standard-Infrequent Access (S3 Standard-IA)'}
/>

const Component38 = () => <Question
    question={'Which AWS Route 53 routing policy would you use to route traffic to multiple resources and also choose how much traffic is routed to each resource?'}
    options={['latency-based routing', 'Weighted routing', 'Simple routing', 'Failover routing']}
    answer={'Weighted routing'}
/>

const Component39 = () => <Question
    question={'Which of the following are correct statements regarding the AWS Global Infrastructure? (Select two)'}
    options={['Each Availability Zone (AZ) consists of one or more discrete data centers', 'Each Availability Zone (AZ) consists of two or more discrete data centers', 'Each AWS Region consists of two or more Edge Locations', 'Each AWS Region consists of a minimum of three Availability Zones (AZ)', 'Each AWS Region consists of a minimum of two Availability Zones (AZ)']}
    answer={['Each Availability Zone (AZ) consists of one or more discrete data centers', 'Each AWS Region consists of a minimum of three Availability Zones (AZ)']}
/>

const Component40 = () => <Question
    question={'An intern at an IT company provisioned a Linux based On-demand EC2 instance with per-second billing but terminated it within 30 seconds as he wanted to provision another instance type. What is the duration for which the instance would be charged?'}
    options={['60 seconds', '300 seconds', '600 seconds', '30 seconds']}
    answer={'60 seconds'}
/>

const Component41 = () => <Question
    question={'Which AWS Support plan provides architectural guidance contextual to your specific use-cases?'}
    options={['AWS Business Support', 'AWS Developer Support', 'AWS Enterprise On-Ramp Support', 'AWS Enterprise Support']}
    answer={'AWS Business Support'}
/>

const Component42 = () => <Question
    question={'A startup wants to provision an EC2 instance for the lowest possible cost for a long-term duration but needs to make sure that the instance would never be interrupted. As a Cloud Practitioner, which of the following options would you recommend?'}
    options={['EC2 Reserved Instance (RI)', 'EC2 On-Demand Instance', 'EC2 Spot Instance', 'EC2 Dedicated Host']}
    answer={'EC2 Reserved Instance (RI)'}
/>

const Component43 = () => <Question
    question={'Which of the following AWS services support VPC Endpoint Gateway for a private connection from a VPC? (Select two)'}
    options={['Amazon Simple Queue Service (SQS)', 'Amazon Simple Notification Service (SNS)', 'Amazon Simple Storage Service (Amazon S3)', 'Amazon Elastic Compute Cloud (Amazon EC2)']}
    answer={['Amazon Simple Storage Service (Amazon S3)', 'Amazon DynamoDB']}
/>

const Component44 = () => <Question
    question={'A multi-national corporation wants to get expert professional advice on migrating to AWS and managing their applications on AWS Cloud. Which of the following entities would you recommend for this engagement?'}
    options={['AWS Trusted Advisor', 'Concierge Support Team', 'APN Technology Partner', 'APN Consulting Partner']}
    answer={'APN Consulting Partner'}
/>

const Component45 = () => <Question
    question={'Which option is a common stakeholder role for the AWS Cloud Adoption Framework (AWS CAF) platform perspective? (Select two)'}
    options={['Chief Technology Officer (CTO)', 'Chief Product Officer (CPO)', 'Chief Information Officer (CIO)', 'Chief Data Officer (CDO)', 'Engineer']}
    answer={['Chief Technology Officer (CTO)', 'Engineer']}
/>

const Component46 = () => <Question
    question={'Which of the following statements are CORRECT regarding the AWS VPC service? (Select two)'}
    options={['A network access control list (network ACL) can have allow rules only', 'A Security Group can have allow rules only', 'A Network Address Translation gateway (NAT gateway) is managed by AWS', 'A Security Group can have both allow and deny rules', 'A Network Address Translation instance (NAT instance) is managed by AWS']}
    answer={['A Security Group can have allow rules only', 'A Network Address Translation gateway (NAT gateway) is managed by AWS']}
/>

const Component47 = () => <Question
    question={'Which of the following AWS services has encryption enabled by default?'}
    options={['Amazon Elastic Block Store (Amazon EBS)', 'AWS CloudTrail Logs', 'Amazon Elastic File System (Amazon EFS)', 'Amazon Relational Database Service (Amazon RDS)']}
    answer={'Amazon Elastic Block Store (Amazon EBS)'}
/>

const Component48 = () => <Question
    question={'A silicon valley based healthcare startup stores anonymized patient health data on Amazon S3. The CTO further wants to ensure that any sensitive data on S3 is discovered and identified to prevent any sensitive data leaks. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?'}
    options={['AWS Secrets Manager', 'Amazon Polly', 'Amazon Macie', 'AWS Glue']}
    answer={'Amazon Macie'}
/>

const Component49 = () => <Question
    question={'A Project Manager, working on AWS for the first time, is confused about how credits are used in AWS. There are two credits available in the manager\'s account. Credit one is for $100, expires July 2022, and can be used for either Amazon S3 or Amazon EC2. Credit two is for $50, expires December 2022, and can be used only for Amazon EC2. The manager\'s AWS account has incurred two charges: $1000 for Amazon EC2 and $500 for Amazon S3. What happens to the credits?'}
    options={['Then, credit two is applied to $500 for Amazon S3 usage', 'Then, credit two is applied to the remaining $900 of Amazon EC2 usage', 'Credit one is applied, which expires in July, to Amazon S3 usage which leaves you with a $1000 Amazon EC2 charge and a $400 Amazon S3 charge', 'Only one credit can be used in one billing cycle and the customer has a choice to choose from the available ones', 'Credit one is applied, which expires in July, to the Amazon EC2 charge which leaves you with a $900 Amazon EC2 charge and a $500 Amazon S3 charge']}
    answer={['Only one credit can be used in one billing cycle and the customer has a choice to choose from the available ones', 'Credit one is applied, which expires in July, to the Amazon EC2 charge which leaves you with a $900 Amazon EC2 charge and a $500 Amazon S3 charge']}
/>

const Component50 = () => <Question
    question={'A company wants to move to AWS cloud and release new features with quick iterations by utilizing relevant AWS services whenever required. Which of the following characteristics of AWS Cloud does it want to leverage?'}
    options={['Agility', 'Reliability', 'Scalability', 'Elasticity']}
    answer={'Agility'}
/>

const Component51 = () => <Question
    question={'Which of the following AWS services support reservations to optimize costs? (Select three)'}
    options={['Amazon Elastic Compute Cloud (Amazon EC2)', 'Amazon DynamoDB', 'Amazon DocumentDB', 'AWS Lambda', 'Amazon Simple Storage Service (Amazon S3)', 'Amazon Relational Database Service (Amazon RDS)']}
    answer={['Amazon Elastic Compute Cloud (Amazon EC2)', 'Amazon DynamoDB', 'Amazon Relational Database Service (Amazon RDS)']}
/>

const Component52 = () => <Question
    question={'Which of the following is an AWS database service?'}
    options={['Amazon Redshift', 'AWS Storage Gateway', 'AWS Database Migration Service (AWS DMS)', 'AWS Glue']}
    answer={'Amazon Redshift'}
/>

const Component53 = () => <Question
    question={'A company wants to have control over creating and using its own keys for encryption on AWS services. Which of the following can be used for this use-case?'}
    options={['AWS Secrets Manager', 'customer managed key (CMK)', 'AWS owned key', 'AWS managed key']}
    answer={'customer managed key (CMK)'}
/>

const Component54 = () => <Question
    question={'A startup wants to migrate its data and applications from the on-premises data center to AWS Cloud. Which of the following options can be used by the startup to help with this migration? (Select two)'}
    options={['Use AWS Trusted Advisor to automate the infrastructure migration', 'Leverage AWS Professional Services to accelerate the infrastructure migration', 'Raise a support ticket with AWS Support for further assistance', 'Utilize AWS Partner Network (APN) to build a custom solution for this infrastructure migration']}
    answer={['Leverage AWS Professional Services to accelerate the infrastructure migration', 'Utilize AWS Partner Network (APN) to build a custom solution for this infrastructure migration']}
/>

const Component55 = () => <Question
    question={'Which of the following AWS services can be used to connect a company\'s on-premises environment to a VPC without using the public internet?'}
    options={['AWS Direct Connect', 'VPC Endpoint', 'AWS Site-to-Site VPN', 'Internet Gateway']}
    answer={'AWS Direct Connect'}
/>

const Component56 = () => <Question
    question={'Which AWS services can be used to facilitate organizational change management, part of the Reliability pillar of AWS Well-Architected Framework? (Select three)'}
    options={['Amazon CloudWatch', 'Amazon GuardDuty', 'Amazon Inspector', 'AWS Config', 'AWS CloudTrail']}
    answer={['AWS Config', 'Amazon CloudWatch', 'AWS CloudTrail']}
/>

const Component57 = () => <Question
    question={'Which of the following AWS Support plans provide access to guidance, configuration, and troubleshooting of AWS interoperability with third-party software? (Select two)'}
    options={['AWS Basic Support', 'AWS Corporate Support', 'AWS Developer Support', 'AWS Business Support', 'AWS Enterprise Support']}
    answer={['AWS Business Support', 'AWS Enterprise Support']}
/>

const Component58 = () => <Question
    question={'Which type of cloud computing does Amazon Elastic Compute Cloud (EC2) represent?'}
    options={['Infrastructure as a Service (IaaS)', 'Network as a Service (NaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)']}
    answer={'Infrastructure as a Service (IaaS)'}
/>

const Component59 = () => <Question
    question={'Under the AWS Shared Responsibility Model, which of the following is a shared responsibility of both AWS and the customer?'}
    options={['Guarantee data separation among various AWS customers', 'Availability Zone (AZ) infrastructure maintenance', 'Configuration Management', 'Infrastructure maintenance of Amazon Simple Storage Service (Amazon S3) storage servers']}
    answer={'Configuration Management'}
/>

const Component60 = () => <Question
    question={'Which of the following AWS services should be used to automatically distribute incoming traffic across multiple targets?'}
    options={['AWS Elastic Beanstalk', 'Amazon OpenSearch Service', 'AWS Elastic Load Balancing (ELB)', 'AWS Auto Scaling']}
    answer={'AWS Elastic Load Balancing (ELB)'}
/>

const Component61 = () => <Question
    question={'A unicorn startup is building an analytics application with support for a speech-based interface. The application will accept speech-based input from users and then convey results via speech. As a Cloud Practitioner, which solution would you recommend for the given use-case?'}
    options={[
        'Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Transcribe to convey the text results via speech',
        'Use Amazon Transcribe to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech',
        'Use Amazon Translate to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech',
        'Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Translate to convey the text results via speech'
    ]}
    answer={'Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Transcribe to convey the text results via speech'}
/>

const Component62 = () => <Question
    question={'A startup wants to set up its IT infrastructure on AWS Cloud. The CTO would like to get an estimate of the monthly AWS bill based on the AWS services that the startup wants to use. As a Cloud Practitioner, which AWS service would you suggest for this use-case?'}
    options={['AWS Cost Explorer', 'AWS Budgets', 'AWS Cost & Usage Report (AWS CUR)', 'AWS Pricing Calculator']}
    answer={'AWS Pricing Calculator'}
/>

const Component63 = () => <Question
    question={'An IT company is planning to migrate from an on-premises environment to AWS Cloud. Which of the following expense areas would result in cost savings when the company moves to AWS Cloud? (Select two)'}
    options={[
        'Data center physical security expenditure',
        'Developer salary',
        'Project manager salary',
        'Data center hardware infrastructure expenditure',
        'SaaS application license fee'
    ]}
    answer={['Data center physical security expenditure', 'Data center hardware infrastructure expenditure']}
/>

const Component64 = () => <Question
    question={'Which AWS service will help you receive alerts when the reservation utilization falls below the defined threshold?'}
    options={['AWS CloudTrail', 'AWS Trusted Advisor', 'AWS Budgets', 'AWS Pricing Calculator']}
    answer={'AWS Budgets'}
/>

const Component65 = () => <Question
    question={'Which of the following is CORRECT regarding removing an AWS account from AWS Organizations?'}
    options={[
        'Raise a support ticket with AWS Support to remove the account',
        'The AWS account must be able to operate as a standalone account. Only then it can be removed from AWS organizations',
        'The AWS account can be removed from AWS Systems Manager',
        'The AWS account must not have any Service Control Policies (SCPs) attached to it. Only then it can be removed from AWS organizations'
    ]}
    answer={'The AWS account must be able to operate as a standalone account. Only then it can be removed from AWS organizations'}
/>