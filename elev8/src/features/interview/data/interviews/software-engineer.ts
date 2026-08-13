import { PredefinedInterview } from "../../types/predefined-interview";

export const software_engineer: PredefinedInterview = {
  "id": "software-engineer",
  "role": "Software Engineer",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidates on core software engineering principles, data structures, algorithms, database concepts, API design, and scalable distributed system design.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "Explain the key differences between a process and a thread in operating systems.",
          "category": "Operating Systems",
          "expectedTopics": [
            "Process",
            "Thread",
            "Memory Space",
            "Concurrency"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "What are the time and space complexities for search, insertion, and deletion operations in a Hash Table?",
          "category": "Data Structures",
          "expectedTopics": [
            "Hash Table",
            "Time Complexity",
            "Amortized Analysis"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "Explain Object-Oriented Programming principles with practical code examples.",
          "category": "Software Design",
          "expectedTopics": [
            "OOP",
            "Encapsulation",
            "Inheritance",
            "Polymorphism"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What is the difference between Stack and Heap memory allocation in application runtimes?",
          "category": "Memory Management",
          "expectedTopics": [
            "Stack Memory",
            "Heap Memory",
            "Pointer Management"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "Explain the difference between RESTful APIs and SOAP web services.",
          "category": "API Design",
          "expectedTopics": [
            "REST",
            "SOAP",
            "HTTP",
            "Protocols"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What is a database index and how does it improve SQL query execution time?",
          "category": "Databases",
          "expectedTopics": [
            "SQL",
            "Indexing",
            "B-Trees",
            "Query Optimization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "What is the core difference between Git rebase and Git merge, and when should each be used?",
          "category": "Version Control",
          "expectedTopics": [
            "Git",
            "Git Rebase",
            "Git Merge",
            "Branching Strategy"
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
          "question": "How do you handle circular dependencies when designing a dependency injection container?",
          "category": "Software Architecture",
          "expectedTopics": [
            "Dependency Injection",
            "Design Patterns",
            "Architectural Decoupling"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Explain how Garbage Collection algorithms (e.g., Mark and Sweep, Generational) manage memory in modern execution environments.",
          "category": "Runtime Systems",
          "expectedTopics": [
            "Garbage Collection",
            "Heap Allocation",
            "Generational GC"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "How would you implement API rate limiting for a scalable public REST API?",
          "category": "API & System Design",
          "expectedTopics": [
            "Rate Limiting",
            "Token Bucket",
            "Redis",
            "Middleware"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "Explain the ACID properties of database transactions and how isolation levels impact concurrent access.",
          "category": "Databases",
          "expectedTopics": [
            "ACID",
            "Database Transactions",
            "Isolation Levels",
            "Concurrency Control"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "Compare optimistic locking and pessimistic locking strategies in concurrent database modifications.",
          "category": "Database Concurrency",
          "expectedTopics": [
            "Optimistic Locking",
            "Pessimistic Locking",
            "Data Consistency"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "How do WebSockets differ from HTTP Long Polling, and what criteria guide choosing one over the other?",
          "category": "Networking",
          "expectedTopics": [
            "WebSockets",
            "HTTP Polling",
            "Bi-directional Communication"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Describe the trade-offs between Database Normalization and Denormalization in high-read vs high-write workloads.",
          "category": "Databases",
          "expectedTopics": [
            "Normalization",
            "Denormalization",
            "Database Schema",
            "Performance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How would you systematically diagnose and resolve a high CPU utilization issue in a live production service?",
          "category": "Troubleshooting & DevOps",
          "expectedTopics": [
            "Debugging",
            "CPU Profiling",
            "Thread Dumps",
            "Metrics Analysis"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "What is Event-Driven Architecture, and how do message queues like Kafka or RabbitMQ maintain system stability under load spikes?",
          "category": "System Design",
          "expectedTopics": [
            "Event-Driven Architecture",
            "Message Queues",
            "Buffering",
            "Decoupling"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    },
    "HARD": {
      "estimatedDuration": "35-45 minutes",
      "questions": {
        "q17": {
          "id": "q17",
          "question": "Design a distributed caching system like Redis. How do you handle cache eviction policies and consistency across multiple nodes?",
          "category": "Distributed Systems",
          "expectedTopics": [
            "Distributed Caching",
            "Eviction Policies",
            "Cache Consistency",
            "Consistent Hashing"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Explain the CAP theorem and evaluate the architecture of CP systems versus AP systems under network partition events.",
          "category": "Distributed Systems",
          "expectedTopics": [
            "CAP Theorem",
            "Network Partitions",
            "Eventual Consistency",
            "Quorum"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How would you design a web crawler capable of fetching and indexing billions of web pages resiliently?",
          "category": "System Design",
          "expectedTopics": [
            "Web Crawler",
            "Distributed Queues",
            "URL Deduplication",
            "Politeness Policies"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Explain the mechanics of the Raft consensus protocol, focusing on leader election and log replication.",
          "category": "Consensus Protocols",
          "expectedTopics": [
            "Raft Algorithm",
            "Consensus Protocols",
            "Leader Election",
            "Log Replication"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "How do Log-Structured Merge-trees (LSM-trees) differ from standard B-Trees regarding read/write amplification and disk I/O performance?",
          "category": "Storage Engines",
          "expectedTopics": [
            "LSM-Tree",
            "B-Tree",
            "Write Amplification",
            "Storage Engines"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "Design a high-throughput, fault-tolerant distributed unique ID generator such as Twitter Snowflake.",
          "category": "System Design",
          "expectedTopics": [
            "Distributed ID Generation",
            "Snowflake Algorithm",
            "High Availability",
            "Timestamp Ordering"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How do you implement distributed transactions across microservices using the Saga Pattern without relying on Two-Phase Commit (2PC)?",
          "category": "Microservices Architecture",
          "expectedTopics": [
            "Saga Pattern",
            "Distributed Transactions",
            "Event Sourcing",
            "Compensating Actions"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "Explain zero-copy networking and how kernel bypass techniques improve high-throughput file transfer performance.",
          "category": "Systems Programming",
          "expectedTopics": [
            "Zero-Copy",
            "Kernel Space",
            "I/O Performance",
            "DMA"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "How would you prevent and mitigate cascading failures across a complex mesh of microservices?",
          "category": "Resilience Engineering",
          "expectedTopics": [
            "Cascading Failures",
            "Circuit Breakers",
            "Bulkheads",
            "Graceful Degradation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "Design a real-time collaborative document editor like Google Docs using Conflict-free Replicated Data Types (CRDTs) or Operational Transformation (OT).",
          "category": "Advanced System Design",
          "expectedTopics": [
            "CRDT",
            "Operational Transformation",
            "Real-time Synchronization",
            "Conflict Resolution"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "Explain how dynamic memory allocation works internally in C malloc/free implementations and how memory fragmentation is mitigated.",
          "category": "Low Level Systems",
          "expectedTopics": [
            "Memory Allocation",
            "Buddy Allocator",
            "Free Lists",
            "Internal/External Fragmentation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
