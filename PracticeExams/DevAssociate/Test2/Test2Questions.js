const myQuestions = [
    // Q1
    {
        question: 'AWS recommends that you use Multipart Upload for files larger than _____',
        choices: {
            a: '5GB',
            b: '1GB',
            c: '100MB',
            d: '5TB'
        },
        answer: 'c'
    },
    // Q02
    {
        question: "You've created an online forum to which your users post questions and comments. The 'thread' table has many users and each user has many posts, each marked by a timestamp. Which primary key configuration would be best suited to see all posts by a particular user in chronological order?",
        choices: {
            a: 'A composite key with UserID as the sort key and timestamp as the partition key',
            b: 'A composite key with UserID as the sort key and timestamp as the hash key.',
            c: 'A composite key with UserID as the range key and timestamp as the sort key',
            d: 'A composite key with UserID as the partition key and the timestamp as the sort key'
        },
        answer: 'd'
    },
    // Q03
    {
        question: 'GetItem operation is used to read data from a DynamoDB table. What strategy can be used to reduce the size of the read operations and increase read efficiency?',
        choices: {
            a: 'Use Filter Expression',
            b: 'Use Pagination',
            c: 'Use Projection Expression',
            d: 'Use Parallel Scan'
        },
        answer: 'c'
    },
    // Q04
    {
        question: 'What does the error "ProvisionedThroughputExceededException" mean in DynamoDB?',
        choices: {
            a: 'There is no such error message. The correct error message would be "ProvisionedThroughputFailureException"',
            b: 'The DynamoDB table is unavailable',
            c: 'You exceeded your maximum allowed provisioned throughput for a table or for one or more global secondary indexes',
            d: 'The DynamoDB table has exceeded the allocated space'
        },
        answer: 'c'
    },
    // Q05
    {
        question: 'You are importing an existing API to API Gateway. Which format is supported for API definition files [Choose 3]?',
        choices: {
            a: 'OpenAPI v3.0',
            b: 'Angular',
            c: 'RAML',
            d: 'OpenAPI v2.0',
            e: 'Swagger'
        },
        answer: ['a', 'd', 'e']
    },
    // Q06
    {
        question: 'An organization wishes to use AWS SQS as a job queue. There is no requirement that jobs have to be processed in the order in which they are added to the queue; however, duplicate jobs must not appear in the queue',
        choices: {
            a: 'Implement a FIFO SQS queue',
            b: 'Lock messages once they are added to the queue to prevent duplicates from being added',
            c: 'Use DynamoDB to track what jobs are in the queue. Check DynamoDB before adding a new job to the queue to ensure it is not a duplicate',
            d: 'Implement a standard SQS queue'
        },
        answer: 'a'
    },
    // Q07
    {
        question: 'You are developing a new application which allows users to search for parking spots in their local area. Your application is based on Lambda and uses API Gateway to connect to third party parking lot companies to access information about parking tariffs and availability. Your application stores session data in a DynamoDB table, however you want to keep costs to a minimum and would like to automatically delete the session data from the table once the user session has expired and the data is no longer relevant. How can you most easily achieve this?',
        choices: {
            a: 'Write a Lambda function to continually poll the table to check if the session data has expired and then delete the item from the table',
            b: 'Configure a TTL based on the session expiry time',
            c: 'Use DynamoDB Streams to prune the table and remove any unwanted data',
            d: 'Use SNS to send a notification when the session data expires, then configure API Gateway to remove the unwanted data'
        },
        answer: 'b'
    },
    // Q08
    {
        question: 'You have a load balancer configuration that you use for most of your CloudFormation stacks. This load balancer always sits in front of your application running on EC2 as it has the important function of forwarding HTTPS requests on port 443 to HTTP requests on port 80 on the instance. As demand for the application grows you need to reuse this load balancer configuration in multiple other deployments of the application and you need to use CloudFormation to do this in an automated way. What is the most efficient way to deploy the load balancer configuration?',
        choices: {
            a: 'Use AWS CloudFormation direct updates to quickly deploy the same load balancer configuration in multiple environments',
            b: 'Use AWS CloudFormation change sets to change the load balancer configuration based on Region/AZ where you want to deploy a copy of the application',
            c: 'Use AWS CloudFormation nested stacks by creating a dedicated template for the load balancer and refer to that template within other templates',
            d: 'Instead of CloudFormation, use Lambda. Let the load balancer trigger a Lambda function that has the infrastructure code embedded to deploy the configuration when prompted'
        },
        answer: 'c'
    },
    // Q09
    {
        question: 'You are developing a serverless application and you need somewhere to persist user state data. Which if the following would you recommend?',
        choices: {
            a: 'Lambda',
            b: 'Serverless Application Model',
            c: 'API Gateway',
            d: 'DynamoDB'
        },
        answer: 'd'
    },
    // Q10
    {
        question: 'What attribute should be set on a message when sent to a SQS queue that prevents the message from becoming visible to consumers of the queue for 300 seconds?',
        choices: {
            a: 'MessageRetentionPeriod',
            b: 'ReceiveMessageWaitTimeSeconds',
            c: 'VisibilityTimeout',
            d: 'DelaySeconds'
        },
        answer: 'd'
    },
    // Q11
    {
        question: 'You are planning to write some Python code which will query a DynamoDB table and display the output on your website, which of the following tools can you use to start writing your code?',
        choices: {
            a: 'CodeDeploy',
            b: 'CodeBuild',
            c: 'Cloud9',
            d: 'CodeStar'
        },
        answer: 'c'
    },
    // Q12
    {
        question: 'You are attempting to upload a number of objects to S3, however you keep seeing the following error message: "AmazonS3Exception: Internal Error; Service: Amazon S3;" Which of the following is the best explanation for this kind of error?',
        choices: {
            a: 'This is a 400 type error, which is a server-side error',
            b: 'This is a 500 type error, which is a server-side error',
            c: 'This is a 500 type error, which is a client-side error',
            d: 'This is a 400 type error, which is a client-side error'
        },
        answer: 'b'
    },
    // Q13
    {
        question: 'You are testing a new application installed on an EC2 instance and have been asked to set up an alert to notify the development team any time the CPU spikes above 75%. You have configured this using CloudWatch. This morning when checking the CloudWatch metrics for your application server, the CPU usage is showing as 95%. What will the status of the alarm be?',
        choices: {
            a: 'ALARM',
            b: 'OK',
            c: 'INSUFFICIENT_DATA',
            d: 'ALERT',
            e: 'CPU_ALERT'
        },
        answer: 'a'
    },
    // Q14
    {
        question: 'You are a developer running an application on AWS Elastic Beanstalk. You are implementing an application update and need to use a deployment policy. The requirements are to maintain full capacity, deploy five instances at once for the new version, and to terminate instances running the old version once the new instances are running successfully. How would you implement this deployment policy?',
        choices: {
            a: 'You are a developer running an application on AWS Elastic Beanstalk. You are implementing an application update and need to use a deployment policy. The requirements are to maintain full capacity, deploy five instances at once for the new version, and to terminate instances running the old version once the new instances are running successfully. How would you implement this deployment policy?',
            b: 'Set the deployment policy as All at Once. Set the batch size type as Fixed, and the batch size as 5',
            c: 'Set the deployment policy as Rolling with Additional Batch. Set the batch size type as Fixed, and the batch size as 5',
            d: 'Set the deployment policy as Rolling. Set the batch size as 5'
        },
        answer: 'c'
    },
    // Q15
    {
        question: 'You work for a large pharmaceuticals company which is conducting drug trials for a number of new products. You are using SQS to handle messaging between components of a distributed application. You need to ensure that confidential data relating to your patients is encrypted, which of the following services will you use to centrally rotate the encryption keys?',
        choices: {
            a: 'SSE-S3',
            b: 'HTTPS',
            c: 'AWS KMS',
            d: 'Client-side encryption'
        },
        answer: 'c'
    },
    // Q16
    {
        question: 'You are developing a Lambda function written in Python which uploads a number of sensitive files to S3. The application architect has told you to use client-side encryption to protect the files. How can you do this?',
        choices: {
            a: 'Select S3 default encryption',
            b: 'Select the Encryption checkbox in the Lambda console',
            c: 'Use SSL to upload the files',
            d: 'Encrypt your local root disk before uploading the files',
            e: 'Encrypt the files using the AWS Encryption SDK'
        },
        answer: 'e'
    },
    // Q17
    {
        question: 'You are working on a social media application which allows users to share BBQ recipes and photos. You would like to schedule a Lambda function to run every 10 minutes which checks for the latest posts and sends a notification including an image thumbnail to users who have previously engaged with posts from the same user. How can you configure your function to automatically run at 10 minute intervals?',
        choices: {
            a: 'Use Lambda with cron to schedule the function',
            b: 'Use EC2 with cron to schedule the function',
            c: 'Use AWS SWF to schedule the function',
            d: 'Use CloudWatch Events to schedule the function'
        },
        answer: 'd'
    },
    // Q18
    {
        question: 'Your team is considering deploying an application on AWS Elastic Beanstalk. Your manager needs to know what infrastructure requirements are needed for the team, specifically in regards to maintenance, patching, and managing security. How would you explain what AWS is responsible for and what the team is responsible for to your manager [Choose 2]?',
        choices: {
            a: 'AWS is responsible for patches, minor, and major updates of operating system on its supported platform versions',
            b: "You are responsible for publishing Elastic Beanstalk's platform support policy and retirement schedule",
            c: 'You are responsible for the security of your application, your data, and any components that your application requires and that you downloaded',
            d: 'You are responsible for runtime, application server, and web server components if you opt into Elastic Beanstalk managed updates',
            e: 'AWS is responsible for the security of your application, your data, and any components that your application requires and that you downloaded'
        },
        answer: ['a', 'c']
    },
    // Q19
    {
        question: 'You are working on updates to your .NET application which has been deployed using Elastic Beanstalk. Your environment consists of 4 EC2 instances, as well as a number of different Lambda functions and DynamoDB tables. The application requires at least 2 instances to cope with the average workload and a minimum of 3 instances to cope with peak-time traffic. The Project Manager has asked you to roll out the updates as quickly as possible. Which of the following deployment strategies do you recommend?',
        choices: {
            a: 'Immutable',
            b: 'Rolling with additional batch',
            c: 'Rolling',
            d: 'All at once'
        },
        answer: 'c'
    },
    // Q20
    {
        question: 'You are developing a online-banking website which will be accessed by a global customer base. You are planning to use CloudFront to ensure users experience good performance regardless of their location. The Security Architect working on the project asks you to ensure that all requests to CloudFront are encrypted using HTTPS. How can you configure this?',
        choices: {
            a: 'Set the Session Protocol Policy to redirect HTTP to HTTPS',
            b: 'Set the Viewer Protocol Policy to redirect HTTP to HTTPS',
            c: 'Set the User Protocol Policy to redirect HTTP to HTTPS',
            d: 'Set the Request Protocol Policy to redirect HTTP to HTTPS'
        },
        answer: 'b'
    },
    // Q21
    {
        question: 'What is the name of the service that allows users to use their social media account to gain temporary access to the AWS platform?',
        choices: {
            a: 'Active Directory Authentication Services',
            b: 'Facebook Sign In Service',
            c: 'Web Confederation Services',
            d: 'Web Identity Federation'
        },
        answer: 'd'
    },
    // Q22
    {
        question: 'A developer has just finished amending a Lambda function. Originally, the function ran outside of a VPC, but after the update, it now connects to a VPC. Since the change, part of the function that accesses a HTTPS endpoint on a third-party website has stopped working.<br>What is the most likely cause of the Lambda function no longer being able to access the third-party endpoint?',
        choices: {
            a: 'It is not possible to access external web services from a Lambda function that is connected to a VPC. The amend should be rolled back',
            b: 'The third-party web server does not support access from a Lambda function that is connected to a VPC. Contact the third-party to request they create a VPC endpoint',
            c: "The Lambda's execution role does not have the required permissions. Attach the AWS Managed AWSLambdaInternetAccess policy to the Lambda's execution role",
            d: 'The Lambda function no longer has any route out to the Internet. A NAT Gateway, and associated route, should be added'
        },
        answer: 'd'
    },
    // Q23
    {
        question: 'Your application is using Kinesis to ingest click-stream data relating to your products from a variety of social media sites. Your company has been trending this quarter because a high profile movie star has recently signed a contract to endorse your products. As a result, the amount of data flowing through Kinesis has increased, causing you to increase the number of shards in your stream from 4 to 6. The application consuming the data runs on a single EC2 instance in us-east-1a with a second instance in us-east-1b which is used as a cold standby in case the primary instance fails. How many consumer instances will you now need in total to cope with the increased number of shards?',
        choices: {
            a: '6 instances in us-east-1a and 6 instances in us-east-1b',
            b: '3 instances in us-east-1a and 3 instances in us-east-1b',
            c: '1 instance in us-east-1a and 1 instance in us-east-1b',
            d: '6 instances in us-east-1a and 1 instance in us-east-1b'
        },
        answer: 'c'
    },
    // Q24
    {
        question: 'Which of the following activities are the responsibility of the customer [Choose 3]?',
        choices: {
            a: 'Management of user credentials',
            b: 'Controls around who can physically access the data center',
            c: 'Safe disposal of storage devices',
            d: 'Encryption of sensitive data',
            e: 'Security Group configuration settings'
        },
        answer: ['a', 'd', 'e']
    },
    // Q25
    {
        question: 'Your application needs to access content located in an S3 bucket which is residing in a different AWS account, which of the following API calls should be used to gain access?',
        choices: {
            a: 'STS:AttachRole',
            b: 'STS:GetFederationToken',
            c: 'IAM:AddRoleToInstanceProfile',
            d: 'STS:AssumeRole'
        },
        answer: 'd'
    },
    // Q26
    {
        question: 'A developer has been tasked with enabling Access Logs on the Application Load Balancer that sits in-front of their web services. As part of this task, they must configure a location to which the logs are delivered.<br>To what AWS service can Access Logs from an Application Load Balancer be delivered?',
        choices: {
            a: 'CloudTrail',
            b: 'CloudWatch Logs',
            c: 'Kinesis',
            d: 'S3'
        },
        answer: 'd'
    },
    // Q27
    {
        question: 'You receive a "timed out" error message when running an AWS CLI against a large number of resources. What can you do to avoid this?',
        choices: {
            a: 'Increase the maximum allowed time for the CLI to generate the output to avoid time out errors',
            b: 'Reduce the page size to specify that the AWS CLI request a smaller number of items from each call when generating the output',
            c: 'Reduce the size of the output by simplifying the command so that you are not querying so many resources at once',
            d: 'Increase the page size to specify that the AWS CLI request a smaller number of API calls when generating the output'
        },
        answer: 'b'
    },
    // Q28
    {
        question: "Your company has a corporate identity store used to authenticate its users. Your company also has resources running on AWS. Your admin has created IAM roles and an identity broker that sits between your corporate users and your AWS resources to manage the authentication and authorization process without needing to re-create all your users as IAM users in AWS. Your CISO asked you to summarize the AWS identity federation process to ensure compliance with your applications' security. Which of the following statements correctly describes the authentication process?",
        choices: {
            a: 'The enterprise user accesses the identity broker application. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console. The identity broker application authenticates the users against the corporate identity store. The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials',
            b: 'The enterprise user accesses the identity broker application. The identity broker application authenticates the users against the corporate identity store. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console. The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials',
            c: 'The enterprise user accesses the identity broker application. The identity broker application authenticates the users against the corporate identity store. The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console',
            d: 'The identity broker application has permissions to access the AWS Security Token Service (STS) to request temporary security credentials. The enterprise user accesses the identity broker application. The identity broker application authenticates the users against the corporate identity store. Enterprise users can get a temporary URL that gives them access to the AWS APIs or the Management Console'
        },
        answer: 'c'
    },
    // Q29
    {
        question: 'Which of the following best describes Amazon ECS?',
        choices: {
            a: 'The Elastic Container Scheduler is software that you can run and manage to orchestrate many running Docker containers',
            b: 'The Elastic Container Service is a service that manages running Docker containers on a group of your EC2 instances',
            c: 'The Elastic Container Service is software that you can run and manage to orchestrate many running Docker containers',
            d: 'The Elastic Container Scheduler is a serverless system to manage running many Docker containers in a flexible and cost-effective way'
        },
        answer: 'b'
    },
    // Q30
    {
        question: 'You are working on an application which runs inside a Docker container. All your images are stored in a repository named mydockerrepo AWS ECR. Which of the following commands could you use to pull the Docker image to your local workstation?',
        choices: {
            a: 'docker clone aws_account_id.dkr.ecr.us-west-2.amazonaws.com/mydockerrepo:latest',
            b: 'docker get aws_account_id.dkr.ecr.us-west-2.amazonaws.com/mydockerrepo:latest',
            c: 'docker push aws_account_id.dkr.ecr.us-west-2.amazonaws.com/mydockerrepo:latest',
            d: 'docker pull aws_account_id.dkr.ecr.us-west-2.amazonaws.com/mydockerrepo:latest'
        },
        answer: 'd'
    },
    // Q31
    {
        question: 'What action does CloudFormation take if a creation of a stack fails?',
        choices: {
            a: 'It skips the creation of the resource and continues with creations of other resources in the template',
            b: 'It creates a SNS notification',
            c: 'It stops the creation of the resource and any other resources in the template',
            d: 'It rolls back the stack and deletes any resources that have been created'
        },
        answer: 'd'
    },
    // Q32
    {
        question: 'An application successfully updates an existing object in S3. When checking the file contents, the developer does not see the updated file contents. What is the cause of this issue?',
        choices: {
            a: 'S3 Bucket Versioning was not enabled',
            b: 'Overwrite PUTS in S3 have eventual consistency',
            c: 'S3 bucket policy permissions were not correct',
            d: 'HTTP 200 response code was not received'
        },
        answer: ''
    },
    // Q33
    {
        question: 'You are developing a latency-sensitive application which stores a lot of data in DynamoDB. Each item is 3.5KB in size. Which of the following DynamoDB settings would give you the greatest read throughput?',
        choices: {
            a: 'Configure the table with 10 read capacity units and use high-performance reads',
            b: 'Configure the table with 15 read capacity units and configure the application to use a scan operation',
            c: 'Configure the table with 10 read capacity units and use strongly consistent reads',
            d: 'Configure the table with 10 read capacity units and use eventually consistent reads',
            e: 'Configure the table with 15 read capacity units and use strongly consistent reads'
        },
        answer: 'd'
    },
    // Q34
    {
        question: 'You are working as a Developer for an online retailer. Your Security Architect has requested that any files stored in S3 must be encrypted. However some teams are continuing to upload their files without encrypting them. Which of the following will ensure that only encrypted data is uploaded?',
        choices: {
            a: 'Tell all team members to include the x-amz-encryption parameter in request header',
            b: 'Select the Encrypted Files Only checkbox in the S3 Permissions tab in the AWS console',
            c: 'Use a bucket policy that only allows PUT operations which include the x-amz-server-side-encryption parameter in the request header',
            d: 'Create a bucket ACL that only allows PUT operations which include the x-amz-encryption parameter in request header'
        },
        answer: 'c'
    },
    // Q35
    {
        question: 'An organization is considering performing canary deployments with their application. Which of the following statements best describes a canary deployment?',
        choices: {
            a: 'Each instance of the original application is taken out of service one at a time and replaced with the new version of the application. During the deployment, traffic is sent to a mix of the original and new versions',
            b: 'A new version of the application is deployed alongside the existing version. Once the new version is ready to handle traffic, all traffic is redirected to it',
            c: 'A new version of the application is deployed alongside the existing version. A proportion of application’s traffic is directed to the new application. If, after a given number of minutes, metrics demonstrate that the new version is performing correctly, the remainder of the traffic is moved to the new version',
            d: 'All instances of the original application are stopped, after which new instances of the application are started up in their place. During the transition, there is a short period of downtime'
        },
        answer: 'c'
    },
    // Q36
    {
        question: 'A company security team wants to implement a solution for securely storing RDS database credentials. The solution should provide automatic rotation of database credentials. What AWS service can the team use to meet these requirements?',
        choices: {
            a: 'AWS Resource Access Manager',
            b: 'AWS Systems Manager Parameter Store',
            c: 'AWS Secrets Manager',
            d: 'AWS Key Management Service'
        },
        answer: 'c'
    },
    // Q37
    {
        question: 'Which of the following Elastic Beanstalk deployment approaches allow you to maintain full capacity while performing an update [Choose 2]?',
        choices: {
            a: 'Rolling',
            b: 'All At Once',
            c: 'Rolling With Additional Batch',
            d: 'Immutable'
        },
        answer: ['c', 'd']
    },
    // Q38
    {
        question: 'Your application communicates using messages in an SQS queue. You have noticed recently that you are seeing a large number of empty responses where no messages exist in the queue. You want to make sure that your application is responsive as possible, but the cost of the solution is also a concern. What can you do to ensure your application is both cost-effective and responsive?',
        choices: {
            a: 'Use long polling',
            b: 'Use a FIFO queue',
            c: 'Configure multiple queues',
            d: 'Configure multiple queues with short polling',
            e: 'Use short polling'
        },
        answer: 'a'
    },
    // Q39
    {
        question: 'You are developing a completely serverless application using Lambda and API Gateway. You need a place to persist data as key-value pairs and your application will need low latency access to the data. Which of the following is the best option for storing this data?',
        choices: {
            a: 'Store the data in JSON format in an S3 bucket',
            b: 'Store the data in a DynamoDB table',
            c: 'Store the data in an RDS database',
            d: 'Store the data in JSON format on an EC2 instance'
        },
        answer: 'b'
    },
    // Q40
    {
        question: 'Which of the following are considered to be Serverless [Choose 3] ?',
        choices: {
            a: 'Elastic Beanstalk',
            b: 'SNS',
            c: 'API Gateway',
            d: 'DynamoDB',
            e: 'RDS'
        },
        answer: ['b', 'c', 'd']
    },
    // Q41
    {
        question: 'How does API Gateway handle SOAP?',
        choices: {
            a: 'SOAP is deprecated and not supported',
            b: 'API Gateway can be configured as a SOAP web service pass-through',
            c: 'The API Gateway converts the SOAP API to a RESTful API',
            d: 'The API gateway can convert the XML response received by the SOAP API to JSON'
        },
        answer: ['b', 'd']
    },
    // Q42
    {
        question: 'How long can a message be retained in an SQS Queue?',
        choices: {
            a: '1 day',
            b: '30 days',
            c: '14 days',
            d: '7 days'
        },
        answer: 'c'
    },
    // Q43
    {
        question: 'You need to push a docker image to your Amazon ECR repository called my-repository located in us-east-1. Which of the following commands do you need to run in order to achieve this [Choose 2]?',
        choices: {
            a: 'Run: <span class="code">docker tag -i my-image latest</span> Then run: <span class="code">docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/my-repository</span>',
            b: 'Run: <span class="code">aws ecr get-login --no-include-email --region us-east-1</span> Run the docker login command that was returned in the previous step. Run: <span class="code">docker build -t my-repository</span>',
            c: 'Run: <span class="code">docker push -i my-image -r 123456789012.dkr.ecr.us-east-1.amazonaws.com/my-repository</span>',
            d: 'Run: <span class="code">aws ecr get-login --no-include-email --region us-east-1</span> Then run: <span class="code">docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/my-repository</span>'
        },
        answer: ['a', 'b']
    },
    // Q44
    {
        question: 'You are running an application on an EC2 instance. The application needs to be able to access an S3 bucket to read and write data. Which of the following is the best approach to enabling the EC2 instance to access your bucket?',
        choices: {
            a: 'Store AWS credentials locally on the EC2 instance',
            b: 'Use an IAM role with permissions to read and write to the bucket',
            c: 'Store an access key and secret access key in a DynamoDB table',
            d: 'Store AWS credentials within the application code'
        },
        answer: 'b'
    },
    // Q45
    {
        question: 'You have been asked to run your in-house application code using Lambda. Which of the following services could you use to deploy your code [Choose 3]?',
        choices: {
            a: 'AWS Serverless Application Model',
            b: 'CloudFormation',
            c: 'CodeCommit',
            d: 'CodeDeploy',
            e: 'CodeBuild'
        },
        answer: ['a', 'b', 'd']
    },
    // Q46
    {
        question: 'You need to allow another AWS account access to resources in your AWS account, what is the recommended mechanism to configure this?',
        choices: {
            a: 'Use Cognito to allow the third party to sign-up as a guest user to get temporary access to your account',
            b: 'Provide AWS credentials to the third party so that they can log into your account and access the resources they need',
            c: 'Configure cross account access by creating a role in your account which has permission to access only the resources they need. Allow the third party account to assume the role based on their account ID and unique external ID',
            d: 'Configure Web Identity Federation to allow them to log in to your account'
        },
        answer: 'c'
    },
    // Q47
    {
        question: 'Which of the following DynamoDB features allows Items to be automatically deleted at a given date and time?',
        choices: {
            a: 'DynamoDB Exponential Backoff',
            b: 'DynamoDB Timeout',
            c: 'DynamoDB auto-delete',
            d: 'DynamoDB TTL'
        },
        answer: 'd'
    },
    // Q48
    {
        question: 'A company wants to monitor all traffic to a network interface on their bastion host. They wish to be alerted if there are more than 10 attempts to connect to the host via SSH within a one-hour time interval. What solution can the company employ to meet this requirement?',
        choices: {
            a: 'Create a Lambda function that mounts the bastion host EBS volume and sends logs to CloudWatch logs. Create a CloudWatch metric filter for destination port 22. Create a CloudWatch Alarm trigger',
            b: 'Install the Amazon Inspector agent on the bastion host. Configure CloudWatch alerts based on Amazon Inspector findings',
            c: 'Create a VPC flow log for the network interface with CloudTrail as the destination. Create a Lambda function that queries the CloudTrail logs for SSH login attempts. Trigger the Lambda function every 5 minutes with a scheduled CloudWatch event',
            d: 'Configure a VPC flow log with CloudWatch Logs as the destination. Create a CloudWatch metric filter for destination port 22. Create a CloudWatch Alarm trigger'
        },
        answer: 'd'
    },
    // Q49
    {
        question: 'You are developing a batch process job on Amazon EMR. The EMR instances need to access data stored in Amazon RDS in order to initialize the batch processing. The application code ran properly during testing but is not able to properly retrieve data from the RDS instance as there appears to be no connectivity. How would you remedy this situation in the most effective manner?',
        choices: {
            a: 'This an AWS issue. AWS manages the underlying RDS and EMR infrastructure; they should be able to communicate with each other. Open a Support Case to resolve the issue',
            b: 'Edit the security group rules associated with the RDS and EMR instances to allow inbound/outbound access',
            c: 'Migrate the application to run on Amazon EC2 instead. Create an auto-scaling group to scale the batch process when it exceeds a CPU threshold',
            d: 'Create a new key pair associated with the EMR instance. The current key pair is invalid'
        },
        answer: 'b'
    },
    // Q50
    {
        question: 'You are attempting to analyse the CloudWatch metrics for a number of your application servers, however when you try to view the metrics you cannot access them, however one of your colleagues is able to access them without any issues. What could be the problem?',
        choices: {
            a: "Your IAM user doesn't have permission to view CloudWatch metrics",
            b: "CloudWatch doesn't have permission to collect the metrics",
            c: 'Your EC2 instance role does not have permission to push the metrics to CloudWatch',
            d: 'The CloudWatch agent has stopped running'
        },
        answer: 'a'
    },
    // Q51
    {
        question: 'You have deployed a new version of your Lambda function, however the Application Support team have reported a number of issues with the new code. What is the easiest way to fix this?',
        choices: {
            a: 'Troubleshoot the issue using X-Ray, then redeploy an updated version of the function',
            b: 'Delete the CloudFormation stack and redeploy using the previous version',
            c: 'Roll back by restoring the original function from an EBS snapshot',
            d: 'Roll back to a previous version by updating your PROD alias to point to the previous version of the function'
        },
        answer: 'd'
    },
    // Q52
    {
        question: 'You are working on a mobile phone app for an online retailer which stores customer data in DynamoDB. You would like to allow new users to sign-up using their Facebook credentials. What is the recommended approach?',
        choices: {
            a: 'After the user has successfully logged in to Facebook and received an authentication token, Cognito should be used to exchange the token for temporary access to DynamoDB',
            b: 'Write your own custom code which allows the user to log in via Facebook and receive an authentication token, then calls the AssumeRoleWithWebIdentity API and exchanges the authentication tokens for temporary access to DynamoDB',
            c: "Embed encrypted AWS credentials into the application code, so that the application can access DynamoDB on the user's behalf",
            d: 'After the user has authenticated with Facebook, allow them to download encrypted AWS credentials to their device so that the mobile app can access DynamoDB'
        },
        answer: 'a'
    },
    // Q53
    {
        question: 'Which of the following statements are true about the concept of blue/green deployment regarding development and deployment of your application [Choose 3]?',
        choices: {
            a: 'The blue environment represents the current application version serving production traffic.',
            b: 'The green environment is staged running a different version of your application',
            c: 'It allows you to shift traffic between two identical environments that are running different versions of your application',
            d: 'The green environment represents the production environment'
        },
        answer: ['a', 'b', 'c']
    },
    // Q54
    {
        question: 'You have an application running on multiple EC2 instances, however every time an instance fails, your users complain that they lose their session. What can you do to prevent this from happening?',
        choices: {
            a: 'Store session state in on the Elastic Load Balancer',
            b: 'Store session state in S3',
            c: 'Store session state in RDS',
            d: 'Store session state in ElastiCache',
            e: 'Store session state on a dedicated EC2 instance'
        },
        answer: 'd'
    },
    // Q55
    {
        question: 'An application uses DynamoDB table as its backend data store. Each item has size of 10KB. The application needs to perform 100 strongly consistent read operations per second, and 50 write operations per second. What is the provisioned RCU value required to meet these requirements?',
        choices: {
            a: '500',
            b: '150',
            c: '300',
            d: '1000'
        },
        answer: 'c'
    },
    // Q56
    {
        question: 'You are developing a new application using Lambda, API Gateway, S3 and DynamoDB. You would like to record information about incoming and outgoing HTTP requests as well as latency incurred by each component. You have multiple versions of the application to cater for your Development, UAT, Performance Test and Production environments. What is the most efficient way to collect this information and group it according to which environment it relates to?',
        choices: {
            a: 'Use CloudTrail to view the information, configure annotations to indicate which environment the traces relate. Group the data according to environment',
            b: 'Use X-Ray to view the information, configure annotations to indicate which environment the traces relate. Group the data according to environment',
            c: 'Use CloudFormation to view the information, configure annotations to indicate which environment the traces relate. Group the data according to environment',
            d: 'Use CloudWatch to view the information, configure annotations to indicate which environment the traces relate. Group the data according to environment'
        },
        answer: 'b'
    },
    // Q57
    {
        question: 'You have a stable function version using an alias named PROD. You have published a new version of your Lambda function and pointed the PROD alias to it. However, during testing, you notice that your application is not behaving as expected. How can you quickly roll back to the previous version of your code?',
        choices: {
            a: 'Update the $LATEST alias to point to the previous version of your function',
            b: 'Make a new version of your function using the original Lambda code',
            c: 'Remap the PROD alias to point to the previous version of your function',
            d: 'Redeploy your original code to $LATEST'
        },
        answer: 'c'
    },
    // Q58
    {
        question: 'You need to retrieve some data from your DynamoDB table, which of the following methods would consume the greatest number of provisioned Capacity Units?',
        choices: {
            a: 'Query with strong consistency',
            b: 'Query with eventual consistency',
            c: 'Scan with strong consistency',
            d: 'Scan with eventual consistency'
        },
        answer: 'c'
    },
    // Q59
    {
        question: 'You have created a DynamoDB table for your application, with one partition key and no local secondary index. The table has the following attributes:<br>' +
        '<pre><div class="code">' +
        'AccountID (partition key)\n' +
        'AccountName\n' + 
        'CustomerName\n' +
        'ReportingPeriod\n' +
        'TotalRevenue\n' +
        '</div></pre><br>' +
        'You have an application running on EC2 that displays revenue data as a dashboard for your sales organization. The dashboard requires a view of total revenue over multiple reporting periods by customer name as a readable format. What secondary index will you need to add to your table?',
        choices: {
            a: 'Global secondary index with a partition key of CustomerName and sort key of ReportingPeriod; project the TotalRevenue attribute',
            b: 'Global secondary index with a partition key of ReportingPeriod and sort key of CustomerName; project the TotalRevenue attribute',
            c: 'Local secondary index with a partition key of CustomerName and sort key of ReportingPeriod; project the TotalRevenue attribute',
            d: 'Local secondary index with a partition key of ReportingPeriod and sort key of CustomerName; project the TotalRevenue attribute'
        },
        answer: 'a'
    },
    // Q60
    {
        question: 'Your mobile application needs to read data from DynamoDB. What is the best way to give mobile devices permissions to read from DynamoDB?',
        choices: {
            a: 'Issue an access key and secret access key to each user',
            b: 'Create an IAM role for your users',
            c: 'Connect your application to an EC2 instance with permission to read from DynamoDB',
            d: 'Create an IAM role that can be assumed by an app that allows federated users'
        },
        answer: 'd'
    },
    // Q61
    {
        question: 'You have a legacy application located in your production data centre, which frequently accesses files stored in S3. Due to a significant increase in workload, your application servers are now generating a huge number of requests to your S3 bucket, with many requests now failing. What can you do to improve the situation?',
        choices: {
            a: 'Migrate the data to DynamoDB',
            b: 'Configure your application to use Exponential Backoff',
            c: 'Install a faster network interface in your application servers',
            d: 'Configure your application to read and write to multiple S3 buckets'
        },
        answer: 'b'
    },
    // Q62
    {
        question: 'A business-critical application is deployed using CloudFormation. The team would like to prevent accidental deletion of the stack. How can this be achieved most efficiently?',
        choices: {
            a: 'Set the DeletionPolicy to Retain in the CloudFormation template',
            b: 'Create IAM Policy with Effect of Deny for "cloudformation:DeleteStack" Action',
            c: 'Set Stack Termination Protection to Enable',
            d: 'Set the DeletionProtection to True in the CloudFormation template'
        },
        answer: 'c'
    },
    // Q63
    {
        question: 'What is NOT the best practice when deploying production applications using Elastic Beanstalk?',
        choices: {
            a: 'Amazon RDS databases should be included in the Elastic Beanstalk environment as that maintains the same life cycle for all components of the environment',
            b: 'Amazon RDS Connection String should be stored in a controlled S3 bucket',
            c: 'Amazon RDS Delete Protection should be enabled',
            d: 'Amazon RDS database should be launched outside of the Elastic Beanstalk environment as that provides more flexibility'
        },
        answer: 'a'
    },
    // Q64
    {
        question: 'In order to enable encryption at rest using EC2 and Elastic Block Store, you must ____.',
        choices: {
            a: 'Configure encryption using the appropriate Operating Systems file system',
            b: 'Configure encryption when creating the EBS volume',
            c: 'Mount the EBS volume in to S3 and then encrypt the bucket using a bucket policy',
            d: 'Configure encryption using X.509 certificates'
        },
        answer: 'b'
    },
    // Q65
    {
        question: "As a developer you have built a WordPress site. Traffic to the site has increased and you have improved the site's functionality to meet the demand of your viewers since launch. Changes are coming frequently, and you are considering using AWS CloudFormation to automate the process of building test stacks, creating a change set, and executing the change set. How would you streamline this process in AWS most efficiently?",
        choices: {
            a: 'Use Amazon Inspector to monitor your CloudFormation environment that will send an SNS notification to Lambda when a pipeline stage is complete. Subscribe the Lambda function to the SNS topic',
            b: 'Build your test stack, create a change set, and then execute the change set by manually interacting with AWS CloudFormation',
            c: 'Create a CodePipeline separated by three stages. For each stage organize actions in a pipeline. Have CodePipeline complete all actions in a stage before the stage processes new artifacts',
            d: 'Create a Config rule that will look for changes within your CloudFormation stack that will trigger Lambda functions to execute actions based on the pipeline'
        },
        answer: 'c'
    },
];