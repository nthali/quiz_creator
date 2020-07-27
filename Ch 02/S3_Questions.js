const myQuestions = [
    // Q1
    {
        question: "In what ways does Amazon Simple Storage Service (Amazon S3) object storage differ from block and file storage? (Choose 2 answers)",
        choices: {
        a: "Amazon S3 stores data in fixed size blocks.",
        b: "Objects are identified by a numbered address.",
        c: "Objects can be any size.",
        d: "Objects contain both data and metadata.",
        e: "Objects are stored in buckets."
        },
        answer: ["c", "e"]
    },
    // Q2
    {
        question: "Which of the following are not appropriates use cases for Amazon Simple Storage Service (Amazon S3)? (Choose 2 answers)",
        choices: {
        a: "Storing web content",
        b: "Storing a file system mounted to an Amazon Elastic Compute Cloud (Amazon EC2) instance",
        c: "Storing backups for a relational database",
        d: "Primary storage for a database",
        e: "Storing logs for analytics"
        },
        answer: ["b", "d"]
    },
    // Q3
    {
        question: "What are some of the key characteristics of Amazon Simple Storage Service (Amazon S3)? (Choose 3 answers)",
        choices: {
        a: "All objects have a URL.",
        b: "Amazon S3 can store unlimited amounts of data.",
        c: "Objects are world-readable by default.",
        d: "Amazon S3 uses a REST (Representational State Transfer) Application Program Interface (API)."
        },
        answer: "b"
    },
    // Q4
    {
        question: "Which features can be used to restrict access to Amazon Simple Storage Service (Amazon S3) data? (Choose 3 answers)",
        choices: {
        a: "Enable static website hosting on the bucket.",
        b: "Create a pre-signed URL for an object.",
        c: "Use an Amazon S3 Access Control List (ACL) on a bucket or object.",
        d: "Use a lifecycle policy.",
        e: "Use an Amazon S3 bucket policy."
        },
        answer: ["b", "c", "e"]
    },
    // Q5
    {
        question: "Your application stores critical data in Amazon Simple Storage Service (Amazon S3), which must be protected against inadvertent or intentional deletion. How can this data be protected? (Choose 2 answers)",
        choices: {
        a: "Use cross-region replication to copy data to another bucket automatically.",
        b: "Set a vault lock.",
        c: "Enable versioning on the bucket.",
        d: "Use a lifecycle policy to migrate data to Amazon Glacier.",
        e: "Enable MFA Delete on the bucket."
        },
        answer: ["c", "e"]
    },
    // Q6
    {
        question: "Your company stores documents in Amazon Simple Storage Service (Amazon S3), but it wants to minimize cost. Most documents are used actively for only about a month, then much less frequently. However, all data needs to be available within minutes when requested. How can you meet these requirements?",
        choices: {
        a: "Migrate the data to Amazon S3 Reduced Redundancy Storage (RRS) after 30 days.",
        b: "Migrate the data to Amazon Glacier after 30 days.",
        c: "Migrate the data to Amazon S3 Standard – Infrequent Access (IA) after 30 days.",
        d: "Turn on versioning, then migrate the older version to Amazon Glacier."
        },
        answer: "c"
    },
    // Q7
    {
        question: "How is data stored in Amazon Simple Storage Service (Amazon S3) for high durability?",
        choices: {
            a: "Data is automatically replicated to other regions.",
            b: "Data is automatically replicated within a region.",
            c: "Data is replicated only if versioning is enabled on the bucket.",
            d: "Data is automatically backed up on tape and restored if needed."
        },
        answer: "b"
    },
    // Q8
    {
        question: "Based on the following Amazon Simple Storage Service (Amazon S3) URL, which one of the following statements is correct? https://bucket1.abc.com.s3.amazonaws.com/folderx/myfile.doc",
        choices: {
            a: "The object “myfile.doc” is stored in the folder “folderx” in the bucket “bucket1.abc.com.”",
            b: "The object “myfile.doc” is stored in the bucket “bucket1.abc.com.”",
            c: "The object “folderx/myfile.doc” is stored in the bucket “bucket1.abc.com.”",
            d: "The object “myfile.doc” is stored in the bucket “bucket1.”"
        },
        answer: "c"
    },
    // Q9
    {
        question: "To have a record of who accessed your Amazon Simple Storage Service (Amazon S3) data and from where, you should do what?",
        choices: {
            a: "Enable versioning on the bucket.",
            b: "Enable website hosting on the bucket.",
            c: "Enable server access logs on the bucket.",
            d: "Create an AWS Identity and Access Management (IAM) bucket policy.",
            e: "Enable Amazon CloudWatch logs."
        },
        answer: "c"
    },
    // Q10
    {
        question: "What are some reasons to enable cross-region replication on an Amazon Simple Storage Service (Amazon S3) bucket? (Choose 2 answers)",
        choices: {
            a: "You want a backup of your data in case of accidental deletion.",
            b: "You have a set of users or customers who can access the second bucket with lower latency.",
            c: "For compliance reasons, you need to store data in a location at least 300 miles away from the first region.",
            d: "Your data needs at least five nines of durability."
        },
        answer: ["b", "c"]
    },
    // Q11
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q12
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q13
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q14
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q15
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q16
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q17
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q18
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q19
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    },
    // Q20
    {
        question: "",
        choices: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: ""
    }
];
