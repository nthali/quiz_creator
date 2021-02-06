const myQuestions = [
    {
      question: 'What is the minimum size subnet that you can have in an Amazon VPC?',
      choices: {
        a: '/24',
        b: '/26',
        c: '/28',
        d: '/30'
      },
      answer: 'c'
    },
    {
      question: 'You are a solutions architect working for a large travel company that is migrating its existing server estate to AWS. You have recommended that they use a custom Amazon VPC, and they have agreed to proceed. They will need a public subnet for their web servers and a private subnet in which to place their databases. They also require that the web servers and database servers be highly available and that there be a minimum of two web servers and two database servers each. How many subnets should you have to maintain high availability?',
      choices: {
        a: '2',
        b: '3',
        c: '4',
        d: '1'
      },
      answer: 'c'
    },
    {
      question: 'Which of the following is an optional security control that can be applied at the subnet layer of a VPC?',
      choices: {
        a: 'Network ACL',
        b: 'Security Group',
        c: 'Firewall',
        d: 'Web application firewall'
      },
      answer: 'a'
    },
    {
      question: 'What is the maximum size IP address range that you can have in an Amazon VPC?',
      choices: {
        a: '/16',
        b: '/24',
        c: '/28',
        d: '/30'
      },
      answer: 'a'
    },
    {
      question: 'You create a new subnet and then add a route to your route table that routes traffic out from that subnet to the Internet using an IGW. What type of subnet have you created?',
      choices: {
        a: 'An internal subnet',
        b: 'A private subnet',
        c: 'An external subnet',
        d: 'A public subnet'
      },
      answer: 'd'
    },
    {
      question: 'What happens when you create a new Amazon VPC?',
      choices: {
        a: 'A main route table is created by default.',
        b: 'Three subnets are created by default—one for each Availability Zone.',
        c: 'Three subnets are created by default in one Availability Zone.',
        d: 'An IGW is created by default.'
      },
      answer: 'a'
    },
    {
      question: 'You create a new VPC in  US-East-1  and provision three subnets inside this Amazon VPC. Which of the following statements is true?',
      choices: {
        a: 'By default, these subnets will not be able to communicate with each other; you will need to create routes.',
        b: 'All subnets are public by default.',
        c: 'All subnets will be able to communicate with each other by default.',
        d: 'Each subnet will have identical CIDR blocks.'
      },
      answer: 'c'
    },
    {
      question: 'How many IGWs can you attach to an Amazon VPC at any one time?',
      choices: {
        a: '1',
        b: '2',
        c: '3',
        d: '4'
      },
      answer: 'a'
    },
    {
      question: 'What aspect of an Amazon VPC is stateful?',
      choices: {
        a: 'Network ACLs',
        b: 'Security groups',
        c: 'Amazon DynamoDB',
        d: 'Amazon S3'
      },
      answer: 'b'
    },
    {
      question: 'You have created a custom Amazon VPC with both private and public subnets. You have created a NAT instance and deployed this instance to a public subnet. You have attached an EIP address and added your NAT to the route table. Unfortunately, instances in your private subnet still cannot access the Internet. What may be the cause of this?',
      choices: {
        a: 'Your NAT is in a public subnet, but it needs to be in a private subnet.',
        b: 'Your NAT should be behind an Elastic Load Balancer.',
        c: 'You should disable source/destination checks on the NAT.',
        d: 'Your NAT has been deployed on a Windows instance, but your other instances are Linux. You should redeploy the NAT onto a Linux instance.'
      },
      answer: 'c'
    },
    {
      question: 'Which of the following will occur when an Amazon Elastic Block Store (Amazon EBS)- backed Amazon EC2 instance in an Amazon VPC with an associated EIP is stopped and started? (Choose 2 answers)',
      choices: {
        a: 'The EIP will be dissociated from the instance.',
        b: 'All data on instance-store devices will be lost.',
        c: 'All data on Amazon EBS devices will be lost.',
        d: 'The ENI is detached.',
        e: 'The underlying host for the instance is changed.'
      },
      answer: ['b', 'e']
    },
    {
      question: 'How many VPC Peering connections are required for four VPCs located within the same AWS region to be able to send traffic to each of the others?',
      choices: {
        a: '3',
        b: '4',
        c: '5',
        d: '6'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following AWS resources would you use in order for an EC2-VPC instance to resolve DNS names outside of AWS?',
      choices: {
        a: 'A VPC peering connection',
        b: 'A DHCP option set',
        c: 'A routing rule',
        d: 'An IGW'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following is the Amazon side of an Amazon VPN connection?',
      choices: {
        a: 'An EIP',
        b: 'A CGW',
        c: 'An IGW',
        d: 'A VPG'
      },
      answer: 'd'
    },
    {
      question: 'What is the default limit for the number of Amazon VPCs that a customer may have in a region?',
      choices: {
        a: '5',
        b: '6',
        c: '7',
        d: 'There is no default maximum number of VPCs within a region.'
      },
      answer: 'a'
    },
    {
      question: 'You are responsible for your company’s AWS resources, and you notice a significant amount of traffic from an IP address in a foreign country in which your company does not have customers. Further investigation of the traffic indicates the source of the traffic is scanning for open ports on your EC2-VPC instances. Which one of the following resources can deny the traffic from reaching the instances?',
      choices: {
        a: 'Security group',
        b: 'Network ACL',
        c: 'NAT instance',
        d: 'An Amazon VPC endpoint'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following is the security protocol supported by Amazon VPC?',
      choices: {
        a: 'SSH',
        b: 'Advanced Encryption Standard (AES)',
        c: 'Point-to-Point Tunneling Protocol (PPTP)',
        d: 'IPsec'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following Amazon VPC resources would you use in order for EC2-VPC instances to send traffic directly to Amazon S3?',
      choices: {
        a: 'Amazon S3 gateway',
        b: 'IGW',
        c: 'CGW',
        d: 'VPC endpoint'
      },
      answer: 'd'
    },
    {
      question: 'What properties of an Amazon VPC must be specified at the time of creation? (Choose 2 answers)',
      choices: {
        a: 'The CIDR block representing the IP address range',
        b: 'One or more subnets for the Amazon VPC',
        c: 'The region for the Amazon VPC',
        d: 'Amazon VPC Peering relationships'
      },
      answer: ['a', 'c']
    },
    {
      question: 'Which Amazon VPC feature allows you to create a dual-homed instance?',
      choices: {
        a: 'EIP address',
        b: 'ENI',
        c: 'Security groups',
        d: 'CGW'
      },
      answer: 'b'
    }];