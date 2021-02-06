  const myQuestions = [
    {
      question: 'Which of the following objects are good candidates to store in a cache? (Choose 3 answers)',
      choices: {
        a: 'Session state',
        b: 'Shopping cart',
        c: 'Product catalog',
        d: 'Bank account balance'
      },
      answer: ['a', 'b', 'c']
    },
    {
      question: 'Which of the following cache engines are supported by Amazon ElastiCache? (Choose 2 answers)',
      choices: {
        a: 'MySQL',
        b: 'Memcached',
        c: 'Redis',
        d: 'Couchbase'
      },
      answer: ['b', 'c']
    },
    {
      question: 'How many nodes can you add to an Amazon ElastiCache cluster running Memcached?',
      choices: {
        a: '1',
        b: '5',
        c: '20',
        d: '100'
      },
      answer: 'c'
    },
    {
      question: 'How many nodes can you add to an Amazon ElastiCache cluster running Redis?',
      choices: {
        a: '1',
        b: '5',
        c: '20',
        d: '100'
      },
      answer: 'a'
    },
    {
      question: 'An application currently uses Memcached to cache frequently used database queries. Which steps are required to migrate the application to use Amazon ElastiCache with minimal changes? (Choose 2 answers)',
      choices: {
        a: 'Recompile the application to use the Amazon ElastiCache libraries.',
        b: 'Update the configuration file with the endpoint for the Amazon ElastiCache cluster.',
        c: 'Configure a security group to allow access from the application servers.',
        d: 'Connect to the Amazon ElastiCache nodes using Secure Shell (SSH) and install the latest version of Memcached.'
      },
      answer: ['b', 'c']
    },
    {
      question: 'How can you back up data stored in Amazon ElastiCache running Redis? (Choose 2 answers)',
      choices: {
        a: 'Create an image of the Amazon Elastic Compute Cloud (Amazon EC2) instance.',
        b: 'Configure automatic snapshots to back up the cache environment every night.',
        c: 'Create a snapshot manually.',
        d: 'Redis clusters cannot be backed up.'
      },
      answer: ['b', 'c']
    },
    {
      question: 'How can you secure an Amazon ElastiCache cluster? (Choose 3 answers)',
      choices: {
        a: 'Change the Memcached root password.',
        b: 'Restrict Application Programming Interface (API) actions using AWS Identity and Access Management (IAM) policies.',
        c: 'Restrict network access using security groups.',
        d: 'Restrict network access using a network Access Control List (ACL).'
      },
      answer: ['b', 'c', 'd']
    },
    {
      question: 'You are working on a mobile gaming application and are building the leaderboard feature to track the top scores across millions of users. Which AWS services are best suited for this use case?',
      choices: {
        a: 'Amazon Redshift',
        b: 'Amazon ElastiCache using Memcached',
        c: 'Amazon ElastiCache using Redis',
        d: 'Amazon Simple Storage Service (S3)'
      },
      answer: 'c'
    },
    {
      question: 'You have built a large web application that uses Amazon ElastiCache using Memcached to store frequent query results. You plan to expand both the web fleet and the cache fleet multiple times over the next year to accommodate increased user traffic. How do you minimize the amount of changes required when a scaling event occurs?',
      choices: {
        a: 'Configure AutoDiscovery on the client side',
        b: 'Configure AutoDiscovery on the server side',
        c: 'Update the configuration file each time a new cluster',
        d: 'Use an Elastic Load Balancer to proxy the requests'
      },
      answer: 'a'
    },
    {
      question: 'Which cache engines does Amazon ElastiCache support? (Choose 2 answers)',
      choices: {
        a: 'Memcached',
        b: 'Redis',
        c: 'Membase',
        d: 'Couchbase'
      },
      answer: ['a', 'b']
    }];