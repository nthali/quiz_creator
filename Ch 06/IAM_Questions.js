const myQuestions = [
// Q1. 
    {
        question: "Which of the following methods will allow an application using an AWS SDK to be authenticated as a principal to access AWS Cloud services? (Choose 2 answers)",
        choices: {
            a: "Create an IAM user and store the user name and password for the user in the application’s configuration.",
            b: "Create an IAM user and store both parts of the access key for the user in the application’s configuration.",
            c: "Run the application on an Amazon EC2 instance with an assigned IAM role.",
            d: "Make all the API calls over an SSL connection."
        },
        answer: ["b", "c"]
    },
    // Q2. 
    {
        question: "Which of the following are found in an IAM policy? (Choose 2 answers)",
        choices: { 
            a: "Service Name",
            b: "Region",
            c: "Action",
            d: "Password"
        },
        answer: ["a", "c"]
    },
    // Q3. 
    {
        question: "Your AWS account administrator left your company today. The administrator had access to the root user and a personal IAM administrator account. With these accounts, he generated other IAM accounts and keys. Which of the following should you do today to protect your AWS infrastructure? (Choose 4 answers)",
        choices: { 
            a: "Change the password and add MFA to the root user.",
            b: "Put an IP restriction on the root user.",
            c: "Rotate keys and change passwords for IAM accounts.",
            d: "Delete all IAM accounts.",
            e: "Delete the administrator’s personal IAM account.",
            f: "Relaunch all Amazon EC2 instances with new roles."
        },
        answer: ["a", "b", "c", "e"]
    },
    // Q4. 
    {
        question: "Which of the following actions can be authorized by IAM? (Choose 2 answers)",
        choices: { 
            a: "Installing ASP.NET on a Windows Server",
            b: "Launching an Amazon Linux EC2 instance",
            c: "Querying an Oracle database",
            d: "Adding a message to an Amazon Simple Queue Service (Amazon SQS) queue"
        },
        answer: ["b", "d"]
    },
    // Q5. 
    {
        question: "Which of the following are IAM security features? (Choose 2 answers)",
        choices: { 
            a: "Password policies",
            b: "Amazon DynamoDB global secondary indexes",
            c: "MFA",
            d: "Consolidated Billing"
        },
        answer: ["a", "c"]
    },
    // Q6. 
    {
        question: "Which of the following are benefits of using Amazon EC2 roles? (Choose 2 answers)",
        choices: { 
            a: "No policies are required.",
            b: "Credentials do not need to be stored on the Amazon EC2 instance.",
            c: "Key rotation is not necessary.",
            d: "Integration with Active Directory is automatic."
        },
        answer: ["b", "c"]
    },
    // Q7. 
    {
        question: "Which of the following are based on temporary security tokens? (Choose 2 answers)",
        choices: { 
            a: "Amazon EC2 roles",
            b: "MFA",
            c: "Root user",
            d: "Federation"
        },
        answer: ["a", "d"]
    },
    // Q8. 
    {
        question: "Your security team is very concerned about the vulnerability of the IAM administrator user accounts (the accounts used to configure all IAM features and accounts). What steps can be taken to lock down these accounts? (Choose 3 answers)",
        choices: { 
            a: "Add multi-factor authentication (MFA) to the accounts.",
            b: "Limit logins to a particular U.S. state.",
            c: "Implement a password policy on the AWS account.",
            d: "Apply a source IP address condition to the policy that only grants permissions when the user is on the corporate network.",
            e: "Add a CAPTCHA test to the accounts."
        },
        answer: ["a", "c", "d"]
    },
    // Q9. 
    {
        question: "You want to grant the individuals in your network team the ability to fully manipulate Amazon EC2 instances. Which of the following accomplish this goal? (Choose 2 answers)",
        choices: { 
            a: "Create a new policy allowing EC2:* actions, and name the policy NetworkTeam.",
            b: "Assign the managed policy, EC2FullAccess, to a group named NetworkTeam, and assign all the team members’ IAM user accounts to that group.",
            c: "Create a new policy that grants EC2:* actions on all resources, and assign that policy to each individual’s IAM user account on the network team.",
            d: "Create a NetworkTeam IAM group, and have each team member log in to the AWS Management Console using the user name/password for the group."
        },
        answer: ["b", "c"]
    },
    // Q10. 
    {
        question: "What is the format of an IAM policy?",
        choices: { 
            a: "XML",
            b: "Key/value pairs",
            c: "JSON",
            d: "Tab-delimited text"
        },
        answer: "c"
    },
];