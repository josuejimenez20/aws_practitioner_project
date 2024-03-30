import React, { useState, useEffect } from 'react';
import Question from './Question';

export default function FivethExam() {
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
        question="A company needs to keep sensitive data in its own data center due to compliance but would still like to deploy resources using AWS. Which Cloud deployment model does this refer to?"
        options={[
            "Private Cloud",
            "Hybrid Cloud",
            "On-premises",
            "Public Cloud"
        ]}
        correctOption="Private Cloud"
    />
);

const Component2 = () => (
    <Question
        question="According to the AWS Well-Architected Framework, which of the following statements are recommendations in the Operational Excellence pillar? (Select two)"
        options={[
            "Make frequent, small, reversible changes",
            "Automatically recover from failure",
            "Anticipate failure",
            "Enable traceability",
            "Use serverless architectures"
        ]}
        correctOption="Make frequent, small, reversible changes, Anticipate failure"
    />
);

const Component3 = () => (
    <Question
        question="Which of the following options is NOT a feature of Amazon Inspector?"
        options={[
            "Track configuration changes",
            "Inspect running operating systems (OS) against known vulnerabilities",
            "Automate security assessments",
            "Analyze against unintended network accessibility"
        ]}
        correctOption="Track configuration changes"
    />
);

const Component4 = () => (
    <Question
        question="Which AWS service can be used to send, store, and receive messages between software components at any volume to decouple application tiers?"
        options={[
            "AWS Organizations",
            "Amazon Simple Notification Service (Amazon SNS)",
            "AWS Elastic Beanstalk",
            "Amazon Simple Queue Service (Amazon SQS)"
        ]}
        correctOption="Amazon Simple Queue Service (Amazon SQS)"
    />
);

const Component5 = () => (
    <Question
        question="Which of the following services are provided by Amazon Route 53? (Select Two)"
        options={[
            "Load balancing",
            "IP routing",
            "Transfer acceleration",
            "Health checks and monitoring"
        ]}
        correctOption="IP routing, Health checks and monitoring"
    />
);

const Component6 = () => (
    <Question
        question="A data science team would like to build Machine Learning models for its projects. Which AWS service can it use?"
        options={[
            "Amazon Comprehend",
            "Amazon Connect",
            "Amazon Polly",
            "Amazon SageMaker"
        ]}
        correctOption="Amazon SageMaker"
    />
);

const Component7 = () => (
    <Question
        question="A company would like to create a private, high bandwidth network connection between its on-premises data centers and AWS Cloud. As a Cloud Practitioner, which of the following options would you recommend?"
        options={[
            "VPC peering connection",
            "AWS Direct Connect",
            "AWS Site-to-Site VPN",
            "VPC Endpoints"
        ]}
        correctOption="AWS Direct Connect"
    />
);

const Component8 = () => (
    <Question
        question="According to the AWS Shared Responsibility Model, which of the following is both the responsibility of AWS and the customer? (Select two)"
        options={[
            "Configuration management",
            "Customer data",
            "Operating system (OS) configuration",
            "Data center security",
            "Disposal of disk drives"
        ]}
        correctOption="Customer data, Operating system (OS) configuration"
    />
);

const Component9 = () => (
    <Question
        question="Which of the following AWS services can be used to generate, use, and manage encryption keys on the AWS Cloud?"
        options={[
            "AWS CloudHSM",
            "AWS GuardDuty",
            "AWS Secrets Manager",
            "Amazon Inspector"
        ]}
        correctOption="AWS CloudHSM"
    />
);

const Component10 = () => (
    <Question
        question={"Which AWS tool/service will help you define your cloud infrastructure using popular programming languages such as Python and JavaScript?"}
        options={[
            "AWS Cloud Development Kit (AWS CDK)",
            "AWS CodeBuild",
            "AWS CloudFormation",
            "AWS Elastic Beanstalk"
        ]}
        correctOption={"AWS Cloud Development Kit (AWS CDK)"}
    />
);

