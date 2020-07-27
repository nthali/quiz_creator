const myQuestions = [
    {
      question: 'Which of the following are required elements of an Auto Scaling group? (Choose 2 answers)',
      choices: {
        a: 'Minimum size',
        b: 'Health checks',
        c: 'Desired capacity',
        d: 'Launch configuration'
      },
      answer: ['a', 'd']
    },
    {
      question: 'You have created an Elastic Load Balancing load balancer listening on port 80, and you registered it with a single Amazon Elastic Compute Cloud (Amazon EC2) instance also listening on port 80. A client makes a request to the load balancer with the correct protocol and port for the load balancer. In this scenario, how many connections does the balancer maintain?',
      choices: {
        a: '1',
        b: '2',
        c: '3',
        d: '4'
      },
      answer: 'b'
    },
    {
      question: 'How long does Amazon CloudWatch keep metric data?',
      choices: {
        a: '1 day',
        b: '2 days',
        c: '1 week',
        d: '2 weeks'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following are the minimum required elements to create an Auto Scaling launch configuration?',
      choices: {
        a: 'Launch configuration name, Amazon Machine Image (AMI), and instance type',
        b: 'Launch configuration name, AMI, instance type, and key pair',
        c: 'Launch configuration name, AMI, instance type, key pair, and security group',
        d: 'Launch configuration name, AMI, instance type, key pair, security group, and block device mapping'
      },
      answer: 'a'
    },
    {
      question: 'You are responsible for the application logging solution for your company’s existing applications running on multiple Amazon EC2 instances. Which of the following is the best approach for aggregating the application logs within AWS?',
      choices: {
        a: 'Amazon CloudWatch custom metrics',
        b: 'Amazon CloudWatch Logs Agent',
        c: 'An Elastic Load Balancing listener',
        d: 'An internal Elastic Load Balancing load balancer'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following must be configured on an Elastic Load Balancing load balancer to accept incoming traffic?',
      choices: {
        a: 'A port',
        b: 'A network interface',
        c: 'A listener',
        d: 'An instance'
      },
      answer: 'c'
    },
    {
      question: 'You create an Auto Scaling group in a new region that is configured with a minimum size value of 10, a maximum size value of 100, and a desired capacity value of 50. However, you notice that 30 of the Amazon Elastic Compute Cloud (Amazon EC2) instances within the Auto Scaling group fail to launch. Which of the following is the cause of this behavior?',
      choices: {
        a: 'You cannot define an Auto Scaling group larger than 20.',
        b: 'The Auto Scaling group maximum value cannot be more than 20.',
        c: 'You did not attach an Elastic Load Balancing load balancer to the Auto Scaling group.',
        d: 'You have not raised your default Amazon EC2 capacity (20) for the new region.'
      },
      answer: 'd'
    },
    {
      question: 'You want to host multiple Hypertext Transfer Protocol Secure (HTTPS) websites on a fleet of Amazon EC2 instances behind an Elastic Load Balancing load balancer with a single X.509 certificate. How must you configure the Secure Sockets Layer (SSL) certificate so that clients connecting to the load balancer are not presented with a warning when they connect?',
      choices: {
        a: 'Create one SSL certificate with a Subject Alternative Name (SAN) value for each website name.',
        b: 'Create one SSL certificate with the Server Name Indication (SNI) value checked.',
        c: 'Create multiple SSL certificates with a SAN value for each website name.',
        d: 'Create SSL certificates for each Availability Zone with a SAN value for each website name.'
      },
      answer: 'a'
    },
    {
      question: 'Your web application front end consists of multiple Amazon Compute Cloud (Amazon EC2) instances behind an Elastic Load Balancing load balancer. You have configured the load balancer to perform health checks on these Amazon EC2 instances. If an instance fails to pass health checks, which statement will be true?',
      choices: {
        a: 'The instance is replaced automatically by the load balancer.',
        b: 'The instance is terminated automatically by the load balancer.',
        c: 'The load balancer stops sending traffic to the instance that failed its health check.',
        d: 'The instance is quarantined by the load balancer for root cause analysis.'
      },
      answer: 'c'
    },
    {
      question: 'In the basic monitoring package for Amazon Elastic Compute Cloud (Amazon EC2), what Amazon CloudWatch metrics are available?',
      choices: {
        a: 'Web server visible metrics such as number of failed transaction requests',
        b: 'Operating system visible metrics such as memory utilization',
        c: 'Database visible metrics such as number of connections',
        d: 'Hypervisor visible metrics such as CPU utilization'
      },
      answer: 'd'
    },
    {
      question: 'A cell phone company is running dynamic-content television commercials for a contest. They want their website to handle traffic spikes that come after a commercial airs. The website is interactive, offering personalized content to each visitor based on location, purchase history, and the current commercial airing. Which architecture will configure Auto Scaling to scale out to respond to spikes of demand, while minimizing costs during quiet periods?',
      choices: {
        a: 'Set the minimum size of the Auto Scaling group so that it can handle high traffic volumes without needing to scale out.',
        b: 'Create an Auto Scaling group large enough to handle peak traffic loads, and then stop some instances. Configure Auto Scaling to scale out when traffic increases using the stopped instances, so new capacity will come online quickly.',
        c: 'Configure Auto Scaling to scale out as traffic increases. Configure the launch configuration to start new instances from a preconfigured Amazon Machine Image (AMI).',
        d: 'Use Amazon CloudFront and Amazon Simple Storage Service (Amazon S3) to cache changing content, with the Auto Scaling group set as the origin. Configure Auto Scaling to have sufficient instances necessary to initially populate CloudFront and Amazon ElastiCache, and then scale in after the cache is fully populated.'
      },
      answer: 'c'
    },
    {
      question: 'For an application running in the ap-northeast-1 region with three Availability Zones (ap- northeast-1a, ap-northeast-1b, and ap-northeast-1c), which instance deployment provides high availability for the application that normally requires nine running Amazon Elastic Compute Cloud (Amazon EC2) instances but can run on a minimum of 65 percent capacity while Auto Scaling launches replacement instances in the remaining Availability Zones?',
      choices: {
        a: 'Deploy the application on four servers in ap-northeast-1a and five servers in ap- northeast-1b, and keep five stopped instances in ap-northeast-1a as reserve.',
        b: 'Deploy the application on three servers in ap-northeast-1a, three servers in ap- northeast-1b, and three servers in ap-northeast-1c.',
        c: 'Deploy the application on six servers in ap-northeast-1b and three servers in ap- northeast-1c.',
        d: 'Deploy the application on nine servers in ap-northeast-1b, and keep nine stopped instances in ap-northeast-1a as reserve.'
      },
      answer: 'b'
    },
    {
      question: 'Which of the following are characteristics of the Auto Scaling service on AWS? (Choose 3 answers)',
      choices: {
        a: 'Sends traffic to healthy instances',
        b: 'Responds to changing conditions by adding or terminating Amazon Elastic Compute Cloud (Amazon EC2) instances',
        c: 'Collects and tracks metrics and sets alarms',
        d: 'Delivers push notifications',
        e: 'Launches instances from a specified Amazon Machine Image (AMI)',
        f: 'Enforces a minimum number of running Amazon EC2 instances'
      },
      answer: ['b', 'e', 'f']
    },
    {
      question: 'Why is the launch configuration referenced by the Auto Scaling group instead of being part of the Auto Scaling group?',
      choices: {
        a: 'It allows you to change the Amazon Elastic Compute Cloud (Amazon EC2) instance type and Amazon Machine Image (AMI) without disrupting the Auto Scaling group.',
        b: 'It facilitates rolling out a patch to an existing set of instances managed by an Auto Scaling group.',
        c: 'It allows you to change security groups associated with the instances launched without having to make changes to the Auto Scaling group.',
        d: 'All of the above',
        e: 'None of the above'
      },
      answer: 'd'
    },
    {
      question: 'An Auto Scaling group may use: (Choose 2 answers)',
      choices: {
        a: 'On-Demand Instances',
        b: 'Stopped instances',
        c: 'Spot Instances',
        d: 'On-premises instances',
        e: 'Already running instances if they use the same Amazon Machine Image (AMI) as the Auto Scaling group’s launch configuration and are not already part of another Auto Scaling group'
      },
      answer: ['a', 'c']
    },
    {
      question: 'Amazon CloudWatch supports which types of monitoring plans? (Choose 2 answers)',
      choices: {
        a: 'Basic monitoring, which is free',
        b: 'Basic monitoring, which has an additional cost',
        c: 'Ad hoc monitoring, which is free',
        d: 'Ad hoc monitoring, which has an additional cost',
        e: 'Detailed monitoring, which is free',
        f: 'Detailed monitoring, which has an additional cost'
      },
      answer: ['a', 'f']
    },
    {
      question: 'Elastic Load Balancing health checks may be: (Choose 3 answers)',
      choices: {
        a: 'A ping',
        b: 'A key pair verification',
        c: 'A connection attempt',
        d: 'A page request',
        e: 'An Amazon Elastic Compute Cloud (Amazon EC2) instance status check'
      },
      answer: ['a', 'c', 'd']
    },
    {
      question: 'When an Amazon Elastic Compute Cloud (Amazon EC2) instance registered with an Elastic Load Balancing load balancer using connection draining is deregistered or unhealthy, which of the following will happen? (Choose 2 answers)',
      choices: {
        a: 'Immediately close all existing connections to that instance.',
        b: 'Keep the connections open to that instance, and attempt to complete in-flight requests.',
        c: 'Redirect the requests to a user-defined error page like “Oops this is embarrassing” or “Under Construction.”',
        d: 'Forcibly close all connections to that instance after a timeout period.',
        e: 'Leave the connections open as long as the load balancer is running.'
      },
      answer: ['b', 'd']
    },
    {
      question: 'Elastic Load Balancing supports which of the following types of load balancers? (Choose 3 answers)',
      choices: {
        a: 'Cross-region',
        b: 'Internet-facing',
        c: 'Interim',
        d: 'Itinerant',
        e: 'Internal',
        f: 'Hypertext Transfer Protocol Secure (HTTPS) using Secure Sockets Layer (SSL)'
      },
      answer: ['b', 'e', 'f']
    },
    {
      question: 'Auto Scaling supports which of the following plans for Auto Scaling groups? (Choose 3 answers)',
      choices: {
        a: 'Predictive',
        b: 'Manual',
        c: 'Preemptive',
        d: 'Scheduled',
        e: 'Dynamic',
        f: 'End-user request driven',
        g: 'Optimistic'
      },
      answer: ['b', 'd', 'e']
    }];