const myQuestions = [
    // Q1
    {
      question: 'You are responsible for optimizing performance of a movie streaming website. Currently,  you are working on the search functionality and have discovered that anytime the library  database of titles is searched, the load on the database is reaching peak levels. Your cur- rent architecture consists of a PostgreSQL database on an extra-large instance. How  would you update your architecture to better handle the load? (Choose two.)',
      choices: {
        A: 'Re-create the database instance on a larger instance using EBS volumes with provi- sioned IOPS as the volume type.',
        B: 'Add an RDS Multi-AZ setup to increase the read performance of the media library  database.',
        C: 'Add an ElastiCache store to cache data because searches will often return common  data over multiple reads.',
        D: 'Shard the database into multiple copies installed on multiple instances.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q2
    {
      question: 'Which of the following are engines used by ElastiCache?',
      choices: {
        A: 'reddit, memcached',
        B: 'redis, memcached',
        C: 'Sharding, redis',
        D: 'memcached, Redshift'
      },
      answer: 'B'
    },
    // Q3
    {
      question: 'Which of the following are AWS-supported solutions for encrypting data at rest when that  data is objects stored in S3 buckets? (Choose two.)',
      choices: {
        A: 'ElastiCache for memcached',
        B: 'AWS Key Management Service',
        C: 'Customer-provided keys',
        D: 'AWS Encryptic'
      },
      answer: [ 'B', 'C' ]
    },
    // Q4
    {
      question: 'You have been brought into a new organization with over 20 different AWS accounts. You  are tasked with improving the cost management of the organization and want to recom- mend the use of AWS Organizations and the consolidated billing feature. Which of the  following are advantages of consolidated billing that you could use to support your case?  (Choose two.)',
      choices: {
        A: 'Multiple accounts can be combined and, through that combination, receive discounts  that may reduce the total cost of all the accounts.',
        B: 'Traffic between accounts will not be subject to data transfer charges if those accounts  are all in AWS Organizations.',
        C: 'All accounts in AWS Organizations will receive a 5% billing reduction in consoli- dated billing.',
        D: 'All accounts can be tracked individually and through a single tool.Chapter 6   ■   Practice Test   167'
      },
      answer: [ 'A', 'D' ]
    },
    // Q5
    {
      question: 'You are tasked with improving security at an organization that has recently begun using  the cloud. It has five developers, a financial manager, and two support engineers. Cur- rently, all eight staff are using the AWS root user for their account. What changes would  you make to improve security? (Choose two.)',
      choices: {
        A: 'Get all the users to download the AWS CLI and change the root password.',
        B: 'Create a new IAM user for each of the eight staff members and provide credentials to  each user.',
        C: 'Put the five developers in the Power Users group, the financial manager in the Billing  group, and the support engineers in the Support User group.',
        D: 'Create a new group with access to the IAM service and ensure that at least one devel- oper is in that group.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q6
    {
      question: 'You need to support a cluster of instances that will host a high-volume, high-load Oracle  database installation. You cannot use RDS because of a custom plug-in that the database  instances require. Which EBS volume type should you choose for the instances?',
      choices: {
        A: 'Cold HDD',
        B: 'Throughput Optimized HDD',
        C: 'General Purpose SSD',
        D: 'Provisioned IOPS SSD'
      },
      answer: 'D'
    },
    // Q7
    {
      question: 'You are responsible for a large AWS environment, and specifically, several subnets within  a custom VPC. The VPC contains both public and private subnets. There are approxi- mately 300 EC2 instances within one of the private subnets that uses a NAT device  to reach the Internet. Each evening at 11 p.m., the instances push the day’s date to an  external data store outside of AWS, available via an API that is Internet accessible. How- ever, you are seeing that not all of the data is getting out each evening, and several of the  instances show failed transmissions to the external API. Assuming the API itself is not an  issue, what should you consider when attempting to fix this issue? (Choose two.)',
      choices: {
        A: 'The instances are saturating the VPC’s internet gateway. Consider attaching an addi- tional internet gateway to the VPC.',
        B: 'The NAT device could be a NAT instance that is on an instance size too small to handle the traffic. Reprovision the NAT instance on a larger instance size with more CPU.',
        C: 'Set up an SQS queue with all the desired transmissions as entries in the queue. Have the EC2 instances poll the queue and transmit data until the queue is completely empty. Add a Lambda job to detect failed transmissions and re-add the failed opera- tion to the SQS queue.',
        D: 'The instances cannot support the required throughput. Re-provision the instances to  use EBS volumes with provisioned IOPS as the volume type.168   Chapter 6   ■   Practice Test'
      },
      answer: [ 'B', 'C' ]
    },
    // Q8
    {
      question: 'Which of the following will AWS not allow with regard to EBS? (Choose two.)',
      choices: {
        A: 'Encrypt an existing EBS volume.',
        B: 'Create an unencrypted copy of an encrypted snapshot.',
        C: 'Attach an encrypted volume to an EC2 instance.',
        D: 'Create an encrypted copy of an unencrypted snapshot.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q9
    {
      question: 'What is the URL at which an S3 bucket called photoData in the EU West 2 region is  accessible for reading and writing, assuming permissions are correctly configured?',
      choices: {
        A: 'https://photoData.s3-eu-west-2.amazonaws.com',
        B: 'https://s3.eu-west-2.amazonaws.com/photoData',
        C: 'https://s3-eu-west-2.amazonaws.com/photoData',
        D: 'https://photoData.s3.eu-west-2.amazonaws.com'
      },
      answer: 'C'
    },
    // Q10
    {
      question: 'You are handling a logging update to a fleet of EC2 instances. You have set up a VPC  flow log on the group of instances and now want to monitor these logs for a specific set of  events, in particular security breaches. To where should the logs be forwarded?',
      choices: {
        A: 'RDS',
        B: 'S3',
        C: 'CloudWatch',
        D: 'RedShift'
      },
      answer: 'C'
    },
    // Q11
    {
      question: 'You want to provide task- and event-level tracking in a complex application. You’ve been  asked to then attach custom code to these tasks and events. However, you are working on an  MVP that needs to quickly go to market. Which AWS services would provide you with the  most out-of-the-box functionality and require the least amount of infrastructure coding?',
      choices: {
        A: 'SQS, Lambda',
        B: 'SWF, CloudWatch',
        C: 'SW F, Lambda',
        D: 'Elastic Beanstalk, CloudWatch'
      },
      answer: 'C'
    },
    // Q12
    {
      question: 'You are troubleshooting a custom VPC with two subnets. One subnet contains database  instances and is not Internet accessible. The other subnet has EC2 instances running web  servers. The instances have elastic network interfaces assigned with public IP addresses.  However, you are unable to access these instances from the Internet, and they cannot  access Internet resources either. What might be causing these problems? (Choose two.)',
      choices: {
        A: 'The instances need to use public IP addresses, but not elastic network interfaces.  Remove the elastic network interfaces.',
        B: 'The VPC needs an internet gateway. Attach an internet gateway and update the VPC’s  routing tables to route Internet traffic from the instances through the internet gateway.',
        C: 'The instances are being prevented from accessing the Internet by the default security  group they have been assigned. Add permissions to allow outgoing Internet traffic to  the group.',
        D: 'Update the NACL for the subnet with the EC2 instances to allow inbound HTTP and  HTTPS traffic to the EC2 instances in the public subnet.Chapter 6   ■   Practice Test   169'
      },
      answer: [ 'B', 'D' ]
    },
    // Q13
    {
      question: 'What common step that is often omitted in setting up a NAT instance can cause a failure  in routing traffic from an EC2 instance through the NAT instance and out to the Internet?',
      choices: {
        A: 'Adding a rule to the security group for the NAT instance that allows traffic out to the  Internet',
        B: 'Setting the NAT instance up to use an EBS volume with provisioned IOPS',
        C: 'Setting the NACL on the subnet with the EC2 instances to allow in traffic from the  Internet',
        D: 'Ensuring that the Source/Destination Check option is disabled on the NAT instance'
      },
      answer: 'D'
    },
    // Q14
    {
      question: 'Which of these S3 storage classes is the most durable?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'All of these classes are equally durable.'
      },
      answer: 'D'
    },
    // Q15
    {
      question: 'You have been tasked with setting up storage for an application that loads large photos  from an existing RDS. These photos are then processed by a Lambda function and have  metadata added, along with additional filters. The Lambda code is inexpensive and can  easily be rerun if needed. You need to decide on where to store the photos once they have  been processed. Each photo will likely be accessed between 1 and 5 times over the course  of a month and should be quickly accessible. The chief driver for the application and your  decision should be cost and user experience. What S3 storage class would you select?',
      choices: {
        A: 'S3',
        B: 'S3 IA',
        C: 'S3 One Zone-IA',
        D: 'Glacier'
      },
      answer: 'C'
    },
    // Q16
    {
      question: 'You have a growing fleet of EC2 instances that have been using EBS volumes for data  storage. Each instance needs access to all other instances’ data, and your custom replica- tion scripts are growing increasingly taxed and complex. What would you recommend to  replace the current usage of EBS volumes and replication?',
      choices: {
        A: 'EBS',
        B: 'DynamoDB',
        C: 'EFS',
        D: 'Service Catalog'
      },
      answer: 'C'
    },
    // Q17
    {
      question: 'You are responsible for setting up the architecture for a new web-based online dating site.  You need to create a public subnet in a custom VPC and already have a subnet in the VPC  with EC2 instances within it. What other steps would you need to take to make the subnet  public? (Choose two.)',
      choices: {
        A: 'Attach a customer gateway to the VPC.',
        B: 'C. B.',
        C: '.   Make the subnet public using the AWS CLI and the subnet command. C.   Attach an internet gateway to the VPC.',
        D: 'Add a route for the instances in the subnet to the Internet through the attached gateway.170   Chapter 6   ■   Practice Test'
      },
      answer: [ 'C', 'D' ]
    },
    // Q18
    {
      question: 'Which of the following are valid S3 request headers? (Choose two.)',
      choices: {
        A: 'x-amz-date',
        B: 'Content-Length',
        C: 'x-aws-date',
        D: 'Content-Size'
      },
      answer: [ 'A', 'B' ]
    },
    // Q19
    {
      question: 'Which of the following are support levels offered by AWS? (Choose two.)',
      choices: {
        A: 'Developer',
        B: 'Professional',
        C: 'Business',
        D: 'Corporate'
      },
      answer: [ 'A', 'C' ]
    },
    // Q20
    {
      question: 'Which of the following database options are available through RDS? (Choose two.)',
      choices: {
        A: 'DynamoDB',
        B: 'Aurora',
        C: 'DB2',
        D: 'MariaDB'
      },
      answer: [ 'B', 'D' ]
    },
    // Q21
    {
      question: 'You have an Auto Scaling group that has a number of instances spread over several avail- ability zones. Currently, there are 10 instances running, and the Auto Scaling group has  rules that allow it to grow to as many as 20 instances and shrink to as few as 3. You have  been told by another architect that the group needs to scale in. When this scaling in com- pletes, how many instances might still be running?',
      choices: {
        A: '10',
        B: '5',
        C: '15',
        D: '20'
      },
      answer: 'B'
    },
    // Q22
    {
      question: 'Which of the following are options for writing a CloudFormation template? (Choose two.)',
      choices: {
        A: 'XML',
        B: 'YA ML',
        C: 'MML',
        D: 'JSON'
      },
      answer: [ 'B', 'D' ]
    },
    // Q23
    {
      question: 'You are responsible for building out an application that serves user bases in California,  USA; in Tokyo, Japan; and in Sydney, Australia. The application is hosted in regions close  to all three major user bases. You want to ensure that users receive localized content in  their own area. Which of the following routing policies should you consider for this appli- cation in Route 53?',
      choices: {
        A: 'Failover routing',
        B: 'Latency-based routing',
        C: 'Geolocation routing',
        D: 'Weighted routingChapter 6   ■   Practice Test   171'
      },
      answer: 'C'
    },
    // Q24
    {
      question: 'You have four EC2 instances serving web content with an ELB in front of the instances.  You are configuring Route 53 and want to ensure that the ELB is directing traffic. What  sort of record should you create in Route 53?',
      choices: {
        A: 'A record',
        B: 'MX record',
        C: 'CNAME record',
        D: 'AAAA record'
      },
      answer: 'C'
    },
    // Q25
    {
      question: 'You are the architect for a large migration from on-premises data stores to DynamoDB.  As part of this migration, you need to manage the access and authorization for users, but  the organization wants all existing users to maintain their Active Directory usernames.  What steps will you need to do in order to facilitate this move? (Choose two.)',
      choices: {
        A: 'Select an identity provider.',
        B: 'Create a new IAM user for each user of the data.',
        C: 'Use the AWS security token service to create temporary tokens.',
        D: 'Create a service control policy in AWS Organizations for the imported data.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q26
    {
      question: 'You are working on increasing performance for an application that routinely sees traf - fic spikes between 6 and 8 p.m. Eastern time every evening. At that time, even with  Auto Scaling policies, load increases so quickly that response times slow to a crawl.  Without knowing anything more than this about what the traffic surge represents, how  could you most easily and efficiently ensure that your application can respond to these  surges?',
      choices: {
        A: 'Set up a lower threshold for scaling in your Auto Scaling group; consider 50% as a  starting point.',
        B: 'Log on each evening at 7:30 p.m. and manually scale the application up.',
        C: 'Set up CloudWatch monitors on the application. Write a Lambda function that will  trigger scaling up. Attach the Lambda function to the CloudWatch monitors and set a  trigger threshold.',
        D: 'Set up scheduled scaling so that the application scales up at 7:45 p.m. each evening  and scales back down at 8:30 p.m.'
      },
      answer: 'D'
    },
    // Q27
    {
      question: 'You want to improve the performance of an existing DynamoDB database. Currently, you  believe that CPU utilization is the biggest concern, although you are attempting to pro- actively provision additional resources rather than reacting to an existing load problem.  Which of the following might be your approach?',
      choices: {
        A: 'Stop the database and re-provision it using provisioned IOPS SSD EBS volumes.',
        B: 'Set up read replicas to improve read performance.',
        C: 'Configure DynamoDB to use a Multi-AZ setup.',
        D: 'None of these. DynamoDB scales automatically, and you cannot manage its resources  at this level.172   Chapter 6   ■   Practice Test'
      },
      answer: 'D'
    },
    // Q28
    {
      question: 'You have been brought in to reduce costs on a production application. You find that  currently, CloudWatch has been configured using the detailed option, and is collecting  metrics every minute. You suggest updating CloudWatch to use default settings. Your  customer likes the idea of reducing monitoring costs but wants to know how often metrics  would be collected in your recommendation. What do you tell the customer?',
      choices: {
        A: 'CloudWatch collects metrics every 2 minutes using default settings.',
        B: 'CloudWatch collects metrics every 5 minutes using default settings.',
        C: 'CloudWatch collects metrics every 10 minutes using default settings.',
        D: 'The default settings for CloudWatch do not specify an interval at which metrics are  collected.'
      },
      answer: 'B'
    },
    // Q29
    {
      question: 'You are newly responsible for a data-driven system that performs search and discovery  of a very large database. The database is an RDS MySQL installation currently showing  82% CPU utilization. You are concerned about performance; what steps would you rec- ommend? (Choose two.)',
      choices: {
        A: 'Set up RDS to use Multi-AZ and ensure that the regions chosen are geographically  close to your user base.',
        B: 'Set up read replicas of your RDS database.',
        C: 'Add an ElastiCache instance in front of your database.',
        D: 'Create three copies of your database and move them into regions that are geographi- cally distributed.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q30
    {
      question: 'You have been brought in to add bits of custom code attached to a number of events on an  existing application. The application needs to be updated quickly, and you want to mini- mize the code you need to write. What AWS solution will offer you the ability to accom- plish these goals most quickly?',
      choices: {
        A: 'SWF',
        B: 'SQS',
        C: 'Kinesis',
        D: 'Redshift'
      },
      answer: 'A'
    },
    // Q31
    {
      question: 'You are investigating an application that uses an SQS queue. Messages are making it to  the queue, but those messages are not being processed in the order in which they were  received by the queue. You want to ensure that ordering is preserved; what should you do?',
      choices: {
        A: 'Update the queue to use standard delivery so delivery always happens at least once.',
        B: 'Change the queue to be a FIFO queue, which will ensure that ordering is preserved.',
        C: 'Update the queue to use the “deliver in order” option via the AWS CLI.',
        D: 'Change the queue to be a LIFO queue, which will ensure that ordering is preserved.'
      },
      answer: 'B'
    },
    // Q32
    {
      question: 'Which of the following is not a valid routing policy for Route 53?',
      choices: {
        A: 'Simple routing policy',
        B: 'Failover routing policy',
        C: 'Load-balancing routing policy',
        D: 'Latency-based routing policyChapter 6   ■   Practice Test   173'
      },
      answer: 'C'
    },
    // Q33
    {
      question: 'You are responsible for a cluster of EC2 instances that service a user-facing media-rich  application, all behind an elastic load balancer. The application has begun to receive  spikes of activity at unpredictable times, and your instances are flooded with requests  and become nonresponsive in many cases. How would you rearchitect this application to  address these issues?',
      choices: {
        A: 'Move your application instances to use the spot market to account for the spikes in  usage.',
        B: 'Increase the size of the EC2 instances and choose instances with higher CPU ratings.',
        C: 'Ask AWS to pre-warm the elastic load balancer so that it will respond more quickly  to spikes in traffic.',
        D: 'Add another application component, such as an SQS queue, and have requests go  to the queue. Then have the instances process requests from the queue rather than  directly from user requests.'
      },
      answer: 'D'
    },
    // Q34
    {
      question: 'You have a long-running batch process that you want to move to use spot instances in  order to reduce costs. Which of the following should you consider when evaluating if these  batch processes will function effectively on the spot market? (Choose two.)',
      choices: {
        A: 'The process must be able to stop and restart without failing or losing data.',
        B: 'The process must be able to run at any time.',
        C: 'The process must not trigger more than 100 API requests within any single minute of  running.',
        D: 'The process must not use an AWS services outside of S3 or RDS.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q35
    {
      question: 'You are the architect for a new application that needs durable storage in the cloud. You  have been asked to select an S3 storage class with the maximum available durability.  Which option provides S3 storage classes with maximum durability?',
      choices: {
        A: 'S3 standard',
        B: 'S3 standard, S3-IA',
        C: 'S3 standard, S3-IA, S3 One Zone-IA',
        D: 'S3 standard, S3-IA, S3 One Zone-IA, Glacier'
      },
      answer: 'D'
    },
    // Q36
    {
      question: 'What differences exist between storing data from an instance on an attached root EBS  volume versus storing that data in S3? (Choose two.)',
      choices: {
        A: 'EBS uses block-level storage, while S3 uses object-level storage.',
        B: 'EBS uses object-level storage, while S3 uses block-level storage.',
        C: 'EBS volumes are ephemeral by default, while S3 storage is not.',
        D: 'S3 storage is ephemeral by default, while EBS storage is not.174   Chapter 6   ■   Practice Test'
      },
      answer: [ 'A', 'C' ]
    },
    // Q37
    {
      question: 'You have been put in charge of a set of RDS databases that are not performing at speeds  required by the application cluster using those databases. You have been tasked with  increasing the performance of the databases while keeping costs as low as possible. The  current RDS installation uses MySQL. What recommendation would you make?',
      choices: {
        A: 'Move from RDS to EC2 instances with databases installed on the instances. Right- size the instances and custom database installation for the application’s needs.',
        B: 'Move from MySQL to Aurora within RDS, as Aurora consistently shows better per- formance than MySQL.',
        C: 'Move from MySQL to Oracle within RDS and add the required Oracle licenses to  increase the overall RDS cluster size.',
        D: 'Stop the RDS cluster and then resize all instances. Restart the cluster, keeping the  MySQL databases intact.'
      },
      answer: 'B'
    },
    // Q38
    {
      question: 'Which of the following AWS services are components of a high-availability, fault-tolerant  solution? (Choose two.)',
      choices: {
        A: 'Lightsail',
        B: 'AWS Organizations',
        C: 'ELB',
        D: 'DynamoDB'
      },
      answer: [ 'C', 'D' ]
    },
    // Q39
    {
      question: 'Which of the following AWS managed services are not automatically redundant and  require configuration on your part to be highly available? (Choose two.)',
      choices: {
        A: 'EC2',
        B: 'S3',
        C: 'SQS',
        D: 'RDS'
      },
      answer: [ 'A', 'D' ]
    },
    // Q40
    {
      question: 'As a new architect on a large project, you have begun to run vulnerability scans on all  public-facing API endpoints of your application. However, these scans are failing, and you  have received a number of misuse warnings from AWS. What is the problem?',
      choices: {
        A: 'AWS does not allow vulnerability scans on its instances.',
        B: 'AWS allows vulnerability scans, but they must be run using AWS’s own services and  tools.',
        C: 'AWS allows vulnerability scans, but they must be run from AWS instances.',
        D: 'AWS allows vulnerability scans, but they must be run with advance notice to and per- mission from AWS.Chapter 6   ■   Practice Test   175'
      },
      answer: 'D'
    },
    // Q41
    {
      question: 'You have recently taken on architecture at a large genomics nonprofit. Currently, the  organization imports hundreds of terabytes (TB) daily and then needs to run complex  queries against that data. The queries can take several hours, and at times even days, to  complete. They write their state to S3 frequently so the queries can recover from failure  without restarting. The organization wants to minimize costs associated with this pro- cessing. What technologies and recommendations might you suggest? (Choose two.)',
      choices: {
        A: 'Create an SQS instance and queue up references to all the data that needs to be que- ried as it comes in. Ensure that the queue is readable via EC2 instances.',
        B: 'Create a new IAM role that allows EC2 instances to write data to S3 stores.',
        C: 'Set up a placement group with EC2 instances that can read from the SQS queue and  run the queries against referenced data.',
        D: 'Set up EC2 spot instances that can read from the SQS queue and S3 and run the que- ries on those instances.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q42
    {
      question: 'You have an application that consists of worker nodes that are on-demand instances and  processing nodes that are a mixture of on-demand instances and spot instances. Your  application collects information and does initial processing as it comes in from users using  the worker nodes. Then, the processing nodes perform analytics each evening. Your goal  is to use spot instances for most of this processing and only overflow to the on-demand  instances in times of high load. However, the spot instances have been terminating more  often lately, causing more usage of the on-demand instances. What might you do to  increase the usage of the spot instances?',
      choices: {
        A: 'Convert the on-demand processing instances to spot instances so more spot instances  will be available.',
        B: 'Convert the worker node instances to spot instances so more spot instances will be  available.',
        C: 'Lower the bid price on the spot instances to ensure only lower-priced instances are  used.',
        D: 'Raise the bid price on the spot instances so that they will run longer before termina- tion occurs.'
      },
      answer: 'D'
    },
    // Q43
    {
      question: 'You are assisting a company with moving its large data estate to the cloud and reducing its  on-site storage costs. The company has serious concerns about performance of the cloud  as it relates to accessing its data. What storage gateway setup would you suggest to ensure  that the company’s frequently accessed files do not suffer latency?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Tape gateway',
        D: 'Stored volume gateway176   Chapter 6   ■   Practice Test'
      },
      answer: 'B'
    },
    // Q44
    {
      question: 'Which of the following take the place of a traditional firewall appliance in AWS?',
      choices: {
        A: 'NACLs, IAM, WAF',
        B: 'Security groups, IAM, WAF',
        C: 'NACLs, security groups',
        D: 'Security groups, VPCs, VPGs'
      },
      answer: 'C'
    },
    // Q45
    {
      question: 'Which of the following are created automatically as part of the default VPC that AWS sets  up for all AWS accounts? (Choose two.)',
      choices: {
        A: 'Internet gateway',
        B: 'Virtual private gateway',
        C: 'Public subnet',
        D: 'NAT gateway'
      },
      answer: [ 'A', 'C' ]
    },
    // Q46
    {
      question: 'Rank the factors considered in terminating an instance that is part of an Auto Scaling  group, from highest priority to lowest priority.',
      choices: {
        A: 'Age of launch configuration, availability zone with the most instances, nearness to  next billing hour',
        B: 'Availability zone with the most instances, age of launch configuration, nearness to  next billing hour',
        C: 'Age of launch configuration, nearness to next billing hour, availability zone with the  most instances',
        D: 'Availability zone with the most instances, nearness to next billing hour, age of launch  configuration'
      },
      answer: 'B'
    },
    // Q47
    {
      question: 'AWS supports two types of virtualization: paravirtual and hardware virtual machines.  Why might you choose one type of virtualization over the other?',
      choices: {
        A: 'Paravirtualization allows the use of hardware extensions like enhanced networking  and GPU processing, but hardware virtualization does not.',
        B: 'Hardware virtualization allows the use of hardware extensions like enhanced net- working and GPU processing, but paravirtualization does not.',
        C: 'Hardware virtualization only works with certain instance types, while paravirtual- ization works with all instance types.',
        D: 'Both paravirtualization and hardware virtualization function exactly the same way;  neither is a better performance choice than the other.'
      },
      answer: 'B'
    },
    // Q48
    {
      question: 'Which EBS volume type is most suited for workloads that perform OLTP and need to per- form extremely well and consistently?',
      choices: {
        A: 'Provisioned IOPS volumes',
        B: 'General SSH volumes',
        C: 'Magnetic storage',
        D: 'Throughput Optimized HDDChapter 6   ■   Practice Test   177'
      },
      answer: 'A'
    },
    // Q49
    {
      question: 'After discovering that HTTPS was not allowed to reach instances via a security group,  you have added a rule to allow in HTTPS. How long will it take for your changes to take  effect on the affected instances?',
      choices: {
        A: 'Immediately',
        B: 'Approximately 30 seconds',
        C: 'Approximately 1 minute',
        D: 'Immediately for the instances, but longer if you have an ELB in front of the instances'
      },
      answer: 'A'
    },
    // Q50
    {
      question: 'You have discovered that your production database instance is peaking and reaching 90%  CPU usage when a set of nightly scripts are run against the database. The scripts perform  complex queries and gather reporting data to be distributed via email reports the next day.  As a result of the load, the database is performing poorly, and the queries are beginning  to take into the following work day to complete. Which option would you recommend to  reduce this peak usage in the evenings?',
      choices: {
        A: 'Increase the memory attached to the database instance.',
        B: 'Set up a second database instance as a Multi-AZ database and run your queries  against the Multi-AZ database.',
        C: 'Set up read replicas of the database instance and run your queries against the read  replicas.',
        D: 'Set up an ElastiCache instance in front of the database instance.'
      },
      answer: 'C'
    },
    // Q51
    {
      question: 'Who can delete objects in an S3 bucket with versioning enabled?',
      choices: {
        A: 'Anyone with IAM permissions to modify the bucket',
        B: 'Anyone with IAM permissions to delete objects in the bucket',
        C: 'Only the bucket owner',
        D: 'Once versioning is enabled, no object can ever be completely removed.'
      },
      answer: 'C'
    },
    // Q52
    {
      question: 'Your customer has instructed you to encrypt all objects at rest in your application. The  customer is frequently audited and must prove compliance with a selective set of govern- ment policies. Which encryption approach would you recommend?',
      choices: {
        A: 'SSE-C',
        B: 'SSE-KMS',
        C: 'SSE-S3',
        D: 'Client-provided encryption keys178   Chapter 6   ■   Practice Test'
      },
      answer: 'B'
    },
    // Q53
    {
      question: 'You have set up three read replicas of your primary database instance. You have noticed  that reads of the replicas do not always return consistent results, especially after large  writes to the primary database instance. What might the problem be?',
      choices: {
        A: 'This is normal; replication from a primary instance to read replicas always takes  between 30 and 60 seconds.',
        B: 'This is normal; replication from a primary instance to read replicas is asynchronous  and, although sometimes nearly instant, may also at times take longer to complete.',
        C: 'You need to switch the replication model on your read replicas from asynchronous to  synchronous to ensure read consistency.',
        D: 'You need to investigate network latency between your primary and read replicas and  consider moving the replicas into the same availability zone as the primary instance.'
      },
      answer: 'B'
    },
    // Q54
    {
      question: 'By default, how many S3 buckets can you create for a single AWS account?',
      choices: {
        A: '20',
        B: '50',
        C: '100',
        D: 'There is no default limit.'
      },
      answer: 'C'
    },
    // Q55
    {
      question: 'You want to create a public subnet in a custom VPC. Which of the following do you  not   need to accomplish this?',
      choices: {
        A: 'An internet gateway',
        B: 'An elastic IP address',
        C: 'A routing table with a route to an internet gateway',
        D: 'You need all of these for a public subnet.'
      },
      answer: 'B'
    },
    // Q56
    {
      question: 'What is the largest allowed volume size for provisioned IOPS EBS volumes?',
      choices: {
        A: '4TiB',
        B: '12TiB',
        C: '16TiB',
        D: '32TiB'
      },
      answer: 'C'
    },
    // Q57
    {
      question: 'Which of the following statements regarding EBS volumes and EC2 instances is not true?',
      choices: {
        A: 'You can attach multiple EC2 instances to a single EBS volume at one time.',
        B: 'You can attach multiple EBS volumes to a single EC2 instance at one time.',
        C: 'You can attach multiple EC2 instances to a single EBS volume, but not all at the same  time.',
        D: 'Non-root EBS volumes are not deleted when an attached instance is terminated by  default.Chapter 6   ■   Practice Test   179'
      },
      answer: 'A'
    },
    // Q58
    {
      question: 'Which of the following AWS services does not store data in key-value pairs?',
      choices: {
        A: 'S3',
        B: 'DynamoDB',
        C: 'IAM programmatic credentials',
        D: 'RDS'
      },
      answer: 'D'
    },
    // Q59
    {
      question: 'You are auditing the EBS volumes of a number of EC2 instances running three web-facing  data-intensive applications. You notice that a number of the volumes are configured as  throughput optimized HDDs rather than General Purpose SSD or Provisioned IOPS SSD.  Why might this decision be appropriate? (Choose two.)',
      choices: {
        A: 'Lowered costs is a primary consideration.',
        B: 'Data throughput is a primary consideration.',
        C: 'The applications primarily use large performance-critical workloads.',
        D: 'The throughput optimized HDDs serve only a test environment rather than a produc- tion one.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q60
    {
      question: 'Which of the following databases is not supported by RDS?',
      choices: {
        A: 'MariaDB',
        B: 'SQL Server',
        C: 'Aurora',
        D: 'InnoDB'
      },
      answer: 'D'
    },
    // Q61
    {
      question: 'Which of the following statements are true about the default subnet created with a stan- dard AWS account? (Choose two.)',
      choices: {
        A: 'The instances created within it will be public by default.',
        B: 'The instances created within it will have public elastic IPs by default.',
        C: 'The instances created within it will have routes to the Internet through an internet  gateway by default.',
        D: 'The VPC within which the subnet is created will have an attached virtual private  gateway as well as an internet gateway.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q62
    {
      question: 'Which of the following types of traffic are supported by classic load balancers? (Choose two.)',
      choices: {
        A: 'HTTPS',
        B: 'SSH',
        C: 'FTP',
        D: 'HTTP'
      },
      answer: [ 'A', 'D' ]
    },
    // Q63
    {
      question: 'Which S3 storage class has the same durability as it does availability?',
      choices: {
        A: 'S3 standard',
        B: 'S3-IA',
        C: 'S3-RRS',
        D: 'S3 One Zone-IA180   Chapter 6   ■   Practice Test'
      },
      answer: 'C'
    },
    // Q64
    {
      question: 'You want to ensure that no object in S3 is ever accidentally deleted, as well as preserve  audit trails for deleted files. What options would you consider? (Choose two.)',
      choices: {
        A: 'SSE-KMS',
        B: 'MFA Delete',
        C: 'Versioning',
        D: 'Detailed monitoring with CloudWatch'
      },
      answer: [ 'B', 'C' ]
    },
    // Q65
    {
      question: 'You have a fleet of EC2 instances serving web content. The instances typically run  between 75% and 90% of capacity, and your projections show consistent usage over the  next 36 months. What would you recommend to potentially reduce the costs of running  these instances?',
      choices: {
        A: 'Spot instances',
        B: 'Reserved instances',
        C: 'On-demand instances',
        D: 'Placement groups'
      },
      answer: 'B'
    }];