const Component11 = () => (
    <Question
        question={"A company would like to move its infrastructure to AWS Cloud. Which of the following should be included in the Total Cost of Ownership (TCO) estimate? (Select TWO)"}
        options={[
            "Application advertising",
            "Power/Cooling",
            "Electronic equipment at office",
            "Server administration",
            "Number of end-users"
        ]}
        correctOption={"Power/Cooling, Server administration"}
    />
);

const Component12 = () => (
    <Question
        question={"Which of the following criteria are used to calculate the charge for Amazon EBS Volumes? (Select Two)"}
        options={[
            "The Amazon EC2 instance type the Amazon EBS Elastic volume is attached to",
            "Data transfer IN",
            "Provisioned IOPS",
            "Volume type",
            "Data type"
        ]}
        correctOption={"Provisioned IOPS, Volume type"}
    />
);

const Component13 = () => (
    <Question
        question={"Which of the following statements is CORRECT regarding the scope of an Amazon Virtual Private Cloud (VPC)?"}
        options={[
            "A VPC spans all Availability Zones (AZs) in all AWS regions",
            "Amazon VPC spans all subnets in all AWS regions",
            "A VPC spans all Availability Zones (AZs) within an AWS region",
            "A VPC spans all AWS regions within an Availability Zone (AZ)"
        ]}
        correctOption={"A VPC spans all Availability Zones (AZs) within an AWS region"}
    />
);

const Component14 = () => (
    <Question
        question={"An engineering team would like to cost-effectively run hundreds of thousands of batch computing workloads on AWS. As a Cloud Practitioner, which AWS service would you use for this task?"}
        options={[
            "AWS Lambda",
            "Amazon Lightsail",
            "AWS Fargate",
            "AWS Batch"
        ]}
        correctOption={"AWS Batch"}
    />
);

const Component15 = () => (
    <Question
        question={"Which of the following statements is INCORRECT regarding Amazon EBS Elastic Volumes?"}
        options={[
            "Amazon EBS Elastic Volumes can be bound to several Availability Zones (AZs)",
            "Amazon EBS Elastic Volumes can be mounted to one instance at a time",
            "Amazon EBS Elastic Volumes can persist data after their termination",
            "Amazon EBS Elastic Volumes are bound to a specific Availability Zone (AZ)"
        ]}
        correctOption={"Amazon EBS Elastic Volumes can be bound to several Availability Zones (AZs)"}
    />
);

const Component16 = () => (
    <Question
        question={"Which service/tool will you use to create and provide trusted users with temporary security credentials that can control access to your AWS resources?"}
        options={[
            "AWS IAM Identity Center",
            "AWS Web Application Firewall (AWS WAF)",
            "Amazon Cognito",
            "AWS Security Token Service (AWS STS)"
        ]}
        correctOption={"AWS Security Token Service (AWS STS)"}
    />
);

const Component17 = () => (
    <Question
        question={"A developer would like to automate operations on his on-premises environment using Chef and Puppet. Which AWS service can help with this task?"}
        options={[
            "AWS CloudFormation",
            "AWS Batch",
            "AWS CodeDeploy",
            "AWS OpsWorks"
        ]}
        correctOption={"AWS OpsWorks"}
    />
);

const Component18 = () => (
    <Question
        question={"A media company wants to enable customized content suggestions for the users of its movie streaming platform. Which AWS service can provide these personalized recommendations based on historic data?"}
        options={[
            "Amazon Comprehend",
            "Amazon Personalize",
            "Amazon Customize",
            "Amazon SageMaker"
        ]}
        correctOption={"Amazon Personalize"}
    />
);

const Component19 = () => (
    <Question
        question={"Which of the following AWS Support plans is the MOST cost-effective when getting enhanced technical support by Cloud Support Engineers?"}
        options={[
            "AWS Developer Support",
            "AWS Basic Support",
            "AWS Enterprise Support",
            "AWS Business Support"
        ]}
        correctOption={"AWS Business Support"}
    />
);

