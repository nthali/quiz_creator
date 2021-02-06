const myQuestions = [
    {
      question: 'Which is an operational process performed by AWS for data security?',
      choices: {
        a: 'Advanced Encryption Standard (AES)-256 encryption of data stored on any shared storage device',
        b: 'Decommissioning of storage devices using industry-standard practices',
        c: 'Background virus scans of Amazon Elastic Block Store (Amazon EBS) volumes and Amazon EBS snapshots',
        d: 'Replication of data across multiple AWS regions',
        e: 'Secure wiping of Amazon EBS data when an Amazon EBS volume is unmounted'
      },
      answer: 'b'
    },
    {
      question: 'You have launched a Windows Amazon Elastic Compute Cloud (Amazon EC2) instance and specified an Amazon EC2 key pair for the instance at launch. Which of the following accurately describes how to log in to the instance?',
      choices: {
        a: 'Use the Amazon EC2 key pair to securely connect to the instance via Secure Shell (SSH).',
        b: 'Use your AWS Identity and Access Management (IAM) user X.509 certificate to log in to the instance.',
        c: 'Use the Amazon EC2 key pair to decrypt the administrator password and then securely connect to the instance via Remote Desktop Protocol (RDP) as the administrator.',
        d: 'A key pair is not needed. Securely connect to the instance via RDP.'
      },
      answer: 'c'
    },
    {
      question: 'A Database security group controls network access to a database instance that is inside a Virtual Private Cloud (VPC) and by default allows access from?',
      choices: {
        a: 'Access from any IP address for the standard ports that the database uses is provided by default.',
        b: 'Access from any IP address for any port is provided by default in the DB security group.',
        c: 'No access is provided by default, and any access must be explicitly added with a rule to the DB security group.',
        d: 'Access for the database connection string is provided by default in the DB security group.'
      },
      answer: 'c'
    },
    {
      question: 'Which encryption algorithm is used by Amazon Simple Storage Service (Amazon S3) to encrypt data at rest with Service-Side Encryption (SSE)?',
      choices: {
        a: 'Advanced Encryption Standard (AES)-256',
        b: 'RSA 1024',
        c: 'RSA 2048',
        d: 'AES-128'
      },
      answer: 'a'
    },
    {
      question: 'How many access keys may an AWS Identity and Access Management (IAM) user have active at one time?',
      choices: {
        a: '0',
        b: '1',
        c: '2',
        d: '3'
      },
      answer: 'c'
    },
    {
      question: 'Which of the following is the name of the security model employed by AWS with its customers?',
      choices: {
        a: 'The shared secret model',
        b: 'The shared responsibility model',
        c: 'The shared secret key model',
        d: 'The secret key responsibility model'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following describes the scheme used by an Amazon Redshift cluster leveraging AWS Key Management Service (AWS KMS) to encrypt data-at-rest?',
      choices: {
        a: 'Amazon Redshift uses a one-tier, key-based architecture for encryption.',
        b: 'Amazon Redshift uses a two-tier, key-based architecture for encryption.',
        c: 'Amazon Redshift uses a three-tier, key-based architecture for encryption.',
        d: 'Amazon Redshift uses a four-tier, key-based architecture for encryption.'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following Elastic Load Balancing options ensure that the load balancer determines which cipher is used for a Secure Sockets Layer (SSL) connection?',
      choices: {
        a: 'Client Server Cipher Suite',
        b: 'Server Cipher Only',
        c: 'First Server Cipher',
        d: 'Server Order Preference'
      },
      answer: 'd'
    },
    {
      question: 'Which technology does Amazon WorkSpaces use to provide data security?',
      choices: {
        a: 'Secure Sockets Layer (SSL)/Transport Layer Security (TLS)',
        b: 'Advanced Encryption Standard (AES)-256',
        c: 'PC-over-IP (PCoIP)',
        d: 'AES-128'
      },
      answer: 'c'
    },
    {
      question: 'As a Solutions Architect, how should you architect systems on AWS?',
      choices: {
        a: 'You should architect for least cost.',
        b: 'You should architect your AWS usage to take advantage of Amazon Simple Storage Service’s (Amazon S3) durability.',
        c: 'You should architect your AWS usage to take advantage of multiple regions and Availability Zones.',
        d: 'You should architect with Amazon Elastic Compute Cloud (Amazon EC2) Auto Scaling to ensure capacity is available when needed.'
      },
      answer: 'c'
    },
    {
      question: 'Which security scheme is used by the AWS Multi-Factor Authentication (AWS MFA) token?',
      choices: {
        a: 'Time-Based One-Time Password (TOTP)',
        b: 'Perfect Forward Secrecy (PFC)',
        c: 'Ephemeral Diffie Hellman (EDH)',
        d: 'Split-Key Encryption (SKE)'
      },
      answer: 'a'
    },
    {
      question: 'DynamoDB tables may contain sensitive data that needs to be protected. Which of the following is a way for you to protect DynamoDB table content? (Choose 2 answers)',
      choices: {
        a: 'DynamoDB encrypts all data server-side by default so nothing is required.',
        b: 'DynamoDB can store data encrypted with a client-side encryption library solution before storing the data in DynamoDB.',
        c: 'DynamoDB obfuscates all data stored so encryption is not required.',
        d: 'DynamoDB can be used with the AWS Key Management Service to encrypt the data before storing the data in DynamoDB.',
        e: 'DynamoDB should not be used to store sensitive information requiring protection.'
      },
      answer: ['b', 'd']
    },
    {
      question: 'You have launched an Amazon Linux Elastic Compute Cloud (Amazon EC2) instance into EC2-Classic, and the instance has successfully passed the System Status Check and Instance Status Check. You attempt to securely connect to the instance via Secure Shell (SSH) and receive the response, “WARNING: UNPROTECTED PRIVATE KEY FILE,” after which the login fails. Which of the following is the cause of the failed login?',
      choices: {
        a: 'You are using the wrong private key.',
        b: 'The permissions for the private key are too insecure for the key to be trusted.',
        c: 'A security group rule is blocking the connection.',
        d: 'A security group rule has not been associated with the private key.'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following public identity providers are supported by Amazon Cognito Identity?',
      choices: {
        a: 'Amazon',
        b: 'Google',
        c: 'Facebook',
        d: 'All of the above'
      },
      answer: 'd'
    },
    {
      question: 'Which feature of AWS is designed to permit calls to the platform from an Amazon Elastic Compute Cloud (Amazon EC2) instance without needing access keys placed on the instance?',
      choices: {
        a: 'AWS Identity and Access Management (IAM) instance profile',
        b: 'IAM groups',
        c: 'IAM roles',
        d: 'Amazon EC2 key pairs'
      },
      answer: 'a'
    },
    {
      question: 'Which of the following Amazon Virtual Private Cloud (Amazon VPC) elements acts as a stateless firewall?',
      choices: {
        a: 'Security group',
        b: 'Network Access Control List (ACL)',
        c: 'Network Address Translation (NAT) instance',
        d: 'An Amazon VPC endpoint'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following is the most recent version of the AWS digital signature calculation process?',
      choices: {
        a: 'Signature Version 1',
        b: 'Signature Version 2',
        c: 'Signature Version 3',
        d: 'Signature Version 4'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following is the name of the feature within Amazon Virtual Private Cloud (Amazon VPC) that allows you to launch Amazon Elastic Compute Cloud (Amazon EC2) instances on hardware dedicated to a single customer?',
      choices: {
        a: 'Amazon VPC-based tenancy',
        b: 'Dedicated tenancy',
        c: 'Default tenancy',
        d: 'Host-based tenancy'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following describes how Amazon Elastic MapReduce (Amazon EMR) protects access to the cluster?',
      choices: {
        a: 'The master node and the slave nodes are launched into an Amazon Virtual Private Cloud (Amazon VPC).',
        b: 'The master node supports a Virtual Private Network (VPN) connection from the key specified at cluster launch.',
        c: 'The master node is launched into a security group that allows Secure Shell (SSH) and service access, while the slave nodes are launched into a separate security group that only permits communication with the master node.',
        d: 'The master node and slave nodes are launched into a security group that allows SSH and service access.'
      },
      answer: 'c'
    },
    {
      question: 'To help prevent data loss due to the failure of any single hardware component, Amazon Elastic Block Storage (Amazon EBS) automatically replicates EBS volume data to which of the following?',
      choices: {
        a: 'Amazon EBS replicates EBS volume data within the same Availability Zone in a region.',
        b: 'Amazon EBS replicates EBS volume data across other Availability Zones within the same region.',
        c: 'Amazon EBS replicates EBS volume data across Availability Zones in the same region and in Availability Zones in one other region.',
        d: 'Amazon EBS replicates EBS volume data across Availability Zones in the same region and in Availability Zones in every other region.'
      },
      answer: 'a'
    }];