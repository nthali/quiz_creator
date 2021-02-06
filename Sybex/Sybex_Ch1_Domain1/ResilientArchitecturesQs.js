const myQuestions = [
    // Q1
    {
      question: 'Which of the following statements regarding S3 storage classes is true?',
      choices: {
        A: 'The availability of S3 and S3-IA is the same.',
        B: 'The durability of S3 and S3-IA is the same.',
        C: 'The latency of S3 and Glacier is the same.',
        D: 'The latency of S3 is greater than that of Glacier.'
      },
      answer: 'B'
    },
    // Q2
    {
      question: 'A small business specializing in video processing wants to prototype cloud storage in  order to lower its costs. However, management is wary of storing its client files in the  cloud rather than on premises. They are focused on cost savings and experimenting with  the cloud at this time. What is the best solution for their prototype?',
      choices: {
        A: 'Install a VPN, set up an S3 bucket for their files created within the last month, and  set up an additional S3-IA bucket for older files. Create a lifecycle policy in S3 to  move files older than 30 days into the S3-IA bucket nightly.',
        B: 'Install an AWS storage gateway using stored volumes.',
        C: 'Set up a Direct Connect and back all local hard drives up to S3 over the Direct   Connect nightly.',
        D: 'Install an AWS storage gateway using cached volumes.'
      },
      answer: 'B'
    },
    // Q3
    {
      question: 'You have a group of web designers who frequently upload large zip files of images to S3,  often in excess of 5 GB. Recently, team members have reported that they are receiving the  error “Your proposed upload exceeds the maximum allowed object size.” What action  should you take to resolve the upload problems?',
      choices: {
        A: 'Increase the maximum allowed object size in the target S3 bucket used by the web  designers.',
        B: 'Ensure that your web designers are using applications or clients that take advantage  of the Multipart Upload API for all uploaded objects.',
        C: 'Contact AWS and submit a ticket to have your default S3 bucket size raised; ensure  that this is also applied to the target bucket for your web designers’ uploads.',
        D: 'Log in to the AWS console, select the S3 service, and locate your bucket. Edit the  bucket properties and increase the maximum object size to 50 GB.'
      },
      answer: 'B'
    },
    // Q4
    {
      question: 'For which of the following HTTP methods does S3 have eventual consistency? (Choose  two.)',
      choices: {
        A: 'PUTs of new objects',
        B: 'UPDATEs',
        C: 'DELETEs',
        D: 'PUTs that overwrite existing objectsReview Questions   3'
      },
      answer: [ 'C', 'D' ]
    },
    // Q5
    {
      question: 'What is the smallest file size that can be stored on standard class S3?',
      choices: {
        A: '1 byte',
        B: '1 MB',
        C: '0 bytes',
        D: '1 KB'
      },
      answer: 'C'
    },
    // Q6
    {
      question: 'You’ve just created a new S3 bucket named ytmProfilePictures in the US East 2 region.  You need the URL of the bucket for some programmatic access. What is the correct  bucket URL?',
      choices: {
        A: 'https://s3-us-east-2.amazonaws.com/ytmProfilePictures',
        B: 'https://s3-east-2.amazonaws.com/ytmProfilePictures',
        C: 'https://s3-us-east-2-ytmProfilePictures.amazonaws.com/',
        D: 'https://amazonaws.s3-us-east-2.com/ytmProfilePictures'
      },
      answer: 'A'
    },
    // Q7
    {
      question: 'You’ve just created a new S3 bucket named ytmProfilePictures in the US East 2 region and  created a folder at the root level of the bucket called  images/ . You’ve turned on website  hosting and asked your content team to upload images into the  images/  folder. At what  URL will these images be available through a web browser?',
      choices: {
        A: 'https://s3-us-east-2.amazonaws.com/ytmProfilePictures/images',
        B: 'https://s3-website-us-east-2.amazonaws.com/ytmProfilePictures/images',
        C: 'https://ytmProfilePictures.s3-website-us-east-2.amazonaws.com/images',
        D: 'https://ytmProfilePictures.s3-website.us-east-2.amazonaws.com/images'
      },
      answer: 'C'
    },
    // Q8
    {
      question: 'Which of the following statements is true?',
      choices: {
        A: 'The durability of S3 and S3-IA is the same.',
        B: 'The availability of S3 and S3-IA is the same.',
        C: 'The durability of S3 is greater than that of Glacier.',
        D: 'The durability of S3 is greater than that of S3-IA.'
      },
      answer: 'A'
    },
    // Q9
    {
      question: 'Which of the following statements is not true?',
      choices: {
        A: 'Standard S3, S3-IA, and S3 One Zone-IA all are equally durable.',
        B: 'The availability of S3-IA and S3 One Zone-IA are identical.',
        C: 'Standard S3, S3-IA, and S3 One Zone-IA all have different availabilities.',
        D: 'S3 One Zone-IA is as durable as standard S3.'
      },
      answer: 'B'
    },
    // Q10
    {
      question: 'Which of the following AWS services appear in the AWS console across all regions?  (Choose two.)',
      choices: {
        A: 'S3',
        B: 'EC2',
        C: 'IAM',
        D: 'RDS4   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'A', 'C' ]
    },
    // Q11
    {
      question: 'Amazon’s EBS volumes are  . (Choose two.)',
      choices: {
        A: 'Block-based storage',
        B: 'Object-based storage',
        C: 'Based on magnetic disk by default',
        D: 'Available in a variety of SSD and magnetic options'
      },
      answer: [ 'A', 'D' ]
    },
    // Q12
    {
      question: 'You have spent several days of your last DevOps sprint building an AMI upon which all  instances of your development team’s application should reside. The application will be  deployed into multiple regions and interact with multiple S3 buckets, and you now need  the new AMI in us-east-2 and us-west-2, in addition to us-east-1, where you created the  AMI. How can you make the new AMI available in us-east-2 and us-west-2?',
      choices: {
        A: 'Copy the AMI from us-east-1 to us-east-2 and us-west-2. Launch the new instances  using the copied AMI.',
        B: 'Ensure that all application instances share a security group. AMIs are available to all  instances within a security group, regardless of the region in which the AMI was created.',
        C: 'You can immediately launch the AMI, as all AMIs appear in all regions through the  AWS console.',
        D: 'Copy the AMI from us-east-1 to us-east-2 and us-west-2. Apply launch permissions  and S3 bucket permissions and then launch new instances using the updated AMI.'
      },
      answer: 'D'
    },
    // Q13
    {
      question: 'You have an S3 bucket and are working on cost estimates for your customer. She has  asked you about pricing of objects stored in S3. There are currently objects in the buck- ets ranging from 0 bytes to over 1 GB. In this situation, what is the smallest file size that  S3-IA will charge you for?',
      choices: {
        A: '1 byte',
        B: '1 MB',
        C: '0 bytes',
        D: '128 KB'
      },
      answer: 'D'
    },
    // Q14
    {
      question: 'You have been tasked with ensuring that data stored in your organization’s RDS instance  exists in  a minimum  of two geographically distributed locations. Which of the following  solutions are valid approaches? (Choose two.)',
      choices: {
        A: 'Enable RDS in a Multi-AZ configuration.',
        B: 'Enable RDS in a read replica configuration.',
        C: 'Install a storage gateway with stored volumes.',
        D: 'Enable RDS in a cross-region read replica configuration.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q15
    {
      question: 'Which of the following items are included in an Auto Scaling Launch Configuration?  (Choose two.)',
      choices: {
        A: 'The AMI to use for creating new instances',
        B: 'The EBS storage volume for the instances to create',
        C: 'The polling time for monitoring network latency',
        D: 'The IAM role to associate with created instancesReview Questions   5'
      },
      answer: [ 'A', 'D' ]
    },
    // Q16
    {
      question: 'Which of the following would you use for setting up AMIs from which new instances are  created in an Auto Scaling policy?',
      choices: {
        A: 'The Auto Scaling policy itself',
        B: 'The security group for the Auto Scaling policy',
        C: 'The Auto Scaling group used by the Auto Scaling policy',
        D: 'The launch configuration used by the Auto Scaling policy'
      },
      answer: 'D'
    },
    // Q17
    {
      question: 'You terminate an EC2 instance and find that the EBS root volume that was attached to  the instance was also deleted. How can you correct this?',
      choices: {
        A: 'You can’t. A root volume is always deleted when the EC2 instance attached to that  volume is deleted.',
        B: 'Take a snapshot of the EBS volume while the EC2 instance is running. Then, when  the EC2 instance is terminated, you can restore the EBS volume from the snapshot.',
        C: 'Remove termination protection from the EC2 instance.',
        D: 'Use the AWS CLS to change the DeleteOnTermination attribute for the EBS volume  to “false.”'
      },
      answer: 'D'
    },
    // Q18
    {
      question: 'In what manner are EBS snapshots backed up to S3?',
      choices: {
        A: 'Via full backup according to the backup policy set on the volume',
        B: 'Incrementally',
        C: 'Synchronously',
        D: 'EBS volumes are not stored on S3.'
      },
      answer: 'B'
    },
    // Q19
    {
      question: 'Can you attach an EBS volume to more than one EC2 instance at the same time?',
      choices: {
        A: 'Yes, as long as the volume is not the root volume.',
        B: 'No, EBS volumes cannot be attached to more than one instance at the same time.',
        C: 'Yes, as long as the volume is one of the SSD classes and not magnetic storage.',
        D: 'Yes, as long as at least one of the instances uses the volume as its root volume.'
      },
      answer: 'B'
    },
    // Q20
    {
      question: 'How does AWS allow you to add metadata to your EC2 instances? (Choose two.)',
      choices: {
        A: 'Certificates',
        B: 'Tags',
        C: 'Policies',
        D: 'Labels'
      },
      answer: [ 'A', 'B' ]
    },
    // Q21
    {
      question: 'Which of the following are valid criteria for determining which region to choose for your  S3 buckets? (Choose two.)',
      choices: {
        A: 'The distance between the region and your user base',
        B: 'The distance between the region and your on-premises operations',
        C: 'The distance between the region and other regions in your AWS account',
        D: 'The distance between the region and your development team6   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'A', 'B' ]
    },
    // Q22
    {
      question: 'Where are individual EC2 instances provisioned?',
      choices: {
        A: 'In a specific region',
        B: 'In a specific availability zone',
        C: 'In a random availability zone within a specified region',
        D: 'It depends upon the region.'
      },
      answer: 'B'
    },
    // Q23
    {
      question: 'Which of the following can be deployed across availability zones?',
      choices: {
        A: 'Cluster placement groups',
        B: 'Placement groups',
        C: 'Spread placement groups',
        D: 'Cross-region placement groups'
      },
      answer: 'C'
    },
    // Q24
    {
      question: 'Which of the following services is used at an on-premises site to build a site-to-site VPN  connection?',
      choices: {
        A: 'Storage gateway',
        B: 'Virtual private gateway',
        C: 'Customer gateway',
        D: 'Virtual private network'
      },
      answer: 'C'
    },
    // Q25
    {
      question: 'What is the anchor on the AWS side of a site-to-site VPN connection between an on- premises site and AWS?',
      choices: {
        A: 'IPSec tunnel',
        B: 'Virtual private gateway',
        C: 'Customer gateway',
        D: 'VPC'
      },
      answer: 'B'
    },
    // Q26
    {
      question: 'How many tunnels for network traffic are involved when a customer gateway connects to  an AWS VPC via an AWS-managed VPN connection?',
      choices: {
        A: 'One',
        B: 'Two',
        C: 'Three',
        D: 'It depends on the settings in the AWS VPC.'
      },
      answer: 'B'
    },
    // Q27
    {
      question: 'Choose the correct order in which traffic flows from an on-premises site to a VPC within  AWS when a VPN connection is used.',
      choices: {
        A: 'Customer gateway to Amazon VPC to virtual private gateway',
        B: 'Virtual private gateway to customer gateway to Amazon VPC',
        C: 'Amazon VPC to customer gateway to virtual private gateway',
        D: 'Customer gateway to virtual private gateway to Amazon VPCReview Questions   7'
      },
      answer: 'D'
    },
    // Q28
    {
      question: 'You are setting up a site-to-site VPN from an on-premises network into an AWS VPC.  Which of the following are steps you may need to perform? (Choose two.)',
      choices: {
        A: 'Set up a public IP address for the customer gateway.',
        B: 'Set up a public IP address for the AWS VP',
        C: '.   Set up a public IP address for the virtual private gateway.',
        D: 'Set up a public IP address for the VPN tunnels.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q29
    {
      question: 'Which of the following services is used at an on-premises site to connect to cloud-based  storage?',
      choices: {
        A: 'Storage gateway',
        B: 'Virtual private gateway',
        C: 'Customer gateway',
        D: 'Virtual private network'
      },
      answer: 'A'
    },
    // Q30
    {
      question: 'Which of the following are valid options for storage gateways? (Choose two.)',
      choices: {
        A: 'File gateway',
        B: 'Volume gateway',
        C: 'Cached gateway',
        D: 'Virtual private gateway'
      },
      answer: [ 'A', 'B' ]
    },
    // Q31
    {
      question: 'You are tasked with recommending a storage solution for a large company with a capital  investment in an NFS-based backup system. The company wants to investigate cloud- based storage but doesn’t want to lose its software investment either. Which type of stor- age gateway would you recommend?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Stored volume gateway',
        D: 'Tape gateway'
      },
      answer: 'A'
    },
    // Q32
    {
      question: 'You are helping a medium-sized business migrate its large datasets to the cloud. However,  the business has limited resources and has long used a tape backup system. It does not  want to lose the investment in the software and systems that already have been configured  to use this backup system. Which storage gateway would you recommend?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Stored volume gateway',
        D: 'Tape gateway8   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'D'
    },
    // Q33
    {
      question: 'You are tasked with prototyping a cloud-based storage solution for a small business. The  business’s chief concern is low network latency, as its systems need near-instant access to  all of its datasets. Which storage gateway would you recommend?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Stored volume gateway',
        D: 'Tape gateway'
      },
      answer: 'C'
    },
    // Q34
    {
      question: 'You are the solutions architect for a mapping division that has inherited a massive geospa- tial dataset from a recent acquisition. The data is all on local disk drives, and you want to  transition the data to AWS. With datasets of over 10 TB, what is the best approach to get- ting this data into AWS?',
      choices: {
        A: 'S3 with Transfer Acceleration',
        B: 'Cached volume gateway',
        C: 'Snowball',
        D: 'Shipping the drives to AWS'
      },
      answer: 'C'
    },
    // Q35
    {
      question: 'Which of the following are not reasons to use a cached volumes storage gateway? (Choose  two.)',
      choices: {
        A: 'You want low-latency access to your entire dataset.',
        B: 'You want to reduce the cost of on-site storage.',
        C: 'You want to support iSCSI storage volumes.',
        D: 'You want low-latency access to your most commonly accessed data.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q36
    {
      question: 'Which of the following storage gateway options is best for traditional backup applications?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Stored volume gateway',
        D: 'Tape gateway'
      },
      answer: 'A'
    },
    // Q37
    {
      question: 'Which of the following storage gateway options is best for applications where latency of  specific portions of your entire dataset is the priority?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Stored volume gateway',
        D: 'Tape gateway'
      },
      answer: 'B'
    },
    // Q38
    {
      question: 'Which of the following storage gateway options is best for applications where latency of  your entire dataset is the priority?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Stored volume gateway',
        D: 'Tape gatewayReview Questions   9'
      },
      answer: 'C'
    },
    // Q39
    {
      question: 'Which of the following storage gateway options is best for reducing the costs associated  with an off-site disaster recovery solution?',
      choices: {
        A: 'File gateway',
        B: 'Cached volume gateway',
        C: 'Stored volume gateway',
        D: 'Tape gateway'
      },
      answer: 'D'
    },
    // Q40
    {
      question: 'Which of the following storage classes is optimized for long-term data storage at the  expense of retrieval time?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'Glacier'
      },
      answer: 'D'
    },
    // Q41
    {
      question: 'Which of the following need to be considered across all regions in your account? (Choose  two.)',
      choices: {
        A: 'Launch configurations',
        B: 'IAM users',
        C: 'EC2 instances',
        D: 'S3 bucket names'
      },
      answer: [ 'B', 'D' ]
    },
    // Q42
    {
      question: 'What HTTP code would you expect after a successful upload of an object to an S3  bucket?',
      choices: {
        A: 'HTTP 200',
        B: 'HTTP 307',
        C: 'HTTP 404',
        D: 'HTTP 501'
      },
      answer: 'A'
    },
    // Q43
    {
      question: 'What is the durability of S3 One Zone-IA?',
      choices: {
        A: '99.0%',
        B: '99.9%',
        C: '99.99%',
        D: '99.999999999%'
      },
      answer: 'D'
    },
    // Q44
    {
      question: 'What is the durability of S3-IA?',
      choices: {
        A: '99.0%',
        B: '99.9%',
        C: '99.99%',
        D: '99.999999999%10   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'D'
    },
    // Q45
    {
      question: 'What is the durability of S3?',
      choices: {
        A: '99.0%',
        B: '99.9%',
        C: '99.99%',
        D: '99.999999999%'
      },
      answer: 'D'
    },
    // Q46
    {
      question: 'What is the availability of S3 One Zone-IA?',
      choices: {
        A: '99.5%',
        B: '99.9%',
        C: '99.99%',
        D: '99.999999999%'
      },
      answer: 'A'
    },
    // Q47
    {
      question: 'What is the availability of S3-IA?',
      choices: {
        A: '99.5%',
        B: '99.9%',
        C: '99.99%',
        D: '99.999999999%'
      },
      answer: 'B'
    },
    // Q48
    {
      question: 'What is the availability of S3?',
      choices: {
        A: '99.5%',
        B: '99.9%',
        C: '99.99%',
        D: '99.999999999%'
      },
      answer: 'C'
    },
    // Q49
    {
      question: 'Which S3 storage class supports SSL for data in transit?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q50
    {
      question: 'Which S3 storage class supports encryption for data at rest?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q51
    {
      question: 'For which of the following storage classes do you need to specify a region?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'All of the aboveReview Questions   11'
      },
      answer: 'D'
    },
    // Q52
    {
      question: 'For which of the following storage classes do you need to specify an availability zone?',
      choices: {
        A: 'S3',
        B: 'S3-IA',
        C: 'S3 One Zone-IA',
        D: 'None of the above'
      },
      answer: 'D'
    },
    // Q53
    {
      question: 'How does S3 store your objects?',
      choices: {
        A: 'As key-value pairs',
        B: 'As relational entries.',
        C: 'Using a NoSQL interface',
        D: 'As blocks in a block storage'
      },
      answer: 'A'
    },
    // Q54
    {
      question: 'In what ways can you access your data stored in S3 buckets? (Choose two.)',
      choices: {
        A: 'Through FTP access to the bucket',
        B: 'Through SFTP access to the bucket',
        C: 'Through a REST-based web service interface',
        D: 'Through the AWS console'
      },
      answer: [ 'C', 'D' ]
    },
    // Q55
    {
      question: 'Which of the following are true about S3 data access when traffic spikes (increases)?  (Choose two.)',
      choices: {
        A: 'S3 will scale to handle the load if you have Auto Scaling set up.',
        B: 'S3 will scale automatically to ensure your service is not interrupted.',
        C: 'Scale spreads evenly across AWS network to minimize the effect of a spike.',
        D: 'A few instances are scaled up dramatically to minimize the effect of the spike.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q56
    {
      question: 'You have been tasked with helping a company migrate its expensive off-premises storage  to AWS. It will still primarily back up files from its on-premises location to a local NAS.  These files then need to be stored off-site (in AWS rather than the original off-site loca- tion). The company is concerned with durability and cost and wants to retain quick access  to its files. What should you recommend?',
      choices: {
        A: 'Copying files from the NAS to an S3 standard class bucket',
        B: 'Copying files from the NAS to an S3 One Zone-IA class bucket',
        C: 'Copying the files from the NAS to EBS volumes with provisioned IOPS',
        D: 'Copying the files from the NAS to Amazon Glacier'
      },
      answer: 'B'
    },
    // Q57
    {
      question: 'Which S3 storage class would you recommend if you were building out storage for an  application that you anticipated growing in size exponentially over the next 12 months?',
      choices: {
        A: 'Amazon Glacier',
        B: 'S3 standard',
        C: 'S3-IA',
        D: 'There is not enough information to make a good decision.12   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'D'
    },
    // Q58
    {
      question: 'How many S3 buckets can you create per AWS account, by default?',
      choices: {
        A: '25',
        B: '50',
        C: '100',
        D: 'There is not a default limit.'
      },
      answer: 'C'
    },
    // Q59
    {
      question: 'How are objects uploaded to S3 by default?',
      choices: {
        A: 'In parts',
        B: 'In a single operation',
        C: 'You must configure this option for each S3 bucket explicitly.',
        D: 'Via the REST API'
      },
      answer: 'B'
    },
    // Q60
    {
      question: 'When does AWS suggest you start uploading objects via the Multipart Upload API?',
      choices: {
        A: 'When you’re uploading a lot of files at once',
        B: 'When you’re uploading files of 10 GB or more',
        C: 'When you have multiple applications uploading files to the same S3 bucket',
        D: 'When you need the greatest network throughput for uploads'
      },
      answer: 'B'
    },
    // Q61
    {
      question: 'Which of the following are the ways you should consider using Multipart Upload?',
      choices: {
        A: 'For uploading large objects over a stable high-bandwidth network to maximize   bandwidth',
        B: 'For uploading large objects to reduce the cost of ingress related to those objects',
        C: 'For uploading any size files over a spotty network to increase resiliency',
        D: 'For uploading files that must be appended to existing files'
      },
      answer: 'A,C'
    },
    // Q62
    {
      question: 'How is a presigned URL different from a normal URL? (Choose two.)',
      choices: {
        A: 'A presigned URL has permissions associated with certain objects provided by the   creator of the URL.',
        B: 'A presigned URL has permissions associated with certain objects provided by the  user of the URL.',
        C: 'A presigned URL allows access to private S3 buckets without requiring AWS   credentials.',
        D: 'A presigned URL includes encrypted credentials as part of the URL.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q63
    {
      question: 'Which of the following can be put behind a presigned URL?',
      choices: {
        A: 'An S3 object store',
        B: 'An EC2 instance with a web interface',
        C: 'An AWS CloudFront distribution',
        D: 'All of the aboveReview Questions   13'
      },
      answer: 'D'
    },
    // Q64
    {
      question: 'How long is a presigned URL valid?',
      choices: {
        A: '60 seconds',
        B: '60 minutes',
        C: '24 hours',
        D: 'As long as it is configured to last'
      },
      answer: 'D'
    },
    // Q65
    {
      question: 'Which of the following HTTP methods with regard to S3 have eventual consistency?  (Choose two.)',
      choices: {
        A: 'UPDATEs',
        B: 'DELETEs',
        C: 'PUTs of new objects',
        D: 'Over write PU Ts'
      },
      answer: [ 'B', 'D' ]
    },
    // Q66
    {
      question: 'Which of the following behaviors is consistent with how S3 handles object operations on a  bucket?',
      choices: {
        A: 'A process writes a new object to Amazon S3 and immediately lists keys within its  bucket. The new object does not appear in the list of keys.',
        B: 'A process deletes an object, attempts to immediately read the deleted object, and S3  still returns the deleted data.',
        C: 'A process deletes an object and immediately lists the keys in the bucket. S3 returns a  list with the deleted object in the list.',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q67
    {
      question: 'In which regions does Amazon S3 offer eventual consistency for overwrite PUTs and  DELETEs?',
      choices: {
        A: 'All US regions',
        B: 'All US and EU regions',
        C: 'All regions',
        D: 'No regions, eventual consistency is not the model for overwrite PUTs.'
      },
      answer: 'C'
    },
    // Q68
    {
      question: 'Which of the following storage media are object based? (Choose two.)',
      choices: {
        A: 'S3-IA',
        B: 'EBS',
        C: 'EFS',
        D: 'S3 standard'
      },
      answer: [ 'A', 'D' ]
    },
    // Q69
    {
      question: 'EBS stands for what?',
      choices: {
        A: 'Elastic Based Storage',
        B: 'Elastic Block Storage',
        C: 'Extra Block Storage',
        D: 'Ephemeral Block Storage14   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'B'
    },
    // Q70
    {
      question: 'What is the consistency model in S3 for PUTs of new objects?',
      choices: {
        A: 'Write after read consistency',
        B: 'Read after write consistency',
        C: 'Eventual consistency',
        D: 'Synchronous consistency'
      },
      answer: 'B'
    },
    // Q71
    {
      question: 'How many PUTs per second does S3 support?',
      choices: {
        A: '100',
        B: '1500',
        C: '3500',
        D: '5000'
      },
      answer: 'C'
    },
    // Q72
    {
      question: 'You have been asked to create a new S3 bucket with the name prototypeBucket32 in the  US West region. What would the URL for this bucket be?',
      choices: {
        A: 'https://s3-us-east-1.amazonaws.com/prototypeBucket32',
        B: 'https://s3-us-west-1.amazonaws.com/prototypeBucket32',
        C: 'https://s3.prototypeBucket32-us-east-1.amazonaws.com/',
        D: 'https://s3-prototypeBucket32.us-east-1.amazonaws.com/'
      },
      answer: 'B'
    },
    // Q73
    {
      question: 'What unique domain name do S3 buckets created in US East (N. Virginia) have, as com- pared to other regions?',
      choices: {
        A: 's3.amazonaws.com',
        B: 's3-us-east-1.amazonaws.com',
        C: 's3-us-east.amazonaws.com',
        D: 's3-amazonaws.com'
      },
      answer: 'A'
    },
    // Q74
    {
      question: 'Which of the following are valid domain names for S3 buckets? (Choose two.)',
      choices: {
        A: 's3.us-east-1.amazonaws.com',
        B: 's3-us-west-2.amazonaws.com',
        C: 's3.amazonaws.com',
        D: 's3-jp-west-2.amazonaws.com'
      },
      answer: [ 'B', 'C' ]
    },
    // Q75
    {
      question: 'What are the two styles of URLs that AWS supports for S3 bucket access? (Choose two.)',
      choices: {
        A: 'Virtual-hosted-style URLs',
        B: 'Domain-hosted-style URLs',
        C: 'Apex zone record URLs',
        D: 'Path-style URLsReview Questions   15'
      },
      answer: [ 'A', 'D' ]
    },
    // Q76
    {
      question: 'Which of the following are valid URLs for accessing S3 buckets? (Choose two.)',
      choices: {
        A: 'https://s3-us-west-1-prototypeBucket32.amazonaws.com/',
        B: 'https://s3-us-west-1.amazonaws.com/prototypeBucket32',
        C: 'https://s3-mx-central-1.amazonaws.com/prototypeBucket32',
        D: 'https://prototypeBucket32.s3-us-west-1.amazonaws.com'
      },
      answer: [ 'B', 'D' ]
    },
    // Q77
    {
      question: 'What is an AWS storage gateway?',
      choices: {
        A: 'A device to reside at a customer site that is part of a VPN connection between an on- premises site and AWS',
        B: 'A device that enables an on-premises site to upload files to S3 faster than over the  public Internet',
        C: 'A device to facilitate large data migrations into S3',
        D: 'A device that can be used to cache S3-stored objects at an on-premises site'
      },
      answer: 'D'
    },
    // Q78
    {
      question: 'Which of the following statements is not true about an AWS storage gateway?',
      choices: {
        A: 'It is a virtual appliance.',
        B: 'It is available as both a physical and virtual appliance.',
        C: 'It caches data locally at a customer site.',
        D: 'It interacts with S3 buckets.'
      },
      answer: 'B'
    },
    // Q79
    {
      question: 'Which of the following are not true about S3? (Choose two.)',
      choices: {
        A: 'Buckets are created in specific regions.',
        B: 'Bucket names exist in a per-region namespace.',
        C: 'Buckets are object-based.',
        D: 'Each S3 bucket stores up to 5 TB of object data.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q80
    {
      question: 'Which of the following consistency models are supported by S3? (Choose two.)',
      choices: {
        A: 'Read after write consistency',
        B: 'Synchronous consistency',
        C: 'Write after read consistency',
        D: 'Eventual consistency'
      },
      answer: [ 'A', 'D' ]
    },
    // Q81
    {
      question: 'Every object in S3 has a  . (Choose two.)',
      choices: {
        A: 'Key',
        B: 'Value',
        C: 'Both A and B',
        D: 'Version ID16   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'C', 'D' ]
    },
    // Q82
    {
      question: 'Which of the following is the best approach to ensuring that objects in your S3 buckets  are not accidentally deleted?',
      choices: {
        A: 'Restrictive bucket permissions',
        B: 'Enabling versioning on buckets',
        C: 'Enabling MFA Delete on buckets',
        D: 'All of these options are equally useful.'
      },
      answer: 'C'
    },
    // Q83
    {
      question: 'What HTTP request header is used by MFA Delete requests?',
      choices: {
        A: 'x-delete',
        B: 'x-amz-mfa',
        C: 'x-aws-mfa',
        D: 'x-amz-delete'
      },
      answer: 'B'
    },
    // Q84
    {
      question: 'Which of the following operations will take advantage of MFA Delete, if it is enabled?  (Choose two.)',
      choices: {
        A: 'Deleting an S3 bucket',
        B: 'Changing the versioning state of a bucket',
        C: 'Permanently deleting an object version',
        D: 'Deleting an object’s metadata'
      },
      answer: [ 'B', 'C' ]
    },
    // Q85
    {
      question: 'When using an MFA Delete–enabled bucket to delete an object, from where does the  authentication code come?',
      choices: {
        A: 'A hardware or virtual MFA device',
        B: 'The token section of the AWS console',
        C: 'The AWS REST API under delete-codes in a bucket’s metadata',
        D: 'None of these'
      },
      answer: 'A'
    },
    // Q86
    {
      question: 'Who can enable MFA Delete on an S3 bucket?',
      choices: {
        A: 'All authorized IAM users of the bucket',
        B: 'All authorized IAM users that can update the bucket',
        C: 'The bucket owner',
        D: 'The root account that owns the bucket'
      },
      answer: 'D'
    },
    // Q87
    {
      question: 'Who can enable versioning on an S3 bucket?',
      choices: {
        A: 'All authorized IAM users of the bucket',
        B: 'A, C, and D',
        C: 'The bucket owner',
        D: 'The root account that owns the bucketReview Questions   17'
      },
      answer: 'B'
    },
    // Q88
    {
      question: 'Which of the following exist and are attached to an object stored in S3? (Choose two.)',
      choices: {
        A: 'Metadata',
        B: 'Data',
        C: 'Authentication ID',
        D: 'Version history'
      },
      answer: [ 'A', 'B' ]
    },
    // Q89
    {
      question: 'Which of the following is the AWS mechanism for adding object metadata using the AWS  console?',
      choices: {
        A: 'Labels',
        B: 'Tags',
        C: 'Metadata',
        D: 'Object name'
      },
      answer: 'B'
    },
    // Q90
    {
      question: 'Which of the following is the exception to S3 storing all versions of an object?',
      choices: {
        A: 'When an object is deleted via MFA Delete',
        B: 'When all of the versions of an object are deleted',
        C: 'When an object’s current version is deleted',
        D: 'There are no exceptions.'
      },
      answer: 'D'
    },
    // Q91
    {
      question: 'You have an S3 bucket with versioning enabled. How can you turn off versioning?',
      choices: {
        A: 'Update the bucket properties in the AWS console and turn off versioning.',
        B: 'Versioning can only be turned off through the AWS CLI or API. Use your application  keys to change versioning to “off” on the bucket.',
        C: 'Send a message to the S3 bucket using the HTML request header x-amz-versioning  and the value of “off.”',
        D: 'You can’t turn off versioning once it has been enabled.'
      },
      answer: 'D'
    },
    // Q92
    {
      question: 'CloudFront is a web service for distributing what type of content? (Choose two.)',
      choices: {
        A: 'Object-based storage',
        B: 'Static files',
        C: 'Script-generated or programmatically generated dynamic content',
        D: 'All of the above'
      },
      answer: [ 'B', 'C' ]
    },
    // Q93
    {
      question: 'What are the sources of information that CloudFront serves data from called?',
      choices: {
        A: 'Service providers',
        B: 'Source servers',
        C: 'Static servers',
        D: 'Origin servers18   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'D'
    },
    // Q94
    {
      question: 'Which of the following are typical origin servers for a CloudFront distribution? (Choose  two.)',
      choices: {
        A: 'EC2 instances',
        B: 'Amazon Glacier archives',
        C: 'API Gateway',
        D: 'S3 buckets'
      },
      answer: [ 'A', 'D' ]
    },
    // Q95
    {
      question: 'Which of the following are not origin servers for a CloudFront distribution? (Choose  two.)',
      choices: {
        A: 'Docker containers running on ECS',
        B: 'MySQL ResultSet',
        C: 'S3 buckets',
        D: 'Redshift workloads'
      },
      answer: [ 'B', 'D' ]
    },
    // Q96
    {
      question: 'What is the location where content will be cached in a CloudFront distribution called?',
      choices: {
        A: 'Availability zone',
        B: 'Edge location',
        C: 'Remote location',
        D: 'Origin edge'
      },
      answer: 'B'
    },
    // Q97
    {
      question: 'Which of the following are not origin servers for a CloudFront distribution? (Choose  two.)',
      choices: {
        A: 'Elastic load balancer',
        B: 'Route 53 recordsets',
        C: 'SQS subscription endpoint',
        D: 'SNS topic retrieval endpoint'
      },
      answer: [ 'C', 'D' ]
    },
    // Q98
    {
      question: 'What is a collection of edge locations called?',
      choices: {
        A: 'Region',
        B: 'Availability zone',
        C: 'CloudFront',
        D: 'Distribution'
      },
      answer: 'D'
    },
    // Q99
    {
      question: 'Rank the total number of regions, availability zones, and edge locations in order from the  least number to the greatest number.',
      choices: {
        A: 'Availability zones < regions < edge locations',
        B: 'Regions < availability zones < edge locations',
        C: 'Edge locations < regions < availability zones',
        D: 'Edge locations < availability zones < regionsReview Questions   19'
      },
      answer: 'B'
    },
    // Q100
    {
      question: 'Which of the following statements are true? (Choose two.)',
      choices: {
        A: 'There are more edge locations than availability zones.',
        B: 'There are fewer regions than edge locations.',
        C: 'There are fewer edge locations than availability zones.',
        D: 'Each availability zone has a corresponding edge location.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q101
    {
      question: 'Which of the following store content that is served to users in a CloudFront-enabled web  application? (Choose two.)',
      choices: {
        A: 'Availability zones',
        B: 'Edge locations',
        C: 'Route 53',
        D: 'EC2 instances'
      },
      answer: [ 'B', 'D' ]
    },
    // Q102
    {
      question: 'Which of the following are true about edge locations? (Choose two.)',
      choices: {
        A: 'Edge locations are readable.',
        B: 'Edge locations are read-only.',
        C: 'Edge locations are write-only.',
        D: 'Edge locations are writable.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q103
    {
      question: 'To which of the following can objects be written? (Choose two.)',
      choices: {
        A: 'Edge locations',
        B: 'EC2 instances',
        C: 'S3 buckets',
        D: 'Availability zones'
      },
      answer: [ 'A', 'C' ]
    },
    // Q104
    {
      question: 'What does TTL stand for?',
      choices: {
        A: 'Time to Live',
        B: 'Total Time to Live',
        C: 'Total traffic life',
        D: 'Traffic total life'
      },
      answer: 'A'
    },
    // Q105
    {
      question: 'You support a web application that uses a CloudFront distribution. A banner ad that  was posted the previous night at midnight has an error in it, and you’ve been tasked with  removing the ad so that users don’t see the error. What steps should you take? (Choose  two.)',
      choices: {
        A: 'Delete the banner image from S3.',
        B: 'Remove the ad from the website.',
        C: 'Wait for 24 hours and the edge locations will automatically expire the ad from their  caches.',
        D: 'Clear the cached object manually.20   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'B', 'D' ]
    },
    // Q106
    {
      question: 'By default, how long do edge locations cache objects?',
      choices: {
        A: '12 hours',
        B: '24 hours',
        C: '48 hours',
        D: '360 minutes'
      },
      answer: 'B'
    },
    // Q107
    {
      question: 'What is the default visibility of a newly created S3 bucket?',
      choices: {
        A: 'Public',
        B: 'Private',
        C: 'Public to registered IAM users of your account',
        D: 'None of the above'
      },
      answer: 'B'
    },
    // Q108
    {
      question: 'Which of the following are valid ways to set up access to your buckets? (Choose two.)',
      choices: {
        A: 'NACLs',
        B: 'ACLs',
        C: 'Bucket policies',
        D: 'JSON'
      },
      answer: [ 'B', 'C' ]
    },
    // Q109
    {
      question: 'Which of the following languages is used for writing bucket policies?',
      choices: {
        A: 'XML',
        B: 'YA ML',
        C: 'JSON',
        D: 'AML'
      },
      answer: 'C'
    },
    // Q110
    {
      question: 'How are datasets utilized by stored volumes backed up to S3?',
      choices: {
        A: 'Asynchronously',
        B: 'Synchronously',
        C: 'The backup method is specified by the user at configuration time.',
        D: 'Synchronously unless the backup takes more than 2 seconds; then the backup  switches to asynchronous'
      },
      answer: 'A'
    },
    // Q111
    {
      question: 'Which of the following is equivalent to a tape volume?',
      choices: {
        A: 'VTL',
        B: 'VPC',
        C: 'NetBackup',
        D: 'VPN'
      },
      answer: 'A'
    },
    // Q112
    {
      question: 'What is Amazon’s petabyte-scale data transport solution?',
      choices: {
        A: 'Snowball',
        B: 'Glacier',
        C: 'Transfer Acceleration',
        D: 'Edge transportReview Questions   21'
      },
      answer: 'A'
    },
    // Q113
    {
      question: 'What language(s) are supported by Snowball?',
      choices: {
        A: 'Perl, PHP',
        B: 'JSON, YA ML',
        C: 'CloudFormation',
        D: 'None of these'
      },
      answer: 'D'
    },
    // Q114
    {
      question: 'When should you use AWS Direct Connect instead of Snowball?',
      choices: {
        A: 'AWS Direct Connect is usually a better option than Snowball.',
        B: 'AWS Direct Connect is almost never a better option than Snowball.',
        C: 'If you have more than 50 TB of data to transfer, use Snowball.',
        D: 'If you have less than 50 TB of data to transfer, use Snowball.'
      },
      answer: 'A'
    },
    // Q115
    {
      question: 'What is the difference between Snowball and Snowball Edge?',
      choices: {
        A: 'Snowball is for data transfer; Snowball Edge provides local data processing prior to  returning the data to AWS.',
        B: 'Snowball Edge is for data transfer; Snowball provides local data processing prior to  returning the data to AWS.',
        C: 'Snowball and Snowball Edge are both for data transfer, but Snowball Edge offers  caching when the data arrives at AWS.',
        D: 'Snowball and Snowball Edge are both for data transfer, but Snowball Edge offers  additional storage capacity.'
      },
      answer: 'A'
    },
    // Q116
    {
      question: 'Which of the following can Snowball do?',
      choices: {
        A: 'Import data into S3 (but not export data)',
        B: 'Export data from S3 (but not import data)',
        C: 'Import data into S3 and export data from S3',
        D: 'Snowball can import data into S3, but only Snowball Edge can export data from S3.'
      },
      answer: 'C'
    },
    // Q117
    {
      question: 'What is the main benefit of decoupling an application?',
      choices: {
        A: 'To enforce different security models',
        B: 'To enforce different network transport models',
        C: 'To reduce interdependencies to isolate failures from an entire application',
        D: 'To reduce network connections to improve performance'
      },
      answer: 'C'
    },
    // Q118
    {
      question: 'Which of the following AWS services provides analytic data warehouse provisioning and  tooling?',
      choices: {
        A: 'Aurora',
        B: 'ElastiCache',
        C: 'DynamoDB',
        D: 'Redshift22   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'D'
    },
    // Q119
    {
      question: 'Which of the following is a basic principle of fault tolerance in AWS?',
      choices: {
        A: 'Launch instances in separate VPCs.',
        B: 'Launch instances in separate regions.',
        C: 'Launch instances in separate subnets.',
        D: 'Launch instances in edge locations.'
      },
      answer: 'B'
    },
    // Q120
    {
      question: 'Which of the following services use AWS edge locations?',
      choices: {
        A: 'CloudFront',
        B: 'Customer gateway',
        C: 'Storage gateway',
        D: 'Snowball'
      },
      answer: 'A'
    },
    // Q121
    {
      question: 'Which of the following is a benefit of running an application in two availability zones?',
      choices: {
        A: 'It is more secure than running an application in a single availability zone.',
        B: 'It is more performant than running an application in a single availability zone.',
        C: 'It increases the fault tolerance of running an application in a single availability zone.',
        D: 'It decreases the network latency of running an application in a single availability zone.'
      },
      answer: 'C'
    },
    // Q122
    {
      question: 'Which of the following AWS services can be used to store files? (Choose two.)',
      choices: {
        A: 'Amazon Athena',
        B: 'S3',
        C: 'MySQL',
        D: 'EBS'
      },
      answer: [ 'B', 'D' ]
    },
    // Q123
    {
      question: 'Which of the following AWS services can be used to store large objects? (Choose two.)',
      choices: {
        A: 'Redshift',
        B: 'S3',
        C: 'Oracle',
        D: 'EC2'
      },
      answer: [ 'B', 'C' ]
    },
    // Q124
    {
      question: 'How would you speed up transfers of data to S3?',
      choices: {
        A: 'Use Snowball to transfer large files more quickly.',
        B: 'Enable S3 Transfer Acceleration.',
        C: 'Configure AWS to use multiple network paths to your S3 bucket.',
        D: 'Configure AWS to use an internet gateway for routing traffic to your S3 buckets.'
      },
      answer: 'B'
    },
    // Q125
    {
      question: 'What users would benefit most from S3 Transfer Acceleration?',
      choices: {
        A: 'Users geographically closest to your S3 buckets',
        B: 'Users geographically farthest from your S3 buckets',
        C: 'Users taking advantage of HTTPS for uploads',
        D: 'All users equally benefit.Review Questions   23'
      },
      answer: 'B'
    },
    // Q126
    {
      question: 'Which of the following are good reasons to use S3 Transfer Acceleration? (Choose two.)',
      choices: {
        A: 'You have customers that upload to your buckets from around the world.',
        B: 'You have customers complaining about performance of your applications.',
        C: 'You transfer gigabytes of data on a regular basis across continents.',
        D: 'You are seeing network latency in uploads to your S3 buckets.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q127
    {
      question: 'Which services can you use to host websites? (Choose two.)',
      choices: {
        A: 'EC2',
        B: 'Elastic Load Balancing',
        C: 'S3',
        D: 'Glacier'
      },
      answer: [ 'A', 'C' ]
    },
    // Q128
    {
      question: 'You have a bucket called newyorkhotdogs in US West 1. You have enabled static website  hosting on this bucket and want to provide its URL to beta customers. What URL should  you provide?',
      choices: {
        A: 'http://newyorkhotdogs.s3-website.us-west-1.amazonaws.com',
        B: 'https://s3-us-west-1.amazonaws.com/newyorkhotdogs',
        C: 'http://newyorkhotdogs.s3-website-us-west-1.amazonaws.com',
        D: 'http://newyorkhotdogs.s3-website.us-east-1.amazonaws.com'
      },
      answer: 'C'
    },
    // Q129
    {
      question: 'You have created a static website and posted an HTML page as home.html in the root  level of your S3 bucket. The bucket is named californiaroll and is located in US West 2. At  what URL can you access the HTML page?',
      choices: {
        A: 'http://californiaroll.s3-website.us-west-1.amazonaws.com/home.html',
        B: 'http://s3-website-us-west-1.amazonaws.com/californiaroll/home.html',
        C: 'http://californiaroll.s3-website-us-west-2.amazonaws.com/public_html/ home.html',
        D: 'http://californiaroll.s3-website-us-west-1.amazonaws.com/home.html'
      },
      answer: 'D'
    },
    // Q130
    {
      question: 'You have a variety of images with names like  image-001.jpg  and  image-002.jpg  in an  S3 bucket named phoneboothPhotos created in the EU West 1 region. You have enabled  website hosting on this bucket. Which URL would allow access to the photos?',
      choices: {
        A: 'http://phoneboothPhotos.s3-website-eu-west-1.amazonaws.com/  phoneboothPhotos/image-001.jpg',
        B: 'http://phoneboothPhotos.s3-website-eu-west-1.amazonaws.com/  phoneboothphotos/image-001.jpg',
        C: 'http://phoneboothPhotos.s3-website-eu-west-1.amazonaws.com/  public_html/phoneboothPhotos/image-001.jpg',
        D: 'http://phoneboothPhotos.s3-website.eu-west-1.amazonaws.com/  phoneboothPhotos/image-001.jpg24   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'A'
    },
    // Q131
    {
      question: 'You have your own custom domain and want to host a static website on that domain. You  also want to minimize compute costs. Which of the following AWS services would you use  to host your website on your custom domain? (Choose two.)',
      choices: {
        A: 'S3',
        B: 'EC2',
        C: 'Lambda',
        D: 'Route 53'
      },
      answer: [ 'A', 'D' ]
    },
    // Q132
    {
      question: 'You have your own custom domain and want to host a dynamic website on that domain.  You also want to minimize compute costs. Which of the following AWS services would  you use to host your website on your custom domain? (Choose two.)',
      choices: {
        A: 'S3',
        B: 'EC2',
        C: 'Lambda',
        D: 'Route 53'
      },
      answer: [ 'C', 'D' ]
    },
    // Q133
    {
      question: 'Which of the following provide capability for serverless websites? (Choose two.)',
      choices: {
        A: 'S3',
        B: 'EC2',
        C: 'Lambda',
        D: 'Route 53'
      },
      answer: [ 'A', 'C' ]
    },
    // Q134
    {
      question: 'Which of the following provide capability for dynamic websites? (Choose two.)',
      choices: {
        A: 'S3',
        B: 'EC2',
        C: 'Lambda',
        D: 'Route 53'
      },
      answer: [ 'B', 'C' ]
    },
    // Q135
    {
      question: 'Which of the following does Elastic Beanstalk provide? (Choose two.)',
      choices: {
        A: 'Deployment of code',
        B: 'Security',
        C: 'Capacity provisioning',
        D: 'Cost optimization'
      },
      answer: [ 'A', 'C' ]
    },
    // Q136
    {
      question: 'Which of the following does Elastic Beanstalk not provide? (Choose two.)',
      choices: {
        A: 'Deployment of code',
        B: 'Security hardening',
        C: 'Application health monitoring',
        D: 'Log inspection and backupReview Questions   25'
      },
      answer: [ 'B', 'D' ]
    },
    // Q137
    {
      question: 'Which of the following does Elastic Beanstalk support? (Choose two.)',
      choices: {
        A: 'Docker',
        B: 'C++',
        C: 'Scala',
        D: 'Node.js'
      },
      answer: [ 'A', 'D' ]
    },
    // Q138
    {
      question: 'Which of the following application types does Elastic Beanstalk support?',
      choices: {
        A: 'Node.js',
        B: 'Java',
        C: 'Python',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q139
    {
      question: 'Which of the following database technologies does Elastic Beanstalk support? (Choose  two.)',
      choices: {
        A: 'All AWS-supported RDS options',
        B: 'DynamoDB',
        C: 'Oracle running on EC2',
        D: 'Redshift'
      },
      answer: [ 'A', 'B' ]
    },
    // Q140
    {
      question: 'How do you convert application code managed by Elastic Beanstalk from test to   production?',
      choices: {
        A: 'Update the codebase to use a production-driven CloudFormation file.',
        B: 'Update the database connection string in your application code.',
        C: 'Set the Elastic Beanstalk environment to use your production database in that par- ticular environment’s Elastic Beanstalk configuration.',
        D: 'You cannot deploy to production using Elastic Beanstalk.'
      },
      answer: 'C'
    },
    // Q141
    {
      question: 'Which AWS service allows you to run code without provisioning any of the underlying  resources required by that code?',
      choices: {
        A: 'EC2',
        B: 'ECS',
        C: 'DynamoDB',
        D: 'Lambda'
      },
      answer: 'D'
    },
    // Q142
    {
      question: 'Which of the following AWS services allow you to run code without worrying about pro- visioning specific resources for that code? (Choose two.)',
      choices: {
        A: 'Elastic Beanstalk',
        B: 'ECS',
        C: 'DynamoDB',
        D: 'Lambda26   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q143
    {
      question: 'Do Lambda functions run on servers?',
      choices: {
        A: 'Yes, they automatically spin up an EC2 instance as needed without user intervention.',
        B: 'Yes, you must provide an existing EC2 instance to run on.',
        C: 'No, Lambda code runs purely in the cloud without a server involved.',
        D: 'No, Lambda code runs in a container.'
      },
      answer: 'A'
    },
    // Q144
    {
      question: 'Which of the following languages work on Lambda? (Choose two.)',
      choices: {
        A: 'JavaScript',
        B: 'Node.js',
        C: 'Scala',
        D: 'C++'
      },
      answer: [ 'A', 'B' ]
    },
    // Q145
    {
      question: 'Which of the following are reasons to use Lambda versus EC2? (Choose two.)',
      choices: {
        A: 'You need to install Oracle and want to avoid compute costs.',
        B: 'Your code primarily responds to events from other AWS services.',
        C: 'Your primary concern is scaling.',
        D: 'You want to deploy your own Docker containers.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q146
    {
      question: 'What AWS service converts media files to formats suitable for different sized devices?',
      choices: {
        A: 'Elastic Transcoder',
        B: 'SWF',
        C: 'Lightsail',
        D: 'Elastic Beanstalk'
      },
      answer: 'A'
    },
    // Q147
    {
      question: 'What AWS service is ideal for gathering business intelligence from multiple data sources?',
      choices: {
        A: 'Lightsail',
        B: 'QuickSight',
        C: 'CloudTrail',
        D: 'RDS'
      },
      answer: 'B'
    },
    // Q148
    {
      question: 'What is AWS’s system for sending out alerts and alarms based on specific events in an  environment?',
      choices: {
        A: 'SQS',
        B: 'SNS',
        C: 'SWF',
        D: 'CloudTrail'
      },
      answer: 'B'
    },
    // Q149
    {
      question: 'Which service would you use to create a single-sign on system for a user base that already  has credentials they want to use outside of AWS?',
      choices: {
        A: 'Cognito',
        B: 'Kinesis',
        C: 'SWF',
        D: 'IAMReview Questions   27'
      },
      answer: 'A'
    },
    // Q150
    {
      question: 'What does an AWS region consist of?',
      choices: {
        A: 'A collection of virtual data centers spread across a continent',
        B: 'A collection of virtual data centers spread across a specific geographic area',
        C: 'A collection of virtual servers spread across a continent',
        D: 'A collection of virtual databases spread across a specific geographic area'
      },
      answer: 'B'
    },
    // Q151
    {
      question: 'What type of services are associated with an AWS VPC?',
      choices: {
        A: 'Storage services',
        B: 'Database services',
        C: 'Compute services',
        D: 'Networking services'
      },
      answer: 'D'
    },
    // Q152
    {
      question: 'What type of services are associated with ECS?',
      choices: {
        A: 'Storage services',
        B: 'Database services',
        C: 'Compute services',
        D: 'Networking services'
      },
      answer: 'C'
    },
    // Q153
    {
      question: 'What type of services are associated with RDS?',
      choices: {
        A: 'Storage services',
        B: 'Database services',
        C: 'Compute services',
        D: 'Networking services'
      },
      answer: 'B'
    },
    // Q154
    {
      question: 'What type of services are associated with Route 53?',
      choices: {
        A: 'Storage services',
        B: 'Database services',
        C: 'Compute services',
        D: 'Networking services'
      },
      answer: 'D'
    },
    // Q155
    {
      question: 'What type of services are associated with a customer gateway?',
      choices: {
        A: 'Storage services',
        B: 'Database services',
        C: 'Compute services',
        D: 'Networking services'
      },
      answer: 'D'
    },
    // Q156
    {
      question: 'What type of services are associated with S3 lifecycle management?',
      choices: {
        A: 'Storage services',
        B: 'Database services',
        C: 'Compute services',
        D: 'Networking services28   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'A'
    },
    // Q157
    {
      question: 'What type of services are associated with Amazon Lightsail?',
      choices: {
        A: 'Storage services',
        B: 'Networking services',
        C: 'Compute services',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q158
    {
      question: 'What type of services are associated with Elastic Beanstalk?',
      choices: {
        A: 'Storage services',
        B: 'Networking services',
        C: 'Compute services',
        D: 'All of the above'
      },
      answer: 'C'
    },
    // Q159
    {
      question: 'What type of services are associated with EFS?',
      choices: {
        A: 'Storage services',
        B: 'Networking services',
        C: 'Compute services',
        D: 'All of the above'
      },
      answer: 'A'
    },
    // Q160
    {
      question: 'What type of services are associated with Redshift?',
      choices: {
        A: 'Storage services',
        B: 'Networking services',
        C: 'Database services',
        D: 'All of the above'
      },
      answer: 'C'
    },
    // Q161
    {
      question: 'What type of services are associated with CloudFront?',
      choices: {
        A: 'Storage services',
        B: 'Networking services',
        C: 'Compute services',
        D: 'Both B and C'
      },
      answer: 'B'
    },
    // Q162
    {
      question: 'What type of services are associated with Amazon Athena?',
      choices: {
        A: 'Storage services',
        B: 'Networking services',
        C: 'Compute services',
        D: 'Analytic services'
      },
      answer: 'D'
    },
    // Q163
    {
      question: 'What type of services are associated with EMR?',
      choices: {
        A: 'Storage services',
        B: 'Analytic services',
        C: 'Compute services',
        D: 'Networking servicesReview Questions   29'
      },
      answer: 'B'
    },
    // Q164
    {
      question: 'What type of services are associated with Cloud9?',
      choices: {
        A: 'Storage services',
        B: 'Analytic services',
        C: 'Developer services',
        D: 'Networking services'
      },
      answer: 'C'
    },
    // Q165
    {
      question: 'What type of services are associated with Direct Connect?',
      choices: {
        A: 'Storage services',
        B: 'Analytic services',
        C: 'Developer services',
        D: 'Networking services'
      },
      answer: 'D'
    },
    // Q166
    {
      question: 'What type of services are associated with Workspaces?',
      choices: {
        A: 'Mobile services',
        B: 'Analytic services',
        C: 'Developer services',
        D: 'Desktop services'
      },
      answer: 'D'
    },
    // Q167
    {
      question: 'What type of services are associated with Kinesis?',
      choices: {
        A: 'Mobile services',
        B: 'Analytic services',
        C: 'Developer services',
        D: 'Desktop services'
      },
      answer: 'B'
    },
    // Q168
    {
      question: 'What type of services are associated with Elastic Transcoder?',
      choices: {
        A: 'Mobile services',
        B: 'Analytic services',
        C: 'Media services',
        D: 'Desktop services'
      },
      answer: 'C'
    },
    // Q169
    {
      question: 'What type of services are associated with OpsWorks?',
      choices: {
        A: 'Mobile services',
        B: 'Analytic services',
        C: 'Media services',
        D: 'Management services'
      },
      answer: 'D'
    },
    // Q170
    {
      question: 'What type of services are associated with Lex?',
      choices: {
        A: 'Machine learning services',
        B: 'Analytic services',
        C: 'Media services',
        D: 'Management services30   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'A'
    },
    // Q171
    {
      question: 'Which service is best suited for monitoring the performance of your compute instances?',
      choices: {
        A: 'CloudWatch',
        B: 'CloudTrail',
        C: 'OpsWorks',
        D: 'Config'
      },
      answer: 'A'
    },
    // Q172
    {
      question: 'What is an availability zone?',
      choices: {
        A: 'A virtual data center',
        B: 'A geographical area with redundancy within that area for compute, networking, and  storage service',
        C: 'A distinct location within AWS designed to be isolated from failures',
        D: 'Both A and C'
      },
      answer: 'D'
    },
    // Q173
    {
      question: 'What is a region?',
      choices: {
        A: 'A virtual data center',
        B: 'A geographical area with redundancy within that area for compute, networking, and  storage service',
        C: 'A distinct location within AWS designed to be isolated from failures',
        D: 'Both A and C'
      },
      answer: 'B'
    },
    // Q174
    {
      question: 'Which of the following statements do not describe a region? (Choose two.)',
      choices: {
        A: 'A region is an area with specific AWS managed services (compute, networking,   storage, etc.).',
        B: 'A region is a virtual data center with built-in redundancy.',
        C: 'A region is a collection of availability zones for redundancy.',
        D: 'A region is a geographic area with at least two virtual data centers.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q175
    {
      question: 'Which of the following statements do not describe an availability zone? (Choose two.)',
      choices: {
        A: 'An availability zone hosts your compute instances.',
        B: 'An availability zone provides redundancy for your applications.',
        C: 'An availability zone is isolated from other availability zones except with regard to  networking.',
        D: 'An availability zone contains virtual data centers.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q176
    {
      question: 'Which of the following statements are true about availability zones? (Choose two.)',
      choices: {
        A: 'An elastic IP is always tied to one specific availability zone.',
        B: 'A region always contains two availability zones.',
        C: 'An availability zone’s name (for example, us-east-1a) may change across AWS  accounts.',
        D: 'You can specify an availability zone in which to launch your instance when creating  the instance.Review Questions   31'
      },
      answer: [ 'C', 'D' ]
    },
    // Q177
    {
      question: 'Which of the following are actual region identifiers within AWS? (Choose two.)',
      choices: {
        A: 'us-east-2',
        B: 'jp-south-2',
        C: 'ap-south-1',
        D: 'uk-west-1'
      },
      answer: [ 'A', 'C' ]
    },
    // Q178
    {
      question: 'Which of the following are valid region identifiers within AWS? (Choose two.)',
      choices: {
        A: 'US East 2',
        B: 'eu-west-1',
        C: 'ap-south-1a',
        D: 'us-east-1'
      },
      answer: [ 'B', 'D' ]
    },
    // Q179
    {
      question: 'Which of the following is a valid availability zone identifier within AWS?',
      choices: {
        A: 'us-east-2b',
        B: 'eu-west-1',
        C: 'us-west-az-1',
        D: 'az-sa-east-1a'
      },
      answer: 'A'
    },
    // Q180
    {
      question: 'Which AWS service functions like a NAS in the cloud?',
      choices: {
        A: 'EBS',
        B: 'Tape gateway',
        C: 'EFS',
        D: 'DynamoDB'
      },
      answer: 'C'
    },
    // Q181
    {
      question: 'Which of the following is a caching engine?',
      choices: {
        A: 'ElastiCache',
        B: 'DynamoDB',
        C: 'memcached',
        D: 'IAM'
      },
      answer: 'C'
    },
    // Q182
    {
      question: 'Which of the following are caching engines used by ElastiCache? (Choose two.)',
      choices: {
        A: 'Redis',
        B: 'DynamoDB',
        C: 'memcached',
        D: 'CloudFront'
      },
      answer: [ 'A', 'C' ]
    },
    // Q183
    {
      question: 'Which of the following can you use reserved instances with?',
      choices: {
        A: 'RDS',
        B: 'EC2',
        C: 'Both A and B',
        D: 'None of the above32   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'C'
    },
    // Q184
    {
      question: 'For which of the following can you use reserved instances?',
      choices: {
        A: 'RDS Multi-AZ deployments.',
        B: 'RDS standard deployments',
        C: 'ElastiCache nodes',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q185
    {
      question: 'In which situations will an RDS instance with Multi-AZ configured fail over? (Choose two.)',
      choices: {
        A: 'When you manually force a failover',
        B: 'When the primary zone is unreachable',
        C: 'When the secondary zone is unreachable',
        D: 'When two successive database reads fail'
      },
      answer: [ 'A', 'B' ]
    },
    // Q186
    {
      question: 'Which of the following can you select when you create an RDS instance? (Choose two.)',
      choices: {
        A: 'The type of database to use',
        B: 'The number of network connections to allow before failing over',
        C: 'The number of database processes to allow',
        D: 'The availability zone to deploy the instance to'
      },
      answer: [ 'A', 'D' ]
    },
    // Q187
    {
      question: 'Which of the following may happen when you have a single-AZ RDS database and a  backup begins? (Choose two.)',
      choices: {
        A: 'Latency increases.',
        B: 'Database responses may temporarily slow.',
        C: 'The database goes offline temporarily.',
        D: 'Network requests will fail for up to a minute.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q188
    {
      question: 'Which of the following database engines are available for RDS? (Choose two.)',
      choices: {
        A: 'Hyperion',
        B: 'Cassandra',
        C: 'Oracle',
        D: 'SQL Server'
      },
      answer: [ 'C', 'D' ]
    },
    // Q189
    {
      question: 'Which of the following is true about RDS? (Choose two.)',
      choices: {
        A: 'Reserved instances can be used for Multi-AZ deployments.',
        B: 'Automated backups are turned off by default.',
        C: 'Every database supported by RDS can also be installed directly on EC2 instances.',
        D: 'All RDS databases support SQL as an interface.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q190
    {
      question: 'What is the default port for MySQL via RDS?',
      choices: {
        A: '80',
        B: '443',
        C: '22',
        D: '3306Review Questions   33'
      },
      answer: 'D'
    },
    // Q191
    {
      question: 'When AWS uses the term  OLAP , what does that acronym stand for?',
      choices: {
        A: 'Online analytics processing',
        B: 'Offline analytic processing',
        C: 'Online aggregation processing',
        D: 'Offline activity and payment'
      },
      answer: 'A'
    },
    // Q192
    {
      question: 'When AWS uses the term OLTP, what does that acronym stand for?',
      choices: {
        A: 'Offline training and practice',
        B: 'Offline transaction processing',
        C: 'Online traffic provisioning',
        D: 'Online transaction processing'
      },
      answer: 'D'
    },
    // Q193
    {
      question: 'Which of the following is most suitable for OLAP?',
      choices: {
        A: 'Redshift',
        B: 'ElastiCache',
        C: 'DynamoDB',
        D: 'Aurora'
      },
      answer: 'A'
    },
    // Q194
    {
      question: 'Which of the following is most suitable for OLTP?',
      choices: {
        A: 'Redshift',
        B: 'ElastiCache',
        C: 'DynamoDB',
        D: 'Aurora'
      },
      answer: 'D'
    },
    // Q195
    {
      question: 'Which of the following are most suitable for OLTP? (Choose two.)',
      choices: {
        A: 'memcached',
        B: 'Oracle',
        C: 'DynamoDB',
        D: 'SQL Server'
      },
      answer: [ 'B', 'D' ]
    },
    // Q196
    {
      question: 'Which of the following is best suited for data warehousing?',
      choices: {
        A: 'redis',
        B: 'Oracle',
        C: 'DynamoDB',
        D: 'Redshift'
      },
      answer: 'D'
    },
    // Q197
    {
      question: 'Which of the following is best suited for big data processing?',
      choices: {
        A: 'EMR',
        B: 'QuickSight',
        C: 'ElastiCache',
        D: 'Athena34   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'A'
    },
    // Q198
    {
      question: 'Which of the following is best suited for real-time analytics?',
      choices: {
        A: 'EMR',
        B: 'QuickSight',
        C: 'Kinesis',
        D: 'Athena'
      },
      answer: 'C'
    },
    // Q199
    {
      question: 'Which of the following is best suited for dashboards and visualizations?',
      choices: {
        A: 'EMR',
        B: 'QuickSight',
        C: 'Kinesis',
        D: 'Athena'
      },
      answer: 'B'
    },
    // Q200
    {
      question: 'Which of the following is best suited for interactive analytics?',
      choices: {
        A: 'EMR',
        B: 'QuickSight',
        C: 'Kinesis',
        D: 'Athena'
      },
      answer: 'D'
    },
    // Q201
    {
      question: 'What are the most common frameworks used with Amazon EMR? (Choose two.)',
      choices: {
        A: 'Scala',
        B: 'Hadoop',
        C: 'Java',
        D: 'Spark'
      },
      answer: [ 'B', 'D' ]
    },
    // Q202
    {
      question: 'How many copies of data does Aurora store by default?',
      choices: {
        A: 'One',
        B: 'Three',
        C: 'Four',
        D: 'Six'
      },
      answer: 'D'
    },
    // Q203
    {
      question: 'Across how many availability zones does Aurora store your data by default?',
      choices: {
        A: 'One',
        B: 'Three',
        C: 'Four',
        D: 'Two'
      },
      answer: 'B'
    },
    // Q204
    {
      question: 'In an RDS, managed service capacity, which of the following databases is generally fastest?',
      choices: {
        A: 'PostgreSQL',
        B: 'MySQL',
        C: 'Aurora',
        D: 'They are all equivalent.Review Questions   35'
      },
      answer: 'C'
    },
    // Q205
    {
      question: 'In an RDS, managed service capacity, which of the following databases is most resistant  to disaster by default?',
      choices: {
        A: 'Aurora',
        B: 'Oracle',
        C: 'MySQL',
        D: 'They are all equivalent.'
      },
      answer: 'A'
    },
    // Q206
    {
      question: 'Which of the following databases can Aurora interact with seamlessly? (Choose two.)',
      choices: {
        A: 'DynamoDB',
        B: 'PostgreSQL',
        C: 'MySQL',
        D: 'HyperionDB'
      },
      answer: [ 'B', 'C' ]
    },
    // Q207
    {
      question: 'Which of the following is allowed on your RDS instance? (Choose two.)',
      choices: {
        A: 'SSH',
        B: 'SQL queries',
        C: 'RDP',
        D: 'HTTP-accessible APIs'
      },
      answer: [ 'B', 'D' ]
    },
    // Q208
    {
      question: 'What is the maximum backup retention period allowed by RDS, in days?',
      choices: {
        A: '15 days',
        B: '30 days',
        C: '35 days',
        D: '45 days'
      },
      answer: 'C'
    },
    // Q209
    {
      question: 'If you install Oracle on an EC2 instance, what should you use for storage for that database?',
      choices: {
        A: 'EBS',
        B: 'S3',
        C: 'EFS',
        D: 'RDS'
      },
      answer: 'A'
    },
    // Q210
    {
      question: 'Which of the following are suitable for OLTP? (Choose two.)',
      choices: {
        A: 'EBS',
        B: 'Aurora',
        C: 'DynamoDB',
        D: 'MariaDB'
      },
      answer: [ 'B', 'D' ]
    },
    // Q211
    {
      question: 'Which of the following are not suitable for OLTP? (Choose two.)',
      choices: {
        A: 'Kinesis',
        B: 'PostgreSQL',
        C: 'Redshift',
        D: 'SQL Server36   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'A', 'C' ]
    },
    // Q212
    {
      question: 'Which of the following does a Multi-AZ RDS setup address? (Choose two.)',
      choices: {
        A: 'Disaster recovery',
        B: 'Read performance',
        C: 'Data redundancy',
        D: 'Network latency'
      },
      answer: [ 'A', 'C' ]
    },
    // Q213
    {
      question: 'Which of the following does a read replica RDS setup address? (Choose two.)',
      choices: {
        A: 'Disaster recovery',
        B: 'Read performance',
        C: 'Offline backup',
        D: 'Network latency'
      },
      answer: [ 'B', 'D' ]
    },
    // Q214
    {
      question: 'Which of the following does a read replica support? (Choose two.)',
      choices: {
        A: 'Reads from applications',
        B: 'Writes to applications',
        C: 'Writes from the primary instance',
        D: 'Writes from applications using the RDS API'
      },
      answer: [ 'A', 'C' ]
    },
    // Q215
    {
      question: 'Which of the following does a Multi-AZ setup not provide?',
      choices: {
        A: 'Disaster recovery',
        B: 'Data redundancy',
        C: 'Improved performance',
        D: 'Access to all RDS databases'
      },
      answer: 'C'
    },
    // Q216
    {
      question: 'Which of the following does a Multi-AZ setup provide?',
      choices: {
        A: 'Decreased network latency',
        B: 'Synchronous replication',
        C: 'Asynchronous replication',
        D: 'Multiple read sources for applications'
      },
      answer: 'B'
    },
    // Q217
    {
      question: 'Which of the following does a read replica provide?',
      choices: {
        A: 'Increased network latency',
        B: 'Synchronous replication',
        C: 'Disaster recovery',
        D: 'Asynchronous replication'
      },
      answer: 'D'
    },
    // Q218
    {
      question: 'Which of the following is associated with read replicas?',
      choices: {
        A: 'High scalability',
        B: 'Primary and secondary instances',
        C: 'High durability',
        D: 'Automatic failoverReview Questions   37'
      },
      answer: 'A'
    },
    // Q219
    {
      question: 'Which of the following is associated with Multi-AZ RDS?',
      choices: {
        A: 'Manual backup configuration',
        B: 'Independent database upgrades',
        C: 'High durability',
        D: 'More than two database instances'
      },
      answer: 'C'
    },
    // Q220
    {
      question: 'How many read replicas are supported in a read replica setup?',
      choices: {
        A: 'Three',
        B: 'Five',
        C: 'Seven',
        D: 'Unlimited (although cost applies for each replica)'
      },
      answer: 'B'
    },
    // Q221
    {
      question: 'Which of the following databases do not support a read replica setup? (Choose two.)',
      choices: {
        A: 'DynamoDB',
        B: 'Redshift',
        C: 'MySQL',
        D: 'MariaDB'
      },
      answer: [ 'A', 'B' ]
    },
    // Q222
    {
      question: 'Which of the following statements about DynamoDB are true? (Choose two.)',
      choices: {
        A: 'DynamoDB offers push-button scaling.',
        B: 'DynamoDB supports read replicas.',
        C: 'DynamoDB databases can scale up without needing a bigger underlying instance.',
        D: 'DynamoDB instance sizes are selected at runtime.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q223
    {
      question: 'Which of the following statements about DynamoDB are true? (Choose two.)',
      choices: {
        A: 'DynamoDB is more difficult to scale than RDS.',
        B: 'DynamoDB uses SSD storage.',
        C: 'DynamoDB is spread across at least three regions.',
        D: 'DynamoDB uses magnetic storage.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q224
    {
      question: 'What is the default consistency model for DynamoDB?',
      choices: {
        A: 'Eventually consistent reads',
        B: 'Immediately consistent reads',
        C: 'Eventually pristine reads',
        D: 'Eventually consistent writes'
      },
      answer: 'A'
    },
    // Q225
    {
      question: 'Which of the following are supported consistency models for DynamoDB? (Choose two.)',
      choices: {
        A: 'Eventually consistent reads',
        B: 'Strongly consistent writes',
        C: 'Immediately consistent reads',
        D: 'Strongly consistent reads38   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q226
    {
      question: 'You are a solutions architect for a data-driven company using DynamoDB. They want to  ensure always-accurate responses, so they have enabled strongly consistent reads. How- ever, API calls to read data sometimes do not immediately return, and sometimes fail.  What possible causes could there be? (Choose two.)',
      choices: {
        A: 'A recent write was made and is not yet complete. As a result, a read operation is  delayed waiting on the write operation to complete.',
        B: 'A recent write was made and is replicating to the secondary instance. Until that repli- cation completes, the read operation will lag.',
        C: 'A network outage has interrupted a recent read, and subsequent reads of that data are  delayed as a result.',
        D: 'A network outage has interrupted a recent write, and subsequent reads of that data  are delayed as a result.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q227
    {
      question: 'Which of the following is a valid VPC configuration?',
      choices: {
        A: 'A single public subnet without any private subnets',
        B: 'A single private subnet without any public subnets',
        C: 'A single public subnet with two private subnets',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q228
    {
      question: 'Which of the following are assigned to an EC2 instance in a default VPC? (Choose two.)',
      choices: {
        A: 'A private IP address',
        B: 'An elastic IP address',
        C: 'An internal AWS-only IP address',
        D: 'A public IP address'
      },
      answer: [ 'A', 'D' ]
    },
    // Q229
    {
      question: 'Which of the following can an EC2 instance in a public VPC be assigned? (Choose two.)',
      choices: {
        A: 'A private IP address',
        B: 'An elastic IP address',
        C: 'An IPv6 address',
        D: 'Both A and B'
      },
      answer: [ 'C', 'D' ]
    },
    // Q230
    {
      question: 'Which of the following can you peer a VPC in your AWS account with? (Choose two.)',
      choices: {
        A: 'Itself',
        B: 'Another VPC in your account',
        C: 'A VPC in another AWS account',
        D: 'A public subnet in another AWS account'
      },
      answer: [ 'B', 'C' ]
    },
    // Q231
    {
      question: 'Which of the following offers the largest range of IP addresses?',
      choices: {
        A: '/16',
        B: '/20',
        C: '/24',
        D: '/28Review Questions   39'
      },
      answer: 'A'
    },
    // Q232
    {
      question: 'What does the SWF in Amazon SWF stand for?',
      choices: {
        A: 'Simple Workflow',
        B: 'Simple Workflow Formation',
        C: 'Simple Web Forms',
        D: 'Simple Working Automation'
      },
      answer: 'A'
    },
    // Q233
    {
      question: 'What languages can you use with SWF?',
      choices: {
        A: 'Java, Node.js, JavaScript, and Ruby',
        B: 'Java, Node.js, and JavaScript',
        C: 'Perl, PHP, Node.js, and JavaScript',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q234
    {
      question: 'How are requests and responses to SWF sent and received?',
      choices: {
        A: 'Via the AWS-specific API using application keys',
        B: 'Via HTTP request and response codes',
        C: 'Via web-accessible language-specific endpoints',
        D: 'All of the above'
      },
      answer: 'B'
    },
    // Q235
    {
      question: 'Which of the following is a good use case for SWF?',
      choices: {
        A: 'Managing single-sign on',
        B: 'Managing authentication and identification',
        C: 'Managing logging and auditing of VPC interactions',
        D: 'Managing tasks across multiple components'
      },
      answer: 'D'
    },
    // Q236
    {
      question: 'How does SWF communicate?',
      choices: {
        A: 'Synchronously',
        B: 'Asynchronously',
        C: 'Both A and B',
        D: 'Neither A nor B'
      },
      answer: 'C'
    },
    // Q237
    {
      question: 'What does SES stand for in Amazon SES?',
      choices: {
        A: 'Simple Electronic Service',
        B: 'Simple Email Service',
        C: 'Scalable Elastic Service',
        D: 'Sample Engagement Service'
      },
      answer: 'B'
    },
    // Q238
    {
      question: 'What service is queue-based and focused on messaging within your applications?',
      choices: {
        A: 'SWF',
        B: 'SNS',
        C: 'SES',
        D: 'SQS40   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'D'
    },
    // Q239
    {
      question: 'Which of the following are true? (Choose two.)',
      choices: {
        A: 'SNS and SQS are interchangeable at an API level.',
        B: 'SNS is a pull-based system while SQS is a push-based system.',
        C: 'SNS manages notifications and SQS manages messages.',
        D: 'SNS is a push-based system while SQS is a pull-based system.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q240
    {
      question: 'Which of the following terms are associated with SQS? (Choose two.)',
      choices: {
        A: 'Tasks',
        B: 'Messages',
        C: 'Notifications',
        D: 'Worker node'
      },
      answer: [ 'B', 'D' ]
    },
    // Q241
    {
      question: 'Which of the following terms are associated with SNS? (Choose two.)',
      choices: {
        A: 'Tasks',
        B: 'Notifications',
        C: 'Push',
        D: 'Pull'
      },
      answer: [ 'B', 'C' ]
    },
    // Q242
    {
      question: 'Which of the following terms are associated with SWF? (Choose two.)',
      choices: {
        A: 'Single delivery',
        B: 'Tasks',
        C: 'Multi-delivery',
        D: 'Messages'
      },
      answer: [ 'A', 'B' ]
    },
    // Q243
    {
      question: 'Which of the following terms are associated with SNS? (Choose two.)',
      choices: {
        A: 'Subscription',
        B: 'Topic',
        C: 'Message',
        D: 'Queue'
      },
      answer: [ 'A', 'B' ]
    },
    // Q244
    {
      question: 'How many times are tasks assigned in SWF?',
      choices: {
        A: 'Once and only once',
        B: 'Once in general, but a task can be reassigned if it fails',
        C: 'Up to three times within the set polling period',
        D: 'A and C are both valid, depending upon the workflow configuration.'
      },
      answer: 'A'
    },
    // Q245
    {
      question: 'How are topics represented in SNS?',
      choices: {
        A: 'By a linked list',
        B: 'By an Amazon Resource Name',
        C: 'By an IAM role',
        D: 'By a named messageReview Questions   41'
      },
      answer: 'B'
    },
    // Q246
    {
      question: 'How many times are messages delivered in SQS?',
      choices: {
        A: 'Once and only once',
        B: 'Up to a single time',
        C: 'Up to three times within the set polling period',
        D: 'At least once'
      },
      answer: 'D'
    },
    // Q247
    {
      question: 'What is a collection of related SWF workflows called?',
      choices: {
        A: 'A group',
        B: 'A policy',
        C: 'A domain',
        D: 'A cluster'
      },
      answer: 'C'
    },
    // Q248
    {
      question: 'How are messages arranged in an SQS queue by default?',
      choices: {
        A: 'FIFO',
        B: 'LIFO',
        C: 'In reverse order, that is, the last message received is the first available, as much as is  possible',
        D: 'In the order in which they were received, as much as is possible'
      },
      answer: 'D'
    },
    // Q249
    {
      question: 'The company at which you have been hired as an architect is using Amazon SQS. The  company’s applications process orders out of the queue as they are received, ensuring that  earlier orders get any limited items that may run out of stock over time. However, some  early orders are skipped, and later orders actually get the limited items. How would you  correct this problem?',
      choices: {
        A: 'Move from SQS to SWF to ensure single delivery of messages.',
        B: 'Configure the SQS queue as FIFO to guarantee the order of message delivery.',
        C: 'Move from SQS to SNS and implement a queue in the application code.',
        D: 'Turn on order locking in the SQS queue.'
      },
      answer: 'B'
    },
    // Q250
    {
      question: 'You have a hub-and-spoke network model, with VPC C at the center of the hub. There  are six spokes, VPCs A, B, D, E, F, and G. Which VPCs can communicate with VPC C  directly? (Choose two.)',
      choices: {
        A: 'VPCs A and B',
        B: 'VPCs D and E',
        C: 'VPCs F and G',
        D: 'Options A and B'
      },
      answer: [ 'C', 'D' ]
    },
    // Q251
    {
      question: 'You have a hub-and-spoke network model, with VPC C at the center of the hub. There  are six spokes, VPCs A, B, D, E, F, and G. Which VPCs can communicate with VPC A  directly? (Choose two.)',
      choices: {
        A: 'VPCs A and B',
        B: 'VPC C',
        C: 'VPC A',
        D: 'Any additional VPCs peered directly with VPC A42   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'B', 'D' ]
    },
    // Q252
    {
      question: 'You have a hub-and-spoke network model, with VPC G at the center of the hub. There are  six spokes, VPCs A, B, C, D, E, and F. Which of the following are true? (Choose two.)',
      choices: {
        A: 'VPCs A and B can communicate with each other directly.',
        B: 'VPCs G and B can communicate with each other directly.',
        C: 'VPCs A and C cannot communicate with each other directly.',
        D: 'VPCs G and D cannot communicate with each other directly.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q253
    {
      question: 'You have a hub-and-spoke network model, with VPC B at the center of the hub. There are  three spokes, VPCs A, C, and E. Which of the following are not true? (Choose two.)',
      choices: {
        A: 'VPCs A and B can communicate with each other directly.',
        B: 'VPCs C and B can communicate with each other directly.',
        C: 'VPCs A and C can communicate with each other directly.',
        D: 'VPCs C and E can communicate with each other directly.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q254
    {
      question: 'Select the statement that is true.',
      choices: {
        A: 'Security groups are stateless and NACLs are stateful.',
        B: 'Security groups are stateful and NACLs are stateless.',
        C: 'Both security groups and NACLs are stateless.',
        D: 'Both security groups and NACLs are stateful.'
      },
      answer: 'B'
    },
    // Q255
    {
      question: 'Select the statement that is true.',
      choices: {
        A: 'In a NACL, explicit rules must exist for both inbound and outbound traffic for a  single request to get in and come back out.',
        B: 'In a security group, explicit rules must exist for both inbound and outbound traffic  for a single request to get in and come back out.',
        C: 'In both NACLs and security groups, explicit rules must exist for both inbound and  outbound traffic for a single request to get in and come back out.',
        D: 'Neither NACLs nor security groups require both inbound and outbound explicit  rules for the same piece of traffic.'
      },
      answer: 'A'
    },
    // Q256
    {
      question: 'Select the statement that is true.',
      choices: {
        A: 'In a NACL, traffic that is allowed in is automatically allowed back out.',
        B: 'In a security group, traffic that is allowed in is automatically allowed back out.',
        C: 'In both NACLs and security groups, explicit rules must exist for both inbound and  outbound traffic for a single request to get in and come back out.',
        D: 'Neither NACLs nor security groups require both inbound and outbound explicit  rules for the same piece of traffic.'
      },
      answer: 'B'
    },
    // Q257
    {
      question: 'Into how many subnets must an ALB be deployed (at a minimum)?',
      choices: {
        A: 'One',
        B: 'Two',
        C: 'Three',
        D: 'FiveReview Questions   43'
      },
      answer: 'B'
    },
    // Q258
    {
      question: 'Which of the following are created automatically when you create a new custom VPC?  (Choose two.)',
      choices: {
        A: 'Security group',
        B: 'NAT gateway',
        C: 'Subnet',
        D: 'Route table'
      },
      answer: [ 'A', 'D' ]
    },
    // Q259
    {
      question: 'Which of the following are created automatically as part of the default VPC? (Choose  two.)',
      choices: {
        A: 'NAT instance',
        B: 'NAT gateway',
        C: 'Subnet',
        D: 'Route table'
      },
      answer: [ 'C', 'D' ]
    },
    // Q260
    {
      question: 'Which of the following are created automatically as part of the default VPC? (Choose  two.)',
      choices: {
        A: 'Internet gateway',
        B: 'NAT gateway',
        C: 'NACL',
        D: 'IAM role'
      },
      answer: [ 'A', 'C' ]
    },
    // Q261
    {
      question: 'What is the size of the default subnet in each availability zone within the default VPC?',
      choices: {
        A: '/20',
        B: '/16',
        C: '/28',
        D: '/24'
      },
      answer: 'A'
    },
    // Q262
    {
      question: 'What is the size of the CIDR block created in the default VPC?',
      choices: {
        A: '/20',
        B: '/16',
        C: '/28',
        D: '/24'
      },
      answer: 'B'
    },
    // Q263
    {
      question: 'What is the size of the CIDR block created in a custom VPC?',
      choices: {
        A: '/20',
        B: '/16',
        C: '/28',
        D: 'You must select a size at VPC creation.44   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'D'
    },
    // Q264
    {
      question: 'Which of the following offers the most available IP addresses?',
      choices: {
        A: '/20',
        B: '/16',
        C: '/28',
        D: '/18'
      },
      answer: 'B'
    },
    // Q265
    {
      question: 'Which of the following are not created as part of the default VPC? (Choose two.)',
      choices: {
        A: 'Internet gateway',
        B: 'Security group',
        C: 'NAT gateway',
        D: 'Bastion host'
      },
      answer: [ 'C', 'D' ]
    },
    // Q266
    {
      question: 'Is the default VPC created by AWS public?',
      choices: {
        A: 'Only if you set it to be public at creation time',
        B: 'Ye s',
        C: 'Only for traffic over port 80',
        D: 'No'
      },
      answer: 'B'
    },
    // Q267
    {
      question: 'Which of the following statements are true? (Choose two.)',
      choices: {
        A: 'The default VPC has an internet gateway attached by default.',
        B: 'Custom VPCs do not have internet gateways attached by default.',
        C: 'The default VPC does not have an internet gateway attached by default.',
        D: 'Custom VPCs have internet gateways attached by default.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q268
    {
      question: 'Which of the following statements are true? (Choose two.)',
      choices: {
        A: 'The default VPC has a NACL created by default.',
        B: 'All incoming traffic is allowed by the default security group on a VP',
        C: '.   All outgoing traffic is allowed by the default security group on a VPC.',
        D: 'The default security group for the default VPC allows inbound HTTP traffic.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q269
    {
      question: 'Which of the following statements are true about both the default VPC and custom  VPCs? (Choose two.)',
      choices: {
        A: 'They have NACLs automatically created.',
        B: 'They have internet gateways automatically created.',
        C: 'They have subnets automatically created.',
        D: 'They have security groups automatically created.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q270
    {
      question: 'Which of the following are created automatically for the default VPC but not for custom  VPCs? (Choose two.)',
      choices: {
        A: 'A route table',
        B: 'A subnet',
        C: 'A security group allowing outbound traffic',
        D: 'An internet gatewayReview Questions   45'
      },
      answer: [ 'B', 'D' ]
    },
    // Q271
    {
      question: 'All EC2 instances in the default VPC have which of the following by default? (Choose  two.)',
      choices: {
        A: 'An elastic IP address',
        B: 'A public IP address',
        C: 'A private IP address',
        D: 'HTTP access for incoming requests'
      },
      answer: [ 'B', 'C' ]
    },
    // Q272
    {
      question: 'You created a new instance in the default VPC. You want this instance to be publicly  available and serve web content. What steps do you need to take? (Choose two.)',
      choices: {
        A: 'Create an private IP for the instance.',
        B: 'Create a public IP for the instance.',
        C: 'Neither A nor B, these are done automatically.',
        D: 'Update the security group to allow traffic over HTTP and HTTPS to the instance.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q273
    {
      question: 'You created a new instance in a custom VPC. You want this instance to be publicly avail- able and serve web content. What steps do you need to take? (Choose two.)',
      choices: {
        A: 'Create an elastic IP for the instance.',
        B: 'Create an internet gateway for the VP',
        C: '.   Update the security group to allow traffic over HTTP and HTTPS to the instance.',
        D: 'Both A and B'
      },
      answer: [ 'C', 'D' ]
    },
    // Q274
    {
      question: 'Why would you use a VPC endpoint to connect your VPC to S3 storage? (Choose two.)',
      choices: {
        A: 'To reduce the number of public IP addresses required by your VPC',
        B: 'To avoid leaving the AWS network when traffic flows between the VPC and S3',
        C: 'To increase security of the VPC-to-S3 traffic',
        D: 'To increase the speed as compared to using a NAT instance'
      },
      answer: [ 'B', 'C' ]
    },
    // Q275
    {
      question: 'Which of the following does a VPC endpoint require?',
      choices: {
        A: 'Internet gateway',
        B: 'NAT instance',
        C: 'VPN connection',
        D: 'None of the above'
      },
      answer: 'D'
    },
    // Q276
    {
      question: 'Which of the following statements about a VPC endpoint are true? (Choose two.)',
      choices: {
        A: 'It is a hardware device.',
        B: 'It is a virtual device.',
        C: 'It is automatically redundant.',
        D: 'It scales vertically.46   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'B', 'C' ]
    },
    // Q277
    {
      question: 'Which of the following statements about a VPC endpoint are true? (Choose two.)',
      choices: {
        A: 'It requires a VPN connection.',
        B: 'It can connect to DynamoDB.',
        C: 'The VPC it is attached to must have an internet gateway.',
        D: 'It never routes traffic over the public Internet.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q278
    {
      question: 'Which of these are types of VPC endpoints? (Choose two.)',
      choices: {
        A: 'Interface endpoint',
        B: 'Peering endpoint',
        C: 'Gateway endpoint',
        D: 'Service endpoint'
      },
      answer: [ 'A', 'C' ]
    },
    // Q279
    {
      question: 'Which of the following can a VPC gateway endpoint connect to? (Choose two.)',
      choices: {
        A: 'S3',
        B: 'Route 53',
        C: 'A Kinesis data stream',
        D: 'DynamoDB'
      },
      answer: [ 'A', 'D' ]
    },
    // Q280
    {
      question: 'Which of the following can a VPC interface endpoint connect to? (Choose two.)',
      choices: {
        A: 'An API gateway',
        B: 'A VPN',
        C: 'A Kinesis data stream',
        D: 'DynamoDB'
      },
      answer: [ 'A', 'C' ]
    },
    // Q281
    {
      question: 'Which of the following is true about instances in a VPC using a VPC endpoint to connect  to S3 storage? (Choose two.)',
      choices: {
        A: 'They must have a public IP.',
        B: 'They must route traffic through a NAT instance to get to the endpoint.',
        C: 'They do not send their traffic over the public Internet to reach the VPC endpoint.',
        D: 'They must have routes to the VPC endpoint in the VPC routing table.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q282
    {
      question: 'At what level do security groups operate?',
      choices: {
        A: 'The subnet level',
        B: 'The VPC level',
        C: 'The instance level',
        D: 'All of the above'
      },
      answer: 'C'
    },
    // Q283
    {
      question: 'Which types of rules do security groups allow?',
      choices: {
        A: 'Allow rules only',
        B: 'Allow and deny rules',
        C: 'Deny rules only',
        D: 'Allow, deny, and permit rulesReview Questions   47'
      },
      answer: 'A'
    },
    // Q284
    {
      question: 'Security groups use which models for traffic? (Choose two.)',
      choices: {
        A: 'Traffic is denied by default.',
        B: 'Traffic is allowed by default.',
        C: 'Traffic is only allowed if there are specific allow rules.',
        D: 'Traffic is only denied if there are specific deny rules.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q285
    {
      question: 'Which of the following is true about security groups?',
      choices: {
        A: 'They evaluate all rules before deciding whether to allow traffic.',
        B: 'They evaluate rules from top to bottom before deciding whether to allow traffic.',
        C: 'They evaluate rules in numeric order before deciding whether to allow traffic.',
        D: 'They evaluate orders from high to low before deciding whether to allow traffic.'
      },
      answer: 'A'
    },
    // Q286
    {
      question: 'In which order are rules evaluated when a security group decides if traffic is allowed?',
      choices: {
        A: 'Top to bottom',
        B: 'High to low numeric order',
        C: 'Low to high numeric order',
        D: 'All rules are evaluated before a decision is made.'
      },
      answer: 'D'
    },
    // Q287
    {
      question: 'How many VPCs can you create in a single AWS region by default?',
      choices: {
        A: '3',
        B: '5',
        C: '10',
        D: '20'
      },
      answer: 'B'
    },
    // Q288
    {
      question: 'Which of the following is true about a new subnet created in a custom VPC that was set  up with the default configuration?',
      choices: {
        A: 'It needs a custom route table created.',
        B: 'It can communicate with other subnets across availability zones.',
        C: 'It will not have a NACL.',
        D: 'It will have an internet gateway attached.'
      },
      answer: 'B'
    },
    // Q289
    {
      question: 'Which of these allow you to SSH into an EC2 instance within a private subnet?',
      choices: {
        A: 'A NAT gateway',
        B: 'An internet gateway',
        C: 'A NAT instance',
        D: 'A bastion host'
      },
      answer: 'D'
    },
    // Q290
    {
      question: 'Which of the following allow a private instance to communicate with the Internet?  (Choose two.)',
      choices: {
        A: 'A NAT gateway',
        B: 'An internet gateway',
        C: 'A NAT instance',
        D: 'A bastion host48   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: [ 'A', 'C' ]
    },
    // Q291
    {
      question: 'How many internet gateways can each VPC have?',
      choices: {
        A: 'One',
        B: 'Two',
        C: 'Three',
        D: 'One for each AZ in which the VPC exists'
      },
      answer: 'A'
    },
    // Q292
    {
      question: 'You are attempting to create a VPC in an AWS account and getting an error. When you  look at the console, you see that the region you’re trying to create the VPC in already has  five VPCs. What step should you take to create the VPC you need?',
      choices: {
        A: 'You can’t. Each region can only have five VPCs.',
        B: 'Configure the VPC to be peered with an existing VPC to get around the five-VPC  per-region limit.',
        C: 'Contact AWS and explain your need for a higher number of VPCs in the region.',
        D: 'Create the VPC in a different region.'
      },
      answer: 'C'
    },
    // Q293
    {
      question: 'What benefit does adding a second internet gateway to your VPC provide?',
      choices: {
        A: 'Increased network throughput via two channels into the VPC',
        B: 'The second VPC can be used to facilitate VPC endpoints with S3 and DynamoDB.',
        C: 'You can’t add a second internet gateway to a single VPC.',
        D: 'You can’t have two internet gateways within the same region.'
      },
      answer: 'C'
    },
    // Q294
    {
      question: 'You have created a custom VPC, created instances within that VPC, and stood up web  servers on those instances. What are the simplest steps you might need to perform to serve  this web content to the public Internet? (Choose two.)',
      choices: {
        A: 'Add an internet gateway to the VPC.',
        B: 'C. B.',
        C: '.   Create a NAT gateway for the instances. C.   Create an ALB and point it at the instances.',
        D: 'Set a public IP for the instances.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q295
    {
      question: 'You have created a custom VPC, created instances within that VPC, attached an internet  gateway to the VPC, and stood up web servers on those instances. However, users are  unable to access the web content. What might be the problem? (Choose two.)',
      choices: {
        A: 'The security group doesn’t allow outbound HTTP traffic.',
        B: 'The security group doesn’t allow inbound HTTP traffic.',
        C: 'The instances don’t have elastic IP addresses.',
        D: 'The NACL for the VPC’s subnet allows all inbound traffic.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q296
    {
      question: 'Which of the following statements is false?',
      choices: {
        A: 'One VPC can have a single internet gateway.',
        B: 'One VPC can have multiple subnets.',
        C: 'A single instance retains its public IP within a VPC when stopped and restarted.',
        D: 'A single instance does not retain its public IP within a VPC when stopped and  restarted.Review Questions   49'
      },
      answer: 'D'
    },
    // Q297
    {
      question: 'Which of the following statements is false?',
      choices: {
        A: 'A subnet cannot span multiple availability zones.',
        B: 'A VPC can peer with no more than two other VPCs.',
        C: 'A VPC can peer with VPCs in other AWS accounts.',
        D: 'A subnet can be public or private if a VPC has an internet gateway attached.'
      },
      answer: 'B'
    },
    // Q298
    {
      question: 'Why would you choose a NAT instance over a NAT gateway?',
      choices: {
        A: 'NAT instances are faster than NAT gateways.',
        B: 'NAT instances auto-size to accommodate traffic increases, while NAT gateways do not.',
        C: 'NAT instances are automatically kept updated with patches by AWS, while NAT  gateways are not.',
        D: 'You wouldn’t; NAT gateways are, in general, a better solution than NAT instances.'
      },
      answer: 'D'
    },
    // Q299
    {
      question: 'How do you change a VPC that is set to use dedicated hosting tenancy to use default   tenancy?',
      choices: {
        A: 'You can change the hosting tenancy of the VPC without affecting the running  instances.',
        B: 'Stop all instances in the VPC, and then you can change the VPC’s hosting tenancy.',
        C: 'Remove all instances in the VPC, and then you can change the VPC’s hosting   tenanc y.',
        D: 'You can’t; you must re-create the VPC.'
      },
      answer: 'D'
    },
    // Q300
    {
      question: 'How quickly are changes made to the security group within a custom VPC applied?',
      choices: {
        A: 'Immediately',
        B: 'Within 60–90 seconds',
        C: 'The next time each instance restarts, or within 24 hours if the instance does not  restart',
        D: 'Security groups aren’t associated with VPCs.'
      },
      answer: 'A'
    },
    // Q301
    {
      question: 'You have a custom VPC with a public subnet. The VPC has an internet gateway attached  to it. What else should you do to ensure that instances within the subnet can reach the  Internet?',
      choices: {
        A: 'Add a route to the route table that directs traffic directed at the public Internet to go  through the internet gateway.',
        B: 'Add a rule to the security group allowing outbound traffic out via HTTP.',
        C: 'Ensure that each instance has a public IP address.',
        D: 'The instances should have public access with this configuration already.'
      },
      answer: 'A'
    },
    // Q302
    {
      question: 'Which types of content can CloudFront cache?',
      choices: {
        A: 'Static and dynamic content',
        B: 'Static content, but not dynamic content',
        C: 'Dynamic content, but not static content',
        D: 'CloudFront is not a caching mechanism.50   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'A'
    },
    // Q303
    {
      question: 'You have web applications that are serving up content via a large RDS instance. You are  seeing heavy database utilization and want to improve performance. What might you sug- gest? (Choose two.)',
      choices: {
        A: 'Increase the instance size of the database.',
        B: 'Increase the instance size of the web application servers.',
        C: 'Set up CloudFront to handle dynamic content as well as static content.',
        D: 'Add an additional fleet of EC2 instances to serve the web content.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q304
    {
      question: 'You are tasked with creating a new VPC for a large company, hosting a fleet of instances  within the VPC, and ensuring that they can write to the company’s S3 buckets and also  be accessed via a REST API that they each host. Which of the following would be part of  your proposed solution? (Choose two.)',
      choices: {
        A: 'A customer gateway',
        B: 'An internet gateway',
        C: 'A VPC endpoint',
        D: 'A new NACL'
      },
      answer: [ 'B', 'C' ]
    },
    // Q305
    {
      question: 'You are tasked with hosting a fleet of instances within the default VPC of a company’s  AWS account and ensuring that the instances can write to the company’s S3 buckets and  also be accessed via a REST API that they each host. Which of the following would be  part of your proposed solution? (Choose two.)',
      choices: {
        A: 'A customer gateway',
        B: 'An internet gateway',
        C: 'A VPC endpoint',
        D: 'An updated set of rules for the NACL'
      },
      answer: [ 'C', 'D' ]
    },
    // Q306
    {
      question: 'You have been asked to troubleshoot a Direct Connect connection between your com- pany’s on-site data center and a subnet within a public VPC. You have confirmed that  you can reach the instances in the VPC from your data center, but those instances cannot  reach back to your data center. What would you investigate? (Choose two.)',
      choices: {
        A: 'The VPC subnet’s routing table',
        B: 'The on-site storage gateway',
        C: 'The NAT instance in your VPC',
        D: 'The virtual private gateway configuration'
      },
      answer: [ 'A', 'D' ]
    },
    // Q307
    {
      question: 'What is route propagation with respect to a virtual private gateway?',
      choices: {
        A: 'It copies all routes from an on-site network to an AWS VPC’s subnets routing tables.',
        B: 'It helps avoid manually entering VPN routes into your VPC routing tables.',
        C: 'It automatically allows inbound traffic from your on-premises connection.',
        D: 'It enables storage-based traffic from a customer’s storage gateway.Review Questions   51'
      },
      answer: 'B'
    },
    // Q308
    {
      question: 'What URL provides you with the public and private IP addresses of running EC2 instances?',
      choices: {
        A: 'http://169.254.169.254/meta-data/',
        B: 'http://169.254.169.254/latest/meta-data/',
        C: 'http://169.254.169.254/instance-data/',
        D: 'http://169.254.169.254/latest/instance-data/'
      },
      answer: 'B'
    },
    // Q309
    {
      question: 'Which of the following is a highly durable key-value store?',
      choices: {
        A: 'S3',
        B: 'EFS',
        C: 'EBS',
        D: 'ElastiCache'
      },
      answer: 'A'
    },
    // Q310
    {
      question: 'Which of the following is a valid Glacier use case?',
      choices: {
        A: 'Storing insurance documents accessed once or twice a day by mobile clients',
        B: 'Storing medical records in case of annual audits',
        C: 'Storing patient images used in the scheduling department’s web-based software',
        D: 'Storing X-rays used in teaching exercises at the local college'
      },
      answer: 'B'
    },
    // Q311
    {
      question: 'You have been called in to mitigate a disastrous loss of data on S3 at a bioethics company.  After investigating, it is determined that the data was deleted accidentally by a developer.  The company wants to ensure that data cannot be accidentally deleted like this in the  future. What would you suggest? (Choose two.)',
      choices: {
        A: 'Enable S3 versioning on all S3 buckets.',
        B: 'Create an IAM policy that disallows developers from deleting data in S3.',
        C: 'Replace the current access pattern with signed URLs.',
        D: 'Enable MFA Delete on the buckets.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q312
    {
      question: 'How many instances can you launch in a given AWS region?',
      choices: {
        A: '20',
        B: '40',
        C: '20, but this is a soft limit and can be increased by AWS',
        D: '40, but this is a soft limit and can be increased by AWS'
      },
      answer: 'C'
    },
    // Q313
    {
      question: 'You are using a NAT instance inside of a VPC to support routing out to the public Inter- net from private instances within that VPC. As traffic has increased, the performance of  any operations involving the outbound Internet traffic has degraded to unacceptable lev- els. How would you mitigate this problem?',
      choices: {
        A: 'Add an additional internet gateway so the NAT instance can split outbound traffic  over two gateways.',
        B: 'Add an additional elastic IP to the NAT instance to increase throughput.',
        C: 'Increase the instance size of the NAT instance by one or more instance size classes.',
        D: 'All of these are valid solutions.52   Chapter 1   ■   Domain 1: Design Resilient Architectures'
      },
      answer: 'C'
    },
    // Q314
    {
      question: 'What is the simplest way to reduce frequent scaling in an application? For example, if an  application is showing that it’s scaling up and down multiple times in an hour, how would  you reduce the number of “ups and downs” you are seeing?',
      choices: {
        A: 'Set up scheduled times with proactive cycling for the scaling so that it is not occur- ring all the time.',
        B: 'Increase the cooldown timers so that scaling down requires greater thresholds of  change in your triggers.',
        C: 'Update CloudWatch to use a FIFO termination policy, only terminating the oldest  instances in a scaledown.',
        D: 'None of these will improve the issue.'
      },
      answer: 'B'
    },
    // Q315
    {
      question: 'Which of these steps are required to get a NAT instance working? (Choose two.)',
      choices: {
        A: 'Update the routing table for EC2 instances accessing the public Internet to go  through the NAT instance.',
        B: 'Locate the NAT instance within the private subnet that it will be serving.',
        C: 'Disable source/destination checks on your instance.',
        D: 'Set the NAT instance to allow port forwarding from the private subnet.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q316
    {
      question: 'Which of these is not a default CloudWatch metric?',
      choices: {
        A: 'Disk read operations',
        B: 'Memory usage',
        C: 'CPU usage',
        D: 'Inbound network traffic'
      },
      answer: 'B'
    },
    // Q317
    {
      question: 'You have an existing fleet of EC2 instances in a public subnet of your VPC. You launch  an additional instance from the same AMI as the existing instances, into the same public  subnet. What steps might you need to take to ensure that this instance can reach the pub- lic Internet? (Choose two.)',
      choices: {
        A: 'Assign an elastic IP address to the instance.',
        B: 'Add the instance to the ELB serving the existing instances.',
        C: 'Add the instance into a private subnet.',
        D: 'Ensure that the instance has a route out to the Internet.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q318
    {
      question: 'Which of the following is the destination address for the public Internet?',
      choices: {
        A: '192.168.1.255/0',
        B: '0.0.0.0/16',
        C: '169.254.169.254/0',
        D: '0.0.0.0/0'
      },
      answer: 'D'
    },
    // Q319
    {
      question: 'Which of the following would you use to route traffic from your subnet to the public Internet?',
      choices: {
        A: 'Destination: 0.0.0.0/0  ➢  Target: your internet gateway',
        B: 'Destination: 0.0.0.0/16  ➢  Target: your internet gateway',
        C: 'Destination: your internet gateway  ➢  Target: 0.0.0.0/0',
        D: 'Destination: 0.0.0.0/0  ➢  Target: your virtual private gateway'
      },
      answer: 'A'
    }];