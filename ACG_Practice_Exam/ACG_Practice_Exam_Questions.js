const myQuestions = [
    //Q1
    {
        question: "By default, how many S3 buckets can you have with a new AWS account?",
        choices: {
            a: 50,
            b: 100,
            c: 25,
            d: 200
        },
        answer: "b"
    },
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
        answer: 'a'
    },
    // Q4
    {
        question: "You wonder why a SWF workflow you created has not made any progress in the last three weeks. What is the most likely explanation for the workflow behavior?",
        choices: {
            a: "SWF is awaiting human input from a task you assigned to a colleague.",
            b: "SWF does not support tasks located outside of AWS, so you will need to remove those tasks from your on-premise servers.",
            c: "The workflow has exceeded the maximum 90-day lifespan of an SWF workflow.",
            d: "The last task has exceeded SWF's 14-day task execution time."
        },
        answer: 'a'
    },
    // Q5
    {
        question: "A company needs to collect, store and analyze data, from various data sources, to calculate the net profit from sales of its bags, socks, shoes, and underwear brands in the United States, England, France, and South Africa during the first quarter of the year. Which of the following AWS services is most suitable for this application?",
        choices: {
            a: "Amazon S3",
            b: "Amazon Redshift",
            c: "DynamoDB",
            d: "Amazon Aurora"
        },
        answer: "b"
    },
    // Q6
    {
        question: "You have a one-year contract with a client to create and maintain its cloud environment with an AWS account, with the awareness that each AWS service and resource used has a 12-month free usage term. When that 12-month term expires, which of the following happens?",
        choices: {
            a: "You will pay standard, pay-as-you-go service rates.",
            b: "AWS Support will extend the free usage term to another 12 months upon request.",
            c: "The free usage term will be automatically renewed for another 12 months.",
            d: "You will pay a fee that is reduced from the full pricing."
        },
        answer: 'a'
    },
    // Q7
    {
        question: "Which of the following scenarios are examples of scaling an IT architecture horizontally?",
        choices: {
            a: "Adding two more RDS instances",
            b: "Resizing an EC2 instance type from r5.large to r5.2xlarge for twice the amount of CPU and memory power",
            c: "Resizing an RDS instance type from db.t3.large to db.t3.medium for half the memory power",
            d: "Adding two more EC2 instances"
        },
        answer: ['a', 'd']
    },
    // Q8
    {
        question: "Which AWS service should you use to host MySQL, MariaDB, Oracle, SQL Server, or PostgreSQL database where you do not need to manage the underlying operating system?",
        choices: {
            a: "EC2 with EBS",
            b: "DynamoDB",
            c: "RDS",
            d: "Aurora"
        },
        answer: 'c'
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
    // Q11
    {
        question: "An organization which runs critical services in AWS has a requirement to store backups in another account. One application uses S3 as its back-end data store. The backups should be as automated as possible but resilient and cost-effective. How would you satisfy backup requirements for this application's S3 objects?",
        choices: {
            a: "Configure S3 events in the source bucket to trigger same-account copies using Lambda into the backup account to S3 Infrequently Accessed",
            b: "Configure cross-account replication and configure the storage class for the replicated objects as S3 One Zone-IA",
            c: "Configure cross-account replication and configure the storage class for the replicated objects as S3 Infrequently Accessed",
            d: "Configure S3 events in the source bucket to trigger cross-account copies using Lambda into the backup account to S3 Standard Storage",
            e: "Configure cross-account replication and configure the storage class for the replicated objects as S3 Standard Storage"
        },
        answer: 'c'
    },
    // Q12
    {
        question: "You have been tasked with the creation of a highly available website that serves static content from EC2 instances. Which of the following is not a requirement to accomplish this goal?",
        choices: {
            a: "An SQS queue",
            b: "Multiple subnets",
            c: "A multi-AZ deployment",
            d: "An auto-scaling group"
        },
        answer: 'a'
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
    // Q15
    {
        question: "You are running a Cassandra database that requires access to tens of thousands of low-latency IOPS. Which of the following EC2 instance families would best suit your needs?",
        choices: {
            a: "Memory Optimized Instances",
            b: "Dense Storage Instances",
            c: "Cluster GPU Instances",
            d: "High I/O instances"
        },
        answer: 'd'
    },
    // Q16
    {
        question: "You are testing an application that uses EC2 instances to poll an SQS queue. At this stage of testing, you have verified that the EC2 instances can retrieve messages from the queue, but your coworkers are complaining about not being able to manually retrieve any messages from the queue from their on-premises workstations. What is the most likely source of this problem?",
        choices: {
            a: "SQS queues accept traffic only from within AWS.",
            b: "Short polling is occasionally leaving messages behind",
            c: "It's not possible to poll an SQS queue manually.",
            d: "Your coworkers do not have permission to access the SQS queue"
        },
        answer: 'd'
    },
    // Q17
    {
        question: "A multinational corporation needs an AWS service that delivers its web content on a global level. Which one of the following AWS services will accomplish that?",
        choices: {
            a: "Amazon CloudFront",
            b: "AWS Config",
            c: "AWS CloudTrail",
            d: "Amazon CloudWatch"
        },
        answer: 'a'
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
    // Q22
    {
        question: "You are hosting a web application that runs on a number of Web Servers in public subnets and Database Servers in private subnets. A NAT Instance is being used for connectivity to the internet for the Private Subnets. The NAT Instance is now becoming a bottleneck, and you are looking to replace it with NAT Gateway. Which of the following would ensure high availability for the NAT Gateway?",
        choices: {
            a: "Deploy a NAT Gateway along with the NAT Instance",
            b: "Deploy a NAT Gateway in 2 Availability Zones",
            c: "Disable source/destination check on the NAT Instances",
            d: "Deploy a NAT Gateway in 2 Regions"
        },
        answer: 'b'
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
    // Q24
    {
        question: "Which of the following operating systems is NOT supported by EC2?",
        choices: {
            a: "Ubuntu",
            b: "Windows Server",
            c: "Amazon Linux",
            d: "OSX"
        },
        answer: 'd'
    },
    // Q25
    {
        question: "You have a requirement to host a database on an EC2 instance and the EBS volume should be able to support 17,000 IOPS. Which Amazon EBS volume type meets the requirements for this database?",
        choices: {
            a: "EBS Throughput Optimized HDD",
            b: "EBS Cold HDD",
            c: "EBS General Purpose SSD volumes in a RAID-0 configuration",
            d: "EBS Provisioned IOPS SSD",
            e: "EBS General Purpose SSD"
        },
        answer: 'd'
    },
    // Q26
    {
        question: "Your company needs to run several monthly workloads that will each take several hours to complete. Although critical, these workloads can be stopped and restarted without adversely affecting the outcome of the job. Which pricing model would you use to deliver the most economical solution?",
        choices: {
            a: "On-demand Instances",
            b: "Spot Instances",
            c: "Reserved Instances",
            d: "Free-Tier Instances"
        },
        answer: 'b'
    },
    // Q27
    {
        question: "Which of the following AWS services can you use to protect data within your VPC?",
        choices: {
            a: "Amazon Macie",
            b: "Amazon CloudFront",
            c: "AWS CloudTrail",
            d: "AWS Identity and Access Management (IAM)"
        },
        answer: ['a', 'c', 'd']
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
    // Q29
    {
        question: "What is the minimum time interval granularity for the data that Amazon CloudWatch receives and aggregates?",
        choices: {
            a: "10 minutes",
            b: "5 minutes",
            c: "1 minute",
            d: "30 seconds"
        },
        answer: 'c'
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
    // Q31
    {
        question: "You need to take a snapshot of an EBS volume. You are concerned about the volume and instance becoming unavailable until the snapshot is complete. Which of these statements best describe the facts that will allow you to assess the duration of the outage?",
        choices: {
            a: "The duration of the outage is determined by the number of files changed since the last backup.",
            b: "The duration of the outage is only related to the initial cataloguing phase.",
            c: "The duration of the outage is determined by the number of files on the disk.",
            d: "The duration of the outage is the time it takes to copy all the files from the disk to the backup.",
            e: "The duration of the outage is determined by the size of the server.",
            f: "The duration of the outage is determined by the age of the server.",
            g: "The duration of the outage is determined by the number of files changed since the server was commissioned."
        },
        answer: ['a', 'b']
    },
    // Q32
    {
        question: "Which of the following AWS services enables on-premises applications to use AWS Cloud storage?",
        choices: {
            a: "Amazon Elastic Block Storage (EBS)",
            b: "Amazon Elastic File System (EFS)",
            c: "Amazon Simple Storage Service (S3)",
            d: "AWS Storage Gateway"
        },
        answer: 'd'
    },
    // Q33
    {
        question: "You successfully configure VPC Peering between VPC-A and VPC-B. You then establish an IGW and a Direct-Connect connection in VPC-B. Can instances in VPC-A connect to your corporate office via the Direct-Connect service as well as connect to the Internet via the IGW?",
        choices: {
            a: "VPC peering does not support edge-to-edge routing.",
            b: "Instances in VPC-A will be able to access the Internet, but not the corporate office.",
            c: "Instances in VPC-A will be able to access the corporate office, but not the Internet.",
            d: "Yes: VPC Peering is designed to route traffic between the VPCs."
        },
        answer: 'a'
    },
    // Q34
    {
        question: "Your company is migrating an on-premise 15 TB PostrgreSQL database to AWS. The company expects this database to triple in size and has a business requirement of synchronous replica lag be under 100 ms. Which AWS RDS service will meet the requirement best?",
        choices: {
            a: "Oracle",
            b: "Amazon Aurora",
            c: "DynamoDB",
            d: "PostgreSQL",
            e: "MySQL"
        },
        answer: 'b'
    },
    // Q35
    {
        question: "You are running a production database using MySQL on RDS. From time to time, management asks you to run highly complex SQL queries with multiple table joins against the database. These queries often overwhelm your database, and the production environment is beginning to be affected. Which of the following would you recommend as a means of reducing the load on the database?",
        choices: {
            a: "Create a secondary Multi-AZ database and run the queries off the secondary Multi-AZ database.",
            b: "Migrate the database to DynamoDB which will scale automatically in order to deal with the load.",
            c: "Use Route53 health checks to determine the current load on the database and if there is a minimum load , configure the health check to run the SQL queries.",
            d: "Create a read replica of the database and run your reports against the read replica, rather than against the production database."
        },
        answer: 'd'
    },
    // Q36
    {
        question: "There is a requirement to launch an AWS EC2 instance. The instance went from pending state to terminated state immediately after restarting it. What could be possible reasons for the instance termination?",
        choices: {
            a: "Data in the AWS EC2 instance store does not persist across reboot, it was terminated.",
            b: "The root EBS volume is encrypted and missing permissions to access the KMS key for decryption.",
            c: "An EBS Snapshot is corrupt.",
            d: "Only on-demand and reserved instance can be restarted. Spot instances cannot be restarted.",
            e: "EBS volume has reached its limit."
        },
        answer: ['b', 'c', 'e']
    },
    // Q37
    {
        question: "As a junior Cloud Engineer, you receive a CloudWatch alarm indicating that there might be a layer 7 attack of your environment. You recall that your company has an AWS Shield Advanced subscription. Which of the following options is the best response?",
        choices: {
            a: "Contact AWS Support Center.",
            b: "Investigate and mitigate the attack on your own.",
            c: "Request assistance from tech lead.",
            d: "Do nothing; it is an AWS issue that will resolve itself."
        },
        answer: 'a'
    },
    // Q38
    {
        question: "A WordPress blogging platform is hosted on Amazon EC2 instances. The EC2 instances are deployed behind an Application Load Balancer to provide high-availability. The security team has mandated that all client requests must be encrypted in transit. What is the most efficient solution to implement this requirement?",
        choices: {
            a: "Configure HTTPS in WordPress Settings.",
            b: "Configure Custom Domain Name on the Amazon API Gateway.",
            c: "Configure ELB HTTPS Listener.",
            d: "Configure Redirect HTTP to HTTPS Viewer Protocol Policy for CloudFront."
        },
        answer: 'c'
    },
    // Q39
    {
        question: "You have EC2 instances hosted in a private subnet. These instances need to download updates from the Internet. What is the most secure and efficient way of accomplishing this?",
        choices: {
            a: "Create a VPC Link to the Internet to allow the instances in the private subnet to download the updates.",
            b: "Use a NAT Gateway to allow the instances in the private subnet to download the updates.",
            c: "Create a new public subnet and move the instances to that subnet.",
            d: "Create a new EC2 instance to download the updates separately and push them to the required instances."
        },
        answer: 'b'
    },
    // Q40
    {
        question: "Your SQL server requires a specific type of collation and some unique third party tools installed on it. You will need access to the underlying operating system for management and monitoring of these third party tools. However, you'd like to keep the overall amount of management to a minimum. Which AWS service would best suit your needs?",
        choices: {
            a: "SQL server installed on EC2 with EBS",
            b: "DynamoDB",
            c: "RDS with SQL Server",
            d: "ElasticCache"
        },
        answer: 'a'
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
    // Q43
    {
        question: "You wish to exclusively use AWS services to buy a domain name and create a static website. Which of the following combinations will enable you to do so?",
        choices: {
            a: "Amazon API Gateway and Elastic Compute Cloud (EC2)",
            b: "Amazon Virtual Private Cloud (VPC) and Relational Database Service (RDS)",
            c: "Amazon Route 53 and Simple Storage Service (S3)",
            d: "Amazon Lambda and Elastic File Service (EFS)"
        },
        answer: 'c'
    },
    // Q44
    {
        question: "You have a website that uses the HTTP and HTTPS protocols and consists of two web servers and an RDS database server. Which of the following choices would be the most suitable load balancer for distributing incoming web traffic?",
        choices: {
            a: "Classic Load Balancer",
            b: "Network Load Balancer",
            c: "Application Load Balancer",
            d: "Elastic Load Balancer"
        },
        answer: 'c'
    },
    // Q45
    {
        question: "An application that performs statistical analysis on weather data receives files once a week. It assimilates the data in these files with previously collected data via its algorithms, and publishes a report at the end of each month. At unspecified times during the week, interim results need to be made available to meteorologists within minutes. Which architecture will meet the data availability requirements for the solution at the least cost, and with the simplest application code?",
        choices: {
            a: "Process the data on EC2 and stop the instance until new data files arrive or an interim results request is made",
            b: "Process the data on EC2 and store temporary results in Amazon DynamoDB",
            c: "Process the data on EC2 and hibernate the instance until new data files arrive or an interim results request is made",
            d: "Process the data on a transient EMR cluster and store temporary results in S3"
        },
        answer: 'c'
    },
    // Q46
    {
        question: "A company has an LNMP (Linux, Nginx, MySQL, PHP) stack application deployed to AWS. The availability requirements for their backend database specify automatic failover in case of disaster recovery. What is the optimal solution that meets this requirement?",
        choices: {
            a: "RDS with Multi-AZ deployment.",
            b: "DynamoDB with Global Tables deployment.",
            c: "Deploy multiple RDS instances. Use Route53 with Health-Check and DNS failover configured.",
            d: "RDS with Read-Replica deployment."
        },
        answer: 'a'
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
    // Q48
    {
        question: "You need to add a route to your routing table that will allow connections to the internet from your subnet. Which of the following routes should you add?",
        choices: {
            a: "Destination: 0.0.0.0/0 --> Target: your Internet gateway",
            b: "Destination: 0.0.0.0/0 --> Target: 0.0.0.0/24",
            c: "Destination: 192.168.1.258/0 --> Target: your Internet gateway",
            d: "Destination: 0.0.0.0/33 --> Target: your virtual private gateway"
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
    // Q51
    {
        question: "You have a Ruby On Rails application that has been deployed using Elastic Beanstalk. You notice that under heavy load, your application stalls and becomes unresponsive. How can you alleviate this issue?",
        choices: {
            a: "Adjust the scaling policies in Elastic Beanstalk to scale when your EC2 instances exceed a defined CPU load for more than 5 minutes.",
            b: "Resize the EC2 instances in Elastic Beanstalk so that they are smaller.",
            c: "Using the Elastic Beanstalk console, redeploy the application using AWS lambda so it scales horizontally.",
            d: "Redeploy the application using CloudFormation."
        },
        answer: 'a'
    },
    // Q52
    {
        question: "An automotive research data company is currently running its data store on a MySQL database engine. However, its CTO is not satisfied with the database’s performance, noting that the data sets are rather large. He firmly believes that the company can use a better solution for its analytical workloads. Which of the following AWS services would be best suited for this application?",
        choices: {
            a: "Amazon Redshift",
            b: "Amazon DynamoDB",
            c: "Amazon RDS",
            d: "Amazon Aurora"
        },
        answer: 'a'
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
    // Q55
    {
        question: "Your employer, a publishing company, wants the images of its various websites to be resized so that they can be optimally viewed on any electronic device. Which of the following AWS services will be most suitable for this type of processing?",
        choices: {
            a: "AWS CloudTrail",
            b: "AWS Lambda",
            c: "Amazon RDS",
            d: "Amazon S3"
        },
        answer: 'b'
    },
    // Q56
    {
        question: "What is the durability of S3 - IA?",
        choices: {
            a: "99.999999999%",
            b: "99.9%",
            c: "99%",
            d: "99.99%"
        },
        answer: 'a'
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
        answer: 'b'
    },
    // Q58
    {
        question: "Your fleet of EC2 instances is running 100% of the time, and there is no reason to believe that the demand will decrease. What pricing model might you use to reduce costs?",
        choices: {
            a: "Reserved Instances",
            b: "Special Instances",
            c: "On-Demand Instances",
            d: "Spot Instances"
        },
        answer: 'a'
    },
    // Q59
    {
        question: "You have an RDS database that has moderate I/O requirements. Which storage medium would be best to accommodate these requirements?",
        choices: {
            a: "Amazon RDS Cold Storage",
            b: "Amazon RDS Elastic Storage",
            c: "Amazon RDS Magnetic Storage",
            d: "Amazon RDS General Purpose (SSD) Storage"
        },
        answer: 'd'
    },
    // Q60
    {
        question: "Your supervisor wants you to specifically record the configuration changes of all the EC2 instances in the environment. Which of the following AWS services will do that?",
        choices: {
            a: "AWS CloudTrail",
            b: "AWS Trusted Advisor",
            c: "Amazon GuardDuty",
            d: "AWS Config"
        },
        answer: 'd'
    },
    // Q61
    {
        question: "Which of the following are the application integration services enable communication between decoupled components in order to build a scalable and more resilient solution?",
        choices: {
            a: "AWS Simple Email Service (SES)",
            b: "Amazon MQ",
            c: "Amazon Data Sync",
            d: "Amazon SQS",
            e: "Amazon App Sync"
        },
        answer: ['b', 'd', 'e']
    },
    // Q62
    {
        question: "Which of the following statements illustrate the difference between inbound rules and outbound rules in security groups?",
        choices: {
            a: "Inbound rules control the incoming web traffic allowed to reach an instance; outbound rules control the outgoing web traffic allowed to leave the instance.",
            b: "Inbound rules control the web traffic leaving an instance; outbound rules control the web traffic reaching the instance.",
            c: "Inbound rules control the resources put into a VPC; outbound rules control the resources allowed to be removed from a VPC.",
            d: "Inbound rules control the source of the web traffic; outbound rules control the destination for the web traffic."
        },
        answer: ['a', 'd']
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
    },
    // Q65
    {
        question: "Many of the higher-level services on AWS are inherently designed according to the multiple Availability Zone principle. From the list below, select all the services where no additional steps are required to achieve a Multi-AZ setup.",
        choices: {
            a: "DynamoDB",
            b: "Neptune",
            c: "S3",
            d: "Cloud9"
        },
        answer: ['a', 'b', 'c']
    },
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
