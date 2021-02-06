const myQuestions = [
    // Q1
    {
      question: 'When replicating data from a primary RDS instance to a secondary one, how much will  you be charged, in relation to the standard data transfer charge?',
      choices: {
        A: 'Your data will be transferred at the standard data transfer charge.',
        B: 'Your data will be transferred at half of the standard data transfer charge.',
        C: 'Your data will be transferred at half of the standard data transfer charge up to 1 GB  of transfer per day and then additional data at the standard data transfer charge.',
        D: 'There is no charge for primary-to-secondary data replication.'
      },
      answer: 'D'
    },
    // Q2
    {
      question: 'Which of the following are valid options for where an RDS read replica is set up in rela- tion to the primary instance? (Choose two.)',
      choices: {
        A: 'In the same region as the primary instance',
        B: 'In a separate region from the primary instance',
        C: 'In an instance running on premises',
        D: 'Both A and B'
      },
      answer: [ 'C', 'D' ]
    },
    // Q3
    {
      question: 'What is the primary purpose of a read replica RDS configuration?',
      choices: {
        A: 'Disaster recovery',
        B: 'Fault tolerance',
        C: 'Performance',
        D: 'Security'
      },
      answer: 'C'
    },
    // Q4
    {
      question: 'Which of the following databases support read replicas?',
      choices: {
        A: 'MariaDB',
        B: 'MySQL',
        C: 'PostgreSQL',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q5
    {
      question: 'Which of the following databases support read replicas?',
      choices: {
        A: 'Oracle',
        B: 'MySQL',
        C: 'DynamoDB',
        D: 'All of the above'
      },
      answer: 'B'
    },
    // Q6
    {
      question: 'Which of the following is true about a read replica? (Choose two.)',
      choices: {
        A: 'It is a read-only instance of a primary database.',
        B: 'It can only exist in the same region as the primary database, although it can be in a  different availability zone.',
        C: 'It is updated via asynchronous replication from the primary instance.',
        D: 'It is updated via synchronous replication from the primary instance.Review Questions   55'
      },
      answer: [ 'A', 'C' ]
    },
    // Q7
    {
      question: 'Which of the following is true about an RDS read replica configuration? (Choose two.)',
      choices: {
        A: 'Only three read replicas can be set up for a single primary database instance.',
        B: 'Only MariaDB, MySQL, and Aurora are supported.',
        C: 'A read replica replicates all databases in the primary instance.',
        D: 'A read replica can exist in a different region than the primary instance.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q8
    {
      question: 'You have a primary database set up to use read replicas running on an instance in US East 1.  You have three read replicas also in US East 1 and two additional replicas in US West 2. You  are trying to create a new replica in EU West 1 and are getting an error. What do you need  to do to resolve this error and successfully create a new read replica in EU West 1?',
      choices: {
        A: 'Turn on the Multi-AZ option for your primary instance.',
        B: 'You can’t create the replica in EU West 1. Instead, create the replica in another US  region to avoid regulations about read replicas in the EU.',
        C: 'Contact AWS about raising the number of read replicas allowed from 5 to 8.',
        D: 'Turn off one of the read replicas in US East 1 and then you can create the instance in  EU West 1.'
      },
      answer: 'D'
    },
    // Q9
    {
      question: 'Which of the following are true about a read replica setup? (Choose two.)',
      choices: {
        A: 'Backups are configured by default when you set up read replicas.',
        B: 'They provide a highly scalable solution for your on-premises databases.',
        C: 'They can exist within a single AZ, cross-AZ, or cross-region.',
        D: 'A read replica can be promoted to a stand-alone database instance.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q10
    {
      question: 'Which of the following are true about a read replica setup? (Choose two.)',
      choices: {
        A: 'Automated backups are taken from the read replicas rather than the primary  instance.',
        B: 'The database engine on all instances is active.',
        C: 'Each read replica instance can upgrade its database engine separate from the primary  instance.',
        D: 'Replication is synchronous.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q11
    {
      question: 'Which of the following statements are false? (Choose two.)',
      choices: {
        A: 'Both read replicas and Multi-AZ configurations ensure that you have database  instances in multiple availability zones.',
        B: 'Both read replicas and Multi-AZ configurations provide disaster recovery options for  your primary instance.',
        C: 'A single database can both have a read replica and be part of a Multi-AZ setup.',
        D: 'A read replica can be promoted to be a stand-alone database instance.56   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'A', 'B' ]
    },
    // Q12
    {
      question: 'Which of the following statements is true?',
      choices: {
        A: 'A Multi-AZ setup is aimed at fault tolerance, while a read replica setup is aimed at  scalability.',
        B: 'Both read replicas and Multi-AZ configurations are aimed at fault tolerance.',
        C: 'A Multi-AZ setup is aimed at scalability, while a read replica setup is aimed at fault  tolerance.',
        D: 'Both read replicas and Multi-AZ configurations are aimed at scalability.'
      },
      answer: 'A'
    },
    // Q13
    {
      question: 'How do applications communicate with read replica instances?',
      choices: {
        A: 'Through the read replica REST API provided by RDS',
        B: 'ELBs and ALBs will automatically translate requests to a read replica to use the read  replica REST API provided by RDS.',
        C: 'Each read replica provides a read replica key that allows applications to communicate  with the instance as if it were a normal database instance.',
        D: 'Applications communicate with a read replica exactly as they would with a non-read  replica.'
      },
      answer: 'D'
    },
    // Q14
    {
      question: 'Which of the following are valid reasons to use read replication? (Choose two.)',
      choices: {
        A: 'You have a read-heavy database that is peaking in traffic.',
        B: 'You have a large number of errors reported by applications trying to update user  entries in your current database and want to reduce these errors.',
        C: 'You want an automated disaster recovery solution in case you lose an AZ.',
        D: 'You have a large number of business reporting queries that are currently interfering  with customer application performance.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q15
    {
      question: 'Does a read replica provide any assistance at all in creating a fault-tolerant database setup?',
      choices: {
        A: 'Yes, it provides automated backups to the read replicas.',
        B: 'Yes, if the primary instance fails, one of the replicas can be manually promoted to a  stand-alone database instance.',
        C: 'Yes, if the primary instance fails, one of the replicas will be automatically promoted  to a stand-alone database instance.',
        D: 'No'
      },
      answer: 'B'
    },
    // Q16
    {
      question: 'Which of the following are valid reasons to use read replication? (Choose two.)',
      choices: {
        A: 'You have customers in a region geographically distant from your primary instance  and want to improve their read performance when they access your applications  hosted in regions closer to them.',
        B: 'Your current database instance is showing memory saturation with current traffic  loads.',
        C: 'Your boss has asked for an automated backup solution that takes advantage of AWS  managed services.',
        D: 'You need to perform additional OLTP queries and want to improve the performance  of those queries.Review Questions   57'
      },
      answer: [ 'A', 'B' ]
    },
    // Q17
    {
      question: 'Can you configure a database instance to be both a read replica and a primary database  instance for the original instance?',
      choices: {
        A: 'Yes, as long as the instances are all in the same availability zone.',
        B: 'Yes, if you turn on circular replication in both primary database instances.',
        C: 'Yes, as long as the instances are not in the same availability zone.',
        D: 'No, AWS does not support circular replication.'
      },
      answer: 'D'
    },
    // Q18
    {
      question: 'In which of the following ways can you create a read replica? (Choose two.)',
      choices: {
        A: 'Through the AWS console',
        B: 'Through the AWS online support system',
        C: 'Through the AWS API',
        D: 'Through Elastic Beanstalk'
      },
      answer: [ 'A', 'C' ]
    },
    // Q19
    {
      question: 'How are automated backups related to read replicas?',
      choices: {
        A: 'They are not; read replicas and automated backups have no relationship at all.',
        B: 'Read replicas do not create automatic backups, but the primary database instance  must have automatic backups enabled to create read replicas.',
        C: 'Read replicas cause the primary database instance to automatically begin backing up.',
        D: 'Each read replica is automatically backed up after an initial read from the primary  database instance.'
      },
      answer: 'B'
    },
    // Q20
    {
      question: 'Can a database instance be a read replica of one database and the source instance for  another read replica?',
      choices: {
        A: 'Yes, as long as the source and replicant database are not the same instance.',
        B: 'No, a database cannot be both a read replica and a source database.',
        C: 'Yes, as long as the source and replicant database are in the same availability zone.',
        D: 'Yes, as long as you enable circular replication on both databases.'
      },
      answer: 'A'
    },
    // Q21
    {
      question: 'How quickly can you make changes to the backup window used by your RDS instance?',
      choices: {
        A: 'Changes to the window via the console take place within 1 hour; changes made via  the API take place immediately.',
        B: 'Changes to the window take place after the next complete backup occurs.',
        C: 'Changes to the window via the API take place within 1 hour; changes made via the  console take place immediately.',
        D: 'Changes to the window take place immediately.'
      },
      answer: 'D'
    },
    // Q22
    {
      question: 'What is the longest backup retention window that Amazon RDS allows?',
      choices: {
        A: '30 days',
        B: '35 days',
        C: '45 days',
        D: '365 days58   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'B'
    },
    // Q23
    {
      question: 'You have an Oracle installation using a custom geospatial plug-in. You also want to  ensure the maximum throughput for database operations once those operations are begun  by the plug-in. How would you set up Oracle to meet these requirements?',
      choices: {
        A: 'Set up Oracle using RDS with provisioned IOPS.',
        B: 'Set up Oracle using RDS with magnetic storage.',
        C: 'Install Oracle on an EC2 instance with a provisioned IOPS EBS volume.',
        D: 'Install Oracle on an EC2 instance with a magnetic EBS volume.'
      },
      answer: 'C'
    },
    // Q24
    {
      question: 'In what scenarios would you install an Oracle database on an EC2 instance rather than  using RDS? (Choose two.)',
      choices: {
        A: 'You want to use an ALB to support multiple instances and round-robin request   distributions.',
        B: 'Your database size is greater than 80% of the maximum database size in RDS.',
        C: 'You have custom plug-ins that will not run in RDS.',
        D: 'You want to ensure that your database is only accessible through your private subnet  in a VPC.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q25
    {
      question: 'Which of the following are SQL-based options in RDS? (Choose two.)',
      choices: {
        A: 'Aurora',
        B: 'DynamoDB',
        C: 'MariaDB',
        D: 'Redshift'
      },
      answer: [ 'A', 'C' ]
    },
    // Q26
    {
      question: 'You are a new architect at a company building out a large-scale database deployment for  web applications that receive thousands of requests per minute. The previous architect  suggested a Multi-AZ deployment in RDS to ensure maximum responsiveness to the web  tier. Is this a good approach for high performance?',
      choices: {
        A: 'No, because a Multi-AZ deployment is no faster in responding to requests than a  standard RDS deployment.',
        B: 'Yes, because the additional databases in a Multi-AZ deployment will share the  request load from the web tier.',
        C: 'Yes, because a Multi-AZ deployment will ensure that if the primary database goes  down, a secondary database will be current and available.',
        D: 'No, because a Multi-AZ deployment can only field requests from the availability zone  in which each database resides.'
      },
      answer: 'A'
    },
    // Q27
    {
      question: 'You launch an EC2 instance that has two volumes attached: a root and an additional  volume, both created with default settings. What happens to each volume when you termi- nate the instance?',
      choices: {
        A: 'The root volume is deleted and the additional volume is preserved.',
        B: 'Both volumes are deleted.',
        C: 'Both volumes are preserved.',
        D: 'The instance is unable to terminate until the root volume is deleted.Review Questions   59'
      },
      answer: 'A'
    },
    // Q28
    {
      question: 'How many S3 buckets can you add to an account?',
      choices: {
        A: '100',
        B: '100 by default, but this can be increased by contacting AWS.',
        C: 'It depends on the default set for the new account by AWS.',
        D: 'It depends on how the account is configured at account creation.'
      },
      answer: 'B'
    },
    // Q29
    {
      question: 'What type of replication occurs in a Multi-AZ RDS setup?',
      choices: {
        A: 'Sequential replication',
        B: 'Synchronous replication',
        C: 'Asynchronous replication',
        D: 'Synchronous replication for full backups and asynchronous replication for incremen- tal backups'
      },
      answer: 'B'
    },
    // Q30
    {
      question: 'What type of replication occurs in a read replica RDS setup?',
      choices: {
        A: 'Sequential replication',
        B: 'Synchronous replication',
        C: 'Asynchronous replication',
        D: 'Synchronous replication for full backups and asynchronous replication for incremen- tal backups'
      },
      answer: 'C'
    },
    // Q31
    {
      question: 'Which of the following protocols and routing approaches does a classic load balancer sup- port? (Choose two.)',
      choices: {
        A: 'IPv4',
        B: 'IPv6',
        C: 'HTTP/2',
        D: 'Registering targets in target groups and routing traffic to those groups'
      },
      answer: [ 'A', 'B' ]
    },
    // Q32
    {
      question: 'How many elastic IP addresses can you create per region by default in a new AWS  account?',
      choices: {
        A: '5',
        B: '10',
        C: '20',
        D: 'There is no preset limit.'
      },
      answer: 'A'
    },
    // Q33
    {
      question: 'To how many EBS volumes can a single EC2 instance attach?',
      choices: {
        A: '1',
        B: '2',
        C: '27',
        D: 'Unlimited60   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'C'
    },
    // Q34
    {
      question: 'How many EC2 instances can be attached to a single EBS volume at one time?',
      choices: {
        A: '1',
        B: '2',
        C: '27',
        D: 'Unlimited'
      },
      answer: 'A'
    },
    // Q35
    {
      question: 'Which of the following protocols are supported by an application load balancer?   (Choose two.)',
      choices: {
        A: 'SSH',
        B: 'HTTP',
        C: 'HTTPS',
        D: 'FTP'
      },
      answer: [ 'B', 'C' ]
    },
    // Q36
    {
      question: 'Which of the following provide ways to automate the backup of your RDS database?  (Choose two.)',
      choices: {
        A: 'Automated snapshots',
        B: 'S3 lifecycle management policies',
        C: 'Automated backups',
        D: 'Data pipeline'
      },
      answer: [ 'A', 'C' ]
    },
    // Q37
    {
      question: 'You have an EC2 instance running a heavy compute process that is constantly writ- ing data to and from a cache on disk. How and when should you take a snapshot of the  instance to ensure the most complete snapshot?',
      choices: {
        A: 'Take a snapshot of the instance from the AWS console.',
        B: 'Shut down the instance and take a snapshot of the instance.',
        C: 'Take a snapshot of the instance from the AWS CLI.',
        D: 'Detach the EBS volume attached to the instance and take a snapshot of both the EC2  and EBS instance.'
      },
      answer: 'B'
    },
    // Q38
    {
      question: 'Your web-based application uses a large RDS data store to write and read user profile  information. The latest marketing campaign has increased traffic to the application by an  order of magnitude. Users are reporting long delays when logging in after having signed  up. Which solutions are valid approaches to addressing this lag? (Choose two.)',
      choices: {
        A: 'Set up a Multi-AZ configuration for your RDS and round-robin requests between the  two RDS instances to spread out traffic.',
        B: 'Employ ElastiCache to cache users’ credentials after their initial visit to reduce trips  to the database from the web application.',
        C: 'Set up a read replica configuration for your RDS and round-robin requests between  all the replicas to spread out traffic.',
        D: 'Increase the number of EC2 instances allocated to your Auto Scaling group to spread  out traffic on the web application tier.Review Questions   61'
      },
      answer: [ 'B', 'C' ]
    },
    // Q39
    {
      question: 'Your users are now storing all of their photos in your cloud-based application. Cloud- Watch metrics suggests that photos are written an average of 5 times per user per day and  read 100 times per user per day. If photos are lost, user surveys indicate that users are not  typically upset and simply re-upload the missing photo or ignore the missing photo alto- gether. What is the most cost-effective recommendation for the S3 storage class to use?',
      choices: {
        A: 'Standard S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'S3 RRS'
      },
      answer: 'C'
    },
    // Q40
    {
      question: 'You are consulting for a company that wants to migrate its 85TB data store into S3. It is  willing to upload the data into S3 every night in small batches but is concerned that over- seas customers using its other applications might experience network latency as they are  transferring files into S3. What solution should you recommend to move the company’s  data?',
      choices: {
        A: 'Enable Transfer Acceleration on S3.',
        B: 'Direct Connect',
        C: 'Snowball',
        D: 'Set up a VPN that uses a virtual private gateway for transferring the data.'
      },
      answer: 'C'
    },
    // Q41
    {
      question: 'Which of the following are valid reasons for using Multipart Upload for uploading objects  to S3? (Choose two.)',
      choices: {
        A: 'You need a solution that recovers from network issues.',
        B: 'You need a solution to upload files larger than 10 GB.',
        C: 'You need a solution for increasing the security around uploaded objects.',
        D: 'You need a solution to decrease the time required to upload large files.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q42
    {
      question: 'In which of the following situations would you recommend using a placement group?',
      choices: {
        A: 'Your fleet of EC2 instances requires high disk IO.',
        B: 'Your fleet of EC2 instances requires high network throughput across two availability  zones.',
        C: 'Your fleet of EC2 instances requires high network throughput within a single avail- ability zone.',
        D: 'Your fleet of EC2 instances requires high network throughput to S3 buckets.'
      },
      answer: 'C'
    },
    // Q43
    {
      question: 'Which of the following statements are true about cluster placement groups? (Choose two.)',
      choices: {
        A: 'All instances in the group must be in the same availability zone.',
        B: 'Instances in the group will see lowered network latency in communicating with each  other.',
        C: 'Instances in the group will see improved disk write performance when communicat- ing with S3.',
        D: 'Instances in the group must all be of the same instance class.62   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'A', 'B' ]
    },
    // Q44
    {
      question: 'Which of the following statements are true about spread placement groups? (Choose two.)',
      choices: {
        A: 'All instances in the group must be in the same availability zone.',
        B: 'Instances in the group will see lowered network latency in communicating with each  other.',
        C: 'You can have up to seven instances in multiple availability zones in the group.',
        D: 'AWS provisions the hardware rather than having you specify the distinct hardware  for the group.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q45
    {
      question: 'Which of the following storage classes has the lowest durability?',
      choices: {
        A: 'S3 standard',
        B: 'S3-IA',
        C: 'Glacier',
        D: 'They all have equal durability.'
      },
      answer: 'D'
    },
    // Q46
    {
      question: 'Which of the following storage classes has the highest availability?',
      choices: {
        A: 'S3 standard',
        B: 'S3-IA',
        C: 'Glacier',
        D: 'They all have equal availability.'
      },
      answer: 'A'
    },
    // Q47
    {
      question: 'Which of the following storage classes support automated lifecycle transitions?',
      choices: {
        A: 'S3 standard',
        B: 'S3-IA',
        C: 'Glacier',
        D: 'They all support lifecycle transitions.'
      },
      answer: 'D'
    },
    // Q48
    {
      question: 'Where is data stored when placed into S3-IA? (Choose two.)',
      choices: {
        A: 'In the region specified at bucket creation',
        B: 'In a special AWS “global” region for S3 storage',
        C: 'In at least three availability zones',
        D: 'In a single availability zone within at least three regions'
      },
      answer: [ 'A', 'C' ]
    },
    // Q49
    {
      question: 'You need to perform a large amount of OLAP. Which AWS service would you choose?',
      choices: {
        A: 'DynamoDB',
        B: 'RDS Aurora',
        C: 'Redshift',
        D: 'Oracle installed on EC2 instances'
      },
      answer: 'C'
    },
    // Q50
    {
      question: 'What is the maximum allowable RDS volume size when using provisioned IOPS storage?',
      choices: {
        A: '8 TB',
        B: '16 T B',
        C: '12 TB',
        D: '1 PBReview Questions   63'
      },
      answer: 'B'
    },
    // Q51
    {
      question: 'Which of the following EBS volumes is the most performant?',
      choices: {
        A: 'Provisioned IOPS',
        B: 'Throughput optimized HDD',
        C: 'Cold HDD',
        D: 'General  SSD'
      },
      answer: 'A'
    },
    // Q52
    {
      question: 'Which of the following is a valid reason to use a cold HDD EBS volume?',
      choices: {
        A: 'You need a performant solid-state drive.',
        B: 'You are trying to choose the lowest-cost EBS volume possible.',
        C: 'You are performing data warehousing using the volume.',
        D: 'You need an inexpensive boot volume.'
      },
      answer: 'B'
    },
    // Q53
    {
      question: 'Which of the following are available to use as an EBS boot volume? (Choose two.)',
      choices: {
        A: 'General  SSD',
        B: 'Cold HDD',
        C: 'Throughput optimized HDD',
        D: 'Provisioned IOPS'
      },
      answer: [ 'A', 'D' ]
    },
    // Q54
    {
      question: 'Which of the following is a valid reason to use a General Purpose SSD EBS volume?  (Choose two.)',
      choices: {
        A: 'You need to support large database workloads.',
        B: 'You want a blend of a performant SSD and a cost-sensitive SSD volume.',
        C: 'You are performing data warehousing using the volume.',
        D: 'You have low-latency apps and want to run them on a bootable volume.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q55
    {
      question: 'Which of the following is a valid reason to use a magnetic EBS volume? (Choose two.)',
      choices: {
        A: 'You want a low-cost option for your EBS volume.',
        B: 'You have a set of data that is infrequently accessed but want it stored on an EBS vol- ume rather than S3.',
        C: 'You need to perform processing to support Oracle installed on a fleet of EC2  instances.',
        D: 'You have low-latency apps and want to run them on a bootable volume.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q56
    {
      question: 'Which of the following is a valid reason to use a provisioned IOPS EBS volume?   (Choose two.)',
      choices: {
        A: 'You want a low-cost option for your EBS volume.',
        B: 'You need to support a large MongoDB database workload.',
        C: 'You need massive performance and throughput for your applications.',
        D: 'You have applications that need a bootable environment but can fail from time to  time and be re-created.64   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'B', 'C' ]
    },
    // Q57
    {
      question: 'Which of the following are characteristics of SSD-backed volumes? (Choose two.)',
      choices: {
        A: 'Transactional workloads',
        B: 'Streaming workloads',
        C: 'Small I/O size',
        D: 'Throughput-focused'
      },
      answer: [ 'A', 'C' ]
    },
    // Q58
    {
      question: 'Which of the following are characteristics of HDD-backed volumes? (Choose two.)',
      choices: {
        A: 'Transactional workloads',
        B: 'Streaming workloads',
        C: 'Small I/O size',
        D: 'Throughput-focused'
      },
      answer: [ 'B', 'D' ]
    },
    // Q59
    {
      question: 'You are charged with installing Oracle on a fleet of EC2 instances due to custom Java- based plug-ins you need to install along with Oracle. Which EBS volume type would you  choose to best support your Oracle installation?',
      choices: {
        A: 'Magnetic',
        B: 'Throughput-optimized HDD',
        C: 'Provisioned IOPS SSD',
        D: 'General  SSD'
      },
      answer: 'C'
    },
    // Q60
    {
      question: 'You are the solutions architect for a company installing a web application on a set of EC2  instances. The application writes a small amount of user profile data to attached EBS  volumes, and accesses that data an average of once every five minutes if the user is still  using the web application. Additionally, because of the high cost of the application’s RDS  instance, you would like to minimize your EBS volume costs. Which EBS volume type  would you choose to support these applications?',
      choices: {
        A: 'Magnetic',
        B: 'Throughput-optimized HDD',
        C: 'Provisioned IOPS SSD',
        D: 'General  SSD'
      },
      answer: 'A'
    },
    // Q61
    {
      question: 'Which of the following can be an EBS boot volume? (Choose two.)',
      choices: {
        A: 'Magnetic',
        B: 'Throughput-optimized HDD',
        C: 'Provisioned IOPS SSD',
        D: 'Cold HDD'
      },
      answer: [ 'A', 'C' ]
    },
    // Q62
    {
      question: 'Which of the following cannot be used as an EBS boot volume? (Choose two.)',
      choices: {
        A: 'General  SSD',
        B: 'Throughput-optimized HDD',
        C: 'Cold HDD',
        D: 'MagneticReview Questions   65'
      },
      answer: [ 'B', 'C' ]
    },
    // Q63
    {
      question: 'Which of the following is not an Elastic Load Balancing option?',
      choices: {
        A: 'Classic load balancer',
        B: 'Application load balancer',
        C: 'Weighting load balancer',
        D: 'Network load balancer'
      },
      answer: 'C'
    },
    // Q64
    {
      question: 'Which of the following are valid Elastic Load Balancing options? (Choose two.)',
      choices: {
        A: 'ELB',
        B: 'MLB',
        C: 'ALB',
        D: 'VLB'
      },
      answer: [ 'A', 'C' ]
    },
    // Q65
    {
      question: 'At what level of the TCP stack does an ALB operate?',
      choices: {
        A: 'Level 1',
        B: 'Level 4',
        C: 'Level 7',
        D: 'Level 8'
      },
      answer: 'C'
    },
    // Q66
    {
      question: 'At what level of the TCP stack does a network load balancer operate?',
      choices: {
        A: 'Level 1',
        B: 'Level 4',
        C: 'Level 7',
        D: 'Level 8'
      },
      answer: 'B'
    },
    // Q67
    {
      question: 'At what levels of the TCP stack does a classic load balancer operate? (Choose two.)',
      choices: {
        A: 'Level 1',
        B: 'Level 4',
        C: 'Level 7',
        D: 'Level 8'
      },
      answer: [ 'B', 'C' ]
    },
    // Q68
    {
      question: 'Which of the following is a valid reason to use an application load balancer?',
      choices: {
        A: 'You want your applications to automatically scale.',
        B: 'You want to balance load across your applications, which reside in containers.',
        C: 'You want to achieve better fault tolerance for your applications.',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q69
    {
      question: 'Can you use an elastic load balancer to balance load within a VPC?',
      choices: {
        A: 'Yes, as long as the VPC has an internet gateway.',
        B: 'Yes, by setting the ELB to be internal to the VP',
        C: '.   No, load balancers can only route traffic from the Internet.',
        D: 'No, load balancers cannot operate inside a VPC.66   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'B'
    },
    // Q70
    {
      question: 'You are an architect working on adding scalability to an application based on EC2  instances within a public-facing VPC. You want the maximum amount of flexibility in  weighting and load balancing options, as you plan to experiment with various routing  types to see which handles load most evenly. Which type of load balancer should you use?',
      choices: {
        A: 'Classic ELB',
        B: 'Application load balancer',
        C: 'Network load balancer',
        D: 'Either an ALB or ELB would be suitable.'
      },
      answer: 'B'
    },
    // Q71
    {
      question: 'You have a host of EC2 instances all with dedicated IP addresses serving results from  complex computations. You want to load balance across these instances, each of which  receives hundreds of thousands of requests a second currently. Which load balancer would  you employ?',
      choices: {
        A: 'Classic ELB',
        B: 'Application load balancer',
        C: 'Network load balancer',
        D: 'Either an ALB or ELB would be suitable.'
      },
      answer: 'C'
    },
    // Q72
    {
      question: 'You have a fleet of web-hosting EC2 instances. Currently, you have SSL certificates  installed for each EC2 instance, but the cost of maintaining these certificates and install- ing new ones has become higher over recent years. You want to architect a solution for  SSL termination that doesn’t involve multiple certificates. Which load balancer would you  suggest?',
      choices: {
        A: 'Classic ELB',
        B: 'Application load balancer',
        C: 'Network load balancer',
        D: 'Either an ALB or ELB would be suitable.'
      },
      answer: 'B'
    },
    // Q73
    {
      question: 'You need a load balancer that supports SSL termination. Which type of load balancer  would you choose?',
      choices: {
        A: 'Classic ELB',
        B: 'Application load balancer',
        C: 'Network load balancer',
        D: 'Either an ALB or ELB would be suitable.'
      },
      answer: 'D'
    },
    // Q74
    {
      question: 'How many domains can you register and manage with Route 53?',
      choices: {
        A: '50',
        B: '100',
        C: 'There is no limit.',
        D: 'There is a limit of 50, but it can be raised upon request.Review Questions   67'
      },
      answer: 'D'
    },
    // Q75
    {
      question: 'Which of the following record sets are supported by Route 53?',
      choices: {
        A: 'A records',
        B: 'MX records',
        C: 'Alias records',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q76
    {
      question: 'Are zone apex records supported by Route 53?',
      choices: {
        A: 'Ye s',
        B: 'No',
        C: 'Yes, as long as they point to AWS resources.',
        D: 'Not by default, but you can request support by AWS and then support them.'
      },
      answer: 'A'
    },
    // Q77
    {
      question: 'What engines does ElastiCache provide for caching? (Choose two.)',
      choices: {
        A: 'memcached',
        B: 'redis',
        C: 'cacherm',
        D: 'gitcache'
      },
      answer: [ 'A', 'B' ]
    },
    // Q78
    {
      question: 'Which of the following do you need to handle when setting up ElastiCache?',
      choices: {
        A: 'Patching',
        B: 'Backups',
        C: 'Monitoring',
        D: 'None of the above'
      },
      answer: 'D'
    },
    // Q79
    {
      question: 'For which of the following would ElastiCache offer performance improvements?   (Choose two.)',
      choices: {
        A: 'Gaming',
        B: 'ElastiCache can improve any application’s performance when used properly.',
        C: 'Financial services',
        D: 'A and C'
      },
      answer: [ 'B', 'D' ]
    },
    // Q80
    {
      question: 'Which of the following accurately describe ElastiCache? (Choose two.)',
      choices: {
        A: 'An in-memory data store',
        B: 'A runtime engine for data distribution',
        C: 'A mechanism for sharding application demands',
        D: 'A monitoring solution for large datasets'
      },
      answer: [ 'A', 'C' ]
    },
    // Q81
    {
      question: 'Which of the following would you use to interact with a CloudFront distribution?',
      choices: {
        A: 'CloudFormation',
        B: 'The AWS CLI',
        C: 'The AWS REST APIs',
        D: 'Any of these68   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'D'
    },
    // Q82
    {
      question: 'Which of the following are origin sources usable with a CloudFront distribution?   (Choose two.)',
      choices: {
        A: 'An ALB',
        B: 'DynamoDB',
        C: 'AWS Shield',
        D: 'An Oracle RDS instance'
      },
      answer: [ 'A', 'C' ]
    },
    // Q83
    {
      question: 'Which of the following are origin sources usable with a CloudFront distribution?   (Choose two.)',
      choices: {
        A: 'DynamoDB',
        B: 'A fleet of EC2 instances',
        C: 'S3 buckets',
        D: 'RedShift'
      },
      answer: [ 'B', 'C' ]
    },
    // Q84
    {
      question: 'Which of the following are origin sources usable with a CloudFront distribution?   (Choose two.)',
      choices: {
        A: 'Lambda@Edge',
        B: 'A static website on S3',
        C: 'Aurora on RDS',
        D: 'ElastiCache instances'
      },
      answer: [ 'A', 'B' ]
    },
    // Q85
    {
      question: 'Which of the following two are advantages of using a CloudFront distribution?   (Choose two.)',
      choices: {
        A: 'Performance',
        B: 'Fault tolerance',
        C: 'Integration with AWS managed services',
        D: 'Disaster recovery'
      },
      answer: [ 'A', 'C' ]
    },
    // Q86
    {
      question: 'How does CloudFront increase the security of content at the edge? (Choose two.)',
      choices: {
        A: 'Required HTTPS at all edge locations',
        B: 'Integration with AWS WAF (if configured)',
        C: 'Automatic client keys encrypted with KMS',
        D: 'Automatic deployment of AWS Shield'
      },
      answer: [ 'B', 'D' ]
    },
    // Q87
    {
      question: 'Choose the true statements about edge locations. (Choose two.)',
      choices: {
        A: 'There are fewer edge locations than regions.',
        B: 'There are more edge locations than regions.',
        C: 'There are fewer edge locations than availability zones.',
        D: 'There are more edge locations than availability zones.Review Questions   69'
      },
      answer: [ 'B', 'D' ]
    },
    // Q88
    {
      question: 'Which of the following can you do with CloudFront? (Choose two.)',
      choices: {
        A: 'Quickly deploy a global network for your content without contracts or startup  requirements.',
        B: 'Quickly create websites that are dynamic and low latency.',
        C: 'Distribute content with low latency and high data transfer rates.',
        D: 'Provide storage for static files that are frequently accessed.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q89
    {
      question: 'Which of the following can be origin servers for CloudFront? (Choose two.)',
      choices: {
        A: 'S3 buckets',
        B: 'EC2 instances',
        C: 'RedShift workloads',
        D: 'SNS notifications'
      },
      answer: [ 'A', 'B' ]
    },
    // Q90
    {
      question: 'Which domain name should you use to take advantage of CloudFront?',
      choices: {
        A: 'The domain name registered to your S3 buckets in Route 53',
        B: 'The domain name registered in CloudFront as the origin for your static and dynamic  content',
        C: 'The domain name registered in your ALB or ELB pointing to your content',
        D: 'The domain name from the AWS console for your CloudFront distribution'
      },
      answer: 'B'
    },
    // Q91
    {
      question: 'Which of the following might occur when content is requested from a CloudFront edge  location? (Choose two.)',
      choices: {
        A: 'Cached content at the edge location is returned.',
        B: 'The request is passed directly to an origin server without CloudFront processing.',
        C: 'A request is made to an origin server for the requested content.',
        D: 'A redirect is returned to the client.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q92
    {
      question: 'Which of the following statements about CloudFront are not true? (Choose two.)',
      choices: {
        A: 'CloudFront edge locations are geographically distributed across the world.',
        B: 'CloudFront maintains persistent connections with origin servers.',
        C: 'A request will be routed by CloudFront to the nearest edge location to the origin  server, which will serve that request.',
        D: 'CloudFront can use an RDS instance of PostgreSQL as an origin server.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q93
    {
      question: 'How is data transferred out from a region to a CloudFront edge location charged?',
      choices: {
        A: 'At normal egress data rates',
        B: 'At half the price of normal egress rates',
        C: 'At the lowest available rate for the region from which the data originates',
        D: 'There is no charge.70   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'D'
    },
    // Q94
    {
      question: 'Which of the following are true about both S3 and CloudFront? (Choose two.)',
      choices: {
        A: 'They both store files.',
        B: 'They both support encryption of their content.',
        C: 'They both cache files.',
        D: 'They both provide low-latency distribution of content to clients.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q95
    {
      question: 'Which of the following content types can be served by CloudFront? (Choose two.)',
      choices: {
        A: 'The returned rows from a SQL query',
        B: 'The response from a PHP script',
        C: 'A Lambda function',
        D: 'HTML and CSS'
      },
      answer: [ 'B', 'D' ]
    },
    // Q96
    {
      question: 'Which of the following can be CloudFront origin servers? (Choose two.)',
      choices: {
        A: 'A web server hosted on another cloud provider',
        B: 'An EC2 instance fleet spread across two regions',
        C: 'A MySQL RDS instance',
        D: 'An SNS topic'
      },
      answer: [ 'A', 'B' ]
    },
    // Q97
    {
      question: 'What is an edge location?',
      choices: {
        A: 'A specific node within a worldwide network of data centers that deliver CloudFront  content',
        B: 'A virtual cloud of caching stations',
        C: 'A fleet of EC2 instances managed by AWS',
        D: 'An EC2 instance in a remote region from your primary content'
      },
      answer: 'A'
    },
    // Q98
    {
      question: 'What is a CloudFront distribution?',
      choices: {
        A: 'A worldwide network of data centers',
        B: 'A set of origin servers whose content is served by CloudFront via various edge   locations',
        C: 'The cached content on CloudFront edge locations at any given time',
        D: 'The cached content from your account stored on CloudFront edge locations at any  given time'
      },
      answer: 'B'
    },
    // Q99
    {
      question: 'How long is content cached at an edge location?',
      choices: {
        A: '24 hours',
        B: '12 hours',
        C: '12 hours by default, but this value can be changed.',
        D: '24 hours by default, but this value can be changed.Review Questions   71'
      },
      answer: 'D'
    },
    // Q100
    {
      question: 'What is the shortest expiration period allowed for a CloudFront edge location?',
      choices: {
        A: '0 seconds',
        B: '5 seconds',
        C: '30 seconds',
        D: '1 minute'
      },
      answer: 'A'
    },
    // Q101
    {
      question: 'You have a CloudFront distribution setup, but you are not seeing any performance benefit  to your users. What might be possible causes for the lack of benefit? (Choose two.)',
      choices: {
        A: 'Users do not have CloudFront enabled in their client applications and are therefore  not getting the benefits of the CloudFront distribution. Enable CloudFront in their  client applications.',
        B: 'The expiration period is set so low that caching is not happening enough to benefit  users. Raise the expiration period time.',
        C: 'Your set of origin servers is too small and being flooded by requests from Cloud- Front. Consider increasing the number or processing power of origin servers.',
        D: 'Users are not close enough to edge locations to see a benefit from CloudFront.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q102
    {
      question: 'Why would you set the expiration period to 0 on a CloudFront distribution?',
      choices: {
        A: 'To expire all content on all existing edge locations',
        B: 'To ensure caching does not occur for maximum throughput',
        C: 'To reduce the chances of a DDoS attack on your edge locations',
        D: 'To ensure the most up-to-date content is served at all edge locations'
      },
      answer: 'A'
    },
    // Q103
    {
      question: 'How can you delete a file from an edge location? (Choose two.)',
      choices: {
        A: 'Use the AWS console to navigate to the edge location and delete the file.',
        B: 'Set the expiration period to 0 on your distribution.',
        C: 'Remove the file from your origin servers.',
        D: 'Delete the file from your CloudFront distribution using the AWS CLI.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q104
    {
      question: 'Which is the correct order of the steps below to remove a file from an edge location imme- diately with the least interruption to existing service?',
      choices: {
        A: 'First set the expiration time on a CloudFront distribution to 0; then remove the file  from the origin servers.',
        B: 'First take the CloudFront distribution offline; then remove the file from the origin  servers.',
        C: 'First remove the file from the origin servers; then set the expiration time on the  CloudFront distribution to 0.',
        D: 'First, remove the file from the origin servers; then take the CloudFront distribution  offline.72   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'C'
    },
    // Q105
    {
      question: 'Which of the following immediately removes an object from all edge locations?',
      choices: {
        A: 'Removing the object from all origin servers',
        B: 'Removing all CloudFront edge locations with the object cached',
        C: 'Removing the object using the invalidation API',
        D: 'Invalidating the CloudFront distribution'
      },
      answer: 'C'
    },
    // Q106
    {
      question: 'Which of the following provides the highest availability for critical files?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'Glacier'
      },
      answer: 'A'
    },
    // Q107
    {
      question: 'Which of the following storage classes has the lowest first byte latency?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'They are all identical.'
      },
      answer: 'D'
    },
    // Q108
    {
      question: 'Which of the following storage classes provides the fastest data retrieval speeds?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'They are all identical.'
      },
      answer: 'D'
    },
    // Q109
    {
      question: 'How long does a typical Glacier data retrieval take?',
      choices: {
        A: '1 hour',
        B: '1–3 hours',
        C: '3–5 hours',
        D: '5–10 hours'
      },
      answer: 'C'
    },
    // Q110
    {
      question: 'Why would you choose S3-IA over S3?',
      choices: {
        A: 'You want to save money and don’t need your data as quickly.',
        B: 'You want to save money and don’t need your data as frequently.',
        C: 'You want to save money and don’t need data in multiple availability zones.',
        D: 'You want to save money and don’t need fault tolerance of your data.'
      },
      answer: 'B'
    },
    // Q111
    {
      question: 'Which of the following statements are not true? (Choose two.)',
      choices: {
        A: 'There are more edge locations than availability zones.',
        B: 'An edge location is separate from an availability zone.',
        C: 'An RDS instance can be an origin server.',
        D: 'The default expiration period is 12 hours.Review Questions   73'
      },
      answer: [ 'C', 'D' ]
    },
    // Q112
    {
      question: 'Which of the following is a valid origin server for a CloudFront distribution?',
      choices: {
        A: 'An S3 bucket',
        B: 'An EC2 instance',
        C: 'An ALB',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q113
    {
      question: 'What does AWS call a collection of edge locations?',
      choices: {
        A: 'CloudFront',
        B: 'An edge zone',
        C: 'Lambda@Edge',
        D: 'A distribution'
      },
      answer: 'D'
    },
    // Q114
    {
      question: 'What type of distribution should you use for media streaming?',
      choices: {
        A: 'Web distribution',
        B: 'Media distribution',
        C: 'RTMP distribution',
        D: 'Edge distribution'
      },
      answer: 'C'
    },
    // Q115
    {
      question: 'Which of the following are valid media distributions for CloudFront? (Choose two.)',
      choices: {
        A: 'Web distribution',
        B: 'Media distribution',
        C: 'RTMP distribution',
        D: 'Edge distribution'
      },
      answer: [ 'A', 'C' ]
    },
    // Q116
    {
      question: 'Which of the following are valid direct operations on an edge location? (Choose two.)',
      choices: {
        A: 'Read an object.',
        B: 'Write an object.',
        C: 'Delete an object.',
        D: 'Update an object.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q117
    {
      question: 'Which of the following are valid use cases for using ElastiCache? (Choose two.)',
      choices: {
        A: 'Real-time transactions',
        B: 'Offline transactions',
        C: 'Record storage',
        D: 'Business intelligence'
      },
      answer: [ 'A', 'D' ]
    },
    // Q118
    {
      question: 'Which of the following can ElastiCache be used for? (Choose two.)',
      choices: {
        A: 'Web server',
        B: 'Database cache',
        C: 'Object storage',
        D: 'Message broker74   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'B', 'D' ]
    },
    // Q119
    {
      question: 'Which of the following can ElastiCache be used for? (Choose two.)',
      choices: {
        A: 'Ephemeral storage',
        B: 'Long-term storage',
        C: 'Message Queue',
        D: 'Logging store'
      },
      answer: [ 'A', 'C' ]
    },
    // Q120
    {
      question: 'What is an ElastiCache shard?',
      choices: {
        A: 'A collection of multiple nodes that make up a cluster',
        B: 'A collection of clusters in an ElastiCache distribution',
        C: 'A collection of edge locations in an ElastiCache distribution',
        D: 'A single node in a cluster'
      },
      answer: 'A'
    },
    // Q121
    {
      question: 'Which of the following provides low latency access to most frequently accessed data while  storing all data in the cloud?',
      choices: {
        A: 'Storage gateway – snapshot',
        B: 'Storage gateway – virtual tape library',
        C: 'Storage gateway – stored volume',
        D: 'Storage gateway – cached volume'
      },
      answer: 'D'
    },
    // Q122
    {
      question: 'Which of the following provides low latency access to all data while still storing the data- set in the cloud?',
      choices: {
        A: 'Storage gateway – snapshot',
        B: 'Storage gateway – virtual tape library',
        C: 'Storage gateway – stored volume',
        D: 'Storage gateway – cached volume'
      },
      answer: 'C'
    },
    // Q123
    {
      question: 'Which of the following provides the fastest access to a customer dataset?',
      choices: {
        A: 'S3 with Transfer Acceleration',
        B: 'Storage gateway – virtual tape library',
        C: 'Storage gateway – stored volume',
        D: 'S3 standard'
      },
      answer: 'C'
    },
    // Q124
    {
      question: 'Which of the following provides access to frequently accessed data at top speeds while  still maintaining disaster recovery options?',
      choices: {
        A: 'Storage gateway – stored volume',
        B: 'Storage gateway – virtual tape library',
        C: 'S3-IA',
        D: 'S3 standardReview Questions   75'
      },
      answer: 'A'
    },
    // Q125
    {
      question: 'You are creating a user data storage system by using an S3 bucket with multiple folders,  one folder per user. You want to then tag each folder with the username of the staff mem- ber and build IAM permissions based on these tags. Which of the following is a problem  with this approach?',
      choices: {
        A: 'S3 buckets cannot be permissioned using IAM.',
        B: 'Folders in an S3 bucket cannot have individual tags associated with them.',
        C: 'Buckets in S3 cannot be tagged with multiple tags.',
        D: 'IAM cannot operate based on individual S3 buckets.'
      },
      answer: 'B'
    },
    // Q126
    {
      question: 'You are in charge of a data migration your company is preparing to undertake. Your com- pany wants to store files on AWS and see if the costs are lower than on-premises storage,  but your company is being very cautious. In this first phase, it wants to ensure the lowest  possible latency of the majority of the files. Which storage gateway configuration would  you recommend?',
      choices: {
        A: 'Cached volumes',
        B: 'Virtual tape library',
        C: 'Snapshot',
        D: 'Stored volumes'
      },
      answer: 'D'
    },
    // Q127
    {
      question: 'Why would you choose to configure read replicas across all available AZs as opposed to  configuring them in the same region as your primary database source?',
      choices: {
        A: 'You have a global customer base.',
        B: 'You want to ensure disaster recovery.',
        C: 'You want to maximize network throughput.',
        D: 'You should never configure read replicas outside of the region of the primary data- base instance.'
      },
      answer: 'A'
    },
    // Q128
    {
      question: 'Why would you choose to configure read replicas across all available AZs in the same  single region as your primary database instance as opposed to configuring them across all  AWS regions?',
      choices: {
        A: 'You have a global customer base.',
        B: 'You want to ensure disaster recovery.',
        C: 'You have a localized customer base close to the target region.',
        D: 'You should never configure all read replicas within the same region of the primary  database instance.'
      },
      answer: 'C'
    },
    // Q129
    {
      question: 'All your customers are in a single geographical region, and you have created a database  instance and multiple read replicas across the AZs in that region. Is there any value in also  creating replicas in additional regions?',
      choices: {
        A: 'No, there is no value in that approach.',
        B: 'Yes, as you gain some disaster recovery benefits from a replica in another region.',
        C: 'Yes, as customers may be routed to different regions when they request data from  your databases.',
        D: 'Yes, as S3 buckets are in different regions as well.76   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'B'
    },
    // Q130
    {
      question: 'Which of the following can be done to a read replica? (Choose two.)',
      choices: {
        A: 'Read from it.',
        B: 'Write to it.',
        C: 'Fail over to it.',
        D: 'Back it up.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q131
    {
      question: 'Which of the following will tend to cause performance improvements in an RDS instance  that is currently severely taxed? (Choose two.)',
      choices: {
        A: 'Create RDS read replicas of the instance.',
        B: 'Switch from RDS to DynamoDB.',
        C: 'Configure the instance to use Multi-AZ.',
        D: 'Upgrade the RDS instance.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q132
    {
      question: 'You have a number of large PDF files stored in an RDS instance. These PDFs are accessed  infrequently, but when they are accessed, they need to respond quickly to requests. As the  user base increases, the load is beginning to overwhelm the database. What suggestions  would you make to improve performance? (Choose two.)',
      choices: {
        A: 'Move the PDFs to S3.',
        B: 'Install ElastiCache in front of the database.',
        C: 'Create read replicas of the primary database.',
        D: 'Consider increasing the available memory for the database instance.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q133
    {
      question: 'You have a number of large PDF files stored in an RDS instance used by a company’s  internal staff, of which 80% are on-site. These PDFs are accessed infrequently, but when  they are accessed, they need to respond quickly to requests. As the company’s support  staff has increased, the load is beginning to overwhelm the database. What suggestions  would you make to improve performance? (Choose two.)',
      choices: {
        A: 'Set up a CloudFront distribution.',
        B: 'Upgrade the instance running the RDS database.',
        C: 'Consider installing a storage gateway with stored volumes at the customer’s   on-premises site.',
        D: 'Install ElastiCache in front of the database.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q134
    {
      question: 'You have a number of large PDF files stored in an RDS instance used by a company’s  geographically distributed user base. These PDFs are accessed infrequently, but when they  are accessed, they need to respond quickly to requests. As the company’s user base has  increased, the load is beginning to overwhelm the database. What is the best option for  improving database performance?',
      choices: {
        A: 'Set up a CloudFront distribution.',
        B: 'Create read replicas across the regions in which the user base accesses the application.',
        C: 'Consider installing a storage gateway with stored volumes at the customer’s on-  premises site.',
        D: 'Install ElastiCache in front of the database.Review Questions   77'
      },
      answer: 'B'
    },
    // Q135
    {
      question: 'You have a number of large images stored in an RDS instance used by a company’s geo- graphically distributed user base. Each of these images is accessed several thousand times  a day and needs to respond quickly to requests. As the company’s user base has increased,  the load is beginning to overwhelm the database. What is the best option for improving  database performance?',
      choices: {
        A: 'Upgrade the instance running the RDS database.',
        B: 'Create read replicas across the regions in which the user base accesses the application.',
        C: 'Consider installing a storage gateway with stored volumes at the customer’s on-  premises site.',
        D: 'Install ElastiCache in front of the database.'
      },
      answer: 'D'
    },
    // Q136
    {
      question: 'Which of the following are valid routing policies for Route 53? (Choose two.)',
      choices: {
        A: 'Simple routing',
        B: 'Fault recovery routing',
        C: 'Latency-based routing',
        D: 'Cached routing'
      },
      answer: [ 'A', 'C' ]
    },
    // Q137
    {
      question: 'Which of the following are valid routing policies for Route 53? (Choose two.)',
      choices: {
        A: 'Geolocation routing',
        B: 'Weighted routing',
        C: 'Round-robin routing',
        D: 'Distributed routing'
      },
      answer: [ 'A', 'B' ]
    },
    // Q138
    {
      question: 'Which of the following are valid routing policies for Route 53? (Choose two.)',
      choices: {
        A: 'FIFO routing',
        B: 'Multivalue answer routing',
        C: 'Geoproximity routing',
        D: 'Distributed routing'
      },
      answer: [ 'B', 'C' ]
    },
    // Q139
    {
      question: 'Which of the following routing policies sends traffic to a single resource, such as a web  server?',
      choices: {
        A: 'Geolocation routing',
        B: 'Weighted routing',
        C: 'Simple routing',
        D: 'Latency-based routing'
      },
      answer: 'C'
    },
    // Q140
    {
      question: 'Which of the following routing policies sends traffic to a single resource, unless that  resource is unhealthy, and then routes to a backup resource?',
      choices: {
        A: 'Health-based routing',
        B: 'Failover routing',
        C: 'Simple routing',
        D: 'Latency-based routing78   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'B'
    },
    // Q141
    {
      question: 'Which of the following routing policies chooses a route for a user based on the user’s geo- graphic location?',
      choices: {
        A: 'Health-based routing',
        B: 'Failover routing',
        C: 'Geolocation routing',
        D: 'Region-based routing'
      },
      answer: 'C'
    },
    // Q142
    {
      question: 'Which of the following routing policies chooses a route for a user based on the latency of  the available region to which traffic can be directed?',
      choices: {
        A: 'Health-based routing',
        B: 'Latency-based routing',
        C: 'Geolocation routing',
        D: 'Region-based routing'
      },
      answer: 'B'
    },
    // Q143
    {
      question: 'Which of the following routing policies can direct traffic to multiple resources as long as  those resources are healthy?',
      choices: {
        A: 'Health-based routing',
        B: 'Latency-based routing',
        C: 'Multivalue answer routing',
        D: 'Region-based routing'
      },
      answer: 'C'
    },
    // Q144
    {
      question: 'Which of the following routing policies uses assigned weights to shape traffic to different  resources?',
      choices: {
        A: 'Health-based routing',
        B: 'Latency-based routing',
        C: 'Multivalue answer routing',
        D: 'Weighted routing'
      },
      answer: 'D'
    },
    // Q145
    {
      question: 'Which of the following routing policies is ideal for routing traffic to a single web server?',
      choices: {
        A: 'Simple routing',
        B: 'Latency-based routing',
        C: 'Multivalue answer routing',
        D: 'Weighted routing'
      },
      answer: 'A'
    },
    // Q146
    {
      question: 'Which of the following Route 53 routing policies are ideal for a geographically distributed  user base? (Choose two.)',
      choices: {
        A: 'Geolocation routing',
        B: 'Geographical routing',
        C: 'Geoproximity routing',
        D: 'Weighted routingReview Questions   79'
      },
      answer: [ 'A', 'C' ]
    },
    // Q147
    {
      question: 'Which of the following values is an invalid weight for a weighted routing policy?',
      choices: {
        A: '1',
        B: '255',
        C: '125',
        D: 'These weights are all valid.'
      },
      answer: 'D'
    },
    // Q148
    {
      question: 'How does a weight of 0 affect routing on Route 53 when using a weighted routing policy?',
      choices: {
        A: '0 is an invalid weight.',
        B: 'All traffic is directed to the resource with a weight of 0, as long as that resource is  healt hy.',
        C: 'No traffic is directed to the resource with a weight of 0.',
        D: 'Traffic is routed to the resource, but health checks are not performed.'
      },
      answer: 'C'
    },
    // Q149
    {
      question: 'You have three resources in a weighted routing policy. Resource A has a weight of 100,  resource B has a weight of 100, and resource C has a weight of 200. How will traffic be  routed in this scenario?',
      choices: {
        A: '25% of traffic to resource A, 25% of traffic to resource B, and 50% of traffic to  resource C',
        B: '10% of traffic to resource A, 10% of traffic to resource B, and 20% of traffic to  resource C',
        C: '33% of traffic to resource A, 33% of traffic to resource B, and 33% of traffic to  resource C',
        D: 'There is not enough information to know how routing will occur in this scenario.'
      },
      answer: 'A'
    },
    // Q150
    {
      question: 'Which of the following statements concerning Route 53 routing policies are true?  (Choose two.)',
      choices: {
        A: 'You can have multiple primary resources in a simple routing policy.',
        B: 'A weighted routing policy uses weights for routing, but not health checks.',
        C: 'You can have multiple secondary resources in a simple routing policy.',
        D: 'Health checks are ignored if a resource has a weight of over 100 in a routing policy.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q151
    {
      question: 'You are responsible for a media-serving website backed by a database that has a global user  base. The fleet of EC2 instances serving the website is responding well to requests from the  US, but requests from the EU are taking nearly five times as long to receive a response. Data - base CPU utilization stays between 70% and 90% throughout the day. What suggestions  would you make to attempt to improve performance of this website? (Choose two.)',
      choices: {
        A: 'Install ElastiCache in front of the RDS instance to cache common queries and reduce  database reads and therefore overall load.',
        B: 'Set up CloudFront to enable caching of data at edge locations closer to the EU user base.',
        C: 'Set up an Auto Scaling group with low CPU thresholds to scale up the EC2 instances.',
        D: 'Create additional EC2 instances that will serve the website, and locate them in a  South Asia region.80   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'A', 'B' ]
    },
    // Q152
    {
      question: 'Which of the following are not valid instance types? (Choose two.)',
      choices: {
        A: 'T3',
        B: 'E1',
        C: 'M5',
        D: 'Q2'
      },
      answer: [ 'B', 'D' ]
    },
    // Q153
    {
      question: 'What is the primary purpose of IAM?',
      choices: {
        A: 'Deployment of applications',
        B: 'Management of permissions in AWS',
        C: 'User authentication for applications',
        D: 'Configuration of applications'
      },
      answer: 'B'
    },
    // Q154
    {
      question: 'Which of the following statements about IAM are accurate? (Choose two.)',
      choices: {
        A: 'IAM manages access from one AWS resource to another.',
        B: 'IAM manages the authentication interface for the AWS console.',
        C: 'IAM manages access from a user to the AWS console.',
        D: 'IAM manages single sign-on for users to AWS applications.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q155
    {
      question: 'What does IAM stand for?',
      choices: {
        A: 'Improved Access Management',
        B: 'Identity and Access Management',
        C: 'Information and Access Management',
        D: 'Identity and Authorization Management'
      },
      answer: 'B'
    },
    // Q156
    {
      question: 'Which of the following does IAM manage? (Choose two.)',
      choices: {
        A: 'Management of users accessing the AWS platform',
        B: 'Management of permissions for hosted application features',
        C: 'Management of roles affecting resources within AWS',
        D: 'Management of cost controls for user actions'
      },
      answer: [ 'A', 'C' ]
    },
    // Q157
    {
      question: 'Which of these is not managed by IAM? (Choose two.)',
      choices: {
        A: 'Groups of users that share permissions in AWS',
        B: 'Groups of users that can log in to a hosted web application',
        C: 'Which resources receive notifications from SNS',
        D: 'A role that allows EC2 instances to access S3 buckets'
      },
      answer: [ 'B', 'C' ]
    },
    // Q158
    {
      question: 'Which of the following is not a feature of IAM?',
      choices: {
        A: 'Multi-Factor Authentication for AWS console access',
        B: 'Multi-Factor Authentication for object deletion in S3',
        C: 'Centralized control of AWS resource access',
        D: 'Integration with Active Directory accountsReview Questions   81'
      },
      answer: 'B'
    },
    // Q159
    {
      question: 'Which of the following is a security risk as you grow your AWS developer base?',
      choices: {
        A: 'Turning on MFA for AWS console access',
        B: 'Using a single developer account across your team',
        C: 'Creating an account for each developer',
        D: 'Requiring passwords with 12 or more characters'
      },
      answer: 'B'
    },
    // Q160
    {
      question: 'Which of the following is required when you create additional IAM users beyond the root  user?',
      choices: {
        A: 'Turning on MFA for all accounts',
        B: 'Turning on MFA for the root account',
        C: 'Creating a customized sign-in link for users in addition to the AWS root account sign- in link',
        D: 'Creating IAM groups for each new user'
      },
      answer: 'C'
    },
    // Q161
    {
      question: 'Which of the following are components of IAM? (Choose two.)',
      choices: {
        A: 'Users',
        B: 'Groups',
        C: 'Organizations',
        D: 'Organizational units'
      },
      answer: [ 'A', 'B' ]
    },
    // Q162
    {
      question: 'Which of the following are components of IAM? (Choose two.)',
      choices: {
        A: 'Roles',
        B: 'User policies',
        C: 'Connections',
        D: 'Permissions'
      },
      answer: [ 'A', 'D' ]
    },
    // Q163
    {
      question: 'You are tasked with ensuring that a fleet of EC2 instances can retrieve data from S3 buck- ets. Which of the following might you need to create? (Choose two.)',
      choices: {
        A: 'Role',
        B: 'User',
        C: 'Policy',
        D: 'Group'
      },
      answer: [ 'A', 'C' ]
    },
    // Q164
    {
      question: 'Which types of access can you give a user via IAM? (Choose two.)',
      choices: {
        A: 'Console',
        B: 'Application',
        C: 'Organizational',
        D: 'Programmatic82   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q165
    {
      question: 'Which of the following are valid AWS and IAM policy types? (Choose two.)',
      choices: {
        A: 'Access control lists',
        B: 'Application-based',
        C: 'Resource-based',
        D: 'Permission-based'
      },
      answer: [ 'A', 'C' ]
    },
    // Q166
    {
      question: 'In what language do you write IAM policies?',
      choices: {
        A: 'YA ML',
        B: 'JSON',
        C: 'PHP',
        D: 'ACSCII'
      },
      answer: 'B'
    },
    // Q167
    {
      question: 'To which of the following can an IAM policy be attached? (Choose two.)',
      choices: {
        A: 'Users',
        B: 'Database entries',
        C: 'Groups',
        D: 'Passwords'
      },
      answer: [ 'A', 'C' ]
    },
    // Q168
    {
      question: 'What does MFA stand for?',
      choices: {
        A: 'Multi-Fraction Authentication',
        B: 'Multi-Factor Authentication',
        C: 'Multi-Factor Authorization',
        D: 'Multi-Fraction Authorization'
      },
      answer: 'B'
    },
    // Q169
    {
      question: 'How does IAM provide scalability benefits to your application deployments?   (Choose two.)',
      choices: {
        A: 'It allows assignment of permissions to users en masse via groups.',
        B: 'It handles allowing users access to hosted applications en masse.',
        C: 'It allows consistency in access from instances to managed AWS services across large  numbers of instances.',
        D: 'It ensures that users do not accidentally delete objects from S3 stores.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q170
    {
      question: 'Which of the following provide centralized user management across your AWS resources?  (Choose two.)',
      choices: {
        A: 'KMS',
        B: 'S3 SSE-C',
        C: 'IAM',
        D: 'AWS OrganizationsReview Questions   83'
      },
      answer: [ 'C', 'D' ]
    },
    // Q171
    {
      question: 'What is power user access, as it relates to IAM roles?',
      choices: {
        A: 'The AWS name for the root user',
        B: 'All IAM users are considered power users.',
        C: 'A type of user that has full access to all AWS services and resources but not group or  user management',
        D: 'A user that can access application deployment profiles'
      },
      answer: 'C'
    },
    // Q172
    {
      question: 'Which of the following can the root user not do?',
      choices: {
        A: 'Create users.',
        B: 'Remove user access to the console.',
        C: 'Delete a role.',
        D: 'The root user can do all of these.'
      },
      answer: 'D'
    },
    // Q173
    {
      question: 'Which of the following can a power user not do?',
      choices: {
        A: 'Create users.',
        B: 'Create a new SNS topic.',
        C: 'Stop a running EC2 instance created by another user.',
        D: 'The power user can do all of these.'
      },
      answer: 'A'
    },
    // Q174
    {
      question: 'Which of the following is a best practice for handling root user access keys?',
      choices: {
        A: 'Store them only in an instances-protected  .aws/  directory.',
        B: 'Delete them and instead use different user IAM credentials.',
        C: 'Only use them for API access but avoid console access.',
        D: 'Enable MFA Delete for when they are used in association with S3.'
      },
      answer: 'B'
    },
    // Q175
    {
      question: 'Which of the following require root user credentials? (Choose two.)',
      choices: {
        A: 'Close an AWS account.',
        B: 'Delete IAM users.',
        C: 'Create a CloudFront key pair.',
        D: 'Create an IAM policy.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q176
    {
      question: 'Which of the following do not require root user credentials? (Choose two.)',
      choices: {
        A: 'Resizing an existing RDS instance',
        B: 'Deploying an application via a CloudFormation template',
        C: 'Restoring revoked permissions for a user',
        D: 'Changing support options for an AWS account'
      },
      answer: [ 'A', 'B' ]
    },
    // Q177
    {
      question: 'How do you remove the AWS account root user’s access to your application EC2 instances?',
      choices: {
        A: 'Delete all the keys in the instance’s  .aws/  directory.',
        B: 'Switch the instance to only accept SSH logins.',
        C: 'Remove any keys from the instance’s  .ssh/  directory.',
        D: 'You can’t remove access for an AWS account root user.84   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'D'
    },
    // Q178
    {
      question: 'In a typical single-account AWS environment, which group of users should have root-level  account access?',
      choices: {
        A: 'Developers and managers',
        B: 'Account auditors and developers',
        C: '2 to 3 developers or engineers responsible for account management',
        D: 'Nobody'
      },
      answer: 'C'
    },
    // Q179
    {
      question: 'Which of the following is not a predefined AWS IAM policy?',
      choices: {
        A: 'Administrator',
        B: 'Power User',
        C: 'Billing',
        D: 'These are all predefined policies in IAM.'
      },
      answer: 'D'
    },
    // Q180
    {
      question: 'You want to set your DevOps team up quickly in IAM. You have created users for each  member of the team. What additional steps should you take? (Choose two.)',
      choices: {
        A: 'Create sign-in URLs for the users.',
        B: 'Check the DevOps option for each user in the console.',
        C: 'Attach the Developer Power User policy to each user.',
        D: 'Attach the View-Only User policy to each user.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q181
    {
      question: 'Which of the following policies would be the best fit for a manager who wants access to  the company’s main AWS account?',
      choices: {
        A: 'Administrator',
        B: 'Power User',
        C: 'Security Auditor',
        D: 'View-Only User'
      },
      answer: 'D'
    },
    // Q182
    {
      question: 'Which of the following policies would be the best fit for a team member running Hadoop  jobs and queries to determine application usage patterns?',
      choices: {
        A: 'Administrator',
        B: 'Power User',
        C: 'Security Auditor',
        D: 'Data Scientist'
      },
      answer: 'D'
    },
    // Q183
    {
      question: 'Which of the following policies would be the best fit for a team member responsible for  setting up resources for the development team, working with AWS directory service, and  potentially setting up DNS entries?',
      choices: {
        A: 'System Administrator',
        B: 'Power User',
        C: 'Security Auditor',
        D: 'Data ScientistReview Questions   85'
      },
      answer: 'A'
    },
    // Q184
    {
      question: 'Which of the following are not possible to do with IAM policies and permissions?  (Choose two.)',
      choices: {
        A: 'Remove access for a user from EC2 instances.',
        B: 'Remove access for the root user from EC2 instances.',
        C: 'Give the root user access to a hosted web application.',
        D: 'Add an additional user with access to all EC2 instances.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q185
    {
      question: 'What does logging out of the AWS console and then logging back in accomplish?',
      choices: {
        A: 'Applies any IAM policies attached to the user since their last login',
        B: 'Applies any IAM policies attached to groups that the user was added to since their  last login',
        C: 'Applies any updates to IAM policies via JSON or the AWS REST API that have been  made since the user’s last login',
        D: 'Nothing, all changes to an account are immediate and do not require logging in or  back out.'
      },
      answer: 'D'
    },
    // Q186
    {
      question: 'You have created a new user for a new developer at your company. What permissions will  this user have before you take any additional actions?',
      choices: {
        A: 'They will not have any access to any AWS services.',
        B: 'They will have read-only access to all AWS services.',
        C: 'They will have administrator-level access to all AWS services.',
        D: 'They will have the same permissions as the root user until restricted.'
      },
      answer: 'A'
    },
    // Q187
    {
      question: 'You have created a new user for a new developer at your company. What steps do you  need to take to ensure they can work with EC2 instances? (Choose two.)',
      choices: {
        A: 'Set the user up as part of the AWS-defined EC2 Users group.',
        B: 'Set the user up as a Developer user in the AWS console.',
        C: 'Provide the user with a URL for signing in.',
        D: 'Add the user to a group such as Administrators or power users.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q188
    {
      question: 'How can you ensure that the new users you have created only can access AWS via the API  rather than through the console? (Choose two.)',
      choices: {
        A: 'Do not create a sign-in URL for the users.',
        B: 'Only provide the users with an access key ID and secret access key.',
        C: 'Uncheck the Log In To Console box next to the user in the AWS console.',
        D: 'Turn off MFA for the user.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q189
    {
      question: 'To what degree do usernames have to be unique across AWS?',
      choices: {
        A: 'Across the region in which the user exists',
        B: 'Across all AWS accounts',
        C: 'Across the AWS account in which the user exists',
        D: 'Usernames don’t have to be unique, but email addresses do.86   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'C'
    },
    // Q190
    {
      question: 'Which of the following does a user need in order to access AWS resources programmati- cally? (Choose two.)',
      choices: {
        A: 'Username',
        B: 'Access key ID',
        C: 'Password',
        D: 'Secret access key pair'
      },
      answer: [ 'B', 'D' ]
    },
    // Q191
    {
      question: 'Which of the following does a user need in order to access the AWS console?   (Choose two.)',
      choices: {
        A: 'Username',
        B: 'Access key ID',
        C: 'Password',
        D: 'Secret access key pair'
      },
      answer: [ 'A', 'C' ]
    },
    // Q192
    {
      question: 'In what language are policy documents written?',
      choices: {
        A: 'JavaScript',
        B: 'JSON',
        C: 'Node.js',
        D: 'Ruby'
      },
      answer: 'B'
    },
    // Q193
    {
      question: 'Which of the following would apply to giving federated users access to the AWS console  via single sign-on?',
      choices: {
        A: 'SAML',
        B: 'JSON',
        C: 'SSO',
        D: 'IAM'
      },
      answer: 'A'
    },
    // Q194
    {
      question: 'You have a large user base in an Active Directory and want to give these users access  to the AWS console without creating individual users in AWS for each. What approach  would you take?',
      choices: {
        A: 'Set the AWS console to use the Read Users From Another Authentication Source   feature.',
        B: 'Use the database migration tool to migrate the Active Directory database into RDS.',
        C: 'Set up AWS to federate the users from the Active Directory into AWS.',
        D: 'You cannot use a non-AWS Active Directory for access to AWS.'
      },
      answer: 'C'
    },
    // Q195
    {
      question: 'Which of the following is a collection of permissions?',
      choices: {
        A: 'Group',
        B: 'Role',
        C: 'Topic',
        D: 'PolicyReview Questions   87'
      },
      answer: 'D'
    },
    // Q196
    {
      question: 'You want to add a small group of developers located in a different region than your main  development office. How would you handle scaling out users and permissions to this new  region?',
      choices: {
        A: 'Create the new users in the second region.',
        B: 'Create the new users in the primary region and then replicate them to the new region.',
        C: 'Create the new users in the primary region, set up IAM replication, and then apply  correct permissions to the replicated users in the new region.',
        D: 'Create the new users and they will apply to all regions.'
      },
      answer: 'D'
    },
    // Q197
    {
      question: 'What considerations do you need to take to ensure that your policy documents will scale  across your entire organization and set of AWS resources?',
      choices: {
        A: 'Make sure each policy has a name unique within the region to which it applies.',
        B: 'Make sure each policy document has the  region: *  attribute so it applies to all  regions.',
        C: 'Nothing, policy documents are automatically applicable across all AWS resources  within an account.',
        D: 'When you create the policy document, ensure that you select the Avoid Regional  Conflicts option.'
      },
      answer: 'C'
    },
    // Q198
    {
      question: 'Which of the following does Auto Scaling address? (Choose two.)',
      choices: {
        A: 'Application monitoring',
        B: 'Capacity management',
        C: 'Cost limiting',
        D: 'Permissions management'
      },
      answer: [ 'A', 'B' ]
    },
    // Q199
    {
      question: 'Which of the following are benefits of Auto Scaling? (Choose two.)',
      choices: {
        A: 'Pay for only what you need.',
        B: 'Improve network performance.',
        C: 'Set up scaling quickly.',
        D: 'Reduce VPC management overhead.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q200
    {
      question: 'Which of the following can be scaled using the Auto Scaling interface? (Choose two.)',
      choices: {
        A: 'DynamoDB',
        B: 'Route 53 domains',
        C: 'Aurora read replicas',
        D: 'ALBs'
      },
      answer: [ 'A', 'C' ]
    },
    // Q201
    {
      question: 'Which of the following can be scaled using the Auto Scaling interface? (Choose two.)',
      choices: {
        A: 'ECS containers',
        B: 'SNS topics',
        C: 'Redshift',
        D: 'EC2 instances88   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q202
    {
      question: 'What does AWS call a collection of components that can grow or shrink to meet user  demand?',
      choices: {
        A: 'Auto Scaling policy',
        B: 'Launch configuration',
        C: 'Auto Scaling group',
        D: 'Capacity group'
      },
      answer: 'C'
    },
    // Q203
    {
      question: 'Which of the following can you not specify in an Auto Scaling group? (Choose two.)',
      choices: {
        A: 'Minimum size',
        B: 'Instances to add',
        C: 'Desired capacity',
        D: 'Desired cost'
      },
      answer: [ 'B', 'D' ]
    },
    // Q204
    {
      question: 'Which of the following can you specify in an Auto Scaling group? (Choose two.)',
      choices: {
        A: 'Maximum size',
        B: 'Scaling policy',
        C: 'Minimum processing threshold',
        D: 'Memory allocation'
      },
      answer: [ 'A', 'B' ]
    },
    // Q205
    {
      question: 'Which of the following are part of an Auto Scaling launch configuration? (Choose two.)',
      choices: {
        A: 'Application language',
        B: 'AMI ID',
        C: 'Security group',
        D: 'API endpoint'
      },
      answer: [ 'B', 'C' ]
    },
    // Q206
    {
      question: 'Which of the following are not part of an Auto Scaling launch configuration? (Choose two.)',
      choices: {
        A: 'Instance type',
        B: 'Maximum memory utilization',
        C: 'Cluster size',
        D: 'Security group'
      },
      answer: [ 'B', 'C' ]
    },
    // Q207
    {
      question: 'Which of the following are valid scaling options for an Auto Scaling group? (Choose two.)',
      choices: {
        A: 'Manual scaling',
        B: 'Memory-based scaling',
        C: 'Schedule-based scaling',
        D: 'Security-based scaling'
      },
      answer: [ 'A', 'C' ]
    },
    // Q208
    {
      question: 'Which of the following are valid scaling options for an Auto Scaling group? (Choose two.)',
      choices: {
        A: 'Demand-based scaling',
        B: 'Instance-based scaling',
        C: 'Resource-based scaling',
        D: 'Maintain current instance levelsReview Questions   89'
      },
      answer: [ 'A', 'D' ]
    },
    // Q209
    {
      question: 'Which Auto Scaling policy would you use to ensure that a specific number of instances is  running at all times?',
      choices: {
        A: 'Demand-based scaling',
        B: 'Instance-based scaling',
        C: 'Resource-based scaling',
        D: 'Maintain current instance levels'
      },
      answer: 'D'
    },
    // Q210
    {
      question: 'Which Auto Scaling policy would you use to add and remove instances based on CPU   utilization?',
      choices: {
        A: 'Demand-based scaling',
        B: 'Schedule-based scaling',
        C: 'Resource-based scaling',
        D: 'Maintain current instance levels'
      },
      answer: 'A'
    },
    // Q211
    {
      question: 'Which Auto Scaling policy would you use to add and remove instances at a certain time of  day when usage is regularly high?',
      choices: {
        A: 'Demand-based scaling',
        B: 'Schedule-based scaling',
        C: 'Resource-based scaling',
        D: 'Maintain current instance levels'
      },
      answer: 'B'
    },
    // Q212
    {
      question: 'Which Auto Scaling policy would you use to control scaling yourself, within a specified  maximum and minimum number of instances?',
      choices: {
        A: 'Demand-based scaling',
        B: 'Schedule-based scaling',
        C: 'Manual-based scaling',
        D: 'Maintain current instance levels'
      },
      answer: 'C'
    },
    // Q213
    {
      question: 'Which of these would you supply for a manual Auto Scaling policy?',
      choices: {
        A: 'Desired capacity',
        B: 'Time to scale up',
        C: 'Maximum CPU utilization',
        D: 'Scaling condition'
      },
      answer: 'A'
    },
    // Q214
    {
      question: 'Which of the following can be used to trigger scaling up or down for an Auto Scaling  group? (Choose two.)',
      choices: {
        A: 'CloudWatch',
        B: 'SNS',
        C: 'The AWS console',
        D: 'Route 5390   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: [ 'A', 'C' ]
    },
    // Q215
    {
      question: 'You have an Auto Scaling group with an instance that you believe is passing its health  checks but is not responding properly to requests. What is the best approach to trouble- shoot this instance?',
      choices: {
        A: 'Restart the instance.',
        B: 'Remove the instance from the Auto Scaling group and then trouble shoot it.',
        C: 'Put the instance into the Standby state and troubleshoot it normally.',
        D: 'Add a CloudWatch metric to the instance to trigger Auto Scaling.'
      },
      answer: 'C'
    },
    // Q216
    {
      question: 'Which of the following are valid instance states for instances in an Auto Scaling group?  (Choose two.)',
      choices: {
        A: 'Deleted',
        B: 'ReadyForService',
        C: 'InService',
        D: 'Standby'
      },
      answer: [ 'C', 'D' ]
    },
    // Q217
    {
      question: 'What is the correct order of tasks to create an Auto Scaling group?',
      choices: {
        A: 'Verify your group, create an Auto Scaling group, create a launch configuration.',
        B: 'Create a launch configuration, create an Auto Scaling group, verify your group.',
        C: 'Create an Auto Scaling group, create a launch configuration, verify your group.',
        D: 'Create a launch configuration, verify your group, create an Auto Scaling group.'
      },
      answer: 'B'
    },
    // Q218
    {
      question: 'How many AMIs can you use within a single Auto Scaling group launch configuration?',
      choices: {
        A: 'None, you do not specify an AMI for a launch configuration.',
        B: 'One for all instances within the group',
        C: 'One for each instance in the group',
        D: 'One for each class of instance in the group'
      },
      answer: 'B'
    },
    // Q219
    {
      question: 'How many security groups can you use within a single Auto Scaling group launch   configuration?',
      choices: {
        A: 'None, you do not specify a security group for a launch configuration.',
        B: 'One security group for all instances within the group',
        C: 'One security group for incoming requests and 1 security group for all outgoing  requests',
        D: 'As many as you like'
      },
      answer: 'D'
    },
    // Q220
    {
      question: 'From which of the following can you create an Auto Scaling group?',
      choices: {
        A: 'An EC2 instance',
        B: 'A launch configuration',
        C: 'A launch template',
        D: 'Any of theseReview Questions   91'
      },
      answer: 'D'
    },
    // Q221
    {
      question: 'You have an EC2 instance running a web application. You’ve lately seen large increases  in traffic and the application is responding slowly several times a day. What are the best  steps to take to ensure consistent performance? (Choose two.)',
      choices: {
        A: 'Create a launch configuration with an AMI ID and instance parameters.',
        B: 'Create an Auto Scaling group from the current EC2 instance.',
        C: 'Set up an Auto Scaling group with demand-based scaling.',
        D: 'Set up an Auto Scaling group with manual scaling.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q222
    {
      question: 'You have an application that is peaking daily. You have determined that a large user base  on the East Coast is accessing the application every evening, causing the application’s per- formance to degrade during those hours. What steps would you take to level out perfor- mance? (Choose two.)',
      choices: {
        A: 'Create an Auto Scaling group with schedule-based scaling.',
        B: 'Consider hosting your Auto Scaling group in a US East region.',
        C: 'Implement CloudFront to cache responses to user requests.',
        D: 'Set up an Auto Scaling group with manual scaling.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q223
    {
      question: 'You are in charge of the backup processes for converting an in-house network storage sys- tem to S3 on AWS. You want to minimize the costs of cloud storage but preserve the low- est possible latency for requests to the cloud-hosted files. What storage class would you  suggest?',
      choices: {
        A: 'S3 standard',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'Glacier'
      },
      answer: 'C'
    },
    // Q224
    {
      question: 'Which of the following will take the longest to retrieve data from?',
      choices: {
        A: 'S3 standard',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'Glacier'
      },
      answer: 'D'
    },
    // Q225
    {
      question: 'Which of the following will take the longest to retrieve data from?',
      choices: {
        A: 'S3 standard.',
        B: 'S3-IA.',
        C: 'S3 One Zone-IA.',
        D: 'They are all equal.92   Chapter 2   ■   Domain 2: Define Performant Architectures'
      },
      answer: 'D'
    },
    // Q226
    {
      question: 'You are in charge of a CPU-intensive application that has been refactored to perform the  most compute-heavy portions of processing separate from normal daily operations. These  compute-heavy tasks must finish every month but can be stopped and started without  affecting the overall progress of the job. You want to reduce costs associated with this  processing; which instance pricing model would you suggest?',
      choices: {
        A: 'Reserved instances',
        B: 'On-demand instances',
        C: 'Dedicated hardware instances',
        D: 'Spot instances'
      },
      answer: 'D'
    }];