import { PredefinedInterview } from "../../types/predefined-interview";

export const cloud_engineer: PredefinedInterview = {
  "id": "cloud-engineer",
  "role": "Cloud Engineer",
  "type": "TECHNICAL",
  "description": "This technical interview catalog evaluates a Cloud Engineer's expertise in cloud architecture, network infrastructure, security, automation, and distributed systems design.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "What is the core distinction between Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)?",
          "category": "Cloud Fundamentals",
          "expectedTopics": [
            "IaaS",
            "PaaS",
            "SaaS",
            "Cloud Service Models"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "How does a Virtual Private Cloud (VPC) enable resource isolation within a public cloud environment?",
          "category": "Cloud Networking",
          "expectedTopics": [
            "VPC",
            "Subnets",
            "Network Isolation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "Explain the key differences in structure and use cases between Object Storage and Block Storage.",
          "category": "Cloud Storage",
          "expectedTopics": [
            "Object Storage",
            "Block Storage",
            "Cloud Storage Types"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What is Infrastructure as Code (IaC), and why is it preferred over manual infrastructure provisioning?",
          "category": "Automation & IaC",
          "expectedTopics": [
            "IaC",
            "Automation",
            "Terraform",
            "Declarative Configuration"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "How do IAM roles differ from IAM users, and when should you use each?",
          "category": "Cloud Security",
          "expectedTopics": [
            "IAM Roles",
            "IAM Users",
            "Least Privilege"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What is the primary function of a Cloud Load Balancer, and how does it improve application availability?",
          "category": "Cloud Networking",
          "expectedTopics": [
            "Load Balancing",
            "High Availability",
            "Traffic Distribution"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "Compare vertical scaling with horizontal scaling in cloud infrastructure deployment.",
          "category": "Architecture Fundamentals",
          "expectedTopics": [
            "Horizontal Scaling",
            "Vertical Scaling",
            "Auto Scaling"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        }
      }
    },
    "MEDIUM": {
      "estimatedDuration": "25-35 minutes",
      "questions": {
        "q8": {
          "id": "q8",
          "question": "How would you architect a highly available, multi-region setup for a stateless web application?",
          "category": "Cloud Architecture",
          "expectedTopics": [
            "High Availability",
            "Multi-Region",
            "DNS Routing",
            "Stateless Architecture"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Describe how Infrastructure as Code (IaC) state drift occurs and how you would detect and remediate it using Terraform.",
          "category": "Automation & IaC",
          "expectedTopics": [
            "Terraform State",
            "Drift Detection",
            "IaC Remediation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "How do Security Groups and Network Access Control Lists (NACLs) differ in terms of statefulness and enforcement levels?",
          "category": "Cloud Security",
          "expectedTopics": [
            "Security Groups",
            "NACLs",
            "Stateful vs Stateless",
            "Firewalling"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "Explain how to implement a zero-downtime deployment strategy for a containerized application running in the cloud.",
          "category": "DevOps & CI/CD",
          "expectedTopics": [
            "Blue-Green Deployment",
            "Canary Deployment",
            "Kubernetes",
            "CI/CD"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "How would you design an automated cloud backup and disaster recovery plan for a mission-critical relational database?",
          "category": "Disaster Recovery",
          "expectedTopics": [
            "RPO/RTO",
            "Automated Backups",
            "Database Replication",
            "Snapshots"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "What methodologies and cloud tools would you use to audit and optimize cloud infrastructure operational costs?",
          "category": "FinOps",
          "expectedTopics": [
            "Cost Optimization",
            "Reserved Instances",
            "Auto-Scaling",
            "Rightsizing"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Explain the steps and networking protocols required to configure a secure site-to-site VPN between on-premises infrastructure and a cloud VPC.",
          "category": "Cloud Networking",
          "expectedTopics": [
            "VPN Gateway",
            "IPsec",
            "BGP",
            "Hybrid Cloud"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How do container orchestrators like Kubernetes handle service discovery, health monitoring, and self-healing for failing pods?",
          "category": "Containerization",
          "expectedTopics": [
            "Kubernetes",
            "Liveness Probes",
            "Readiness Probes",
            "Self-Healing"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "How would you construct a centralized logging and telemetry pipeline for distributed cloud microservices?",
          "category": "Observability",
          "expectedTopics": [
            "Centralized Logging",
            "Log Aggregation",
            "CloudWatch",
            "Distributed Tracing"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        }
      }
    },
    "HARD": {
      "estimatedDuration": "35-45 minutes",
      "questions": {
        "q17": {
          "id": "q17",
          "question": "Design a globally distributed, low-latency microservices platform capable of handling peak traffic surges while maintaining active-active disaster recovery capabilities.",
          "category": "System Design",
          "expectedTopics": [
            "Global Infrastructure",
            "Multi-Region Replication",
            "Latency Optimization",
            "Active-Active Architecture"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "How would you securely establish private network connectivity between multiple enterprise VPCs and third-party SaaS providers without routing over the public internet?",
          "category": "Cloud Security & Networking",
          "expectedTopics": [
            "PrivateLink",
            "VPC Peering",
            "Transit Gateway",
            "Private Endpoints"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How do you architect and enforce a Zero-Trust Network Architecture across a complex hybrid cloud environment?",
          "category": "Security Architecture",
          "expectedTopics": [
            "Zero Trust",
            "Identity-Aware Proxy",
            "mTLS",
            "Microsegmentation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Describe a strategy for managing secret lifecycle, dynamic credential generation, and rotation in a large-scale GitOps deployment pipeline.",
          "category": "Cloud Security",
          "expectedTopics": [
            "Secrets Management",
            "Vault",
            "GitOps",
            "Dynamic Credentials"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "Walk through an incident response process for a cascading microservices failure triggered by a single availability zone outage in a public cloud provider.",
          "category": "Reliability Engineering",
          "expectedTopics": [
            "Incident Response",
            "Cascading Failures",
            "Fault Domains",
            "AZ Resilience"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "How would you design an automated, multi-account enterprise Landing Zone that enforces guardrails, centralized logging, and strict access controls?",
          "category": "Enterprise Cloud Architecture",
          "expectedTopics": [
            "Multi-Account Strategy",
            "Landing Zone",
            "Service Control Policies",
            "Governance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "Compare the trade-offs of using managed Kubernetes services versus serverless container platforms for data-intensive processing workloads.",
          "category": "Architecture Trade-offs",
          "expectedTopics": [
            "Managed Kubernetes",
            "Serverless Containers",
            "Resource Allocation",
            "Cost Modeling"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "How would you build an automated system to enforce Policy as Code and real-time security compliance remediation across multi-cloud environments?",
          "category": "Security & Compliance",
          "expectedTopics": [
            "Policy as Code",
            "OPA",
            "Continuous Compliance",
            "Automated Remediation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Design a cloud data lake ingestion framework supporting high-throughput real-time streaming and batch processing with granular data governance.",
          "category": "Cloud Data Architecture",
          "expectedTopics": [
            "Data Lake",
            "Stream Processing",
            "Batch Processing",
            "Data Governance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "How do you diagnose and resolve intermittent cross-cloud network packet drop and latency spikes between hybrid microservices?",
          "category": "Troubleshooting & Performance",
          "expectedTopics": [
            "Packet Analysis",
            "eBPF",
            "Hybrid Network Latency",
            "Routing Diagnostics"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "Describe pattern options for maintaining state consistency and transactional integrity across distributed serverless functions.",
          "category": "Serverless Architecture",
          "expectedTopics": [
            "Serverless",
            "Saga Pattern",
            "Distributed Transactions",
            "Eventual Consistency"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
