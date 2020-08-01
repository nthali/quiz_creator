const myQuestions = [
    // Q1
    {
      question: 'How many times will a message be delivered when using a standard SQS queue?',
      choices: {
        A: 'Once and only once',
        B: 'At least once',
        C: 'Once for each request of the relevant message in the queue',
        D: 'The answer is application dependent.'
      },
      answer: 'B'
    },
    // Q2
    {
      question: 'Which of the following services allow you to access the underlying operating system?  (Choose two.)',
      choices: {
        A: 'RDS',
        B: 'EC2',
        C: 'EMR',
        D: 'DynamoDB'
      },
      answer: [ 'B', 'C' ]
    },
    // Q3
    {
      question: 'You are using an SQS queue in your web application. You are able to confirm that mes- sages in the queue are being picked up by application instances for processing, but then  nothing happens for over 12 hours. Then, after that period of time, the message appears  in the queue again and processing restarts. What could be occurring?',
      choices: {
        A: 'The SQS queue has a visibility timeout that is set too high. The timeout should be  reduced so that application instances can process the message more quickly.',
        B: 'SQS messages expire every 12 hours and must be reentered into the queue. The time  that the message is invisible triggers the queue to ask for and receive the message from  the original sender.',
        C: 'Processing is failing, or not completing, in the application instance. The message dis- appears because the SQS queue keeps it “invisible” for 12 hours while it is being pro- cessed. The message is then returned to the queue for processing if not handled prior  to that timeout.',
        D: 'Your SQS queue needs to be restarted; it is likely not correctly queuing messages. The  polling interval is also set too high, causing the long lack of visibility of the message.'
      },
      answer: 'C'
    },
    // Q4
    {
      question: 'Which of the following is a valid method of performing actions on an EBS snapshot?',
      choices: {
        A: 'Use the AWS console with a username and password.',
        B: 'Use the AWS CLI with an application key.',
        C: 'Use the AWS REST APIs with an application key.',
        D: 'All of the above',
        E: 'None of the aboveReview Questions   155'
      },
      answer: 'D'
    },
    // Q5
    {
      question: 'Which of the following is most like a mailing list?',
      choices: {
        A: 'SQS',
        B: 'SNS',
        C: 'SWF',
        D: 'S3'
      },
      answer: 'B'
    },
    // Q6
    {
      question: 'In which of the following managed services are messages not pushed?',
      choices: {
        A: 'SQS',
        B: 'SNS',
        C: 'SWF',
        D: 'Redshift'
      },
      answer: 'A'
    },
    // Q7
    {
      question: 'In which of the following managed services can messages be pulled by an application?',
      choices: {
        A: 'SWF',
        B: 'SQS',
        C: 'SNS',
        D: 'S3'
      },
      answer: 'B'
    },
    // Q8
    {
      question: 'Which of the following managed services guarantees single assignment of a message?',
      choices: {
        A: 'S3',
        B: 'SQS',
        C: 'SNS',
        D: 'SWF'
      },
      answer: 'D'
    },
    // Q9
    {
      question: 'Which of the following managed services calls the messages it receives tasks?',
      choices: {
        A: 'S3',
        B: 'SWF',
        C: 'SNS',
        D: 'SQS'
      },
      answer: 'B'
    },
    // Q10
    {
      question: 'Which of the following managed services calls the messages it receives notifications?',
      choices: {
        A: 'S3',
        B: 'SWF',
        C: 'SNS',
        D: 'SQS'
      },
      answer: 'C'
    },
    // Q11
    {
      question: 'Which of the following managed services calls the messages it receives “messages”?',
      choices: {
        A: 'S3',
        B: 'SWF',
        C: 'SNS',
        D: 'None of these156   Chapter 5   ■   Domain 5: Define Operationally Excellent Architectures'
      },
      answer: 'D'
    },
    // Q12
    {
      question: 'Which of the following managed services coordinates activities between different   applications?',
      choices: {
        A: 'S3',
        B: 'SNS',
        C: 'SWF',
        D: 'SQS'
      },
      answer: 'C'
    },
    // Q13
    {
      question: 'What does SWF stand for?',
      choices: {
        A: 'Simple Workflow Foundation',
        B: 'Simple Workflow Service',
        C: 'Sequential Workflow Service',
        D: 'Synchronous Workflow Foundation'
      },
      answer: 'B'
    },
    // Q14
    {
      question: 'What services are suitable for running compute-intensive custom scripts? (Choose two.)',
      choices: {
        A: 'EC2',
        B: 'S3',
        C: 'Redshift',
        D: 'ECS'
      },
      answer: [ 'A', 'D' ]
    },
    // Q15
    {
      question: 'Which AWS service is ideal for hosting a website while requiring the least amount of AWS  staff and knowledge?',
      choices: {
        A: 'S3 website hosting',
        B: 'Amazon Lightsail',
        C: 'EC2',
        D: 'ECS'
      },
      answer: 'B'
    },
    // Q16
    {
      question: 'You have a registered AMI using an EBS volume as a root device, created from a volume  snapshot. However, you have detected malicious code running in the EBS volume and  want to remove the AMI and delete the EBS volume and its snapshot. What steps are  required? (Choose two.)',
      choices: {
        A: 'Immediately delete the EBS volume snapshot.',
        B: 'Immediately deregister the AMI.',
        C: 'After the EBS volume has been deleted, deregister the AMI.',
        D: 'After the AMI has been deregistered, remove the AMI, and delete the EBS volume  and its snapshot.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q17
    {
      question: 'Which of the following AWS CLI commands is used to operate upon EBS volumes?',
      choices: {
        A: 'aws ec2 [command]',
        B: 'aws ebs [command]',
        C: 'aws instance [command]',
        D: 'You cannot operate upon EBS volumes directly from the AWS CLI.Review Questions   157'
      },
      answer: 'A'
    },
    // Q18
    {
      question: 'You have a website running at  applestoapples.net . However, many of your users have   mistakenly entered in  applestoapples.com  as the URL in their browser. To correct this,  you’ve recently purchased the additional domain  applestoapples.com  and now want to point  all requests to this domain to  applestoapples.net . Which DNS record set would you use?',
      choices: {
        A: 'MX',
        B: 'AAAA',
        C: 'CNAME',
        D: 'A'
      },
      answer: 'C'
    },
    // Q19
    {
      question: 'Your website has mostly static content, but you are adding a new section driven by an  EC2 instance fleet behind an Elastic Load Balancer. You want to create a subdomain and  direct all traffic to that subdomain toward the ELB. Which DNS record set would you use?',
      choices: {
        A: 'CNAME',
        B: 'AAAA',
        C: 'SOA',
        D: 'MX'
      },
      answer: 'A'
    },
    // Q20
    {
      question: 'Your domain is hosted and managed by Route 53. You want to create a new subdomain  and point it to a fleet of EC2 instances behind an application load balancer. What is the  best approach to this?',
      choices: {
        A: 'Create an A record and configure it as an alias to the AL',
        B: '.   Create a CNAME record pointed at the URL of the ALB.',
        C: 'Create an A record pointed at the IP address of the ALB.',
        D: 'Set the ALB to send a redirect header to clients with the IP addresses of the currently  active EC2 instances.'
      },
      answer: 'A'
    },
    // Q21
    {
      question: 'Does Route 53 supports zone apex records?',
      choices: {
        A: 'Yes, for all domains',
        B: 'Yes, but only for domains hosted on AWS',
        C: 'Yes, but only for services hosted on AWS',
        D: 'No'
      },
      answer: 'A'
    },
    // Q22
    {
      question: 'Which of the following statements are false? (Choose two.)',
      choices: {
        A: 'Route 53 does not allow aliases for naked domain names.',
        B: 'Route 53 supports zone apex records.',
        C: 'Route 53 allows aliases for domains hosted on AWS.',
        D: 'Route 53 only supports zone apex records for AWS-hosted services.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q23
    {
      question: 'Which of the following statements are true? (Choose two.)',
      choices: {
        A: 'Route 53 supports Auto Scaling groups.',
        B: 'Route 53 automatically configures DNS health checks for registered domains.',
        C: 'Route 53 automatically sets up Auto Scaling groups for services to which it points.',
        D: 'Route 53 is automatically highly available.158   Chapter 5   ■   Domain 5: Define Operationally Excellent Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q24
    {
      question: 'How many domain names can you manage using Route 53?',
      choices: {
        A: '50',
        B: '100, but you can raise that limit by contacting AWS support.',
        C: 'Unlimited',
        D: '50, but you can raise that limit by contacting AWS support.'
      },
      answer: 'D'
    },
    // Q25
    {
      question: 'Which of the following is the best approach to accessing an RDS instance to troubleshoot  operating system problems?',
      choices: {
        A: 'SSH',
        B: 'RDP',
        C: 'SFTP',
        D: 'None of these'
      },
      answer: 'D'
    },
    // Q26
    {
      question: 'Which of the following are true about VPC peering? (Choose two.)',
      choices: {
        A: 'A VPC peering connection is a networking connection between two VPCs within a  single region.',
        B: 'A VPC peering connection is a VPN-based connection.',
        C: 'A VPC peering connection can help facilitate data transfer and file sharing.',
        D: 'Peered VPCs can exist in different regions.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q27
    {
      question: 'You have two VPCs paired across two different regions. What is another name for this  type of connection?',
      choices: {
        A: 'Inter-VPC peering connection',
        B: 'Inter-region VPC peering connection',
        C: 'Inter-VPC region connection',
        D: 'Multi-region peering connection'
      },
      answer: 'B'
    },
    // Q28
    {
      question: 'Which of the following statements about peered VPCs is false?',
      choices: {
        A: 'Both VPCs do not need to be within the same region.',
        B: 'Both VPCs do not need to be in the same AWS account.',
        C: 'Both VPCs will automatically have routing set up when the connection is created.',
        D: 'Traffic can flow in both directions between peered VPCs by default.'
      },
      answer: 'C'
    },
    // Q29
    {
      question: 'Which of the following statements about peered VPCs is true?',
      choices: {
        A: 'Both VPCs need to be within the same region.',
        B: 'Both VPCs need to be in the same AWS account.',
        C: 'Each VPC must use a unique security group.',
        D: 'The two VPCs cannot have overlapping CIDR blocks.Review Questions   159'
      },
      answer: 'D'
    },
    // Q30
    {
      question: 'What kind of relationship is a VPC peering connection?',
      choices: {
        A: 'One-to-one between subnets',
        B: 'One-to-one between VPCs',
        C: 'One-to-many between subnets',
        D: 'One-to-many between VPCs'
      },
      answer: 'B'
    },
    // Q31
    {
      question: 'VPC A is peered to both VPC B and VPC C. How can you allow traffic to flow from VPC  B to VPC C?',
      choices: {
        A: 'You can’t; transitive peering relationships are not allowed in AWS.',
        B: 'You must enable route forwarding in VPC A.',
        C: 'You must peer VPC B to VPC C.',
        D: 'You must enable route forwarding on VPC B.'
      },
      answer: 'C'
    },
    // Q32
    {
      question: 'VPC C has an overlapping CIDR block with VPC D. Given that, which of the following  statements are true? (Choose two.)',
      choices: {
        A: 'VPC C and VPC D can be peered as is.',
        B: 'VPC C and VPC D cannot be peered as is.',
        C: 'To peer VPC C and VPC D, you must remove the overlap in their CIDR block.',
        D: 'To peer VPC C and VPC D, you must switch one to use IPv6 addresses.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q33
    {
      question: 'How many peering connections are allowed between two VPCs?',
      choices: {
        A: 'One',
        B: 'Two',
        C: 'One for each subnet in each VPC',
        D: 'One for each NACL associated with each VPC'
      },
      answer: 'A'
    },
    // Q34
    {
      question: 'How many peering connections can a single VPC be a part of?',
      choices: {
        A: 'One',
        B: 'Unlimited, within AWS overall account limits',
        C: 'One for each subnet in each VPC',
        D: 'One for each NACL associated with each VPC'
      },
      answer: 'B'
    },
    // Q35
    {
      question: 'How does AWS facilitate transitive peering VPC relationships?',
      choices: {
        A: 'Transitive VPC relationships are only allowed if a bastion host is used.',
        B: 'Transitive VPC relationships are only allowed if a hub-and-spoke network model is  used.',
        C: 'It does not; transitive VPC peering is not allowed in AWS.',
        D: 'It uses IPv4 for connection from a source VPC to a hub VPC and IPv6 from the hub  to the origin VPC.160   Chapter 5   ■   Domain 5: Define Operationally Excellent Architectures'
      },
      answer: 'C'
    },
    // Q36
    {
      question: 'How does AWS support IPv6 communication in a VPC peering relationship? (Choose  two.)',
      choices: {
        A: 'AWS does not support IPv6 communication in VPC peering.',
        B: 'You must associate IPv6 addresses with both VPCs and then set up routing to use  these addresses.',
        C: 'You must associate IPv6 addresses with both VPCs and then set up a security group  to use these addresses.',
        D: 'You must make sure the two VPCs are in the same region.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q37
    {
      question: 'Which of the following are advantages of launching instances into a VPC as opposed to  EC2-Classic? (Choose two.)',
      choices: {
        A: 'You can assign multiple IP addresses to your instances.',
        B: 'Your instances automatically run on multi-tenant hardware.',
        C: 'You can attach multiple network interfaces to your instances.',
        D: 'Your network is flat instead of layered.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q38
    {
      question: 'Which of the following are differences between the default VPC and a custom VPC?  (Choose two.)',
      choices: {
        A: 'Default VPCs have an internet gateway but custom VPCs do not.',
        B: 'Custom VPCs have public subnets but default VPCs do not.',
        C: 'Custom VPCs have an internet gateway but default VPCs do not.',
        D: 'Default VPCs have public subnets but custom VPCs do not.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q39
    {
      question: 'How does the default VPC make instances in its public subnets available to Internet traf- fic? (Choose two.)',
      choices: {
        A: 'Through a default routing table that provides routing to the Internet',
        B: 'Through a virtual private gateway',
        C: 'Through a default security group that provides access out to the Internet',
        D: 'Through an internet gateway'
      },
      answer: [ 'A', 'D' ]
    },
    // Q40
    {
      question: 'Which of the following is assigned to instances launched into non-default subnets?',
      choices: {
        A: 'A private IPv6 address',
        B: 'A public IPv4 address',
        C: 'A private IPv4 address',
        D: 'A public IPv6 addressReview Questions   161'
      },
      answer: 'C'
    },
    // Q41
    {
      question: 'You want to provide Internet access for an instance in a non-default subnet. What do you  need to do? (Choose two.)',
      choices: {
        A: 'Assign a private IP address to the instance.',
        B: 'Assign a public IP address to the instance.',
        C: 'Attach an internet gateway to the VPC in which the subnet resides.',
        D: 'Attach a NAT instance to the subnet.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q42
    {
      question: 'What technology can you use to provide single sign-on to the AWS management console?',
      choices: {
        A: 'JSON',
        B: 'CloudFormation',
        C: 'YA ML',
        D: 'SAML'
      },
      answer: 'D'
    },
    // Q43
    {
      question: 'You have created a new user in IAM. What default permissions does that user have?',
      choices: {
        A: 'Read access to all AWS services',
        B: 'Read and write access to all AWS services',
        C: 'No access to any AWS services',
        D: 'Read access only to the IAM service'
      },
      answer: 'C'
    },
    // Q44
    {
      question: 'What does IAM stand for?',
      choices: {
        A: 'Interoperative Access Management',
        B: 'Identity and Access Management',
        C: 'Independent Access Management',
        D: 'Identity and Authorization Management'
      },
      answer: 'B'
    },
    // Q45
    {
      question: 'You have created a new IAM user and created their sign-in URL. You give the user their  URL. What else will they need to log in to the AWS management console? (Choose two.)',
      choices: {
        A: 'Their username',
        B: 'Their access key ID',
        C: 'Their password',
        D: 'Their secret access key'
      },
      answer: [ 'A', 'C' ]
    },
    // Q46
    {
      question: 'Which of the following IAM groups will allow users within it to interact with all AWS  services?',
      choices: {
        A: 'Administrator',
        B: 'Power User',
        C: 'The default IAM permissions provide this level of access.',
        D: 'Support User162   Chapter 5   ■   Domain 5: Define Operationally Excellent Architectures'
      },
      answer: 'A'
    },
    // Q47
    {
      question: 'You have created a new IAM user and given the credentials to the user. However, she still  is unable to log in to the AWS management console. What might the problem be?',
      choices: {
        A: 'You have not enabled Multi-Factor Authentication.',
        B: 'You have not enabled the User Login policy.',
        C: 'You have not provided the user her access key I',
        D: '.   You have not provided the user her customized sign-in link.'
      },
      answer: 'D'
    },
    // Q48
    {
      question: 'You have been tasked with building an application that provides backend servicing for  a mobile game with millions of users. Which of the following services might you use to  receive and process the messages that the mobile clients send?',
      choices: {
        A: 'EC2, Mobile SDK',
        B: 'Amazon Kinesis, Mobile SDK',
        C: 'Amazon Kinesis, RDS',
        D: 'EC2, Lambda'
      },
      answer: 'B'
    },
    // Q49
    {
      question: 'Which of the following is required to set up a new AWS account for a company new to  AW S?',
      choices: {
        A: 'Company name',
        B: 'Company email',
        C: 'Company account-holder username',
        D: 'Company URL'
      },
      answer: 'B'
    },
    // Q50
    {
      question: 'Which of the following AWS-defined IAM policies offer read and write access to the S3  and EC2 services? (Choose two.)',
      choices: {
        A: 'Administrator',
        B: 'Network Administrator',
        C: 'Support User',
        D: 'Power User'
      },
      answer: [ 'A', 'D' ]
    },
    // Q51
    {
      question: 'What does AWS call a document that defines a set of one or more permissions?',
      choices: {
        A: 'Program unit',
        B: 'Organizational unit',
        C: 'Policy',
        D: 'Group'
      },
      answer: 'C'
    },
    // Q52
    {
      question: 'What does the AWS service abbreviated as ECS stand for?',
      choices: {
        A: 'Elastic Compute Service',
        B: 'Elastic Container Service',
        C: 'Elastic Computer Service',
        D: 'Encapsulated Container ServiceReview Questions   163'
      },
      answer: 'B'
    },
    // Q53
    {
      question: 'Which of the following are advantages of using containers for applications in AWS com- pared to using EC2 instances? (Choose two.)',
      choices: {
        A: 'You can scale applications automatically.',
        B: 'You can run larger applications in a container.',
        C: 'You can reduce the startup time of applications.',
        D: 'You can avoid having to explicitly manage and provision servers.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q54
    {
      question: 'Which of the following sets of services are used in a typical AWS container stack?',
      choices: {
        A: 'ECR, ECS, EC2',
        B: 'ECS, EMR, EC2',
        C: 'Fargate, ECS, S3',
        D: 'ECR, ECS, S3'
      },
      answer: 'A'
    },
    // Q55
    {
      question: 'Which of the following services is typically associated with ECS?',
      choices: {
        A: 'EMR',
        B: 'S3',
        C: 'ECR',
        D: 'ECC'
      },
      answer: 'C'
    },
    // Q56
    {
      question: 'Which of the following are good reasons to consider using containers in AWS for your  applications? (Choose two.)',
      choices: {
        A: 'You want to reduce overall cost.',
        B: 'You want to more effectively use your existing compute instances.',
        C: 'You have limited resources for managing your existing EC2 instances.',
        D: 'You need to scale up and down your applications.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q57
    {
      question: 'Which of the following are differences between container-based applications and  Lambda-based ones? (Choose two.)',
      choices: {
        A: 'Containers scale based on load and usage; Lambda scales based on events.',
        B: 'Containers live on underlying compute instances; Lambda code does not.',
        C: 'Containers are not as highly scalable as Lambda.',
        D: 'Containers can run entire application stacks; Lambda can only run isolated chunks of  code.'
      },
      answer: [ 'A', 'D' ]
    }];