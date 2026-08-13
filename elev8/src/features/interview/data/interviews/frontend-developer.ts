import { PredefinedInterview } from "../../types/predefined-interview";

export const frontend_developer: PredefinedInterview = {
  "id": "frontend-developer",
  "role": "Frontend Developer",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidates on frontend development core skills, DOM manipulation, framework concepts, browser performance optimization, and scalable client-side architecture.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "Explain the difference between let, const, and var in JavaScript regarding scope and hoisting.",
          "category": "JavaScript Core",
          "expectedTopics": [
            "scoping",
            "hoisting",
            "variable declaration"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "How does the CSS Box Model work, and what is the difference between content-box and border-box?",
          "category": "CSS Core",
          "expectedTopics": [
            "CSS",
            "box model",
            "sizing"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "What is Semantic HTML and why is it important for accessibility and SEO?",
          "category": "HTML & Web Fundamentals",
          "expectedTopics": [
            "HTML5",
            "accessibility",
            "SEO"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What are JavaScript closures and can you provide a basic practical use case for them?",
          "category": "JavaScript Core",
          "expectedTopics": [
            "closures",
            "lexical environment",
            "data privacy"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "Explain the difference between synchronous and asynchronous code execution in JavaScript.",
          "category": "JavaScript Core",
          "expectedTopics": [
            "async",
            "callbacks",
            "promises"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What is event bubbling and event capturing in the DOM event propagation model?",
          "category": "DOM Architecture",
          "expectedTopics": [
            "DOM",
            "event propagation",
            "event delegation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "Describe the core purpose of CSS Flexbox and how justify-content differs from align-items.",
          "category": "CSS Core",
          "expectedTopics": [
            "Flexbox",
            "layout",
            "alignment"
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
          "question": "How does the browser Event Loop process microtasks versus macrotasks?",
          "category": "JavaScript Runtime",
          "expectedTopics": [
            "event loop",
            "microtasks",
            "macrotasks"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Describe how you would optimize a web application's initial load time using code splitting and lazy loading.",
          "category": "Performance Optimization",
          "expectedTopics": [
            "code splitting",
            "lazy loading",
            "bundle size"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "Explain the concept of Virtual DOM and how React or similar libraries perform reconciliation.",
          "category": "Frontend Frameworks",
          "expectedTopics": [
            "Virtual DOM",
            "reconciliation",
            "diffing algorithm"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "Compare CSS Grid and Flexbox, detailing when you would choose one layout system over the other.",
          "category": "CSS Core",
          "expectedTopics": [
            "CSS Grid",
            "Flexbox",
            "responsive layout"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "How do web workers differ from service workers, and in what scenarios would you implement each?",
          "category": "Browser APIs",
          "expectedTopics": [
            "Web Workers",
            "Service Workers",
            "multithreading"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "What strategies can be implemented to mitigate Cross-Site Scripting (XSS) attacks in modern frontend applications?",
          "category": "Web Security",
          "expectedTopics": [
            "XSS",
            "sanitization",
            "Content Security Policy"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Explain the difference between client-side rendering (CSR) and server-side rendering (SSR), including pros and cons.",
          "category": "Architecture",
          "expectedTopics": [
            "CSR",
            "SSR",
            "hydration"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How does Cross-Origin Resource Sharing (CORS) work and how do preflight requests function?",
          "category": "Web Security",
          "expectedTopics": [
            "CORS",
            "preflight",
            "HTTP headers"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "What are custom hooks in React or composition functions in Vue, and how do they aid in logic reuse?",
          "category": "Frontend Frameworks",
          "expectedTopics": [
            "code reuse",
            "stateful logic",
            "component patterns"
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
          "question": "Architect a client-side caching layer for a high-frequency real-time dashboard using IndexedDB and RxJS.",
          "category": "Architecture",
          "expectedTopics": [
            "IndexedDB",
            "RxJS",
            "state management"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "How would you implement a micro-frontend architecture, and what trade-offs exist between build-time and runtime integration?",
          "category": "System Design",
          "expectedTopics": [
            "micro-frontends",
            "module federation",
            "architecture"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "Explain how JavaScript engines perform Garbage Collection and how to detect memory leaks using browser profiling tools.",
          "category": "JavaScript Runtime",
          "expectedTopics": [
            "garbage collection",
            "memory leaks",
            "heap snapshots"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Design a scalable state management architecture for a complex offline-first web application.",
          "category": "System Design",
          "expectedTopics": [
            "offline-first",
            "CRDTs",
            "state sync"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "How do modern browser rendering engines compute layout and composite layers, and how can you ensure 60fps animations?",
          "category": "Performance Optimization",
          "expectedTopics": [
            "rendering pipeline",
            "GPU compositing",
            "layout thrashing"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "Compare WebSockets, Server-Sent Events (SSE), and HTTP Long Polling for low-latency live notifications at scale.",
          "category": "Web APIs & Protocols",
          "expectedTopics": [
            "WebSockets",
            "SSE",
            "real-time streaming"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How would you design a custom design system component library with accessibility (WCAG AAA) and sub-pixel rendering in mind?",
          "category": "UI Design Systems",
          "expectedTopics": [
            "WCAG",
            "design tokens",
            "component architecture"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "Deep dive into JavaScript's Prototype chain, object delegation, and V8 hidden classes optimization.",
          "category": "JavaScript Runtime",
          "expectedTopics": [
            "prototypes",
            "V8 engine",
            "hidden classes"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Design a robust real-time collaborative text editor infrastructure on the client side using CRDTs or Operational Transformation.",
          "category": "System Design",
          "expectedTopics": [
            "CRDT",
            "Operational Transformation",
            "concurrency"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "Explain how WebAssembly (Wasm) can be integrated into a frontend build pipeline to accelerate computationally heavy tasks.",
          "category": "Web Standards",
          "expectedTopics": [
            "WebAssembly",
            "performance",
            "build pipelines"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "How would you build an automated Web Vitals performance monitoring and error tracking pipeline in a large multi-page application?",
          "category": "Performance & Observability",
          "expectedTopics": [
            "Core Web Vitals",
            "telemetry",
            "error tracking"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