const Component20 = () => (
    <Question
        question={"The IT infrastructure at a university is deployed on AWS Cloud and it's experiencing a read-intensive workload. As a Cloud Practitioner, which AWS service would you use to take the load off databases?"}
        options={[
            "AWS Glue",
            "Amazon EMR",
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon ElastiCache"
        ]}
        correctOption={"Amazon ElastiCache"}
    />
);

const Component21 = () => (
    <Question
        question={"A brand-new startup would like to remove its need to manage the underlying infrastructure and focus on the deployment and management of its applications. Which type of cloud computing does this refer to?"}
        options={[
            "Infrastructure as a Service (IaaS)",
            "Platform as a Service (PaaS)",
            "On-premises",
            "Software as a Service (SaaS)"
        ]}
        correctOption={"Platform as a Service (PaaS)"}
    />
);

const Component22 = () => (
    <Question
        question={"A company based in Sydney hosts its application on an Amazon Elastic Compute Cloud (Amazon EC2) instance in ap-southeast-2. They would like to deploy the same Amazon EC2 instances in eu-south-1. Which of the following AWS entities can address this use case?"}
        options={[
            "Amazon EBS Elastic Volume snapshots",
            "Elastic Load Balancing (ELB)",
            "Amazon Machine Image (AMI)",
            "AWS Lambda"
        ]}
        correctOption={"Amazon Machine Image (AMI)"}
    />
);

const Component23 = () => (
    <Question
        question={"Which security control tool can be used to deny traffic from a specific IP address?"}
        options={[
            "VPC Flow Logs",
            "Network Access Control List (network ACL)",
            "Security Group",
            "Amazon GuardDuty"
        ]}
        correctOption={"Network Access Control List (network ACL)"}
    />
);

const Component24 = () => (
    <Question
        question={"A start-up would like to quickly deploy a popular technology on AWS. As a Cloud Practitioner, which AWS tool would you use for this task?"}
        options={[
            "AWS CodeDeploy",
            "AWS Partner Solutions (formerly Quick Starts)",
            "AWS Whitepapers",
            "AWS Forums"
        ]}
        correctOption={"AWS Partner Solutions (formerly Quick Starts)"}
    />
);

const Component25 = () => (
    <Question
        question={"The development team at a company manages 300 microservices and it is now trying to automate the code reviews to improve the code quality. Which tool/service is the right fit for this requirement?"}
        options={[
            "AWS X-Ray",
            "AWS CodeBuild",
            "Amazon CodeGuru",
            "AWS Trusted Advisor"
        ]}
        correctOption={"Amazon CodeGuru"}
    />
);

const Component26 = () => (
    <Question
        question={"A company would like to define a set of rules to manage objects cost-effectively between Amazon Simple Storage Service (Amazon S3) storage classes. As a Cloud Practitioner, which Amazon S3 feature would you use?"}
        options={[
            "Amazon Simple Storage Service (Amazon S3) Lifecycle configuration",
            "Amazon Simple Storage Service (Amazon S3) Bucket policies",
            "Amazon S3 Transfer Acceleration (Amazon S3TA)",
            "S3 Cross-Region Replication (S3 CRR)"
        ]}
        correctOption={"Amazon Simple Storage Service (Amazon S3) Lifecycle configuration"}
    />
);

const Component27 = () => (
    <Question
        question={"Which of the following are the advantages of using the AWS Cloud? (Select TWO)"}
        options={[
            "Trade operational expense for capital expense",
            "AWS is responsible for security in the cloud",
            "Limited scaling",
            "Increase speed and agility",
            "Stop guessing about capacity"
        ]}
        correctOptions={"Increase speed and agility, Stop guessing about capacity"}
    />
);

