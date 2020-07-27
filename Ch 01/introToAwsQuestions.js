const myQuestions = [
    // Q1
    {
        question: "Which of the following describes a physical location around the world where AWS clusters data centers?",
        choices: {
        a: "Endpoint",
        b: "Collection",
        c: "Fleet",
        d: "Region"
        },
        answer: "d"
    },
    // Q2
    {
        question: "Each AWS region is composed of two or more locations that offer organizations the ability to operate production systems that are more highly available, fault tolerant, and scalable than would be possible using a single data center. What are these locations called?",
        choices: {
        a: "Availability Zones",
        b: "Replication Areas",
        c: "Geographic Districts",
        d: "Compute Centers"
        },
        answer: "a"
    },
    // Q3
    {
        question: "What is the deployment term for an environment that extends an existing on-premises infrastructure into the cloud to connect cloud resources to internal systems?",
        choices: {
        a: "All-in deployment",
        b: "Hybrid deployment",
        c: "On-premises deployment",
        d: "Scatter deployment"
        },
        answer: "b"
    },
    // Q4
    {
        question: "Which AWS Cloud service allows organizations to gain system-wide visibility into resource utilization, application performance, and operational health?",
        choices: {
        a: "AWS Identity and Access Management (IAM)",
        b: "Amazon Simple Notification Service (Amazon SNS)",
        c: "Amazon CloudWatch",
        d: "AWSCloudFormation"
        },
        answer: "c"
    },
    // Q5
    {
        question: "Which of the following AWS Cloud services is a fully managed NoSQL database service?",
        choices: {
        a: "Amazon Simple Queue Service (Amazon SQS)",
        b: "Amazon DynamoDB",
        c: "Amazon ElastiCache",
        d: "Amazon Relational Database Service (Amazon RDS)"
        },
        answer: "b"
    },
    // Q6
    {
        question: "Your company experiences fluctuations in traffic patterns to their e-commerce website based on flash sales. What service can help your company dynamically match the required compute capacity to the spike in traffic during flash sales?",
        choices: {
        a: "Auto Scaling",
        b: "Amazon Glacier",
        c: "Amazon Simple Notification Service (Amazon SNS)",
        d: "Amazon Virtual Private Cloud (Amazon VPC)"
        },
        answer: "a"
    },
    // Q7
    {
        question: "Your company provides an online photo sharing service. The development team is looking for ways to deliver image files with the lowest latency to end users so the website content is delivered with the best possible performance. What service can help speed up distribution of these image files to end users around the world?",
        choices: {
            a: "Amazon Elastic Compute Cloud (Amazon EC2)",
            b: "Amazon Route 53",
            c: "AWS Storage Gateway",
            d: "Amazon CloudFront"
        },
        answer: "d"
    },
    // Q8
    {
        question: "Your company runs an Amazon Elastic Compute Cloud (Amazon EC2) instance periodically to perform a batch processing job on a large and growing filesystem. At the end of the batch job, you shut down the Amazon EC2 instance to save money but need to persist the filesystem on the Amazon EC2 instance from the previous batch runs. What AWS Cloud service can you leverage to meet these requirements?",
        choices: {
            a: "Amazon Elastic Block Store (Amazon EBS)",
            b: "Amazon DynamoDB",
            c: "Amazon Glacier",
            d: "AWSCloudFormation"
        },
        answer: "a"
    },
    // Q9
    {
        question: "What AWS Cloud service provides a logically isolated section of the AWS Cloud where organizations can launch AWS resources in a virtual network that they define?",
        choices: {
            a: "Amazon Simple Workflow Service (Amazon SWF)",
            b: "Amazon Route 53",
            c: "Amazon Virtual Private Cloud (Amazon VPC)",
            d: "AWSCloudFormation"
        },
        answer: "c"
    },
    // Q10
    {
        question: "Your company provides a mobile voting application for a popular TV show, and 5 to 25 million viewers all vote in a 15-second timespan. What mechanism can you use to decouple the voting application from your back-end services that tally the votes?",
        choices: {
            a: "AWSCloudTrail",
            b: "Amazon Simple Queue Service (Amazon SQS)",
            c: "Amazon Redshift",
            d: "Amazon Simple Notification Service (Amazon SNS)"
        },
        answer: "b"
    }
];
