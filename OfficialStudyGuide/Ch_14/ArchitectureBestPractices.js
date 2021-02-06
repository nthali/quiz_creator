const myQuestions = [
    {
      question: 'When designing a loosely coupled system, which AWS services provide an intermediate durable storage layer between components? (Choose 2 answers)',
      choices: {
        a: 'Amazon CloudFront',
        b: 'Amazon Kinesis',
        c: 'Amazon Route 53',
        d: 'AWS CloudFormation',
        e: 'Amazon Simple Queue Service (Amazon SQS)'
      },
      answer: ['b', 'e']
    },
    {
      question: 'Which of the following options will help increase the availability of a web server farm? (Choose 2 answers)',
      choices: {
        a: 'Use Amazon CloudFront to deliver content to the end users with low latency and high data transfer speeds.',
        b: 'Launch the web server instances across multiple Availability Zones.',
        c: 'Leverage Auto Scaling to recover from failed instances.',
        d: 'Deploy the instances in an Amazon Virtual Private Cloud (Amazon VPC).',
        e: 'Add more CPU and RAM to each instance.'
      },
      answer: ['b', 'c']
    },
    {
      question: 'Which of the following AWS Cloud services are designed according to the Multi-AZ principle? (Choose 2 answers)',
      choices: {
        a: 'Amazon DynamoDB',
        b: 'Amazon ElastiCache',
        c: 'Elastic Load Balancing',
        d: 'Amazon Virtual Private Cloud (Amazon VPC)',
        e: 'Amazon Simple Storage Service (Amazon S3)'
      },
      answer: ['a', 'e']
    },
    {
      question: 'Your e-commerce site was designed to be stateless and currently runs on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances. In an effort to control cost and increase availability, you have a requirement to scale the fleet based on CPU and network utilization to match the demand curve for your site. What services do you need to meet this requirement? (Choose 2 answers)',
      choices: {
        a: 'Amazon CloudWatch',
        b: 'Amazon DynamoDB',
        c: 'Elastic Load Balancing',
        d: 'Auto Scaling',
        e: 'Amazon Simple Storage Service (Amazon S3)'
      },
      answer: ['a', 'd']
    },
    {
      question: 'Your compliance department has mandated a new requirement that all data on Amazon Elastic Block Storage (Amazon EBS) volumes must be encrypted. Which of the following steps would you follow for your existing Amazon EBS volumes to comply with the new requirement? (Choose 3 answers)',
      choices: {
        a: 'Move the existing Amazon EBS volume into an Amazon Virtual Private Cloud (Amazon VPC).',
        b: 'Create a new Amazon EBS volume with encryption enabled.',
        c: 'Modify the existing Amazon EBS volume properties to enable encryption.',
        d: 'Attach an Amazon EBS volume with encryption enabled to the instance that hosts the data, then migrate the data to the encryption-enabled Amazon EBS volume.',
        e: 'Copy the data from the unencrypted Amazon EBS volume to the Amazon EBS volume with encryption enabled.'
      },
      answer: ['b', 'd', 'e']
    },
    {
      question: 'When building a Distributed Denial of Service (DDoS)-resilient architecture, how does Amazon Virtual Private Cloud (Amazon VPC) help minimize the attack surface area? (Choose 3 answers)',
      choices: {
        a: 'Reduces the number of necessary Internet entry points',
        b: 'Combines end user traffic with management traffic',
        c: 'Obfuscates necessary Internet entry points to the level that untrusted end users cannot access them',
        d: 'Adds non-critical Internet entry points to the architecture',
        e: 'Scales the network to absorb DDoS attacks'
      },
      answer: ['a', 'c', 'd']
    },
    {
      question: 'Your e-commerce application provides daily and  ad hoc  reporting to various business units on customer purchases. This is resulting in an extremely high level of read traffic to your MySQL Amazon Relational Database Service (Amazon RDS) instance. What can you do to scale up read traffic without impacting your database’s performance?',
      choices: {
        a: 'Increase the allocated storage for the Amazon RDS instance.',
        b: 'Modify the Amazon RDS instance to be a Multi-AZ deployment.',
        c: 'Create a read replica for an Amazon RDS instance.',
        d: 'Change the Amazon RDS instance DB engine version.'
      },
      answer: 'c'
    },
    {
      question: 'Your website is hosted on a fleet of web servers that are load balanced across multiple Availability Zones using an Elastic Load Balancer (ELB). What type of record set in Amazon Route 53 can be used to point  myawesomeapp.com  to your website?',
      choices: {
        a: 'Type A Alias resource record set',
        b: 'MX record set',
        c: 'TXT record set',
        d: 'CNAME record set'
      },
      answer: 'a'
    },
    {
      question: 'You need a secure way to distribute your AWS credentials to an application running on Amazon Elastic Compute Cloud (Amazon EC2) instances in order to access supplementary AWS Cloud services. What approach provides your application access to use short-term credentials for signing requests while protecting those credentials from other users?',
      choices: {
        a: 'Add your credentials to the  UserData  parameter of each Amazon EC2 instance.',
        b: 'Use a configuration file to store your access and secret keys on the Amazon EC2 instances.',
        c: 'Specify your access and secret keys directly in your application.',
        d: 'Provision the Amazon EC2 instances with an instance profile that has the appropriate privileges.'
      },
      answer: 'd'
    },
    {
      question: 'You are running a suite of microservices on AWS Lambda that provide the business logic and access to data stored in Amazon DynamoDB for your task management system. You need to create well-defined RESTful Application Program Interfaces (APIs) for these microservices that will scale with traffic to support a new mobile application. What AWS Cloud service can you use to create the necessary RESTful APIs?',
      choices: {
        a: 'Amazon Kinesis',
        b: 'Amazon API Gateway',
        c: 'Amazon Cognito',
        d: 'Amazon Elastic Compute Cloud (Amazon EC2) Container Registry'
      },
      answer: 'b'
    },
    {
      question: 'Your WordPress website is hosted on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances that leverage Auto Scaling to provide high availability. To ensure that the content of the WordPress site is sustained through scale up and scale down events, you need a common file system that is shared between more than one Amazon EC2 instance. Which AWS Cloud service can meet this requirement?',
      choices: {
        a: 'Amazon CloudFront',
        b: 'Amazon ElastiCache',
        c: 'Amazon Elastic File System (Amazon EFS)',
        d: 'Amazon Elastic Beanstalk'
      },
      answer: 'c'
    },
    {
      question: 'You are changing your application to move session state information off the individual Amazon Elastic Compute Cloud (Amazon EC2) instances to take advantage of the elasticity and cost benefits provided by Auto Scaling. Which of the following AWS Cloud services is best suited as an alternative for storing session state information?',
      choices: {
        a: 'Amazon DynamoDB',
        b: 'Amazon Redshift',
        c: 'Amazon Storage Gateway',
        d: 'Amazon Kinesis'
      },
      answer: 'a'
    },
    {
      question: 'A media sharing application is producing a very high volume of data in a very short period of time. Your back-end services are unable to manage the large volume of transactions. What option provides a way to manage the flow of transactions to your back-end services?',
      choices: {
        a: 'Store the inbound transactions in an Amazon Relational Database Service (Amazon RDS) instance so that your back-end services can retrieve them as time permits.',
        b: 'Use an Amazon Simple Queue Service (Amazon SQS) queue to buffer the inbound transactions.',
        c: 'Use an Amazon Simple Notification Service (Amazon SNS) topic to buffer the inbound transactions.',
        d: 'Store the inbound transactions in an Amazon Elastic MapReduce (Amazon EMR) cluster so that your back-end services can retrieve them as time permits.'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following are best practices for managing AWS Identity and Access Management (IAM) user access keys? (Choose 3 answers)',
      choices: {
        a: 'Embed access keys directly into application code.',
        b: 'Use different access keys for different applications.',
        c: 'Rotate access keys periodically.',
        d: 'Keep unused access keys for an indefinite period of time.',
        e: 'Configure Multi-Factor Authentication (MFA) for your most sensitive operations.'
      },
      answer: ['b', 'c', 'e']
    },
    {
      question: 'You need to implement a service to scan Application Program Interface (API) calls and related events’ history to your AWS account. This service will detect things like unused permissions, overuse of privileged accounts, and anomalous logins. Which of the following AWS Cloud services can be leveraged to implement this service? (Choose 3 answers)',
      choices: {
        a: 'AWS CloudTrail',
        b: 'Amazon Simple Storage Service (Amazon S3)',
        c: 'Amazon Route 53',
        d: 'Auto Scaling',
        e: 'AWS Lambda'
      },
      answer: ['a', 'b', 'e']
    },
    {
      question: 'Government regulations require that your company maintain all correspondence for a period of seven years for compliance reasons. What is the best storage mechanism to keep this data secure in a cost-effective manner?',
      choices: {
        a: 'Amazon S3',
        b: 'Amazon Glacier',
        c: 'Amazon EBS',
        d: 'Amazon EFS'
      },
      answer: 'b'
    },
    {
      question: 'Your company provides media content via the Internet to customers through a paid subscription model. You leverage Amazon CloudFront to distribute content to your customers with low latency. What approach can you use to serve this private content securely to your paid subscribers?',
      choices: {
        a: 'Provide signed Amazon CloudFront URLs to authenticated users to access the paid content.',
        b: 'Use HTTPS requests to ensure that your objects are encrypted when Amazon CloudFront serves them to viewers.',
        c: 'Configure Amazon CloudFront to compress the media files automatically for paid subscribers.',
        d: 'Use the Amazon CloudFront geo restriction feature to restrict access to all of the paid subscription media at the country level.'
      },
      answer: 'a'
    },
    {
      question: 'Your company provides transcoding services for amateur producers to format their short films to a variety of video formats. Which service provides the best option for storing the videos?',
      choices: {
        a: 'Amazon Glacier',
        b: 'Amazon Simple Storage Service (Amazon S3)',
        c: 'Amazon Relational Database Service (Amazon RDS)',
        d: 'AWS Storage Gateway'
      },
      answer: 'b'
    },
    {
      question: 'A week before Cyber Monday last year, your corporate data center experienced a failed air conditioning unit that caused flooding into the server racks. The resulting outage cost your company significant revenue. Your CIO mandated a move to the cloud, but he is still concerned about catastrophic failures in a data center. What can you do to alleviate his concerns?',
      choices: {
        a: 'Distribute the architecture across multiple Availability Zones.',
        b: 'Use an Amazon Virtual Private Cloud (Amazon VPC) with subnets.',
        c: 'Launch the compute for the processing services in a placement group.',
        d: 'Purchase Reserved Instances for the processing services instances.'
      },
      answer: 'a'
    },
    {
      question: 'Your Amazon Virtual Private Cloud (Amazon VPC) includes multiple private subnets. The instances in these private subnets must access third-party payment Application Program Interfaces (APIs) over the Internet. Which option will provide highly available Internet access to the instances in the private subnets?',
      choices: {
        a: 'Create an AWS Storage Gateway in each Availability Zone and configure your routing to ensure that resources use the AWS Storage Gateway in the same Availability Zone.',
        b: 'Create a customer gateway in each Availability Zone and configure your routing to ensure that resources use the customer gateway in the same Availability Zone.',
        c: 'Create a Network Address Translation (NAT) gateway in each Availability Zone and configure your routing to ensure that resources use the NAT gateway in the same Availability Zone.',
        d: 'Create a NAT gateway in one Availability Zone and configure your routing to ensure that resources use that NAT gateway in all the Availability Zones.'
      },
      answer: 'c'
    }];