const Component28 = () => (
    <Question
        question={"A multinational company has just moved its infrastructure to AWS Cloud and has employees traveling to different offices around the world. How should the company set the AWS accounts?"}
        options={[
            "As employees travel, they can use other employees' accounts",
            "Create an IAM user for each user in each AWS region",
            "Create global permissions so users can access resources from all around the world",
            "There is nothing to do, AWS Identity and Access Management (AWS IAM) is a global service"
        ]}
        correctOption={"There is nothing to do, AWS Identity and Access Management (AWS IAM) is a global service"}
    />
);

const Component29 = () => (
    <Question
        question={"A start-up would like to monitor its cost on the AWS Cloud and would like to choose an optimal Savings Plan. As a Cloud Practitioner, which AWS service would you use?"}
        options={[
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Cost & Usage Report (AWS CUR)"
        ]}
        correctOption={"AWS Budgets"}
    />
);

const Component30 = () => (
    <Question
        question={"According to the AWS Shared Responsibility Model, which of the following are the responsibilities of AWS? (Select two)"}
        options={[
            "Data center security",
            "Installing security patches of the guest operating system (OS)",
            "Encrypting application data",
            "Configuring IAM Roles",
            "Network operability"
        ]}
        correctOptions={"Data center security, Network operability"}
    />
);

const Component31 = () => (
    <Question
        question={"Which AWS service allows you to quickly and easily add user sign-up, sign-in, and access control to web and mobile applications?"}
        options={[
            "AWS Identity and Access Management (AWS IAM)",
            "AWS IAM Identity Center",
            "Amazon Cognito",
            "AWS Organizations"
        ]}
        correctOption={"Amazon Cognito"}
    />
);

const Component32 = () => (
    <Question
        question={"Which AWS tool can provide best practice recommendations for performance, service limits, and cost optimization?"}
        options={[
            "Amazon CloudWatch",
            "AWS Trusted Advisor",
            "AWS Health Dashboard - Service health",
            "Amazon Inspector"
        ]}
        correctOption={"AWS Trusted Advisor"}
    />
);

const Component33 = () => (
    <Question
        question={"Which of the following options are the benefits of using AWS Elastic Load Balancing (ELB)? (Select TWO)"}
        options={[
            "Agility",
            "High availability",
            "Fault tolerance",
            "Less costly"
        ]}
        correctOptions={"High availability, Fault tolerance"}
    />
);

const Component34 = () => (
    <Question
        question={"Which of the following are the best practices when using AWS Organizations? (Select TWO)"}
        options={[
            "Restrict account privileges using Service Control Policies (SCP)",
            "Never use tags for billing",
            "Create AWS accounts per department",
            "Do not use AWS Organizations to automate AWS account creation",
            "Disable AWS CloudTrail on several accounts"
        ]}
        correctOptions={"Restrict account privileges using Service Control Policies (SCP), Create AWS accounts per department"}
    />
);

const Component35 = () => (
    <Question
        question={"A corporation would like to simplify access management to multiple AWS accounts as well as facilitate AWS Single Sign-On (AWS SSO) access to its AWS accounts. As a Cloud Practitioner, which AWS service would you use for this task?"}
        options={[
            "AWS Command Line Interface (CLI)",
            "AWS Cognito",
            "AWS Identity and Access Management (AWS IAM)",
            "AWS IAM Identity Center"
        ]}
        correctOption={"AWS IAM Identity Center"}
    />
);

const Component36 = () => (
    <Question
        question={"An e-commerce company would like to build a chatbot for its customer service using Natural Language Understanding (NLU). As a Cloud Practitioner, which AWS service would you use?"}
        options={[
            "Amazon Rekognition",
            "Amazon Comprehend",
            "Amazon SageMaker",
            "Amazon Lex"
        ]}
        correctOption={"Amazon Lex"}
    />
);

const Component37 = () => (
    <Question
        question={"A company would like to audit requests made to an Amazon Simple Storage Service (Amazon S3) bucket. As a Cloud Practitioner, which Amazon Simple Storage Service (Amazon S3) feature would you recommend addressing this use-case?"}
        options={[
            "Amazon S3 Bucket Policies",
            "S3 Versioning",
            "S3 cross-region replication (S3 CRR)",
            "Amazon Simple Storage Service (Amazon S3) Access Logs"
        ]}
        correctOption={"Amazon Simple Storage Service (Amazon S3) Access Logs"}
    />
);

