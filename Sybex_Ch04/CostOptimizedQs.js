const myQuestions = [
    // Q1
    {
      question: 'You have a data analysis application that uses high compute instances along with RDS  to do biological analysis on large datasets. The computations are not time sensitive and  can be run anytime throughout the day. However, because of the high compute resources  required, the processing is quite expensive. What could you do to defray these costs?  (Choose two.)',
      choices: {
        A: 'Purchase reserved instances and pay entirely up front for the instance usage charges.',
        B: 'Use the spot market, setting a bid price lower than the current on-demand pricing.',
        C: 'Lower the instance class to a less costly class and allow the processing to run longer  at lower per-instance costs.',
        D: 'Contact AWS and ask for discounted instance pricing based on your recurring usage.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q2
    {
      question: 'Which of the following are valid payment options for reserved instances? (Choose two.)',
      choices: {
        A: 'Actual usage pricing',
        B: 'Predictive pricing',
        C: 'All up-front pricing',
        D: 'Nothing up-front pricing'
      },
      answer: [ 'C', 'D' ]
    },
    // Q3
    {
      question: 'How do you move a reserved instance from one region to another?',
      choices: {
        A: 'Shut the instance down, change its region via the console or CLI, and restart the  instance.',
        B: 'Contact your AWS billing resource to manually move the instance and its associated  billing.',
        C: 'Make a snapshot of the instance, copy the snapshot to the new region, and start the  instance from the snapshot.',
        D: 'You cannot move reserved instances across regions.'
      },
      answer: 'D'
    },
    // Q4
    {
      question: 'Which of the following allows you the least expensive access to compute resources?',
      choices: {
        A: 'On-demand instances',
        B: 'Reserved instances',
        C: 'Spot instances',
        D: 'Dedicated hosts'
      },
      answer: 'C'
    },
    // Q5
    {
      question: 'Which of the following are not reasons to select an on-demand instance? (Choose two.)',
      choices: {
        A: 'Applications with short-term, spiky workloads',
        B: 'Applications that have flexible start and end times',
        C: 'Applications with steady-state usage',
        D: 'Applications being developed or tested on EC2 for the first timeReview Questions   137'
      },
      answer: [ 'B', 'C' ]
    },
    // Q6
    {
      question: 'Which of the following are reasons to select a spot instance? (Choose two.)',
      choices: {
        A: 'Applications with short-term, spiky workloads',
        B: 'Applications that have flexible start and end times',
        C: 'Applications with steady-state usage',
        D: 'Applications that are only feasible at very low compute prices'
      },
      answer: [ 'B', 'D' ]
    },
    // Q7
    {
      question: 'Which of the following are not reasons to select a reserved instance? (Choose two.)',
      choices: {
        A: 'Applications that may require reserved capacity',
        B: 'Applications with steady-state usage',
        C: 'Users with urgent computing needs for large amounts of additional capacity',
        D: 'Users that cannot make any up-front payment or long-term commitment'
      },
      answer: [ 'C', 'D' ]
    },
    // Q8
    {
      question: 'Which of the following are reasons to select the S3 standard storage class? (Choose two.)',
      choices: {
        A: 'Need for high durability',
        B: 'Need for highest available throughput',
        C: 'Infrequent access of objects',
        D: 'Objects can easily be re-created if lost.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q9
    {
      question: 'You are the architect for a web application that exists on a cluster of EC2 instances all  within an Auto Scaling group. During periods of high activity, the group scales up—  adding instances—and then quickly scales back down. However, this occurs multiple  times within a two-hour window, incurring significant costs. How could you reduce costs  while ensuring that demand is still met? (Choose two.)',
      choices: {
        A: 'Modify the Auto Scaling group’s cool-down timers.',
        B: 'Modify the Auto Scaling group to use scheduled scaling.',
        C: 'Lower the CloudWatch alarm threshold that causes the Auto Scaling group to scale up.',
        D: 'Modify the CloudWatch alarm period that causes the Auto Scaling group to scale down.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q10
    {
      question: 'Your company needs a storage solution that can support millions of customers accessing  billing data. The data should be instantly accessible for users, but individual bills are not  accessed that often. What is the most cost-efficient storage for this use case?',
      choices: {
        A: 'Glacier with expedited retrieval',
        B: 'S3 with Transfer Acceleration',
        C: 'Standard S3',
        D: 'S3-IA'
      },
      answer: 'D'
    },
    // Q11
    {
      question: 'Is the S3-IA storage class less expensive than S3?',
      choices: {
        A: 'Ye s',
        B: 'No',
        C: 'Their costs are identical.',
        D: 'It depends on how the storage class is used.138   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: 'A'
    },
    // Q12
    {
      question: 'You have a website running on a fleet of EC2 instances behind an ELB. You also have an  Auto Scaling group running across multiple availability zones. The instances are serving  files from an EFS file system, but you are incurring lag and significant cost from serving  these files from disk over and over. What would you recommend as a solution for reducing  costs while still handling high traffic without degradation?',
      choices: {
        A: 'Move the files into S3 standard.',
        B: 'Use Elastic Transcoder to reduce the file sizes.',
        C: 'Cache the files using CloudFront.',
        D: 'Use reserved EC2 instances instead of on-demand instances.'
      },
      answer: 'C'
    },
    // Q13
    {
      question: 'You have a large archive of documents that must be backed up. The documents will be  accessed very infrequently, if at all. However, when the documents are accessed, they  must be delivered within 10 minutes of a retrieval request. What is the most cost-effective  option for storing these documents?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'Glacier',
        D: 'Glacier with expedited retrieval'
      },
      answer: 'D'
    },
    // Q14
    {
      question: 'Your application has a 200 GB database running on an EC2 instance. You cannot move  the database to RDS because of a custom spatial plug-in. The application is currently  peaking in the morning and the evening, but the peaks are small and usage throughout  the day is minimal. You need to ensure solid performance but keep costs low. What stor- age type would you use?',
      choices: {
        A: 'EFS',
        B: 'EBS with a General Purpose SSD',
        C: 'EBS with a provisioned IOPS SSD',
        D: 'EBS with a magnetic HDD'
      },
      answer: 'B'
    },
    // Q15
    {
      question: 'Which EBS volume type is most appropriate for use with a large database workload?',
      choices: {
        A: 'EBS with a throughput optimized HDD',
        B: 'EBS with a General Purpose SSD',
        C: 'EBS with a provisioned IOPS SSD',
        D: 'EBS with a magnetic HDD'
      },
      answer: 'C'
    },
    // Q16
    {
      question: 'Which of the following is the least expensive EBS volume type?',
      choices: {
        A: 'Throughput optimized HDD',
        B: 'General Purpose SSD',
        C: 'Provisioned IOPS SSD',
        D: 'Cold HDDReview Questions   139'
      },
      answer: 'D'
    },
    // Q17
    {
      question: 'Your application currently stores all its data on EBS volumes. You want to ensure that  these volumes are backed up durably. However, you also want to use as few different   managed services as possible in order to keep backup costs low. What option would you  recommend?',
      choices: {
        A: 'Take regular EBS snapshots manually.',
        B: 'Set up a Lambda function to take EBS snapshots and trigger the function through  CloudWatch alarms.',
        C: 'Create a script to copy the EBS data to S3 and run it on an EC2 instance.',
        D: 'Mirror data across two EBS volumes.'
      },
      answer: 'A'
    },
    // Q18
    {
      question: 'You are the architect for a highly available and highly scalable accounting application.  All transaction records in the application’s data stores must be available for immediate  retrieval for three months, but then they should be purged to reduce storage costs. How  can you most easily address this requirement?',
      choices: {
        A: 'Store the transaction records on EBS and delete the volume after three months.',
        B: 'Store the transaction records in S3 and use lifecycle management to delete the records  after three months.',
        C: 'Store the transaction records in Glacier and use lifecycle management to delete the  records after three months.',
        D: 'Store the transaction records in EBS and use lifecycle management to delete the  records after three months.'
      },
      answer: 'B'
    },
    // Q19
    {
      question: 'You have heavy load on an RDS data instance. You want to avoid the overhead and cost  of upgrading the instance to a larger instance size. What other options should you con- sider? (Choose two.)',
      choices: {
        A: 'RDS read replicas',
        B: 'RDS Multi-AZ',
        C: 'ElastiCache',
        D: 'Kinesis'
      },
      answer: [ 'A', 'C' ]
    },
    // Q20
    {
      question: 'You are in charge of storage for large datasets at a predictive analytics firm. You are  tasked with minimizing storage costs. You need to store data 30–59 days old in a storage  class that makes the data immediately available and data older than 60 days in a class  that makes the data available within 10 hours. You want to use the least expensive classes  available. Which two storage classes would you choose? (Choose two.)',
      choices: {
        A: 'S3 standard',
        B: 'S3 Infrequent Access',
        C: 'S3 RRS',
        D: 'Glacier140   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: [ 'B', 'D' ]
    },
    // Q21
    {
      question: 'You want to optimize performance and cost of your application by creating a placement  group rather than hosting separate copies of your application in multiple availability  zones. Across how many availability zones can a placement group span?',
      choices: {
        A: 'One',
        B: 'One or more',
        C: 'Two or more',
        D: 'Placement groups are not in availability zones.'
      },
      answer: 'B'
    },
    // Q22
    {
      question: 'Across how many availability zones can a spread placement group be stretched?',
      choices: {
        A: 'One',
        B: 'One or more',
        C: 'Two or more',
        D: 'Placement groups are not in availability zones.'
      },
      answer: 'B'
    },
    // Q23
    {
      question: 'How many instances can run in a single availability zone for a spread placement group?',
      choices: {
        A: 'One',
        B: 'Five',
        C: 'Seven',
        D: 'Nine'
      },
      answer: 'C'
    },
    // Q24
    {
      question: 'Which of the following are advantages of a spread placement group over using non- grouped instances? (Choose two.)',
      choices: {
        A: 'A spread placement group can span peered VPCs in the same region.',
        B: 'A spread placement group is less expensive than the same number of on-demand  instances not in a group.',
        C: 'A spread placement group allows instances to talk with negligible network lag.',
        D: 'A spread placement group reduces IO in an instance within that group.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q25
    {
      question: 'Which of the following statements about placement groups is false?',
      choices: {
        A: 'A spread placement group can span peered VPCs in the same region.',
        B: 'A clustered placement group has instances all in a single availability zone.',
        C: 'A spread placement group allows instances to talk across regions without network lag.',
        D: 'A clustered placement group involves fewer availability zones than a spread placement  group.'
      },
      answer: 'C'
    },
    // Q26
    {
      question: 'Which of the following actions incur costs within AWS? (Choose two.)',
      choices: {
        A: 'Data ingress from the Internet',
        B: 'Data egress to the Internet',
        C: 'Transferring data across regions',
        D: 'Transferring data from one instance to another within the same availability zoneReview Questions   141'
      },
      answer: [ 'B', 'C' ]
    },
    // Q27
    {
      question: 'Which of the following costs the least?',
      choices: {
        A: 'Retrieving a file from S3 to a local desktop client',
        B: 'An instance retrieving data from S3 in the same region',
        C: 'Uploading a file to S3 from a local desktop client',
        D: 'An instance retrieving data from S3 in a different region'
      },
      answer: 'C'
    },
    // Q28
    {
      question: 'Which of the following costs the least?',
      choices: {
        A: 'Retrieving a file from S3 to a local desktop client',
        B: 'An instance retrieving data from another instance in the same availability zone',
        C: 'An instance storing data in S3 in a different region',
        D: 'An instance retrieving data from S3 in a different region'
      },
      answer: 'B'
    },
    // Q29
    {
      question: 'Which of the following might help reduce data transfer costs? (Choose two.)',
      choices: {
        A: 'Set up CloudFront to cache content.',
        B: 'Ensure that any instances communicating with other instances in the same region  have private IP addresses.',
        C: 'Set up an RDS instance with read replicas.',
        D: 'Set up S3 buckets with versioning.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q30
    {
      question: 'Which of the following is not a level of AWS support?',
      choices: {
        A: 'Developer',
        B: 'Free tier',
        C: 'Enterprise',
        D: 'Business'
      },
      answer: 'B'
    },
    // Q31
    {
      question: 'Which of the following is reduced as part of AWS’s total cost of ownership approach?',
      choices: {
        A: 'Developer salaries',
        B: 'DevOps salaries',
        C: 'Capital expenditures',
        D: 'Organizational head count'
      },
      answer: 'C'
    },
    // Q32
    {
      question: 'Which of the following payment models does AWS employ to reduce total cost of ownership?',
      choices: {
        A: 'Pay up front',
        B: 'Pay-as-you-go',
        C: 'Pay after use',
        D: 'Quarterly pay'
      },
      answer: 'B'
    },
    // Q33
    {
      question: 'Which of the following is not a key tenet of the AWS pricing philosophy?',
      choices: {
        A: 'Pay-as-you-go',
        B: 'Pay less when you reserve.',
        C: 'Pay less per unit by using more.',
        D: 'Pay more only when AWS grows.142   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: 'D'
    },
    // Q34
    {
      question: 'Which of the following is not a pricing model for instances?',
      choices: {
        A: 'On demand',
        B: 'Reserved',
        C: 'Migration only',
        D: 'Spot instance'
      },
      answer: 'C'
    },
    // Q35
    {
      question: 'When calculating total cost of ownership, what instance pricing model does AWS suggest  using?',
      choices: {
        A: 'On demand',
        B: 'Reserved',
        C: 'Dedicated hardware',
        D: 'Spot instance'
      },
      answer: 'B'
    },
    // Q36
    {
      question: 'How does the cost of standard reserved instances compare with the cost of on-demand  instances?',
      choices: {
        A: 'Standard reserved instances cost significantly less than on-demand instances.',
        B: 'Standard reserved instances cost about the same as on-demand instances.',
        C: 'Standard reserved instances cost significantly more than on-demand instances.',
        D: 'Standard reserved instances cost a little bit less than on-demand instances.'
      },
      answer: 'A'
    },
    // Q37
    {
      question: 'Which of the following is not a valid payment option for reserved instances?',
      choices: {
        A: 'No upfront',
        B: 'Partial upfront',
        C: 'Half upfront',
        D: 'All upfront'
      },
      answer: 'C'
    },
    // Q38
    {
      question: 'Which of the following is the least expensive payment model for reserved instances?',
      choices: {
        A: 'No upfront',
        B: 'Partial upfront',
        C: 'All upfront',
        D: 'They are all the same.'
      },
      answer: 'C'
    },
    // Q39
    {
      question: 'Which of the following are valid terms for reserved instances? (Choose two.)',
      choices: {
        A: 'Six months',
        B: 'One year',
        C: 'Two ye a r s',
        D: 'Three years'
      },
      answer: [ 'B', 'D' ]
    },
    // Q40
    {
      question: 'Which of the following are valid pricing models for EC2 instances? (Choose two.)',
      choices: {
        A: 'Spot instances',
        B: 'Spot market',
        C: 'Dedicated hosts',
        D: 'All upfrontReview Questions   143'
      },
      answer: [ 'A', 'C' ]
    },
    // Q41
    {
      question: 'Which instance type is ideal for an application that has a flexible start and end time?',
      choices: {
        A: 'Spot instances',
        B: 'On-demand instances',
        C: 'Dedicated hosts',
        D: 'Reserved instances'
      },
      answer: 'A'
    },
    // Q42
    {
      question: 'Which instance type is ideal for an application that suffers numerous spikes in usage at  unpredictable times?',
      choices: {
        A: 'Spot instances',
        B: 'On-demand instances',
        C: 'Dedicated hosts',
        D: 'Reserved instances'
      },
      answer: 'B'
    },
    // Q43
    {
      question: 'Which instance type is ideal for an application that has a long-running compute job that  cannot be interrupted but also suffers from significant fluctuations in usage patterns?',
      choices: {
        A: 'Spot instances',
        B: 'On-demand instances',
        C: 'Dedicated hosts',
        D: 'Reserved instances'
      },
      answer: 'B'
    },
    // Q44
    {
      question: 'Which of the following are valid ways to purchase dedicated hosts? (Choose two.)',
      choices: {
        A: 'On-demand hourly',
        B: 'All upfront',
        C: 'On layaway',
        D: 'As a reservation'
      },
      answer: [ 'A', 'D' ]
    },
    // Q45
    {
      question: 'Which of the following are reasons to consider reserved instances? (Choose two.)',
      choices: {
        A: 'You are running an application that involves lots of short-running compute jobs.',
        B: 'You are running an application with steady-state usage.',
        C: 'Your business is guaranteed to need cloud compute for at least the next 18 months.',
        D: 'You are looking to minimize commitments to AWS.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q46
    {
      question: 'Which of the following is not a reason to consider spot instances?',
      choices: {
        A: 'Your applications have flexible start and end times.',
        B: 'Your applications can only run if compute costs are low because of CPU utilization.',
        C: 'You expect to have significant compute needs and potentially a need for lots of addi- tional capacity.',
        D: 'You expect usage to increase dramatically in the evenings and need to support that  usage.144   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: 'D'
    },
    // Q47
    {
      question: 'You have been brought in to introduce an organization to the cloud. They have several  applications ideal for cloud hosting but do not want to make any up-front commitments.  Further, they are concerned that the cloud will be “unreliable” so you need to ensure that  applications run smoothly. What instance types would you recommend?',
      choices: {
        A: 'Spot instances',
        B: 'On-demand instances',
        C: 'Dedicated hosts',
        D: 'Reserved instances'
      },
      answer: 'B'
    },
    // Q48
    {
      question: 'Which of the following are benefits to spot instances? (Choose two.)',
      choices: {
        A: 'Applications can be paused and later resumed.',
        B: 'Costs are reduced compared to on-demand pricing.',
        C: 'The same hardware will be used for the life of an application.',
        D: 'They can handle spikes in usage without issue.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q49
    {
      question: 'Which of the following offers the lowest pricing for storage (per GB)?',
      choices: {
        A: 'S3 standard',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'Amazon Glacier'
      },
      answer: 'D'
    },
    // Q50
    {
      question: 'Which of the following is not an actual S3 storage class?',
      choices: {
        A: 'S3-SSE',
        B: 'S3 Standard-IA',
        C: 'S3 RRS',
        D: 'Amazon Glacier'
      },
      answer: 'A'
    },
    // Q51
    {
      question: 'Which of the following would not incur a charge?',
      choices: {
        A: 'Distributing data via S3 signed URLs to an Internet client in the same region',
        B: 'Distributing data via CloudFront to an Internet client in a different region',
        C: 'Uploading data to S3 via a user’s web interface',
        D: 'Transferring data from an EC2 instance to an instance in another region'
      },
      answer: 'C'
    },
    // Q52
    {
      question: 'Which of the following would not incur a charge?',
      choices: {
        A: 'Transferring data from S3 to CloudFront',
        B: 'Distributing data via CloudFront to an Internet client in a different region',
        C: 'Transferring data from an EC2 instance to an instance in another region',
        D: 'Importing data to S3 via Transfer AccelerationReview Questions   145'
      },
      answer: 'A'
    },
    // Q53
    {
      question: 'What is the AWS free tier?',
      choices: {
        A: 'A platform for experimenting with AWS that can never be in production',
        B: 'A tier of AWS that allows limited access to AWS services at no cost',
        C: 'A class of EC2 instances that never cost anything for unlimited compute',
        D: 'A prepackaged suite of AWS services that can be used for web hosting at no cost'
      },
      answer: 'B'
    },
    // Q54
    {
      question: 'What is the AWS marketplace?',
      choices: {
        A: 'A market for products, many of which can run on the AWS free tier',
        B: 'A market for prebuilt AMIs beyond the standard AWS offerings',
        C: 'A market for plug-ins and trials of paid third-party AWS services',
        D: 'All of these'
      },
      answer: 'D'
    },
    // Q55
    {
      question: 'What of the following services is available in AWS free tier?',
      choices: {
        A: 'DynamoDB',
        B: 'AWS Lambda',
        C: 'SNS and SQS',
        D: 'All of these'
      },
      answer: 'D'
    },
    // Q56
    {
      question: 'Which of the following is an AWS support plan?',
      choices: {
        A: 'Standard',
        B: 'Free',
        C: 'Small teams',
        D: 'Enterprise'
      },
      answer: 'D'
    },
    // Q57
    {
      question: 'Which of the following AWS support plans offer 24/7 support? (Choose two.)',
      choices: {
        A: 'Basic',
        B: 'Developer',
        C: 'Business',
        D: 'Enterprise'
      },
      answer: [ 'C', 'D' ]
    },
    // Q58
    {
      question: 'What is AWS Trusted Advisor?',
      choices: {
        A: 'An AWS security service',
        B: 'An online resource to help you reduce cost',
        C: 'A logging tool to help you detect intrusions',
        D: 'A performance tool to help you correctly size your Auto Scaling groups'
      },
      answer: 'B'
    },
    // Q59
    {
      question: 'How many core Trusted Advisor checks does the Trusted Advisor tool provide?',
      choices: {
        A: 'Three',
        B: 'Four',
        C: 'Five',
        D: 'Nine146   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: 'C'
    },
    // Q60
    {
      question: 'Which of the following might be a recommendation from Trusted Advisor?  (Choose two.)',
      choices: {
        A: 'Turn on MFA for the root account.',
        B: 'Turn off global access to an S3 bucket.',
        C: 'Turn on Transfer Acceleration for S3.',
        D: 'Turn on MFA Delete for S3.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q61
    {
      question: 'Which of the following is not an area in which Trusted Advisor makes recommendations?',
      choices: {
        A: 'S3 bucket permissions',
        B: 'IAM usage',
        C: 'RDS public snapshots',
        D: 'DNS usage'
      },
      answer: 'D'
    },
    // Q62
    {
      question: 'Which of the following is not a category for which Trusted Advisor makes    recommendations?',
      choices: {
        A: 'Security',
        B: 'Scalability',
        C: 'Service limits',
        D: 'Fault tolerance'
      },
      answer: 'B'
    },
    // Q63
    {
      question: 'Which of the following are categories for which Trusted Advisor makes recommenda- tions? (Choose two.)',
      choices: {
        A: 'Performance',
        B: 'Auto Scaling',
        C: 'Caching',
        D: 'Security'
      },
      answer: [ 'A', 'D' ]
    },
    // Q64
    {
      question: 'Which of the following might be an area about which Trusted Advisor makes recommen- dations? (Choose two.)',
      choices: {
        A: 'Idle load balancers',
        B: 'Incorrect S3 storage class',
        C: 'No MFA on root account',
        D: 'Underuse of DNS records'
      },
      answer: [ 'A', 'C' ]
    },
    // Q65
    {
      question: 'Which of the following are recommendations AWS makes to help you control your AWS  costs? (Choose two.)',
      choices: {
        A: 'Right-size your services to meet capacity at the lowest cost.',
        B: 'Save money by reserving.',
        C: 'Save money with on-demand resources.',
        D: 'Buy high capacity and serve low capacity.Review Questions   147'
      },
      answer: [ 'A', 'B' ]
    },
    // Q66
    {
      question: 'Which of the following might be a means by which you could decrease AWS costs in any  standard application stack?',
      choices: {
        A: 'Use DynamoDB instead of RDS.',
        B: 'Use Route 53 instead of non-AWS registrars.',
        C: 'Use the spot market.',
        D: 'Use dedicated host instances.'
      },
      answer: 'C'
    },
    // Q67
    {
      question: 'What is AWS Cost Explorer?',
      choices: {
        A: 'An analytics tool for evaluating instance usage',
        B: 'An analytics tool for evaluating RDS usage',
        C: 'An analytics tool for managing AWS costs over time',
        D: 'An analytics tool for managing application deployments'
      },
      answer: 'C'
    },
    // Q68
    {
      question: 'You want to anticipate your costs over the next year. Which of the following tools would  you use?',
      choices: {
        A: 'AWS Trusted Advisor',
        B: 'AWS Cost Explorer',
        C: 'AWS Cost Manager',
        D: 'AWS Savings Advisor'
      },
      answer: 'B'
    },
    // Q69
    {
      question: 'You want to determine how your instance class choices are affecting your overall AWS  spending. Which tool would help?',
      choices: {
        A: 'AWS Trusted Advisor',
        B: 'AWS Cost Explorer',
        C: 'AWS  Auto Scaling groups',
        D: 'AWS CloudTrail'
      },
      answer: 'B'
    },
    // Q70
    {
      question: 'You want to set limits on how much is spent monthly on S3 storage. Which of the follow- ing tools would be helpful?',
      choices: {
        A: 'AWS Trusted Advisor',
        B: 'AWS Cost Explorer',
        C: 'AWS Budgets',
        D: 'AWS CloudFormation'
      },
      answer: 'C'
    },
    // Q71
    {
      question: 'You want to cut off all access to your S3 buckets when a certain cost threshold is reached.  Which tool allows you to do this?',
      choices: {
        A: 'AWS Trusted Advisor',
        B: 'AWS Cost Explorer',
        C: 'AWS Budgets',
        D: 'None of these148   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: 'D'
    },
    // Q72
    {
      question: 'You need to produce media files optimized for various device types to optimize costs asso- ciated with transferring and viewing media on those devices. What AWS service would  you use?',
      choices: {
        A: 'SWF',
        B: 'Workspaces',
        C: 'Elastic Transcoder',
        D: 'Cost Explorer'
      },
      answer: 'C'
    },
    // Q73
    {
      question: 'You want to reduce the maintenance costs of supporting Oracle on a fleet of EC2  instances. What service is well suited for offloading maintenance costs for Oracle data- base hosting?',
      choices: {
        A: 'RDS',
        B: 'EMR',
        C: 'SWF',
        D: 'Redshift'
      },
      answer: 'A'
    },
    // Q74
    {
      question: 'You want to delay the cost of hiring a large DevOps team while prototyping application  hosting in the cloud. What service allows you to deploy your code with minimal   oversight?',
      choices: {
        A: 'Elastic Beanstalk',
        B: 'CloudFormation',
        C: 'Elastic Transcoder',
        D: 'JSON'
      },
      answer: 'A'
    },
    // Q75
    {
      question: 'You are tasked with reducing cost in an organization that does several new application  deployments every week. The company has a common stack of resources but is spending  time each deployment re-creating this stack. What would help you reduce initial setup and  deployment costs?',
      choices: {
        A: 'Elastic Beanstalk',
        B: 'CloudFormation',
        C: 'AWS Trusted Adviso.',
        D: 'Application load balancers'
      },
      answer: 'B'
    },
    // Q76
    {
      question: 'You need to transfer 50 TB of data into S3 and want to avoid lengthy network exchanges  and network saturation. What option would provide you with inexpensive data transfer at  a large scale?',
      choices: {
        A: 'Storage Gateway',
        B: 'S3 Transfer Acceleration',
        C: 'Glacier',
        D: 'SnowballReview Questions   149'
      },
      answer: 'D'
    },
    // Q77
    {
      question: 'You want to take advantage of a large data store on premises that is already in use. How  can you use this local storage while still interfacing with an additional cloud-based storage  system and cloud-hosted EC2 instances?',
      choices: {
        A: 'Storage Gateway',
        B: 'S3 Transfer Acceleration',
        C: 'Glacier',
        D: 'Snowball'
      },
      answer: 'A'
    },
    // Q78
    {
      question: 'You need to transfer several petabytes of data into AWS at the lowest possible costs. What  AWS services could help?',
      choices: {
        A: 'Large Data Transfer Service',
        B: 'S3 Transfer Acceleration',
        C: 'Snowball',
        D: 'CloudFront'
      },
      answer: 'C'
    },
    // Q79
    {
      question: 'You need an analytics solution to perform business intelligence on your large data store.  What AWS managed service can provide you with OLAP that reduces cost at scale?',
      choices: {
        A: 'RDS',
        B: 'Oracle on an EC2 fleet with provisioned IOPS EBS volumes',
        C: 'Memcache',
        D: 'Redshift'
      },
      answer: 'D'
    },
    // Q80
    {
      question: 'You are currently running a fleet of 12 EC2 instances and processing large datasets that  are uploaded by users. However, the cost of maintaining these instances is increasing,  and the maintenance of the processing code is also growing. What AWS managed service  would allow you to reduce these costs and still process large datasets?',
      choices: {
        A: 'EMR',
        B: 'Memcache',
        C: 'CloudFront',
        D: 'BigData Processing Service'
      },
      answer: 'A'
    },
    // Q81
    {
      question: 'You are in charge of building a business intelligence application that can handle multiple  data sources and perform analytics at a large scale. Which of the following services and  tools would allow you to build a cost-effective solution? (Choose two.)',
      choices: {
        A: 'QuickSight',
        B: 'Provisioned IOPS EBS volumes',
        C: 'EC2 instances',
        D: 'Redshift150   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q82
    {
      question: 'You have been tasked with combining several data sources into a single (optionally  ephemeral) data store that you can then perform analysis on. You currently have data in  RDS, two DynamoDB instances, and multiple S3 buckets. What is the most cost-effective  approach to handling this task?',
      choices: {
        A: 'A fleet of EC2 instances with throughput optimized SSD EBS volumes',
        B: 'A combination of CloudWatch, Lambda, and custom code',
        C: 'Redshift',
        D: 'QuickSight'
      },
      answer: 'D'
    },
    // Q83
    {
      question: 'Which of the following is the least expensive option for long-term data archival?',
      choices: {
        A: 'EFS',
        B: 'EBS snapshots',
        C: 'Glacier',
        D: 'Redshift'
      },
      answer: 'C'
    },
    // Q84
    {
      question: 'Your company is paying a high cost for a consultant whose only job is the provisioning of  resources for new cloud deployments. What AWS service would allow you to reduce this  expenditure and move the consulting into more of a business-serving capacity?',
      choices: {
        A: 'Elastic Beanstalk',
        B: 'CloudTrail',
        C: 'CloudShift',
        D: 'CloudFormation'
      },
      answer: 'A'
    },
    // Q85
    {
      question: 'You have been tasked with reducing the costs associated with a large fleet of EC2  instances that currently run several custom processes. These processes collect and collate  data from a number of streaming data sources outside of your network. What AWS man- aged service could help replace these instances?',
      choices: {
        A: 'CloudFront',
        B: 'SDM',
        C: 'Kinesis',
        D: 'CloudFormation'
      },
      answer: 'C'
    },
    // Q86
    {
      question: 'You have been tasked with reducing the cost of a large group of EC2 instances that each  serves a single process. The process is fired off when a user initiates it through a web  interface. Because these processes are initiated often, a large fleet of EC2 instances is kept  active to serve the requests, incurring significant monthly costs. What managed service  could help you reduce the costs of these always-running instances?',
      choices: {
        A: 'Lambda',
        B: 'CloudFront',
        C: 'Kinesis',
        D: 'CloudFormationReview Questions   151'
      },
      answer: 'A'
    },
    // Q87
    {
      question: 'You are in charge of a cloud migration from an on-premises data center to AWS. There  are extensive software products used to monitor the on-premises applications, and you  want to reduce the recurring costs associated with this monitoring. What AWS service  would be ideal for this task?',
      choices: {
        A: 'CloudTrail',
        B: 'CloudMonitor',
        C: 'AppMonitor',
        D: 'CloudWatch'
      },
      answer: 'D'
    },
    // Q88
    {
      question: 'You are in charge of a cloud migration from an on-premises data center to AWS. The sys- tem currently has a number of custom scripts that process system and application logs for  auditing purposes. What AWS managed service could you use to replace these scripts and  reduce the need for instances to run these custom processes?',
      choices: {
        A: 'CloudTrail',
        B: 'CloudMonitor',
        C: 'AppMonitor',
        D: 'CloudWatch'
      },
      answer: 'A'
    },
    // Q89
    {
      question: 'You are the architect in charge of designing a database-driven application suite. As part of  the project, you need to migrate a large Oracle database instance into the cloud. Further,  you are migrating from Oracle to PostgreSQL. How would you most effectively accom- plish this migration with the least expenditure?',
      choices: {
        A: 'Copy the Oracle data to Snowball, send the data to AWS, move it into S3, and then  import the data into PostgreSQL in RDS.',
        B: 'Create an RDS Oracle instance in AWS, migrate the data from the existing Oracle  instance to the new RDS instance, and then convert the RDS instance to PostgreSQL.',
        C: 'Use the Database Migration Service to import the Oracle data directly into a new  PostgreSQL instance.',
        D: 'Create a local PostgreSQL instance, migrate the data locally from Oracle to   PostgreSQL, and then move the PostgreSQL instance into AWS.'
      },
      answer: 'C'
    },
    // Q90
    {
      question: 'You need to choose a scalable, cost-effective, and highly durable solution for storing flat  files. What AWS service would you use?',
      choices: {
        A: 'S3',
        B: 'Kinesis',
        C: 'DynamoDB',
        D: 'Aurora152   Chapter 4   ■   Domain 4: Design Cost-Optimized Architectures'
      },
      answer: 'A'
    },
    // Q91
    {
      question: 'You have been tasked with replacing a legacy LDAP directory server that manages users,  groups, and permissions with a cloud-based solution in order to reduce maintenance costs  for the current directory server. What AWS service should you investigate?',
      choices: {
        A: 'IAM',
        B: 'Cognito',
        C: 'AWS Organizations',
        D: 'AWS Directory Server'
      },
      answer: 'A'
    },
    // Q92
    {
      question: 'You have been tasked with replacing a legacy LDAP directory server that manages users,  groups, and permissions and provides single sign-on capabilities with a cloud-based solu- tion in order to reduce maintenance costs for the current directory server and codebase.  What AWS services should you investigate? (Choose two.)',
      choices: {
        A: 'IAM',
        B: 'Cognito',
        C: 'AWS Organizations',
        D: 'AWS Directory Server'
      },
      answer: [ 'A', 'B' ]
    },
    // Q93
    {
      question: 'You are new on a project that makes heavy use of AWS. Your first priority is to reduce  costs and identify security risks. What tool could you use to scan the existing environment  and set initial priorities for change?',
      choices: {
        A: 'CloudTrail',
        B: 'Trusted Advisor',
        C: 'AWS Organizations',
        D: 'AWS Directory Server'
      },
      answer: 'B'
    },
    // Q94
    {
      question: 'You are migrating a large on-premises application suite to AWS. Your company has made  a significant investment in Chef for configuration and management and doesn’t want to  lose the investment in time and money that the Chef tool represents. How could you pre- serve this functionality and keep costs low?',
      choices: {
        A: 'CloudTrail',
        B: 'CloudWatch',
        C: 'OpsWorks',
        D: 'Service Catalog'
      },
      answer: 'C'
    }];