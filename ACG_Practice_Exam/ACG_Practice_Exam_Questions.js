const myQuestions = [
    // Q2
    {
        question: "Your company runs a website that is presenting content that is stored in a back-end Aurora cluster. Content that makes up this website is created and managed from a handful of EC2 instances in your VPC, and this content is then accessed by a different set of EC2 instances acting as web servers in a public subnet. How would you configure the public-facing web servers to access the database, while minimising any security risks and operational overheads?",
        choices: {
        a: "Use the Cluster Endpoint for the Aurora Cluster",
        b: "Use a Custom Endpoint, and configure it so writes are not allowed",
        c: "Use the Reader Endpoint for the Aurora Cluster",
        d: "Use a Custom Endpoint, and configure it so that only the public EC2 instances can access it"
        },
        answer: "c"
    },
    // Q3
    {
        question: 'A large jewelry distributor has installed their new inventory application in a development environment on AWS. After completing their testing, they\'re ready to deploy the application into its production environment. They\'ve been using VPN connections for the development phase, but they need to upgrade to a higher resiliency network connection scheme to communicate back and forth from other on-premises business applications that are mirrored across two data centers. Testing results indicate that some transactions may require more than a 1.25 Gbps connection to ensure a quality customer experience. Which network architecture will provide the appropriate resiliency for this inventory application?',
        choices: {
            a: 'Create an AWS Direct Connect connection from one data center to an AWS Direct Connect location. Install another AWS Direct Connect connection from the other data center to a different AWS Direct Connect location.',
            b: 'Implement an AWS Direct Connect connection from one data center to an AWS Direct Connect location. Establish a VPN connection from the other data center as a backup.',
            c: 'Install two AWS Direct Connect connections to an AWS Direct Connect location from two different network devices in one data center. Create another two AWS Direct Connect connections to a different AWS Direct Connect location from two different network devices in the other data center.',
            d: 'Configure two AWS Direct Connect connections to an AWS Direct Connect location from two different network devices in one data center.'
        },
        answer: ''
    },
    // Q9
    {
        question: 'What type of replication is supported by Multi-AZ RDS instances?',
        choices: {
            a: 'Asynchronous replication',
            b: 'Continuous replication',
            c: 'Sequential replication',
            d: 'Synchronous replication'
        },
        answer: 'b'
    },
    // Q10
    {
        question: "Your CFO is after a ballpark estimate for the new customer-facing loyalty portal that you are currently designing and plan to host on AWS. She is particularly interested in all ongoing data transfer storage costs and wants to check her understanding of S3 pricing with you. Select all of her correct statements.",
        choices: {
        a: "Transfers between S3 buckets or from Amazon S3 to EC2 within the same AWS Region are free.",
        b: "Transferring up to one GB of data per month out of S3 to end customers over the public internet is free.",
        c: "Data transfer into S3 from the Internet doesn't incur any costs",
        d: "The total costs for data transfer out from S3 to CloudFront depend on the monthly volume of data, i.e a tiered pricing applies: The more data goes out, the more you save.",
        e: "All S3 costs are based on the volume of data regardless of how it is handled."
        },
        answer: ["a", 'b', 'c']
    },
    // Q13
    {
        question: "Your application stores your customers' sensitive passport information in S3. You are required by law to encrypt all data at rest. Company policy states that you must maintain control of your encryption keys. For ease of management, however, you do not want to implement or maintain a client-side encryption library. Which S3 encryption option should you use to secure your data at rest?",
        choices: {
        a: "SSE-C",
        b: "Amazon S3 Encryption Client",
        c: "SSE-S3",
        d: "SSE-KMS"
        },
        answer: "a"
    },
    // Q14
    {
        question: 'Your legal team has just identified a significant confidentiality breach in your web site and you have instructions to take all content down immediately. which of the following statements are correct.',
        choices: {
            a: 'You cannot invalidate more that 3000 files in CloudFront at a time.',
            b: 'Invalidation requests can be cancelled if you issue the cancellation instruction in time.',
            c: 'Invalidation are effective immediately on request.',
            d: 'Only under certain circumstances will CloudFront invalidations be charged to your account.',
            e: 'Versioning object names can be used in place of invalidation if you set it up ahead of time.'
        },
        answer: ['d', 'e']
    },
    // Q18
    {
        question: "Your new cost tracking application runs on AWS Lambda and Amazon RDS PostgreSQL. All testing has shown that the software is ready for production. Shortly after launch, users begin complaining about performance issues. After some investigation, you suspect a database query problem. What approach will you take to diagnose and resolve the problem in the most operationally efficient way?",
        choices: {
        a: "Install a PostgreSQL native tool like pgBadger on an EC2 instance to identify the slow running query. Upon inspection, you notice the suspected query uses a DISTINCT clause for a one-to-many join. Modify the query to add a GROUP BY clause.",
        b: "Install a PostgreSQL native tool like pgBadger on an EC2 instance to identify the slow running query. Upon inspection, you notice the suspected query uses a DISTINCT clause for a one-to-many join. Modify the query to remove the DISTINCT clause and add an EXISTS qualifier to the WHERE clause.",
        c: "Use RDS Performance Insights to identify the slow running query. Upon inspection, you notice the suspected query uses a DISTINCT clause for a one-to-many join. Modify the query to add a GROUP BY clause.",
        d: "Use RDS Performance Insights to identify the slow running query. Upon inspection, you notice the suspected query uses a DISTINCT clause for a one-to-many join. Modify the query to remove the DISTINCT clause and add an EXISTS qualifier to the WHERE clause."
        },
        answer: "d"
    },
    // Q19
    {
        question: 'When deploying a NAT gateway, which of the following will you be billed for?',
        choices: {
            a: 'The instance that the NAT Gateway is running on',
            b: 'Only inbound traffic',
            c: 'A cost per hour that the NAT Gateway is active',
            d: 'Only outbound traffic',
            e: 'All traffic processed, regardless of it\'s direction'
        },
        answer: ['c', 'e']
    },
    // Q20
    {
        question: 'You want to create a video stream and then send the video to it using your smartphone. In addition, you want to retain the data of this stream for 24 hours. Which of the following configurations will accomplish this?',
        choices: {
            a: 'Amazon Kinesis Firehose stream with a default retention period',
            b: 'Amazon Kinesis Firehose stream with a custom retention period of 1 day',
            c: 'Amazon Kinesis video stream with a default retention period',
            d: 'Amazon Kinesis video stream with a custom retention period of 1 day'
        },
        answer: ['c', 'd']
    },
    // Q21
    {
        question: 'You have an application that uses S3 to store objects. Company policy dictates that certain objects (such as JPGs and PDFs) must be replicated to another region for redundancy. However, some objects (such as Word files) can stay in a single region. Company policy also dictates that you should use as few buckets as possible. How should you architect this solution?',
        choices: {
            a: 'Three buckets: one with CRR enabled on it for the JPGs, one with CRR enabled on it for the PDFs, and 1 bucket for the Word files without CRR enabled.',
            b: 'Two buckets: 1 with CRR enabled on it (for the JPGs and PDFs) and the other without.',
            c: 'Two buckets: one regular bucket and one with CRR enabled on it (for the Word files).',
            d: 'One bucket. Then enable CRR and use specifying prefixes to identify the subset of objects (such as JPGs and PDFs) that must be replicated.'
        },
        answer: 'd'
    },
    // Q23
    {
        question: 'A financial services company is located in New York, while their development and testing is performed in San Francisco. The development team lead wants to ensure that the data stored in their test account Amazon S3 bucket is a current copy of the data in their production account Amazon S3 bucket. What steps implement the solution in the most effective way?',
        choices: {
            a: 'Configure an AWS Lambda function to replicate S3 objects.',
            b: 'Configure Cross-Region Replication.',
            c: 'Configure S3 Bucket Event Notification.',
            d: 'Configure S3 Bucket Lifecycle Policy.',
            e: 'Configure S3 Bucket Versioning.'
        },
        answer: ['b', 'e']
    },
    // Q28
    {
        question: "A developer accidentally deleted a couple of PostgreSQL database tables in the staging environment. Since you are using AWS RDS, you are planning to restore it using the most recent backup of the database. Select the invalid statement.",
        choices: {
            a: "Automated backups occur daily during the preferred backup window. If the backup requires more time than allotted to the backup window, the backup stops and you will be notified.",
            b: "Amazon RDS provides two different methods for backing up and restoring your DB instance(s) - automated backups and database snapshots. DB Snapshots are user-initiated and enable you to back up your DB instance in a known state as frequently as you wish, and then restore to that specific state at any time.",
            c: "Your Amazon RDS backup storage for each region is composed of the automated backups and manual DB snapshots for that region. Your backup storage is equivalent to the sum of the database storage for all instances in that region.",
            d: "You can set the backup retention period to between 0 and 35 days. Setting the backup retention period to 0 disables automated backups. The default backup retention period is seven days if you create the DB instance using the console."
        },
        answer: "a"
    },
    // Q30
    {
        question: "A political consulting group wants to monitor Twitter tweets from all candidates in an election to assess campaign statements and positions on current issues. They'll implement calls to the Twitter API from a Python script on an EC2 instance to get the tweets, and they'll use Amazon QuickSight to visualize the data. They anticipate that as the election approaches, tweet volume will increase dramatically. Which architecture will provide the scalability they need in the most cost effective way?",
        choices: {
        a: "Have the Python script write the tweets to an Amazon Kinesis Firehose stream with PutRecord API calls. Configure the stream to write the data to Amazon S3. Trigger a Lambda function to invoke Amazon Comprehend to assess sentiment in the tweets and write the results back to S3",
        b: "Have the Python script write the tweets to an Amazon Kinesis Streams stream. Configure a Lambda function as the consumer of the stream. Have the Lambda function write the data to Amazon DynamoDB. Invoke Amazon Comprehend from the Lambda function to assess sentiment in the tweets and write the results back to DynamoDB",
        c: "Have the Python script write the tweets to an Amazon Kinesis Firehose stream with PutRecordBatch API calls. Configure the stream to write the data to Amazon S3. Trigger a Lambda function to put the data into a standard format, and then invoke Amazon Comprehend to assess sentiment in the tweets. Write the results back to S3",
        d: "Have the Python script write the tweets to an Amazon Kinesis Streams stream. Configure a Lambda function as the consumer of the stream which receives tweets in batches. Have the Lambda function write the data to Amazon S3. Have the Lambda function also invoke Amazon Comprehend to assess sentiment in the batch and write the results back to S3"
        },
        answer: "d"
    },
    // Q41
    {
        question: "Your project manager (PM) tasked you with launching two Amazon EC2 instances for an issue-tracking application. One of them will serve as the proxy server, which will act as an intermediary for requests by users seeking access to the application installed on the other EC2 instance. The PM expects the instance for the proxy server to be a balance of compute, memory, and network resources, with low-to-moderate network performance. Which of the following instance types would be appropriate to use?",
        choices: {
        a: "r5.xlarge",
        b: "t2.2xlarge",
        c: "t2.medium",
        d: "c5.large"
        },
        answer: ['b', "c"]
    },
    // Q42
    {
        question: 'Your application has a global user base, and in order to improve user experience you have deployed an instance in both the us-east-1 and eu-central-1 regions. Which routing policy would you use to ensure users get the best experience possible?',
        choices: {
            a: 'Geolocation Routing',
            b: 'Geoproximity Routing',
            c: 'Latency-based Routing',
            d: 'Weighted Routing'
        },
        answer: 'c'
    },
    // Q47
    {
        question: 'A company disaster recovery policy requires that all RDS backups are retained in a secondary AWS region. What is the optimal solution to meet this requirement?',
        choices: {
            a: 'Create an RDS DB snapshot. Copy the RDS DB snapshot to the secondary region.',
            b: 'Configure an RDS automated backups target region to the secondary region.',
            c: 'Create an RDS DB snapshot. Copy the RDS DB snapshot to an S3 bucket. Enable Cross-Region replication on the S3 bucket.',
            d: 'Configure RDS Read-Replica instance in the secondary region. Enable RDS automated backups on the read-replica instance.'
        },
        answer: 'a'
    },
    // Q49
    {
        question: 'You are configuring your application load balancer to enable users to access your application, which is in a staging environment and only has a private IP address. Which of the following schemes will enable this type of access?',
        choices: {
            a: 'Internet-facing',
            b: 'Internal',
            c: 'External',
            d: 'User-facing'
        },
        answer: 'b'
    },
    // Q50
    {
        question: 'An enterprise is planning to move its on-premise application to AWS cloud. The enterprise planned to build the non-production applications first as a proof of concept, and the governance team has provided approval for downtime for a brief period if cost can be compensated. You recommend spot instances as this satisfies the scenario explained above. Do vCPU limits apply when requesting a spot instance?',
        choices: {
            a: 'vCPU limits apply to reserved instances. Spot instance requests are submitted based on vCPU limits not on instances count.',
            b: 'In AWS, only instance count based limits exist and there is no concept of vCPU limits.',
            c: 'vCPU limits apply only to on-demand instances and do not apply for spot instances.',
            d: 'vCPU limits apply to spot instances. Spot instance requests are submitted based on vCPU limits not on instances count.'
        },
        answer: 'c'
    },
    // Q53
    {
        question: "One of your junior developers needs access to an Elastic Load Balancer in your custom VPC. This is the first and only time he will need access to AWS services. Which of the following choices is the most secure way to grant this access?",
        choices: {
            a: "Create a new IAM user with only the required credentials.",
            b: "Add that developer to a Group with the requisite access.",
            c: "Let them log in with Admin credentials and change the Admin password when he is finished.",
            d: "None of these"
        },
        answer: "a"
    },
    // Q54
    {
        question: "To simplify your environment configuration how should you manage access from EC2 instances to AWS services?",
        choices: {
            a: "Build multiple Roles with minimal viable access each, and assign them to the EC2 launch configurations according to their function.",
            b: "Build one or two Roles with high levels of access each, and assign to the EC2 instances according to the team managing them.",
            c: "Create service accounts and embed the Keys for these accounts in the AMIs.",
            d: "Create service accounts and store the Keys in an encrypted S3 and access them programmatically."
        },
        answer: "a"
    },
    // Q57
    {
        question: 'Your company is running an older version of Windows on employees\' desktops/laptops which will be going off of mainstream support in the near future. The most current version of Windows will require a large capital investment to purchase more powerful hardware to run it. All desktops/laptops require access to the Internet as well as access to multiple business applications running on Amazon EC2 web servers in the AWS cloud. Your manager has tasked you with determining how to move the company\'s desktops/laptops to the most current version of Windows. Which architecture will provide the most cost effective solution?',
        choices: {
            a: 'Implement Amazon WorkSpaces with the most current version of Windows to provide Desktop-as-a-Service capability. Use Amazon AppStream to provide access to the Internet and to serve the EC2 applications to the desktops/laptops.',
            b: 'Deploy Amazon WorkSpaces with the most current version of Windows to provide Desktop-as-a-Service capability. Use a NAT Gateway in the same VPC to provide access to the Internet.',
            c: 'Use Amazon WorkSpaces with the most current version of Windows to provide Desktop-as-a-Service capability. Use an Internet Gateway in the same VPC to provide access to the Internet. Provision an AWS Managed Microsoft AD instance and link it to your on-premises Active Directory for user authentication.',
            d: 'Implement Amazon WorkSpaces with the most current version of Windows to provide Desktop-as-a-Service capability. Use an Internet Gateway in the same VPC to provide access to the Internet. Provision Elastic Network Interfaces in the same VPC to connect the desktops/laptops to the EC2 applications.'
        },
        answer: ''
    },
    // Q63
    {
        question: "Your mobile app needs to have images uploaded to S3. You want to bypass the existing web server for the uploads to avoid increasing load on the server. How can this be accomplished?",
        choices: {
            a: "Use Pre-Signed URLs to upload the images.",
            b: "Upload the images to SQS and then push them to the S3 bucket.",
            c: "Create a second S3 bucket and use Lambda to sync the files to the primary bucket.",
            d: "Use ECS Containers to upload the images."
        },
        answer: "a"
    },
    // Q64
    {
        question: 'As a follow up to a recent security breach you have been asked what steps can be taken to ensure that System Administrators always use signed communication when interacting with your AWS account via the API interface. Which statements are most accurate?',
        choices: {
            a: 'AWS advise against signing HTTP API traffic as the capability is redundant when communicating with the AWS API.',
            b: 'The process of manually signing requests is only needed when writing bespoke low level connections with the API.',
            c: 'You must advise that this is an area over which customers have little control. The signing of all but anonymous requests is enforced by AWS.',
            d: 'All http requests to the API must be manually signed via the process documented by AWS.',
            e: 'It will be necessary to install signing utilities provided by openssl.org to generate personalized signing certificates signed by the Secret key downloaded from IAM.'
        },
        answer: ['b', 'c']
    }
];
/*
    // Q
    {
        question: '',
        choices: {
            a: '',
            b: '',
            c: '',
            d: ''
        },
        answer: ''
    },
 */
