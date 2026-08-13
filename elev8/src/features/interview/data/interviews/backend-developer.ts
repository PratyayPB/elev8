import { PredefinedInterview } from "../../types/predefined-interview";

export const backend_developer: PredefinedInterview = {
  "id": "backend-developer",
  "role": "Backend Developer",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidates on core backend engineering concepts, API development, database architecture, concurrency, and scalable distributed system design.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "What is the difference between SQL and NoSQL databases, and when would you choose one over the other?",
          "category": "Databases",
          "expectedTopics": [
            "Relational vs Non-Relational",
            "ACID vs BASE",
            "Data Modeling"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "Explain the HTTP status codes 200, 400, 401, 403, and 500.",
          "category": "Web APIs",
          "expectedTopics": [
            "HTTP Status Codes",
            "REST API",
            "Error Handling"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "What is an index in a relational database, and how does it improve query performance?",
          "category": "Databases",
          "expectedTopics": [
            "Database Indexing",
            "Query Optimization",
            "B-Trees"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What is the purpose of ORM (Object-Relational Mapping) tools, and what are their pros and cons?",
          "category": "Frameworks",
          "expectedTopics": [
            "ORM",
            "Data Access",
            "Performance Trade-offs"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "Explain the concepts of synchronous and asynchronous execution in backend applications.",
          "category": "Concurrency",
          "expectedTopics": [
            "Event Loop",
            "Non-blocking I/O",
            "Async/Await"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What is JWT (JSON Web Token), and how is it used for stateless authentication?",
          "category": "Security",
          "expectedTopics": [
            "Authentication",
            "JWT",
            "Stateless Architecture"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "What is the difference between GET and POST HTTP methods?",
          "category": "Web APIs",
          "expectedTopics": [
            "HTTP Methods",
            "Idempotency",
            "Request Payload"
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
          "question": "How do you handle the N+1 query problem when using an ORM?",
          "category": "Databases",
          "expectedTopics": [
            "N+1 Problem",
            "Eager Loading",
            "Query Optimization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Describe how database transactions work and explain the ACID properties.",
          "category": "Databases",
          "expectedTopics": [
            "ACID Properties",
            "Transactions",
            "Data Integrity"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "How would you design a rate-limiting mechanism for a backend API to prevent abuse?",
          "category": "API Design",
          "expectedTopics": [
            "Rate Limiting",
            "Token Bucket",
            "Redis"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "Explain the difference between connection pooling and creating new database connections on demand.",
          "category": "Databases",
          "expectedTopics": [
            "Connection Pooling",
            "Resource Management",
            "Performance"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "How do message queues like RabbitMQ or Kafka help in decoupling backend services?",
          "category": "Architecture",
          "expectedTopics": [
            "Message Queues",
            "Asynchronous Processing",
            "Decoupling"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "What strategies would you use to secure backend APIs against common vulnerabilities like SQL Injection and XSS?",
          "category": "Security",
          "expectedTopics": [
            "Input Validation",
            "Parameterized Queries",
            "OWASP"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "How does caching work with Redis or Memcached, and what strategies exist for cache invalidation?",
          "category": "Caching",
          "expectedTopics": [
            "Redis",
            "Cache Invalidation",
            "Write-Through vs Cache-Aside"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "Explain database isolation levels and the anomalies they prevent.",
          "category": "Databases",
          "expectedTopics": [
            "Isolation Levels",
            "Dirty Reads",
            "Phantom Reads"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "How do background job processors work, and how do you handle failed background tasks?",
          "category": "Backend Infrastructure",
          "expectedTopics": [
            "Background Jobs",
            "Retries",
            "Dead Letter Queues"
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
          "question": "How would you design a globally distributed URL shortening service like Bitly to handle high traffic and low latency?",
          "category": "System Design",
          "expectedTopics": [
            "System Design",
            "Hashing",
            "Distributed Caching",
            "Database Sharding"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Explain the CAP theorem and discuss trade-offs between consistency and availability in a distributed database.",
          "category": "Distributed Systems",
          "expectedTopics": [
            "CAP Theorem",
            "Eventual Consistency",
            "Partition Tolerance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How would you implement distributed transactions across multiple microservices without a single point of failure?",
          "category": "Architecture",
          "expectedTopics": [
            "Saga Pattern",
            "Two-Phase Commit",
            "Distributed Systems"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Explain database sharding strategies and the challenges associated with cross-shard queries.",
          "category": "Databases",
          "expectedTopics": [
            "Database Sharding",
            "Data Partitioning",
            "Consistent Hashing"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "How would you handle race conditions in a high-concurrency inventory management system?",
          "category": "Concurrency",
          "expectedTopics": [
            "Pessimistic Locking",
            "Optimistic Locking",
            "Atomic Operations"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "Explain the mechanism of event-driven architecture and how to guarantee at-least-once message delivery.",
          "category": "Architecture",
          "expectedTopics": [
            "Event-Driven",
            "Message Delivery Guarantees",
            "Idempotency"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How do you diagnose and resolve memory leaks or high CPU usage in a production backend service?",
          "category": "Observability & Performance",
          "expectedTopics": [
            "Profiling",
            "APM Tools",
            "Memory Management"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "Design a real-time notification backend capable of supporting millions of concurrent WebSocket connections.",
          "category": "System Design",
          "expectedTopics": [
            "WebSockets",
            "Pub/Sub Systems",
            "Scalability"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Compare gRPC and RESTful JSON APIs in terms of serialization, performance, and usability in backend architectures.",
          "category": "API Design",
          "expectedTopics": [
            "gRPC",
            "Protobuf",
            "HTTP/2",
            "REST"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "Explain how distributed tracing works in a microservice architecture and why it is essential.",
          "category": "Observability & Performance",
          "expectedTopics": [
            "Distributed Tracing",
            "OpenTelemetry",
            "Trace Context Propagation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "What strategies and architectural patterns would you use to achieve zero-downtime database migrations?",
          "category": "DevOps & Infrastructure",
          "expectedTopics": [
            "Zero-Downtime Deployments",
            "Expand and Contract Pattern",
            "Schema Migration"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
