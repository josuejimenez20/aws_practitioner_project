import React, { useState, useEffect } from 'react';
import Question from './Question';

export default function FourthExam() {
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


const Component1 = () => (
    <Question
        question={"An e-commerce company would like to receive alerts when the Amazon EC2 Reserved Instances (RI) utilization drops below a certain threshold. Which AWS service can be used to address this use-case?"}
        options={[
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Trusted Advisor",
            "AWS Systems Manager"
        ]}
        correctOption={'AWS Budgets'}
    />
);

const Component2 = () => (
    <Question
        question={"Which of the following AWS Support plans provide programmatic access to AWS Support Center features to create, manage and close your support cases?"}
        options={[
            "AWS Enterprise Support",
            "AWS Developer Support",
            "AWS Basic Support",
            "AWS Corporate Support",
            "AWS Business Support"
        ]}
        correctOption={'AWS Enterprise Support, AWS Business Support'}
    />
);

const Component3 = () => (
    <Question
        question={"AWS Shield Advanced provides expanded DDoS attack protection for web applications running on which of the following resources?"}
        options={[
            "Amazon CloudFront",
            "AWS Elastic Beanstalk",
            "Amazon Simple Storage Service (Amazon S3)",
            "AWS Identity and Access Management (AWS IAM)",
            "Amazon Elastic Compute Cloud (Amazon EC2)"
        ]}
        correctOption={'Amazon CloudFront, Amazon Simple Storage Service (Amazon S3)'}
    />
);

const Component4 = () => (
    <Question
        question={"A financial services company wants to migrate from its on-premises data center to AWS Cloud. As a Cloud Practitioner, which AWS service would you recommend so that the company can compare the cost of running their IT infrastructure on-premises vs AWS Cloud?"}
        options={[
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Trusted Advisor",
            "AWS Pricing Calculator"
        ]}
        correctOption={'AWS Pricing Calculator'}
    />
);

const Component5 = () => (
    <Question
        question={"Which AWS service will you use to provision the same AWS infrastructure across multiple AWS accounts and regions?"}
        options={[
            "AWS OpsWorks",
            "AWS Systems Manager",
            "AWS CodeDeploy",
            "AWS CloudFormation"
        ]}
        correctOption={'AWS CloudFormation'}
    />
);

const Component6 = () => (
    <Question
        question={"Which of the following AWS storage services can be directly used with on-premises systems?"}
        options={[
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon Simple Storage Service (Amazon S3)",
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon EC2 Instance Store"
        ]}
        correctOption={"Amazon Elastic File System (Amazon EFS), Amazon Simple Storage Service (Amazon S3)"}
    />
);

const Component7 = () => (
    <Question
        question={"Bob and Susan each have an AWS account in AWS Organizations. Susan has five Reserved Instances (RIs) of the same type and Bob has none. During one particular hour, Susan uses three instances and Bob uses six for a total of nine instances on the organization's consolidated bill."}
        options={[
            "AWS bills five instances as Reserved Instances, and the remaining four instances as regular instances",
            "Bob does not receive any cost-benefit since he hasn't purchased any Reserved Instance (RI). If his account has even one RI, then the cost-benefit from Susan's account is also added to his account",
            "Bob receives the cost-benefit from Susan's Reserved Instance (RI) only if he launches his instances in the same AWS Region where Susan purchased her Reserved Instances (RI)",
            "Bob receives the cost-benefit from Susan's Reserved Instances (RI) only if he launches his instances in the same Availability Zone (AZ) where Susan purchased her Reserved Instances"
        ]}
        correctOption={"AWS bills five instances as Reserved Instances, and the remaining four instances as regular instances, Bob receives the cost-benefit from Susan's Reserved Instances (RI) only if he launches his instances in the same Availability Zone (AZ) where Susan purchased her Reserved Instances"}
    />
);

const Component8 = () => (
    <Question
        question={"Which AWS service can be used to host a static website with the LEAST effort?"}
        options={[
            "AWS Storage Gateway",
            "Amazon Simple Storage Service (Amazon S3)",
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon S3 Glacier"
        ]}
        correctOption={"Amazon Simple Storage Service (Amazon S3)"}
    />
);

const Component9 = () => (
    <Question
        question={"Which AWS service can be used to set up billing alarms to monitor estimated charges on your AWS account?"}
        options={[
            "AWS Organizations",
            "Amazon CloudWatch",
            "AWS Cost Explorer",
            "AWS CloudTrail"
        ]}
        correctOption={"Amazon CloudWatch"}
    />
);

const Component10 = () => (
    <Question
        question={"Which entity ensures that your application on Amazon Elastic Compute Cloud (Amazon EC2) always has the right amount of capacity to handle the current traffic demand?"}
        options={[
            "Network Load Balancer",
            "Multi-AZ deployment",
            "Amazon EC2 Auto Scaling",
            "Application Load Balancer"
        ]}
        correctOption={"Amazon EC2 Auto Scaling"}
    />
);

const Component11 = () => (
    <Question
        question={"Which of the following is a container service of AWS?"}
        options={[
            "AWS Elastic Beanstalk",
            "AWS Fargate",
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon SageMaker"
        ]}
        correctOption={"AWS Elastic Beanstalk, AWS Fargate"}
    />
);

const Component12 = () => (
    <Question
        question={"Which pillar of AWS Well-Architected Framework is responsible for making sure that you select the right resource types and sizes based on your workload requirements?"}
        options={[
            "Operational Excellence",
            "Performance Efficiency",
            "Reliability",
            "Cost Optimization"
        ]}
        correctOption={"Performance Efficiency"}
    />
);

const Component13 = () => (
    <Question
        question={"Which AWS service would you choose for a data processing project that needs a schemaless database?"}
        options={[
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon RedShift",
            "Amazon DynamoDB",
            "Amazon Aurora"
        ]}
        correctOption={"Amazon DynamoDB"}
    />
);

const Component14 = () => (
    <Question
        question={"Which of the following types are free under the Amazon Simple Storage Service (Amazon S3) pricing model?"}
        options={[
            "Data storage fee for objects stored in S3 Glacier",
            "Data transferred out to an Amazon Elastic Compute Cloud (Amazon EC2) instance, when the instance is in the same AWS Region as the S3 bucket",
            "Data transferred in from the internet",
            "Data storage fee for objects stored in S3 Standard",
            "Data transferred out to an Amazon Elastic Compute Cloud (Amazon EC2) instance in any AWS Region"
        ]}
        correctOption={"Data transferred out to an Amazon Elastic Compute Cloud (Amazon EC2) instance, when the instance is in the same AWS Region as the S3 bucket, Data transferred in from the internet"}
    />
);

const Component15 = () => (
    <Question
        question={"Which benefit of Cloud Computing allows AWS to offer lower pay-as-you-go prices as usage from hundreds of thousands of customers is aggregated in the cloud?"}
        options={[
            "Go global in minutes",
            "Trade capital expense for variable expense",
            "Massive economies of scale",
            "Increased speed and agility"
        ]}
        correctOption={"Massive economies of scale"}
    />
);

const Component16 = () => (
    <Question
        question={"Amazon Elastic Compute Cloud (Amazon EC2) Spot instances are a best-fit for which of the following scenarios?"}
        options={[
            "To install cost-effective Amazon RDS database",
            "To run scheduled jobs (jobs that run at the same time every day)",
            "To run any containerized workload with Amazon Elastic Container Service (Amazon ECS) that can be interrupted",
            "To run batch processes for critical workloads"
        ]}
        correctOption={"To run scheduled jobs (jobs that run at the same time every day)"}
    />
);

const Component17 = () => (
    <Question
        question={"Which of the following are benefits of the AWS Web Application Firewall (AWS WAF)?"}
        options={[
            "AWS Web Application Firewall (AWS WAF) can block all requests except the ones that you allow",
            "AWS Web Application Firewall (AWS WAF) offers dedicated support from the DDoS Response Team (DRT) and advanced reporting",
            "AWS Web Application Firewall (AWS WAF) can check for the presence of SQL code that is likely to be malicious (known as SQL injection)",
            "AWS Web Application Firewall (AWS WAF) offers protection against all known infrastructure (Layer 3 and 4) attacks",
            "AWS Web Application Firewall (AWS WAF) lets you monitor the HTTP and HTTPS requests that are forwarded to Amazon Route 53"
        ]}
        correctOption={"AWS Web Application Firewall (AWS WAF) can block all requests except the ones that you allow, AWS Web Application Firewall (AWS WAF) can check for the presence of SQL code that is likely to be malicious (known as SQL injection)"}
    />
);

const Component18 = () => (
    <Question
        question={"The DevOps team at an IT company wants to centrally manage its servers on AWS Cloud as well as on-premise data center so that it can collect software inventory, run commands, configure and patch servers at scale. As a Cloud Practitioner, which AWS service would you recommend for this use-case?"}
        options={[
            "AWS Systems Manager",
            "AWS OpsWorks",
            "AWS Config",
            "AWS CloudFormation"
        ]}
        correctOption={"AWS Systems Manager"}
    />
);

const Component19 = () => (
    <Question
        question={"A financial services company wants to ensure that all customer data uploaded on its data lake on Amazon Simple Storage Service (Amazon S3) always stays private. Which of the following is the MOST efficient solution to address this compliance requirement?"}
        options={[
            "Use Amazon S3 Block Public Access to ensure that all Amazon S3 resources stay private",
            "Use Amazon CloudWatch to ensure that all Amazon S3 resources stay private",
            "Set up a high-level advisory committee to review the privacy settings of each object uploaded into Amazon S3",
            "Trigger a lambda function every time an object is uploaded on Amazon S3. The lambda function should change the object settings to make sure it stays private"
        ]}
        correctOption={"Use Amazon S3 Block Public Access to ensure that all Amazon S3 resources stay private"}
    />
);

const Component20 = () => (
    <Question
        question={"A social media analytics company wants to migrate to a serverless stack on AWS. Which of the following scenarios can be handled by AWS Lambda?"}
        options={[
            "AWS Lambda can be used to execute code in response to events such as updates to DynamoDB tables",
            "AWS Lambda can be used to store sensitive environment variables",
            "You can install Container Services on AWS Lambda",
            "You can install low latency databases on AWS Lambda"
        ]}
        correctOption={"AWS Lambda can be used to execute code in response to events such as updates to DynamoDB tables"}
    />
);

const Component21 = () => (
    <Question
        question={"Which AWS service would you use to create a logically isolated section of the AWS Cloud where you can launch AWS resources in your virtual network?"}
        options={[
            "Subnet",
            "Virtual private Cloud (VPC)",
            "Virtual Private Network (VPN)",
            "Network Access Control List (Network ACL)"
        ]}
        correctOption={"Virtual private Cloud (VPC)"}
    />
);

const Component22 = () => (
    <Question
        question={"A social media company wants to have the MOST cost-optimal strategy for deploying Amazon Elastic Compute Cloud (Amazon EC2) instances. As a Cloud Practitioner, which of the following options would you recommend?"}
        options={[
            "Use On-Demand Instances to run applications with a predictable usage over the next one year",
            "Use Reserved Instances (RI) for ad-hoc jobs that can be interrupted",
            "Use Spot Instances for ad-hoc jobs that can be interrupted",
            "Use On-Demand Instances for ad-hoc jobs that can be interrupted"
        ]}
        correctOption={"Use Reserved Instances (RI) for ad-hoc jobs that can be interrupted, Use Spot Instances for ad-hoc jobs that can be interrupted"}
    />
);

const Component23 = () => (
    <Question
        question={"Which Amazon Route 53 routing policy would you use to route traffic to a single resource such as a web server for your website?"}
        options={[
            "Weighted routing",
            "Latency-based routing",
            "Simple routing",
            "Failover routing"
        ]}
        correctOption={"Simple routing"}
    />
);

const Component24 = () => (
    <Question
        question={"As per the AWS Shared Responsibility Model, which of the following is a responsibility of AWS from a security and compliance point of view?"}
        options={[
            "Patching guest OS and applications",
            "Patching networking infrastructure",
            "Identity and Access Management",
            "Service and Communications Protection"
        ]}
        correctOption={"Patching guest OS and applications"}
    />
);

const Component25 = () => (
    <Question
        question={"Which of the following describes an Availability Zone (AZ) in the AWS Cloud?"}
        options={[
            "One or more data centers in multiple locations",
            "One or more server racks in multiple locations",
            "One or more data centers in the same location",
            "One or more server racks in the same location"
        ]}
        correctOption={"One or more data centers in the same location"}
    />
);

const Component26 = () => (
    <Question
        question={"Which AWS service will help you deploy application code automatically to an Amazon Elastic Compute Cloud (Amazon EC2) instance?"}
        options={[
            "AWS CodeBuild",
            "AWS CodeDeploy",
            "AWS CloudFormation",
            "AWS Elastic Beanstalk"
        ]}
        correctOption={"AWS CodeDeploy"}
    />
);

const Component27 = () => (
    <Question
        question={"As per the AWS Shared Responsibility Model, Security and Compliance is a shared responsibility between AWS and the customer. Which of the following security services/utilities falls under the purview of AWS under the AWS Shared Responsibility Model?"}
        options={[
            "Security group",
            "AWS Web Application Firewall (AWS WAF)",
            "AWS Shield Standard",
            "AWS Shield Advanced"
        ]}
        correctOption={"AWS Web Application Firewall (AWS WAF), AWS Shield Standard"}
    />
);

const Component28 = () => (
    <Question
        question={"Which of the following are recommended security best practices for the AWS account root user?"}
        options={[
            "Enable multi-factor authentication (MFA) for the AWS account root user",
            "Disable multi-factor authentication (MFA) for the AWS account root user as it can lock the entire AWS account if the multi-factor authentication (MFA) device is lost",
            "Share AWS account root user access keys with other administrators",
            "Set up an IAM user with administrator permissions and do not use AWS account root user for administrative tasks",
            "Keep your AWS account root user access keys in an encrypted file on Amazon S3"
        ]}
        correctOption={"Enable multi-factor authentication (MFA) for the AWS account root user, Set up an IAM user with administrator permissions and do not use AWS account root user for administrative tasks"}
    />
);

const Component29 = () => (
    <Question
        question={"The QA team at a company wants a tool/service that can provide access to different mobile devices with variations in firmware and Operating System versions."}
        options={[
            "AWS CodePipeline",
            "AWS Device Farm",
            "AWS Mobile Farm",
            "AWS Elastic Beanstalk"
        ]}
        correctOption={"AWS Device Farm"}
    />
);

const Component30 = () => (
    <Question
        question={"Which of the following AWS authentication mechanisms supports an AWS Multi-Factor Authentication (AWS MFA) device that you can plug into a USB port on your computer?"}
        options={[
            "U2F security key",
            "Hardware Multi-Factor Authentication (AWS MFA) device",
            "SMS text message-based Multi-Factor Authentication (AWS MFA)",
            "Virtual Multi-Factor Authentication (AWS MFA) device"
        ]}
        correctOption={"U2F security key"}
    />
);

const Component31 = () => (
    <Question
        question={"Which of the following entities should be used for an Amazon Elastic Compute Cloud (Amazon EC2) Instance to access a DynamoDB table?"}
        options={[
            "AWS Key Management Service (KMS)",
            "Amazon Cognito",
            "AWS IAM user access keys",
            "IAM role"
        ]}
        correctOption={"IAM role"}
    />
);

const Component32 = () => (
    <Question
        question={"Which of the following entities are part of an Amazon Virtual Private Cloud (Amazon VPC) in the AWS Cloud? (Select two)"}
        options={[
            "AWS Storage Gateway",
            "Object",
            "API Gateway",
            "Internet Gateway"
        ]}
        correctOption={"Internet Gateway"}
    />
);

const Component33 = () => (
    <Question
        question={"An e-commerce company has migrated its IT infrastructure from the on-premises data center to AWS Cloud. Which of the following costs is the company responsible for?"}
        options={[
            "AWS Data Center physical security costs",
            "Application software license costs",
            "Costs for hardware infrastructure on AWS Cloud",
            "Costs for powering servers on AWS Cloud"
        ]}
        correctOption={"Application software license costs, Costs for powering servers on AWS Cloud"}
    />
);

const Component34 = () => (
    <Question
        question={"A media company uploads its media (audio and video) files to a centralized Amazon Simple Storage Service (Amazon S3) bucket from geographically dispersed locations. Which of the following solutions can the company use to optimize transfer speeds?"}
        options={[
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "AWS Direct Connect",
            "Amazon S3 Transfer Acceleration (S3TA)"
        ]}
        correctOption={"Amazon S3 Transfer Acceleration (S3TA)"}
    />
);

const Component35 = () => (
    <Question
        question={"Which of the following entities can be used to connect to an Amazon Elastic Compute Cloud (Amazon EC2) server from a Mac OS, Windows or Linux based computer via a browser-based client?"}
        options={[
            "Amazon EC2 Instance Connect",
            "SSH",
            "AWS Direct Connect",
            "Putty"
        ]}
        correctOption={"Amazon EC2 Instance Connect"}
    />
);

const Component36 = () => (
    <Question
        question={"A cargo shipping company runs its server fleet on Amazon Elastic Compute Cloud (Amazon EC2) instances. Some of these instances host the CRM (Customer Relationship Management) applications that need to be accessible 24*7. These applications are not mission-critical. In case of a disaster, these applications can be managed on a lesser number of instances for some time."}
        options={[
            "Warm Standby strategy",
            "Backup & Restore strategy",
            "Pilot Light strategy",
            "Multi-site active-active strategy"
        ]}
        correctOption={"Warm Standby strategy"}
    />
);

const Component37 = () => (
    <Question
        question={"Which of the following can you use to run a bootstrap script while launching an Amazon Elastic Compute Cloud (Amazon EC2) instance?"}
        options={[
            "Amazon EC2 instance configuration data",
            "Amazon EC2 instance metadata",
            "Amazon EC2 instance user data",
            "Amazon EC2 instance AMI data"
        ]}
        correctOption={"Amazon EC2 instance user data"}
    />
);

const Component38 = () => (
    <Question
        question={"An e-commerce company wants to review the Payment Card Industry (PCI) reports on AWS Cloud. Which AWS resource can be used to address this use-case?"}
        options={[
            "AWS Cost & Usage Report (AWS CUR)",
            "AWS Secrets Manager",
            "AWS Trusted Advisor",
            "AWS Artifact"
        ]}
        correctOption={"AWS Artifact"}
    />
);

const Component39 = () => (
    <Question
        question={"Which of the following statements are CORRECT regarding AWS Global Accelerator? (Select two)"}
        options={[
            "AWS Global Accelerator provides static IP addresses that act as a fixed entry point to your applications",
            "AWS Global Accelerator cannot be configured with an Elastic Load Balancer (ELB)",
            "AWS Global Accelerator is a good fit for non-HTTP use cases",
            "AWS Global Accelerator uses the AWS global network and its edge locations. But the edge locations used by Global Accelerator are different from Amazon CloudFront edge locations"
        ]}
        correctOption={"AWS Global Accelerator provides static IP addresses that act as a fixed entry point to your applications, AWS Global Accelerator is a good fit for non-HTTP use cases"}
    />
);

const Component40 = () => (
    <Question
        question={"Which AWS service can help you analyze your infrastructure to identify unattached or underutilized Amazon EBS Elastic Volumes?"}
        options={[
            "Amazon CloudWatch",
            "AWS Config",
            "AWS Trusted Advisor",
            "Amazon Inspector"
        ]}
        correctOption={"AWS Trusted Advisor"}
    />
);

const Component41 = () => (
    <Question
        question={"Which of the following Amazon Simple Storage Service (Amazon S3) storage classes do not charge any data retrieval fee? (Select two)"}
        options={[
            "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)",
            "Amazon S3 Intelligent-Tiering",
            "Amazon S3 Standard",
            "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)",
            "Amazon S3 Glacier Flexible Retrieval"
        ]}
        correctOption={"Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA), Amazon S3 Intelligent-Tiering"}
    />
);

const Component42 = () => (
    <Question
        question={"AWS Marketplace facilitates which of the following use-cases? (Select two)"}
        options={[
            "Buy Amazon EC2 Standard Reserved Instances (RI)",
            "AWS customer can buy software that has been bundled into customized Amazon Machine Image (AMIs) by the AWS Marketplace sellers",
            "Sell Software as a Service (SaaS) solutions to AWS customers",
            "Purchase compliance documents from third-party vendors",
            "Raise request for purchasing AWS Direct Connect connection"
        ]}
        correctOption={"AWS customer can buy software that has been bundled into customized Amazon Machine Image (AMIs) by the AWS Marketplace sellers, Buy Amazon EC2 Standard Reserved Instances (RI)"}
    />
);

const Component43 = () => (
    <Question
        question={"How is Amazon EC2 different from traditional hosting systems? (Select two)"}
        options={[
            "Amazon EC2 provides a pre-configured instance for a fixed monthly cost",
            "Amazon EC2 caters more towards groups of users with similar system requirements so that the server resources are shared across multiple users and the cost is reduced",
            "Amazon EC2 can scale with changing computing requirements",
            "With Amazon EC2, developers can launch and terminate the instances anytime they need to",
            "With Amazon EC2, users risk overbuying resources"
        ]}
        correctOption={"Amazon EC2 can scale with changing computing requirements, With Amazon EC2, developers can launch and terminate the instances anytime they need to"}
    />
);

const Component44 = () => (
    <Question
        question={"A digital media company wants to convert English language subtitles into Spanish language subtitles. As a Cloud Practitioner, which AWS service would you recommend for this use-case?"}
        options={[
            "Amazon Transcribe",
            "Amazon Rekognition",
            "Amazon Translate",
            "Amazon Polly"
        ]}
        correctOption={"Amazon Translate"}
    />
);

const Component45 = () => (
    <Question
        question={"The DevOps team at a Big Data consultancy has set up Amazon Elastic Compute Cloud (Amazon EC2) instances across two AWS Regions for its flagship application. Which of the following characterizes this application architecture?"}
        options={[
            "Deploying the application across two AWS Regions improves availability",
            "Deploying the application across two AWS Regions improves agility",
            "Deploying the application across two AWS Regions improves scalability",
            "Deploying the application across two AWS Regions improves security"
        ]}
        correctOption={"Deploying the application across two AWS Regions improves availability"}
    />
);

const Component46 = () => (
    <Question
        question={"Which of the following are the serverless computing services offered by AWS? (Select two)"}
        options={[
            "AWS Lambda",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "AWS Fargate",
            "AWS Elastic Beanstalk"
        ]}
        correctOption={"AWS Lambda, AWS Fargate"}
    />
);

const Component47 = () => (
    <Question
        question={"Which of the following Amazon Simple Storage Service (Amazon S3) storage classes has NO constraint of a minimum storage duration charge for objects?"}
        options={[
            "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)",
            "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)",
            "Amazon S3 Glacier Flexible Retrieval",
            "Amazon S3 Standard"
        ]}
        correctOption={"Amazon S3 Standard"}
    />
);

const Component48 = () => (
    <Question
        question={"Which of the following is the best practice for application architecture on AWS Cloud?"}
        options={[
            "Use synchronous communication between components",
            "Build loosely coupled components",
            "Build monolithic applications",
            "Build tightly coupled components"
        ]}
        correctOption={"Build loosely coupled components"}
    />
);

const Component49 = () => (
    <Question
        question={"A multi-national organization has a separate virtual private cloud (VPC) for each of its business units on the AWS Cloud. The organization also wants to connect its on-premises data center with the different virtual private clouds (VPC) for better organization-wide collaboration. Which AWS services can be combined to build the MOST efficient solution for this use-case? (Select two)"}
        options={[
            "AWS Transit Gateway",
            "AWS Direct Connect",
            "AWS Storage Gateway",
            "VPC peering connection",
            "Internet Gateway"
        ]}
        correctOption={"AWS Transit Gateway, AWS Direct Connect"}
    />
);

const Component50 = () => (
    <Question
        question={"Which of the following statements are true regarding Amazon Simple Storage Service (Amazon S3) (Select two)?"}
        options={[
            "Amazon Simple Storage Service (Amazon S3) is a key value based object storage service",
            "You can install databases on Amazon Simple Storage Service (Amazon S3)",
            "Amazon Simple Storage Service (Amazon S3) is a fully managed, elastic file system storage service used as database backup",
            "Amazon Simple Storage Service (Amazon S3) stores data in a flat non-hierarchical structure",
            "Amazon Simple Storage Service (Amazon S3) is a block storage service designed for a broad range of workloads"
        ]}
        correctOption={"Amazon Simple Storage Service (Amazon S3) is a key value based object storage service, Amazon Simple Storage Service (Amazon S3) stores data in a flat non-hierarchical structure"}
    />
);

const Component51 = () => (
    <Question
        question={"Which of the following AWS services can be used to forecast your AWS account usage and costs?"}
        options={[
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Cost & Usage Report (AWS CUR)",
            "AWS Cost Explorer"
        ]}
        correctOption={"AWS Cost Explorer"}
    />
);

const Component52 = () => (
    <Question
        question={"Which of the following is available across all AWS Support plans?"}
        options={[
            "AWS Health Dashboard – Your account health",
            "Full set of AWS Trusted Advisor best practice checks",
            "Third-Party Software Support",
            "Enhanced Technical Support with unlimited cases and unlimited contacts"
        ]}
        correctOption={"AWS Health Dashboard – Your account health"}
    />
);

const Component53 = () => (
    <Question
        question={"Which of the following AWS entities lists all users in your account and the status of their various account aspects such as passwords, access keys, and MFA devices?"}
        options={[
            "Amazon Inspector",
            "AWS Cost & Usage Report (AWS CUR)",
            "AWS Trusted Advisor",
            "Credentials Report"
        ]}
        correctOption={"Credentials Report"}
    />
);

const Component54 = () => (
    <Question
        question={"Which of the following is correct regarding the Amazon Relational Database Service (Amazon RDS) service?"}
        options={[
            "You can use both read replicas and multi-AZ deployment having single standby for improved read performance",
            "You can use read replicas for improved read performance only and multi-AZ deployment for disaster recovery only",
            "You can use read replicas for disaster recovery only and multi-AZ deployment for improved read performance only",
            "You can use both read replicas and multi-AZ deployment for disaster recovery"
        ]}
        correctOption={"You can use both read replicas and multi-AZ deployment for disaster recovery"}
    />
);

const Component55 = () => (
    <Question
        question={"According to the AWS Shared Responsibility Model, which of the following are responsibilities of the customer for AWS Identity and Access Management (AWS IAM)? (Select two)"}
        options={[
            "Configuration and vulnerability analysis for the underlying software infrastructure",
            "Manage global network security infrastructure",
            "Analyze user access patterns and review AWS Identity and Access Management (AWS IAM) permissions",
            "Compliance validation for the underlying software infrastructure",
            "Enable multi-factor authentication (MFA) on all accounts"
        ]}
        correctOption={"Analyze user access patterns and review AWS Identity and Access Management (AWS IAM) permissions, Enable multi-factor authentication (MFA) on all accounts"}
    />
);

const Component56 = () => (
    <Question
        question={"Which of the following is the MOST cost-effective Amazon Elastic Compute Cloud (Amazon EC2) instance purchasing option for short-term, spiky and critical workloads on AWS Cloud?"}
        options={[
            "Spot Instance",
            "Reserved Instance (RI)",
            "Dedicated Host",
            "On-Demand Instance"
        ]}
        correctOption={"On-Demand Instance"}
    />
);

const Component57 = () => (
    <Question
        question={"Reserved Instance (RI) pricing is available for which of the following AWS services? (Select two)"}
        options={[
            "Amazon CloudFront",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon Simple Storage Service (Amazon S3)",
            "AWS Identity and Access Management (AWS IAM)"
        ]}
        correctOption={"Amazon Elastic Compute Cloud (Amazon EC2), Amazon Relational Database Service (Amazon RDS)"}
    />
);

const Component58 = () => (
    <Question
        question={"AWS Organizations provides which of the following benefits? (Select two)"}
        options={[
            "Check vulnerabilities on Amazon EC2 instances across the member AWS accounts",
            "Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts",
            "Deploy patches on Amazon EC2 instances across the member AWS accounts",
            "Provision Amazon EC2 Spot instances across the member AWS accounts",
            "Share the reserved Amazon EC2 instances amongst the member AWS accounts"
        ]}
        correctOption={"Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts, Share the reserved Amazon EC2 instances amongst the member AWS accounts"}
    />
);

const Component59 = () => (
    <Question
        question={"Which AWS entity enables you to privately connect your Amazon Virtual Private Cloud (Amazon VPC) to an Amazon Simple Queue Service (Amazon SQS) queue?"}
        options={[
            "AWS Direct Connect",
            "VPC Gateway Endpoint",
            "VPC Interface Endpoint",
            "Internet Gateway"
        ]}
        correctOption={"VPC Interface Endpoint"}
    />
);

const Component60 = () => (
    <Question
        question={"Which AWS services can be used together to send alerts whenever the AWS account root user signs in? (Select two)"}
        options={[
            "Amazon CloudWatch",
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon Simple Queue Service (Amazon SQS)",
            "AWS Lambda"
        ]}
        correctOption={"Amazon CloudWatch, Amazon Simple Notification Service (Amazon SNS)"}
    />
);

const Component61 = () => (
    <Question
        question={"Which of the following AWS services offers Lifecycle configuration for cost-optimal storage?"}
        options={[
            "Amazon Elastic Block Store (Amazon EBS)",
            "AWS Storage Gateway",
            "Amazon Simple Storage Service (Amazon S3)",
            "Amazon EC2 Instance Store"
        ]}
        correctOption={"Amazon Simple Storage Service (Amazon S3)"}
    />
);

const Component62 = () => (
    <Question
        question={"An organization maintains a separate Virtual Private Cloud (VPC) for each of its business units. Two units need to privately share data. Which is the most optimal way of privately sharing data between the two VPCs?"}
        options={[
            "VPC peering connection",
            "VPC Endpoint",
            "AWS Site-to-Site VPN",
            "AWS Direct Connect"
        ]}
        correctOption={"VPC peering connection"}
    />
);

const Component63 = () => (
    <Question
        question={"A firm wants to maintain the same data on Amazon Simple Storage Service (Amazon S3) between its production account and multiple test accounts. Which technique should you choose to copy data into multiple test accounts while retaining object metadata?"}
        options={[
            "Amazon S3 Replication",
            "Amazon S3 Bucket Policy",
            "Amazon S3 Storage Classes",
            "Amazon S3 Transfer Acceleration (Amazon S3TA)"
        ]}
        correctOption={"Amazon S3 Replication"}
    />
);

const Component64 = () => (
    <Question
        question={"AWS Trusted Advisor can provide alerts on which of the following common security misconfigurations? (Select two)?"}
        options={[
            "When you don't turn on user activity logging (AWS CloudTrail)",
            "When you don't tag objects in Amazon S3 buckets",
            "When you share IAM user credentials with others",
            "When you allow public access to Amazon S3 buckets",
            "When you don't enable data encryption on Amazon S3 Glacier"
        ]}
        correctOption={"When you don't turn on user activity logging (AWS CloudTrail), When you allow public access to Amazon S3 buckets"}
    />
);

const Component65 = () => (
    <Question
        question={"Which of the following is best-suited for load-balancing HTTP and HTTPS traffic?"}
        options={[
            "Application Load Balancer",
            "System Load Balancer",
            "Network Load Balancer",
            "AWS Auto Scaling"
        ]}
        correctOption={"Application Load Balancer"}
    />
);


