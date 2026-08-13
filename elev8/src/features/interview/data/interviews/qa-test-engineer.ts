import { PredefinedInterview } from "../../types/predefined-interview";

export const qa_test_engineer: PredefinedInterview = {
  "id": "qa-test-engineer",
  "role": "QA / Test Engineer",
  "type": "TECHNICAL",
  "description": "Evaluates technical quality assurance concepts, test automation strategies, API and UI testing techniques, performance testing, and quality engineering trade-offs across different skill levels.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "What is the difference between functional and non-functional testing, and why are both necessary?",
          "category": "Testing Fundamentals",
          "expectedTopics": [
            "Functional Testing",
            "Non-Functional Testing",
            "QA Concepts"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "How do you differentiate between defect severity and defect priority? Provide examples for each combination.",
          "category": "Defect Management",
          "expectedTopics": [
            "Defect Severity",
            "Defect Priority",
            "Bug Triage"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "Explain the key differences between Smoke Testing and Sanity Testing.",
          "category": "Testing Fundamentals",
          "expectedTopics": [
            "Smoke Testing",
            "Sanity Testing",
            "Verification"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "Explain the common HTTP status code ranges (2xx, 4xx, 5xx) and what they signify during API testing.",
          "category": "API Testing",
          "expectedTopics": [
            "REST API",
            "HTTP Status Codes",
            "API Testing"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "What are Equivalence Partitioning and Boundary Value Analysis? How do you apply them to test input fields?",
          "category": "Test Design",
          "expectedTopics": [
            "Test Design Techniques",
            "Boundary Value Analysis",
            "Equivalence Partitioning"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What are the essential components that make up a clear and effective bug report?",
          "category": "Defect Management",
          "expectedTopics": [
            "Bug Reporting",
            "Defect Tracking",
            "Reproducibility"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "Explain the difference between Regression Testing and Re-testing.",
          "category": "Testing Fundamentals",
          "expectedTopics": [
            "Regression Testing",
            "Re-testing",
            "Quality Control"
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
          "question": "How do you structure an automated API test suite using tools like Postman or RestAssured, including assertions and environment variables?",
          "category": "API Automation",
          "expectedTopics": [
            "API Automation",
            "REST API",
            "Assertions"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "How do CSS Selectors compare to XPath for web element identification, and when should you prefer one over the other?",
          "category": "Web Automation",
          "expectedTopics": [
            "Locators",
            "Selenium",
            "Cypress"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "How do you identify, debug, and mitigate flaky automated tests in a continuous integration environment?",
          "category": "Test Automation",
          "expectedTopics": [
            "Flaky Tests",
            "CI/CD",
            "Test Reliability"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "How would you test a microservices architecture where components communicate asynchronously using Kafka or RabbitMQ?",
          "category": "Integration Testing",
          "expectedTopics": [
            "Microservices",
            "Asynchronous Testing",
            "Event-Driven Systems"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "Explain the Page Object Model (POM) design pattern and how it improves maintainability in automation frameworks.",
          "category": "Automation Architecture",
          "expectedTopics": [
            "Page Object Model",
            "Maintainability",
            "Design Patterns"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "How do you perform database validation and verify data integrity using SQL queries during backend testing?",
          "category": "Database Testing",
          "expectedTopics": [
            "Database Testing",
            "SQL",
            "Data Integrity"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "How would you approach load and stress testing for an e-commerce checkout flow prior to a major sale event?",
          "category": "Performance Testing",
          "expectedTopics": [
            "Load Testing",
            "Concurrency",
            "Performance Metrics"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How do you integrate automated test suites into a CI/CD pipeline using Jenkins or GitHub Actions to enforce quality gates?",
          "category": "DevOps & QA",
          "expectedTopics": [
            "CI/CD Pipeline",
            "Quality Gates",
            "DevOps"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "Explain how Contract Testing works between microservices using tools like Pact, and why it is useful.",
          "category": "API & Microservices",
          "expectedTopics": [
            "Contract Testing",
            "Pact",
            "Consumer-Driven Contracts"
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
          "question": "How would you design and architect a scalable, cross-browser parallel test automation framework from scratch for an enterprise application?",
          "category": "Automation Architecture",
          "expectedTopics": [
            "Framework Architecture",
            "Parallel Execution",
            "Scalability"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "How do you implement chaos engineering testing strategies to validate fault tolerance and resilience in distributed cloud systems?",
          "category": "Resilience Testing",
          "expectedTopics": [
            "Chaos Engineering",
            "Fault Injection",
            "Resilience Testing"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How do you design a comprehensive performance testing strategy combining Load, Stress, and Endurance testing using tools like JMeter or k6?",
          "category": "Performance Engineering",
          "expectedTopics": [
            "Performance Testing",
            "JMeter",
            "k6"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "How do you test for critical web security vulnerabilities like SQL Injection, XSS, and CSRF as part of a secure QA process?",
          "category": "Security Testing",
          "expectedTopics": [
            "OWASP",
            "Security Testing",
            "Vulnerability Scanning"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "How do you handle dynamic test data generation and state isolation at scale across staging and production-like environments?",
          "category": "Test Data Management",
          "expectedTopics": [
            "Test Data Management",
            "Database Mocking",
            "Test Isolation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "How do you successfully implement Shift-Left and Shift-Right testing strategies across an organization's software development lifecycle?",
          "category": "Quality Strategy",
          "expectedTopics": [
            "Shift-Left Testing",
            "Shift-Right Testing",
            "Quality Engineering"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How do you utilize APM and observability tools like Datadog or New Relic to pinpoint performance bottlenecks during automated load runs?",
          "category": "Performance & Observability",
          "expectedTopics": [
            "APM Tools",
            "Observability",
            "Performance Bottlenecks"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "How would you design a service virtualization or API mocking strategy for third-party dependencies during automated integration testing?",
          "category": "Test Infrastructure",
          "expectedTopics": [
            "Service Virtualization",
            "WireMock",
            "Mocking Strategies"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Analyze the trade-offs of the Test Pyramid model vs the Testing Trophy model in modern web application development.",
          "category": "Testing Strategy",
          "expectedTopics": [
            "Test Pyramid",
            "Testing Trophy",
            "Automation Trade-offs"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "How do you implement automated visual regression testing to detect layout bugs across dynamic web pages and viewports?",
          "category": "UI Automation",
          "expectedTopics": [
            "Visual Regression",
            "Dynamic DOM",
            "Applitools"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "How would you optimize and scale a test suite of 5,000+ UI and API tests that currently takes hours to execute in CI/CD?",
          "category": "Test Optimization",
          "expectedTopics": [
            "Test Suite Optimization",
            "Parallelization",
            "CI/CD Scaling"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