const Component38 = () => (
    <Question
        question={"A company would like to separate cost for AWS services by the department for cost allocation. Which of the following is the simplest way to achieve this task?"}
        options={[
            "Create different virtual private cloud (VPCs) for different departments",
            "Create tags for each department",
            "Create different accounts for different departments",
            "Create one account for all departments and share this account"
        ]}
        correctOption={"Create tags for each department"}
    />
);

const Component39 = () => (
    <Question
        question={"A research lab needs to be notified in case of a configuration change for security and compliance reasons. Which AWS service can assist with this task?"}
        options={[
            "AWS Config",
            "Amazon Inspector",
            "AWS Secrets Manager",
            "AWS Trusted Advisor"
        ]}
        correctOption={"AWS Config"}
    />
);

const Component40 = () => (
    <Question
        question={"A company needs to use a secure online data transfer tool/service that can automate the ongoing transfers from on-premises systems into AWS while providing support for incremental data backups."}
        options={[
            "AWS DataSync",
            "AWS Snowcone",
            "AWS Snowmobile",
            "AWS Storage Gateway"
        ]}
        correctOption={"AWS DataSync"}
    />
);

const Component41 = () => (
    <Question
        question={"Adding more CPU/RAM to an Amazon Elastic Compute Cloud (Amazon EC2) instance represents which of the following?"}
        options={[
            "Vertical scaling",
            "Loose coupling",
            "Managing increasing volumes of data",
            "Horizontal scaling"
        ]}
        correctOption={"Vertical scaling"}
    />
);

const Component42 = () => (
    <Question
        question={"Which of the following statements is the MOST accurate when describing AWS Elastic Beanstalk?"}
        options={[
            "It is an Infrastructure as Code (IaC) that allows you to model and provision resources needed for an application",
            "It is an Infrastructure as a Service (IaaS) that allows you to deploy and scale web applications and services",
            "It is a Platform as a Service (PaaS) that allows you to model and provision resources needed for an application",
            "It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services"
        ]}
        correctOption={"It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services"}
    />
);

const Component43 = () => (
    <Question
        question={"Which AWS service can be used to subscribe to an RSS feed to be notified of the status of all AWS service interruptions?"}
        options={[
            "AWS Lambda",
            "AWS Health Dashboard - Your Account Health",
            "AWS Health Dashboard - Service Health",
            "Amazon Simple Notification Service (Amazon SNS)"
        ]}
        correctOption={"AWS Health Dashboard - Service Health"}
    />
);

const Component44 = () => (
    <Question
        question={"A production company with predictable usage would like to reduce the cost of its Amazon Elastic Compute Cloud (Amazon EC2) instances by using reserved instances (RI). Which of the following length terms are available for Amazon EC2 reserved instances (RI)? (Select Two)"}
        options={[
            "6 months",
            "2 years",
            "3 years",
            "1 year",
            "5 years"
        ]}
        correctOption={"2 years, 3 years"}
    />
);

const Component45 = () => (
    <Question
        question={"A production company would like to establish an AWS managed virtual private network (VPN) service between its on-premises network and AWS. Which item needs to be set up on the company's side?"}
        options={[
            "A customer gateway",
            "A security group",
            "A virtual private gateway (VGW)",
            "A VPC endpoint interface"
        ]}
        correctOption={"A customer gateway"}
    />
);

const Component46 = () => (
    <Question
        question={"A growing start-up has trouble identifying and protecting sensitive data at scale. Which AWS fully managed service can assist with this task?"}
        options={[
            "Amazon Macie",
            "AWS Artifact",
            "AWS Key Management Service (AWS KMS)",
            "AWS Secrets Manager"
        ]}
        correctOption={"Amazon Macie"}
    />
);

