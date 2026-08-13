import { PredefinedInterview } from "../../types/predefined-interview";

export const fullstack_developer: PredefinedInterview = {
  "id": "fullstack-developer",
  "role": "Full Stack Developer",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidate proficiency across full stack web development, covering frontend frameworks, backend architecture, database management, security, and scalable system design.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "How does the JavaScript Event Loop handle asynchronous code execution?",
          "category": "Frontend Fundamentals",
          "expectedTopics": [
            "Event Loop",
            "Call Stack",
            "Task Queue",
            "Microtasks"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "What are the primary differences between REST and GraphQL APIs?",
          "category": "API Design",
          "expectedTopics": [
            "REST",
            "GraphQL",
            "Over-fetching",
            "Endpoints"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "Explain the core differences between CSS Flexbox and CSS Grid layout models.",
          "category": "Frontend Fundamentals",
          "expectedTopics": [
            "CSS Flexbox",
            "CSS Grid",
            "Layouts",
            "Responsiveness"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What is a database index and how does it improve read query performance?",
          "category": "Databases",
          "expectedTopics": [
            "Indexes",
            "Query Performance",
            "B-Trees",
            "Databases"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "How do HTTP cookies, localStorage, and sessionStorage differ in client-side storage?",
          "category": "Web Fundamentals",
          "expectedTopics": [
            "Cookies",
            "localStorage",
            "sessionStorage",
            "Storage Scope"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What is Cross-Origin Resource Sharing (CORS) and why is it enforced by browsers?",
          "category": "Web Security",
          "expectedTopics": [
            "CORS",
            "HTTP Headers",
            "Same-Origin Policy",
            "Preflight"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "What are the main architectural differences between SQL and NoSQL databases?",
          "category": "Databases",
          "expectedTopics": [
            "SQL",
            "NoSQL",
            "Relational",
            "Schema"
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
          "question": "How do you implement secure user authentication and authorization using JWTs in a full stack application?",
          "category": "Authentication & Security",
          "expectedTopics": [
            "JWT",
            "Tokens",
            "Authentication",
            "Authorization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "How do you determine whether to use local component state versus global state in a modern frontend framework?",
          "category": "Frontend Architecture",
          "expectedTopics": [
            "State Management",
            "React Context",
            "Redux",
            "Component State"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "What strategies would you employ to optimize slow backend API endpoint responses returning large datasets?",
          "category": "Backend Performance",
          "expectedTopics": [
            "Pagination",
            "Caching",
            "Database Indexing",
            "Payload Reduction"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "How do you mitigate Cross-Site Scripting (XSS) and SQL Injection vulnerabilities in full stack development?",
          "category": "Security",
          "expectedTopics": [
            "XSS",
            "SQL Injection",
            "Input Sanitization",
            "Parameterized Queries"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "Compare Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) in terms of SEO and performance.",
          "category": "Web Architecture",
          "expectedTopics": [
            "SSR",
            "SSG",
            "CSR",
            "SEO"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "When should you choose WebSockets over traditional HTTP polling or Server-Sent Events (SSE)?",
          "category": "Realtime Communication",
          "expectedTopics": [
            "WebSockets",
            "HTTP Polling",
            "SSE",
            "Full-Duplex"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "How do you ensure ACID properties during complex multi-table database transactions in a backend service?",
          "category": "Database Engineering",
          "expectedTopics": [
            "ACID",
            "Transactions",
            "Isolation Levels",
            "Rollback"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How do you structure a layered backend code architecture to maintain separation of concerns?",
          "category": "Software Design",
          "expectedTopics": [
            "Layered Architecture",
            "Controllers",
            "Services",
            "Repositories"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "How do you standardize error handling across asynchronous frontend requests and backend services?",
          "category": "Full Stack Architecture",
          "expectedTopics": [
            "Error Handling",
            "Async/Await",
            "HTTP Status Codes",
            "Global Handlers"
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
          "question": "How would you architect a real-time collaborative document editor to resolve concurrent user edits?",
          "category": "System Design",
          "expectedTopics": [
            "CRDT",
            "Operational Transformation",
            "WebSockets",
            "Concurrency"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Describe the technical approach to implementing a micro-frontend architecture for a large enterprise web portal.",
          "category": "Frontend Architecture",
          "expectedTopics": [
            "Micro-frontends",
            "Module Federation",
            "State Isolation",
            "Asset Loading"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How do you design a multi-level caching strategy using Redis while preventing cache stampede and ensuring cache invalidation consistency?",
          "category": "Distributed Systems",
          "expectedTopics": [
            "Redis",
            "Cache Stampede",
            "Cache Invalidation",
            "Write-Through"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "How do you achieve zero-downtime database schema migrations in a high-traffic production application?",
          "category": "DevOps & DB Ops",
          "expectedTopics": [
            "Zero-Downtime",
            "Database Migrations",
            "Blue-Green Deployment",
            "Expand-Contract"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "How would you implement rate limiting and DDoS mitigation strategies at the API Gateway level?",
          "category": "API Management",
          "expectedTopics": [
            "Rate Limiting",
            "Token Bucket",
            "API Gateway",
            "DDoS Mitigation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "How do you diagnose and fix poor Core Web Vitals scores for an asset-heavy web application?",
          "category": "Performance Optimization",
          "expectedTopics": [
            "Core Web Vitals",
            "LCP",
            "CLS",
            "Code Splitting"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How do you implement an event-driven message queue architecture using tools like Kafka or RabbitMQ to decouple services?",
          "category": "Distributed Systems",
          "expectedTopics": [
            "Message Queues",
            "Event-Driven",
            "Kafka",
            "Publish-Subscribe"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "How would you design a multi-tenant backend architecture ensuring strict data isolation between tenants?",
          "category": "System Architecture",
          "expectedTopics": [
            "Multi-tenancy",
            "Data Isolation",
            "Row-Level Security",
            "Database Schemas"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "How do you manage distributed transactions across microservices using the Saga pattern?",
          "category": "Distributed Systems",
          "expectedTopics": [
            "Saga Pattern",
            "Distributed Transactions",
            "Choreography",
            "Orchestration"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "How do Web Workers and Service Workers differ, and how do Service Workers enable offline capability in Progressive Web Apps?",
          "category": "Advanced Web APIs",
          "expectedTopics": [
            "Service Workers",
            "Web Workers",
            "PWA",
            "Caching Strategies"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "How do you profile and eliminate memory leaks in both Node.js runtime environments and browser applications?",
          "category": "Performance & Debugging",
          "expectedTopics": [
            "Memory Leaks",
            "Heap Dumps",
            "Garbage Collection",
            "Chrome DevTools"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
