const myQuestions = [
    {
      question: 'Which of the following is not a supported Amazon Simple Notification Service (Amazon SNS) protocol?',
      choices: {
        a: 'HTTPS',
        b: 'AWS Lambda',
        c: 'Email-JSON',
        d: 'Amazon DynamoDB'
      },
      answer: 'd'
    },
    {
      question: 'When you create a new Amazon Simple Notification Service (Amazon SNS) topic, which of the following is created automatically?',
      choices: {
        a: 'An Amazon Resource Name (ARN)',
        b: 'A subscriber',
        c: 'An Amazon Simple Queue Service (Amazon SQS) queue to deliver your Amazon SNS topic',
        d: 'A message'
      },
      answer: 'a'
    },
    {
      question: 'Which of the following are features of Amazon Simple Notification Service (Amazon SNS)? (Choose 3 answers)',
      choices: {
        a: 'Publishers',
        b: 'Readers',
        c: 'Subscribers',
        d: 'Topic'
      },
      answer: ['a', 'c', 'd']
    },
    {
      question: 'What is the default time for an Amazon Simple Queue Service (Amazon SQS) visibility timeout?',
      choices: {
        a: '30 seconds',
        b: '60 seconds',
        c: '1 hour',
        d: '12 hours'
      },
      answer: 'a'
    },
    {
      question: 'What is the longest time available for an Amazon Simple Queue Service (Amazon SQS) visibility timeout?',
      choices: {
        a: '30 seconds',
        b: '60 seconds',
        c: '1 hour',
        d: '12 hours'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following options are valid properties of an Amazon Simple Queue Service (Amazon SQS) message? (Choose 2 answers)',
      choices: {
        a: 'Destination',
        b: 'Message ID',
        c: 'Type',
        d: 'Body'
      },
      answer: ['b', 'd']
    },
    {
      question: 'You are a solutions architect who is working for a mobile application company that wants to use Amazon Simple Workflow Service (Amazon SWF) for their new takeout ordering application. They will have multiple workflows that will need to interact. What should you advise them to do in structuring the design of their Amazon SWF environment?',
      choices: {
        a: 'Use multiple domains, each containing a single workflow, and design the workflows to interact across the different domains.',
        b: 'Use a single domain containing multiple workflows. In this manner, the workflows will be able to interact.',
        c: 'Use a single domain with a single workflow and collapse all activities to within this single workflow.',
        d: 'Workflows cannot interact with each other; they would be better off using Amazon Simple Queue Service (Amazon SQS) and Amazon Simple Notification Service (Amazon SNS) for their application.'
      },
      answer: 'b'
    },
    {
      question: 'In Amazon Simple Workflow Service (Amazon SWF), which of the following are actors? (Choose 3 answers)',
      choices: {
        a: 'Activity workers',
        b: 'Workflow starters',
        c: 'Deciders',
        d: 'Activity tasks'
      },
      answer: ['a', 'b', 'c']
    },
    {
      question: 'You are designing a new application, and you need to ensure that the components of your application are not tightly coupled. You are trying to decide between the different AWS Cloud services to use to achieve this goal. Your requirements are that messages between your application components may not be delivered more than once, tasks must be completed in either a synchronous or asynchronous fashion, and there must be some form of application logic that decides what do when tasks have been completed. What application service should you use?',
      choices: {
        a: 'Amazon Simple Queue Service (Amazon SQS)',
        b: 'Amazon Simple Workflow Service (Amazon SWF)',
        c: 'Amazon Simple Storage Service (Amazon S3)',
        d: 'Amazon Simple Email Service (Amazon SES)'
      },
      answer: 'b'
    },
    {
      question: 'How does Amazon Simple Queue Service (Amazon SQS) deliver messages?',
      choices: {
        a: 'Last In, First Out (LIFO)',
        b: 'First In, First Out (FIFO)',
        c: 'Sequentially',
        d: 'Amazon SQS doesn’t guarantee delivery of your messages in any particular order.'
      },
      answer: 'd'
    },
    {
      question: 'Of the following options, what is an efficient way to fanout a single Amazon Simple Notification Service (Amazon SNS) message to multiple Amazon Simple Queue Service (Amazon SQS) queues?',
      choices: {
        a: 'Create an Amazon SNS topic using Amazon SNS. Then create and subscribe multiple Amazon SQS queues sent to the Amazon SNS topic.',
        b: 'Create one Amazon SQS queue that subscribes to multiple Amazon SNS topics.',
        c: 'Amazon SNS allows exactly one subscriber to each topic, so fanout is not possible.',
        d: 'Create an Amazon SNS topic using Amazon SNS. Create an application that subscribes to that topic and duplicates the message. Send copies to multiple Amazon SQS queues.'
      },
      answer: 'a'
    },
    {
      question: 'Your application polls an Amazon Simple Queue Service (Amazon SQS) queue frequently and returns immediately, often with empty ReceiveMessageResponses. What is one thing that can be done to reduce Amazon SQS costs?',
      choices: {
        a: 'Pricing on Amazon SQS does not include a cost for service requests; therefore, there is no concern.',
        b: 'Increase the timeout value for short polling to wait for messages longer before returning a response.',
        c: 'Change the message visibility value to a higher number.',
        d: 'Use long polling by supplying a WaitTimeSeconds of greater than 0 seconds when calling ReceiveMessage.'
      },
      answer: 'd'
    },
    {
      question: 'What is the longest time available for an Amazon Simple Queue Service (Amazon SQS) long polling timeout?',
      choices: {
        a: '10 seconds',
        b: '20 seconds',
        c: '30 seconds',
        d: '1 hour'
      },
      answer: 'b'
    },
    {
      question: 'What is the longest configurable message retention period for Amazon Simple Queue Service (Amazon SQS)?',
      choices: {
        a: '30 minutes',
        b: '4 days',
        c: '30 seconds',
        d: '14 days'
      },
      answer: 'd'
    },
    {
      question: 'What is the default message retention period for Amazon Simple Queue Service (Amazon SQS)?',
      choices: {
        a: '30 minutes',
        b: '4 days',
        c: '30 seconds',
        d: '14 days'
      },
      answer: 'b'
    },
    {
      question: 'Amazon Simple Notification Service (Amazon SNS) is a push notification service that lets you send individual or multiple messages to large numbers of recipients. What types of clients are supported?',
      choices: {
        a: 'Java and JavaScript clients that support publisher and subscriber types',
        b: 'Producers and consumers supported by C and C++ clients',
        c: 'Mobile and AMQP support for publisher and subscriber client types',
        d: 'Publisher and subscriber client types'
      },
      answer: 'd'
    },
    {
      question: 'In Amazon Simple Workflow Service (Amazon SWF), a decider is responsible for what?',
      choices: {
        a: 'Executing each step of the work',
        b: 'Defining work coordination logic by specifying work sequencing, timing, and failure conditions',
        c: 'Executing your workflow',
        d: 'Registering activities and workflow with Amazon SWF'
      },
      answer: 'b'
    },
    {
      question: 'Can an Amazon Simple Notification Service (Amazon SNS) topic be recreated with a previously used topic name?',
      choices: {
        a: 'Yes. The topic name should typically be available after 24 hours after the previous topic with the same name has been deleted.',
        b: 'Yes. The topic name should typically be available after 1–3 hours after the previous topic with the same name has been deleted.',
        c: 'Yes. The topic name should typically be available after 30–60 seconds after the previous topic with the same name has been deleted.',
        d: 'At this time, this feature is not supported.'
      },
      answer: 'c'
    },
    {
      question: 'What should you do in order to grant a different AWS account permission to your Amazon Simple Queue Service (Amazon SQS) queue?',
      choices: {
        a: 'Share credentials to your AWS account and have the other account’s applications use your account’s credentials to access the Amazon SQS queue.',
        b: 'Create a user for that account in AWS Identity and Access Management (IAM) and establish an IAM policy that grants access to the queue.',
        c: 'Create an Amazon SQS policy that grants the other account access.',
        d: 'Amazon Virtual Private Cloud (Amazon VPC) peering must be used to achieve this.'
      },
      answer: 'c'
    },
    {
      question: 'Can an Amazon Simple Notification Service (Amazon SNS) message be deleted after being published to a topic?',
      choices: {
        a: 'Only if a subscriber(s) has/have not read the message yet',
        b: 'Only if the Amazon SNS recall message parameter has been set',
        c: 'No. After a message has been successfully published to a topic, it cannot be recalled.',
        d: 'Yes. However it can be deleted only if the subscribers are Amazon SQS queues.'
      },
      answer: 'c'
    }];