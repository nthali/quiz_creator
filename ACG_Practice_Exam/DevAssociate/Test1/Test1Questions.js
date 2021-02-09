const myQuestions = [
    //Q1
    {
        question: "An application uses DynamoDB table as its backend data store. Each item has size of 10KB. The application needs to perform 100 strongly consistent read operations per second, and 50 write operations per second. What is the provisioned RCU value required to meet these requirements?",
        choices: {
            a: 1000,
            b: 500,
            c: 150,
            d: 300
        },
        answer: "d"
    },
    // Q2
    {
        question: "Which of the following statements about a standard SQS queue is true:",
        choices: {
        a: "Messages will be delivered one or more times and message delivery order is indeterminate",
        b: "Messages will be delivered one or more times in first-in, first-out order",
        c: "Messages will be delivered exactly once in first-in, first-out order",
        d: "Messages will be delivered exactly once, but message delivery order is indeterminate"
        },
        answer: "a"
    },
    // Q3
    {
        question: 'A Developer is implementing an application that must allow users to subscribe to e-mail notifications. Which AWS service is the best option for implementing this functionality?',
        choices: {
            a: 'SNS',
            b: 'SQS',
            c: 'SES',
            d: 'WorkMail'
        },
        answer: 'a'
    },
    // Q4
    {
        question: "Your company has a corporate identity store used to authenticate its users. Your company also has resources running on AWS. Your admin has created IAM roles and an identity broker that sits between your corporate users and your AWS resources to manage the authentication and authorization process without needing to re-create all your users as IAM users in AWS. Your CISO asked you to summarize the AWS identity federation process to ensure compliance with your applications' security. Which of the following statements correctly describes the authentication process?",
        choices: {
            a: "The enterprise user accesses the identity broker application. The identity broker application authenticates the users against the corporate identity store. The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console",
            b: "The enterprise user accesses the identity broker application. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console. The identity broker application authenticates the users against the corporate identity store. The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials",
            c: "The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials. The enterprise user accesses the identity broker application. The identity broker application authenticates the users against the corporate identity store. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console",
            d: "The enterprise user accesses the identity broker application. The identity broker application authenticates the users against the corporate identity store. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console. The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials"
        },
        answer: 'a'
    },
    // Q5
    {
        question: "Your application is running on EC2 and you are trying to capture data related to incoming and outgoing HTTP requests, and send it to X-Ray. You have instrumented the application, but after 1 hour, you are still not seeing any data appear in X-Ray. What could be the problem?",
        choices: {
            a: "you need to install the X-Ray telemetry agent on your EC2 instances",
            b: "You need to register your application in the X-Ray console",
            c: "You need to register your EC2 instances in the X-Ray console",
            d: "You need to make sure the X-Ray daemon is installed and running on your EC2 instances"
        },
        answer: "d"
    },
    // Q6
    {
        question: "A enterprise company is migrating their ERP system from on-premise to AWS. The ERP system comprises of a stateful web application operating over HTTP. Various components of the system are being implemented as microservices utilizing Docker. What load balancer configuration would be a suitable solution for the ERP system migration to AWS?",
        choices: {
            a: "Route53 with a CNAME and a CloudFront distribution",
            b: "Network Load Balancer with an Elastic IP.",
            c: "Application Load Balancer with sticky sessions",
            d: "Classic Load Balancer with sticky sessions"
        },
        answer: 'c'
    },
    // Q7
    {
        question: "Your application is experiencing a large number of failed requests when making calls to the S3 API. Which of the following best describes the approach used by AWS SDKs for regulating flow control when retrying failed API requests?",
        choices: {
            a: "AWS uses bandwidth throttling to manage flow control",
            b: "By default, the request is continuously retried until it is successful",
            c: "AWS uses Exponential Backoff to manage error retries",
            d: "Feedback Based Flow Control is used to avoid contention when retrying failed requests"
        },
        answer: 'c'
    },
    // Q8
    {
        question: "What is the largest size file you can transfer to S3 using a PUT operation?",
        choices: {
            a: "100MB",
            b: "1GB",
            c: "5TB",
            d: "5GB"
        },
        answer: 'd'
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
        question: "You are developing a social media messaging and photo-sharing application which consists of a fault-tolerant and flexible web front end, with persistent data stored in S3 and RDS. The application is required to run for at least 1 year. Which of the following instance pricing models should you choose to make running this application as cost-effective as possible?",
        choices: {
        a: "Use reserved instances for the database",
        b: "Use Spot instances for the web servers",
        c: "Use dedicated instances for the database servers",
        d: "Use dedicated instances for the web servers",
        e: "Use Spot instances for the database",
        f: "Use reserved instances for the web servers"
        },
        answer: ["a", 'b']
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
        question: "You have provisioned an RDS database and then deployed your application servers using Elastic Beanstalk. You now need to connect your application servers to the database. What should you do?",
        choices: {
            a: "Configure a security group allowing access to the database and add it to your environments auto-scaling group",
            b: "Provide the ip address of the RDS instance to Elastic Beanstalk",
            c: "Provide the database connection information to your application",
            d: "Configure Elastic Beanstalk to install a database client on your application servers"
        },
        answer: [ 'a', 'c' ] 
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
        question: 'You are working on updates to your .NET application which has been deployed using Elastic Beanstalk. Your environment consists of 4 EC2 instances, as well as a number of different Lambda functions and DynamoDB tables. The application requires at least 2 instances to cope with the average workload and a minimum of 3 instances to cope with peak-time traffic. The Project Manager has asked you to roll out the updates as quickly as possible. Which of the following deployment strategies do you recommend?',
        choices: {
            a: 'Immutable',
            b: 'Rolling',
            c: 'Rolling with additional batch',
            d: 'All at once',
        },
        answer: 'b'
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
        question: "Your main application currently stores its credentials as a text file on an EC2 server. Your Manager has informed you that this is an insecure practice and has told you to store these credentials in an AWS managed service instead. AWS Systems Manager Parameter Store and AWS Secrets Manager can be used for the secure storage of credentials. Of the below features, which apply to both Secrets Manager and Parameter Store?",
        choices: {
            a: "Available at no additional charge providing you store less than 10,000 credentials",
            b: "Supports encryption at rest using customer-owned KMS keys",
            c: "Integrated with Identity and Access Management",
            d: "Can store credentials in hierarchical form",
            e: "Manages rotation and lifecycle of credentials"
        },
        answer: [ 'b', 'c', 'd' ]
    },
    // Q17
    {
        question: "Which of the following is NOT a supported event source for Lambda?",
        choices: {
            a: "RDS",
            b: "CloudWatch Events",
            c: "DynamoDB",
            d: "S3"
        },
        answer: 'a'
    },
    // Q18
    {
        question: "A developer is configuring CodeDeploy to deploy an application to an EC2 instance. The application's source code is stored within AWS CodeCommit. What permissions need to be configured to allow CodeDeploy to perform the deployment to EC2?",
        choices: {
        a: "Create an IAM Policy with an acton to allow codecommit:GitPull on the required repository. Attach the policy to CodeDeploy's Service role",
        b: "Create an IAM policy with an acton to allow codecommit:GitPull on the required repository. Attach the policy to the EC2 instance profile role",
        c: "Create an IAM Policy with an acton to allow codecommit:CreatePullRequest on the required repository. Attach the policy to CodeDeploy's Service role",
        d: "Create an IAM policy with an acton to allow codecommit:CreatePullRequest on the required repository. Attach the policy to the EC2 instance profile role"
        },
        answer: "b"
    },
    // Q19
    {
        question: 'Your Security team have recently reviewed the security standards across your entire AWS environment. They have identified that a number of EC2 instances in your development environment have read and write access to an S3 bucket containing highly confidential production data. You have been asked to help investigate and suggest a way to remedy this. Which of the following can you use to find out what is going on so that you can suggest a solution?',
        choices: {
            a: 'Use CloudTrail and Athena to identify which role or policy is granting access',
            b: 'Use the VPC flow logs to identify which EC2 instances are attempting to access the bucket',
            c: 'Use the CLI or console to check the public access permissions of the S3 bucket',
            d: 'Use the IAM Policy Simulator to identify which role or policy is granting access',
        },
        answer: 'd'
    },
    // Q20
    {
        question: 'You are developing a latency-sensitive application which stores a lot of data in DynamoDB. Each item is 3.5KB in size. Which of the following DynamoDB settings would give you the greatest read throughput?',
        choices: {
            a: 'Configure the table with 15 read capacity units and configure the application to use a scan operation',
            b: 'Configure the table with 10 read capacity units and use strongly consistent reads',
            c: 'Configure the table with 10 read capacity units and use high-performance reads',
            d: 'Configure the table with 10 read capacity units and use eventually consistent reads',
            e: 'Configure the table with 15 read capacity units and use strongly consistent reads'
        },
        answer: 'd'
    },
    // Q21
    {
        question: 'You are the development lead on a large project to launch a new e-commerce website specialising in fishing supplies. Your developers are located in India, USA and the Middle East. You need to find a source code repository that everyone can use, and that will allow developers to continue to work on their code even when they are not connected to the internet. Which of the following would you suggest to the team?',
        choices: {
            a: 'Use CodeBuild in offline mode to manage your source code',
            b: 'Run an instance of Git in a docker container on AWS ECS',
            c: 'Use CodeCommit to manage your source code',
            d: 'Install Git on 2 EC2 instances in an auto-scaling group'
        },
        answer: 'c'
    },
    // Q22
    {
        question: "A DynamoDB table is configured in provisioned throughput mode with 500 RCU and 100 WCU. How much data can be read and written to the table each second?",
        choices: {
            a: "2000 KB for strongly consistent read operations, 4000 KB for eventually consistent read operations, 400 KB for write operations.",
            b: "2000 KB for strongly consistent read operations, 4000 KB for eventually consistent read operations, 100 KB for write operations",
            c: "500 KB for strongly consistent read operations, 1000 KB for eventually consistent read operations, 400 KB for write operations",
            d: "500 KB for strongly consistent read operations, 1000 KB for eventually consistent read operations, 100 KB for write operations"
        },
        answer: 'b'
    },
    // Q23
    {
        question: 'An organization has mandated that all data within its DynamoDB tables must be encrypted at rest using an AWS owned key. What must a developer do to ensure this?',
        choices: {
            a: 'This cannot be done; DynamoDB does not support encryption at rest',
            b: "There's no need to do anything; all DynamoDB tables are encrypted at rest with an AWS owned key by default",
            c: 'Enable DynamoDB encryption and select AWS owned CMK',
            d: 'Enable DynamoDB encryption and select AWS managed CMK',
        },
        answer: 'b'
    },
    // Q24
    {
        question: "You are developing a mobile web application using Lambda and API Gateway which stores persistent data in a DynamoDB table. You want to configure the application to allow new users to sign-up to your website using their Google mail credentials. Which is the best approach?",
        choices: {
            a: "Configure a Cognito User Pool to handle new user sign-up",
            b: "Write custom code to act as an identity broker to federate with Google",
            c: "Use a Cognito Identity Pool to handle new user sign-up",
            d: "Configure AD federation with Google as the relying party"
        },
        answer: 'a'
    },
    // Q25
    {
        question: "Your Lambda function requires a few libraries which are not available as standard in the Lambda runtime environment. Which of the following is a recommended way to make the libraries available to your function?",
        choices: {
            a: "Upload the deployment package to Lambda",
            b: "Add the dependencies to S3 and create an environment variable to reference them",
            c: "Store the deployment package in an S3 bucket and then upload it to Lambda",
            d: "Create a deployment package containing your function code and libraries",
            e: "Create a custom runtime which includes the libraries you need",
            f: "Create a handler function downloads the libraries you need"
        },
        answer: ['a', 'c', 'd']
    },
    // Q26
    {
        question: "You want to add a cross-origin resource sharing (CORS) configuration to one of your S3 buckets. Which of the following tabs should you choose to do so?",
        choices: {
            a: "Properties",
            b: "Access points",
            c: "Permissions",
            d: "Management"
        },
        answer: 'c'
    },
    // Q27
    {
        question: "You receive the following response from STS, What is happening here?\n<br>" + 
        "<pre><div class='code'>" + 
        '&lt;AssumeRoleWithWebIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">\n' +
        '&nbsp;&nbsp;&lt;AssumeRoleWithWebIdentityResult>\n' + 
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;SubjectFromWebIdentityToken>amzn1.account.AF6RHO7KZU5XRVQJGXK6HB56KR2A&lt;/SubjectFromWebIdentityToken>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;Audience>client.5498841531868486423.1548@apps.example.com&lt;/Audience>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;AssumedRoleUser>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Arn>arn:aws:sts::123456789012:assumed-role/FederatedWebIdentityRole/app1&lt;/Arn>\n' + 
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;AssumedRoleId>AROACLKWSDQRAOEXAMPLE:app1&lt;/AssumedRoleId>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;/AssumedRoleUser>\n' + 
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;Credentials>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SessionToken>AQoDYXdzEE0a8ANXXXXXXXXNO1ewxE5TijQyp+IEXAMPLE&lt;/SessionToken>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SecretAccessKey>wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY&lt;/SecretAccessKey>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Expiration>2014-10-24T23:00:23Z&lt;/Expiration>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;AccessKeyId>ASgeIAIOSFODNN7EXAMPLE&lt;/AccessKeyId>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Credentials>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;Provider>www.amazon.com&lt;/Provider>\n' +
        '&nbsp;&nbsp;&lt;/AssumeRoleWithWebIdentityResult>\n' +
        '&nbsp;&nbsp;&lt;ResponseMetadata>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&lt;RequestId>ad4156e9-bce1-11e2-82e6-6b6efEXAMPLE&lt;/RequestId>\n' +
        '&nbsp;&nbsp;&lt;/ResponseMetadata>\n' +
        '&lt;/AssumeRoleWithWebIdentityResponse>\n' +
        '</div></pre>',
        choices: {
            a: "The web identity token that was passed could not be validated by AWS",
            b: "The user is allowed to assume the following role: <span class='code'>arn:aws:sts::123456789012:assumed-role/FederatedWebIdentityRole/app1</span>",
            c: "The user with the following ARN is given access to the application: <span class='code'>arn:aws:sts::123456789012:assumed-role/FederatedWebIdentityRole/app1</span>",
            d: "The intended audience (also known as client ID) of the web identity token is <span class='code'>client.5498841531868486423.1548@apps.example.com</span>",
            e: "STS is returning temporary security credentials to a user who has successfully authenticated with a web identity provider."
        },
        answer: 'b'
    },
    // Q28
    {
        question: "Your application is running on Docker in an Elastic Beanstalk. You have been asked to deploy a new version of the application code. What is the process for doing this?",
        choices: {
            a: "Log in to the EC2 instance, update the dockerfile and restart the container",
            b: "Delete your environment and redeploy using the new code",
            c: "Log in to the underlying EC2 instance and replace the existing Docker image with the new code",
            d: "Use the Elastic Beanstalk console to upload and deploy the new version of your application using a zip file containing your code"
        },
        answer: "d"
    },
    // Q29
    {
        question: "A developer needs to compile Java code to produce a deployment artifact. Which Amazon service can the developer use for this task?",
        choices: {
            a: "CodeCommit",
            b: "CodeBuild",
            c: "CodePipeline",
            d: "CodeDeploy"
        },
        answer: 'b'
    },
    // Q30
    {
        question: "Which of the following statements relating are correct in relation to DynamoDB?",
        choices: {
        a: "A Local Secondary Index is an index that has the a different partition key and a different sort key to the table",
        b: "You can add a Local Secondary Index to an existing table",
        c: "You can add a Global Secondary Index to an existing table",
        d: "A Local Secondary Index is an index that has the same partition key as the table, but a different sort key to the table"
        },
        answer: [ 'c', 'd' ]
    },
    // Q31
    {
        question: "A developer has a requirement to trigger a Lambda function once every 24 hours. What is the best way of achieving this requirement?",
        choices: {
            a: "Add a message into SQS that invokes the Lambda function. As part of the Lambda function's code, add a new message into SQS to re-invoke the function with a DelaySeconds equal to 24 hours",
            b: "Invoke the Lambda function from a cron job running on an EC2 instance",
            c: "Schedule a trigger in CloudWatch Events",
            d: "Schedule the trigger in the Lambda Runtime Scheduler",
        },
        answer: 'c'
    },
    // Q32
    {
        question: "A developer is deploying a new application to ECS. The application requires permissions to send messages to an SQS queue. Which role should the developer apply the policy to so that the application can access the SQS queue?",
        choices: {
            a: "The execution role attached to the ECS Service.",
            b: "The execution role attached to the ECS Task.",
            c: "The execution role attached to the ECS Cluster.",
            d: "The execution role attached to the ECS Container."
        },
        answer: 'b'
    },
    // Q33
    {
        question: "Your application needs to access content located in an S3 bucket which is residing in a different AWS account, which of the following API calls should be used to gain access?",
        choices: {
            a: "STS:GetFederationToken",
            b: "STS:AssumeRole",
            c: "IAM:AddRoleToInstanceProfile",
            d: "STS:AttachRole"
        },
        answer: 'b'
    },
    // Q34
    {
        question: "Your application needs to process large numbers of job requests and you need to ensure that they are processed in order, and that each request is processed only once. How would you deploy SQS to achieve this end?",
        choices: {
            a: "Convert your standard queue to a FIFO queue by renaming your standard queue with the .fifo suffix",
            b: "Configure FIFO delivery in a standard SQS queue",
            c: "Use an SQS FIFO queue to process the jobs",
            d: "Use the SetOrder attribute ensure sequential job processing",
        },
        answer: 'c'
    },
    // Q35
    {
        question: "You are developing a serverless application which runs on Lambda, DynamoDB and API Gateway. The application needs to support an average of 5,000 requests per second. During testing, the Test Team want to test for peaks of 2.5 x the average load (12,500 requests per second). Shortly after testing begins, your application crashes with API Gateway generating a 429 error code. What could be the reason for this?",
        choices: {
            a: "Your tests have caused the application to hit the default limit of 10,000 requests per second for API Gateway",
            b: "Your Lambda function has run out of CPU, you need to increase the memory allocation in order to increase CPU capacity",
            c: "Your tests have caused the application to hit the default limit of 10,000 requests per second for Lambda",
            d: "Your Lambda function has run out of memory, you need to increase CPU capacity in order to increase memory capacity"
        },
        answer: 'd'
    },
    // Q36
    {
        question: "You application can be accessed using multiple devices, for example, laptop, tablet, iPhone or Android devices. You would like to be able to identify and track when your users access your site using different devices. Which of the following AWS technologies can enable you to do this?",
        choices: {
            a: "Use Cognito",
            b: "Use a Lambda function to store a unique device ID in DynamoDB and associate it with the user session ID",
            c: "Create a unique user ID and associate it with the device metadata",
            d: "Store a unique session ID in DynamoDB",
            e: "Store a unique session ID in ElastiCache"
        },
        answer: 'a'
    },
    // Q37
    {
        question: "You are planning to use CodeDeploy to deploy an application for the first time to a brand new fleet of EC2 instances. Which deployment approach would you recommend?",
        choices: {
            a: "Rolling with additional batch",
            b: "In-place",
            c: "Blue / Green",
            d: "Canary"
        },
        answer: 'b'
    },
    // Q38
    {
        question: "An organization has mandated that all files stored in their newly created S3 bucket, 'top-secret-documents', must be encrypted using a Customer Master Key stored in KMS.<br>What is the best way to enforce this requirement?",
        choices: {
            a: "Add a bucket policy that denies PUT operations that don't contain the HTTP header <span class='code'>x-amz-server-side-encryption: SSE:C</span>",
            b: "Enable S3 Default encryption and select AWS-KMS",
            c: "Add a bucket policy that denies PUT operations that don't contain the HTTP header <span class='code'>x-amz-server-side-encryption: aws:kms</span>",
            d: "Add a bucket policy that denies PUT operations that don't contain the HTTP header <span class='code'>x-amz-server-side-encryption: AES256</span>"
        },
        answer: 'c'
    },
    // Q39
    {
        question: "You are developing a serverless retail application which includes a mobile app. All your product data is stored in DynamoDB, whilst the application itself runs on Lambda. The product catalogue is updated once every 6 months, to reflect seasonal stock and price updates. Each database read is 3KB in size and the application performs around 20 reads per second. Which of the following DynamoDB settings would you recommend?",
        choices: {
            a: "Configure the table with 20 read capacity units",
            b: "Configure your application to use a query rather than a scan",
            c: "Use strongly consistent reads",
            d: "Configure the table to use high performance reads",
            e: "Configure the table with 10 read capacity units",
            f: 'Use eventually consistent reads'
        },
        answer: ['e', 'f']
    },
    // Q40
    {
        question: "You are a developer running an application on AWS Elastic Beanstalk. You are implementing an application update and need to use a deployment policy. The requirements are to maintain full capacity, deploy five instances at once for the new version, and to terminate instances running the old version once the new instances are running successfully. How would you implement this deployment policy?",
        choices: {
            a: "Set the deployment policy as All at Once. Set the batch size type as Fixed, and the batch size as 5",
            b: "Set the deployment policy as Blue/Green. Set the timeout as 900, and the batch size as 5",
            c: "Set the deployment policy as Rolling. Set the batch size as 5",
            d: "Set the deployment policy as Rolling with Additional Batch. Set the batch size type as Fixed, and the batch size as 5"
        },
        answer: 'd'
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
        question: 'Your application is using Kinesis to ingest data from a number of environmental sensors which continuously monitor for pollution within a 1 mile radius of a local primary school. An EC2 instance consumes the data from the stream using the Kinesis Client Library. You have recently increased the number of shards in your stream to 6 and your project manager is now suggesting that you need to add at least 6 additional EC2 instances to cope with the new shards. What do you recommend?',
        choices: {
            a: 'You should increase the number of instances to match the number of shards',
            b: "One worker can process any number of shards, so it's fine if the number of shards exceeds the number of instances",
            c: 'You should decrease the number of shards to match the number of consumer instances',
            d: 'The number of instances should be greater than number of shards'
        },
        answer: 'b'
    },
    // Q43
    {
        question: "Which of the following are supported ways to upload and deploy your Lambda code?",
        choices: {
            a: "Zip your code into a zip file and upload it via the Lambda console",
            b: "Copy and paste your code in to the integrated development environment (IDE) inside Lambda",
            c: "Zip your code into a zip file, upload it to Elastic Beanstalk, then deploy your environment using Elastic Beanstalk",
            d: "Write a CloudFormation template that will deploy your environment including your code",
            e: "Zip your code into a zip file, upload it to an S3 bucket and have Lambda download it from S3"
        },
        answer: ['a', 'b', 'd', 'e']
    },
    // Q44
    {
        question: "You are working on a Lambda function which needs to access data in RDS, which of the below are valid approaches for securely storing the encrypted database connection strings and other secrets which your function needs to use?",
        choices: {
            a: "Store the encrypted connection string and other secrets in S3",
            b: "Use Lambda Environment Variables",
            c: "Use Systems Manager Parameter Store",
            d: "Use DynamoDB to store the encrypted connection string and secrets"
        },
        answer: [ 'b', 'c' ]
    },
    // Q45
    {
        question: "You are developing a batch process job on Amazon EMR. The EMR instances need to access data stored in Amazon RDS in order to initialize the batch processing. The application code ran properly during testing but is not able to properly retrieve data from the RDS instance as there appears to be no connectivity. How would you remedy this situation in the most effective manner?",
        choices: {
            a: "This an AWS issue. AWS manages the underlying RDS and EMR infrastructure; they should be able to communicate with each other. Open a Support Case to resolve the issue",
            b: "Migrate the application to run on Amazon EC2 instead. Create an auto-scaling group to scale the batch process when it exceeds a CPU threshold",
            c: "Create a new key pair associated with the EMR instance. The current key pair is invalid",
            d: "Edit the security group rules associated with the RDS and EMR instances to allow inbound/outbound access"
        },
        answer: 'd'
    },
    // Q46
    {
        question: "You are trying to use CodeDeploy to deploy the latest version of your application which is stored in S3. You are trying to deploy the code to a new EC2 instance for the very first time. However the deployment keeps failing with an IAM_ROLE_PERMISSIONS error. Other team members have been able to successfully run the deployment to other EC2 instances and you suspect that your instance may not have permission to access the code in the S3 bucket. Which of the following can you use to test whether the instance role allows your EC2 instance to get the code from S3?",
        choices: {
            a: "Check the IAM logs to see whether the instance role allows access",
            b: "Use the IAM Policy Simulator test whether the instance role allows access",
            c: "Use Trusted Advisor to check whether the instance role allows access",
            d: "Use the console to check the public access permission on the S3 bucket and enable it if is set to false"
        },
        answer: 'b'
    },
    // Q47
    {
        question: 'A three-tier web application is deployed using CloudFormation template. How can the CloudFormation developer ensure that the database resource is saved for backup purposes upon stack deletion?',
        choices: {
            a: 'Set the DeletionProtection to True in the CloudFormation template',
            b: "Create IAM Policy with Effect of Deny for 'cloudformation:DeleteStack' Action",
            c: 'Set Stack Termination Protection to Enable',
            d: 'Set the DeletionPolicy to Retain in the CloudFormation template'
        },
        answer: 'a'
    },
    // Q48
    {
        question: "You are working as a Developer for an online retailer. Your Security Architect has requested that any files stored in S3 must be encrypted. However some teams are continuing to upload their files without encrypting them. Which of the following will ensure that only encrypted data is uploaded?",
        choices: {
            a: "Use a bucket policy that only allows PUT operations which include the x-amz-server-side-encryption parameter in the request heade",
            b: "Create a bucket ACL that only allows PUT operations which include the x-amz-encryption parameter in request header",
            c: "Tell all team members to include the x-amz-encryption parameter in request header",
            d: "Select the Encrypted Files Only checkbox in the S3 Permissions tab in the AWS console"
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
        question: 'You need to allow another AWS account access to resources in your AWS account, what is the recommended mechanism to configure this?',
        choices: {
            a: 'Use Cognito to allow the third party to sign-up as a guest user to get temporary access to your account',
            b: 'Configure Web Identity Federation to allow them to log in to your account',
            c: 'Provide AWS credentials to the third party so that they can log into your account and access the resources they need',
            d: 'Configure cross account access by creating a role in your account which has permission to access only the resources they need. Allow the third party account to assume the role based on their account ID and unique external ID'
        },
        answer: 'd'
    },
    // Q51
    {
        question: "AWS recommends that you use Multipart Upload for files larger than _____.",
        choices: {
            a: "1GB",
            b: "5TB",
            c: "5GB",
            d: "100MB"
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
        question: "You are planning to deploy a new version of your application using CodeDeploy. You only have a window of 2 hours to complete the deployment and test it. Your team leader is concerned about the time it could take to roll back the upgrade if it should fail. Which deployment approach would you recommend?",
        choices: {
            a: "In-place.",
            b: "Canary",
            c: "Blue/Green",
            d: "Rolling with additional batch"
        },
        answer: "c"
    },
    // Q54
    {
        question: "You are migrating a restaurant booking application from your own data center to AWS. The application currently runs on a number of virtual machines running web and application servers as well as a shared database server. The applications need to access a large number of shared images and documents containing drinks and food menus. Which combined solutions can you choose as a shared storage and to allow the EC2 instances the appropriate access, so the application servers can still handle the shared files?",
        choices: {
            a: "Store the files in S3",
            b: "Store the files in DynamoDB",
            c: "Use an IAM instance role to grant access",
            d: "Embed IAM credentials in the EC2 instance metadata",
            e: "Store the files in SQS",
            f: "Generate a pre-signed URL to grant access",
            g: "Store the files in ElastiCache"
        },
        answer: "a"
    },
    // Q55
    {
        question: "A content publishing organization runs its own platform, which uses DynamoDB as its data store. A bug report has come in from the content team. They say that when two editors are working on the same content they frequently overwrite each other's changes.<br>What DynamoDB feature would prevent the most number of overwrite bug reports?",
        choices: {
            a: "Include an acid-expression in the UpdateItem command",
            b: "Include a condition-expression in the UpdateItem command",
            c: "Call GetItem immediately before calling UpdateItem to ensure the item has not changed.",
            d: "Apply a time-limited lock to the item while an author is editing it using a DynamoDB TTL"
        },
        answer: 'b'
    },
    // Q56
    {
        question: "Which of the following AWS services would you recommend using to store session state data for a scalable web application?",
        choices: {
            a: "EC2 instance memory",
            b: "EC2 instance EBS volume",
            c: "ElastiCache",
            d: "Glacier",
            e: "Lambda"
        },
        answer: 'c'
    },
    // Q57
    {
        question: 'GetItem operation is used to read data from a DynamoDB table. What strategy can be used to reduce the size of the read operations and increase read efficiency?',
        choices: {
            a: 'Use Pagination',
            b: 'Use Parallel Scan',
            c: 'Use Projection Expression',
            d: 'Use Filter Expression'
        },
        answer: 'c'
    },
    // Q58
    {
        question: "You've been asked to create a Web application with an endpoint that can handle thousands of REST calls a minute. What AWS service can be used in front of an application to assist in achieving this?",
        choices: {
            a: "Elastic Beanstalk",
            b: "API Gateway",
            c: "Global Accelerator",
            d: "CloudFront"
        },
        answer: 'b'
    },
    // Q59
    {
        question: "You are running a large distributed application using a mix of EC2 instances and Lambda. Your EC2 instances are spread across multiple availability zones for resilience and are configured inside a VPC. You have just developed a new Lambda function which you are testing. However, when you try to complete the testing, your function cannot access a number of application servers which are located in the same private subnet. Which of the following could be a possible reason for this?",
        choices: {
            a: "The function execution role does not include permission to connect to the VPC",
            b: "Your security group does not allow connectivity from the AWS Lambda endpoint",
            c: "The EC2 instances are running in a different region to the Lambda function",
            d: "The EC2 instances need to be in the same subnet as the Lambda function"
        },
        answer: 'd'
    },
    // Q60
    {
        question: "An IT Auditor has started in your Security Team, they will need access to read files in S3 and DynamoDB as well as the ability to describe EC2 instances. You want to ensure that only the Auditor is granted this access and that the IAM policy you create cannot mistakenly be attached to any other user. Which IAM policy type should you use?",
        choices: {
            a: "AWS Managed Policy",
            b: "Inline Policy",
            c: "Custom Policy",
            d: "Customer Managed Policy"
        },
        answer: 'b'
    },
    // Q61
    {
        question: "What is the name of the service that allows users to use their social media account to gain temporary access to the AWS platform?",
        choices: {
            a: "Web Confederation Services",
            b: "Web Identity Federation",
            c: "Facebook Sign In Service",
            d: "Active Directory Authentication Services",
        },
        answer: 'b'
    },
    // Q62
    {
        question: "You are developing an online auction application which uses SQS to exchange messages between application components. Some of the messages are between 1GB and 2GB in size. What is the AWS recommended way of managing large messages in SQS?",
        choices: {
            a: "Store the messages using DynamoDB",
            b: "Use the Amazon SQS Extended Client Library for Java to manage SQS messages",
            c: "Store the messages using S3",
            d: "Store the messages in SQS",
            e: "Use the SQS API to manage SQS messages",
            f: "Use the SQS CLI to manage SQS messages",
            g: "Use the AWS Java SDK to manage SQS messages"
        },
        answer: ['b', 'c']
    },
    // Q63
    {
        question: "You are working on an application which handles online credit card applications. It consists of a number of web and application servers running on EC2, customer reference data stored in S3 and transactional data stored in RDS. The security team have noticed that you have a lot of sensitive customer information stored in S3 and you have been asked to configure encryption at rest to protect the data. How can you do this?",
        choices: {
            a: "Encrypt your local root disk before uploading the files",
            b: "Use SSL to upload the files",
            c: "Encrypt the files locally using the AWS Encryption SDK",
            d: "Select default encryption on your S3 bucket"
        },
        answer: "d"
    },
    // Q64
    {
        question: 'You are a developer for a news, entertainment, lifestyle, and fashion website. User traffic has steadily increased month-over-month, and you are now tasked with cost optimizing the website. The website is currently served from an EC2 instance that is part of an auto-scaling group behind an elastic load balancer. Your manager and CTO have approved a complete re-structuring of the websites architecture in order to accommodate future growth. How would you optimize your application in the MOST cost-effective way?',
        choices: {
            a: 'Move the website to a serverless application. Use S3 to host the website. Use a combination of Lambda and API Gateway to support dynamic API requests',
            b: 'Implement CloudFront in front of the EC2 instance as the origin',
            c: 'Edit the scale-in policy within auto scaling to terminate instances aggressively when demand is low',
            d: "Move the application on-premise. You'll be able to fully manage the application, and purchase additional servers when appropriate",
        },
        answer: 'a'
    },
    // Q65
    {
        question: "A CustomerOrders DynamoDB table contains attributes Customer Name (PK), Order Item, and Cost. What DynamoDB operation would be used to find all orders with cost greater than $10?",
        choices: {
            a: "query operation with “--key-condition-expression” parameter",
            b: "query operation with “--filter-expression” parameter",
            c: "scan operation with “--projection-expression” parameter",
            d: "scan operation with “--filter-expression” parameter"
        },
        answer: 'd'
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
