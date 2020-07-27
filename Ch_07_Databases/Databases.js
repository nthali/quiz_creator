const myQuestions = [
    {
      question: 'Which AWS database service is best suited for traditional Online Transaction Processing (OLTP)?',
      choices: {
        a: 'Amazon Redshift',
        b: 'Amazon Relational Database Service (Amazon RDS)',
        c: 'Amazon Glacier',
        d: 'Elastic Database'
      },
      answer: 'b'
    },
    {
      question: 'Which AWS database service is best suited for non-relational databases?',
      choices: {
        a: 'Amazon Redshift',
        b: 'Amazon Relational Database Service (Amazon RDS)',
        c: 'Amazon Glacier',
        d: 'Amazon DynamoDB'
      },
      answer: 'd'
    },
    {
      question: 'You are a solutions architect working for a media company that hosts its website on AWS. Currently, there is a single Amazon Elastic Compute Cloud (Amazon EC2) Instance on AWS with MySQL installed locally to that Amazon EC2 Instance. You have been asked to make the company’s production environment more resilient and to increase performance. You suggest that the company split out the MySQL database onto an Amazon RDS Instance with Multi-AZ enabled. This addresses the company’s increased resiliency requirements. Now you need to suggest how you can increase performance. Ninety-nine percent of the company’s end users are magazine subscribers who will be reading additional articles on the website, so only one percent of end users will need to write data to the site. What should you suggest to increase performance?',
      choices: {
        a: 'Alter the connection string so that if a user is going to write data, it is written to the secondary copy of the Multi-AZ database.',
        b: 'Alter the connection string so that if a user is going to write data, it is written to the primary copy of the Multi-AZ database.',
        c: 'Recommend that the company use read replicas, and distribute the traffic across multiple read replicas.',
        d: 'Migrate the MySQL database to Amazon Redshift to take advantage of columnar storage and maximize performance.'
      },
      answer: 'c'
    },
    {
      question: 'Which AWS Cloud service is best suited for Online Analytics Processing (OLAP)?',
      choices: {
        a: 'Amazon Redshift',
        b: 'Amazon Relational Database Service (Amazon RDS)',
        c: 'Amazon Glacier',
        d: 'Amazon DynamoDB'
      },
      answer: 'a'
    },
    {
      question: 'You have been using Amazon Relational Database Service (Amazon RDS) for the last year to run an important application with automated backups enabled. One of your team members is performing routine maintenance and accidentally drops an important table, causing an outage. How can you recover the missing data while minimizing the duration of the outage?',
      choices: {
        a: 'Perform an undo operation and recover the table.',
        b: 'Restore the database from a recent automated DB snapshot.',
        c: 'Restore only the dropped table from the DB snapshot.',
        d: 'The data cannot be recovered.'
      },
      answer: 'b'
    },
    {
      question: 'Which Amazon Relational Database Service (Amazon RDS) database engines support Multi-AZ?',
      choices: {
        a: 'All of them',
        b: 'Microsoft SQL Server, MySQL, and Oracle',
        c: 'Oracle, Amazon Aurora, and PostgreSQL',
        d: 'MySQL'
      },
      answer: 'a'
    },
    {
      question: 'Which Amazon Relational Database Service (Amazon RDS) database engines support read replicas?',
      choices: {
        a: 'Microsoft SQL Server and Oracle',
        b: 'MySQL, MariaDB, PostgreSQL, and Aurora',
        c: 'Aurora, Microsoft SQL Server, and Oracle',
        d: 'MySQL and PostgreSQL'
      },
      answer: 'b'
    },
    {
      question: 'Your team is building an order processing system that will span multiple Availability Zones. During testing, the team wanted to test how the application will react to a database failover. How can you enable this type of test?',
      choices: {
        a: 'Force a Multi-AZ failover from one Availability Zone to another by rebooting the primary instance using the Amazon RDS console.',
        b: 'Terminate the DB instance, and create a new one. Update the connection string.',
        c: 'Create a support case asking for a failover.',
        d: 'It is not possible to test a failover.'
      },
      answer: ''
    },
    {
      question: 'You are a system administrator whose company has moved its production database to AWS. Your company monitors its estate using Amazon CloudWatch, which sends alarms using Amazon Simple Notification Service (Amazon SNS) to your mobile phone. One night, you get an alert that your primary Amazon Relational Database Service (Amazon RDS) Instance has gone down. You have Multi-AZ enabled on this instance. What should you do to ensure the failover happens quickly?',
      choices: {
        a: 'Update your Domain Name System (DNS) to point to the secondary instance’s new IP address, forcing your application to fail over to the secondary instance.',
        b: 'Connect to your server using Secure Shell (SSH) and update your connection strings so that your application can communicate to the secondary instance instead of the failed primary instance.',
        c: 'Take a snapshot of the secondary instance and create a new instance using this snapshot, then update your connection string to point to the new instance.',
        d: 'No action is necessary. Your connection string points to the database endpoint, and AWS automatically updates this endpoint to point to your secondary instance.'
      },
      answer: ''
    },
    {
      question: 'You are working for a small organization without a dedicated database administrator on staff. You need to install Microsoft SQL Server Enterprise edition quickly to support an accounting back office application on Amazon Relational Database Service (Amazon RDS). What should you do?',
      choices: {
        a: 'Launch an Amazon RDS DB Instance, and select Microsoft SQL Server Enterprise Edition under the Bring Your Own License (BYOL) model.',
        b: 'Provision SQL Server Enterprise Edition using the License Included option from the Amazon RDS Console.',
        c: 'SQL Server Enterprise edition is only available via the Command Line Interface (CLI). Install the command-line tools on your laptop, and then provision your new Amazon RDS Instance using the CLI.',
        d: 'You cannot use SQL Server Enterprise edition on Amazon RDS. You should install this on to a dedicated Amazon Elastic Compute Cloud (Amazon EC2) Instance.'
      },
      answer: ''
    },
    {
      question: 'You are building the database tier for an enterprise application that gets occasional activity throughout the day. Which storage type should you select as your default option?',
      choices: {
        a: 'Magnetic storage',
        b: 'General Purpose Solid State Drive (SSD)',
        c: 'Provisioned IOPS (SSD)',
        d: 'Storage Area Network (SAN)-attached'
      },
      answer: ''
    },
    {
      question: 'You are designing an e-commerce web application that will scale to potentially hundreds of thousands of concurrent users. Which database technology is best suited to hold the session state for large numbers of concurrent users?',
      choices: {
        a: 'Relational database using Amazon Relational Database Service (Amazon RDS)',
        b: 'NoSQL database table using Amazon DynamoDB',
        c: 'Data warehouse using Amazon Redshift',
        d: 'Amazon Simple Storage Service (Amazon S3)'
      },
      answer: ''
    },
    {
      question: 'Which of the following techniques can you use to help you meet Recovery Point Objective (RPO) and Recovery Time Objective (RTO) requirements? (Choose 3 answers)',
      choices: {
        a: 'DB snapshots',
        b: 'DB option groups',
        c: 'Read replica',
        d: 'Multi-AZ deployment'
      },
      answer: ''
    },
    {
      question: 'When using Amazon Relational Database Service (Amazon RDS) Multi-AZ, how can you offload read requests from the primary? (Choose 2 answers)',
      choices: {
        a: 'Configure the connection string of the clients to connect to the secondary node and perform reads while the primary is used for writes.',
        b: 'Amazon RDS automatically sends writes to the primary and sends reads to the secondary.',
        c: 'Add a read replica DB instance, and configure the client’s application logic to use a read-replica.',
        d: 'Create a caching environment using ElastiCache to cache frequently used data. Update the application logic to read/write from the cache.'
      },
      answer: ''
    },
    {
      question: 'You are building a large order processing system and are responsible for securing the database. Which actions will you take to protect the data? (Choose 3 answers)',
      choices: {
        a: 'Adjust AWS Identity and Access Management (IAM) permissions for administrators.',
        b: 'Configure security groups and network Access Control Lists (ACLs) to limit network access.',
        c: 'Configure database users, and grant permissions to database objects.',
        d: 'Install anti-virus software on the Amazon RDS DB Instance.'
      },
      answer: ''
    },
    {
      question: 'Your team manages a popular website running Amazon Relational Database Service (Amazon RDS) MySQL back end. The Marketing department has just informed you about an upcoming television commercial that will drive thousands of new visitors to the website. How can you prepare your database to handle the load? (Choose 3 answers)',
      choices: {
        a: 'Vertically scale the DB Instance by selecting a more powerful instance class.',
        b: 'Create read replicas to offload read requests and update your application.',
        c: 'Upgrade the storage from Magnetic volumes to General Purpose Solid State Drive (SSD) volumes.',
        d: 'Upgrade to Amazon Redshift for faster columnar storage.'
      },
      answer: ''
    },
    {
      question: 'You are building a photo management application that maintains metadata on millions of images in an Amazon DynamoDB table. When a photo is retrieved, you want to display the metadata next to the image. Which Amazon DynamoDB operation will you use to retrieve the metadata attributes from the table?',
      choices: {
        a: 'Scan operation',
        b: 'Search operation',
        c: 'Query operation',
        d: 'Find operation'
      },
      answer: ''
    },
    {
      question: 'You are creating an Amazon DynamoDB table that will contain messages for a social chat application. This table will have the following attributes: Username (String), Timestamp (Number), Message (String). Which attribute should you use as the partition key? The sort key?',
      choices: {
        a: 'Username, Timestamp',
        b: 'Username, Message',
        c: 'Timestamp, Message',
        d: 'Message, Timestamp'
      },
      answer: ''
    },
    {
      question: 'Which of the following statements about Amazon DynamoDB tables are true? (Choose 2 answers)',
      choices: {
        a: 'Global secondary indexes can only be created when the table is being created.',
        b: 'Local secondary indexes can only be created when the table is being created.',
        c: 'You can only have one global secondary index.',
        d: 'You can only have one local secondary index.'
      },
      answer: ''
    },
    {
      question: 'Which of the following workloads are a good fit for running on Amazon Redshift? (Choose 2 answers)',
      choices: {
        a: 'Transactional database supporting a busy e-commerce order processing website',
        b: 'Reporting database supporting back-office analytics',
        c: 'Data warehouse used to aggregate multiple disparate data sources',
        d: 'Manage session state and user profile data for thousands of concurrent users'
      },
      answer: ''
    }];