import { PredefinedInterview } from "../../types/predefined-interview";

export const devops_engineer: PredefinedInterview = {
  "id": "devops-engineer",
  "role": "DevOps Engineer",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidates on essential DevOps concepts including continuous integration and deployment, infrastructure as code, containerization, networking, observability, and distributed systems architecture.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "Explain the fundamental differences between a process and a thread in Linux administration.",
          "category": "Linux & OS",
          "expectedTopics": [
            "Linux",
            "Processes",
            "Threads"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "What is the difference between git rebase and git merge, and when should you use each?",
          "category": "Version Control",
          "expectedTopics": [
            "Git",
            "Branching",
            "Rebase"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "Describe what a Docker container is and explain how it differs from a traditional virtual machine.",
          "category": "Containerization",
          "expectedTopics": [
            "Docker",
            "Virtualization",
            "Containers"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What is Infrastructure as Code (IaC) and what operational problems does it solve?",
          "category": "Infrastructure as Code",
          "expectedTopics": [
            "Terraform",
            "IaC",
            "Automation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "Explain the core concepts of Continuous Integration and Continuous Deployment (CI/CD).",
          "category": "CI/CD",
          "expectedTopics": [
            "CI/CD",
            "Automation",
            "Pipelines"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What do HTTP status codes 401, 403, and 502 represent, and how do they differ?",
          "category": "Networking",
          "expectedTopics": [
            "Networking",
            "HTTP",
            "Troubleshooting"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "What is a reverse proxy and what are its primary use cases in web architecture?",
          "category": "Networking",
          "expectedTopics": [
            "NGINX",
            "Reverse Proxy",
            "Load Balancing"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        }
      }
    },
    "MEDIUM": {
      "estimatedDuration": "25-35 minutes",
      "questions": {
        "q8": {
          "id": "q8",
          "question": "How would you systematically troubleshoot a Kubernetes pod stuck in a CrashLoopBackOff state?",
          "category": "Kubernetes",
          "expectedTopics": [
            "Kubernetes",
            "Troubleshooting",
            "Pod Lifecycle"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "How does state management work in Terraform, and how do you handle remote state locking in team environments?",
          "category": "Infrastructure as Code",
          "expectedTopics": [
            "Terraform",
            "State Locking",
            "Backend"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "Compare Blue/Green and Canary deployment strategies, highlighting trade-offs for zero-downtime releases.",
          "category": "CI/CD",
          "expectedTopics": [
            "Deployment Strategies",
            "Canary",
            "Blue-Green"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "Explain how Prometheus collects metrics via scraping and how it integrates with Grafana for visualization.",
          "category": "Observability",
          "expectedTopics": [
            "Prometheus",
            "Grafana",
            "Metrics"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "What are the main differences between Layer 4 and Layer 7 load balancing, and when would you choose one over the other?",
          "category": "Networking",
          "expectedTopics": [
            "Load Balancing",
            "OSI Model",
            "HTTP"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "How do you manage sensitive secrets securely within a CI/CD pipeline and inside Kubernetes clusters?",
          "category": "Security",
          "expectedTopics": [
            "Secrets Management",
            "HashiCorp Vault",
            "Kubernetes"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q14process": {
          "id": "q14process",
          "question": "Describe the Linux boot process and explain how systemd manages background service lifecycles.",
          "category": "Linux & OS",
          "expectedTopics": [
            "Linux",
            "Systemd",
            "Boot Process"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "What techniques would you use to optimize a Dockerfile to achieve faster build times and smaller final image sizes?",
          "category": "Containerization",
          "expectedTopics": [
            "Docker",
            "Multi-stage Builds",
            "Optimization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "Explain DNS resolution steps and describe how you would troubleshoot a name resolution failure within a cloud VPC.",
          "category": "Networking",
          "expectedTopics": [
            "DNS",
            "Networking",
            "VPC"
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
          "question": "Design a multi-region, highly available Kubernetes architecture with automated disaster recovery and failover mechanisms.",
          "category": "System Design",
          "expectedTopics": [
            "Kubernetes",
            "Multi-Region",
            "Disaster Recovery",
            "High Availability"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Walk through your process for diagnosing high disk I/O latency on a production Linux node running a database.",
          "category": "Troubleshooting & Linux",
          "expectedTopics": [
            "Linux Kernel",
            "I/O Tuning",
            "Storage",
            "Performance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "Explain how GitOps operates using tools like ArgoCD or Flux, and how drift detection and synchronization are maintained across clusters.",
          "category": "GitOps & Kubernetes",
          "expectedTopics": [
            "GitOps",
            "ArgoCD",
            "Kubernetes",
            "Drift Detection"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Design a scalable centralized logging pipeline capable of ingesting terabytes of logs daily with low-latency search capabilities.",
          "category": "Observability",
          "expectedTopics": [
            "Logging",
            "Kafka",
            "Elasticsearch",
            "Vector"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "Explain how Linux kernel namespaces and cgroups interact to provide container isolation and resource limitation.",
          "category": "Linux Kernel",
          "expectedTopics": [
            "Linux Kernel",
            "Namespaces",
            "Cgroups",
            "Containers"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "How would you perform a zero-downtime migration of a stateful production database across cloud providers?",
          "category": "Cloud & Migration",
          "expectedTopics": [
            "Database Migration",
            "Replication",
            "Cloud",
            "Zero Downtime"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "What is eBPF and how is it leveraged for deep kernel observability, dynamic tracing, and high-performance networking in Kubernetes?",
          "category": "Observability & Kernel",
          "expectedTopics": [
            "eBPF",
            "Linux Kernel",
            "Cilium",
            "Observability"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "How do you implement automated compliance checking, security scanning, and policy enforcement across enterprise IaC codebases?",
          "category": "DevSecOps",
          "expectedTopics": [
            "IaC Security",
            "OPA",
            "Policy as Code",
            "Compliance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Design a Zero Trust network architecture for microservices communicating across hybrid cloud environments using a service mesh.",
          "category": "Security & Networking",
          "expectedTopics": [
            "Zero Trust",
            "Service Mesh",
            "mTLS",
            "Networking"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "Describe how you conduct post-mortem analysis for a cascading failure and design resilience patterns like circuit breakers to prevent future recurrences.",
          "category": "Reliability Engineering",
          "expectedTopics": [
            "Resilience",
            "Circuit Breakers",
            "Chaos Engineering",
            "Post-Mortem"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "Explain the Raft consensus algorithm and describe how etcd uses it to ensure consistency in a Kubernetes control plane.",
          "category": "Distributed Systems",
          "expectedTopics": [
            "Consensus",
            "Raft",
            "etcd",
            "Kubernetes"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