const Component47 = () => (
    <Question
        question={"Which types of monitoring can be provided by Amazon CloudWatch? (Select TWO)"}
        options={[
            "API access",
            "Application performance",
            "Account management",
            "Resource utilization",
            "Performance and availability of AWS services"
        ]}
        correctOption={"Application performance, Resource utilization"}
    />
);

const Component48 = () => (
    <Question
        question={"A company is planning to implement Chaos Engineering to expose any blind spots that can disrupt the resiliency of the application."}
        options={[
            "AWS Fault Injection Simulator (AWS FIS)",
            "AWS Trusted Advisor",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ]}
        correctOption={"AWS Fault Injection Simulator (AWS FIS)"}
    />
);

const Component49 = () => (
    <Question
        question={"According to the AWS Well-Architected Framework, which of the following action is recommended in the Security pillar?"}
        options={[
            "Use AWS Cost Explorer to view and track your usage in detail",
            "Use AWS Key Management Service (AWS KMS) to encrypt data",
            "Use Amazon CloudWatch to measure overall efficiency",
            "Use AWS CloudFormation to automate security best practices"
        ]}
        correctOption={"Use AWS Key Management Service (AWS KMS) to encrypt data"}
    />
);

const Component50 = () => (
    <Question
        question={"A Cloud Practitioner would like to deploy identical resources across all AWS regions and accounts using templates while estimating costs. Which AWS service can assist with this task?"}
        options={[
            "Amazon LightSail",
            "AWS CloudFormation",
            "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD)",
            "AWS CodeDeploy"
        ]}
        correctOption={"AWS CloudFormation"}
    />
);

const Component51 = () => (
    <Question
        question={"A company using a hybrid cloud would like to store secondary backup copies of the on-premises data. Which Amazon S3 Storage Class would you use for a cost-optimal yet rapid access solution?"}
        options={[
            "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)",
            "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)",
            "Amazon S3 Glacier Deep Archive",
            "Amazon S3 Standard"
        ]}
        correctOption={"Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)"}
    />
);

const Component52 = () => (
    <Question
        question={"A company would like to move 50 petabytes (PBs) of data from its on-premises data centers to AWS in the MOST cost-effective way. As a Cloud Practitioner, which of the following solutions would you choose?"}
        options={[
            "AWS Snowball Edge",
            "AWS Snowball",
            "AWS Snowmobile",
            "AWS Storage Gateway"
        ]}
        correctOption={"AWS Snowmobile"}
    />
);

const Component53 = () => (
    <Question
        question={"A Cloud Practitioner would like to get operational insights of its resources to quickly identify any issues that might impact applications using those resources. Which AWS service can help with this task?"}
        options={[
            "AWS Health Dashboard - Your Account Health",
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "AWS Systems Manager"
        ]}
        correctOption={"AWS Systems Manager"}
    />
);

const Component54 = () => (
    <Question
        question={"Which of the following billing timeframes is applied when running a Windows EC2 on-demand instance?"}
        options={[
            "Pay per day",
            "Pay per hour",
            "Pay per second",
            "Pay per minute"
        ]}
        correctOption={"Pay per hour"}
    />
);

const Component55 = () => (
    <Question
        question={"A company would like to reserve Amazon Elastic Compute Cloud (Amazon EC2) compute capacity for three years to reduce costs. The company also plans to increase their workloads during this period. As a Cloud Practitioner, which Amazon Elastic Compute Cloud (Amazon EC2) reserved instance (RI) type would you recommend?"}
        options={[
            "Convertible reserved instance (RI)",
            "Scheduled reserved instance (RI)",
            "Adaptable reserved instances (RI)",
            "Standard reserved instance (RI)"
        ]}
        correctOption={"Convertible reserved instance (RI)"}
    />
);

const Component56 = () => (
    <Question
        question={"Which AWS service can be used to view the most comprehensive billing details for the past month?"}
        options={[
            "AWS Cost Explorer",
            "AWS Cost & Usage Report (AWS CUR)",
            "AWS Pricing Calculator",
            "AWS Budgets"
        ]}
        correctOption={"AWS Cost & Usage Report (AWS CUR)"}
    />
);

