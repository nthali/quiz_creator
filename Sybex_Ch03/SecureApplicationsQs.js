const myQuestions = [
    // Q1
    {
      question: 'When creating a new security group, which of the following are true? (Choose two.)',
      choices: {
        A: 'All inbound traffic is allowed by default.',
        B: 'All outbound traffic is allowed by default.',
        C: 'Connections that are allowed in must also explicitly be allowed back out.',
        D: 'Connections that are allowed in are automatically allowed back out.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q2
    {
      question: 'You have a government-regulated system that will store a large amount of data on S3  standard. You must encrypt all data and preserve a clear audit trail for traceability and  third-party auditing. Security policies dictate that encryption must be consistent across  the entire data store. Which of the following encryption approaches would be best?',
      choices: {
        A: 'SSE-C',
        B: 'SSE-KMS',
        C: 'SSE-C',
        D: 'Encrypt the data prior to upload to S3 and decrypt the data when returning it to the  client.'
      },
      answer: 'B'
    },
    // Q3
    {
      question: 'You are creating a bastion host to allow SSH access to a set of EC2 instances in a private  subnet within your organization’s VPC. Which of the following should be done as part of  configuring the bastion host? (Choose two.)',
      choices: {
        A: 'Ensure that the bastion host is exposed directly to the Internet.',
        B: 'Place the bastion host within the private subnet.',
        C: 'Add a route from the bastion host IP into the private subnet into the subnet’s NACLs.',
        D: 'Ensure that the bastion host is within the same security group as the hosts within the  private subnet.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q4
    {
      question: 'Which of the following are invalid IAM actions? (Choose two.)',
      choices: {
        A: 'Limiting the root account SSH access to all EC2 instances',
        B: 'Allowing a user account SSH access to all EC2 instances',
        C: 'Removing console access for the root account',
        D: 'Removing console access for all non-root user accounts'
      },
      answer: [ 'A', 'C' ]
    },
    // Q5
    {
      question: 'Which of the following statements is true?',
      choices: {
        A: 'You should store application keys only in your application’s  .aws  file.',
        B: 'You should never store your application keys on an instance, in an AMI, or anywhere  else permanent on the cloud.',
        C: 'You should only store application keys in an encrypted AMI.',
        D: 'You should only use your application key to log in to the AWS console.Review Questions   95'
      },
      answer: 'B'
    },
    // Q6
    {
      question: 'Your company is setting up a VPN connection to connect its local network to an AWS  VPC. Which of the following components are  not  necessary for this setup? (Choose two.)',
      choices: {
        A: 'A NAT instance',
        B: 'A virtual private gateway',
        C: 'A private subnet in the AWS VPC',
        D: 'A customer gateway'
      },
      answer: [ 'A', 'C' ]
    },
    // Q7
    {
      question: 'You have a private subnet in a VPC within AWS. The instances within the subnet are  unable to access the Internet. You have created a NAT gateway to solve this problem.  What additional steps do you need to perform to allow the instances Internet access?  (Choose two.)',
      choices: {
        A: 'Ensure that the NAT gateway is in the same subnet as the instances that cannot  access the Internet.',
        B: 'Add a route in the private subnet to route traffic aimed at 0.0.0.0/0 at the NAT   gateway.',
        C: 'Add a route in the public subnet to route traffic aimed at 0.0.0.0/0 at the NAT   gateway.',
        D: 'Ensure that the NAT gateway is in a public subnet.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q8
    {
      question: 'Which of the following statements regarding NAT instances and NAT gateways are false?  (Choose two.)',
      choices: {
        A: 'Both NAT instances and NAT gateways are highly available.',
        B: 'You must choose the instance type and size when creating a NAT gateway but not  when creating a NAT instance.',
        C: 'It is your responsibility to patch a NAT instance and AWS’s responsibility to patch a  NAT gateway.',
        D: 'You assign a security group to a NAT instance but not to a NAT gateway.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q9
    {
      question: 'Which of the following statements is true?',
      choices: {
        A: 'A VPC’s default NACLs allow all inbound and outbound traffic.',
        B: 'NACLs are stateful.',
        C: 'Security groups are stateless.',
        D: 'Traffic allowed into a NACL is automatically allowed back out.'
      },
      answer: 'A'
    },
    // Q10
    {
      question: 'You have changed the permissions associated with a role, and that role is assigned to an  existing running EC2 instance. When will the permissions you updated take effect for the  instance?',
      choices: {
        A: 'Immediately',
        B: 'Within 5 minutes',
        C: 'Within 1 hour',
        D: 'The next time the EC2 instance is restarted96   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'A'
    },
    // Q11
    {
      question: 'Which of the following statements is true?',
      choices: {
        A: 'When creating a new security group, by default, all traffic is allowed in, including  SSH.',
        B: 'If you need inbound HTTP and HTTPS access, create a new security group and  accept the default settings.',
        C: 'You must explicitly allow any inbound traffic into a new security group.',
        D: 'Security groups are stateless.'
      },
      answer: 'C'
    },
    // Q12
    {
      question: 'Which of the following statements is not true?',
      choices: {
        A: 'When creating a new security group, by default, no inbound traffic is allowed.',
        B: 'When creating a new security group, by default, all traffic is allowed out, including  SSH.',
        C: 'When creating a new security group, by default, all traffic is allowed out, with the  exception of SSH.',
        D: 'When creating a new security group, inbound HTTPS traffic is not allowed.'
      },
      answer: 'C'
    },
    // Q13
    {
      question: 'How would you enable encryption of your EBS volumes?',
      choices: {
        A: 'Use the AWS CLI with the aws security command.',
        B: 'Take a snapshot of the EBS volume and copy it to an encrypted S3 bucket.',
        C: 'Select the encryption option when creating the EBS volume.',
        D: 'Encrypt the volume using the encryption tools of the operating system of the EC2  instance that has mounted the EBS volume.'
      },
      answer: 'C'
    },
    // Q14
    {
      question: 'What types of rules does a security group allow? (Choose two.)',
      choices: {
        A: 'Allow rules',
        B: 'Prevent rules',
        C: 'Deny rules',
        D: 'Inbound rules'
      },
      answer: [ 'A', 'D' ]
    },
    // Q15
    {
      question: 'Which of the following are true about security groups? (Choose two.)',
      choices: {
        A: 'You can specify deny rules, but not allow rules.',
        B: 'By default, a security group includes an outbound rule that allows all outbound   traffic.',
        C: 'You can specify specific separate rules for inbound and outbound traffic.',
        D: 'Security groups are stateless.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q16
    {
      question: 'Which of the following are not true about security groups? (Choose two.)',
      choices: {
        A: 'Allow rules take priority over deny rules.',
        B: 'Responses to allowed inbound traffic are allowed to flow back out.',
        C: 'You can specify specific separate rules for inbound and outbound traffic.',
        D: 'If there are no outbound rules, then all outbound traffic is allowed to flow out.Review Questions   97'
      },
      answer: [ 'A', 'D' ]
    },
    // Q17
    {
      question: 'Which of the following must a security group have when you create it? (Choose two.)',
      choices: {
        A: 'At least one inbound rule',
        B: 'A name',
        C: 'A description',
        D: 'At least one outbound rule'
      },
      answer: [ 'B', 'C' ]
    },
    // Q18
    {
      question: 'Which of the following is a security group associated with?',
      choices: {
        A: 'An ELB',
        B: 'A network interface',
        C: 'An ALB',
        D: 'A network access list'
      },
      answer: 'B'
    },
    // Q19
    {
      question: 'Which of the following are default rules on a default security group, such as the one that  comes with the default VPC? (Choose two.)',
      choices: {
        A: 'Outbound: 0.0.0.0/0 for all protocols allowed',
        B: 'Inbound: 0.0.0.0/0 for all protocols allowed',
        C: 'Outbound: ::/0 for all protocols allowed',
        D: 'Inbound: ::/0 for all protocols allowed'
      },
      answer: [ 'A', 'C' ]
    },
    // Q20
    {
      question: 'Which of the following are parts of a security group rule? (Choose two.)',
      choices: {
        A: 'A protocol',
        B: 'A subnet',
        C: 'An instance ID',
        D: 'A description'
      },
      answer: [ 'A', 'D' ]
    },
    // Q21
    {
      question: 'Which of the following allows you to securely upload data to S3? (Choose two.)',
      choices: {
        A: 'HTTP endpoints using HTTP',
        B: 'SSL endpoints using HTTPS',
        C: 'HTTP endpoints using HTTPS',
        D: 'SSL endpoints using HTTP'
      },
      answer: [ 'B', 'C' ]
    },
    // Q22
    {
      question: 'Which of the following describes client-side encryption for S3 bucket data?',
      choices: {
        A: 'You encrypt and upload data to S3, managing the encryption process yourself.',
        B: 'You encrypt and upload data to S3, allowing AWS to manage the encryption process.',
        C: 'You request AWS to encrypt an object before saving it to S3.',
        D: 'You encrypt an object, but AWS uploads and decrypts the object.'
      },
      answer: 'A'
    },
    // Q23
    {
      question: 'Which of the following describes server-side encryption for S3 bucket data?',
      choices: {
        A: 'You encrypt and upload data to S3, managing the encryption process yourself.',
        B: 'You encrypt and upload data to S3, allowing AWS to manage the encryption process.',
        C: 'You request AWS to encrypt an object before saving it to S3.',
        D: 'You encrypt an object, but AWS uploads and decrypts the object.98   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'C'
    },
    // Q24
    {
      question: 'Which of the following are valid steps in enabling client-side encryption for S3? (Choose two.)',
      choices: {
        A: 'Download the AWS CLI and SSH to your S3 key store.',
        B: 'Use a KMS-managed customer master key.',
        C: 'Download an AWS SDK for encrypting data on the client side.',
        D: 'Turn on bucket encryption for the target S3 buckets.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q25
    {
      question: 'Which of the following is not a way to manage server-side encryption keys for S3?',
      choices: {
        A: 'SSE-S3',
        B: 'SSE-KMS',
        C: 'SSE-E',
        D: 'SSE-C'
      },
      answer: 'C'
    },
    // Q26
    {
      question: 'Which of the following encryption key management options is best for ensuring strong  audit trails?',
      choices: {
        A: 'SSE-S3',
        B: 'SSE-KMS',
        C: 'Client-side encryption keys',
        D: 'SSE-C'
      },
      answer: 'B'
    },
    // Q27
    {
      question: 'Which of the following encryption key management options is best for managing keys but  allowing S3 to handle the actual encryption of data?',
      choices: {
        A: 'SSE-S3',
        B: 'SSE-KMS',
        C: 'Client-side encryption keys',
        D: 'SSE-C'
      },
      answer: 'D'
    },
    // Q28
    {
      question: 'You have a customer that has a legacy security group that is very suspicious of all things  security in the cloud. The customer wants to use S3, but doesn’t trust AWS encryption,  and you need to enable its migration to the cloud. What option would you recommend to  address the company’s concerns?',
      choices: {
        A: 'SSE-S3',
        B: 'SSE-KMS',
        C: 'Client-side encryption keys',
        D: 'SSE-C'
      },
      answer: 'C'
    },
    // Q29
    {
      question: 'You want to begin encrypting your S3 data, but your organization is new to encryption.  Which option is a low-cost approach that still offloads most of the work to AWS rather  than the organization new to encryption?',
      choices: {
        A: 'SSE-S3',
        B: 'SSE-KMS',
        C: 'Client-side encryption keys',
        D: 'SSE-CReview Questions   99'
      },
      answer: 'A'
    },
    // Q30
    {
      question: 'You are the architect for a company whose data must comply with current EU privacy  restrictions. Which of the following S3 buckets are valid options? (Choose two.)',
      choices: {
        A: 'Buckets in EU Central 1',
        B: 'Buckets in US East 2',
        C: 'Buckets in EU West 1',
        D: 'Buckets in SA East 1'
      },
      answer: [ 'A', 'C' ]
    },
    // Q31
    {
      question: 'Which of the following options could be used to provide availability-zone-resilient fault- tolerant storage that complies with EU privacy laws? (Choose two.)',
      choices: {
        A: 'S3 buckets in US West 1',
        B: 'S3 buckets in EU West 2',
        C: 'S3-IA buckets in EU Central 1',
        D: 'S3 One Zone-IA buckets in EU-West-1'
      },
      answer: [ 'B', 'C' ]
    },
    // Q32
    {
      question: 'What type of replication will your Multi-AZ RDS instances use?',
      choices: {
        A: 'Offline replication',
        B: 'Synchronous replication',
        C: 'Push replication',
        D: 'Asynchronous replication'
      },
      answer: 'B'
    },
    // Q33
    {
      question: 'You want to provide maximum protection against data in your S3 object storage being  deleted accidentally. What should you do?',
      choices: {
        A: 'Enable versioning on your EBS volumes.',
        B: 'Turn on MFA Delete on your S3 buckets.',
        C: 'Set up a Lambda job to monitor and block delete requests to S3.',
        D: 'Turn off the DELETE endpoints on the S3 REST API.'
      },
      answer: 'B'
    },
    // Q34
    {
      question: 'You want to provide maximum protection against data in your S3 object storage being  deleted accidentally. What steps should you take? (Choose two.)',
      choices: {
        A: 'Enable versioning on your S3 buckets.',
        B: 'Turn on MFA Delete on your S3 buckets.',
        C: 'Enable versioning in CloudWatch’s S3 API.',
        D: 'Remove IAM permissions for deleting objects for all users.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q35
    {
      question: 'You want to enable MFA Delete on your S3 buckets in the US East 1 region. What step  must you take before enabling MFA Delete?',
      choices: {
        A: 'Disable the REST API for the buckets on which you want MFA Delete.',
        B: 'Enable cross-region replication on the buckets on which you want MFA Delete.',
        C: 'Move the buckets to a region that supports MFA Delete, such as US West 1.',
        D: 'Enable versioning on the buckets on which you want MFA Delete.100   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'D'
    },
    // Q36
    {
      question: 'What is AWS Trusted Advisor?',
      choices: {
        A: 'An online resource to help you improve performance',
        B: 'An online resource to help you reduce cost',
        C: 'An online resource to help you improve security',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q37
    {
      question: 'On which of the following does AWS Trusted Advisor not provide recommendations?',
      choices: {
        A: 'Reducing cost',
        B: 'Improving fault tolerance',
        C: 'Improving security',
        D: 'Organizing accounts'
      },
      answer: 'D'
    },
    // Q38
    {
      question: 'Which of the following are included in the core AWS Trusted Advisor checks?   (Choose two.)',
      choices: {
        A: 'S3 bucket permissions',
        B: 'MFA on root account',
        C: 'Quantity of CloudWatch alarms',
        D: 'Use of VPC endpoints'
      },
      answer: [ 'A', 'B' ]
    },
    // Q39
    {
      question: 'Which of the following recommendations might AWS Trusted Advisor make?   (Choose two.)',
      choices: {
        A: 'Turn on MFA for the root account.',
        B: 'Turn on antivirus protection for EC2 instances.',
        C: 'Update S3 buckets with public write access.',
        D: 'Update NAT instances to NAT gateways.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q40
    {
      question: 'Which of the following is not possible using IAM policies?',
      choices: {
        A: 'Requiring MFA for the root account',
        B: 'Denying the root account access to EC2 instances',
        C: 'Disabling S3 access for users in a group',
        D: 'Restricting SSH access to EC2 instances to a specific user'
      },
      answer: 'B'
    },
    // Q41
    {
      question: 'Which of the following are not true about S3 encryption? (Choose two.)',
      choices: {
        A: 'S3 applies AWS-256 encryption to data when server-side encryption is enabled.',
        B: 'S3 encryption will use a client key if it is supplied with data.',
        C: 'Encrypted EBS volumes can only be stored if server-side encryption is enabled.',
        D: 'S3 will accept locally encrypted data if client-side encryption is enabled.Review Questions   101'
      },
      answer: [ 'B', 'C' ]
    },
    // Q42
    {
      question: 'What types of data are encrypted when you create an encrypted EBS volume?   (Choose two.)',
      choices: {
        A: 'Data at rest inside the volume',
        B: 'Data moving between the volume and the attached instance',
        C: 'Data inside S3 buckets that store the encrypted instance',
        D: 'Data in an EFS on instances attached to the volume'
      },
      answer: [ 'A', 'B' ]
    },
    // Q43
    {
      question: 'What types of data are not automatically encrypted when you create an encrypted EBS  volume? (Choose two.)',
      choices: {
        A: 'A snapshot created from the EBS volume',
        B: 'Any data on additional volumes attached to the same instance as the encrypted   volume',
        C: 'Data created on an instance that has the encrypted volume attached',
        D: 'Data moving between the volume and the attached instance'
      },
      answer: [ 'B', 'C' ]
    },
    // Q44
    {
      question: 'What of the following types of data is not encrypted automatically when an encrypted  EBS volume is attached to an EC2 instance?',
      choices: {
        A: 'Data in transit to the volume',
        B: 'Data at rest on the volume',
        C: 'Data in transit from the volume',
        D: 'All of these are encrypted.'
      },
      answer: 'D'
    },
    // Q45
    {
      question: 'What encryption service is used by encrypted EBS volumes?',
      choices: {
        A: 'S3-KMS',
        B: 'S3-C',
        C: 'KMS',
        D: 'Customer-managed keys'
      },
      answer: 'C'
    },
    // Q46
    {
      question: 'How can you access the private IP address of a running EC2 instance?',
      choices: {
        A: 'http://169.254.169.254/latest/user-data/',
        B: 'http://169.254.169.254/latest/instance-data/',
        C: 'http://169.254.169.254/latest/meta-data/',
        D: 'http://169.254.169.254/latest/ec2-data/'
      },
      answer: 'C'
    },
    // Q47
    {
      question: 'If you take a snapshot of an encrypted EBS volume, which of the following will be true?  (Choose two.)',
      choices: {
        A: 'The snapshot will be encrypted.',
        B: 'All data on the bucket on which the snapshot is stored will be encrypted.',
        C: 'Any instances using the snapshot will be encrypted.',
        D: 'Any volumes created from the snapshot will be encrypted.102   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q48
    {
      question: 'If you take a snapshot of an encrypted EBS volume, which of the following must you do to  use that snapshot as a volume in a separate region? (Choose two.)',
      choices: {
        A: 'Copy the snapshot to the new region.',
        B: 'Delete the snapshot from the old region.',
        C: 'Unencrypt the snapshot once it is in the new region.',
        D: 'Create a new volume from the snapshot in the new region.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q49
    {
      question: 'How do you encrypt an RDS instance?',
      choices: {
        A: 'Enable encryption on the running instance via the CLI.',
        B: 'Enable encryption on the running instance via the console.',
        C: 'Run the encryption process on the running instance via the console.',
        D: 'Enable encryption when creating the instance.'
      },
      answer: 'D'
    },
    // Q50
    {
      question: 'Which of the following will ensure that data on your RDS instance is encrypted?',
      choices: {
        A: 'Use client-side encryption keys.',
        B: 'Enable encryption on the running RDS instance via the AWS API.',
        C: 'Encrypt the instance on which RDS is running.',
        D: 'None of these will encrypt all data on the instance.'
      },
      answer: 'D'
    },
    // Q51
    {
      question: 'Which of the following will allow you to bring a non-encrypted RDS instance into com- pliance with an “all data must be encrypted at rest” policy?',
      choices: {
        A: 'Snapshot the RDS instance and restore it, encrypting the new copy upon restoration.',
        B: 'Use the AWS Database Migration Service to migrate the data from the instance to an  encrypted instance.',
        C: 'Create a new encrypted instance and manually move data into it.',
        D: 'None of these will encrypt all data on the instance.'
      },
      answer: 'C'
    },
    // Q52
    {
      question: 'Which of the following will allow you to bring a non-encrypted EBS volume into compli- ance with an “all data must be encrypted at rest” policy?',
      choices: {
        A: 'Stop the volume, snapshot it, and encrypt a copy of the snapshot. Then restore from  the encrypted snapshot.',
        B: 'Stop the volume, select “Turn on encryption,” and restart the volume.',
        C: 'Encrypt the volume via the AWS API and turn on the “encrypt existing data” flag.',
        D: 'None of these will encrypt all data on the volume.'
      },
      answer: 'A'
    },
    // Q53
    {
      question: 'Which of the following will allow you to bring a non-encrypted EBS volume into compli- ance with an “all data must be encrypted at rest” policy?',
      choices: {
        A: 'Stop the volume, create a snapshot, and restart from the snapshot, selecting “Encrypt  this volume.”',
        B: 'Stop the volume, select “Turn on encryption,” and restart the volume.',
        C: 'Encrypt the volume via the AWS API and turn on the “encrypt existing data” flag.',
        D: 'None of these will encrypt all data on the volume.Review Questions   103'
      },
      answer: 'D'
    },
    // Q54
    {
      question: 'Which of the following will allow you to bring a non-encrypted EBS volume into compli- ance with an “all data must be encrypted at rest” policy?',
      choices: {
        A: 'Create a new volume, attach the new volume to an EC2 instance, copy the data from  the non-encrypted volume to the new volume, and then encrypt the new volume.',
        B: 'Create a new volume with encryption turned on, attach the new volume to an EC2  instance, and copy the data from the non-encrypted volume to the new volume.',
        C: 'Create a new volume, attach the new volume to an EC2 instance, and use the  encrypted-copy command to copy the data from the non-encrypted volume to the  new volume.',
        D: 'None of these will encrypt all data on the volume.'
      },
      answer: 'B'
    },
    // Q55
    {
      question: 'Which of the following are valid options on an EBS volume? (Choose two.)',
      choices: {
        A: 'Encrypt the volume.',
        B: 'Encrypt a snapshot of the volume.',
        C: 'Encrypt a copy of a snapshot of the volume.',
        D: 'Restore an encrypted snapshot to an encrypted volume.'
      },
      answer: [ 'C', 'D' ]
    },
    // Q56
    {
      question: 'Which of the following are not true about EBS snapshots? (Choose two.)',
      choices: {
        A: 'Snapshots of encrypted volumes are automatically encrypted.',
        B: 'When you copy an encrypted snapshot, the copy is not encrypted unless you explicitly  specif y.',
        C: 'You cannot copy an encrypted snapshot unless you unencrypt the snapshot first.',
        D: 'Volumes that are created from encrypted snapshots are automatically encrypted.'
      },
      answer: [ 'B', 'C' ]
    },
    // Q57
    {
      question: 'Can you copy a snapshot across AWS accounts?',
      choices: {
        A: 'Ye s',
        B: 'Yes, but you first have to modify the snapshot’s access permissions.',
        C: 'Yes, but you have to be the owner of both AWS accounts.',
        D: 'No'
      },
      answer: 'B'
    },
    // Q58
    {
      question: 'You have a snapshot of an EBS volume in US East 2. You want to create a volume from  this snapshot in US West 1. Is this possible?',
      choices: {
        A: 'Yes, create the volume in US West 1 based upon the snapshot in US East 2.',
        B: 'Yes, but you’ll need to copy the snapshot to US West 1 first.',
        C: 'Yes, but you’ll need to create the instance in US East 2 and then move it to US West 1.',
        D: 'No'
      },
      answer: 'B'
    },
    // Q59
    {
      question: 'Can you copy an EBS snapshot across regions?',
      choices: {
        A: 'Yes, as long as the snapshot is not encrypted.',
        B: 'Yes, as long as the snapshot is marked for multi-region use.',
        C: 'Ye s',
        D: 'No104   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'C'
    },
    // Q60
    {
      question: 'Which of the following does a security group attached to an instance control? (Choose two.)',
      choices: {
        A: 'Inbound traffic',
        B: 'HTTP error messages',
        C: 'Outbound traffic',
        D: 'Access control lists'
      },
      answer: [ 'A', 'C' ]
    },
    // Q61
    {
      question: 'How many security groups can you attach to a single instance in a VPC?',
      choices: {
        A: 'None, security groups aren’t attached to instances.',
        B: '1',
        C: '1 or more',
        D: '2 or more'
      },
      answer: 'C'
    },
    // Q62
    {
      question: 'Which of the following can be added to a VPC, in addition to security groups on included  instances, to further secure the VPC?',
      choices: {
        A: 'A NACL',
        B: 'A port filter',
        C: 'An ALB',
        D: 'A flow log'
      },
      answer: 'A'
    },
    // Q63
    {
      question: 'Which of the following statements is true about a custom, user-created NACL?',
      choices: {
        A: 'A NACL by default allows all traffic out of a VPC.',
        B: 'C. B.',
        C: '.   A NACL by default allows all traffic into a VPC. C.   A NACL is a virtual firewall for associated subnets.',
        D: 'A NACL functions at the instance level.'
      },
      answer: 'C'
    },
    // Q64
    {
      question: 'What do you use to permit and restrict control of a NACL?',
      choices: {
        A: 'VPC',
        B: 'WA F',
        C: 'AWS Organizations',
        D: 'IAM'
      },
      answer: 'D'
    },
    // Q65
    {
      question: 'Which of these are true about security groups? (Choose two.)',
      choices: {
        A: 'Support allow and deny rules',
        B: 'Evaluate all rules before deciding whether to allow traffic',
        C: 'Operate at the instance level',
        D: 'Apply to all instances in the associated subnet'
      },
      answer: [ 'B', 'C' ]
    },
    // Q66
    {
      question: 'Which of these are true about security groups? (Choose two.)',
      choices: {
        A: 'Stateful',
        B: 'Stateless',
        C: 'Process rules in order',
        D: 'Associated with an instanceReview Questions   105'
      },
      answer: [ 'A', 'D' ]
    },
    // Q67
    {
      question: 'Which of these are true about NACLs? (Choose two.)',
      choices: {
        A: 'Stateful',
        B: 'Stateless',
        C: 'Process rules in order',
        D: 'Associated with an instance'
      },
      answer: [ 'B', 'C' ]
    },
    // Q68
    {
      question: 'Which of these are true about NACLs? (Choose two.)',
      choices: {
        A: 'Apply to all instances in an associated subnet',
        B: 'Only apply if no security group is present',
        C: 'Support allow and deny rules',
        D: 'Evaluate all rules before deciding whether to allow or disallow traffic'
      },
      answer: [ 'A', 'C' ]
    },
    // Q69
    {
      question: 'In which order are NACLs and security groups evaluated?',
      choices: {
        A: 'NACLs and security groups are evaluated in parallel.',
        B: 'A NACL is evaluated first, and then the security group.',
        C: 'A security group is evaluated first, and then the NACL.',
        D: 'It depends on the VPC setup.'
      },
      answer: 'B'
    },
    // Q70
    {
      question: 'Which of these statements are true? (Choose two.)',
      choices: {
        A: 'A security group can apply to two instances at the same time.',
        B: 'A NACL applies to all instances within a subnet at the same time.',
        C: 'A security group can apply to only one instance at the same time.',
        D: 'A NACL can apply to only one instance at the same time.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q71
    {
      question: 'With which of the following is a NACL associated?',
      choices: {
        A: 'An instance',
        B: 'A subnet',
        C: 'A VPC',
        D: 'A NACL can be associated with all of these.'
      },
      answer: 'B'
    },
    // Q72
    {
      question: 'Which of the following are true about the default NACL that comes with the default  VPC? (Choose two.)',
      choices: {
        A: 'It allows all inbound traffic.',
        B: 'It allows all outbound traffic.',
        C: 'It disallows all inbound traffic.',
        D: 'It disallows all outbound traffic.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q73
    {
      question: 'Which of the following are true about a user-created NACL? (Choose two.)',
      choices: {
        A: 'It allows all inbound traffic.',
        B: 'It allows all outbound traffic.',
        C: 'It disallows all inbound traffic.',
        D: 'It disallows all outbound traffic.106   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: [ 'C', 'D' ]
    },
    // Q74
    {
      question: 'In which order are rules in a NACL evaluated?',
      choices: {
        A: 'From low to high, using the number on the rule',
        B: 'From high to low, using the number on the rule',
        C: 'From low to high, using the port of the rule',
        D: 'From high to low, using the port of the rule'
      },
      answer: 'A'
    },
    // Q75
    {
      question: 'Which of the following statements is not true? (Choose two.)',
      choices: {
        A: 'A network ACL has separate inbound and outbound rules.',
        B: 'Network ACLs are stateful.',
        C: 'Each subnet in your VPC must be associated with a NACL.',
        D: 'A network ACL can only be associated with a single subnet.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q76
    {
      question: 'With how many subnets can a NACL be associated?',
      choices: {
        A: 'One',
        B: 'One or more',
        C: 'A NACL is associated with instances, not subnets.',
        D: 'A NACL is associated with VPCs, not subnets.'
      },
      answer: 'B'
    },
    // Q77
    {
      question: 'With how many NACLs can a subnet be associated?',
      choices: {
        A: 'One',
        B: 'One or more',
        C: 'A subnet is associated with security groups, not NACLs.',
        D: 'A subnet is associated with VPCs, not NACLs.'
      },
      answer: 'A'
    },
    // Q78
    {
      question: 'What happens when you associate a NACL with a subnet that already is associated with a  different NACL?',
      choices: {
        A: 'Nothing, both NACLs are associated with the subnet.',
        B: 'You receive an error. You must remove the first NACL to associate the new one.',
        C: 'You receive an error. You must first merge the two NACLs to apply them to a subnet.',
        D: 'The new NACL replaces the previous NACL, and the subnet still only has one NACL  association.'
      },
      answer: 'D'
    },
    // Q79
    {
      question: 'Which of the following are part of a network ACL rule? (Choose two.)',
      choices: {
        A: 'An ASCII code',
        B: 'A rule number',
        C: 'An IAM group',
        D: 'A protocol'
      },
      answer: [ 'B', 'D' ]
    },
    // Q80
    {
      question: 'Which of the following are part of a network ACL rule? (Choose two.)',
      choices: {
        A: 'An ALLOW or DENY specification',
        B: 'A CIDR range',
        C: 'An IP address',
        D: 'A VPC identifierReview Questions   107'
      },
      answer: [ 'A', 'B' ]
    },
    // Q81
    {
      question: 'Which of the following inbound rules of a custom NACL would be evaluated first?',
      choices: {
        A: 'Rule #800 // HTTP // TCP // 80 // 0.0.0.0/0 -> ALLOW.',
        B: 'Rule #100 // HTTPS // TCP // 443 // 0.0.0.0/0 -> ALLOW.',
        C: 'Rule * // All // All // All // 0.0.0.0/0 -> DENY.',
        D: 'Rule #130 // RDP // TCP // 3389 // 192.0.2.0/24 -> ALLOW.'
      },
      answer: 'B'
    },
    // Q82
    {
      question: 'If all of the following inbound rules existed on a custom NACL, would SSH traffic be  allowed? Rule #800 // HTTP // TCP // 80 // 0.0.0.0/0 -> ALLOW Rule #100 // HTTPS // TCP // 443 // 0.0.0.0/0 -> ALLOW Rule * // All // All // All // 0.0.0.0/0 -> DENY Rule #130 // RDP // TCP // 3389 // 192.0.2.0/24 -> ALLOW',
      choices: {
        A: 'Yes, SSH is included as a default protocol on NACLs.',
        B: 'Yes, SSH is included in the HTTPS protocol.',
        C: 'Only if the SSH access permission in IAM is granted.',
        D: 'No'
      },
      answer: 'D'
    },
    // Q83
    {
      question: 'If all of the following inbound rules existed on the default VPC’s default NACL, would  SSH traffic be allowed? Rule #800 // HTTP // TCP // 80 // 0.0.0.0/0 -> ALLOW Rule #100 // HTTPS // TCP // 443 // 0.0.0.0/0 -> ALLOW',
      choices: {
        A: 'Yes, the default VPC’s default NACL allows all inbound traffic by default.',
        B: 'Yes, SSH is included in the HTTPS protocol.',
        C: 'Only if the SSH access permission in IAM is granted.',
        D: 'No'
      },
      answer: 'A'
    },
    // Q84
    {
      question: 'If all of the following inbound rules existed on a custom NACL, would SSH traffic be  allowed? Rule #800 // HTTP // TCP // 80 // 0.0.0.0/0 -> ALLOW Rule #100 // HTTPS // TCP // 443 // 0.0.0.0/0 -> ALLOW Rule #140 // All // All // All // 0.0.0.0/0 -> DENY Rule #120 // SSH // TCP // 22 // 192.0.2.0/24 -> ALLOW',
      choices: {
        A: 'Ye s',
        B: 'Yes, but only from the CIDR block 192.0.2.0/24.',
        C: 'Only if the SSH access permission in IAM is granted.',
        D: 'No108   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'B'
    },
    // Q85
    {
      question: 'If all of the following inbound rules existed on a custom NACL, would SSH traffic be  allowed? Rule #800 // HTTP // TCP // 80 // 0.0.0.0/0 -> ALLOW Rule #100 // HTTPS // TCP // 443 // 0.0.0.0/0 -> ALLOW Rule #110 // All // All // All // 0.0.0.0/0 -> DENY Rule #120 // SSH // TCP // 22 // 192.0.2.0/24 -> ALLOW',
      choices: {
        A: 'Ye s',
        B: 'Yes, but only from the CIDR block 192.0.2.0/24.',
        C: 'Only if the SSH access permission in IAM is granted.',
        D: 'No'
      },
      answer: 'D'
    },
    // Q86
    {
      question: 'Which of the following is the most accurate statement about what the following inbound  rule on a NACL will do? Rule #120 // SSH // TCP // 22 // 192.0.2.0/24 -> ALLOW',
      choices: {
        A: 'Allows inbound SSH traffic to the associated subnets',
        B: 'Allows inbound TCP traffic to the associated subnets',
        C: 'Allows inbound TCP traffic to the associated subnets from the CIDR block  192.0.2.0/24',
        D: 'Allows inbound SSH traffic to the associated subnets from the CIDR block  192.0.2.0/24'
      },
      answer: 'D'
    },
    // Q87
    {
      question: 'Which of the following is the most accurate statement about what the following inbound  rule on a NACL will do? Rule #120 // HTTP // TCP // 80 // 0.0.0.0/0 -> ALLOW',
      choices: {
        A: 'Allows inbound HTTP traffic to the associated subnets',
        B: 'Allows inbound IPv4 HTTP traffic to the associated subnets as long as it is not pre- vented by lower-numbered rules',
        C: 'Allows inbound IPv4 HTTP traffic to the associated subnets',
        D: 'Allows inbound IPv4 TCP traffic to the associated subnets'
      },
      answer: 'B'
    },
    // Q88
    {
      question: 'What does the CIDR block 0.0.0.0/0 represent?',
      choices: {
        A: 'The entire Internet',
        B: 'The entire Internet, limited to IPv4 addresses',
        C: 'The entire Internet, limited to IPv6 addresses',
        D: 'Inbound traffic from the entire Internet'
      },
      answer: 'B'
    },
    // Q89
    {
      question: 'What does the CIDR block ::/0 represent?',
      choices: {
        A: 'The entire Internet',
        B: 'The entire Internet, limited to IPv4 addresses',
        C: 'The entire Internet, limited to IPv6 addresses',
        D: 'Inbound traffic from the entire InternetReview Questions   109'
      },
      answer: 'C'
    },
    // Q90
    {
      question: 'Which of the following rules allows IPv6 outbound traffic to flow to the entire Internet  through a NAT gateway with the ID nat-123456789?',
      choices: {
        A: '0.0.0.0/0 -> NAT -> nat-123456789',
        B: '::/0 -> nat-123456789',
        C: '0.0.0.0/0 -> nat-123456789',
        D: '::/0 -> NAT -> nat-123456789'
      },
      answer: 'B'
    },
    // Q91
    {
      question: 'How many availability zones in a single region does a single VPC span?',
      choices: {
        A: 'None, VPCs do not span availability zones.',
        B: 'One',
        C: 'At least two',
        D: 'All of them'
      },
      answer: 'D'
    },
    // Q92
    {
      question: 'Which of these must be specified when creating a new VPC? (Choose two.)',
      choices: {
        A: 'An availability zone',
        B: 'A region',
        C: 'A CIDR block',
        D: 'A security group'
      },
      answer: [ 'B', 'C' ]
    },
    // Q93
    {
      question: 'How many subnets can be added to an availability zone within a VPC?',
      choices: {
        A: 'None',
        B: 'One',
        C: 'One or more',
        D: 'At least two'
      },
      answer: 'C'
    },
    // Q94
    {
      question: 'To how many availability zones within a region can a single subnet in a VPC be added?',
      choices: {
        A: 'None',
        B: 'One',
        C: 'One or more',
        D: 'At least two'
      },
      answer: 'B'
    },
    // Q95
    {
      question: 'How many availability zones can a subnet span?',
      choices: {
        A: 'None',
        B: 'One',
        C: 'One or more',
        D: 'At least two'
      },
      answer: 'B'
    },
    // Q96
    {
      question: 'How many IPv6 CIDR blocks can be assigned to a single VPC?',
      choices: {
        A: 'None',
        B: 'One',
        C: 'One or more',
        D: 'At least two110   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'B'
    },
    // Q97
    {
      question: 'How many IPv4 CIDR blocks can be assigned to a single VPC?',
      choices: {
        A: 'None',
        B: 'One',
        C: 'One or more',
        D: 'At least two'
      },
      answer: 'C'
    },
    // Q98
    {
      question: 'You have a VPC in US East 1 with three subnets. One of those subnets’ traffic is routed to  an internet gateway. What does this make the subnet?',
      choices: {
        A: 'A private subnet',
        B: 'A restricted subnet',
        C: 'The master subnet of that VPC',
        D: 'A public subnet'
      },
      answer: 'D'
    },
    // Q99
    {
      question: 'You have a public subnet in a VPC and an EC2 instance serving web traffic within that  public subnet. Can that EC2 instance be reached via the Internet?',
      choices: {
        A: 'Ye s',
        B: 'Yes, as long as it has a public IPv4 address.',
        C: 'Yes, as long as the VPC is marked as public.',
        D: 'No'
      },
      answer: 'B'
    },
    // Q100
    {
      question: 'You have a public subnet within your VPC. Within that subnet are three instances, each  running a web-accessible API. Two of the instances are responding to requests from Inter- net clients, but one is not. What could be the problem?',
      choices: {
        A: 'The VPC needs to be marked as public-facing.',
        B: 'The three instances should be moved into an Auto Scaling group.',
        C: 'There is no internet gateway available for the VPC.',
        D: 'The unavailable instance needs an elastic IP.'
      },
      answer: 'D'
    },
    // Q101
    {
      question: 'Which of the following are allowed when creating a new VPC? (Choose two.)',
      choices: {
        A: 'An IPv4 CIDR block',
        B: 'VPC description',
        C: 'An IPv6 CIDR block',
        D: 'A security group'
      },
      answer: [ 'A', 'C' ]
    },
    // Q102
    {
      question: 'Which of the following is not a required part of creating a custom VPC? (Choose two.)',
      choices: {
        A: 'An IPv6 CIDR block',
        B: 'A VPC name',
        C: 'A set of VPC tags',
        D: 'An IPv4 CIDR blockReview Questions   111'
      },
      answer: [ 'A', 'C' ]
    },
    // Q103
    {
      question: 'Which of the following defines a subnet as a public subnet? (Choose two.)',
      choices: {
        A: 'A security group that allows inbound public traffic',
        B: 'A routing table that routes traffic through the internet gateway',
        C: 'Instances with public IP addresses',
        D: 'An internet gateway'
      },
      answer: [ 'B', 'D' ]
    },
    // Q104
    {
      question: 'Which of the following defines a VPN-only subnet? (Choose two.)',
      choices: {
        A: 'A routing table that routes traffic through the internet gateway',
        B: 'A routing table that routes traffic through the virtual private gateway',
        C: 'A virtual private gateway',
        D: 'An internet gateway'
      },
      answer: [ 'B', 'C' ]
    },
    // Q105
    {
      question: 'Which of the following are required components in a VPN-only subnet? (Choose two.)',
      choices: {
        A: 'A routing table',
        B: 'A virtual private gateway',
        C: 'An elastic IP address',
        D: 'An internet gateway'
      },
      answer: [ 'A', 'B' ]
    },
    // Q106
    {
      question: 'By default, how many VPCs can you create per region?',
      choices: {
        A: '1',
        B: '5',
        C: '20',
        D: '200'
      },
      answer: 'B'
    },
    // Q107
    {
      question: 'By default, how many subnets can you create per VPC?',
      choices: {
        A: '1',
        B: '5',
        C: '20',
        D: '200'
      },
      answer: 'D'
    },
    // Q108
    {
      question: 'By default, how many IPv4 CIDR blocks can you create per VPC?',
      choices: {
        A: '1',
        B: '5',
        C: '20',
        D: '200'
      },
      answer: 'B'
    },
    // Q109
    {
      question: 'By default, how many elastic IPs can you create per region?',
      choices: {
        A: '1',
        B: '5',
        C: '20',
        D: '200112   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'B'
    },
    // Q110
    {
      question: 'Which of the following is not true? (Choose two.)',
      choices: {
        A: 'A subnet can have the same CIDR block as the VPC within which it exists.',
        B: 'A subnet can have a larger CIDR block than the VPC within which it exists.',
        C: 'A subnet can have a smaller CIDR block than the VPC within which it exists.',
        D: 'A subnet does not have to have a CIDR block specified.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q111
    {
      question: 'A VPC peering connection connects a VPC to which of the following?',
      choices: {
        A: 'A subnet within another VPC',
        B: 'A specific instance within another VPC',
        C: 'Another VPC',
        D: 'A virtual private gateway'
      },
      answer: 'C'
    },
    // Q112
    {
      question: 'An Amazon VPC VPN connection links your on-site network to which of the following?',
      choices: {
        A: 'A customer gateway',
        B: 'An internet gateway',
        C: 'An Amazon VPC',
        D: 'A virtual private gateway'
      },
      answer: 'C'
    },
    // Q113
    {
      question: 'Which of the following are required for a VPC VPN connection? (Choose two.)',
      choices: {
        A: 'A customer gateway',
        B: 'An internet gateway',
        C: 'A virtual private gateway',
        D: 'A public subnet'
      },
      answer: [ 'A', 'C' ]
    },
    // Q114
    {
      question: 'Which of the following would you use to secure a VPC and its instances? (Choose two.)',
      choices: {
        A: 'A customer gateway',
        B: 'A NACL',
        C: 'A virtual private gateway',
        D: 'A security group'
      },
      answer: [ 'B', 'D' ]
    },
    // Q115
    {
      question: 'You want to ensure that no incoming traffic reaches any instances in your VPC. Which of  the following is your best option to prevent this type of traffic?',
      choices: {
        A: 'A blacklist',
        B: 'A NACL',
        C: 'A virtual private gateway',
        D: 'A security groupReview Questions   113'
      },
      answer: 'B'
    },
    // Q116
    {
      question: 'You want to ensure that no incoming traffic reaches just the database instances in a par- ticular subnet within your VPC. Which of the following is your best option to prevent this  type of traffic?',
      choices: {
        A: 'A blacklist',
        B: 'A NACL',
        C: 'A virtual private gateway',
        D: 'A security group'
      },
      answer: 'D'
    },
    // Q117
    {
      question: 'You have a subnet with five instances within it. Two are serving public APIs and three are  providing backend compute power through database instances. What is the best way to  secure these instances? (Choose two.)',
      choices: {
        A: 'Apply NACLs at the subnet level.',
        B: 'Attach a single security group to all the instances.',
        C: 'Move the two backend database instances into a different subnet.',
        D: 'Attach an internet gateway to the VPC.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q118
    {
      question: 'Security groups operate most like which of the following?',
      choices: {
        A: 'A blacklist',
        B: 'A NACL',
        C: 'A whitelist',
        D: 'A greylist'
      },
      answer: 'C'
    },
    // Q119
    {
      question: 'If you have a NACL and a security group, at what two levels is security functioning?  (Choose two.)',
      choices: {
        A: 'The VPN level',
        B: 'The service level',
        C: 'The subnet level',
        D: 'The instance level'
      },
      answer: [ 'C', 'D' ]
    },
    // Q120
    {
      question: 'What type of filtering does a security group perform?',
      choices: {
        A: 'Stateful',
        B: 'Synchronous',
        C: 'Whitelist',
        D: 'Stateless'
      },
      answer: 'A'
    },
    // Q121
    {
      question: 'What type of filtering does a network ACL perform?',
      choices: {
        A: 'Stateful',
        B: 'Synchronous',
        C: 'Whitelist',
        D: 'Stateless114   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'D'
    },
    // Q122
    {
      question: 'With which of the following can you create a VPC peering connection?',
      choices: {
        A: 'A VPC in the same AWS account and same region',
        B: 'A VPC in another AWS account',
        C: 'A VPC in the same AWS account but in another region',
        D: 'All of these'
      },
      answer: 'D'
    },
    // Q123
    {
      question: 'With which of the following can you not create a VPC peering connection? (Choose two.)',
      choices: {
        A: 'A VPC in another AWS account',
        B: 'An instance in the same region',
        C: 'A VPC in the same region',
        D: 'An internet gateway'
      },
      answer: [ 'B', 'D' ]
    },
    // Q124
    {
      question: 'You have an instance within a custom VPC, and that instance needs to communicate  with an API published by an instance in another VPC. How can you make this possible?  (Choose two.)',
      choices: {
        A: 'Enable cross-VPC communication via the AWS console.',
        B: 'Configure routing from the source instance to the API-serving instance.',
        C: 'Add a security group to the source instance.',
        D: 'Add an internet gateway or virtual private gateway to the source VPC.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q125
    {
      question: 'Which of the following could be used to allow instances within one VPC to communicate  with instances in another region? (Choose two.)',
      choices: {
        A: 'VPN connections',
        B: 'NACLs',
        C: 'Internet gateways',
        D: 'Public IP addresses'
      },
      answer: [ 'A', 'D' ]
    },
    // Q126
    {
      question: 'Which region does not currently support VPCs?',
      choices: {
        A: 'US East 1',
        B: 'EU West 1',
        C: 'SA East 1',
        D: 'VPC is supported in all AWS regions.'
      },
      answer: 'D'
    },
    // Q127
    {
      question: 'How many availability zones can a VPC span?',
      choices: {
        A: 'None, VPCs don’t exist within availability zones.',
        B: 'One',
        C: 'Two or more',
        D: 'All the availability zones within a regionReview Questions   115'
      },
      answer: 'D'
    },
    // Q128
    {
      question: 'When you launch an instance within a VPC, in which availability zone is it launched?',
      choices: {
        A: 'The default availability zone',
        B: 'You must specify an availability zone.',
        C: 'The first availability zone without an instance',
        D: 'The availability zone with the least resources utilized'
      },
      answer: 'B'
    },
    // Q129
    {
      question: 'You are the architect at a company that requires all data at rest to be encrypted. You dis- cover several EBS-backed EC2 instances that will be commissioned in the next week. How  can you ensure that data on these volumes will be encrypted?',
      choices: {
        A: 'Use OS-level tools on the instance to encrypt the volumes.',
        B: 'Specify via the AWS console that the volumes should be encrypted when they are   created.',
        C: 'You cannot enable encryption on a specific EBS volume.',
        D: 'Start the instances with the volumes and then encrypt them via the AWS console.'
      },
      answer: 'B'
    },
    // Q130
    {
      question: 'Which of the following is required to use a VPC endpoint?',
      choices: {
        A: 'An internet gateway',
        B: 'A VPN connection',
        C: 'A NAT instance',
        D: 'A VPC endpoint does not require any of these.'
      },
      answer: 'D'
    },
    // Q131
    {
      question: 'Which of the following is not true about a VPC endpoint?',
      choices: {
        A: 'A VPC endpoint can attach to an S3 bucket.',
        B: 'A VPC endpoint is a hardware device.',
        C: 'A VPC endpoint does not require an internet gateway.',
        D: 'Traffic to a VPC endpoint does not travel over the Internet.'
      },
      answer: 'B'
    },
    // Q132
    {
      question: 'To which of the following can a VPC endpoint  not  attach?',
      choices: {
        A: 'S3',
        B: 'SNS',
        C: 'Internet gateway',
        D: 'DynamoDB'
      },
      answer: 'C'
    },
    // Q133
    {
      question: 'Which of the following might you need to create for using a VPC endpoint attached to S3?',
      choices: {
        A: 'A NAT instance',
        B: 'A NAT gateway',
        C: 'An IAM role',
        D: 'A security group116   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'C'
    },
    // Q134
    {
      question: 'Is it possible to SSH into a subnet with no public instances?',
      choices: {
        A: 'Ye s',
        B: 'Yes, as long as you have a bastion host and correct routing.',
        C: 'Yes, as long as you have an AWS Direct Connect.',
        D: 'No'
      },
      answer: 'B'
    },
    // Q135
    {
      question: 'Where should a bastion host be located?',
      choices: {
        A: 'In a private subnet',
        B: 'In a public subnet',
        C: 'In a private VPC',
        D: 'In a VPC with a virtual private gateway'
      },
      answer: 'B'
    },
    // Q136
    {
      question: 'What is another name for a bastion host?',
      choices: {
        A: 'A remote host',
        B: 'A box host',
        C: 'A jump server',
        D: 'A bastion connection'
      },
      answer: 'C'
    },
    // Q137
    {
      question: 'To which of the following might a bastion host be used to connect?',
      choices: {
        A: 'A public instance in a public subnet',
        B: 'A public instance in a private subnet',
        C: 'A private instance in a public subnet',
        D: 'A private instance in a private subnet'
      },
      answer: 'D'
    },
    // Q138
    {
      question: 'Which of these would you use to secure a bastion host?',
      choices: {
        A: 'A network ACL',
        B: 'A security group',
        C: 'OS hardening',
        D: 'All of the above'
      },
      answer: 'D'
    },
    // Q139
    {
      question: 'For a bastion host intended to provide shell access to your private instances, what proto- cols should you allow via a security group?',
      choices: {
        A: 'SSH and RDP',
        B: 'Just SSH',
        C: 'Just RDP',
        D: 'Just HTTPS'
      },
      answer: 'B'
    },
    // Q140
    {
      question: 'Which of the following statements about internet gateways is false?',
      choices: {
        A: 'They scale horizontally.',
        B: 'They are automatically redundant.',
        C: 'They are automatically highly available.',
        D: 'They scale vertically.Review Questions   117'
      },
      answer: 'D'
    },
    // Q141
    {
      question: 'To which of the following does an internet gateway attach?',
      choices: {
        A: 'An AWS account',
        B: 'A subnet within a VPC',
        C: 'A VPC',
        D: 'An instance within a subnet'
      },
      answer: 'C'
    },
    // Q142
    {
      question: 'Which of the following destination routes would be used for routing IPv4 traffic to an  internet gateway?',
      choices: {
        A: '0.0.0.0/24',
        B: '0.0.0.0/0',
        C: '::/0',
        D: '192.168.1.1'
      },
      answer: 'B'
    },
    // Q143
    {
      question: 'Which of the following destination routes would be used for routing IPv6 traffic to an  internet gateway?',
      choices: {
        A: '0.0.0.0/24',
        B: '0.0.0.0/0',
        C: '::/0',
        D: '192.168.1.1'
      },
      answer: 'C'
    },
    // Q144
    {
      question: 'Which of the following is not necessary for an instance to have IPv6 communication over  the Internet?',
      choices: {
        A: 'A VPC with an associated IPv6 CIDR block',
        B: 'A public IPv6 assigned to the instance',
        C: 'A subnet with an associated IPv6 CIDR block',
        D: 'A virtual private gateway with IPv6 enabled'
      },
      answer: 'D'
    },
    // Q145
    {
      question: 'Which of the following are possible options for assigning to an instance that needs public  access? (Choose two.)',
      choices: {
        A: 'A public IP address',
        B: 'An elastic IP address',
        C: 'An IAM role',
        D: 'A NACL'
      },
      answer: [ 'A', 'B' ]
    },
    // Q146
    {
      question: 'Which of the following will have internet gateways available? (Choose two.)',
      choices: {
        A: 'A public subnet',
        B: 'An IPv6 elastic IP address',
        C: 'The default VPC',
        D: 'An ALB118   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: [ 'A', 'C' ]
    },
    // Q147
    {
      question: 'What does ALB stand for?',
      choices: {
        A: 'Access load balancer',
        B: 'Application load balancer',
        C: 'Adaptive load balancer',
        D: 'Applied load balancer'
      },
      answer: 'B'
    },
    // Q148
    {
      question: 'At what OSI layer does an application load balancer operate?',
      choices: {
        A: '4',
        B: '7',
        C: '4 and 7',
        D: '6'
      },
      answer: 'B'
    },
    // Q149
    {
      question: 'At what OSI layer does a network load balancer operate?',
      choices: {
        A: '4',
        B: '7',
        C: '4 and 7',
        D: '6'
      },
      answer: 'A'
    },
    // Q150
    {
      question: 'At what OSI layer does a classic load balancer operate?',
      choices: {
        A: '4',
        B: '7',
        C: '4 and 7',
        D: '6'
      },
      answer: 'C'
    },
    // Q151
    {
      question: 'Which type of load balancer operates at the Transport layer?',
      choices: {
        A: 'Classic load balancer',
        B: 'Application load balancer',
        C: 'Network load balancer',
        D: 'Both classic and network load balancers'
      },
      answer: 'D'
    },
    // Q152
    {
      question: 'Which type of load balancer operates at the Application layer?',
      choices: {
        A: 'Classic load balancer',
        B: 'Application load balancer',
        C: 'Network load balancer',
        D: 'Both classic and application load balancers'
      },
      answer: 'D'
    },
    // Q153
    {
      question: 'What type of subnets are the default subnets in the default VPC?',
      choices: {
        A: 'Private',
        B: 'Hybrid',
        C: 'Public',
        D: 'TransportReview Questions   119'
      },
      answer: 'C'
    },
    // Q154
    {
      question: 'What type of subnets are the default subnets in a custom VPC?',
      choices: {
        A: 'Private',
        B: 'Hybrid',
        C: 'Public',
        D: 'Transport'
      },
      answer: 'A'
    },
    // Q155
    {
      question: 'Which of the following is not automatically created for an instance launched into a non- default subnet?',
      choices: {
        A: 'A private IPv4 address',
        B: 'A security group',
        C: 'A public IPv4 address',
        D: 'A route to other instances in the subnet'
      },
      answer: 'C'
    },
    // Q156
    {
      question: 'Which of the following would be needed to allow an instance launched into a non-default  subnet Internet access? (Choose two.)',
      choices: {
        A: 'A private IPv4 address',
        B: 'A security group',
        C: 'An elastic IP address',
        D: 'An internet gateway'
      },
      answer: [ 'C', 'D' ]
    },
    // Q157
    {
      question: 'Which of the following would you need to add or create to allow an instance launched  into a default subnet in the default VPC Internet access?',
      choices: {
        A: 'A public IPv4 address',
        B: 'An internet gateway',
        C: 'An elastic IP address',
        D: 'None of these'
      },
      answer: 'D'
    },
    // Q158
    {
      question: 'Which of the following would you use to allow outbound Internet traffic while preventing  unsolicited inbound connections?',
      choices: {
        A: 'A NAT device',
        B: 'A bastion host',
        C: 'A VPC endpoint',
        D: 'A VPN'
      },
      answer: 'A'
    },
    // Q159
    {
      question: 'What does a NAT device allow?',
      choices: {
        A: 'Incoming traffic from the Internet to reach private instances',
        B: 'Incoming traffic from other VPCs to reach private instances',
        C: 'Outgoing traffic to other VPCs from private instances',
        D: 'Outgoing traffic to the Internet from private instances120   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'D'
    },
    // Q160
    {
      question: 'Which of the following are NAT devices offered by AWS? (Choose two.)',
      choices: {
        A: 'NAT router',
        B: 'NAT instance',
        C: 'NAT gateway',
        D: 'NAT load balancer'
      },
      answer: [ 'B', 'C' ]
    },
    // Q161
    {
      question: 'Which of the following requires selecting an AMI? (Choose two.)',
      choices: {
        A: 'Launching an EC2 instance',
        B: 'Backing up an EBS volume',
        C: 'Creating an EBS volume',
        D: 'Launching a NAT instance'
      },
      answer: [ 'A', 'D' ]
    },
    // Q162
    {
      question: 'For which of the following do you not need to worry about operating system updates?',
      choices: {
        A: 'NAT instance',
        B: 'NAT gateway',
        C: 'EC2 instance',
        D: 'ECS container'
      },
      answer: 'B'
    },
    // Q163
    {
      question: 'Which of the following does not automatically scale to meet demand?',
      choices: {
        A: 'DynamoDB',
        B: 'NAT instance',
        C: 'SNS topic',
        D: 'NAT gateway'
      },
      answer: 'B'
    },
    // Q164
    {
      question: 'Which of the following, without proper security, could be most dangerous to your private  instances?',
      choices: {
        A: 'Bastion host',
        B: 'VPC endpoint',
        C: 'Internet gateway',
        D: 'NAT instance'
      },
      answer: 'A'
    },
    // Q165
    {
      question: 'Which of the following could be used as a bastion host?',
      choices: {
        A: 'NAT gateway',
        B: 'VPC endpoint',
        C: 'Internet gateway',
        D: 'NAT instanceReview Questions   121'
      },
      answer: 'D'
    },
    // Q166
    {
      question: 'You are building out a site-to-site VPN connection from an on-site network to a private  subnet within a custom VPC. Which of the following might you need for this connection  to function properly? (Choose two.)',
      choices: {
        A: 'An internet gateway',
        B: 'A public subnet',
        C: 'A virtual private gateway',
        D: 'A customer gateway'
      },
      answer: [ 'C', 'D' ]
    },
    // Q167
    {
      question: 'You are building out a site-to-site VPN connection from an on-site network to a custom  VPC. Which of the following might you need for this connection to function properly?  (Choose two.)',
      choices: {
        A: 'A NAT instance',
        B: 'A DynamoDB instance',
        C: 'A private subnet',
        D: 'An internet gateway'
      },
      answer: [ 'A', 'C' ]
    },
    // Q168
    {
      question: 'With which of the following is an egress-only internet gateway most closely associated?',
      choices: {
        A: 'IPv4',
        B: 'IPv6',
        C: 'A NAT instance',
        D: 'A NAT gateway'
      },
      answer: 'B'
    },
    // Q169
    {
      question: 'You are responsible for securing an EC2 instance with an IPv6 address that resides in  a public subnet. You want to allow traffic from the instance to the Internet but restrict  access to the instance. Which of the following would you suggest?',
      choices: {
        A: 'VPC endpoint',
        B: 'Internet gateway',
        C: 'Egress-only internet gateway',
        D: 'A NAT gateway'
      },
      answer: 'C'
    },
    // Q170
    {
      question: 'You have just created a NAT instance and want to launch the instance into a subnet.  Which of these need to be true of the subnet into which you want to deploy? (Choose  two.)',
      choices: {
        A: 'The subnet is public.',
        B: 'The subnet is private.',
        C: 'The subnet has routing into the private subnets in your VPC.',
        D: 'The subnet has routing to the public subnets in your VPC.'
      },
      answer: [ 'A', 'C' ]
    },
    // Q171
    {
      question: 'Which of the following are true about an egress-only internet gateway? (Choose two.)',
      choices: {
        A: 'It only supports IPv4 traffic.',
        B: 'It is stateful.',
        C: 'It only supports IPv6 traffic.',
        D: 'It is stateless.122   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: [ 'B', 'C' ]
    },
    // Q172
    {
      question: 'Which of these would be used as the destination address in a routing table for a VPC that  uses an egress-only internet gateway?',
      choices: {
        A: '0.0.0.0/0',
        B: '0.0.0.0/16',
        C: '::/0',
        D: '::/24'
      },
      answer: 'C'
    },
    // Q173
    {
      question: 'Which of the following are true about IPv6 addresses? (Choose two.)',
      choices: {
        A: 'They are globally unique.',
        B: 'They are in the format x.y.z.w.',
        C: 'They require underlying IPv4 addresses.',
        D: 'They are public by default.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q174
    {
      question: 'What is an elastic network interface? (Choose two.)',
      choices: {
        A: 'A hardware network interface on an EC2 instance',
        B: 'A virtual network interface',
        C: 'An interface that can have one or more IPv6 addresses',
        D: 'An interface that does not have a MAC address'
      },
      answer: [ 'B', 'C' ]
    },
    // Q175
    {
      question: 'Which of the following is not part of an elastic network interface?',
      choices: {
        A: 'A primary IPv4 address',
        B: 'A MAC address',
        C: 'A source/destination check flag',
        D: 'A NACL'
      },
      answer: 'D'
    },
    // Q176
    {
      question: 'How many network interfaces can a single instance have?',
      choices: {
        A: 'None',
        B: 'One and only one',
        C: 'One or more',
        D: 'At least two, up to five'
      },
      answer: 'C'
    },
    // Q177
    {
      question: 'If an elastic network interface is moved from one instance to another, what happens to  network traffic directed at the interface?',
      choices: {
        A: 'It is redirected to the elastic network interface that has moved to the new instance.',
        B: 'It is redirected to the primary network interface on the original instance.',
        C: 'It is redirected to the primary network interface on the new instance.',
        D: 'It is lost and must be re-sent to the elastic network interface on the new instance.'
      },
      answer: 'A'
    },
    // Q178
    {
      question: 'To how many instances can an elastic network interface be attached?',
      choices: {
        A: 'One and only one',
        B: 'One or more',
        C: 'One at a time, but it can be moved from one instance to another.',
        D: 'Up to fiveReview Questions   123'
      },
      answer: 'C'
    },
    // Q179
    {
      question: 'Which of these is not a reason to attach multiple network interfaces to an instance?',
      choices: {
        A: 'You are creating a management network.',
        B: 'You are attempting to increase network throughput to the instance.',
        C: 'You need a high-availability solution and have a low budget.',
        D: 'You need dual-homed instances.'
      },
      answer: 'B'
    },
    // Q180
    {
      question: 'Which of the following can you not do with regard to network interfaces?',
      choices: {
        A: 'Detach a secondary interface from an instance.',
        B: 'Attach an elastic network interface to an instance with an existing interface.',
        C: 'Detach a primary interface from an instance.',
        D: 'Attach an elastic network interface to a different instance than originally attached.'
      },
      answer: 'C'
    },
    // Q181
    {
      question: 'Which of the following is not a valid attribute for an elastic network interface?',
      choices: {
        A: 'An IPv6 address',
        B: 'An IPv4 address',
        C: 'A source/destination check flag',
        D: 'A routing table'
      },
      answer: 'D'
    },
    // Q182
    {
      question: 'Why might you use an elastic IP address?',
      choices: {
        A: 'You need an IPv4 address for a specific instance.',
        B: 'You need an IPv6 address for a specific instance.',
        C: 'You want to mask the failure of an instance to network clients.',
        D: 'You want to avoid making changes to your security groups.'
      },
      answer: 'C'
    },
    // Q183
    {
      question: 'Which of the following can you not do with an elastic IP address?',
      choices: {
        A: 'Change the IP address associated with it while it is in use.',
        B: 'Move it from one instance to another.',
        C: 'Move it across VPCs.',
        D: 'Associate it with a single instance in a VPC.'
      },
      answer: 'A'
    },
    // Q184
    {
      question: 'Which of the following are advantages of an elastic IP? (Choose two.)',
      choices: {
        A: 'Reduces the number of IP addresses your VPC uses',
        B: 'Provides protection in case of an instance failure',
        C: 'Allows all attributes of a network interface to be moved at one time',
        D: 'Provides multiple IP addresses for a single instance'
      },
      answer: [ 'B', 'C' ]
    },
    // Q185
    {
      question: 'Which of the following would you need to do to create an elastic IP address?   (Choose two.)',
      choices: {
        A: 'Allocate an elastic IP address for use in a VPC.',
        B: 'C. B.',
        C: '.   Allocate an IP address in Route 53. C.   Detach the primary network interface on an instance.',
        D: 'Associate the elastic IP to an instance in your VPC.124   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: [ 'A', 'D' ]
    },
    // Q186
    {
      question: 'Which of these is not a valid means of working with an Amazon EBS snapshot?',
      choices: {
        A: 'The AWS API',
        B: 'The AWS CLI',
        C: 'The AWS console',
        D: 'The AWS EBS management tool'
      },
      answer: 'D'
    },
    // Q187
    {
      question: 'Where are individual instances provisioned?',
      choices: {
        A: 'In a VPC',
        B: 'In a region',
        C: 'In an availability zone',
        D: 'In an Auto Scaling group'
      },
      answer: 'C'
    },
    // Q188
    {
      question: 'How are EBS snapshots backed up to S3?',
      choices: {
        A: 'Incrementally',
        B: 'In full, every time they are changed',
        C: 'EBS snapshots are backed up to RDS.',
        D: 'Sequentially'
      },
      answer: 'A'
    },
    // Q189
    {
      question: 'You have an existing IAM role in use by several instances in your VPC. You make a  change in the role, removing permissions to access S3. When does this change take effect  on the instances already attached to the role?',
      choices: {
        A: 'Immediately',
        B: 'Within 60 seconds',
        C: 'The next time the instances are restarted',
        D: 'The instances preserve the pre-change permissions indefinitely.'
      },
      answer: 'A'
    },
    // Q190
    {
      question: 'How many IAM roles can you attach to a single instance?',
      choices: {
        A: 'One',
        B: 'One or two',
        C: 'As many as you want',
        D: 'None, roles are not assigned to instances.'
      },
      answer: 'A'
    },
    // Q191
    {
      question: 'How can you attach multiple IAM roles to a single instance? (Choose two.)',
      choices: {
        A: 'You can attach as many roles as you want to an instance.',
        B: 'You cannot, but you can combine the policies each role uses into a single new role  and assign that.',
        C: 'You can assign two IAM roles to an instance, but no more than that.',
        D: 'You cannot; only one role can be assigned to an instance.Review Questions   125'
      },
      answer: [ 'B', 'D' ]
    },
    // Q192
    {
      question: 'You need to make a change to a role attached to a running instance. What do you need to  do to ensure the least amount of downtime? (Choose two.)',
      choices: {
        A: 'Update the IAM role via the console or AWS API or CLI.',
        B: 'Re-attach the updated role to the instance.',
        C: 'Restart the instance.',
        D: 'Other than updating the role, no additional changes are needed.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q193
    {
      question: 'You have a new set of permissions that you want to attach to a running instance. What do  you need to do to ensure the least amount of downtime? (Choose two.)',
      choices: {
        A: 'Remove the instance’s IAM role via the console or AWS API or CLI.',
        B: 'Create a new IAM role with the desired permissions.',
        C: 'Stop the instance, assign the role, and restart the instance.',
        D: 'Attach the new role to the running instance.'
      },
      answer: [ 'B', 'D' ]
    },
    // Q194
    {
      question: 'How can you delete a snapshot of an EBS volume when it’s used as the root device of a  registered AMI?',
      choices: {
        A: 'You c a n’t .',
        B: 'You can, but only using the AWS API or CLI.',
        C: 'Delete the snapshot using the AWS console.',
        D: 'Ensure that you have correct IAM privileges and delete the AMI.'
      },
      answer: 'A'
    },
    // Q195
    {
      question: 'Which of these is the best option for encrypting data at rest on an EBS volume?',
      choices: {
        A: 'Configure the volume’s encryption at creation time.',
        B: 'Configure AES 256 encryption on the volume once it’s been started.',
        C: 'Configure encryption using the OS tools on the attached EC2 instance.',
        D: 'Back up the data in the volume to an encrypted S3 bucket.'
      },
      answer: 'A'
    },
    // Q196
    {
      question: 'How can you ensure that an EBS root volume persists beyond the life of an EC2 instance,  in the event that the instance is terminated?',
      choices: {
        A: 'The volume will persist automatically.',
        B: 'Configure the EC2 instance to not terminate its root volume and the EBS volume to  persist.',
        C: 'You cannot; root volumes always are deleted when the attached EC2 instance is   terminated.',
        D: 'Ensure that encryption is enabled on the volume and it will automatically persist.'
      },
      answer: 'B'
    },
    // Q197
    {
      question: 'Which of the following is not part of the well-architected framework?',
      choices: {
        A: 'Apply security at all layers.',
        B: 'Enable traceability.',
        C: 'Use defaults whenever possible.',
        D: 'Automate responses to security events.126   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'C'
    },
    // Q198
    {
      question: 'Which of the following should you attempt to automate, according to the AWS well-  architected framework? (Choose two.)',
      choices: {
        A: 'Security best practices',
        B: 'Scaling instances',
        C: 'Responses to security events',
        D: 'IAM policy creation'
      },
      answer: [ 'A', 'C' ]
    },
    // Q199
    {
      question: 'Which of the following statements are true? (Choose two.)',
      choices: {
        A: 'You are responsible for security in the cloud.',
        B: 'AWS is responsible for security of the cloud.',
        C: 'AWS is responsible for security in the cloud.',
        D: 'You are responsible for security of the cloud.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q200
    {
      question: 'For which of the following is AWS responsible for security? (Choose two.)',
      choices: {
        A: 'Edge locations',
        B: 'Firewall configuration',
        C: 'Network traffic',
        D: 'Availability zones'
      },
      answer: [ 'A', 'D' ]
    },
    // Q201
    {
      question: 'For which of the following is AWS not responsible for security?',
      choices: {
        A: 'Networking infrastructure',
        B: 'RDS database installations',
        C: 'S3 buckets',
        D: 'Networking traffic'
      },
      answer: 'D'
    },
    // Q202
    {
      question: 'For which of the following are you not responsible for security?',
      choices: {
        A: 'DynamoDB',
        B: 'Operating system configuration',
        C: 'Server-side encryption',
        D: 'Application keys'
      },
      answer: 'A'
    },
    // Q203
    {
      question: 'Which of the following is not included in the well-architected framework’s definition of  security?',
      choices: {
        A: 'Data protection',
        B: 'Infrastructure protection',
        C: 'Reduction of privileges',
        D: 'Defective controls'
      },
      answer: 'C'
    },
    // Q204
    {
      question: 'Which of the following is a principle of the well-architected framework’s security section?',
      choices: {
        A: 'Encrypt the least amount of data possible.',
        B: 'Always encrypt the most important data.',
        C: 'Encrypt everything where possible.',
        D: 'Encrypt data at rest.Review Questions   127'
      },
      answer: 'C'
    },
    // Q205
    {
      question: 'Which of the following are principles of the well-architected framework’s security sec- tion? (Choose two.)',
      choices: {
        A: 'Encrypt data at rest.',
        B: 'Encrypt data in transit.',
        C: 'Encrypt data in groups rather than individually.',
        D: 'Encrypt data at the destination.'
      },
      answer: [ 'A', 'B' ]
    },
    // Q206
    {
      question: 'Who is responsible for encrypting data in the cloud?',
      choices: {
        A: 'You',
        B: 'AW S',
        C: 'AWS provides mechanisms such as key rotation for which they are responsible, but  you are responsible for appropriate usage of those mechanisms.',
        D: 'AWS provides an API, but you are responsible for security when using that API.'
      },
      answer: 'C'
    },
    // Q207
    {
      question: 'What is the term used to represent the resiliency of data stored in S3?',
      choices: {
        A: '9 9s',
        B: '11 9s',
        C: '7 9s',
        D: '99th percentile'
      },
      answer: 'B'
    },
    // Q208
    {
      question: 'Which of these statements is not true?',
      choices: {
        A: 'AWS recommends encrypting data at rest and in transit.',
        B: 'AWS will never move data between regions unless initiated by the customer.',
        C: 'AWS will initiate moving data between regions if needed.',
        D: 'Customers move data between regions rather than AWS.'
      },
      answer: 'C'
    },
    // Q209
    {
      question: 'Which of the following can be part of a strategy to avoid accidental data overwriting of  S3 data?',
      choices: {
        A: 'IAM roles',
        B: 'MFA Delete',
        C: 'Versioning',
        D: 'All of these'
      },
      answer: 'D'
    },
    // Q210
    {
      question: 'Which of the following should always be done to protect your AWS environment?   (Choose two.)',
      choices: {
        A: 'Enable MFA on the root account.',
        B: 'Enable MFA Delete on your S3 buckets.',
        C: 'Set a password rotation policy for users.',
        D: 'Create custom IAM roles for all users.128   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: [ 'A', 'C' ]
    },
    // Q211
    {
      question: 'At what level does infrastructure protection exist in AWS?',
      choices: {
        A: 'The physical hardware layer',
        B: 'OSI layer 4',
        C: 'The VPC layer',
        D: 'OSI layer 7'
      },
      answer: 'C'
    },
    // Q212
    {
      question: 'Which of the following might be used to detect or identify a security breach in AWS?  (Choose two.)',
      choices: {
        A: 'CloudWatch',
        B: 'CloudFormation',
        C: 'CloudTrail',
        D: 'Trusted Advisor'
      },
      answer: [ 'A', 'C' ]
    },
    // Q213
    {
      question: 'Which of the following AWS services is associated with privilege management?',
      choices: {
        A: 'AWS Config',
        B: 'RDS',
        C: 'IAM',
        D: 'VPC'
      },
      answer: 'C'
    },
    // Q214
    {
      question: 'Which of the following AWS services is associated with privilege management?',
      choices: {
        A: 'Internet gateway',
        B: 'S3-IA',
        C: 'CloudTrail',
        D: 'MFA'
      },
      answer: 'D'
    },
    // Q215
    {
      question: 'Which of the following AWS services is associated with identifying potential security  holes?',
      choices: {
        A: 'Trusted Advisor',
        B: 'CloudFormation',
        C: 'Security Detector',
        D: 'Security Advisor'
      },
      answer: 'A'
    },
    // Q216
    {
      question: 'Which of the following is not one of the five pillars in the cloud defined by the AWS well- architected framework?',
      choices: {
        A: 'Operational excellence',
        B: 'Performance efficiency',
        C: 'Organizational blueprint',
        D: 'Cost optimizationReview Questions   129'
      },
      answer: 'C'
    },
    // Q217
    {
      question: 'Which of the following is not one of the five pillars in the cloud defined by the AWS well- architected framework?',
      choices: {
        A: 'Performance efficiency',
        B: 'Usability',
        C: 'Security',
        D: 'Reliability'
      },
      answer: 'B'
    },
    // Q218
    {
      question: 'Which of the following is not one of the security principles recommended by AWS’s well- architected framework?',
      choices: {
        A: 'Automate security best practices.',
        B: 'Enable traceability.',
        C: 'Apply security at the highest layers.',
        D: 'Protect data in transit and at rest.'
      },
      answer: 'C'
    },
    // Q219
    {
      question: 'Which of the following is one of the security principles recommended by AWS’s well- architected framework?',
      choices: {
        A: 'Make sure all users have passwords.',
        B: 'Only protect data at rest.',
        C: 'Turn on MFA Delete for S3 buckets.',
        D: 'Keep people away from data.'
      },
      answer: 'D'
    },
    // Q220
    {
      question: 'The AWS’s well-architected framework defines five areas to consider with respect to secu- rity. Choose the two that are part of this set. (Choose two.)',
      choices: {
        A: 'Identity and Access Management',
        B: 'User management',
        C: 'Virtual private networks',
        D: 'Incident response'
      },
      answer: [ 'A', 'D' ]
    },
    // Q221
    {
      question: 'Who is responsible for physically securing the infrastructure that supports cloud services?',
      choices: {
        A: 'AW S',
        B: 'You',
        C: 'You r u s er s',
        D: 'AWS and you have joint responsibility.'
      },
      answer: 'A'
    },
    // Q222
    {
      question: 'Which of the following statements about the root account in an AWS account are true?  (Choose two.)',
      choices: {
        A: 'It is the first account created.',
        B: 'It is ideal for everyday tasks.',
        C: 'It is intended primarily for creating other users and groups.',
        D: 'It has access keys that are important to keep.130   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: [ 'A', 'C' ]
    },
    // Q223
    {
      question: 'Which of the following are appropriate password policy requirements? (Choose two.)',
      choices: {
        A: 'Maximum length',
        B: 'Recovery',
        C: 'Minimum length',
        D: 'Complexity'
      },
      answer: [ 'C', 'D' ]
    },
    // Q224
    {
      question: 'What additional requirements should users that can access the AWS console have?',
      choices: {
        A: 'Users with console access should have more stringent password policy requirements.',
        B: 'Users with console access should have to use their access keys to log in.',
        C: 'Users with console access should be required to use MFA.',
        D: 'None. These users should be treated the same as other users.'
      },
      answer: 'C'
    },
    // Q225
    {
      question: 'Which of the following provide a means of federating users from an existing organiza- tion? (Choose two.)',
      choices: {
        A: 'SAML 2.0',
        B: 'Web identities',
        C: 'LDAP',
        D: 'UML 2.0'
      },
      answer: [ 'A', 'B' ]
    },
    // Q226
    {
      question: 'Which of the following principles suggests ensuring that authenticated identities are only  permitted to perform the most minimal set of functions necessary?',
      choices: {
        A: 'Principle of lowest privilege',
        B: 'Principle of least priority',
        C: 'Principle of least privilege',
        D: 'Principle of highest privilege'
      },
      answer: 'C'
    },
    // Q227
    {
      question: 'What is an AWS Organizations OU?',
      choices: {
        A: 'Orchestration unit',
        B: 'Organizational unit',
        C: 'Operational unit',
        D: 'Offer of urgency'
      },
      answer: 'B'
    },
    // Q228
    {
      question: 'What is an AWS Organizations SCP?',
      choices: {
        A: 'Service control policy',
        B: 'Service control permissions',
        C: 'Standard controlling permissions',
        D: 'Service conversion policy'
      },
      answer: 'A'
    },
    // Q229
    {
      question: 'To which of the following constructs is an AWS Organizations SCP applied?',
      choices: {
        A: 'To a service control policy',
        B: 'To an IAM role',
        C: 'To an organizational unit',
        D: 'To a SAML user storeReview Questions   131'
      },
      answer: 'C'
    },
    // Q230
    {
      question: 'Which of the following can be used to centrally control AWS services across multiple AWS  accounts?',
      choices: {
        A: 'A service control policy',
        B: 'An organizational unit',
        C: 'An LDAP user store',
        D: 'IAM roles'
      },
      answer: 'A'
    },
    // Q231
    {
      question: 'What AWS service would you use for managing and enforcing policies for multiple AWS  accounts?',
      choices: {
        A: 'AWS Config',
        B: 'AWS Trusted Advisor',
        C: 'AWS Organizations',
        D: 'IAM'
      },
      answer: 'C'
    },
    // Q232
    {
      question: 'Which of the following does AWS provide to increase privacy and control network access?',
      choices: {
        A: 'Network firewalls built into Amazon VPC',
        B: 'Encryption in transit with TLS across all services',
        C: 'Connections that enable private and dedicated connections from an on-premises   environment',
        D: 'All of these'
      },
      answer: 'D'
    },
    // Q233
    {
      question: 'You have an application that uses S3 standard for storing large data. Your company wants  to ensure that all data is encrypted at rest while avoiding adding work to your current  development sprints. Which S3 encryption solution should you use?',
      choices: {
        A: 'SSE-C',
        B: 'SSE-S3',
        C: 'SSE-KMS',
        D: 'Amazon S3 Encryption Client'
      },
      answer: 'B'
    },
    // Q234
    {
      question: 'You are the architect of an application that allows users to send private messages back  and forth. You want to ensure encryption of the messages when stored in S3 and a strong  auditing trail in case of a breach. You also want to capture any failed attempts to access  data. What Amazon encryption solution would you use?',
      choices: {
        A: 'SSE-C',
        B: 'SSE-S3',
        C: 'SSE-KMS',
        D: 'Amazon S3 Encryption Client132   Chapter 3   ■   Domain 3: Specify Secure Applications and Architectures'
      },
      answer: 'C'
    },
    // Q235
    {
      question: 'Your company has just hired three new developers. They need immediate access to a suite  of AWS services. What is the best approach to giving these developers access?',
      choices: {
        A: 'Give the developers the admin credentials and change the admin password when they  are finished for the day.',
        B: 'Create a new IAM user for each developer and assign the required permissions to  each user.',
        C: 'Create a new IAM user for each developer, create a single group with the required  permissions, and assign each user to that group.',
        D: 'Create a new SCP and assign the SCP to an OU with each user’s credentials within  that OU.'
      },
      answer: 'C'
    },
    // Q236
    {
      question: 'Your application requires a highly available storage solution. Further, the application will  serve customers in the EU and must comply with EU privacy laws. What should you do to  provide this storage?',
      choices: {
        A: 'Create a new EC2 instance in EU-Central-1 and set up EBS volumes in a RAID con- figuration attached to that instance.',
        B: 'Create a new S3 standard bucket in EU-West-1.',
        C: 'Create a new Glacier vault in EU-South-1.',
        D: 'Create a new Auto Scaling group in EU-West-1 with at least three EC2 instances,  each with an attached Provisioned IOPS EBS volume.'
      },
      answer: 'B'
    },
    // Q237
    {
      question: 'Which of the following provides SSL for data in transit?',
      choices: {
        A: 'S3 standard',
        B: 'S3 One Zone-IA',
        C: 'Glacier',
        D: 'All of these'
      },
      answer: 'D'
    },
    // Q238
    {
      question: 'Which of the following does not provide encryption of data at rest?',
      choices: {
        A: 'S3 standard',
        B: 'S3 One Zone-IA',
        C: 'Glacier',
        D: 'All of these encrypt data at rest.'
      },
      answer: 'D'
    },
    // Q239
    {
      question: 'What is the AWS shared responsibility model?',
      choices: {
        A: 'A model that defines which components AWS secures and which you as an AWS cus- tomer must secure',
        B: 'A model that defines which components you secure and which components your cus- tomers must secure',
        C: 'A model that defines how connections between offices or on-premises data centers  and the cloud must work together to secure data that moves between the two',
        D: 'A model that defines how the five pillars of the AWS well-architected framework  interactReview Questions   133'
      },
      answer: 'A'
    },
    // Q240
    {
      question: 'Which of the following is not one of the types of services that AWS offers, according to  the shared responsibility model?',
      choices: {
        A: 'Infrastructure services',
        B: 'Managed services',
        C: 'Containers services',
        D: 'Abstracted services'
      },
      answer: 'B'
    },
    // Q241
    {
      question: 'For which of the following are you not responsible for security?',
      choices: {
        A: 'Operating systems',
        B: 'Credentials',
        C: 'Virtualization infrastructure',
        D: 'AMIs'
      },
      answer: 'C'
    },
    // Q242
    {
      question: 'Which of the following is used to allow EC2 instances to access S3 buckets?',
      choices: {
        A: 'IAM role',
        B: 'IAM policy',
        C: 'IAM user',
        D: 'AWS organizational unit'
      },
      answer: 'A'
    },
    // Q243
    {
      question: 'You have a task within a Docker container deployed via AWS ECS. The application can- not access data stored in an S3 bucket. What might be the problem? (Choose two.)',
      choices: {
        A: 'The IAM role associated with the task doesn’t have permissions to access S3.',
        B: 'The task is not in a security group with inbound access allowed from S3.',
        C: 'The task does not have access to an S3 VPC endpoint.',
        D: 'There is no policy defined to allow ECS tasks to access S3.'
      },
      answer: [ 'A', 'D' ]
    },
    // Q244
    {
      question: 'What is the default security on a newly created S3 bucket?',
      choices: {
        A: 'Read-only',
        B: 'Read and write is permitted from EC2 instances in the same region.',
        C: 'Completely private, reads and writes are disallowed.',
        D: 'There is no policy defined to allow ECS tasks to access S3.'
      },
      answer: 'C'
    }];