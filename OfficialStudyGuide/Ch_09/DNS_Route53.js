const myQuestions = [
    {
      question: 'Which type of record is commonly used to route traffic to an IPv6 address?',
      choices: {
        a: 'An A record',
        b: 'A CNAME',
        c: 'An AAAA record',
        d: 'An MX record'
      },
      answer: 'c'
    },
    {
      question: 'Where do you register a domain name?',
      choices: {
        a: 'With your local government authority',
        b: 'With a domain registrar',
        c: 'With InterNIC directly',
        d: 'With the Internet Assigned Numbers Authority (IANA)'
      },
      answer: 'b'
    },
    {
      question: 'You have an application that for legal reasons must be hosted in the United States when U.S. citizens access it. The application must be hosted in the European Union when citizens of the EU access it. For all other citizens of the world, the application must be hosted in Sydney. Which routing policy should you choose in order to achieve this?',
      choices: {
        a: 'Latency-based routing',
        b: 'Simple routing',
        c: 'Geolocation routing',
        d: 'Failover routing'
      },
      answer: 'c'
    },
    {
      question: 'Which type of DNS record should you use to resolve an IP address to a domain name?',
      choices: {
        a: 'An A record',
        b: 'A C Name',
        c: 'An SPF record',
        d: 'A PTR record'
      },
      answer: 'd'
    },
    {
      question: 'You host a web application across multiple AWS regions in the world, and you need to configure your DNS so that your end users will get the fastest network performance possible. Which routing policy should you apply?',
      choices: {
        a: 'Geolocation routing',
        b: 'Latency-based routing',
        c: 'Simple routing',
        d: 'Weighted routing'
      },
      answer: 'b'
    },
    {
      question: 'Which DNS record should you use to configure the transmission of email to your intended mail server?',
      choices: {
        a: 'SPF records',
        b: 'A records',
        c: 'MX records',
        d: 'SOA record'
      },
      answer: 'c'
    },
    {
      question: 'Which DNS records are commonly used to stop email spoofing and spam?',
      choices: {
        a: 'MX records',
        b: 'SPF records',
        c: 'A records',
        d: 'C names'
      },
      answer: 'b'
    },
    {
      question: 'You are rolling out A and B test versions of a web application to see which version results in the most sales. You need 10 percent of your traffic to go to version A, 10 percent to go to version B, and the rest to go to your current production version. Which routing policy should you choose to achieve this?',
      choices: {
        a: 'Simple routing',
        b: 'Weighted routing',
        c: 'Geolocation routing',
        d: 'Failover routing'
      },
      answer: 'b'
    },
    {
      question: 'Which DNS record must all zones have by default?',
      choices: {
        a: 'SPF',
        b: 'TXT',
        c: 'MX',
        d: 'SOA'
      },
      answer: 'd'
    },
    {
      question: 'Your company has its primary production site in Western Europe and its DR site in the Asia Pacific. You need to configure DNS so that if your primary site becomes unavailable, you can fail DNS over to the secondary site. Which DNS routing policy would best achieve this?',
      choices: {
        a: 'Weighted routing',
        b: 'Geolocation routing',
        c: 'Simple routing',
        d: 'Failover routing'
      },
      answer: 'd'
    },
    {
      question: 'Which type of DNS record should you use to resolve a domain name to another domain name?',
      choices: {
        a: 'An A record',
        b: 'A CNAME record',
        c: 'An SPF record',
        d: 'A PTR record'
      },
      answer: 'b'
    },
    {
      question: 'Which is a function that Amazon Route 53 does not perform?',
      choices: {
        a: 'Domain registration',
        b: 'DNS service',
        c: 'Load balancing',
        d: 'Health checks'
      },
      answer: 'c'
    },
    {
      question: 'Which DNS record can be used to store human-readable information about a server, network, and other accounting data with a host?',
      choices: {
        a: 'A TXT record',
        b: 'An MX record',
        c: 'An SPF record',
        d: 'A PTR record'
      },
      answer: 'a'
    },
    {
      question: 'Which resource record set would not be allowed for the hosted zone  example.com ?',
      choices: {
        a: 'www.example.com',
        b: 'www.aws.example.com',
        c: 'www.example.ca',
        d: 'www.beta.example.com'
      },
      answer: 'c'
    },
    {
      question: 'Which port number is used to serve requests by DNS?',
      choices: {
        a: '22',
        b: '53',
        c: '161',
        d: '389'
      },
      answer: 'b'
    },
    {
      question: 'Which protocol is primarily used by DNS to serve requests?',
      choices: {
        a: 'Transmission Control Protocol (TCP)',
        b: 'Hyper Text Transfer Protocol (HTTP)',
        c: 'File Transfer Protocol (FTP)',
        d: 'User Datagram Protocol (UDP)'
      },
      answer: 'd'
    },
    {
      question: 'Which protocol is used by DNS when response data size exceeds 512 bytes?',
      choices: {
        a: 'Transmission Control Protocol (TCP)',
        b: 'Hyper Text Transfer Protocol (HTTP)',
        c: 'File Transfer Protocol (FTP)',
        d: 'User Datagram Protocol (UDP)'
      },
      answer: 'a'
    },
    {
      question: 'What are the different hosted zones that can be created in Amazon Route 53? 1 .  Public hosted zone 2 .  Global hosted zone 3 .  Private hosted zone',
      choices: {
        a: '1 and 2',
        b: '1 and 3',
        c: '2 and 3',
        d: '1, 2, and 3'
      },
      answer: 'b'
    },
    {
      question: 'Amazon Route 53 cannot route queries to which AWS resource?',
      choices: {
        a: 'Amazon CloudFront distribution',
        b: 'Elastic Load Balancing load balancer',
        c: 'Amazon EC2',
        d: 'AWS OpsWorks'
      },
      answer: 'd'
    },
    {
      question: 'When configuring Amazon Route 53 as your DNS service for an existing domain, which is the first step that needs to be performed?',
      choices: {
        a: 'Create hosted zones.',
        b: 'Create resource record sets.',
        c: 'Register a domain with Amazon Route 53.',
        d: 'Transfer domain registration from current registrar to Amazon Route 53.'
      },
      answer: 'd'
    }];