const Component57 = () => (
    <Question
        question={"A company would like to optimize Amazon Elastic Compute Cloud (Amazon EC2) costs. Which of the following actions can help with this task? (Select TWO)"}
        options={[
            "Purchase Amazon EC2 Reserved instances (RIs)",
            "Opt for a higher AWS Support plan",
            "Vertically scale the EC2 instances",
            "Set up Auto Scaling groups to align the number of instances with the demand"
        ]}
        correctOption={"Purchase Amazon EC2 Reserved instances (RIs), Set up Auto Scaling groups to align the number of instances with the demand"}
    />
);

const Component58 = () => (
    <Question
        question={"An organization would like to copy data across different Availability Zones (AZs) using Amazon EBS snapshots. Where are Amazon EBS snapshots stored in the AWS Cloud?"}
        options={[
            "Amazon Relational Database Service (Amazon RDS)",
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "Amazon Simple Storage Service (Amazon S3)"
        ]}
        correctOption={"Amazon Simple Storage Service (Amazon S3)"}
    />
);

const Component59 = () => (
    <Question
        question={"Which Amazon Elastic Compute Cloud (Amazon EC2) Auto Scaling feature can help with fault tolerance?"}
        options={[
            "Having the right amount of computing capacity",
            "Lower cost by adjusting the number of Amazon EC2 instances",
            "Distributing load to Amazon EC2 instances",
            "Replacing unhealthy Amazon EC2 instances"
        ]}
        correctOption={"Replacing unhealthy Amazon EC2 instances"}
    />
);

const Component60 = () => (
    <Question
        question={"According to the AWS Shared Responsibility Model, which of the following is the responsibility of the customer?"}
        options={[
            "Edge locations security",
            "Firewall & networking configuration of Amazon Elastic Compute Cloud (Amazon EC2)",
            "Managing Amazon DynamoDB",
            "Protecting hardware infrastructure"
        ]}
        correctOption={"Firewall & networking configuration of Amazon Elastic Compute Cloud (Amazon EC2)"}
    />
);

const Component61 = () => (
    <Question
        question={"Which of the following statements is an AWS best practice when architecting for the Cloud?"}
        options={[
            "Servers, not services",
            "Close coupling",
            "Security comes last",
            "Automation"
        ]}
        correctOption={"Automation"}
    />
);

const Component62 = () => (
    <Question
        question={"Which AWS serverless service allows you to prepare data for analytics?"}
        options={[
            "AWS Glue",
            "Amazon EMR",
            "Amazon Redshift",
            "Amazon Athena"
        ]}
        correctOption={"AWS Glue"}
    />
);

const Component63 = () => (
    <Question
        question={"An engineering team is new to the AWS Cloud and it would like to launch a dev/test environment with low monthly pricing. Which AWS service can address this use case?"}
        options={[
            "Amazon Elastic Container Service (Amazon ECS)",
            "Amazon LightSail",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "AWS CloudFormation"
        ]}
        correctOption={"Amazon LightSail"}
    />
);

const Component64 = () => (
    <Question
        question={"Which AWS service can inspect Amazon CloudFront distributions running on any HTTP web server?"}
        options={[
            "Elastic Load Balancing (ELB)",
            "Amazon Inspector",
            "AWS Web Application Firewall (AWS WAF)",
            "AWS GuardDuty"
        ]}
        correctOption={"AWS Web Application Firewall (AWS WAF)"}
    />
);

const Component65 = () => (
    <Question
        question={"Which of the following AWS Identity and Access Management (AWS IAM) Security Tools allows you to review permissions granted to an IAM user?"}
        options={[
            "AWS Identity and Access Management (IAM) access advisor",
            "IAM credentials report",
            "Multi-Factor Authentication (MFA)",
            "IAM policy"
        ]}
        correctOption={"AWS Identity and Access Management (IAM) access advisor"}
    />
);



