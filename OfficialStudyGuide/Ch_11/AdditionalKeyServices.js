const myQuestions = [
    {
      question: 'What origin servers are supported by Amazon CloudFront? (Choose 3 answers)',
      choices: {
        a: 'An Amazon Route 53 Hosted Zone',
        b: 'An Amazon Simple Storage Service (Amazon S3) bucket',
        c: 'An HTTP server running on Amazon Elastic Compute Cloud (Amazon EC2)',
        d: 'An Amazon EC2 Auto Scaling Group',
        e: 'An HTTP server running on-premises'
      },
      answer: ['b', 'c', 'e']
    },
    {
      question: 'Which of the following are good use cases for Amazon CloudFront? (Choose 2 answers)',
      choices: {
        a: 'A popular software download site that supports users around the world, with dynamic content that changes rapidly',
        b: 'A corporate website that serves training videos to employees. Most employees are located in two corporate campuses in the same city.',
        c: 'A heavily used video and music streaming service that requires content to be delivered only to paid subscribers',
        d: 'A corporate HR website that supports a global workforce. Because the site contains sensitive data, all users must connect through a corporate Virtual Private Network (VPN).'
      },
      answer: ['a', 'c']
    },
    {
      question: 'You have a web application that contains both static content in an Amazon Simple Storage Service (Amazon S3) bucket—primarily images and CSS files—and also dynamic content currently served by a PHP web app running on Amazon Elastic Compute Cloud (Amazon EC2). What features of Amazon CloudFront can be used to support this application with a single Amazon CloudFront distribution? (Choose 2 answers)',
      choices: {
        a: 'Multiple Origin Access Identifiers',
        b: 'Multiple signed URLs',
        c: 'Multiple origins',
        d: 'Multiple edge locations',
        e: 'Multiple cache behaviors'
      },
      answer: ['c', 'e']
    },
    {
      question: 'You are building a media-sharing web application that serves video files to end users on both PCs and mobile devices. The media files are stored as objects in an Amazon Simple Storage Service (Amazon S3) bucket, but are to be delivered through Amazon CloudFront. What is the simplest way to ensure that only Amazon CloudFront has access to the objects in the Amazon S3 bucket?',
      choices: {
        a: 'Create Signed URLs for each Amazon S3 object.',
        b: 'Use an Amazon CloudFront Origin Access Identifier (OAI).',
        c: 'Use public and private keys with signed cookies.',
        d: 'Use an AWS Identity and Access Management (IAM) bucket policy.'
      },
      answer: 'b'
    },
    {
      question: 'Your company data center is completely full, but the sales group has determined a need to store 200TB of product video. The videos were created over the last several years, with the most recent being accessed by sales the most often. The data must be accessed locally, but there is no space in the data center to install local storage devices to store this data. What AWS cloud service will meet sales’ requirements?',
      choices: {
        a: 'AWS Storage Gateway Gateway-Stored volumes',
        b: 'Amazon Elastic Compute Cloud (Amazon EC2) instances with attached Amazon EBS Volumes',
        c: 'AWS Storage Gateway Gateway-Cached volumes',
        d: 'AWS Import/Export Disk'
      },
      answer: 'c'
    },
    {
      question: 'Your company wants to extend their existing Microsoft Active Directory capability into an Amazon Virtual Private Cloud (Amazon VPC) without establishing a trust relationship with the existing on-premises Active Directory. Which of the following is the best approach to achieve this goal?',
      choices: {
        a: 'Create and connect an AWS Directory Service AD Connector.',
        b: 'Create and connect an AWS Directory Service Simple AD.',
        c: 'Create and connect an AWS Directory Service for Microsoft Active Directory (Enterprise Edition).',
        d: 'None of the above'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following are AWS Key Management Service (AWS KMS) keys that will never exit AWS unencrypted?',
      choices: {
        a: 'AWS KMS data keys',
        b: 'Envelope encryption keys',
        c: 'AWS KMS Customer Master Keys (CMKs)',
        d: 'A and C'
      },
      answer: 'c'
    },
    {
      question: 'Which cryptographic method is used by AWS Key Management Service (AWS KMS) to encrypt data?',
      choices: {
        a: 'Password-based encryption',
        b: 'Asymmetric',
        c: 'Shared secret',
        d: 'Envelope encryption'
      },
      answer: 'd'
    },
    {
      question: 'Which AWS service records Application Program Interface (API) calls made on your account and delivers log files to your Amazon Simple Storage Service (Amazon S3) bucket?',
      choices: {
        a: 'AWS CloudTrail',
        b: 'Amazon CloudWatch',
        c: 'Amazon Kinesis',
        d: 'AWS Data Pipeline'
      },
      answer: 'a'
    },
    {
      question: 'You are trying to decrypt ciphertext with AWS KMS and the decryption operation is failing. Which of the following are possible causes? (Choose 2 answers)',
      choices: {
        a: 'The private key does not match the public key in the ciphertext.',
        b: 'The plaintext was encrypted along with an encryption context, and you are not providing the identical encryption context when calling the Decrypt API.',
        c: 'The ciphertext you are trying to decrypt is not valid.',
        d: 'You are not providing the correct symmetric key to the Decrypt API.'
      },
      answer: ['b', 'c']
    },
    {
      question: 'Your company has 30 years of financial records that take up 15TB of on-premises storage. It is regulated that you maintain these records, but in the year you have worked for the company no one has ever requested any of this data. Given that the company data center is already filling the bandwidth of its Internet connection, what is an alternative way to store the data on the most appropriate cloud storage?',
      choices: {
        a: 'AWS Import/Export to Amazon Simple Storage Service (Amazon S3)',
        b: 'AWS Import/Export to Amazon Glacier',
        c: 'Amazon Kinesis',
        d: 'Amazon Elastic MapReduce (AWS EMR)'
      },
      answer: 'b'
    },
    {
      question: 'Your company collects information from the point of sale registers at all of its franchise locations. Each month these processes collect 200TB of information stored in Amazon Simple Storage Service (Amazon S3). Analytics jobs taking 24 hours are performed to gather knowledge from this data. Which of the following will allow you to perform these analytics in a cost-effective way?',
      choices: {
        a: 'Copy the data to a persistent Amazon Elastic MapReduce (Amazon EMR) cluster, and run the MapReduce jobs.',
        b: 'Create an application that reads the information of the Amazon S3 bucket and runs it through an Amazon Kinesis stream.',
        c: 'Run a transient Amazon EMR cluster, and run the MapReduce jobs against the data directly in Amazon S3.',
        d: 'Launch a d2.8xlarge (32 vCPU, 244GB RAM) Amazon Elastic Compute Cloud (Amazon EC2) instance, and run an application to read and process each object sequentially.'
      },
      answer: 'c'
    },
    {
      question: 'Which service allows you to process nearly limitless streams of data in flight?',
      choices: {
        a: 'Amazon Kinesis Firehose',
        b: 'Amazon Elastic MapReduce (Amazon EMR)',
        c: 'Amazon Redshift',
        d: 'Amazon Kinesis Streams'
      },
      answer: 'd'
    },
    {
      question: 'What combination of services enable you to copy daily 50TB of data to Amazon storage, process the data in Hadoop, and store the results in a large data warehouse?',
      choices: {
        a: 'Amazon Kinesis, Amazon Data Pipeline, Amazon Elastic MapReduce (Amazon EMR), and Amazon Elastic Compute Cloud (Amazon EC2)',
        b: 'Amazon Elastic Block Store (Amazon EBS), Amazon Data Pipeline, Amazon EMR, and Amazon Redshift',
        c: 'Amazon Simple Storage Service (Amazon S3), Amazon Data Pipeline, Amazon EMR, and Amazon Redshift',
        d: 'Amazon S3, Amazon Simple Workflow, Amazon EMR, and Amazon DynamoDB'
      },
      answer: 'c'
    },
    {
      question: 'Your company has 50,000 weather stations around the country that send updates every 2 seconds. What service will enable you to ingest this stream of data and store it to Amazon Simple Storage Service (Amazon S3) for future processing?',
      choices: {
        a: 'Amazon Simple Queue Service (Amazon SQS)',
        b: 'Amazon Kinesis Firehose',
        c: 'Amazon Elastic Compute Cloud (Amazon EC2)',
        d: 'Amazon Data Pipeline'
      },
      answer: 'b'
    },
    {
      question: 'Your organization uses Chef heavily for its deployment automation. What AWS cloud service provides integration with Chef recipes to start new application server instances, configure application server software, and deploy applications?',
      choices: {
        a: 'AWS Elastic Beanstalk',
        b: 'Amazon Kinesis',
        c: 'AWS OpsWorks',
        d: 'AWS CloudFormation'
      },
      answer: 'c'
    },
    {
      question: 'A firm is moving its testing platform to AWS to provide developers with instant access to clean test and development environments. The primary requirement for the firm is to make environments easily reproducible and fungible. What service will help the firm meet their requirements?',
      choices: {
        a: 'AWS CloudFormation',
        b: 'AWS Config',
        c: 'Amazon Redshift',
        d: 'AWS Trusted Advisor'
      },
      answer: 'a'
    },
    {
      question: 'Your company’s IT management team is looking for an online tool to provide recommendations to save money, improve system availability and performance, and to help close security gaps. What can help the management team?',
      choices: {
        a: 'Cloud-init',
        b: 'AWS Trusted Advisor',
        c: 'AWS Config',
        d: 'Configuration Recorder'
      },
      answer: 'b'
    },
    {
      question: 'Your company works with data that requires frequent audits of your AWS environment to ensure compliance with internal policies and best practices. In order to perform these audits, you need access to historical configurations of your resources to evaluate relevant configuration changes. Which service will provide the necessary information for your audits?',
      choices: {
        a: 'AWS Config',
        b: 'AWS Key Management Service (AWS KMS)',
        c: 'AWS CloudTrail',
        d: 'AWS OpsWorks'
      },
      answer: 'a'
    },
    {
      question: 'All of the website deployments are currently done by your company’s development team. With a surge in website popularity, the company is looking for ways to be more agile with deployments. What AWS cloud service can help the developers focus more on writing code instead of spending time managing and configuring servers, databases, load balancers, firewalls, and networks?',
      choices: {
        a: 'AWS Config',
        b: 'AWS Trusted Advisor',
        c: 'Amazon Kinesis',
        d: 'AWS Elastic Beanstalk'
      },
      answer: 'd'
    }];