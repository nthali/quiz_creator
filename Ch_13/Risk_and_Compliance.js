const myQuestions = [
    {
      question: 'AWS communicates with customers regarding its security and control environment through a variety of different mechanisms. Which of the following are valid mechanisms? (Choose 3 answers)',
      choices: {
        a: 'Obtaining industry certifications and independent third-party attestations',
        b: 'Publishing information about security and AWS control practices via the website, whitepapers, and blogs',
        c: 'Directly providing customers with certificates, reports, and other documentation (under NDA in some cases)',
        d: 'Allowing customers’ auditors direct access to AWS data centers, infrastructure, and senior staff'
      },
      answer: ['a', 'b', 'c']
    },
    {
      question: 'Which of the following statements is true when it comes to the AWS shared responsibility model?',
      choices: {
        a: 'The shared responsibility model is limited to security considerations only; it does not extend to IT controls.',
        b: 'The shared responsibility model is only applicable for customers who want to be compliant with SOC 1 Type II.',
        c: 'The shared responsibility model is not just limited to security considerations; it also extends to IT controls.',
        d: 'The shared responsibility model is only applicable for customers who want to be compliant with ISO 27001.'
      },
      answer: 'c'
    },
    {
      question: 'AWS provides IT control information to customers in which of the following ways?',
      choices: {
        a: 'By using specific control definitions or through general control standard compliance',
        b: 'By using specific control definitions or through SAS 70',
        c: 'By using general control standard compliance and by complying with ISO 27001',
        d: 'By complying with ISO 27001 and SOC 1 Type II'
      },
      answer: 'a'
    },
    {
      question: 'Which of the following is a valid report, certification, or third-party attestation for AWS? (Choose 3 answers)',
      choices: {
        a: 'SOC 1',
        b: 'PCI DSS Level 1',
        c: 'SOC 4',
        d: 'ISO 27001'
      },
      answer: ['a', 'b', 'd']
    },
    {
      question: 'Which of the following statements is true?',
      choices: {
        a: 'IT governance is still the customer’s responsibility, despite deploying their IT estate onto the AWS platform.',
        b: 'The AWS platform is PCI DSS-compliant to Level 1. Customers can deploy their web applications to this platform, and they will be PCI DSS-compliant automatically.',
        c: 'The shared responsibility model applies to IT security only; it does not relate to governance.',
        d: 'AWS doesn’t take risk management very seriously, and it’s up to the customer to mitigate risks to the AWS infrastructure.'
      },
      answer: 'a'
    },
    {
      question: 'Which of the following statements is true when it comes to the risk and compliance advantages of the AWS environment?',
      choices: {
        a: 'Workloads must be moved entirely into the AWS Cloud in order to be compliant with various certifications and third-party attestations.',
        b: 'The critical components of a workload must be moved entirely into the AWS Cloud in order to be compliant with various certifications and third-party attestations, but the non-critical components do not.',
        c: 'The non-critical components of a workload must be moved entirely into the AWS Cloud in order to be compliant with various certifications and third-party attestations, but the critical components do not.',
        d: 'Few, many, or all components of a workload can be moved to the AWS Cloud, but it is the customer’s responsibility to ensure that their entire workload remains compliant with various certifications and third-party attestations.'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following statements best describes an Availability Zone?',
      choices: {
        a: 'Each Availability Zone consists of a single discrete data center with redundant power and networking/connectivity.',
        b: 'Each Availability Zone consists of multiple discrete data centers with redundant power and networking/connectivity.',
        c: 'Each Availability Zone consists of multiple discrete regions, each with a single data center with redundant power and networking/connectivity.',
        d: 'Each Availability Zone consists of multiple discrete data centers with shared power and redundant networking/connectivity.'
      },
      answer: 'b'
    },
    {
      question: 'With regard to vulnerability scans and threat assessments of the AWS platform, which of the following statements are true? (Choose 2 answers)',
      choices: {
        a: 'AWS regularly performs scans of public-facing endpoint IP addresses for vulnerabilities.',
        b: 'Scans performed by AWS include customer instances.',
        c: 'AWS security notifies the appropriate parties to remediate any identified vulnerabilities.',
        d: 'Customers can perform their own scans at any time without advance notice.'
      },
      answer: ['a', 'c']
    },
    {
      question: 'Which of the following best describes the risk and compliance communication responsibilities of customers to AWS?',
      choices: {
        a: 'AWS and customers both communicate their security and control environment information to each other at all times.',
        b: 'AWS publishes information about the AWS security and control practices online, and directly to customers under NDA. Customers do not need to communicate their use and configurations to AWS.',
        c: 'Customers communicate their use and configurations to AWS at all times. AWS does not communicate AWS security and control practices to customers for security reasons.',
        d: 'Both customers and AWS keep their security and control practices entirely confidential and do not share them in order to ensure the greatest security for all parties.'
      },
      answer: 'b'
    },
    {
      question: 'When it comes to risk management, which of the following is true?',
      choices: {
        a: 'AWS does not develop a strategic business plan; risk management and mitigation is entirely the responsibility of the customer.',
        b: 'AWS has developed a strategic business plan to identify any risks and implemented controls to mitigate or manage those risks. Customers do not need to develop and maintain their own risk management plans.',
        c: 'AWS has developed a strategic business plan to identify any risks and has implemented controls to mitigate or manage those risks. Customers should also develop and maintain their own risk management plans to ensure they are compliant with any relevant controls and certifications.',
        d: 'Neither AWS nor the customer needs to worry about risk management, so no plan is needed from either party.'
      },
      answer: 'c'
    },
    {
      question: 'The AWS control environment is in place for the secure delivery of AWS Cloud service offerings. Which of the following does the collective control environment NOT explicitly include?',
      choices: {
        a: 'People',
        b: 'Energy',
        c: 'Technology',
        d: 'Processes'
      },
      answer: 'b'
    },
    {
      question: 'Who is responsible for the configuration of security groups in an AWS environment?',
      choices: {
        a: 'The customer and AWS are both jointly responsible for ensuring that security groups are correctly and securely configured.',
        b: 'AWS is responsible for ensuring that all security groups are correctly and securely configured. Customers do not need to worry about security group configuration.',
        c: 'Neither AWS nor the customer is responsible for the configuration of security groups; security groups are intelligently and automatically configured using traffic heuristics.',
        d: 'AWS provides the security group functionality as a service, but the customer is responsible for correctly and securely configuring their own security groups.'
      },
      answer: 'd'
    },
    {
      question: 'Which of the following is NOT a recommended approach for customers trying to achieve strong compliance and governance over an entire IT control environment?',
      choices: {
        a: 'Take a holistic approach: review information available from AWS together with all other information, and document all compliance requirements.',
        b: 'Verify that all control objectives are met and all key controls are designed and operating effectively.',
        c: 'Implement generic control objectives that are not specifically designed to meet their organization’s compliance requirements.',
        d: 'Identify and document controls owned by all third parties.'
      },
      answer: 'c'
    }]; 