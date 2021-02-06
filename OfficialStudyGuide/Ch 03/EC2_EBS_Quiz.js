const myQuestions = [
    {
      question: 'Your web application needs four instances to support steady traffic nearly all of the time. On the last day of each month, the traffic triples. What is a cost-effective way to handle this traffic pattern?',
      choices: {
        a: 'Run 12 Reserved Instances all of the time.',
        b: 'Run four On-Demand Instances constantly, then add eight more On-Demand Instances on the last day of each month.',
        c: 'Run four Reserved Instances constantly, then add eight On-Demand Instances on the last day of each month.',
        d: 'Run four On-Demand Instances constantly, then add eight Reserved Instances on the last day of each month.'
      },
      answer: 'c'
    },
    {
      question: 'Your order-processing application processes orders extracted from a queue with two Reserved Instances processing 10 orders/minute. If an order fails during processing, then it is returned to the queue without penalty. Due to a weekend sale, the queues have several hundred orders backed up. While the backup is not catastrophic, you would like to drain it so that customers get their confirmation emails faster. What is a cost-effective way to drain the queue for orders?',
      choices: {
        a: 'Create more queues.',
        b: 'Deploy additional Spot Instances to assist in processing the orders.',
        c: 'Deploy additional Reserved Instances to assist in processing the orders.',
        d: 'Deploy additional On-Demand Instances to assist in processing the orders.'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following must be specified when launching a new Amazon Elastic Compute Cloud (Amazon EC2) Windows instance? (Choose 2 answers)',
      choices: {
        a: 'The Amazon EC2 instance ID',
        b: 'Password for the administrator account',
        c: 'Amazon EC2 instance type',
        d: 'Amazon Machine Image (AMI)'
      },
      answer: ['c', 'd']
    },
    {
      question: 'You have purchased an m3.xlarge Linux Reserved instance in us-east-1a. In which ways can you modify this reservation? (Choose 2 answers)',
      choices: {
        a: 'Change it into two m3.large instances.',
        b: 'Change it to a Windows instance.',
        c: 'Move it to us-east-1b.',
        d: 'Change it to an m4.xlarge.'
      },
      answer: ['a', 'c']
    },
    {
      question: 'Your instance is associated with two security groups. The first allows Remote Desktop Protocol (RDP) access over port 3389 from Classless Inter-Domain Routing (CIDR) block 72.14.0.0/16. The second allows HTTP access over port 80 from CIDR block 0.0.0.0/0. What traffic can reach your instance?',
      choices: {
        a: 'RDP and HTTP access from CIDR block 0.0.0.0/0',
        b: 'No traffic is allowed.',
        c: 'RDP and HTTP traffic from 72.14.0.0/16',
        d: 'RDP traffic over port 3389 from 72.14.0.0/16 and HTTP traffic over port 80 from 0.0.00/0'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following are features of enhanced networking? (Choose 3 answers)',
      choices: {
        a: 'More Packets Per Second (PPS)',
        b: 'Lower latency',
        c: 'Multiple network interfaces',
        d: 'Border Gateway Protocol (BGP) routing',
        e: 'Less jitter'
      },
      answer: ['a', 'b', 'e']
    },
    {
      question: 'You are creating a High-Performance Computing (HPC) cluster and need very low latency and high bandwidth between instances. What combination of the following will allow this? (Choose 3 answers)',
      choices: {
        a: 'Use an instance type with 10 Gbps network performance.',
        b: 'Put the instances in a placement group.',
        c: 'Use Dedicated Instances.',
        d: 'Enable enhanced networking on the instances.',
        e: 'Use Reserved Instances.'
      },
      answer: ['a', 'b', 'd']
    },
    {
      question: 'Which Amazon Elastic Compute Cloud (Amazon EC2) feature ensures that your instances will not share a physical host with instances from any other AWS customer?',
      choices: {
        a: 'Amazon Virtual Private Cloud (VPC)',
        b: 'Placement groups',
        c: 'Dedicated Instances',
        d: 'Reserved Instances'
      },
      answer: 'c'
    },
    {
      question: 'Which of the following are true of instance stores? (Choose 2 answers)',
      choices: {
        a: 'Automatic backups',
        b: 'Data is lost when the instance stops.',
        c: 'Very high IOPS',
        d: 'Charge is based on the total amount of storage provisioned.'
      },
      answer: ['b', 'c']
    },
    {
      question: 'Which of the following are features of Amazon Elastic Block Store (Amazon EBS)? (Choose 2 answers)',
      choices: {
        a: 'Data stored on Amazon EBS is automatically replicated within an Availability Zone.',
        b: 'Amazon EBS data is automatically backed up to tape.',
        c: 'Amazon EBS volumes can be encrypted transparently to workloads on the attached instance.',
        d: 'Data on an Amazon EBS volume is lost when the attached instance is stopped.'
      },
      answer: ['a', 'c']
    },
    {
      question: 'You need to take a snapshot of an Amazon Elastic Block Store (Amazon EBS) volume. How long will the volume be unavailable?',
      choices: {
        a: 'It depends on the provisioned size of the volume.',
        b: 'The volume will be available immediately.',
        c: 'It depends on the amount of data stored on the volume.',
        d: 'It depends on whether the attached instance is an Amazon EBS-optimized instance.'
      },
      answer: 'b'
    },
    {
      question: 'You are restoring an Amazon Elastic Block Store (Amazon EBS) volume from a snapshot. How long will it be before the data is available?',
      choices: {
        a: 'It depends on the provisioned size of the volume.',
        b: 'The data will be available immediately.',
        c: 'It depends on the amount of data stored on the volume.',
        d: 'It depends on whether the attached instance is an Amazon EBS-optimized instance.'
      },
      answer: 'b'
    },
    {
      question: 'You have a workload that requires 15,000 consistent IOPS for data that must be durable. What combination of the following steps do you need? (Choose 2 answers)',
      choices: {
        a: 'Use an Amazon Elastic Block Store (Amazon EBS)-optimized instance.',
        b: 'Use an instance store.',
        c: 'Use a Provisioned IOPS SSD volume.',
        d: 'Use a magnetic volume.'
      },
      answer: ['a', 'c']
    },
    {
      question: 'Which of the following can be accomplished through bootstrapping?',
      choices: {
        a: 'Install the most current security updates.',
        b: 'Install the current version of the application.',
        c: 'Configure Operating System (OS) services.',
        d: 'All of the above.'
      },
      answer: 'd'
    },
    {
      question: 'How can you connect to a new Linux instance using SSH?',
      choices: {
        a: 'Decrypt the root password.',
        b: 'Using a certificate',
        c: 'Using the private half of the instance’s key pair',
        d: 'Using Multi-Factor Authentication (MFA)'
      },
      answer: 'c'
    },
    {
      question: 'VM Import/Export can import existing virtual machines as: (Choose 2 answers)',
      choices: {
        a: 'Amazon Elastic Block Store (Amazon EBS) volumes',
        b: 'Amazon Elastic Compute Cloud (Amazon EC2) instances',
        c: 'Amazon Machine Images (AMIs)',
        d: 'Security groups'
      },
      answer: ['b', 'c']
    },
    {
      question: 'Which of the following can be used to address an Amazon Elastic Compute Cloud (Amazon EC2) instance over the web? (Choose 2 answers)',
      choices: {
        a: 'Windows machine name',
        b: 'Public DNS name',
        c: 'Amazon EC2 instance ID',
        d: 'Elastic IP address'
      },
      answer: ['b', 'd']
    },
    {
      question: 'Using the correctly decrypted Administrator password and RDP, you cannot log in to a Windows instance you just launched. Which of the following is a possible reason?',
      choices: {
        a: 'There is no security group rule that allows RDP access over port 3389 from your IP address.',
        b: 'The instance is a Reserved Instance.',
        c: 'The instance is not using enhanced networking.',
        d: 'The instance is not an Amazon EBS-optimized instance.'
      },
      answer: 'a'
    },
    {
      question: 'You have a workload that requires 1 TB of durable block storage at 1,500 IOPS during normal use. Every night there is an Extract, Transform, Load (ETL) task that requires 3,000 IOPS for 15 minutes. What is the most appropriate volume type for this workload?',
      choices: {
        a: 'Use a Provisioned IOPS SSD volume at 3,000 IOPS.',
        b: 'Use an instance store.',
        c: 'Use a general-purpose SSD volume.',
        d: 'Use a magnetic volume.'
      },
      answer: 'c'
    },
    {
      question: 'How are you billed for elastic IP addresses?',
      choices: {
        a: 'Hourly when they are associated with an instance',
        b: 'Hourly when they are not associated with an instance',
        c: 'Based on the data that flows through them',
        d: 'Based on the instance type to which they are attached'
      },
      answer: 'b'
    }];